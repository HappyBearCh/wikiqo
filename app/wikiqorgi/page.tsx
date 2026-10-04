import type { Metadata } from "next";
import Link from "next/link";
import {
  WIKIQORGI_ARTICLES,
  WIKIQORGI_SECTIONS,
  sectionHref,
} from "@/content/wikiqorgi";
import { OG_BASE, SITE_NAME, SITE_URL } from "@/lib/site";
import { ORGANIZATION, ORGANIZATION_REF, breadcrumbList } from "@/lib/structured-data";

const DESCRIPTION =
  "wikiqorgi — Wikipedia's subjects, rewritten from scratch. Same facts, different prose: original articles written to be read end to end rather than assembled by committee.";

export const metadata: Metadata = {
  // "wikiqorgi" alone means nothing to someone scanning search results; say
  // what the page is.
  title: "wikiqorgi: Wikipedia's best subjects, rewritten from scratch",
  description: DESCRIPTION,
  alternates: {
    canonical: "/wikiqorgi",
    types: { "application/rss+xml": [{ url: "/wikiqorgi/feed.xml", title: "wikiqorgi" }] },
  },
  openGraph: {
    ...OG_BASE,
    type: "website",
    url: "/wikiqorgi",
    title: "wikiqorgi — Wikipedia, rewritten",
    description: DESCRIPTION,
  },
};

/**
 * The shelf's front page lists sections only — ten cards, no article titles.
 * Each section's own page (see wikiqorgi/[slug]) carries its five articles.
 *
 * Everything under /wikiqorgi is authored in-repo (see content/wikiqorgi), so
 * there is nothing request-specific to wait for and Next prerenders this route
 * to static HTML at build time. No fetch, no cache, no database.
 */

/**
 * Lists the shelf as a schema.org Collection so search engines see one curated
 * body of original writing rather than a set of unrelated pages.
 */
const collectionJsonLd = {
  "@type": "CollectionPage",
  publisher: ORGANIZATION_REF,
  name: "wikiqorgi",
  url: `${SITE_URL}/wikiqorgi`,
  description: DESCRIPTION,
  inLanguage: "en",
  isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
  hasPart: WIKIQORGI_SECTIONS.map((section) => ({
    "@type": "CollectionPage",
    name: section.title,
    description: section.blurb,
    url: `${SITE_URL}${sectionHref(section.id)}`,
  })),
};

export default function WikiqorgiPage() {
  const articleCount = WIKIQORGI_ARTICLES.length;
  const sectionCount = WIKIQORGI_SECTIONS.length;

  return (
    <div className="shell py-12 sm:py-16">
      <script
        type="application/ld+json"
        // Static, developer-authored object — no user input reaches it.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              collectionJsonLd,
              ORGANIZATION,
              breadcrumbList([{ name: "wikiqorgi", path: "/wikiqorgi" }]),
            ],
          }),
        }}
      />

      {/* ---- Masthead ------------------------------------------------------ */}
      <section className="max-w-2xl">
        <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">All articles</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          {articleCount}{" "}of the encyclopedia&rsquo;s best subjects, researched again
          and written from scratch — same facts, new prose, built to be read from
          top to bottom.
        </p>
        <p className="mt-3 text-sm text-muted">
          {sectionCount} sections ·{" "}
          <a href="/wikiqorgi/feed.xml" className="underline">
            RSS feed
          </a>
        </p>
      </section>

      {/* ---- The shelf: one card per section -------------------------------- */}
      <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
        {WIKIQORGI_SECTIONS.map((section) => (
          <li key={section.id}>
            <Link href={sectionHref(section.id)} className="card h-full p-5 sm:p-6">
              <span className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ background: section.hue }}
                />
                <h2 className="font-serif text-xl font-semibold tracking-tight text-foreground">
                  {section.title}
                </h2>
              </span>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{section.blurb}</p>
              <span className="mt-4 text-sm text-muted">
                {section.articles.length} articles
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* ---- House rules --------------------------------------------------- */}
      <section className="mt-16 max-w-3xl border-t border-border pt-8">
        <h2 className="font-serif text-xl font-semibold text-foreground">
          How these are written
        </h2>
        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
          <li>
            <strong className="text-foreground">Nothing is copied.</strong> These
            are not edited or paraphrased Wikipedia articles. Each one is written
            from scratch, with its own structure, its own emphasis, and its own
            argument about what the subject is really about.
          </li>
          <li>
            <strong className="text-foreground">The facts still have to hold.</strong>{" "}
            Rewriting means changing the prose, not the record. Where a subject is
            genuinely disputed, the article says so instead of picking a side and
            sounding confident.
          </li>
          <li>
            <strong className="text-foreground">Every article lists its sources.</strong>{" "}
            The standard works behind each account are at the foot of the page,
            so the claims can be checked against the record rather than taken
            on trust.
          </li>
          <li>
            <strong className="text-foreground">Every article names its subject on Wikipedia.</strong>{" "}
            You can read the encyclopedia&rsquo;s version of any of these in the
            wikiqo reader, one click from the top of each page — and judge the
            rewrite against it.
          </li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/search" className="btn-primary">
            Search the encyclopedia
          </Link>
          <Link href="/about" className="btn-secondary">
            About wikiqo
          </Link>
        </div>
      </section>
    </div>
  );
}
