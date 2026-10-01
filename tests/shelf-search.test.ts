import { describe, expect, it } from "vitest";
import { WIKIQORGI_CATALOG } from "@/content/wikiqorgi/catalog";
import { findBySourceTitle, searchShelf, type ShelfEntry } from "@/lib/shelf-search";

const slugs = (entries: ShelfEntry[]) => entries.map((e) => e.slug);

describe("searchShelf", () => {
  it("puts the article whose subject is the query first", () => {
    expect(slugs(searchShelf(WIKIQORGI_CATALOG, "black hole"))[0]).toBe("black-hole");
    expect(slugs(searchShelf(WIKIQORGI_CATALOG, "DNA"))[0]).toBe("dna");
  });

  it("matches word prefixes, so results appear while typing", () => {
    const results = slugs(searchShelf(WIKIQORGI_CATALOG, "photo", 10));
    expect(results).toContain("photography");
    expect(results).toContain("photosynthesis");
  });

  it("requires every query word to match", () => {
    expect(searchShelf(WIKIQORGI_CATALOG, "black hole zebra")).toEqual([]);
  });

  it("ignores case, accents and punctuation", () => {
    expect(searchShelf(WIKIQORGI_CATALOG, "GÖDEL").length).toBeGreaterThan(0);
    expect(slugs(searchShelf(WIKIQORGI_CATALOG, "  habeas---corpus! "))[0]).toBe("habeas-corpus");
  });

  it("returns nothing for an empty or one-letter query", () => {
    expect(searchShelf(WIKIQORGI_CATALOG, "")).toEqual([]);
    expect(searchShelf(WIKIQORGI_CATALOG, "a")).toEqual([]);
  });

  it("respects the limit", () => {
    expect(searchShelf(WIKIQORGI_CATALOG, "the", 3).length).toBeLessThanOrEqual(3);
  });
});

describe("findBySourceTitle", () => {
  it("treats underscores, spaces and case alike", () => {
    expect(findBySourceTitle(WIKIQORGI_CATALOG, "Black_hole")?.slug).toBe("black-hole");
    expect(findBySourceTitle(WIKIQORGI_CATALOG, "black hole")?.slug).toBe("black-hole");
  });

  it("returns undefined for a subject the shelf doesn't cover", () => {
    expect(findBySourceTitle(WIKIQORGI_CATALOG, "Taylor Swift")).toBeUndefined();
  });
});
