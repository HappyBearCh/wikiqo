import Link from "next/link";
import {
  getSectionForSlug,
  getSources,
  rewrittenHref,
  sectionHref,
  type RewrittenArticle,
  type Source,
} from "@/content/wikiqorgi";
import { linkArticleHtml } from "@/content/wikiqorgi/crosslinks";
import { articleHref } from "@/lib/links";
import { keywordsFromHtml } from "@/lib/keywords";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { ORGANIZATION, ORGANIZATION_REF, breadcrumbList } from "@/lib/structured-data";
import { parseArticleStructure } from "@/lib/structure";
import { wikipediaUrlFor } from "@/lib/wikipedia";
import ArticleStructureLazy from "@/components/ArticleStructureLazy";
import MobileContents from "@/components/MobileContents";
import TextBanner from "@/components/TextBanner";

/** One rewritten article, in the same reading chrome as a mirrored Wikipedia
 *  article so both halves of the site feel like one. Rendered by the shared
 *  /wikiqorgi/[slug] route when the slug names an article. */
export default function ArticleView({ article }: { article: RewrittenArticle }) {
  const section = getSectionForSlug(article.slug);
  const hue = section?.hue ?? "var(--rb-5)";
  const structure = parseArticleStructure(article.title, article.html);
  const hasStructure = structure.children.length > 0;
  const words = keywordsFromHtml(article.html);
  const sourceUrl = wikipediaUrlFor(article.sourceTitle);
  const sources = getSources(article.slug);
  // Body with in-text links to the rest of the shelf. Built at prerender time
  // from compile-time constants, so it is as static as the article itself.
  const bodyHtml = linkArticleHtml(article);

  // Siblings on the same shelf, for the "keep reading" links at the foot.
  const siblings = (section?.articles ?? []).filter((a) => a.slug !== article.slug);

  const articleUrl = `${SITE_URL}${rewrittenHref(article.slug)}`;
  const articleJsonLd = {
    "@type": "Article",
    "@id": `${articleUrl}#article`,
    headline: article.title,
    description: article.dek,
    url: articleUrl,
    mainEntityOfPage: articleUrl,
    // The page's generated social card (opengraph-image.tsx beside the
    // route). Google's article rich results require an image, and these
    // articles have no other.
    image: {
      "@type": "ImageObject",
      url: `${articleUrl}/opengraph-image`,
      width: 1200,
      height: 630,
    },
    inLanguage: "en",
    datePublished: article.published,
    // Articles are not revised after publication yet; when one is, give it a
    // `modified` field and use it here.
    dateModified: article.published,
    wordCount: article.html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length,
    // The Sources list, so search engines see the article's grounding the way
    // a reader does.
    citation: sources.map((source) => ({
      "@type": "CreativeWork",
      name: source.title,
      author: source.author,
      datePublished: String(source.year),
    })),
    author: ORGANIZATION_REF,
    publisher: ORGANIZATION_REF,
    about: { "@type": "Thing", name: article.sourceTitle, sameAs: sourceUrl },
    isPartOf: section
      ? {
          "@type": "CollectionPage",
          name: section.title,
          url: `${SITE_URL}${sectionHref(section.id)}`,
        }
      : undefined,
  };

  return (
    <div className="shell py-10">
      <script
        type="application/ld+json"
        // Static, developer-authored object — no user input reaches it.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              articleJsonLd,
              ORGANIZATION,
              breadcrumbList([
                { name: "wikiqorgi", path: "/wikiqorgi" },
                ...(section ? [{ name: section.title, path: sectionHref(section.id) }] : []),
                { name: article.title, path: rewrittenHref(article.slug) },
              ]),
            ],
          }),
        }}
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
                <Link
                  href={sectionHref(section.id)}
                  className="transition-colors hover:text-accent"
                >
                  {section.title}
                </Link>
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
              <time dateTime={article.published}>{formatPublished(article.published)}</time>
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

          <MobileContents root={structure} />

          <div
            className="wiki-content prose prose-lg prose-neutral dark:prose-invert max-w-none"
            // Hand-authored HTML from content/wikiqorgi — a compile-time
            // constant in this repo, never user or network input — plus the
            // links added by crosslinks.ts, which only ever inserts anchors to
            // /wikiqorgi/ slugs around text already in that HTML.
            dangerouslySetInnerHTML={{ __html: bodyHtml }}
          />

          {sources.length > 0 && <SourcesList sources={sources} />}

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

          {siblings.length > 0 && section && (
            <section className="mt-10">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
                More from{" "}
                <Link href={sectionHref(section.id)} className="hover:text-accent">
                  {section.title}
                </Link>
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

/** "2026-08-16" → "16 August 2026", in UTC so the build machine's zone can't
 *  shift the day. */
function formatPublished(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

/**
 * Further reading: the standard works behind the article, oldest first. Not
 * footnotes — nothing in the body points at a particular entry — but enough
 * for a reader to check the account against the record.
 */
function SourcesList({ sources }: { sources: Source[] }) {
  return (
    <section aria-labelledby="sources-heading" className="mt-12">
      <h2
        id="sources-heading"
        className="font-serif text-2xl font-semibold tracking-tight text-foreground"
      >
        Sources and further reading
      </h2>
      <ol className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted">
        {sources.map((source) => (
          <li key={`${source.author}-${source.title}`} className="pl-4 -indent-4">
            {source.author} ({source.year}).{" "}
            <cite className="text-foreground">{source.title}</cite>
            {/* "Black hole explosions?" takes no full stop after it. */}
            {/[.?!]$/.test(source.title) ? "" : "."}
            {source.publication && <> {source.publication}.</>}
          </li>
        ))}
      </ol>
    </section>
  );
}
