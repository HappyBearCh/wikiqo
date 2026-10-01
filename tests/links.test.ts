import { describe, expect, it } from "vitest";
import { isRenderableTitle, renderableTitleKeys } from "@/content/popular-titles";
import { FEATURED } from "@/lib/featured";
import {
  articleHref,
  isNonArticleNamespace,
  renderableTitleKey,
  titleFromSlug,
  wikipediaUrlFor,
} from "@/lib/links";

describe("title helpers", () => {
  it("round-trips a title through its /wiki/ slug", () => {
    for (const title of ["C++", "Alien: Covenant", "Gödel's incompleteness theorems"]) {
      const slug = articleHref(title).slice("/wiki/".length);
      expect(titleFromSlug(slug)).toBe(title);
    }
  });

  it("builds Wikipedia URLs with underscores", () => {
    expect(wikipediaUrlFor("Black hole")).toBe("https://en.wikipedia.org/wiki/Black_hole");
  });

  it("normalises titles the way the renderable set stores them", () => {
    expect(renderableTitleKey("  Black  hole ")).toBe("black_hole");
    expect(renderableTitleKey("Black_hole")).toBe("black_hole");
  });

  it("rejects namespaces but not titles that merely contain a colon", () => {
    expect(isNonArticleNamespace("Talk:Black hole")).toBe(true);
    expect(isNonArticleNamespace("User_talk:Someone")).toBe(true);
    expect(isNonArticleNamespace("Alien: Covenant")).toBe(false);
  });
});

describe("renderable set", () => {
  it("always includes the hand-picked featured titles", () => {
    for (const { title } of FEATURED) expect(isRenderableTitle(title)).toBe(true);
  });

  it("is case-insensitive and serves its keys in normalised form", () => {
    expect(isRenderableTitle("BLACK HOLE")).toBe(true);
    const keys = renderableTitleKeys();
    expect(keys.length).toBeGreaterThan(10_000);
    expect(keys.every((key) => key === renderableTitleKey(key))).toBe(true);
  });
});
