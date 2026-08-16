import Link from "next/link";
import {
  WIKIQORGI_SECTIONS,
  rewrittenHref,
  sectionHref,
  type WikiqorgiSection,
} from "@/content/wikiqorgi";
import { SITE_NAME, SITE_URL } from "@/lib/site";

/** One section of the shelf: its own page, listing the articles it holds.
 *  Rendered by the shared /wikiqorgi/[slug] route when the slug names a
 *  section rather than an article. */
export default function SectionView({ section }: { section: WikiqorgiSection }) {
  // Ordered neighbours, so a reader can walk the whole shelf without going back
  // to the index between sections.
  const index = WIKIQORGI_SECTIONS.findIndex((s) => s.id === section.id);
  const previous = index > 0 ? WIKIQORGI_SECTIONS[index - 1] : undefined;
  const next =
    index < WIKIQORGI_SECTIONS.length - 1 ? WIKIQORGI_SECTIONS[index + 1] : undefined;

  const totalMinutes = section.articles.reduce((sum, a) => sum + a.readingMinutes, 0);

  const sectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: section.title,
    description: section.blurb,
    url: `${SITE_URL}${sectionHref(section.id)}`,
    inLanguage: "en",
    isPartOf: {
      "@type": "CollectionPage",
      name: "wikiqorgi",
      url: `${SITE_URL}/wikiqorgi`,
    },
    hasPart: section.articles.map((article) => ({
      "@type": "Article",
      headline: article.title,
      description: article.dek,
      url: `${SITE_URL}${rewrittenHref(article.slug)}`,
      author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    })),
  };

  return (
    <div className="shell py-14 sm:py-20">
      <script
        type="application/ld+json"
        // Static, developer-authored object — no user input reaches it.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sectionJsonLd) }}
      />

      <div className="mx-auto max-w-4xl">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
          <Link href="/wikiqorgi" className="font-medium transition-colors hover:text-accent">
            wikiqorgi
          </Link>
          <span aria-hidden className="mx-2 opacity-50">
            /
          </span>
          <span className="text-foreground">{section.title}</span>
        </nav>

        {/* ---- Section masthead -------------------------------------------- */}
        <header className="animate-in relative border-b border-border pb-8">
          <span
            aria-hidden
            className="block h-1.5 w-16 rounded-full shadow-glow"
            style={{ background: section.hue }}
          />
          <h1 className="mt-5 font-serif text-4xl font-bold tracking-tight sm:text-5xl">
            {section.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            {section.blurb}
          </p>
          <p className="mt-5 font-mono text-[11px] uppercase tracking-widest text-muted">
            {section.articles.length} articles · about {totalMinutes} minutes of reading
          </p>
        </header>

        {/* ---- The articles ------------------------------------------------ */}
        <ol className="mt-10 space-y-4">
          {section.articles.map((article, i) => (
            <li key={article.slug}>
              <Link
                href={rewrittenHref(article.slug)}
                className="group relative flex gap-5 overflow-hidden rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 sm:p-6"
              >
                {/* Colour wash that blooms in on hover. */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-[0.07]"
                  style={{ background: section.hue }}
                />
                <span
                  aria-hidden
                  className="hidden shrink-0 font-serif text-3xl font-bold leading-none text-muted/40 transition-colors group-hover:text-muted sm:block"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-mono text-[11px] uppercase tracking-widest text-muted">
                    Rewritten from &ldquo;{article.sourceTitle}&rdquo;
                  </span>
                  <span className="mt-2 block font-serif text-xl font-semibold leading-snug tracking-tight text-foreground">
                    {article.title}
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-muted">
                    {article.dek}
                  </span>
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
                </span>
              </Link>
            </li>
          ))}
        </ol>

        {/* ---- Walk to the neighbouring sections ---------------------------- */}
        <nav
          aria-label="Other sections"
          className="mt-12 grid grid-cols-1 gap-4 border-t border-border pt-8 sm:grid-cols-2"
        >
          {previous ? (
            <Link
              href={sectionHref(previous.id)}
              className="group rounded-2xl border border-border bg-surface p-4 transition-colors hover:border-accent"
            >
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
                &larr; Previous section
              </span>
              <span className="mt-1.5 block font-serif text-base font-semibold text-foreground group-hover:text-accent">
                {previous.title}
              </span>
            </Link>
          ) : (
            <span aria-hidden />
          )}
          {next && (
            <Link
              href={sectionHref(next.id)}
              className="group rounded-2xl border border-border bg-surface p-4 text-right transition-colors hover:border-accent sm:col-start-2"
            >
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
                Next section &rarr;
              </span>
              <span className="mt-1.5 block font-serif text-base font-semibold text-foreground group-hover:text-accent">
                {next.title}
              </span>
            </Link>
          )}
        </nav>

        <p className="mt-8 text-center">
          <Link
            href="/wikiqorgi"
            className="text-sm font-semibold text-muted transition-colors hover:text-accent"
          >
            All sections
          </Link>
        </p>
      </div>
    </div>
  );
}
