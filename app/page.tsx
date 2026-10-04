import type { Metadata } from "next";
import Link from "next/link";
import FeaturedGrid from "@/components/FeaturedGrid";
import PromotedShelf from "@/components/wikiqorgi/PromotedShelf";
import { WIKIQORGI_ARTICLES, rewrittenHref } from "@/content/wikiqorgi";
import { latestPromoted } from "@/content/wikiqorgi/schedule";
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

  return (
    <div className="shell py-12 sm:py-16">
      <script
        type="application/ld+json"
        // Static, developer-authored object — no user input reaches it.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <section className="max-w-2xl">
        <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          The encyclopedia&rsquo;s best subjects, written to be read.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          {WIKIQORGI_ARTICLES.length} original articles, each researched again and
          written from scratch, with its sources listed. And when you want
          Wikipedia itself, a calm reader for its most-read articles.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/wikiqorgi" className="btn-primary">
            Browse the articles
          </Link>
          <Link href="/search" className="btn-secondary">
            Search
          </Link>
        </div>
      </section>

      {lead && (
        <section className="mt-14" aria-labelledby="newest">
          <h2 id="newest" className="eyebrow">
            Newest article
          </h2>
          <Link href={rewrittenHref(lead.article.slug)} className="card group mt-3 p-6 sm:p-8">
            <span className="flex items-center gap-2 text-sm text-muted">
              <span
                aria-hidden
                className="h-2.5 w-2.5 rounded-full"
                style={{ background: lead.section.hue }}
              />
              {lead.section.title}
            </span>
            <span className="mt-3 font-serif text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
              {lead.article.title}
            </span>
            <span className="mt-3 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
              {lead.article.standfirst}
            </span>
            <span className="mt-5 text-sm">
              <span className="font-semibold text-accent">Read the article &rarr;</span>
              <span className="ml-3 text-muted">{lead.article.readingMinutes} min read</span>
            </span>
          </Link>
        </section>
      )}

      <section className="mt-14" aria-labelledby="also-new">
        <h2 id="also-new" className="eyebrow">
          Also new
        </h2>
        <div className="mt-3">
          <PromotedShelf now={now} offset={1} count={SHELF_COUNT} />
        </div>
        <p className="mt-4 text-sm text-muted">
          New articles arrive a few times a week.{" "}
          <Link href="/wikiqorgi" className="underline">
            See all articles
          </Link>{" "}
          or{" "}
          <a href="/wikiqorgi/feed.xml" className="underline">
            follow the RSS feed
          </a>
          .
        </p>
      </section>

      <section className="mt-16" aria-labelledby="wikipedia">
        <h2 id="wikipedia" className="eyebrow">
          Read Wikipedia, uncluttered
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          The encyclopedia&rsquo;s most-read articles in a clean reading column.
          Where we&rsquo;ve written our own version too, the page says so.
        </p>
        <div className="mt-4">
          <FeaturedGrid />
        </div>
      </section>
    </div>
  );
}
