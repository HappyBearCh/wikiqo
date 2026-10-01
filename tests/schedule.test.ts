import { describe, expect, it } from "vitest";
import { WIKIQORGI_ARTICLES } from "@/content/wikiqorgi";
import {
  WIKIQORGI_ROTATION,
  latestPromoted,
  nextPromotionDate,
  promotedArticles,
  promotionDateFor,
} from "@/content/wikiqorgi/schedule";

const START = Date.UTC(2026, 7, 17);
const DAY = 86_400_000;

describe("promotion schedule", () => {
  it("rotates through every article exactly once", () => {
    expect(WIKIQORGI_ROTATION).toHaveLength(WIKIQORGI_ARTICLES.length);
    expect(new Set(WIKIQORGI_ROTATION.map((a) => a.slug)).size).toBe(WIKIQORGI_ARTICLES.length);
  });

  it("launches four together, then one every three days", () => {
    for (const i of [0, 1, 2, 3]) expect(promotionDateFor(i).getTime()).toBe(START);
    expect(promotionDateFor(4).getTime()).toBe(START + 3 * DAY);
    expect(promotionDateFor(5).getTime()).toBe(START + 6 * DAY);
  });

  it("keeps published promotion dates fixed (the first wave is settled)", () => {
    // These were on the front page in the launch week. If appending sections
    // ever renumbers the rotation, this fails before a promoted article
    // silently drops off the home page.
    expect(WIKIQORGI_ROTATION.slice(0, 4).map((a) => a.slug)).toEqual([
      "black-hole",
      "albert-einstein",
      "silk-road",
      "antibiotic-resistance",
    ]);
  });

  it("promotes nothing before the start date", () => {
    expect(promotedArticles(new Date(START - 1))).toEqual([]);
    expect(nextPromotionDate(new Date(START - 1))?.getTime()).toBe(START);
  });

  it("returns the newest promotion first", () => {
    const now = new Date(START + 30 * DAY);
    const [newest, next] = latestPromoted(2, now);
    expect(newest.promotedAt.getTime()).toBeGreaterThan(next.promotedAt.getTime());
    expect(newest.promotedAt.getTime()).toBeLessThanOrEqual(now.getTime());
  });

  it("runs out once everything is promoted", () => {
    const end = promotionDateFor(WIKIQORGI_ROTATION.length - 1);
    expect(promotedArticles(end)).toHaveLength(WIKIQORGI_ROTATION.length);
    expect(nextPromotionDate(end)).toBeNull();
  });
});
