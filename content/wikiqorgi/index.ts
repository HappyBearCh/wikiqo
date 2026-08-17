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
import { oceanCirculation } from "./ocean-circulation";
import { coralReefs } from "./coral-reefs";
import { whales } from "./whales";
import { fisheries } from "./fisheries";
import { deepSea } from "./deep-sea";
import { steel } from "./steel";
import { concrete } from "./concrete";
import { glass } from "./glass";
import { plastics } from "./plastics";
import { semiconductors } from "./semiconductors";
import { fermentation } from "./fermentation";
import { haberBosch } from "./haber-bosch";
import { greenRevolution } from "./green-revolution";
import { refrigeration } from "./refrigeration";
import { coffee } from "./coffee";
import { theAtom } from "./the-atom";
import { theCell } from "./the-cell";
import { dna } from "./dna";
import { viruses } from "./viruses";
import { quantumMechanics } from "./quantum-mechanics";
import { property } from "./property";
import { copyright } from "./copyright";
import { theJury } from "./the-jury";
import { habeasCorpus } from "./habeas-corpus";
import { internationalLaw } from "./international-law";
import { theScientificMethod } from "./the-scientific-method";
import { peerReview } from "./peer-review";
import { randomisedTrials } from "./randomised-trials";
import { replicationCrisis } from "./replication-crisis";
import { cognitiveBias } from "./cognitive-bias";
import { photography } from "./photography";
import { maps } from "./maps";
import { encyclopedias } from "./encyclopedias";
import { soundRecording } from "./sound-recording";
import { theCensus } from "./the-census";
import { theWheel } from "./the-wheel";
import { shippingContainers } from "./shipping-containers";
import { railways } from "./railways";
import { longitude } from "./longitude";
import { theBicycle } from "./the-bicycle";
import { fire } from "./fire";
import { theSteamEngine } from "./the-steam-engine";
import { entropy } from "./entropy";
import { batteries } from "./batteries";
import { nuclearPower } from "./nuclear-power";
import { votingSystems } from "./voting-systems";
import { gameTheory } from "./game-theory";
import { collectiveAction } from "./collective-action";
import { crowds } from "./crowds";
import { propaganda } from "./propaganda";
import { weatherForecasting } from "./weather-forecasting";
import { hurricanes } from "./hurricanes";
import { clouds } from "./clouds";
import { lightning } from "./lightning";
import { theMonsoon } from "./the-monsoon";
import { anaesthesia } from "./anaesthesia";
import { germTheory } from "./germ-theory";
import { bloodTransfusion } from "./blood-transfusion";
import { insulin } from "./insulin";
import { medicalImaging } from "./medical-imaging";
import { animalMigration } from "./animal-migration";
import { camouflage } from "./camouflage";
import { eusocialInsects } from "./eusocial-insects";
import { venom } from "./venom";
import { cephalopods } from "./cephalopods";
import { theFactory } from "./the-factory";
import { theAssemblyLine } from "./the-assembly-line";
import { bureaucracy } from "./bureaucracy";
import { tradeUnions } from "./trade-unions";
import { theEightHourDay } from "./the-eight-hour-day";

