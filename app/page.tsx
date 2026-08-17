import type { Metadata } from "next";
import Link from "next/link";
import TextBanner from "@/components/TextBanner";
import FeaturedGrid from "@/components/FeaturedGrid";
import PromotedShelf, { PromotedShelfFooter } from "@/components/wikiqorgi/PromotedShelf";
import { FEATURED } from "@/lib/featured";
import { keywordsFromText } from "@/lib/keywords";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  // `title.absolute` so the home page reads "wikiqo — a clean reader for
  // Wikipedia" rather than running through the "%s | wikiqo" template.
  title: { absolute: SITE_TITLE },
  description: SITE_DESCRIPTION,
  // Self-referencing canonical, so tracking params (?utm_source=…, ?ref=…)
  // consolidate onto the bare URL instead of splitting signals.
  alternates: { canonical: "/" },
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
  "@type": "WebSite",
  name: SITE_NAME,
  alternateName: SITE_TITLE,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: "en",
};

export default function Home() {
  // Salient terms drawn from the featured cards, for the text-viz banner.
  const words = keywordsFromText(
    FEATURED.map((f) => `${f.title} ${f.blurb}`).join(" "),
  );

  // Read the clock once and pass it down, so the shelf and its footer can't
  // disagree about which articles are promoted if the render straddles midnight.
  const now = new Date();

  return (
    <div className="shell py-16 sm:py-24">
      <script
        type="application/ld+json"
        // Static, developer-authored object — no user input reaches it.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <TextBanner words={words} title="wikiqo" initial="title" />

      <section className="animate-in mx-auto flex max-w-3xl flex-col items-center text-center">
        <span className="rainbow-border rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-muted">
          Powered by the Wikipedia API
        </span>
        <h1 className="text-library-blue mt-6 font-serif text-6xl font-bold tracking-tight sm:text-7xl">
          wikiqo
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
          A fast, clean reader for Wikipedia. Search the encyclopedia and read articles
          without the clutter.
        </p>
        <Link
          href="/search"
          className="shadow-glow mt-8 rounded-full px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105"
          style={{ background: "var(--library-blue)", backgroundSize: "200% auto", color: "#fff" }}
        >
          Start searching
        </Link>
      </section>

      <section className="mt-20">
        <h2 className="text-center text-sm font-semibold uppercase tracking-wide text-muted">
          New on wikiqorgi
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed text-muted">
          Subjects the rest of the site mirrors from Wikipedia, reported and rewritten
          from scratch in our own words.
        </p>
        <div className="mt-8">
          <PromotedShelf now={now} />
        </div>
        <PromotedShelfFooter now={now} />
      </section>

      <section className="mt-20">
        <h2 className="text-center text-sm font-semibold uppercase tracking-wide text-muted">
          Try an article
        </h2>
        <div className="mt-8">
          <FeaturedGrid />
        </div>
      </section>
    </div>
  );
}
