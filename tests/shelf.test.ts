import { describe, expect, it } from "vitest";
import { WIKIQORGI_ARTICLES, WIKIQORGI_SECTIONS, getSources } from "@/content/wikiqorgi";
import { isRenderableTitle } from "@/content/popular-titles";

// Importing content/wikiqorgi runs its build-time checks (unique slugs, a
// current catalog, sources for every article); getting this far means they
// passed. These cover what those checks don't.
describe("wikiqorgi shelf", () => {
  it("dates every article with a real ISO date", () => {
    for (const article of WIKIQORGI_ARTICLES) {
      expect(article.published).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(Number.isNaN(Date.parse(article.published))).toBe(false);
    }
  });

  it("gives every section heading an id, so contents links work", () => {
    for (const article of WIKIQORGI_ARTICLES) {
      for (const heading of article.html.match(/<h[23]\b[^>]*>/g) ?? []) {
        expect(heading, `${article.slug}: ${heading}`).toMatch(/\bid="[^"]+"/);
      }
    }
  });

  it("lists sources oldest first, each with an author, title and year", () => {
    for (const article of WIKIQORGI_ARTICLES) {
      const sources = getSources(article.slug);
      expect(sources.length).toBeGreaterThanOrEqual(2);
      for (const source of sources) {
        expect(source.author && source.title).toBeTruthy();
        expect(source.year).toBeLessThanOrEqual(new Date().getUTCFullYear());
      }
      const years = sources.map((s) => s.year);
      expect(years).toEqual([...years].sort((a, b) => a - b));
    }
  });

  it("keeps every source title renderable in the reader", () => {
    for (const article of WIKIQORGI_ARTICLES) {
      expect(isRenderableTitle(article.sourceTitle), article.sourceTitle).toBe(true);
    }
  });

  it("has five articles per section", () => {
    for (const section of WIKIQORGI_SECTIONS) expect(section.articles).toHaveLength(5);
  });
});
