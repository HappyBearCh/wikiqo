import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  WIKIQORGI_ARTICLES,
  getRewrittenArticle,
  getSectionForSlug,
  rewrittenHref,
} from "@/content/wikiqorgi";
import { articleHref } from "@/lib/links";
import { keywordsFromHtml } from "@/lib/keywords";
import { OG_BASE, SITE_NAME, SITE_URL } from "@/lib/site";
import { parseArticleStructure } from "@/lib/structure";
import { wikipediaUrlFor } from "@/lib/wikipedia";
import ArticleStructureLazy from "@/components/ArticleStructureLazy";
import TextBanner from "@/components/TextBanner";

// The whole shelf lives in content/wikiqorgi as compile-time constants, so every
// slug is known at build time and the set is closed. Prerendering all of them
// and refusing anything else keeps this route fully static — no fetch, no ISR
// writes, no runtime rendering. That is the opposite of /wiki/[slug], which is
// deliberately dynamic because it faces Wikipedia's unbounded title space.
export const dynamicParams = false;

export function generateStaticParams() {
  return WIKIQORGI_ARTICLES.map((article) => ({ slug: article.slug }));
}

interface RewrittenPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: RewrittenPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getRewrittenArticle(slug);

  if (!article) {
    return { title: "Article not found", robots: { index: false, follow: true } };
  }

  const url = rewrittenHref(article.slug);

  return {
    title: article.title,
    description: article.dek,
    // Self-referencing, unlike the mirrored /wiki/[slug] pages: this text is
    // original writing, so wikiqo *is* the canonical source for it.
    alternates: { canonical: url },
    openGraph: {
      ...OG_BASE,
      type: "article",
      url,
      title: article.title,
      description: article.dek,
    },
  };
}

export default async function RewrittenArticlePage({ params }: RewrittenPageProps) {
  const { slug } = await params;
  const article = getRewrittenArticle(slug);

  if (!article) {
    notFound();
  }

  const section = getSectionForSlug(article.slug);
  const hue = section?.hue ?? "var(--rb-5)";
  const structure = parseArticleStructure(article.title, article.html);
  const hasStructure = structure.children.length > 0;
  const words = keywordsFromHtml(article.html);
  const sourceUrl = wikipediaUrlFor(article.sourceTitle);

  // Siblings on the same shelf, for the "keep reading" links at the foot.
  const siblings = (section?.articles ?? []).filter((a) => a.slug !== article.slug);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.dek,
    url: `${SITE_URL}${rewrittenHref(article.slug)}`,
    inLanguage: "en",
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    about: article.sourceTitle,
    isPartOf: {
      "@type": "CollectionPage",
      name: "wikiqorgi",
      url: `${SITE_URL}/wikiqorgi`,
    },
  };

  return (
    <div className="shell py-10">
      <script
        type="application/ld+json"
        // Static, developer-authored object — no user input reaches it.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <TextBanner words={words} title={article.title} initial="cloud" />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-14">
        <article className="min-w-0">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
            <Link href="/wikiqorgi" className="font-medium transition-colors hover:text-accent">
              wikiqorgi
            </Link>
            {section && (
              <>
                <span aria-hidden className="mx-2 opacity-50">
                  /
                </span>
                <a
                  href={`/wikiqorgi#${section.id}`}
                  className="transition-colors hover:text-accent"
                >
                  {section.title}
                </a>
              </>
            )}
          </nav>

          <header className="relative mb-8 border-b border-border pb-6">
            {/* Rainbow rule that runs under the heading. */}
            <span
              aria-hidden
              className="absolute -bottom-px left-0 h-1 w-28 rounded-full"
              style={{ background: "var(--rainbow)" }}
            />
            <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
              {article.title}
            </h1>
            <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-widest text-muted">
              <span
                className="rounded-full px-2.5 py-1 text-white"
                style={{ background: hue }}
              >
                Written for wikiqo
              </span>
              <span>{article.readingMinutes} min read</span>
              <span aria-hidden className="opacity-50">
                ·
              </span>
              <span>Subject: {article.sourceTitle}</span>
            </p>
          </header>

          <p
            className="mb-8 rounded-r-xl border-l-4 bg-surface py-3 pl-4 pr-4 text-lg leading-8 text-foreground/80 italic"
            style={{ borderImage: "var(--rainbow) 1", borderImageSlice: 1 }}
          >
            {article.standfirst}
          </p>

          <div
            className="wiki-content prose prose-lg prose-neutral dark:prose-invert max-w-none"
            // Hand-authored HTML from content/wikiqorgi — a compile-time
            // constant in this repo, never user or network input.
            dangerouslySetInnerHTML={{ __html: article.html }}
          />

          <footer className="mt-12 rounded-2xl border border-border bg-surface px-5 py-4 text-sm text-muted">
            <p>
              This article is original writing by {SITE_NAME}. It is not adapted
              from, and shares no text with, Wikipedia&rsquo;s article on the same
              subject — you can read that one{" "}
              <Link
                href={articleHref(article.sourceTitle)}
                className="font-medium text-accent underline"
              >
                in the wikiqo reader
              </Link>{" "}
              or{" "}
              <a
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                on Wikipedia
              </a>{" "}
              and compare.
            </p>
          </footer>

          {siblings.length > 0 && (
            <section className="mt-10">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
                More from {section?.title}
              </h2>
              <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {siblings.map((sibling) => (
                  <li key={sibling.slug}>
                    <Link
                      href={rewrittenHref(sibling.slug)}
                      className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
                    >
                      <span
                        aria-hidden
                        className="h-1.5 w-10 rounded-full transition-all duration-300 group-hover:w-16"
                        style={{ background: hue }}
                      />
                      <span className="mt-3 font-serif text-base font-semibold leading-snug text-foreground">
                        {sibling.title}
                      </span>
                      <span className="mt-1.5 text-sm leading-relaxed text-muted">
                        {sibling.dek}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </article>

        {/* Sticky sidebar, mirroring the mirrored-article layout so the two
            reading experiences feel like one site. */}
        <aside className="hidden lg:block">
          <div className="sticky top-20 flex flex-col gap-5">
            <div className="overflow-hidden rounded-2xl border border-border bg-surface">
              <div className="h-1.5 w-full" style={{ background: "var(--rainbow)" }} />
              <div className="p-5">
                <h2 className="font-serif text-base font-semibold text-foreground">
                  Compare with Wikipedia
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Same subject, entirely different article. Wikipedia&rsquo;s
                  &ldquo;{article.sourceTitle}&rdquo; is one click away.
                </p>
                <Link
                  href={articleHref(article.sourceTitle)}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent"
                >
                  Read the original
                  <span aria-hidden>&rarr;</span>
                </Link>
                <p className="mt-3">
                  <a
                    href={sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted underline"
                  >
                    Or open it on en.wikipedia.org
                  </a>
                </p>
              </div>
            </div>

            {hasStructure && (
              <div className="overflow-hidden rounded-2xl border border-border bg-surface">
                <div className="h-1.5 w-full" style={{ background: "var(--rainbow)" }} />
                <div className="p-5">
                  <h2 className="font-serif text-base font-semibold text-foreground">
                    Article structure
                  </h2>
                  <p className="mt-1 text-xs text-muted">Click a section to jump to it.</p>
                  <div className="mt-3">
                    <ArticleStructureLazy root={structure} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
