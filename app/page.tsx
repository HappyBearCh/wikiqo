import type { Metadata } from "next";
import Link from "next/link";
import CitationExample from "@/components/CitationExample";
import CitationGenerator from "@/components/CitationGenerator";
import { GUIDES, getGuide, inName } from "@/lib/formats";
import { sampleCitations } from "@/lib/sample";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/site";
import { ORGANIZATION, ORGANIZATION_REF } from "@/lib/structured-data";

export const metadata: Metadata = {
  // `title.absolute` so the home page carries the full site title rather than
  // running through the "%s | wikiqo" template.
  title: { absolute: SITE_TITLE },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
};

const FAQ = [
  {
    q: "Should I cite Wikipedia at all?",
    a: "Many teachers and journals prefer that you cite the sources a Wikipedia article relies on rather than the article itself. When you do cite Wikipedia, say so honestly and point to the exact version you read.",
  },
  {
    q: "Which citation style should I use?",
    a: "Whichever your teacher, department or journal asks for. Without a rule, the usual choices are APA in psychology and the social sciences, MLA in literature and languages, Chicago in history, Harvard at most UK and Australian universities, IEEE in engineering, AMA or Vancouver in medicine, and OSCOLA or the Bluebook in law.",
  },
  {
    q: "What is a permanent link?",
    a: "Anyone can edit Wikipedia, so the article you read today may say something different tomorrow. A permanent link (with ?oldid= in the address) always opens the exact revision you read. It is on by default, and APA recommends it.",
  },
  {
    q: "Who is the author?",
    a: "Wikipedia articles are written collectively, so styles use the article title (APA, MLA, AMA), “Wikipedia” (Chicago) or “Wikipedia contributors” (Harvard, ASA, Vancouver) in the author position. The generator follows each style's convention.",
  },
  {
    q: "Which date is used?",
    a: "The publication date is when the revision you are citing was saved, taken from Wikipedia itself. The access date is today in your time zone; change it if you read the article earlier.",
  },
  {
    q: "How do I find a permanent link on Wikipedia myself?",
    a: "Open the article's Tools menu and choose “Permanent link”, or open “View history” and click the date of the revision you read. Either gives an address ending in ?oldid= followed by the revision number. wikiqo looks this up for you.",
  },
  {
    q: "Does it work for other languages?",
    a: "Yes. Paste a link from any language edition, such as de.wikipedia.org or ja.wikipedia.org, and the citation keeps that edition's address and title.",
  },
  {
    q: "Is it free?",
    a: "Yes. There are no accounts and no limits, and the lookup happens in your own browser, straight from Wikipedia.",
  },
];

/** The styles most people arrive looking for, shown as worked examples. */
const SHOWCASE = ["apa", "mla", "chicago", "harvard"];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      alternateName: SITE_TITLE,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      inLanguage: "en",
      publisher: ORGANIZATION_REF,
    },
    {
      "@type": "WebApplication",
      name: `${SITE_NAME} Wikipedia citation generator`,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      applicationCategory: "ReferenceApplication",
      operatingSystem: "Any",
      browserRequirements: "Requires JavaScript",
      isAccessibleForFree: true,
      featureList: GUIDES.map((g) => `${g.name} citations`),
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      publisher: ORGANIZATION_REF,
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
    ORGANIZATION,
  ],
};

export default function Home() {
  return (
    <div className="shell py-12 sm:py-16">
      <script
        type="application/ld+json"
        // Static, developer-authored object — no user input reaches it.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="mx-auto max-w-3xl">
        <h1 className="text-center font-serif text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          <span className="eyebrow mb-3 block font-sans">Wikipedia citation generator</span>
          Cite any Wikipedia article in seconds.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-muted">
          Paste the article&rsquo;s link and get it in APA, MLA, Chicago, Harvard,
          IEEE, OSCOLA, the Bluebook and more, with the right dates and a permanent link to the version
          you read.
        </p>
        <div className="mt-8">
          <CitationGenerator />
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-5xl" aria-labelledby="formats">
        <h2 id="formats" className="font-serif text-2xl font-bold tracking-tight sm:text-3xl">
          {GUIDES.length} formats from one link
        </h2>
        <p className="mt-2 text-muted">
          Each has a guide to how it works and where it came from.{" "}
          <Link href="/formats" className="underline">
            All formats
          </Link>
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {GUIDES.map((f) => (
            <li key={f.slug} className="flex">
              <Link href={`/formats/${f.slug}`} className="card flex-1 p-4 text-foreground no-underline">
                <span className="font-semibold">{f.name}</span>
                <span className="mt-1 text-sm leading-relaxed text-muted">{f.note}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto mt-20 max-w-5xl" aria-labelledby="how">
        <h2 id="how" className="font-serif text-2xl font-bold tracking-tight sm:text-3xl">
          How it works
        </h2>
        <ol className="mt-6 grid gap-6 sm:grid-cols-3">
          {[
            ["Paste a link", "Any Wikipedia address works: desktop or mobile, any language, or a permanent link to an old revision. A plain title like “Moon” works too."],
            ["We ask Wikipedia", "Your browser looks up the article's exact title, latest revision and when it was saved. Redirects are followed, so you cite the real article."],
            ["Copy and paste", "Each citation copies with its italics intact for Word and Google Docs. BibTeX and RIS copy as plain text for your reference manager."],
          ].map(([title, body], i) => (
            <li key={title}>
              <span className="grid h-9 w-9 place-items-center rounded-full bg-accent-soft font-semibold text-accent">
                {i + 1}
              </span>
              <h3 className="mt-3 font-semibold">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto mt-20 max-w-3xl" aria-labelledby="examples">
        <h2 id="examples" className="font-serif text-2xl font-bold tracking-tight sm:text-3xl">
          Wikipedia citation examples
        </h2>
        <p className="mt-2 text-muted">
          The article &ldquo;Moon&rdquo;, cited with a permanent link to the revision saved on 31 December 2024.
        </p>
        <div className="mt-6 space-y-4">
          {SHOWCASE.map((id) => {
            const guide = getGuide(id)!;
            return (
              <div key={id}>
                <CitationExample {...sampleCitations([id])[0]} />
                <Link href={`/formats/${guide.slug}`} className="mt-2 inline-block text-sm underline">
                  How to cite Wikipedia in {inName(guide)}
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-3xl" aria-labelledby="faq">
        <h2 id="faq" className="font-serif text-2xl font-bold tracking-tight sm:text-3xl">
          Questions
        </h2>
        <div className="mt-6 divide-y divide-border border-y border-border">
          {FAQ.map(({ q, a }) => (
            <details key={q} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                {q}
                <span aria-hidden className="text-muted transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-2 leading-relaxed text-muted">{a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
