import type { RewrittenArticle, WikiqorgiSection } from "./types";
import { blackHole } from "./black-hole";
import { photosynthesis } from "./photosynthesis";
import { mountEverest } from "./mount-everest";
import { albertEinstein } from "./albert-einstein";
import { artificialIntelligence } from "./artificial-intelligence";
import { romanEmpire } from "./roman-empire";
import { renaissance } from "./renaissance";
import { jazz } from "./jazz";
import { antibioticResistance } from "./antibiotic-resistance";
import { vaccines } from "./vaccines";
import { sleep } from "./sleep";
import { zero } from "./zero";
import { cryptography } from "./cryptography";
import { probability } from "./probability";
import { plateTectonics } from "./plate-tectonics";
import { evolution } from "./evolution";
import { kpgExtinction } from "./kpg-extinction";
import { light } from "./light";
import { water } from "./water";
import { alanTuring } from "./alan-turing";
import { theInternet } from "./the-internet";
import { printingPress } from "./printing-press";
import { silkRoad } from "./silk-road";
import { consciousness } from "./consciousness";
import { gutMicrobiome } from "./gut-microbiome";
import { pain } from "./pain";
import { infinity } from "./infinity";
import { incompleteness } from "./incompleteness";
import { originOfLife } from "./origin-of-life";
import { iceAges } from "./ice-ages";
import { writingSystems } from "./writing-systems";
import { protoIndoEuropean } from "./proto-indo-european";
import { translation } from "./translation";
import { signLanguage } from "./sign-language";
import { dictionaries } from "./dictionaries";
import { money } from "./money";
import { inflation } from "./inflation";
import { insurance } from "./insurance";
import { jointStockCompany } from "./joint-stock-company";
import { greatDepression } from "./great-depression";
import { sanitation } from "./sanitation";
import { broadStreetPump } from "./broad-street-pump";
import { electricalGrid } from "./electrical-grid";
import { inducedDemand } from "./induced-demand";
import { zoning } from "./zoning";
import { theMoon } from "./the-moon";
import { theSun } from "./the-sun";
import { telescopes } from "./telescopes";
import { exoplanets } from "./exoplanets";
import { theCalendar } from "./the-calendar";

/**
 * The wikiqorgi shelf: the same subjects the rest of the site mirrors from
 * Wikipedia, re-reported and rewritten from scratch in wikiqo's own voice.
 *
 * Everything below is a compile-time constant. No database, no API, no fetch —
 * the index and every article page prerender to static HTML at build time.
 *
 * Target shape: 50 articles across 10 sections of 5. Deliberately capped there.
 * The shelf's whole claim is that each piece is written rather than generated in
 * bulk, and that claim does not survive being scaled — nor would the domain,
 * since a large number of pages appearing at once is exactly the pattern search
 * engines treat as scaled content abuse. Add articles in small batches.
 */
