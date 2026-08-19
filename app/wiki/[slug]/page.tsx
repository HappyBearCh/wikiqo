import type { Metadata } from "next";
import Image from "next/image";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { getArticleHtml, getFileInfo, getSummary, wikipediaUrlFor } from "@/lib/wikipedia";
import { sanitizeWikiHtml } from "@/lib/sanitize";
import { articleHref, isFileNamespace, isNonArticleNamespace, titleFromSlug } from "@/lib/links";
import { isRenderableTitle } from "@/content/popular-titles";
import { OG_BASE } from "@/lib/site";
import { parseArticleStructure } from "@/lib/structure";
import { keywordsFromHtml } from "@/lib/keywords";
import ArticleStructureLazy from "@/components/ArticleStructureLazy";
import TextBanner from "@/components/TextBanner";

// This route is deliberately left `ƒ (Dynamic)` — do not add a route-level
// `revalidate` + empty `generateStaticParams` here. That was tried, measured,
// and reverted.
//
// ISR pays off when a bounded set of pages is read repeatedly. This route is
// the opposite: the traffic hitting it is a crawler enumerating Wikipedia's
// title space, and 95% of the paths it requests are seen exactly once and never
// again. Caching a page that is never re-read is pure cost — the write is spent
// and the read never comes.
//
// Measured over the 19 hours the route-level revalidate was live: 698,070 ISR
// writes against 11,320 ISR reads, with every production log line still showing
// `cache=MISS`. Next writes ~13 cache entries per render here (page HTML, RSC
// payload, and the per-segment entries), so the crawl's ~2,700 renders/hour
// turned into ~36,000 writes/hour — about $100/month of ISR writes to serve a
// hit rate near zero. Function invocations did not move: 65,106 in 24h, against
// 67,111 before the change.
//
// The fetch-level `revalidate: ONE_YEAR` in lib/wikipedia.ts stays. That caches
// Wikipedia's responses rather than our renders, and the Parsoid bodies are
// large enough that most of them fall out of the Data Cache anyway.
//
// If the crawl is ever bounded (see the sitemap's popular-title set), caching
// this route becomes correct again — but only together with
// `dynamicParams: false`, so the cached set stays finite.

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Whether this request is a navigation from somewhere else on wikiqo — in
 * practice, a reader clicking a search result or an in-article link.
 *
 * This is the escape hatch on the renderable-title gate. Search returns any
 * article Wikipedia has, so gating on the popular set alone would leave most
 * search results dead. A same-origin Referer distinguishes "a person clicked
 * this" from "something is walking the title space", because a crawler
 * enumerating URLs has no page to have come from.
 *
 * It is a heuristic and it is spoofable, and it is worth what it costs: a
 * crawler that starts forging same-origin Referers can be dealt with then. Note
 * the failure mode is a 404 on an uncommon article opened without a referrer
 * (a shared link, a new tab), not a wrong page.
 */
