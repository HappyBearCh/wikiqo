import type { MetadataRoute } from "next";

const BASE_URL = "https://wikiqo.com";

// Allow crawling of all pages, but keep crawlers out of the JSON API routes
// (e.g. /api/autocomplete) — they aren't pages and carry no SEO value. The
// sitemap pointer lets crawlers discover /sitemap.xml without manual submission.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
