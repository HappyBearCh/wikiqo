import type { Metadata } from "next";
import Link from "next/link";
import { searchArticles } from "@/lib/wikipedia";
import { sanitizeWikiHtml } from "@/lib/sanitize";
import { articleHref, rewrittenHref, wikipediaUrlFor } from "@/lib/links";
import { isRenderableTitle } from "@/content/popular-titles";
import { WIKIQORGI_CATALOG } from "@/content/wikiqorgi/catalog";
import { searchShelf } from "@/lib/shelf-search";
import { OG_BASE } from "@/lib/site";
import FeaturedGrid from "@/components/FeaturedGrid";

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

const DESCRIPTION =
  "Search wikiqo's original articles and Wikipedia's most-read ones, and read them in a clean, uncluttered reading column.";

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
      <div className="shell py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h1 className="font-serif text-3xl font-semibold tracking-tight">Search wikiqo</h1>
          <p className="mt-2 text-muted">
            Use the search bar above. It looks through wikiqo&rsquo;s own{" "}
            <Link href="/wikiqorgi" className="underline hover:text-accent">
              wikiqorgi
            </Link>{" "}
            articles first, then the whole of Wikipedia. Or start with one of
            these.
          </p>

          <section className="mt-12">
            <h2 className="eyebrow">Popular on Wikipedia</h2>
            <div className="mt-4">
              <FeaturedGrid />
            </div>
          </section>
        </div>
      </div>
    );
  }

  // Our own articles first. The catalog is a compile-time constant, so this
  // costs nothing and still works when Wikipedia can't be reached.
  const shelfMatches = searchShelf(WIKIQORGI_CATALOG, query, 5);

  let results;
  let failed = false;
  try {
    results = await searchArticles(query);
  } catch (error) {
    console.error("Search failed:", error);
    failed = true;
  }

  const itemClass =
    "group block rounded-lg px-3 py-3 -mx-3 transition-colors hover:bg-surface-hover";

  return (
    <div className="shell py-10 sm:py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-serif text-3xl font-semibold tracking-tight">
          Results for &ldquo;{query}&rdquo;
        </h1>

        {shelfMatches.length > 0 && (
          <section className="mt-8" aria-labelledby="shelf-results">
            <h2 id="shelf-results" className="eyebrow">
              Written for wikiqo
            </h2>
            <ul className="mt-2 divide-y divide-border">
              {shelfMatches.map((entry) => (
                <li key={entry.slug}>
                  <Link href={rewrittenHref(entry.slug)} className={itemClass}>
                    <span className="block font-serif text-lg font-semibold leading-snug text-foreground group-hover:text-accent">
                      {entry.title}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted">{entry.dek}</span>
                    <span className="mt-1 block text-xs text-muted">{entry.section}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-10" aria-labelledby="wiki-results">
          <h2 id="wiki-results" className="eyebrow">
            From Wikipedia
            {!failed && results && results.length > 0 && (
              <span className="font-normal normal-case tracking-normal"> · {results.length} results</span>
            )}
          </h2>

          {failed && (
            <p className="mt-3 rounded-lg border border-border px-4 py-3 text-sm text-muted">
              Wikipedia couldn&apos;t be reached right now. Please try again in a moment.
            </p>
          )}

          {!failed && results && results.length === 0 && (
            <p className="mt-3 text-muted">No Wikipedia articles matched your search.</p>
          )}

          {!failed && results && results.length > 0 && (
            <ul className="mt-2 divide-y divide-border">
              {results.map((result) => {
                const offsite = !isRenderableTitle(result.title);
                const body = (
                  <>
                    <span className="font-serif text-lg font-semibold leading-snug text-foreground group-hover:text-accent">
                      {result.title}
                    </span>
                    {offsite && (
                      <span className="ml-2 align-middle text-xs text-muted">
                        Wikipedia <span aria-hidden>↗</span>
                        <span className="sr-only">(opens on Wikipedia)</span>
                      </span>
                    )}
                    <span
                      className="mt-1 block text-sm leading-relaxed text-muted [&_span.searchmatch]:font-semibold [&_span.searchmatch]:text-foreground"
                      // Wikipedia's search snippet HTML only ever contains <span class="searchmatch">
                      // highlight markers, but it's run through the same sanitizer as full
                      // article bodies before being injected, for defense in depth.
                      dangerouslySetInnerHTML={{ __html: sanitizeWikiHtml(result.snippet) }}
                    />
                  </>
                );

                return (
                  <li key={result.pageid}>
                    {offsite ? (
                      // Titles outside the mirrored set would only be redirected
                      // to Wikipedia by proxy.ts, so link there directly and say
                      // so, rather than surprising the reader with the hop.
                      <a href={wikipediaUrlFor(result.title)} rel="nofollow" className={itemClass}>
                        {body}
                      </a>
                    ) : (
                      <Link
                        href={articleHref(result.title)}
                        // Next prefetches links as they scroll into view, and the
                        // article route renders on demand — so a prefetch here is a
                        // full render: ~2 MB of Parsoid HTML fetched and sanitized.
                        // A single search would render every mirrored result, nearly
                        // all of which the reader never opens. Result slugs are
                        // unbounded, so this scales with every query typed. They
                        // also count against the firewall's per-IP article budget.
                        prefetch={false}
                        className={itemClass}
                      >
                        {body}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}
