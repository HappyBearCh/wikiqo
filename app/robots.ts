import type { MetadataRoute } from "next";

const BASE_URL = "https://wikiqo.com";

// High-volume AI/training crawlers. Each article is a non-canonical Wikipedia
// mirror, so letting these walk our copy of the link graph is pure cost (a cold
// function invocation per unique slug) with no upside. We disallow them here,
// but robots.txt is only advisory — bots that ignore it are stopped at the edge
// by the Vercel WAF "AI Bots" managed ruleset (see deploy notes), which blocks
// before any function runs and isn't billed.
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "CCBot",
  "Google-Extended",
  "PerplexityBot",
  "Bytespider",
  "Amazonbot",
  "Applebot-Extended",
  "Meta-ExternalAgent",
  "FacebookBot",
  "Diffbot",
  "Omgilibot",
  "ImagesiftBot",
  "YouBot",
  "cohere-ai",
  "Timpibot",
];

/**
 * Allow general search engines to crawl pages (excluding the JSON API), but
 * deny dedicated AI scrapers entirely. The sitemap pointer lets crawlers
 * discover /sitemap.xml — the curated set of popular articles that are actually
 * worth indexing — without manual submission. Inline article links carry
 * rel="nofollow" (see lib/sanitize.ts) so even allowed crawlers don't traverse
 * the full Wikipedia link graph through us.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        disallow: "/",
      })),
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
