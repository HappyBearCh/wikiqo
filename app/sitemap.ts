import type { MetadataRoute } from "next";
import { getPopularArticleTitles } from "@/lib/wikipedia";
import { articleHref } from "@/lib/links";
import { SITE_URL } from "@/lib/site";

// Regenerated daily: the popular-article set shifts slowly and the pageviews
// source it's built from updates roughly once per day.
export const revalidate = 86400;

/**
 * Site sitemap: the real wikiqo routes plus the most-viewed Wikipedia articles
 * (see getPopularArticleTitles). We deliberately do not enumerate all ~7M
 * articles — that isn't feasible to generate at request time. The popular set
 * stays well under the 50,000-URL per-file limit, so a single sitemap suffices.
 *
 * Note that article pages currently canonical-point at en.wikipedia.org (see
 * wiki/[slug]/generateMetadata), so search engines will crawl these URLs but
 * index Wikipedia's copy rather than ours. Dropping that canonical is what
 * would make these entries earn their crawl budget.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "daily", priority: 1 },
    { url: `${SITE_URL}/search`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.5 },
  ];

  const titles = await getPopularArticleTitles();
  const lastModified = new Date();
  const articleEntries: MetadataRoute.Sitemap = titles.map((title) => ({
    url: `${SITE_URL}${articleHref(title)}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticEntries, ...articleEntries];
}
