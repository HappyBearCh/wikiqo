import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getArticleHtml, getSummary } from "@/lib/wikipedia";
import { sanitizeWikiHtml } from "@/lib/sanitize";
import { articleHref, rewrittenHref, titleFromSlug, wikipediaUrlFor } from "@/lib/links";
import { isRenderableTitle } from "@/content/popular-titles";
import { WIKIQORGI_CATALOG } from "@/content/wikiqorgi/catalog";
import { findBySourceTitle } from "@/lib/shelf-search";
import { OG_BASE } from "@/lib/site";
import { parseArticleStructure } from "@/lib/structure";
import TableOfContents from "@/components/TableOfContents";

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
  // the table of contents.
  const structure = parseArticleStructure(summary.title, sanitizedHtml);
  // wikiqorgi links every original to the Wikipedia article it covers; this is
  // the link back, so a reader of the mirror learns the rewrite exists. Read
  // from the generated catalog, not content/wikiqorgi, to keep the shelf's
  // prose out of this dynamic route's bundle.
  const rewrite =
    findBySourceTitle(WIKIQORGI_CATALOG, summary.title) ??
    findBySourceTitle(WIKIQORGI_CATALOG, title);

  return (
    <div className="shell py-10 sm:py-12">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-16">
        <article className="min-w-0 max-w-3xl">
          <header className="mb-8">
            <h1
              className="font-serif text-4xl font-bold tracking-tight sm:text-5xl"
              dangerouslySetInnerHTML={{ __html: sanitizedDisplayTitle }}
            />
            {summary.description && (
              <p className="mt-3 text-lg text-muted">{summary.description}</p>
            )}
          </header>

          {rewrite && (
            <Link href={rewrittenHref(rewrite.slug)} className="card mb-8 p-4 sm:p-5">
              <span className="eyebrow">We wrote our own article on this</span>
              <span className="mt-1.5 block font-serif text-lg font-semibold leading-snug text-foreground">
                {rewrite.title}
              </span>
              <span className="mt-1 block text-sm leading-relaxed text-muted">{rewrite.dek}</span>
              <span className="mt-3 text-sm font-semibold text-accent">
                Read our article <span aria-hidden>&rarr;</span>
              </span>
            </Link>
          )}

          {/* On small screens the sidebar is gone, so the lead image sits here. */}
          {image && (
            <div className="mb-8 overflow-hidden rounded-xl border border-border lg:hidden">
              <Image
                src={image.source}
                alt={summary.title}
                width={image.width}
                height={image.height}
                className="w-full object-cover"
                priority
                unoptimized
              />
            </div>
          )}

          {summary.extract && (
            <p className="mb-8 text-lg leading-8 text-foreground/85">{summary.extract}</p>
          )}

          <TableOfContents root={structure} variant="collapsible" />

          <div
            className="wiki-content prose prose-lg prose-neutral dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
          />

          <footer className="mt-12 border-t border-border pt-6 text-sm leading-relaxed text-muted">
            <p>
              Adapted from{" "}
              <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="underline">
                &ldquo;{summary.title}&rdquo; on Wikipedia
              </a>{" "}
              by Wikipedia contributors, under the{" "}
              <a
                href="https://creativecommons.org/licenses/by-sa/4.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                CC BY-SA 4.0 licence
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

        {/* Desktop sidebar: the lead image, then a section list that stays in
            view while reading and scrolls on its own if it is long. */}
        <aside className="hidden lg:block">
          {image && (
            <div className="mb-8 overflow-hidden rounded-xl border border-border">
              <Image
                src={image.source}
                alt={summary.title}
                width={image.width}
                height={image.height}
                className="w-full object-cover"
                priority
                unoptimized
              />
            </div>
          )}
          <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pb-4">
            <TableOfContents root={structure} variant="sidebar" />
          </div>
        </aside>
      </div>
    </div>
  );
}
