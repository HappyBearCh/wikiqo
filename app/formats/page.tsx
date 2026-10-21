import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES, OTHER_STYLES } from "@/lib/formats";
import { OG_BASE } from "@/lib/site";

const DESCRIPTION =
  "A guide to every citation format wikiqo produces, from APA, MLA and Chicago to OSCOLA, the Bluebook and BibTeX: how each one works, how it cites Wikipedia, and how it came to be.";

export const metadata: Metadata = {
  title: "Citation formats",
  description: DESCRIPTION,
  alternates: { canonical: "/formats" },
  openGraph: {
    ...OG_BASE,
    type: "website",
    url: "/formats",
    title: "Citation formats explained",
    description: DESCRIPTION,
  },
};

export default function FormatsPage() {
  return (
    <div className="shell py-12 sm:py-16">
      <section className="mx-auto max-w-3xl">
        <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight sm:text-5xl">Citation formats</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Every discipline has settled on its own way of pointing to sources, and
          most of those ways started as a page of house rules for one journal or
          press. Here is how each format wikiqo produces works, how it handles a
          Wikipedia article, and where it came from.
        </p>
      </section>

      <ul className="mx-auto mt-10 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {GUIDES.map((g) => (
          <li key={g.slug} className="flex">
            <Link href={`/formats/${g.slug}`} className="card flex-1 p-4 text-foreground no-underline">
              <span className="font-semibold">{g.name}</span>
              <span className="mt-0.5 text-sm text-muted">{g.fullName}</span>
              <span className="mt-2 text-sm leading-relaxed">{g.note}</span>
            </Link>
          </li>
        ))}
      </ul>

      <section className="mx-auto mt-16 max-w-3xl" aria-labelledby="other">
        <h2 id="other" className="font-serif text-2xl font-bold tracking-tight">
          Other styles you may be asked for
        </h2>
        <p className="mt-2 leading-relaxed text-muted">
          wikiqo doesn&rsquo;t generate these yet, but most are close relatives of
          a format above.
        </p>
        <dl className="mt-5 divide-y divide-border border-y border-border">
          {OTHER_STYLES.map((s) => (
            <div key={s.name} className="flex flex-col gap-1 py-3 sm:flex-row sm:gap-6">
              <dt className="font-medium sm:w-40 sm:shrink-0">{s.name}</dt>
              <dd className="text-sm leading-relaxed text-muted">
                {s.note}
                {s.seeSlug && (
                  <>
                    {" "}
                    <Link href={`/formats/${s.seeSlug}`} className="underline">
                      See {GUIDES.find((g) => g.slug === s.seeSlug)?.name}
                    </Link>
                  </>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