/**
 * The wikiqorgi shelf: the same subjects the rest of the site mirrors from
 * Wikipedia, re-reported and rewritten from scratch in wikiqo's own voice.
 *
 * Everything below is a compile-time constant. No database, no API, no fetch —
 * the index and every article page prerender to static HTML at build time.
 *
 * Shape: sections of 5 articles each, currently 24. The target has been raised
 * twice — 50, then 100 at twenty sections, and the shelf is now open-ended and
 * grows a section or two at a time.
 *
 * Sections are append-only. Never insert one in the middle or reorder them:
 * the front-page promotion schedule derives its dates from a section's position
 * here, so reordering re-dates published articles. See ./schedule.ts.
 *
 * Add them in small batches, and space the batches out. The shelf's claim is
 * that each piece is written rather than generated in bulk, which is a claim
 * about the writing — but publishing a large number of pages in a short window
 * is the pattern search engines treat as scaled content abuse regardless of how
 * the pages were produced. Pace matters here independently of quality.
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
  {
    id: "the-ocean",
    title: "The ocean",
    blurb:
      "A conveyor belt driven by salt and cold, a city built by animals farming plants inside their cells, the largest creatures that have ever lived, a resource that collapses because it recovers, and the biggest habitat on the planet.",
    hue: "var(--rb-5)",
    articles: [oceanCirculation, deepSea, coralReefs, whales, fisheries],
  },
  {
    id: "materials",
    title: "Materials",
    blurb:
      "Five substances the built world runs on, each defined by a property that looks like a footnote: a trace of carbon, a lost Roman recipe, a liquid that forgot to crystallise, chains too durable to rot, and contamination measured in parts per billion.",
    hue: "var(--rb-2)",
    articles: [steel, concrete, glass, plastics, semiconductors],
  },
  {
    id: "food-and-farming",
    title: "Food and farming",
    blurb:
      "How eating became reliable: microbes domesticated before anyone knew they existed, nitrogen pulled out of the air, a plant breeding programme that outran a famine forecast, heat pumped out of a box, and a seed that reorganised the tropics.",
    hue: "var(--rb-4)",
    articles: [fermentation, haberBosch, greenRevolution, refrigeration, coffee],
  },
  {
    id: "the-very-small",
    title: "The very small",
    blurb:
      "Five levels down from ordinary objects, where the rules stop matching intuition: an atom that is mostly nothing, a cell that is a merger of two lineages, a molecule whose shape gives away its function, instructions that may not be alive, and a theory nobody can agree on the meaning of.",
    hue: "var(--rb-6)",
    articles: [theAtom, theCell, dna, viruses, quantumMechanics],
  },
  {
    id: "law-and-its-fictions",
    title: "Law and its fictions",
    blurb:
      "Legal institutions are made things, and each of these was built for a purpose quite unlike the one it now serves: ownership as a bundle of claims against strangers, a printers' cartel recast as an author's right, a panel of witnesses turned into a panel of the ignorant, a demand that a jailer explain himself, and rules with no police force behind them.",
    hue: "var(--rb-2)",
    articles: [property, copyright, theJury, habeasCorpus, internationalLaw],
  },
  {
    id: "how-we-know-things",
    title: "How we know things",
    blurb:
      "The machinery of evidence, examined rather than assumed: a method nobody follows, a filter weaker than its reputation, the one design that establishes cause, an audit that found half the findings missing, and the systematic errors everyone makes in the same direction.",
    hue: "var(--rb-3)",
    articles: [
      theScientificMethod,
      peerReview,
      randomisedTrials,
      replicationCrisis,
      cognitiveBias,
    ],
  },
  {
    id: "recording-the-world",
    title: "Recording the world",
    blurb:
      "Five technologies for making the world hold still, each of which turned out to shape what it recorded: an image that had to be stopped from fading, a flat map of a curved planet, a book that tried to contain everything, the first machine that let the dead speak, and a count that decides who exists.",
    hue: "var(--rb-5)",
    articles: [photography, maps, encyclopedias, soundRecording, theCensus],
  },
  {
    id: "getting-around",
    title: "Getting around",
    blurb:
      "Movement is a problem of surfaces, standards and friction. A wheel that needed a road, a steel box everyone agreed on, a machine that forced the world to share a clock, a position fix that was really a clock problem, and the most efficient way ever found to move a body.",
    hue: "var(--rb-4)",
    articles: [theWheel, shippingContainers, railways, longitude, theBicycle],
  },
  {
    id: "heat-and-power",
    title: "Heat and power",
    blurb:
      "Energy, from the reaction that rebuilt the human body to the one nobody trusts: fire as external digestion, a pump that burned the coal it was draining, the quantity that gives time a direction, a corrosion made to do work, and the safest generator with the worst reputation.",
    hue: "var(--rb-1)",
    articles: [fire, theSteamEngine, entropy, batteries, nuclearPower],
  },
  {
    id: "crowds-and-choices",
    title: "Crowds and choices",
    blurb:
      "What happens when decisions have to be made by more than one person: a proof that no voting system is fair, rational choices that ruin everyone, groups that cannot act on their own interest, crowds that do not panic, and persuasion that mostly tells the truth.",
    hue: "var(--rb-6)",
    articles: [votingSystems, gameTheory, collectiveAction, crowds, propaganda],
  },
  {
    id: "weather",
    title: "Weather",
    blurb:
      "The atmosphere as a machine with known equations and unknowable starting conditions: a forecast limited by a rounding error, a storm that cannot form at the equator, water that will not condense without help, a discharge nobody can fully explain, and a sea breeze the size of a continent.",
    hue: "var(--rb-5)",
    articles: [weatherForecasting, hurricanes, clouds, lightning, theMonsoon],
  },
  {
    id: "medicines-turning-points",
    title: "Medicine's turning points",
    blurb:
      "Five moments where medicine stopped being mostly useless, each of them resisted at the time: gases that sat unused for fifty years, a handwashing rule that ended a career, four blood groups that explained 250 years of deaths, a patent sold for a dollar, and a way of seeing inside people that finds too much.",
    hue: "var(--rb-1)",
    articles: [anaesthesia, germTheory, bloodTransfusion, insulin, medicalImaging],
  },
  {
    id: "animal-strategies",
    title: "Animal strategies",
    blurb:
      "Five solutions arrived at without anyone designing them: a magnetic sense nobody can locate, concealment that works by breaking an outline rather than matching a background, sterile workers that broke Darwin's theory, a chemical weapon that keeps becoming medicine, and a mind built a second time from a mollusc.",
    hue: "var(--rb-4)",
    articles: [animalMigration, camouflage, eusocialInsects, venom, cephalopods],
  },
  {
    id: "work-and-its-organisation",
    title: "Work and its organisation",
    blurb:
      "How labour got arranged, and who set the pace: a building where workers could be watched, a line that moved the work past them, rules applied impersonally to stop something worse, combination as a criminal offence, and a working week that fell for a century and then stopped.",
    hue: "var(--rb-2)",
    articles: [theFactory, theAssemblyLine, bureaucracy, tradeUnions, theEightHourDay],
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
