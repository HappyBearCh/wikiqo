import type { RewrittenArticle, WikiqorgiSection } from "./types";
import { WIKIQORGI_SECTIONS } from "./index";

/**
 * The promotion schedule for the wikiqorgi shelf.
 *
 * All 100 articles are already published and reachable — nothing here hides a
 * page or gates a URL. What this staggers is *promotion*: which articles the
 * home page puts in front of a reader, and when. The shelf was written in a
 * short window, and dropping 100 links onto the front page at once is both a
 * worse read (nobody browses 100 cards) and the surface pattern search engines
 * treat as scaled content abuse. Releasing them a few a week gives the front
 * page a reason to change and spreads the footprint out.
 *
 * The schedule is a pure function of the article's position in the rotation and
 * a fixed start date, so it is a compile-time constant like everything else on
 * the shelf. No database, no stored state, no per-article date to maintain.
 */

/** Midnight UTC on the day the hundredth article landed. Do not move this — it
 *  is the origin every promotion date is measured from, so shifting it
 *  re-dates the entire shelf. */
const SHELF_START_UTC = Date.UTC(2026, 7, 17); // 2026-08-17

/** Days between one article being promoted and the next. At 100 articles this
 *  spreads the shelf across roughly ten months. */
const DAYS_BETWEEN_PROMOTIONS = 3;

/** How many articles are promoted on the start date itself. The front page
 *  shows a four-wide grid, so releasing strictly one at a time would leave it
 *  showing a single lonely card until the schedule caught up. These four go out
 *  together to fill the row, and the drip begins after them. */
const LAUNCH_SET = 4;

const MS_PER_DAY = 86_400_000;

/**
 * The order articles are promoted in: one from each section in turn, then back
 * to the start for each section's second article, and so on.
 *
 * Promoting in shelf order would put five consecutive physics pieces on the
 * front page, then five on law. Round-robin means the first twenty promotions
 * are twenty different subjects, and any given week's cards look nothing like
 * each other — which is the point of a front page.
 *
 * Sections are currently all five articles long. The `if (article)` guard is
 * there so an uneven section later doesn't leave a hole in the rotation.
 */
function rotationOrder(sections: WikiqorgiSection[]): RewrittenArticle[] {
  const longest = Math.max(...sections.map((section) => section.articles.length));
  const order: RewrittenArticle[] = [];

  for (let position = 0; position < longest; position++) {
    for (const section of sections) {
      const article = section.articles[position];
      if (article) order.push(article);
    }
  }

  return order;
}

/** Every article, in the order they reach the front page. */
export const WIKIQORGI_ROTATION = rotationOrder(WIKIQORGI_SECTIONS);

/** When the article at `index` in the rotation reaches the front page. The
 *  first LAUNCH_SET all share the start date; everything after is one step of
 *  DAYS_BETWEEN_PROMOTIONS per article. */
export function promotionDateFor(index: number): Date {
  const steps = Math.max(0, index - (LAUNCH_SET - 1));
  return new Date(SHELF_START_UTC + steps * DAYS_BETWEEN_PROMOTIONS * MS_PER_DAY);
}

export interface PromotedArticle {
  article: RewrittenArticle;
  /** The section it belongs to, for the card's hue and label. */
  section: WikiqorgiSection;
  promotedAt: Date;
}

/** Section lookup by article slug, built once at module load. */
const SECTION_BY_SLUG = new Map<string, WikiqorgiSection>(
  WIKIQORGI_SECTIONS.flatMap((section) =>
    section.articles.map((article) => [article.slug, section] as const),
  ),
);

/**
 * The articles promoted on or before `now`, most recently promoted first.
 *
 * `now` is a parameter rather than read from the clock inside so that callers
 * render deterministically and this stays testable.
 */
export function promotedArticles(now: Date = new Date()): PromotedArticle[] {
  const promoted: PromotedArticle[] = [];

  for (let index = 0; index < WIKIQORGI_ROTATION.length; index++) {
    const promotedAt = promotionDateFor(index);
    if (promotedAt.getTime() > now.getTime()) break; // dates only increase

    const article = WIKIQORGI_ROTATION[index];
    const section = SECTION_BY_SLUG.get(article.slug);
    if (section) promoted.push({ article, section, promotedAt });
  }

  return promoted.reverse();
}

/** The most recently promoted `count` articles, newest first. */
export function latestPromoted(count: number, now: Date = new Date()): PromotedArticle[] {
  return promotedArticles(now).slice(0, count);
}

/** When the next unpromoted article is due, or null once the shelf is spent. */
export function nextPromotionDate(now: Date = new Date()): Date | null {
  const promotedSoFar = promotedArticles(now).length;
  if (promotedSoFar >= WIKIQORGI_ROTATION.length) return null;
  return promotionDateFor(promotedSoFar);
}
