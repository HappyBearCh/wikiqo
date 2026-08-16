import type { RewrittenArticle, WikiqorgiSection } from "./types";
import { blackHole } from "./black-hole";
import { photosynthesis } from "./photosynthesis";
import { mountEverest } from "./mount-everest";
import { albertEinstein } from "./albert-einstein";
import { artificialIntelligence } from "./artificial-intelligence";
import { romanEmpire } from "./roman-empire";
import { renaissance } from "./renaissance";
import { jazz } from "./jazz";

/**
 * The wikiqorgi shelf: the same subjects the rest of the site mirrors from
 * Wikipedia, re-reported and rewritten from scratch in wikiqo's own voice.
 *
 * Everything below is a compile-time constant. No database, no API, no fetch —
 * the index and every article page prerender to static HTML at build time.
 */
export const WIKIQORGI_SECTIONS: WikiqorgiSection[] = [
  {
    id: "the-physical-world",
    title: "The physical world",
    blurb:
      "Three subjects that textbooks flatten into a summary sentence, opened back up: what a black hole actually is, what a leaf actually does, and what a mountain is actually made of.",
    hue: "var(--rb-5)",
    articles: [blackHole, photosynthesis, mountEverest],
  },
  {
    id: "minds-and-machines",
    title: "Minds and machines",
    blurb:
      "One physicist who took a small inconsistency seriously, and one field that keeps redefining intelligence as whatever it has not managed yet.",
    hue: "var(--rb-6)",
    articles: [albertEinstein, artificialIntelligence],
  },
  {
    id: "ages-and-inventions",
    title: "Ages and inventions",
    blurb:
      "An empire that never admitted it had become one, an age that wrote its own origin myth, and a music built out of everything that was in the room.",
    hue: "var(--rb-2)",
    articles: [romanEmpire, renaissance, jazz],
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
