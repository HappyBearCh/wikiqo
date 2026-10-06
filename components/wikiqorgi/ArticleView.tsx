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
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { ORGANIZATION, ORGANIZATION_REF, breadcrumbList } from "@/lib/structured-data";
import { parseArticleStructure } from "@/lib/structure";
import { wikipediaUrlFor } from "@/lib/wikipedia";
import TableOfContents from "@/components/TableOfContents";

/** One rewritten article, in the same reading chrome as a mirrored Wikipedia
 *  article so both halves of the site feel like one. Rendered by the shared
 *  /wikiqorgi/[slug] route when the slug names an article. */
export default function ArticleView({ article }: { article: RewrittenArticle }) {
  const section = getSectionForSlug(article.slug);
  const structure = parseArticleStructure(article.title, article.html);
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

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-16">
        <article className="min-w-0 max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
            <Link href="/wikiqorgi" className="font-medium transition-colors hover:text-accent">
              Articles
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

          <header className="mb-8 border-b border-border pb-6">
            <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
              {article.title}
            </h1>
            <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
              <span>{article.readingMinutes} min read</span>
              <span aria-hidden className="opacity-50">
                ·
              </span>
              <time dateTime={article.published}>{formatPublished(article.published)}</time>
              <span aria-hidden className="opacity-50">
                ·
              </span>
              {/* Links into /wiki/ are nofollow: the mirror is disallowed in
                  robots.txt and canonicals to Wikipedia (see FeaturedGrid). */}
              <Link
                href={articleHref(article.sourceTitle)}
                rel="nofollow"
                className="hover:text-accent"
              >
                Wikipedia&rsquo;s &ldquo;{article.sourceTitle}&rdquo;
              </Link>
            </p>
          </header>

          <p className="mb-8 text-lg leading-8 text-foreground/85">
            {article.standfirst}
          </p>

          <TableOfContents root={structure} variant="collapsible" />

          <div
            className="wiki-content prose prose-lg prose-neutral dark:prose-invert max-w-none"
            // Hand-authored HTML from content/wikiqorgi — a compile-time
            // constant in this repo, never user or network input — plus the
            // links added by crosslinks.ts, which only ever inserts anchors to
            // /wikiqorgi/ slugs around text already in that HTML.
            dangerouslySetInnerHTML={{ __html: bodyHtml }}
          />

          {sources.length > 0 && <SourcesList sources={sources} />}

          <footer className="mt-12 border-t border-border pt-6 text-sm leading-relaxed text-muted">
            <p>
              This article is original writing by {SITE_NAME}. It is not adapted
              from, and shares no text with, Wikipedia&rsquo;s article on the same
              subject — you can read that one{" "}
              <Link
                href={articleHref(article.sourceTitle)}
                rel="nofollow"
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
              <h2 className="eyebrow">
                More from{" "}
                <Link href={sectionHref(section.id)} className="hover:text-accent">
                  {section.title}
                </Link>
              </h2>
              <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {siblings.map((sibling) => (
                  <li key={sibling.slug}>
                    <Link href={rewrittenHref(sibling.slug)} className="card h-full p-4">
                      <span className="font-serif text-base font-semibold leading-snug text-foreground">
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
          <div className="sticky top-24 max-h-[calc(100vh-8rem)] space-y-8 overflow-y-auto pb-4">
            <TableOfContents root={structure} variant="sidebar" />
            <div className="border-t border-border pt-6 text-sm leading-relaxed text-muted">
              <h2 className="eyebrow mb-2">Compare with Wikipedia</h2>
              <p>
                Same subject, a different article.{" "}
                <Link href={articleHref(article.sourceTitle)} rel="nofollow" className="font-medium">
                  Read Wikipedia&rsquo;s version
                </Link>
                .
              </p>
            </div>
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
