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

/** Builds the internal /wikiqorgi/[slug] path for a rewritten article. */
export function rewrittenHref(slug: string): string {
  return `/wikiqorgi/${slug}`;
}

export type { RewrittenArticle, WikiqorgiSection };
