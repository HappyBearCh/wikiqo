import type { Metadata } from "next";
import Link from "next/link";
import { searchArticles } from "@/lib/wikipedia";
import { sanitizeWikiHtml } from "@/lib/sanitize";
import { articleHref } from "@/lib/links";
import { OG_BASE } from "@/lib/site";
import WordCountChartLazy from "@/components/WordCountChartLazy";
import TextBanner from "@/components/TextBanner";
import FeaturedGrid from "@/components/FeaturedGrid";
import { keywordsFromHtml } from "@/lib/keywords";

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

const DESCRIPTION =
  "Search Wikipedia on wikiqo. Type a title or a phrase and read the matching articles in a clean, uncluttered reading column.";

export async function generateMetadata({ searchParams }: SearchPageProps): Promise<Metadata> {
  const { q } = await searchParams;
  const query = q?.trim();

  // Result pages live in an unbounded ?q=… URL space — a classic crawler trap.
  // noindex them so search engines don't expand/index every query variation
  // (each is an uncached function call). The bare /search landing page, which is
  // in the sitemap, stays indexable. Both point their canonical at bare /search
  // so any result URL that does get crawled consolidates onto the one page
  // that's actually worth indexing.
  return {
    title: query ? `Search results for “${query}”` : "Search Wikipedia",
    description: query
      ? `Wikipedia articles matching “${query}”, read on wikiqo.`
      : DESCRIPTION,
    alternates: { canonical: "/search" },
    // Spread conditionally: setting `robots: undefined` would *replace* the
    // layout's directives rather than inherit them, silently dropping
    // max-image-preview/max-snippet from the bare landing page.
    ...(query ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      ...OG_BASE,
      type: "website",
      url: "/search",
      title: query ? `Search results for “${query}”` : "Search Wikipedia",
      description: DESCRIPTION,
    },
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";

  if (!query) {
    return (
      <div className="shell py-16">
        <div className="mx-auto max-w-5xl">
          <h1 className="font-serif text-3xl font-semibold tracking-tight">
            Search <span className="text-rainbow">Wikipedia</span>
          </h1>
          <p className="mt-2 text-muted">
            Use the search bar above to find an article, or start browsing the
            catalogue below.
          </p>

          <section className="mt-12">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
              Browse the catalogue
            </h2>
            <div className="mt-6">
              <FeaturedGrid />
            </div>
          </section>
        </div>
      </div>
    );
  }

  let results;
  let failed = false;
  try {
    results = await searchArticles(query);
  } catch (error) {
    console.error("Search failed:", error);
    failed = true;
  }

  // Salient terms across the matching results, for the text-viz banner. The
  // snippets carry <span class="searchmatch"> markup, so go through the HTML path.
  const words =
    !failed && results && results.length > 0
      ? keywordsFromHtml(
          results.map((r) => `${r.title}. ${r.snippet}`).join(" "),
        )
      : [];

  return (
    <div className="shell py-10">
      <div className="mx-auto max-w-4xl">
        {words.length > 0 && (
          <TextBanner words={words} title={query} initial="ribbon" />
        )}
        <p className="text-sm text-muted">
          {!failed && results
            ? `${results.length} result${results.length === 1 ? "" : "s"}`
            : "Results"}
        </p>
        <h1 className="mt-1 font-serif text-3xl font-semibold tracking-tight">
          Results for <span className="text-rainbow">&ldquo;{query}&rdquo;</span>
        </h1>

        {failed && (
          <p className="mt-6 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-muted">
            Wikipedia couldn&apos;t be reached right now. Please try again in a moment.
          </p>
        )}

        {!failed && results && results.length === 0 && (
          <p className="mt-6 text-muted">No articles matched your search.</p>
        )}

        {!failed && results && results.length > 0 && (
          <section className="mt-6 overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="h-1.5 w-full" style={{ background: "var(--rainbow)" }} />
            <div className="p-5">
              <h2 className="font-serif text-base font-semibold text-foreground">
                Result lengths
              </h2>
              <p className="mt-1 text-xs text-muted">
                Word count per matching article — click a bar to open it.
              </p>
              <div className="mt-3">
                <WordCountChartLazy
                  data={results.map((r) => ({ title: r.title, wordcount: r.wordcount }))}
                />
              </div>
            </div>
          </section>
        )}

        {!failed && results && results.length > 0 && (
          <ul className="mt-6 flex flex-col gap-2">
            {results.map((result) => (
              <li key={result.pageid}>
                <Link
                  href={articleHref(result.title)}
                  // Next prefetches links as they scroll into view, and each
                  // prefetch of an uncached slug is a full article render:
                  // fetching ~2 MB of Parsoid HTML and sanitizing it. A single
                  // search would render all 20 results, nearly all of which the
                  // reader never opens. Unlike the featured shelf — a fixed set
                  // of 9 that stays warm in the ISR cache — result slugs are
                  // unbounded, so these prefetches are cold far more often than
                  // not. They also count against the firewall's per-IP article
                  // budget. Navigation still feels fine: the article route is
                  // statically cached, so a click is a CDN hit for anything
                  // already rendered.
                  prefetch={false}
                  className="group relative flex gap-4 overflow-hidden rounded-2xl border border-transparent px-4 py-4 transition-colors hover:border-border hover:bg-surface"
                >
                  <span
                    aria-hidden
                    className="mt-1 h-0 w-1 shrink-0 self-stretch rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100"
                    style={{ background: "var(--rainbow)" }}
                  />
                  <span className="min-w-0">
                  <span className="font-serif text-lg font-semibold tracking-tight text-foreground group-hover:text-accent">
                    {result.title}
                  </span>
                  <p
                    className="mt-1 text-sm leading-relaxed text-muted [&_span.searchmatch]:font-semibold [&_span.searchmatch]:text-foreground"
                    // Wikipedia's search snippet HTML only ever contains <span class="searchmatch">
                    // highlight markers, but it's run through the same sanitizer as full
                    // article bodies before being injected, for defense in depth.
                    dangerouslySetInnerHTML={{ __html: sanitizeWikiHtml(result.snippet) }}
                  />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
