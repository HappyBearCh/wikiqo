import type { MetadataRoute } from "next";
import { WIKIQORGI_SECTIONS, rewrittenHref, sectionHref } from "@/content/wikiqorgi";
import { promotedArticles } from "@/content/wikiqorgi/schedule";
import { SITE_URL } from "@/lib/site";

/**
 * Site sitemap: wikiqo's own pages only.
 *
 * The mirrored /wiki/ articles used to be listed here, seeded from the
 * Wikimedia pageviews API. They were removed along with the robots.txt change
 * that disallows /wiki/ — advertising URLs in a sitemap that robots.txt forbids
 * is a contradiction crawlers report as an error, so the two have to move
 * together. The reason for both is in app/robots.ts: those pages are dynamic,
 * cost a function invocation and two Wikipedia round-trips each, and canonical
 * to en.wikipedia.org, so crawling them could never have indexed us.
 *
 * /search is gone for the same reason — disallowed, and an unbounded query
 * space besides.
 *
 * ## Articles enter the sitemap as they are promoted
 *
 * The shelf was written in short bursts, and listing every article at once
 * advertises a large number of new pages in a single day — the pattern search
 * engines associate with mass-produced content (see the note on pacing in
 * content/wikiqorgi/index.ts). So an article is listed only once the
 * front-page schedule has promoted it (content/wikiqorgi/schedule.ts), and
 * the sitemap regenerates daily to pick up each new promotion.
 *
 * This does not hide anything. Every article is published and linked from its
 * section page, and crawlers that follow those links will find it; the sitemap
 * only controls what wikiqo actively announces, and when.
 *
 * lastModified is the article's real publication date, because Google uses
 * the field only when it is consistently accurate. A section page changes only
 * when an article is added to it, so it takes its newest article's date, and
 * the shelf index takes the newest date on the shelf.
 */
export const revalidate = 86400;

/** ISO dates compare correctly as strings, so the newest is the max. */
function newest(dates: string[]): string | undefined {
  return dates.reduce<string | undefined>((max, d) => (max && max > d ? max : d), undefined);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const promoted = promotedArticles(new Date());
  const newestPromotion = promoted[0]?.promotedAt;

  return [
    { url: `${SITE_URL}/`, lastModified: newestPromotion, changeFrequency: "daily", priority: 1 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.5 },
    {
      url: `${SITE_URL}/wikiqorgi`,
      lastModified: newest(WIKIQORGI_SECTIONS.flatMap((s) => s.articles.map((a) => a.published))),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...WIKIQORGI_SECTIONS.map((section) => ({
      url: `${SITE_URL}${sectionHref(section.id)}`,
      lastModified: newest(section.articles.map((a) => a.published)),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    // Original writing that canonicals to wikiqo itself — the pages here most
    // worth indexing on their own merits, hence the high priority.
    ...promoted.map(({ article }) => ({
      url: `${SITE_URL}${rewrittenHref(article.slug)}`,
      lastModified: article.published,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
