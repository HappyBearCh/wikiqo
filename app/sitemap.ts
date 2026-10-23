import type { MetadataRoute } from "next";
import { GUIDES } from "@/lib/formats";
import { CONTENT_UPDATED as LAST_UPDATED, SITE_URL } from "@/lib/site";

/**
 * The generator, About, and the citation-format guides. Removed URLs
 * (/wikiqorgi, /wiki/, /search) are redirected in next.config.ts and are
 * deliberately not listed.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, lastModified: LAST_UPDATED, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/about`, lastModified: LAST_UPDATED, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/formats`, lastModified: LAST_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    ...GUIDES.map((g) => ({
      url: `${SITE_URL}/formats/${g.slug}`,
      lastModified: LAST_UPDATED,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