async function cameFromThisSite(): Promise<boolean> {
  const h = await headers();
  const referer = h.get("referer");
  const host = h.get("host");
  if (!referer || !host) return false;
  try {
    return new URL(referer).host === host;
  } catch {
    return false;
  }
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const title = titleFromSlug(slug);

  // File:/Image:/Media: pages have no REST summary — describe them directly and
  // point search engines at the original Wikipedia file page.
  if (isFileNamespace(title)) {
    const name = title.replace(/^(File|Image|Media)\s*:/i, "");
    const description = `${name} — a media file from Wikimedia Commons, with its description, author, and licence.`;
    return {
      title,
      description,
      alternates: { canonical: wikipediaUrlFor(title) },
      openGraph: { ...OG_BASE, type: "article", title, description },
    };
  }

  // Non-article namespaces resolve to nothing renderable, so skip the summary
  // fetch entirely and go straight to the not-found head tags.
  if (isNonArticleNamespace(title)) {
    return { title: "Article not found", robots: { index: false, follow: true } };
  }

  // Same short-circuit for titles outside the renderable set — bail before the
  // summary fetch, so a rejected request never touches Wikipedia. The referer
  // check has to match the one in the page component below, or a reader
  // arriving from search would get a rendered article under a "not found"
  // title. See content/popular-titles.ts for why this gate exists.
  if (!isRenderableTitle(title) && !(await cameFromThisSite())) {
    return { title: "Article not found", robots: { index: false, follow: true } };
  }

  const summary = await getSummary(title);

  // The page then calls notFound(); the head tags actually come from
  // not-found.tsx in this segment.
  if (!summary) {
    return { title: "Article not found", robots: { index: false, follow: true } };
  }

  const description = summary.description ?? summary.extract?.slice(0, 200);
  const image = summary.thumbnail?.source ?? summary.originalimage?.source;

  return {
    title: summary.title,
    description,
    // Required attribution for CC BY-SA reuse: point search engines at the
    // original Wikipedia article rather than treating this mirror as the
    // canonical source.
    alternates: {
      canonical: wikipediaUrlFor(summary.title),
    },
    openGraph: {
      // Spread first: Next replaces the layout's openGraph wholesale here, so
      // without this the shared siteName/locale/image would be lost on every
      // article. The lead image then overrides the generic card — but only when
      // the article actually has one, hence the conditional spread.
      ...OG_BASE,
      ...(image ? { images: [{ url: image, alt: summary.title }] } : {}),
      type: "article",
      url: articleHref(summary.title),
      title: summary.title,
      description,
      // Wikipedia's last-edit timestamp for this revision.
      modifiedTime: summary.timestamp,
    },
    // Wikipedia lead images are portrait as often as not; a small square card
    // crops them far better than a wide one. Title/description/image all fall
    // back to the og: tags above.
    twitter: { card: image ? "summary_large_image" : "summary" },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const title = titleFromSlug(slug);

  // Media-namespace pages (File:/Image:/Media:) aren't articles — there's no
  // Parsoid body to fetch, so we embed the real Wikipedia file page in an
  // iframe rather than 404 on a missing summary.
  if (isFileNamespace(title)) {
    return <FileView title={title} />;
  }

  // Talk:, Template talk:, Category:, Portal: and friends have no article body.
  // Bail before the fetches rather than paying two Wikipedia round-trips to
  // learn there's nothing to render — the crawl hitting this route walks
  // thousands of them.
  if (isNonArticleNamespace(title)) {
    notFound();
  }

  // The cost gate. Everything above this line is a string test; everything
  // below it is two Wikipedia round-trips, a sanitize pass, a structure parse,
  // a keyword pass and a full render. Automated traffic enumerating Wikipedia's
  // title space lands outside the renderable set essentially always, so it is
  // turned away here having cost an invocation and nothing more.
  //
  // See content/popular-titles.ts for the measurements behind this and for how
  // to widen or remove it.
  if (!isRenderableTitle(title) && !(await cameFromThisSite())) {
    notFound();
  }

  const [summary, html] = await Promise.all([getSummary(title), getArticleHtml(title)]);

  if (!summary || !html) {
    notFound();
  }

  const sanitizedHtml = sanitizeWikiHtml(html);
  const sanitizedDisplayTitle = sanitizeWikiHtml(summary.displaytitle);
  const sourceUrl = wikipediaUrlFor(summary.title);
  const image = summary.originalimage ?? summary.thumbnail;
  // Section outline, parsed from the same sanitized HTML the reader sees, for
  // the D3 structure map in the sidebar.
  const structure = parseArticleStructure(summary.title, sanitizedHtml);
  const hasStructure = structure.children.length > 0;
  // Salient terms from the article body, for the text-viz banner.
  const words = keywordsFromHtml(sanitizedHtml);

  return (
    <div className="shell py-10">
      <TextBanner words={words} title={summary.title} initial="cloud" />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-14">
        <article className="min-w-0">
          <header className="relative mb-8 border-b border-border pb-6">
            {/* Rainbow rule that runs under the heading. */}
            <span
              aria-hidden
              className="absolute -bottom-px left-0 h-1 w-28 rounded-full"
              style={{ background: "var(--rainbow)" }}
            />
            <h1
              className="font-serif text-4xl font-bold tracking-tight sm:text-5xl"
              dangerouslySetInnerHTML={{ __html: sanitizedDisplayTitle }}
            />
            {summary.description && (
              <p className="mt-3 text-lg text-muted">{summary.description}</p>
            )}
          </header>

          {/* Lead image and summary surface inline on small screens, where the
              sidebar collapses below the article. */}
          {image && (
            <div className="img-zoom mb-8 overflow-hidden rounded-2xl border border-border lg:hidden">
              <Image
                src={image.source}
                alt={summary.title}
                width={image.width}
                height={image.height}
                className="img-zoom__media w-full object-cover"
                priority
                unoptimized
              />
            </div>
          )}

          {summary.extract && (
            <p
              className="mb-8 rounded-r-xl border-l-4 bg-surface py-3 pl-4 pr-4 text-lg leading-8 text-foreground/80 italic"
              style={{ borderImage: "var(--rainbow) 1", borderImageSlice: 1 }}
            >
              {summary.extract}
            </p>
          )}

          <div
            className="wiki-content prose prose-lg prose-neutral dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
          />

          <footer className="mt-12 rounded-2xl border border-border bg-surface px-5 py-4 text-sm text-muted">
            <p>
              This article is adapted from{" "}
              <a
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent underline"
              >
                &ldquo;{summary.title}&rdquo; on Wikipedia
              </a>
              , by Wikipedia contributors, used under the{" "}
              <a
                href="https://creativecommons.org/licenses/by-sa/4.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Creative Commons Attribution-ShareAlike 4.0 License
              </a>
              .{" "}
              <a
                href={`${sourceUrl}?action=history`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                View authorship history
              </a>
              .
            </p>
          </footer>
        </article>

        {/* Sticky sidebar — fills the space freed up by the wide shell on large
            screens, mirroring Wikipedia's own infobox without crowding the
            reading column. */}
        <aside className="hidden lg:block">
          <div className="sticky top-20 flex flex-col gap-5">
            {image && (
              <div className="img-zoom overflow-hidden rounded-2xl border border-border">
                <Image
                  src={image.source}
                  alt={summary.title}
                  width={image.width}
                  height={image.height}
                  className="img-zoom__media w-full object-cover"
                  priority
                  unoptimized
                />
              </div>
            )}

            <div className="overflow-hidden rounded-2xl border border-border bg-surface">
              <div className="h-1.5 w-full" style={{ background: "var(--rainbow)" }} />
              <div className="p-5">
              <h2 className="font-serif text-base font-semibold text-foreground">
                About this article
              </h2>
              {summary.description && (
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {summary.description}
                </p>
              )}
              </div>
            </div>

            {hasStructure && (
              <div className="overflow-hidden rounded-2xl border border-border bg-surface">
                <div className="h-1.5 w-full" style={{ background: "var(--rainbow)" }} />
                <div className="p-5">
                  <h2 className="font-serif text-base font-semibold text-foreground">
                    Article structure
                  </h2>
                  <p className="mt-1 text-xs text-muted">
                    Click a section to jump to it.
                  </p>
                  <div className="mt-3">
                    <ArticleStructureLazy root={structure} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}

/**
 * Renders a Wikipedia media page (File:/Image:/Media:). These pages have no
 * article body to mirror, so we resolve the title to its underlying
 * upload.wikimedia.org asset via the Action API and display the media directly
 * — an image, audio/video player, or a download link by MIME type.
 */
async function FileView({ title }: { title: string }) {
  const [info, sourceUrl] = [await getFileInfo(title), wikipediaUrlFor(title)];

  if (!info) {
    notFound();
  }

  const isImage = info.mime.startsWith("image/");
  const isAudio = info.mime.startsWith("audio/");
  const isVideo = info.mime.startsWith("video/");

  return (
    <div className="shell py-10">
      <header className="relative mb-6 border-b border-border pb-6">
        <span
          aria-hidden
          className="absolute -bottom-px left-0 h-1 w-28 rounded-full"
          style={{ background: "var(--rainbow)" }}
        />
        <h1 className="font-serif text-3xl font-bold tracking-tight break-words sm:text-4xl">
          {title.replace(/^(File|Image|Media)\s*:/i, "")}
        </h1>
      </header>

      <figure className="m-0">
        <div className="img-zoom flex justify-center overflow-hidden rounded-2xl border border-border bg-surface">
          {isImage ? (
            <Image
              src={info.thumbUrl ?? info.url}
              alt={title}
              width={info.width}
              height={info.height}
              className="img-zoom__media h-auto w-full max-w-full object-contain"
              sizes="(min-width: 1024px) 60rem, 100vw"
              priority
              unoptimized
            />
          ) : isAudio ? (
            <audio controls src={info.url} className="w-full p-6">
              Your browser does not support the audio element.
            </audio>
          ) : isVideo ? (
            <video controls src={info.url} className="h-auto w-full max-w-full">
              Your browser does not support the video element.
            </video>
          ) : (
            <a
              href={info.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-10 font-medium text-accent underline"
            >
              Download this file ({info.mime})
            </a>
          )}
        </div>

        <figcaption className="mt-4 space-y-2 text-sm text-muted">
          {info.description && (
            <div
              className="leading-relaxed [&_a]:underline"
              dangerouslySetInnerHTML={{ __html: sanitizeWikiHtml(info.description) }}
            />
          )}
          <p className="flex flex-wrap gap-x-3 gap-y-1">
            {info.artist && (
              <span
                className="[&_a]:underline"
                dangerouslySetInnerHTML={{ __html: sanitizeWikiHtml(info.artist) }}
              />
            )}
            {info.license && <span>{info.license}</span>}
          </p>
          <p>
            <a
              href={info.descriptionUrl || sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent underline"
            >
              File page on Wikipedia
            </a>
            {" · "}
            <a
              href={info.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Original file
            </a>
          </p>
        </figcaption>
      </figure>
    </div>
  );
}
