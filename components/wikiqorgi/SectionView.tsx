import Link from "next/link";
import {
  WIKIQORGI_SECTIONS,
  rewrittenHref,
  sectionHref,
  type WikiqorgiSection,
} from "@/content/wikiqorgi";
import { SITE_URL } from "@/lib/site";
import { ORGANIZATION, ORGANIZATION_REF, breadcrumbList } from "@/lib/structured-data";

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
      author: ORGANIZATION_REF,
    })),
    publisher: ORGANIZATION_REF,
  };

  return (
    <div className="shell py-14 sm:py-20">
      <script
        type="application/ld+json"
        // Static, developer-authored object — no user input reaches it.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              sectionJsonLd,
              ORGANIZATION,
              breadcrumbList([
                { name: "wikiqorgi", path: "/wikiqorgi" },
                { name: section.title, path: sectionHref(section.id) },
              ]),
            ],
          }),
        }}
      />

      <div className="mx-auto max-w-4xl">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
          <Link href="/wikiqorgi" className="font-medium transition-colors hover:text-accent">
            Articles
          </Link>
          <span aria-hidden className="mx-2 opacity-50">
            /
          </span>
          <span className="text-foreground">{section.title}</span>
        </nav>

        {/* ---- Section masthead -------------------------------------------- */}
        <header className="border-b border-border pb-8">
          <span
            aria-hidden
            className="block h-2.5 w-2.5 rounded-full"
            style={{ background: section.hue }}
          />
          <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight sm:text-5xl">
            {section.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            {section.blurb}
          </p>
          <p className="mt-5 text-sm text-muted">
            {section.articles.length} articles · about {totalMinutes} minutes of reading
          </p>
        </header>

        {/* ---- The articles ------------------------------------------------ */}
        <ol className="mt-10 space-y-4">
          {section.articles.map((article, i) => (
            <li key={article.slug}>
              <Link href={rewrittenHref(article.slug)} className="card flex-row gap-5 p-5 sm:p-6">
                <span
                  aria-hidden
                  className="hidden shrink-0 font-serif text-2xl font-bold leading-none text-muted/50 sm:block"
                >
                  {i + 1}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-serif text-xl font-semibold leading-snug text-foreground">
                    {article.title}
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-muted">{article.dek}</span>
                  <span className="mt-3 block text-xs text-muted">
                    {article.readingMinutes} min read · on {article.sourceTitle}
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
              className="group card p-4"
            >
              <span className="eyebrow">
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
              <span className="eyebrow">
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
