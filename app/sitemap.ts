import type { MetadataRoute } from "next";
import {
  WIKIQORGI_ARTICLES,
  WIKIQORGI_SECTIONS,
  rewrittenHref,
  sectionHref,
} from "@/content/wikiqorgi";
import { SITE_URL } from "@/lib/site";

/**
 * Site sitemap: wikiqo's own pages only.
 *
 * The mirrored /wiki/ articles used to be listed here, seeded from
 * getPopularArticleTitles(). They were removed along with the robots.txt change
 * that disallows /wiki/ — advertising URLs in a sitemap that robots.txt forbids
 * is a contradiction crawlers report as an error, so the two have to move
 * together. The reason for both is in app/robots.ts: those pages are dynamic,
 * cost a function invocation and two Wikipedia round-trips each, and canonical
 * to en.wikipedia.org, so crawling them could never have indexed us.
 *
 * /search is gone for the same reason — disallowed, and an unbounded query
 * space besides.
 *
 * Dropping the popular-titles fetch also makes this route fully static: there
 * is no longer any request-time data here, so the daily `revalidate` that used
 * to sit above went with it. The file is now prerendered once per deploy.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "daily", priority: 1 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/wikiqorgi`, changeFrequency: "monthly", priority: 0.9 },
    ...WIKIQORGI_SECTIONS.map((section) => ({
      url: `${SITE_URL}${sectionHref(section.id)}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    // Unlike the mirrored article entries below, these are original writing
    // that canonicals to wikiqo itself — the only pages here worth indexing on
    // their own merits, hence the high priority.
    ...WIKIQORGI_ARTICLES.map((article) => ({
      url: `${SITE_URL}${rewrittenHref(article.slug)}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  return staticEntries;
}
