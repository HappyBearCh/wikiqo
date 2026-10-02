import { WIKIQORGI_ARTICLES, rewrittenHref, type RewrittenArticle } from "./index";

/**
 * In-text links between wikiqorgi articles.
 *
 * The shelf is 160 articles on overlapping subjects — the Haber process turns
 * up in the article on the Green Revolution, penicillin in the one on
 * antibiotic resistance — and before this none of them linked to each other.
 * A reader's only way onward was the "More from this section" block at the
 * foot, which can only ever reach four articles.
 *
 * Rather than hand-edit links into 160 bodies (and keep them right as articles
 * are added), each article declares the phrases that should link *to* it, and
 * linkArticleHtml() links the first mention of each in every other article.
 * This runs at build time against compile-time constants, so the output is
 * static HTML like the rest of the shelf.
 *
 * ## Choosing phrases
 *
 * Matching is case-sensitive, so a phrase written in lower case also matches
 * with its first letter capitalised (sentence start) and nothing else. Words
 * that are usually metaphors in English prose are left out or narrowed to a
 * phrase that can only mean the subject: "concrete" (a concrete example),
 * "heart" (at the heart of), "evolution" (the evolution of the dictionary),
 * "play", "Go". Fewer, correct links beat more, surprising ones.
 *
 * `notIn` excludes articles where a phrase means something else — "translation"
 * in the article on DNA is protein synthesis, not languages.
 */
interface LinkTarget {
  phrases: string[];
  notIn?: string[];
}

