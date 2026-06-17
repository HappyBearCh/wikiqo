import type { MetadataRoute } from "next";
import { getPopularArticleTitles } from "@/lib/wikipedia";
import { articleHref } from "@/lib/links";

const BASE_URL = "https://wikiqo.com";

// Regenerated daily: the popular-article set shifts slowly and the pageviews
// source it's built from updates roughly once per day.
export const revalidate = 86400;

/**
 * Site sitemap. Lists the real wikiqo routes plus the most-viewed Wikipedia
 * articles (see getPopularArticleTitles). We deliberately do not enumerate all
 * ~7M articles: it isn't feasible to generate at request time, and every
 * article page canonical-points to Wikipedia, so listing them wholesale would
 * just be non-canonical mirror URLs. The popular set stays well under the
 * 50,000-URL per-file limit, so a single sitemap suffices.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "daily", priority: 1 },
    { url: `${BASE_URL}/search`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.5 },
  ];

  const titles = await getPopularArticleTitles();
  const lastModified = new Date();
  const articleEntries: MetadataRoute.Sitemap = titles.map((title) => ({
    url: `${BASE_URL}${articleHref(title)}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticEntries, ...articleEntries];
}
