import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Site sitemap. Lists only the pages wikiqo actually owns.
 *
 * Article pages are deliberately absent. Every /wiki/ page sets rel=canonical
 * to en.wikipedia.org (see wiki/[slug]/generateMetadata), so listing them would
 * ask crawlers to spend budget — and one cold function invocation per slug — on
 * URLs that can never be indexed under that canonical. They stay fully
 * reachable and shareable; they just aren't advertised for crawling.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, changeFrequency: "daily", priority: 1 },
    { url: `${SITE_URL}/search`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.5 },
  ];
}