const TARGETS: Record<string, LinkTarget> = {
  "alan-turing": { phrases: ["Turing"] },
  "albert-einstein": { phrases: ["Einstein"] },
  anaesthesia: { phrases: ["anaesthesia", "anaesthetic", "anaesthetics", "anesthesia"] },
  "animal-migration": { phrases: ["animal migration", "bird migration", "migratory birds", "migrating birds"] },
  "antibiotic-resistance": { phrases: ["antibiotic resistance", "antimicrobial resistance", "resistant bacteria"] },
  "artificial-intelligence": { phrases: ["artificial intelligence"] },
  "atomic-clocks": { phrases: ["atomic clock", "atomic clocks", "caesium clock"] },
  batteries: { phrases: ["battery", "batteries"] },
  "black-hole": { phrases: ["black hole", "black holes"] },
  "blood-transfusion": { phrases: ["blood transfusion", "transfusion", "transfusions", "blood groups", "blood group"] },
  borders: { phrases: ["borders"] },
  bridges: { phrases: ["suspension bridge", "suspension bridges", "bridges"] },
  "broad-street-pump": { phrases: ["Broad Street", "John Snow"] },
  bureaucracy: { phrases: ["bureaucracy", "bureaucracies", "bureaucrats", "bureaucratic"] },
  camouflage: { phrases: ["camouflage"] },
  cephalopods: { phrases: ["octopus", "octopuses", "cephalopod", "cephalopods", "squid"] },
  chess: { phrases: ["chess"] },
  "circadian-rhythms": { phrases: ["circadian"] },
  citizenship: { phrases: ["citizenship"] },
  clocks: { phrases: ["pendulum clock", "mechanical clock", "mechanical clocks", "clocks"] },
  clouds: { phrases: ["clouds"] },
  coffee: { phrases: ["coffee"] },
  "cognitive-bias": { phrases: ["cognitive bias", "cognitive biases", "confirmation bias"] },
  "collective-action": { phrases: ["collective action", "free rider", "free-rider", "tragedy of the commons"] },
  "colour-vision": { phrases: ["colour vision", "color vision", "colour blindness", "cone cells"] },
  concrete: { phrases: ["reinforced concrete", "Roman concrete", "cement"] },
  consciousness: { phrases: ["consciousness"] },
  copyright: { phrases: ["copyright"] },
  "coral-reefs": { phrases: ["coral reef", "coral reefs", "corals", "coral"] },
  crowds: { phrases: ["crowd", "crowds"], notIn: ["sound"] },
  cryptography: { phrases: ["cryptography", "encryption", "cipher", "ciphers"] },
  "deep-sea": { phrases: ["deep sea", "deep ocean", "hydrothermal vent", "hydrothermal vents"] },
  dictionaries: { phrases: ["dictionary", "dictionaries"] },
  dna: { phrases: ["DNA"] },
  domes: { phrases: ["dome", "domes"] },
  "earthquake-engineering": { phrases: ["earthquake", "earthquakes"] },
  "electrical-grid": { phrases: ["electrical grid", "power grid", "electricity grid", "power station", "power stations"] },
  encyclopedias: { phrases: ["encyclopedia", "encyclopedias", "encyclopaedia", "encyclopaedias"] },
  entropy: { phrases: ["entropy", "second law of thermodynamics"] },
  "eusocial-insects": { phrases: ["eusocial", "eusociality", "ant colony", "ant colonies", "honeybees", "termites"] },
  evolution: { phrases: ["natural selection", "Darwin"] },
  exoplanets: { phrases: ["exoplanet", "exoplanets", "extrasolar planet", "extrasolar planets"] },
  fermentation: { phrases: ["fermentation", "fermented", "yeast"] },
  fire: { phrases: ["control of fire", "cooking"], notIn: ["water"] },
  fisheries: { phrases: ["overfishing", "fisheries", "fishery", "fishing"] },
  "flowering-plants": { phrases: ["flowering plants", "flowering plant", "angiosperms", "angiosperm"] },
  football: { phrases: ["football"] },
  fungi: { phrases: ["fungi", "fungus", "fungal"] },
  "game-theory": { phrases: ["game theory", "prisoner's dilemma", "Nash equilibrium"] },
  "germ-theory": { phrases: ["germ theory", "germs"] },
  glass: { phrases: ["glass"] },
  "go-game": { phrases: ["game of Go", "AlphaGo"] },
  grasses: { phrases: ["grasses", "grassland", "grasslands", "lawns", "lawn"] },
  "great-depression": { phrases: ["Great Depression", "the Depression"] },
  "green-revolution": { phrases: ["Green Revolution"] },
  "gut-microbiome": { phrases: ["microbiome", "gut bacteria", "gut microbes"] },
  "habeas-corpus": { phrases: ["habeas corpus"] },
  "haber-bosch": { phrases: ["Haber–Bosch", "Haber-Bosch", "Haber process", "synthetic fertiliser", "nitrogen fertiliser", "fertiliser", "fertilizer"] },
  hurricanes: { phrases: ["hurricane", "hurricanes", "tropical cyclone", "tropical cyclones", "typhoon", "typhoons"] },
  "ice-ages": { phrases: ["ice age", "ice ages", "glacial period", "glaciation"] },
  "immune-system": { phrases: ["immune system", "immune response", "antibodies", "antibody"] },
  incompleteness: { phrases: ["incompleteness", "Gödel"] },
  "induced-demand": { phrases: ["induced demand", "traffic congestion", "congestion"] },
  infinity: { phrases: ["infinity", "infinite set", "infinite sets", "Cantor"] },
  inflation: { phrases: ["inflation"] },
  insulin: { phrases: ["insulin", "diabetes"], notIn: ["the-kidney"] },
  insurance: { phrases: ["insurance", "insurers", "insurer"] },
  "international-law": { phrases: ["international law"] },
  jazz: { phrases: ["jazz"] },
  "joint-stock-company": { phrases: ["joint-stock company", "joint-stock companies", "limited liability", "shareholders"] },
  "kpg-extinction": { phrases: ["Chicxulub", "mass extinction", "dinosaurs"] },
  "leap-seconds": { phrases: ["leap second", "leap seconds"] },
  lichens: { phrases: ["lichen", "lichens"] },
  light: { phrases: ["speed of light", "photons", "photon", "wavelengths", "wavelength"] },
  lightning: { phrases: ["lightning"] },
  longitude: { phrases: ["longitude"] },
  maps: { phrases: ["map projection", "map projections", "Mercator", "cartography", "cartographers"] },
  "medical-imaging": { phrases: ["medical imaging", "MRI", "CT scan", "CT scans", "CT scanner"] },
  money: { phrases: ["paper money", "currency", "coinage"], notIn: ["photosynthesis", "origin-of-life"] },
  moulds: { phrases: ["mould", "moulds", "penicillin", "Penicillium"], notIn: ["hearing"] },
  "mount-everest": { phrases: ["Everest"] },
  "mycorrhizal-networks": { phrases: ["mycorrhizal", "mycorrhiza", "mycorrhizae", "wood wide web"] },
  nationalism: { phrases: ["nationalism", "nationalist", "nation-state", "nation-states"] },
  "nuclear-power": { phrases: ["nuclear power", "nuclear reactor", "nuclear reactors", "nuclear energy", "Chernobyl"] },
  "ocean-circulation": { phrases: ["ocean circulation", "Gulf Stream", "thermohaline", "overturning circulation"] },
  "optical-illusions": { phrases: ["optical illusion", "optical illusions", "illusion", "illusions"] },
  "origin-of-life": { phrases: ["origin of life", "RNA world", "abiogenesis"] },
  pain: { phrases: ["pain"] },
  "peer-review": { phrases: ["peer review", "peer-reviewed", "peer reviewers"] },
  photography: { phrases: ["photography", "photograph", "photographs", "photographic", "camera", "cameras"] },
  photosynthesis: { phrases: ["photosynthesis", "photosynthetic", "chlorophyll"] },
  "pigments-and-dyes": { phrases: ["pigment", "pigments", "dye", "dyes"] },
  plastics: { phrases: ["plastic", "plastics"] },
  "plate-tectonics": { phrases: ["plate tectonics", "tectonic plates", "continental drift", "tectonic"] },
  play: { phrases: ["animal play", "play fighting", "play-fighting"] },
  "playing-cards": { phrases: ["playing cards", "playing card", "tarot", "deck of cards"] },
  pollination: { phrases: ["pollination", "pollinators", "pollinator", "pollinated", "pollen"] },
  "printing-press": { phrases: ["printing press", "Gutenberg", "printing"] },
  probability: { phrases: ["probability", "probabilities"] },
  propaganda: { phrases: ["propaganda"] },
  property: { phrases: ["property rights", "private property", "ownership"] },
  "proto-indo-european": { phrases: ["Proto-Indo-European", "Indo-European"] },
  "quantum-mechanics": { phrases: ["quantum mechanics", "quantum theory", "quantum physics", "uncertainty principle", "quantum"] },
  railways: { phrases: ["railway", "railways", "railroad", "railroads", "locomotive", "locomotives"] },
  "randomised-trials": { phrases: ["randomised controlled trial", "randomised controlled trials", "randomized controlled trial", "randomised trial", "randomised trials", "clinical trial", "clinical trials"] },
  refrigeration: { phrases: ["refrigeration", "refrigerator", "refrigerators", "refrigerated", "fridge"] },
  refugees: { phrases: ["refugee", "refugees", "asylum seekers"] },
  renaissance: { phrases: ["Renaissance"] },
  "replication-crisis": { phrases: ["replication crisis", "failed to replicate", "p-hacking"] },
  "roman-empire": { phrases: ["Roman Empire", "Romans", "Rome"] },
  sanitation: { phrases: ["sanitation", "sewers", "sewer", "sewage"] },
  seeds: { phrases: ["seed", "seeds"] },
  semiconductors: { phrases: ["semiconductor", "semiconductors", "transistor", "transistors", "microchip", "microchips"] },
  "shipping-containers": { phrases: ["shipping container", "shipping containers", "containerisation", "containerization", "container ship", "container ships"] },
  "sign-language": { phrases: ["sign language", "sign languages"] },
  "silk-road": { phrases: ["Silk Road", "Silk Roads"] },
  skyscrapers: { phrases: ["skyscraper", "skyscrapers", "tall buildings"] },
  sleep: { phrases: ["sleep"] },
  "sound-recording": { phrases: ["sound recording", "recorded music", "phonograph", "gramophone"] },
  spectacles: { phrases: ["spectacles", "eyeglasses", "reading glasses"] },
  spores: { phrases: ["spore", "spores"] },
  steel: { phrases: ["steel"] },
  telescopes: { phrases: ["telescope", "telescopes"] },
  "the-arch": { phrases: ["arch", "arches"] },
  "the-assembly-line": { phrases: ["assembly line", "assembly lines", "mass production", "Henry Ford"] },
  "the-atom": { phrases: ["atom", "atoms"] },
  "the-bicycle": { phrases: ["bicycle", "bicycles", "cyclists"] },
  "the-calendar": { phrases: ["Gregorian calendar", "calendar", "calendars", "leap year", "leap years"] },
  "the-cell": { phrases: ["eukaryotic cell", "eukaryotic cells", "living cells", "eukaryotes", "mitochondria"] },
  "the-census": { phrases: ["census", "censuses"] },
  "the-eight-hour-day": { phrases: ["eight-hour day", "working week", "working hours", "working day"] },
  "the-eye": { phrases: ["retina", "the eye", "eyes"], notIn: ["hurricanes", "aqueducts"] },
  "the-factory": { phrases: ["factory", "factories"] },
  "the-heart": { phrases: ["heartbeat", "cardiac", "circulation of the blood"] },
  "the-internet": { phrases: ["internet", "World Wide Web", "the web"] },
  "the-jury": { phrases: ["jury", "juries", "jurors"] },
  "the-kidney": { phrases: ["kidney", "kidneys", "dialysis"] },
  "the-liver": { phrases: ["liver"] },
  "the-monsoon": { phrases: ["monsoon", "monsoons"] },
  "the-moon": { phrases: ["the Moon", "Moon's", "lunar"] },
  "the-nervous-system": { phrases: ["nervous system", "neurons", "neuron", "nerves", "nerve"] },
  "the-passport": { phrases: ["passport", "passports", "visa", "visas"] },
  "the-scientific-method": { phrases: ["scientific method", "falsifiable", "Popper"] },
  "the-steam-engine": { phrases: ["steam engine", "steam engines", "steam power", "Newcomen", "James Watt"] },
  "the-sun": { phrases: ["the Sun", "Sun's", "solar"] },
  "the-wheel": { phrases: ["wheel", "wheels", "wheeled"] },
  "time-zones": { phrases: ["time zone", "time zones", "standard time", "Greenwich Mean Time"] },
  "trade-unions": { phrases: ["trade union", "trade unions", "labour union", "labour unions", "labor union", "labor unions", "unions"], notIn: ["international-law"] },
  translation: { phrases: ["translation", "translations", "translator", "translators"], notIn: ["dna", "the-cell", "viruses"] },
  trees: { phrases: ["trees", "forest", "forests"], notIn: ["evolution", "proto-indo-european"] },
  vaccines: { phrases: ["vaccine", "vaccines", "vaccination", "immunisation"] },
  venom: { phrases: ["venom", "venomous"] },
  viruses: { phrases: ["virus", "viruses", "viral"] },
  "voting-systems": { phrases: ["voting system", "voting systems", "electoral system", "electoral systems", "first-past-the-post", "proportional representation"] },
  water: { phrases: ["water molecule", "water molecules", "hydrogen bond", "hydrogen bonds"] },
  "weather-forecasting": { phrases: ["weather forecasting", "weather forecast", "weather forecasts", "forecasters"] },
  whales: { phrases: ["whale", "whales", "whaling"] },
  "writing-systems": { phrases: ["writing system", "writing systems", "invention of writing", "cuneiform", "hieroglyphs", "hieroglyphic", "alphabet", "alphabets"] },
  zero: { phrases: ["Hindu-Arabic numerals", "Arabic numerals", "place-value", "place value"] },
  zoning: { phrases: ["zoning"] },
  sound: { phrases: ["speed of sound", "sound waves", "sound wave", "sonic boom"] },
  hearing: { phrases: ["cochlea", "hearing loss", "eardrum", "inner ear"] },
  "musical-tuning": { phrases: ["equal temperament", "musical tuning", "concert pitch"] },
  "musical-notation": { phrases: ["musical notation", "sheet music", "musical score", "musical scores"] },
  echolocation: { phrases: ["echolocation", "echolocate", "echolocating", "sonar"] },
  aqueducts: { phrases: ["aqueduct", "aqueducts"] },
  dams: { phrases: ["dams", "hydroelectric", "hydropower"] },
  irrigation: { phrases: ["irrigation", "irrigated", "irrigate"] },
  aquifers: { phrases: ["aquifer", "aquifers", "groundwater"] },
  desalination: { phrases: ["desalination", "desalinated", "reverse osmosis"] },
};

