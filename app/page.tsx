import type { Metadata } from "next";
import Link from "next/link";
import TextBanner from "@/components/TextBanner";
import FeaturedGrid from "@/components/FeaturedGrid";
import PromotedShelf, { PromotedShelfFooter } from "@/components/wikiqorgi/PromotedShelf";
import { WIKIQORGI_ARTICLES, rewrittenHref } from "@/content/wikiqorgi";
import { latestPromoted } from "@/content/wikiqorgi/schedule";
import { keywordsFromText } from "@/lib/keywords";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/site";
import { ORGANIZATION, ORGANIZATION_REF } from "@/lib/structured-data";

export const metadata: Metadata = {
  // `title.absolute` so the home page carries the full site title rather than
  // running through the "%s | wikiqo" template.
  title: { absolute: SITE_TITLE },
  description: SITE_DESCRIPTION,
  // Self-referencing canonical, so tracking params (?utm_source=…, ?ref=…)
  // consolidate onto the bare URL instead of splitting signals. The feed is
  // advertised here and on /wikiqorgi so feed readers can discover it.
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": [{ url: "/wikiqorgi/feed.xml", title: "wikiqorgi" }] },
  },
};

// Regenerated daily so the wikiqorgi shelf below rolls forward on its own
// (see content/wikiqorgi/schedule.ts). Without this the page is prerendered
// once at build time and the promotion dates never advance.
//
// This is one revalidation per day for one fixed path, which is the case ISR is
// actually for — the same trade sitemap.ts already makes. It is not the pattern
// warned against in wiki/[slug]/page.tsx: that route is an unbounded title
// space where nearly every cached path is read once and never again.
export const revalidate = 86400;

/**
 * Tells search engines the site's official name and preferred URL, so results
 * show "wikiqo" rather than a guess derived from the <title>.
 */
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      alternateName: SITE_TITLE,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      inLanguage: "en",
      publisher: ORGANIZATION_REF,
    },
    // The organisation and its logo, which Google may show beside results.
    ORGANIZATION,
  ],
};

/** Cards in the shelf under the lead article. */
const SHELF_COUNT = 4;

/**
 * The home page leads with wikiqorgi, the site's original writing: the newest
 * article on its own, then the rest of the current rotation. The Wikipedia
 * reader comes second. It is still useful, but it only renders Wikipedia's
 * most-read articles and canonicals to Wikipedia, so it is not what the site is
 * for.
 */
export default function Home() {
  // Read the clock once and pass it down, so the lead, the shelf and its footer
  // can't disagree about which articles are promoted if the render straddles
  // midnight.
  const now = new Date();
  const [lead] = latestPromoted(1, now);

  // Salient terms from what is currently on the front page, for the text-viz
  // banner.
  const words = keywordsFromText(
    latestPromoted(1 + SHELF_COUNT, now)
      .map(({ article }) => `${article.title} ${article.dek}`)
      .join(" "),
  );

  return (
    <div className="shell py-16 sm:py-24">
      <script
        type="application/ld+json"
        // Static, developer-authored object — no user input reaches it.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      {words.length > 0 && <TextBanner words={words} title="wikiqo" initial="title" />}

      <section className="animate-in mx-auto flex max-w-3xl flex-col items-center text-center">
        <span className="rainbow-border rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-muted">
          Original writing · {WIKIQORGI_ARTICLES.length} articles and counting
        </span>
        <h1 className="text-library-blue mt-6 font-serif text-6xl font-bold tracking-tight sm:text-7xl">
          wikiqo
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
          The encyclopedia&rsquo;s best subjects, researched again and written
          from scratch, to be read from top to bottom rather than skimmed for a
          date. And when you want Wikipedia itself, a calm reader for its
          most-read articles.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/wikiqorgi"
            className="shadow-glow rounded-full px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105"
            style={{ background: "var(--library-blue)", backgroundSize: "200% auto", color: "#fff" }}
          >
            Browse the articles
          </Link>
          <Link
            href="/search"
            className="rounded-full border border-border px-8 py-3.5 text-sm font-semibold text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Search
          </Link>
        </div>
      </section>

      {lead && (
        <section className="mx-auto mt-20 max-w-4xl">
          <h2 className="text-center text-sm font-semibold uppercase tracking-wide text-muted">
            Newest on wikiqorgi
          </h2>
          <Link
            href={rewrittenHref(lead.article.slug)}
            className="group relative mt-8 flex flex-col overflow-hidden rounded-3xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 sm:p-10"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.04] transition-opacity duration-300 group-hover:opacity-10"
              style={{ background: lead.section.hue }}
            />
            <span
              aria-hidden
              className="h-2 w-16 rounded-full transition-all duration-300 group-hover:w-24"
              style={{ background: lead.section.hue }}
            />
            <span className="mt-5 text-xs font-semibold uppercase tracking-wide text-muted">
              {lead.section.title}
            </span>
            <span className="mt-3 font-serif text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              {lead.article.title}
            </span>
            <span className="mt-4 text-lg leading-relaxed text-muted">
              {lead.article.standfirst}
            </span>
            <span className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <span className="font-semibold text-accent">
                Read the article{" "}
                <span
                  aria-hidden
                  className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </span>
              <span className="text-muted">
                {lead.article.readingMinutes} min read · on {lead.article.sourceTitle}
              </span>
            </span>
          </Link>
        </section>
      )}

      <section className="mt-16">
        <h2 className="text-center text-sm font-semibold uppercase tracking-wide text-muted">
          Also new
        </h2>
        <div className="mt-8">
          <PromotedShelf now={now} offset={1} count={SHELF_COUNT} />
        </div>
        <PromotedShelfFooter now={now} count={1 + SHELF_COUNT} />
        <p className="mt-3 text-center text-sm text-muted">
          New articles arrive a few times a week.{" "}
          <a href="/wikiqorgi/feed.xml" className="underline hover:text-foreground">
            Follow the RSS feed
          </a>
          .
        </p>
      </section>

      <section className="mt-20">
        <h2 className="text-center text-sm font-semibold uppercase tracking-wide text-muted">
          Or read Wikipedia, uncluttered
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed text-muted">
          The encyclopedia&rsquo;s most-read articles in a clean reading column.
          Where we&rsquo;ve written our own version too, the page says so.
        </p>
        <div className="mt-8">
          <FeaturedGrid />
        </div>
      </section>
    </div>
  );
}
