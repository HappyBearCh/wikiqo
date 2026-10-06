import { afterEach, describe, expect, it, vi } from "vitest";
import sitemap from "@/app/sitemap";
import { WIKIQORGI_ARTICLES, WIKIQORGI_SECTIONS } from "@/content/wikiqorgi";
import { promotedArticles } from "@/content/wikiqorgi/schedule";
import { breadcrumbList } from "@/lib/structured-data";

const articleUrls = (entries: ReturnType<typeof sitemap>) =>
  entries
    .map((entry) => entry.url)
    .filter((url) => {
      const slug = url.split("/wikiqorgi/")[1];
      return slug !== undefined && WIKIQORGI_ARTICLES.some((a) => a.slug === slug);
    });

describe("sitemap", () => {
  afterEach(() => vi.useRealTimers());

  it("lists only articles the schedule has promoted", () => {
    const now = new Date(Date.UTC(2026, 9, 2));
    vi.useFakeTimers();
    vi.setSystemTime(now);

    const listed = articleUrls(sitemap());
    expect(listed).toHaveLength(promotedArticles(now).length);
    expect(listed.length).toBeLessThan(WIKIQORGI_ARTICLES.length);
  });

  it("lists every section page, whatever the date", () => {
    const urls = sitemap().map((entry) => entry.url);
    for (const section of WIKIQORGI_SECTIONS) {
      expect(urls).toContain(`https://www.wikiqo.com/wikiqorgi/${section.id}`);
    }
  });

  it("dates each listed article by its publication date", () => {
    for (const entry of sitemap()) {
      const slug = entry.url.split("/wikiqorgi/")[1];
      const article = WIKIQORGI_ARTICLES.find((a) => a.slug === slug);
      if (article) expect(entry.lastModified).toBe(article.published);
    }
  });

  it("dates each section by its newest article", () => {
    const entries = sitemap();
    for (const section of WIKIQORGI_SECTIONS) {
      const entry = entries.find((e) => e.url === `https://www.wikiqo.com/wikiqorgi/${section.id}`);
      const newest = section.articles.map((a) => a.published).sort().at(-1);
      expect(entry?.lastModified).toBe(newest);
    }
  });

  it("grows as articles are promoted", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(Date.UTC(2026, 8, 1)));
    const earlier = articleUrls(sitemap()).length;
    vi.setSystemTime(new Date(Date.UTC(2027, 0, 1)));
    expect(articleUrls(sitemap()).length).toBeGreaterThan(earlier);
  });
});

describe("breadcrumbList", () => {
  it("starts at home and numbers positions from 1", () => {
    const list = breadcrumbList([{ name: "wikiqorgi", path: "/wikiqorgi" }]);
    expect(list.itemListElement).toEqual([
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wikiqo.com" },
      { "@type": "ListItem", position: 2, name: "wikiqorgi", item: "https://www.wikiqo.com/wikiqorgi" },
    ]);
  });
});