/**
 * Phrases that contain a link phrase but mean something else. They take part
 * in matching — longest first, like everything else — so they claim the text
 * before the shorter phrase can, and then are left unlinked.
 */
const BLOCKED_PHRASES = [
  "Holy Roman Empire",
  "diabetes insipidus",
  "energy currency",
  "Ring of Fire",
  "eye of the storm",
];

/** At most this many outbound links per article. Past a handful, links stop
 *  reading as "see also" and start reading as noise. */
const MAX_LINKS_PER_ARTICLE = 8;

const ARTICLE_SLUGS = new Set(WIKIQORGI_ARTICLES.map((article) => article.slug));

// Fail the build on a typo'd target rather than silently linking nowhere.
for (const slug of Object.keys(TARGETS)) {
  if (!ARTICLE_SLUGS.has(slug)) {
    throw new Error(`wikiqorgi crosslinks: no article with slug "${slug}"`);
  }
}

function escapeRegExp(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** A lower-case phrase also matches with its first letter capitalised. */
function phrasePattern(phrase: string): string {
  const first = phrase[0];
  const rest = escapeRegExp(phrase.slice(1));
  return first !== first.toUpperCase()
    ? `[${first}${first.toUpperCase()}]${rest}`
    : `${escapeRegExp(first)}${rest}`;
}

const PHRASES = Object.entries(TARGETS).flatMap(([slug, target]) =>
  target.phrases.map((phrase) => ({ phrase, slug })),
);

// Keyed by lower case because a match may differ from the declared phrase in
// its first letter (see phrasePattern).
const PHRASE_TO_SLUG = new Map(PHRASES.map(({ phrase, slug }) => [phrase.toLowerCase(), slug]));

if (PHRASE_TO_SLUG.size !== PHRASES.length) {
  throw new Error("wikiqorgi crosslinks: a phrase is declared for more than one article");
}

// One alternation over every phrase, longest first, so "atomic clock" wins
// over "atom" and "Gregorian calendar" over "calendar" at the same position.
// The lookarounds are a word boundary that also treats hyphens as part of a
// word, so "peer" never matches inside "peer-reviewed".
const PHRASE_RE = new RegExp(
  `(?<![\\p{L}\\p{N}-])(?:${[...PHRASES.map(({ phrase }) => phrase), ...BLOCKED_PHRASES]
    .sort((a, b) => b.length - a.length)
    .map(phrasePattern)
    .join("|")})(?![\\p{L}\\p{N}-])`,
  "gu",
);

/** Elements whose text must never gain a link. */
const NO_LINK_TAGS = new Set(["a", "h1", "h2", "h3", "h4", "h5", "h6"]);

/**
 * Returns the article's HTML with the first mention of up to
 * MAX_LINKS_PER_ARTICLE other articles' subjects linked to them. Each target
 * is linked at most once, links never land inside headings or existing links,
 * and an article never links to itself.
 */
export function linkArticleHtml(article: RewrittenArticle): string {
  const linked = new Set<string>();
  // Tags and text alternate; only text between tags is a candidate.
  const parts = article.html.split(/(<[^>]+>)/);
  const open: string[] = [];

  return parts
    .map((part) => {
      if (part.startsWith("<")) {
        const tag = /^<\/?([a-z0-9]+)/i.exec(part)?.[1]?.toLowerCase();
        if (tag && NO_LINK_TAGS.has(tag)) {
          if (part.startsWith("</")) open.pop();
          else open.push(tag);
        }
        return part;
      }

      if (open.length > 0 || linked.size >= MAX_LINKS_PER_ARTICLE) return part;

      return part.replace(PHRASE_RE, (match) => {
        const slug = PHRASE_TO_SLUG.get(match.toLowerCase());
        if (
          !slug ||
          slug === article.slug ||
          linked.has(slug) ||
          linked.size >= MAX_LINKS_PER_ARTICLE ||
          TARGETS[slug].notIn?.includes(article.slug)
        ) {
          return match;
        }
        linked.add(slug);
        return `<a href="${rewrittenHref(slug)}" class="wq-crosslink">${match}</a>`;
      });
    })
    .join("");
}

/** The slugs an article links out to, in reading order. For tests and for
 *  auditing what the linker produced. */
export function crosslinkTargets(article: RewrittenArticle): string[] {
  return [
    ...linkArticleHtml(article).matchAll(/href="\/wikiqorgi\/([^"]+)" class="wq-crosslink"/g),
  ].map((match) => match[1]);
}
