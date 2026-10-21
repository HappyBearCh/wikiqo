import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articleUrl, buildCitations, permanentUrl, type ArticleInfo, type Citation } from "@/lib/citation";
import { GUIDES, getGuide } from "@/lib/formats";
import { OG_BASE, SITE_URL } from "@/lib/site";
import { ORGANIZATION_REF } from "@/lib/structured-data";

/** Every guide is known at build time; anything else is a 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata(props: PageProps<"/formats/[slug]">): Promise<Metadata> {
  const guide = getGuide((await props.params).slug);
  if (!guide) return {};
  const title = `${guide.name} citation format: how it works and where it came from`;
  return {
    title,
    description: guide.intro,
    alternates: { canonical: `/formats/${guide.slug}` },
    openGraph: { ...OG_BASE, type: "article", url: `/formats/${guide.slug}`, title, description: guide.intro },
  };
}

/**
 * A real revision of "Moon", so the permanent link in the example opens what
 * it claims to. The access date is fixed so the page doesn't change per build.
 */
const SAMPLE: ArticleInfo = {
  lang: "en",
  title: "Moon",
  revisionId: 1266356498,
  revisionTimestamp: "2024-12-31T06:13:09Z",
};
const SAMPLE_ACCESSED = new Date(2025, 0, 15);

/** Hides which of the two links a citation uses, to compare everything else. */
const withoutLink = (text: string) =>
  [permanentUrl(SAMPLE), articleUrl(SAMPLE)].reduce((t, u) => t.replace(u.replace(/^https:\/\//, ""), "URL"), text);

/** The example citations for a guide, with the live-article form only where it differs. */
function examples(ids: string[]) {
  const permanent = buildCitations(SAMPLE, { permalink: true, accessed: SAMPLE_ACCESSED });
  const live = buildCitations(SAMPLE, { permalink: false, accessed: SAMPLE_ACCESSED });
  return ids.flatMap((id) => {
    const p = permanent.find((c) => c.id === id)!;
    const l = live.find((c) => c.id === id)!;
    const shown = [{ caption: "With a permanent link to the revision", citation: p }];
    if (withoutLink(p.text) !== withoutLink(l.text)) shown.push({ caption: "With the live article", citation: l });
    return shown;
  });
}

function Example({ caption, citation }: { caption: string; citation: Citation }) {
  return (
    <figure className="card p-5">
      <figcaption className="flex flex-wrap items-baseline gap-x-2 text-sm">
        <span className="font-semibold">{citation.label}</span>
        {citation.edition && <span className="text-muted">{citation.edition}</span>}
        <span className="text-muted">· {caption}</span>
      </figcaption>
      {citation.code ? (
        <pre className="mt-3 overflow-x-auto whitespace-pre-wrap break-all rounded-lg bg-surface-hover p-3 font-mono text-[0.8125rem] leading-relaxed">
          {citation.text}
        </pre>
      ) : (
        <p
          className="mt-3 break-words font-serif text-[1.0625rem] leading-relaxed"
          // Built by lib/citation.ts from a fixed sample, which escapes every value and adds only <i>.
          dangerouslySetInnerHTML={{ __html: citation.html }}
        />
      )}
      {citation.inText && (
        <p className="mt-3 border-t border-border pt-3 text-sm">
          <span className="text-muted">{citation.inTextLabel ?? "In-text"}</span>{" "}
          <span className="break-words font-serif">{citation.inText}</span>
        </p>
      )}
    </figure>
  );
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
        headline: `${guide.name} citation format`,
        description: guide.intro,
        url,
        inLanguage: "en",
        publisher: ORGANIZATION_REF,
        about: guide.fullName,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Citation formats", item: `${SITE_URL}/formats` },
          { "@type": "ListItem", position: 2, name: guide.name, item: url },
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
          <Link href="/formats" className="hover:text-accent">
            Citation formats
          </Link>{" "}
          <span aria-hidden>›</span> {guide.name}
        </nav>

        <h1 className="mt-3 font-serif text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          {guide.name}
        </h1>
        <p className="mt-1 text-lg text-muted">{guide.fullName}</p>
        <p className="mt-5 text-lg leading-relaxed">{guide.intro}</p>

        <dl className="mt-8 grid gap-x-6 gap-y-4 rounded-2xl border border-border bg-surface p-5 sm:grid-cols-2">
          {guide.facts.map((f) => (
            <div key={f.label}>
              <dt className="eyebrow">{f.label}</dt>
              <dd className="mt-0.5 text-sm leading-relaxed">{f.value}</dd>
            </div>
          ))}
        </dl>

        <section className="mt-12" aria-labelledby="wikipedia">
          <h2 id="wikipedia" className="font-serif text-2xl font-bold tracking-tight sm:text-3xl">
            Citing a Wikipedia article in {guide.name}
          </h2>
          <div className="mt-5 space-y-3">
            {examples(guide.citationIds).map(({ caption, citation }) => (
              <Example key={`${citation.id}-${caption}`} caption={caption} citation={citation} />
            ))}
          </div>
          <ul className="mt-6 list-disc space-y-2 pl-5 leading-relaxed">
            {guide.wikipedia.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <p className="mt-6">
            <Link href="/" className="btn-primary">
              Cite an article in {guide.name}
            </Link>
          </p>
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
          <h2 className="eyebrow">Other formats</h2>
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
