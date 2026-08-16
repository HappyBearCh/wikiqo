import type { Metadata } from "next";
import Link from "next/link";
import { WIKIQORGI_ARTICLES, WIKIQORGI_SECTIONS, rewrittenHref } from "@/content/wikiqorgi";
import { OG_BASE, SITE_NAME, SITE_URL } from "@/lib/site";

const DESCRIPTION =
  "wikiqorgi — Wikipedia's subjects, rewritten from scratch. Same facts, different prose: original articles written to be read end to end rather than assembled by committee.";

export const metadata: Metadata = {
  title: "wikiqorgi",
  description: DESCRIPTION,
  alternates: { canonical: "/wikiqorgi" },
  openGraph: {
    ...OG_BASE,
    type: "website",
    url: "/wikiqorgi",
    title: "wikiqorgi — Wikipedia, rewritten",
    description: DESCRIPTION,
  },
};

/**
 * Every page under /wikiqorgi is authored in-repo (see content/wikiqorgi), so
 * there is nothing request-specific to wait for and Next prerenders this route
 * to static HTML at build time. No fetch, no cache, no database.
 */

/**
 * Lists the shelf as a schema.org Collection so search engines see one curated
 * body of original writing rather than eight unrelated pages.
 */
const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "wikiqorgi",
  url: `${SITE_URL}/wikiqorgi`,
  description: DESCRIPTION,
  inLanguage: "en",
  isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
  hasPart: WIKIQORGI_ARTICLES.map((article) => ({
    "@type": "Article",
    headline: article.title,
    description: article.dek,
    url: `${SITE_URL}${rewrittenHref(article.slug)}`,
  })),
};

export default function WikiqorgiPage() {
  const articleCount = WIKIQORGI_ARTICLES.length;

  return (
    <div className="shell py-14 sm:py-20">
      <script
        type="application/ld+json"
        // Static, developer-authored object — no user input reaches it.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />

      {/* ---- Masthead ------------------------------------------------------ */}
      <section className="animate-in mx-auto max-w-3xl text-center">
        <span className="rainbow-border rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-muted">
          Original writing · not mirrored
        </span>
        <h1 className="text-rainbow mt-6 font-serif text-5xl font-bold tracking-tight sm:text-6xl">
          wikiqorgi
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          The rest of wikiqo hands you Wikipedia as it is. This shelf does the
          opposite: {articleCount} of the encyclopedia&rsquo;s best subjects,
          researched again and <em>written</em> again — same facts, entirely new
          prose, built to be read from top to bottom rather than skimmed for a
          date.
        </p>
        <div
          aria-hidden
          className="mx-auto mt-8 h-1.5 w-44 rounded-full shadow-glow"
          style={{ background: "var(--rainbow)" }}
        />
      </section>

      {/* ---- Section jump list --------------------------------------------- */}
      <nav aria-label="Sections" className="mx-auto mt-12 max-w-3xl">
        <ul className="flex flex-wrap justify-center gap-2">
          {WIKIQORGI_SECTIONS.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="inline-block rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-accent"
              >
                {section.title}
                <span className="ml-2 text-xs opacity-70">
                  {section.articles.length}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ---- The shelf ----------------------------------------------------- */}
      <div className="mx-auto mt-16 max-w-5xl space-y-16">
        {WIKIQORGI_SECTIONS.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <header className="border-b border-border pb-5">
              <span
                aria-hidden
                className="block h-1.5 w-12 rounded-full"
                style={{ background: section.hue }}
              />
              <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground">
                {section.title}
              </h2>
              <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted">
                {section.blurb}
              </p>
            </header>

            <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {section.articles.map((article) => (
                <li key={article.slug}>
                  <Link
                    href={rewrittenHref(article.slug)}
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
                  >
                    {/* Colour wash that blooms in on hover. */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-[0.07]"
                      style={{ background: section.hue }}
                    />
                    <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
                      Rewritten from &ldquo;{article.sourceTitle}&rdquo;
                    </span>
                    <h3 className="mt-2 font-serif text-xl font-semibold leading-snug tracking-tight text-foreground">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {article.dek}
                    </p>
                    <span className="mt-4 flex items-center gap-2 text-sm font-semibold text-accent">
                      Read it here
                      <span
                        aria-hidden
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        &rarr;
                      </span>
                      <span className="ml-auto text-xs font-normal text-muted">
                        {article.readingMinutes} min
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {/* ---- House rules --------------------------------------------------- */}
      <section className="mx-auto mt-20 max-w-3xl rounded-2xl border border-border bg-surface p-6">
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
            <strong className="text-foreground">Every article names its subject on Wikipedia.</strong>{" "}
            You can read the encyclopedia&rsquo;s version of any of these in the
            wikiqo reader, one click from the top of each page — and judge the
            rewrite against it.
          </li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/search"
            className="shadow-glow rounded-full px-6 py-2.5 text-sm font-semibold transition-transform hover:scale-105"
            style={{ background: "var(--library-blue)", backgroundSize: "200% auto", color: "#fff" }}
          >
            Search the encyclopedia
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-border px-6 py-2.5 text-sm font-semibold text-muted transition-colors hover:border-accent hover:text-accent"
          >
            About wikiqo
          </Link>
        </div>
      </section>
    </div>
  );
}