export const WIKIQORGI_SECTIONS: WikiqorgiSection[] = [
  {
    id: "the-physical-world",
    title: "The physical world",
    blurb:
      "Subjects that textbooks flatten into a summary sentence, opened back up: what a black hole actually is, what a leaf actually does, what a mountain is made of, and why the two most ordinary substances in your life — light and water — are the two that behave most strangely.",
    hue: "var(--rb-5)",
    articles: [blackHole, photosynthesis, mountEverest, light, water],
  },
  {
    id: "minds-and-machines",
    title: "Minds and machines",
    blurb:
      "Two men who each took a small inconsistency seriously enough to rebuild a discipline around it, a field that keeps redefining intelligence as whatever it has not managed yet, and the network all of it now runs on.",
    hue: "var(--rb-6)",
    articles: [
      albertEinstein,
      alanTuring,
      artificialIntelligence,
      theInternet,
      consciousness,
    ],
  },
  {
    id: "ages-and-inventions",
    title: "Ages and inventions",
    blurb:
      "A trade route that was never a road, an empire that never admitted it had become one, an age that wrote its own origin myth, a machine whose consequences nobody wanted, and a music built out of everything that was in the room.",
    hue: "var(--rb-2)",
    articles: [silkRoad, romanEmpire, renaissance, printingPress, jazz],
  },
  {
    id: "the-body-and-its-enemies",
    title: "The body and its enemies",
    blurb:
      "An arms race we joined several hundred million years late, a technology whose success erases its own evidence, the organ you were not born with, a sensation that is not a measurement, and the thing you spend a third of your life doing for reasons nobody can fully explain.",
    hue: "var(--rb-1)",
    articles: [antibioticResistance, vaccines, gutMicrobiome, pain, sleep],
  },
  {
    id: "numbers-and-abstractions",
    title: "Numbers and abstractions",
    blurb:
      "The digit Europe banned, the proof that some infinities outsize others, the theorem that ended mathematics' most ambitious project, the mathematics of not knowing, and the secrecy that rests on unproven assumptions.",
    hue: "var(--rb-3)",
    articles: [zero, infinity, incompleteness, probability, cryptography],
  },
  {
    id: "deep-time",
    title: "Deep time",
    blurb:
      "Subjects that only make sense on timescales the mind refuses to hold: chemistry crossing into biology, moving continents, an algorithm four billion years into its run, the worst afternoon in the history of life, and a planet that keeps changing its mind on a schedule.",
    hue: "var(--rb-4)",
    articles: [originOfLife, plateTectonics, evolution, kpgExtinction, iceAges],
  },
  {
    id: "language-and-writing",
    title: "Language and writing",
    blurb:
      "A technology invented by accountants, a language reconstructed without a single surviving text, the impossible job of moving meaning between tongues, proof that language needs no sound, and the book everyone mistakes for a rulebook.",
    hue: "var(--rb-6)",
    articles: [
      writingSystems,
      protoIndoEuropean,
      signLanguage,
      translation,
      dictionaries,
    ],
  },
  {
    id: "money-and-markets",
    title: "Money and markets",
    blurb:
      "The machinery underneath ordinary economic life, and the things almost everyone misunderstands about it: where money came from, what the inflation figure measures, how disasters get shared out, what a company legally is, and how a crash became a decade.",
    hue: "var(--rb-3)",
    articles: [
      money,
      inflation,
      insurance,
      jointStockCompany,
      greatDepression,
    ],
  },
  {
    id: "cities-and-how-they-work",
    title: "Cities and how they work",
    blurb:
      "The systems a city runs on and the arguments it has about them — the engineering that outperformed medicine, the map that proved it, the machine with no storage, the road that fills up, and the rulebook deciding who gets to live there.",
    hue: "var(--rb-1)",
    articles: [
      sanitation,
      broadStreetPump,
      electricalGrid,
      inducedDemand,
      zoning,
    ],
  },
  {
    id: "the-sky",
    title: "The sky",
    blurb:
      "The two objects everyone has looked at without examining, the instruments that made looking into a science, the worlds that broke the theory of how worlds form, and the arithmetic of keeping track of it all.",
    hue: "var(--rb-5)",
    articles: [theMoon, theSun, telescopes, exoplanets, theCalendar],
  },
];

/** Flat list of every rewritten article, in shelf order. */
export const WIKIQORGI_ARTICLES: RewrittenArticle[] = WIKIQORGI_SECTIONS.flatMap(
  (section) => section.articles,
);

/** Looks up a rewritten article by its URL slug. */
export function getRewrittenArticle(slug: string): RewrittenArticle | undefined {
  return WIKIQORGI_ARTICLES.find((article) => article.slug === slug);
}

/** The section a given article sits in, for breadcrumbs and sibling links. */
export function getSectionForSlug(slug: string): WikiqorgiSection | undefined {
  return WIKIQORGI_SECTIONS.find((section) =>
    section.articles.some((article) => article.slug === slug),
  );
}

/** Looks up a section by its URL id. */
export function getSection(id: string): WikiqorgiSection | undefined {
  return WIKIQORGI_SECTIONS.find((section) => section.id === id);
}

/** Builds the internal /wikiqorgi/[slug] path for a rewritten article. */
export function rewrittenHref(slug: string): string {
  return `/wikiqorgi/${slug}`;
}

/** Builds the internal /wikiqorgi/[slug] path for a section's own page. */
export function sectionHref(id: string): string {
  return `/wikiqorgi/${id}`;
}

/**
 * Section pages and article pages share the /wikiqorgi/[slug] segment — a
 * section id and an article slug are looked up from the same URL, so the two
 * namespaces must never collide. Nothing enforces that in the types, so assert
 * it here: this runs when the module is first imported, which during `next
 * build` means the build fails rather than a section silently shadowing an
 * article (or the reverse) in production.
 */
const ALL_WIKIQORGI_SLUGS = [
  ...WIKIQORGI_SECTIONS.map((section) => section.id),
  ...WIKIQORGI_ARTICLES.map((article) => article.slug),
];

const DUPLICATE_SLUGS = ALL_WIKIQORGI_SLUGS.filter(
  (slug, i) => ALL_WIKIQORGI_SLUGS.indexOf(slug) !== i,
);

if (DUPLICATE_SLUGS.length > 0) {
  throw new Error(
    `wikiqorgi: section ids and article slugs share one URL namespace, but these are used twice: ${DUPLICATE_SLUGS.join(", ")}`,
  );
}

export type { RewrittenArticle, WikiqorgiSection };
