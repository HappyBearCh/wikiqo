import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { getArticleHtml, getFileInfo, getSummary } from "@/lib/wikipedia";
import { sanitizeWikiHtml } from "@/lib/sanitize";
import {
  articleHref,
  isFileNamespace,
  isNonArticleNamespace,
  rewrittenHref,
  titleFromSlug,
  wikipediaUrlFor,
} from "@/lib/links";
import { isRenderableTitle } from "@/content/popular-titles";
import { WIKIQORGI_CATALOG } from "@/content/wikiqorgi/catalog";
import { findBySourceTitle } from "@/lib/shelf-search";
import { OG_BASE } from "@/lib/site";
import { parseArticleStructure } from "@/lib/structure";
import { keywordsFromHtml } from "@/lib/keywords";
import ArticleStructureLazy from "@/components/ArticleStructureLazy";
import MobileContents from "@/components/MobileContents";
import TextBanner from "@/components/TextBanner";

// Keep this route `ƒ (Dynamic)` — do not add a route-level `revalidate` +
// empty `generateStaticParams` here. That was tried, measured, and reverted.
//
// `force-dynamic` below is what holds that now. It used to be implicit: the
// route called headers() to read the Referer, and a dynamic API opts a segment
// out of caching on its own. That call is gone (see the note above
// generateMetadata), and without the export Next would derive the segment's
// revalidate from the fetches in lib/wikipedia.ts — which ask for
// `revalidate: ONE_YEAR` — and start caching every rendered path for a year.
// That is precisely the failure measured here.
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
export const dynamic = "force-dynamic";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

/**
 * There used to be an escape hatch here: a request carrying a same-origin
 * `Referer` was rendered whatever its title, on the reasoning that a crawler
 * enumerating URLs has no page to have come from and so could not produce one.
 *
 * It was measured, and it was the whole bill. In 24 hours the route took 54,164
 * requests across 45,642 distinct titles and returned 200 to 40,415 of them —
 * titles like `RMAS_Goosander` and `Paya_Rumput` that nothing on this site
 * links to. So the client does send a same-origin Referer; it also clears the
 * Vercel challenge page, so it is running a browser engine and can produce any
 * header a check might ask for. Nothing request-shaped was going to separate it
 * from a reader.
 *
 * The popular set is therefore the whole gate now, and a title outside it is
 * handed to Wikipedia instead of rendered. proxy.ts makes the same decision one
 * hop earlier, on the edge, so in the normal case a declined request never
 * reaches this file. The checks below are what guarantee the behaviour; the
 * proxy is what makes it cheap.
 */

/**
 * Fetches the two Wikipedia documents an article renders from, returning null
 * if either is missing or Wikipedia declines to serve it.
 *
 * The decline case is not hypothetical: 9,337 requests in that same 24-hour
 * window came back 429 Too Many Requests from Wikipedia — the crawl was costing
 * them enough to be rate-limited — and each one threw, becoming a 500 rendered
 * through error.tsx. That is the most expensive possible answer to a request we
 * were never going to satisfy. Bounding the crawl is what stops them; degrading
 * the rest to a redirect is both cheaper and more use to a reader than an error
 * page.
 */
async function fetchArticle(title: string) {
  try {
    const [summary, html] = await Promise.all([getSummary(title), getArticleHtml(title)]);
    return summary && html ? { summary, html } : null;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const title = titleFromSlug(slug);

  // The gate, first thing and ahead of every other branch, so nothing below it
  // runs for a title we aren't mirroring. It has to sit in the same place and
  // read the same way as the one in the page component, or a reader would get a
  // rendered article under "not found" head tags. proxy.ts normally redirects
  // these before the route is entered at all.
  if (!isRenderableTitle(title)) {
    redirect(wikipediaUrlFor(title));
  }

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
  // fetch entirely and go straight to the not-found head tags. Unreachable via
  // the gate above (the popular set holds no namespaced titles), kept because
  // the gate is a policy that can widen and this is a fact about the namespace.
  if (isNonArticleNamespace(title)) {
    return { title: "Article not found", robots: { index: false, follow: true } };
  }

  const summary = await getSummary(title).catch(() => null);

  // The page then redirects to Wikipedia; these head tags are only ever seen by
  // a client that ignores the redirect.
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

  // The cost gate, and now the only one. Everything above this line is a string
  // test; everything below it is two Wikipedia round-trips, a sanitize pass, a
  // structure parse, a keyword pass and a full render. A crawler enumerating
  // Wikipedia's title space lands outside the renderable set essentially
  // always, and is sent to the article it was after on Wikipedia itself, which
  // is where this page's canonical points anyway.
  //
  // See content/popular-titles.ts for the measurements behind this and for how
  // to widen or remove it.
  if (!isRenderableTitle(title)) {
    redirect(wikipediaUrlFor(title));
  }

  // Media-namespace pages (File:/Image:/Media:) aren't articles — there's no
  // Parsoid body to fetch, so we embed the real Wikipedia file page in an
  // iframe rather than 404 on a missing summary.
  //
  // Reachable only if a File: title is added to the popular set by hand. The
  // generated set holds no namespaced titles, and nothing here links to one any
  // more — lib/sanitize.ts sends Wikipedia's own /wiki/File:… hrefs off-site
  // along with the rest of the link graph.
  if (isFileNamespace(title)) {
    return <FileView title={title} />;
  }

  // Talk:, Template talk:, Category:, Portal: and friends have no article body.
  // Same reachability note as above: the gate already turns these away, and
  // this stays as a statement about the namespace rather than about the gate.
  if (isNonArticleNamespace(title)) {
    notFound();
  }

  const article = await fetchArticle(title);

  // Missing on Wikipedia, or Wikipedia declined to serve it. Either way the
  // reader is better off there than on an error page here, and we would rather
  // pay for a redirect than for a render. Called outside fetchArticle's
  // try/catch: redirect() signals by throwing.
  if (!article) {
    redirect(wikipediaUrlFor(title));
  }

  const { summary, html } = article;

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
  // wikiqorgi links every original to the Wikipedia article it covers; this is
  // the link back, so a reader of the mirror learns the rewrite exists. Read
  // from the generated catalog, not content/wikiqorgi, to keep the shelf's
  // prose out of this dynamic route's bundle.
  const rewrite =
    findBySourceTitle(WIKIQORGI_CATALOG, summary.title) ??
    findBySourceTitle(WIKIQORGI_CATALOG, title);

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

          {rewrite && (
            <Link
              href={rewrittenHref(rewrite.slug)}
              className="group mb-8 flex items-start gap-4 rounded-2xl border border-border bg-surface p-4 transition-colors hover:border-accent sm:p-5"
            >
              <span
                aria-hidden
                className="mt-1 h-10 w-1.5 shrink-0 rounded-full"
                style={{ background: "var(--rainbow)" }}
              />
              <span className="min-w-0">
                <span className="block font-mono text-[11px] uppercase tracking-widest text-muted">
                  We wrote our own article on this
                </span>
                <span className="mt-1 block font-serif text-lg font-semibold leading-snug text-foreground group-hover:text-accent">
                  {rewrite.title}
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-muted">
                  {rewrite.dek}{" "}
                  <span className="whitespace-nowrap font-semibold text-accent">
                    Read it on wikiqorgi <span aria-hidden>&rarr;</span>
                  </span>
                </span>
              </span>
            </Link>
          )}

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

          <MobileContents root={structure} />

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
