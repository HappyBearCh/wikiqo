import { describe, expect, it } from "vitest";
import { WIKIQORGI_ARTICLES, getRewrittenArticle } from "@/content/wikiqorgi";
import { crosslinkTargets, linkArticleHtml } from "@/content/wikiqorgi/crosslinks";

describe("linkArticleHtml", () => {
  const linked = WIKIQORGI_ARTICLES.map((article) => ({
    article,
    html: linkArticleHtml(article),
    targets: crosslinkTargets(article),
  }));

  it("links the shelf together", () => {
    const total = linked.reduce((sum, { targets }) => sum + targets.length, 0);
    expect(total).toBeGreaterThan(WIKIQORGI_ARTICLES.length * 2);
  });

  it("never links an article to itself, or to the same article twice", () => {
    for (const { article, targets } of linked) {
      expect(targets).not.toContain(article.slug);
      expect(new Set(targets).size).toBe(targets.length);
    }
  });

  it("adds at most eight links per article", () => {
    for (const { targets } of linked) expect(targets.length).toBeLessThanOrEqual(8);
  });

  it("only links to articles that exist", () => {
    const slugs = new Set(WIKIQORGI_ARTICLES.map((a) => a.slug));
    for (const { targets } of linked) {
      for (const target of targets) expect(slugs.has(target)).toBe(true);
    }
  });

  it("changes nothing but the inserted anchors", () => {
    for (const { article, html } of linked) {
      const stripped = html.replace(
        /<a href="\/wikiqorgi\/[^"]+" class="wq-crosslink">([^<]*)<\/a>/g,
        "$1",
      );
      expect(stripped).toBe(article.html);
    }
  });

  it("never puts a link inside a heading or another link", () => {
    for (const { html } of linked) {
      for (const heading of html.match(/<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>/g) ?? []) {
        expect(heading).not.toContain("wq-crosslink");
      }
      expect(html).not.toMatch(/<a\b[^>]*>(?:(?!<\/a>)[\s\S])*<a\b/);
    }
  });

  it("respects notIn: 'translation' in the DNA article is not about languages", () => {
    expect(crosslinkTargets(getRewrittenArticle("dna")!)).not.toContain("translation");
  });

  it("lets blocked phrases shadow shorter link phrases", () => {
    const html = linkArticleHtml({
      ...WIKIQORGI_ARTICLES[0],
      slug: "test-only",
      html: "<p>The Holy Roman Empire was neither. The Roman Empire was.</p>",
    });
    expect(html).toContain("The Holy Roman Empire was neither.");
    expect(html).toContain(
      '<a href="/wikiqorgi/roman-empire" class="wq-crosslink">Roman Empire</a> was.',
    );
  });
});
