import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "About wikiqo — an independent, open-knowledge reader for Wikipedia, run with the rigour of a research library and the colours of a pride parade.",
};

// The site now wears the full rainbow everywhere (see globals.css), so this page
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
  { field: "Title", value: "wikiqo — a clean reader for Wikipedia" },
  { field: "Source", value: "Wikipedia, the free encyclopedia (REST API)" },
  { field: "Format", value: "Electronic resource · web · open access" },
  { field: "Language", value: "English" },
  { field: "Rights", value: "Content CC BY-SA 4.0 · attributed to its authors" },
  { field: "Holdings", value: "The whole encyclopedia, on demand" },
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
    title: "Open by default",
    body: "Knowledge wants to be read. Everything here rides on Wikipedia's open API and stays free to reach — no paywall, no account, no permission slip.",
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
    body: "Every article credits its authors and links straight back to the original on Wikipedia, under the same CC BY-SA licence the encyclopedia uses.",
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
    <div className="shell py-14 sm:py-20">
      {/* ---- Masthead ---------------------------------------------------- */}
      <section className="animate-in mx-auto max-w-3xl text-center">
        <span className="rainbow-border rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-muted">
          Reader&rsquo;s colophon · est. in good spirits
        </span>
        <h1 className="text-rainbow mt-6 font-serif text-5xl font-bold tracking-tight sm:text-6xl">
          About wikiqo
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          A reading room for the free encyclopedia — kept with the rigour of a
          research library and painted in the colours of a pride parade.
          Catalogue-clean on the outside, all of Wikipedia on the inside.
        </p>
        {/* Full spectrum as a stack of stripes. */}
        <div
          aria-hidden
          className="mx-auto mt-8 flex h-3 w-44 overflow-hidden rounded-full shadow-glow"
        >
          {HUES.map((hue) => (
            <span key={hue} className="flex-1" style={{ background: hue }} />
          ))}
        </div>
      </section>

      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-[20rem_minmax(0,1fr)] lg:gap-12">
        {/* ---- Catalogue record card (OPAC flavour) ---------------------- */}
        <aside className="lg:sticky lg:top-20 lg:self-start">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-glow">
            <div className="h-1.5 w-full" style={{ background: "var(--rainbow)" }} />
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
              <strong>wikiqo</strong> is an independent reader for Wikipedia. It
              borrows the best habit of a great research library — set the work in
              front of you cleanly, cite it honestly, then step out of the way —
              and pairs it with something libraries have always quietly kept: a
              place for everyone, in every colour.
            </p>
            <p>
              Type a title and you get a catalogue-style result. Open it and the
              article arrives in a calm reading column, figures intact, original
              authorship credited and a single click away. No accounts, no
              clutter, no gatekeeping — just the encyclopedia, served with care.
            </p>
            <h2 className="font-serif">Why the colours</h2>
            <p>
              wikiqo now flies the full rainbow on every page, not just this one.
              A reference desk can be rigorous <em>and</em> joyful; knowledge has
              always been more welcoming when it is allowed to be bright. Consider
              the whole site a reading room fitted with the good stained glass.
            </p>
            <p>
              The palette is the classic six-stripe pride spectrum — red, orange,
              amber, green, blue, violet — wired through every gradient, glow, and
              accent. It is a small, deliberate way of saying that open knowledge
              and an open door belong together.
            </p>
          </section>

          {/* Principles grid — one rainbow stripe per card. */}
          <section className="mt-10">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
              Principles on the shelf
            </h2>
            <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {PRINCIPLES.map(({ title, body }, i) => {
                const hue = HUES[i % HUES.length];
                return (
                  <li
                    key={title}
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-[0.07]"
                      style={{ background: hue }}
                    />
                    <span
                      aria-hidden
                      className="h-1.5 w-10 rounded-full transition-all duration-300 group-hover:w-16"
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
                Millions of articles, no library card required.
              </p>
            </div>
            <Link
              href="/search"
              className="shadow-glow shrink-0 rounded-full px-7 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
              style={{ background: "var(--library-blue)", backgroundSize: "200% auto", color: "#fff" }}
            >
              Browse the catalogue
            </Link>
          </section>

          <p className="mt-8 text-xs leading-relaxed text-muted">
            wikiqo is not affiliated with the Wikimedia Foundation. Article text is
            drawn live from the{" "}
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
