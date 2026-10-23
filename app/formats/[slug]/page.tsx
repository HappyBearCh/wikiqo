import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CitationExample from "@/components/CitationExample";
import CitationGenerator from "@/components/CitationGenerator";
import { GUIDES, getGuide, inName, type FormatGuide } from "@/lib/formats";
import { sampleCitations } from "@/lib/sample";
import { CONTENT_UPDATED, GUIDES_PUBLISHED, OG_BASE, SITE_URL } from "@/lib/site";
import { ORGANIZATION_REF } from "@/lib/structured-data";

/** Every guide is known at build time; anything else is a 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

/**
 * Worded for how people search ("how to cite wikipedia in apa"), which is
 * what most visitors to a guide want; the style's background follows below.
 */
const guideTitle = (guide: FormatGuide) => `How to cite Wikipedia in ${inName(guide)}, with examples`;
const guideDescription = (guide: FormatGuide) =>
  `How to cite a Wikipedia article in ${inName(guide)}: a worked example, what each part of the citation means, and a free generator that formats any article for you.`;

export async function generateMetadata(props: PageProps<"/formats/[slug]">): Promise<Metadata> {
  const guide = getGuide((await props.params).slug);
  if (!guide) return {};
  return {
    title: guideTitle(guide),
    description: guideDescription(guide),
    alternates: { canonical: `/formats/${guide.slug}` },
    openGraph: {
      ...OG_BASE,
      type: "article",
      url: `/formats/${guide.slug}`,
      title: guideTitle(guide),
      description: guideDescription(guide),
      publishedTime: GUIDES_PUBLISHED,
      modifiedTime: CONTENT_UPDATED,
    },
  };
}

export default async function FormatPage(props: PageProps<"/formats/[slug]">) {
  const guide = getGuide((await props.params).slug);
  if (!guide) notFound();

  const url = `${SITE_URL}/formats/${guide.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: guideTitle(guide),
        description: guideDescription(guide),
        url,
        mainEntityOfPage: url,
        image: `${SITE_URL}/opengraph-image`,
        inLanguage: "en",
        datePublished: GUIDES_PUBLISHED,
        dateModified: CONTENT_UPDATED,
        author: ORGANIZATION_REF,
        publisher: ORGANIZATION_REF,
        about: guide.fullName,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Citation formats", item: `${SITE_URL}/formats` },
          { "@type": "ListItem", position: 3, name: guide.name, item: url },
        ],
      },
    ],
  };

  return (
    <div className="shell py-12 sm:py-16">
      <script
        type="application/ld+json"
        // Static, developer-authored object — no user input reaches it.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-3xl">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <Link href="/" className="hover:text-accent">
            Home
          </Link>{" "}
          <span aria-hidden>›</span>{" "}
          <Link href="/formats" className="hover:text-accent">
            Citation formats
          </Link>{" "}
          <span aria-hidden>›</span> {guide.name}
        </nav>

        <h1 className="mt-3 font-serif text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          How to cite Wikipedia in {inName(guide)}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Paste any Wikipedia link to get a ready-to-copy {guide.name} citation, or
          read on for a worked example, the rules behind each part, and the story of
          the style itself.
        </p>

        <div className="mt-8">
          <CitationGenerator formats={guide.citationIds} />
        </div>

        <section className="mt-14" aria-labelledby="wikipedia">
          <h2 id="wikipedia" className="font-serif text-2xl font-bold tracking-tight sm:text-3xl">
            Example: a Wikipedia article in {inName(guide)}
          </h2>
          <p className="mt-2 text-muted">
            The English Wikipedia article &ldquo;Moon&rdquo;, as saved on 31 December 2024 and read on 15 January 2025.
          </p>
          <div className="mt-5 space-y-3">
            {sampleCitations(guide.citationIds).map(({ caption, citation }) => (
              <CitationExample key={`${citation.id}-${caption}`} caption={caption} citation={citation} />
            ))}
          </div>
          <h3 className="mt-8 font-semibold">What each part means</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
            {guide.wikipedia.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>

        <section className="mt-14" aria-labelledby="about">
          <h2 id="about" className="font-serif text-2xl font-bold tracking-tight sm:text-3xl">
            About {guide.name}
          </h2>
          <p className="mt-1 text-muted">{guide.fullName}</p>
          <p className="mt-4 leading-relaxed">{guide.intro}</p>
          <dl className="mt-6 grid gap-x-6 gap-y-4 rounded-2xl border border-border bg-surface p-5 sm:grid-cols-2">
            {guide.facts.map((f) => (
              <div key={f.label}>
                <dt className="eyebrow">{f.label}</dt>
                <dd className="mt-0.5 text-sm leading-relaxed">{f.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-14" aria-labelledby="how">
          <h2 id="how" className="font-serif text-2xl font-bold tracking-tight sm:text-3xl">
            How {guide.name} works
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed">
            {guide.howItWorks.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        <section className="mt-14" aria-labelledby="history">
          <h2 id="history" className="font-serif text-2xl font-bold tracking-tight sm:text-3xl">
            Where it came from
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed">
            {guide.history.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        <section className="mt-14" aria-labelledby="stories">
          <h2 id="stories" className="font-serif text-2xl font-bold tracking-tight sm:text-3xl">
            {guide.anecdotes.length > 1 ? "Stories from its history" : "A story from its history"}
          </h2>
          <div className="mt-5 grid gap-4">
            {guide.anecdotes.map((a) => (
              <div key={a.title} className="card p-5">
                <h3 className="font-semibold">{a.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{a.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14" aria-labelledby="sources">
          <h2 id="sources" className="eyebrow">
            Sources and further reading
          </h2>
          <ul className="mt-3 space-y-1.5 text-sm">
            {guide.sources.map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <nav aria-label="Other formats" className="mt-14 border-t border-border pt-8">
          <h2 className="eyebrow">Cite Wikipedia in another format</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {GUIDES.filter((g) => g.slug !== guide.slug).map((g) => (
              <li key={g.slug}>
                <Link href={`/formats/${g.slug}`} className="chip">
                  {g.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </article>
    </div>
  );
}
