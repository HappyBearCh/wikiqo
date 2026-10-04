import type { Metadata } from "next";
import Link from "next/link";
import { OG_BASE } from "@/lib/site";

const DESCRIPTION =
  "About wikiqo — original articles on the encyclopedia's best subjects, plus an uncluttered reader for Wikipedia, kept with the rigour of a research library and the colours of a pride parade.";

export const metadata: Metadata = {
  title: "About",
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: {
    ...OG_BASE,
    type: "article",
    url: "/about",
    title: "About wikiqo",
    description: DESCRIPTION,
  },
};

// The pride spectrum is the site's signature (see globals.css); this page
// simply leans into the shared --rb-* spectrum. One hue per pride stripe,
// red → violet, reused across the subject tags and principle cards.
const HUES = [
  "var(--rb-1)", // red
  "var(--rb-2)", // orange
  "var(--rb-3)", // amber
  "var(--rb-4)", // green
  "var(--rb-5)", // blue
  "var(--rb-6)", // violet
];

// A library-catalog "record" for wikiqo itself — a nod to OPAC / ProQuest entries.
const CATALOG = [
  { field: "Title", value: "wikiqo — the encyclopedia's best subjects, rewritten" },
  { field: "Source", value: "Original writing (wikiqorgi) · Wikipedia REST API" },
  { field: "Format", value: "Electronic resource · web · open access" },
  { field: "Language", value: "English" },
  { field: "Rights", value: "Mirrored text CC BY-SA 4.0 · attributed to its authors" },
  { field: "Holdings", value: "Original articles, plus Wikipedia's most-read" },
];

const SUBJECTS = [
  "Open knowledge",
  "Reference",
  "Reading",
  "Accessibility",
  "Queer joy",
  "Public-domain ethos",
];

// One principle per stripe of the rainbow. Colour index lines up with HUES.
const PRINCIPLES = [
  {
    title: "Written to be read",
    body: "The wikiqorgi shelf takes the encyclopedia's best subjects and writes them again from scratch — same facts, new prose, built to be read from top to bottom.",
  },
  {
    title: "Clean reading",
    body: "Articles arrive stripped of clutter: the text, the figures, and a calm serif column built for actually finishing the page you opened.",
  },
  {
    title: "Fast access",
    body: "Read it like a card catalogue — type a title, get the record, start reading. The heavier machinery only loads once you reach for it.",
  },
  {
    title: "Always attributed",
    body: "Every mirrored article credits its authors under the CC BY-SA licence Wikipedia uses. Every original lists its sources and links to Wikipedia's version of the subject.",
  },
  {
    title: "Built to be legible",
    body: "High-contrast type, keyboard-friendly controls, and reduced-motion support. A reading room should welcome everyone who walks through the door.",
  },
  {
    title: "Proudly independent",
    body: "wikiqo is an unaffiliated labour of love. It answers to its readers, flies its own colours, and has nothing to sell you.",
  },
];

export default function AboutPage() {
  return (
    <div className="shell py-12 sm:py-16">
      {/* ---- Masthead ---------------------------------------------------- */}
      <section className="max-w-2xl">
        <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">About wikiqo</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          A reading room for the encyclopedia&rsquo;s best subjects — kept with
          the rigour of a research library, and flying the colours of a pride
          parade.
        </p>
        {/* The six-stripe spectrum, once, as the page's signature. */}
        <div aria-hidden className="mt-6 flex h-1.5 w-32 overflow-hidden rounded-full">
          {HUES.map((hue) => (
            <span key={hue} className="flex-1" style={{ background: hue }} />
          ))}
        </div>
      </section>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[20rem_minmax(0,1fr)] lg:gap-12">
        {/* ---- Catalogue record card (OPAC flavour) ---------------------- */}
        <aside className="lg:sticky lg:top-20 lg:self-start">
          <div className="rounded-xl border border-border bg-surface">
            <div className="p-5">
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                Catalogue record
              </p>
              <h2 className="mt-1 font-serif text-lg font-semibold text-foreground">
                Record&nbsp;№ WQ-001
              </h2>

              <dl className="mt-4 space-y-3">
                {CATALOG.map(({ field, value }) => (
                  <div key={field} className="grid grid-cols-[5.5rem_1fr] gap-2">
                    <dt className="font-mono text-[11px] uppercase tracking-wide text-muted">
                      {field}
                    </dt>
                    <dd className="text-sm leading-snug text-foreground">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-5 border-t border-border pt-4">
                <p className="font-mono text-[11px] uppercase tracking-wide text-muted">
                  Subjects
                </p>
                <ul className="mt-2.5 flex flex-wrap gap-1.5">
                  {SUBJECTS.map((subject, i) => (
                    <li
                      key={subject}
                      className="rounded-full px-2.5 py-1 text-xs font-medium text-white"
                      style={{ background: HUES[i % HUES.length] }}
                    >
                      {subject}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </aside>

        {/* ---- Narrative + principles ------------------------------------ */}
        <div className="min-w-0">
          <section className="prose prose-lg prose-neutral dark:prose-invert max-w-none font-serif">
            <h2 className="font-serif">What this is</h2>
            <p>
              <strong>wikiqo</strong> is two things. The first is{" "}
              <Link href="/wikiqorgi">wikiqorgi</Link>: the encyclopedia&rsquo;s
              best subjects — black holes, money, the jury, fungi — researched
              again and written from scratch, each one with its sources listed
              at the foot of the page. Same facts as the encyclopedia, entirely
              different prose, built to be read from start to finish.
            </p>
            <p>
              The second is a reader for Wikipedia itself. Its most-read articles
              arrive in a calm reading column, figures intact, authorship
              credited and a click away. Anything outside that set opens on
              Wikipedia directly, and search tells you before it does. Where
              wikiqorgi has its own article on a subject, the Wikipedia page says
              so.
            </p>
            <p>
              Both borrow the best habit of a great research library — set the
              work in front of you cleanly, cite it honestly, then step out of
              the way — and pair it with something libraries have always quietly
              kept: a place for everyone, in every colour.
            </p>
            <h2 className="font-serif">Why the colours</h2>
            <p>
              The rainbow runs along the top of every page, and each section of
              the shelf carries one of its colours. A reference desk can be
              rigorous <em>and</em> joyful; knowledge has always been more
              welcoming when it is allowed to be bright.
            </p>
            <p>
              The palette is the classic six-stripe pride spectrum — red, orange,
              amber, green, blue, violet. It is kept to the edges so the reading
              stays calm, and it is a small, deliberate way of saying that open
              knowledge and an open door belong together.
            </p>
          </section>

          {/* Principles grid — one stripe of the spectrum per card. */}
          <section className="mt-10">
            <h2 className="eyebrow">Principles on the shelf</h2>
            <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {PRINCIPLES.map(({ title, body }, i) => {
                const hue = HUES[i % HUES.length];
                return (
                  <li
                    key={title}
                    className="card h-full p-5"
                  >
                    <span
                      aria-hidden
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ background: hue }}
                    />
                    <h3 className="mt-4 font-serif text-lg font-semibold tracking-tight text-foreground">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
                  </li>
                );
              })}
            </ul>
          </section>

          {/* ---- Call to action + colophon ------------------------------- */}
          <section className="mt-12 flex flex-col items-start gap-5 rounded-2xl border border-border bg-surface p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-serif text-xl font-semibold text-foreground">
                Start in the stacks
              </h2>
              <p className="mt-1 text-sm text-muted">
                Original articles, no library card required.
              </p>
            </div>
            <Link href="/wikiqorgi" className="btn-primary shrink-0">
              Browse the articles
            </Link>
          </section>

          <p className="mt-8 text-xs leading-relaxed text-muted">
            wikiqo is not affiliated with the Wikimedia Foundation. wikiqorgi
            articles are original writing. Mirrored article text is drawn from
            the{" "}
            <a
              href="https://en.wikipedia.org/api/rest_v1/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Wikipedia REST API
            </a>{" "}
            and remains the work of its authors under the{" "}
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Creative Commons Attribution-ShareAlike 4.0 License
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
