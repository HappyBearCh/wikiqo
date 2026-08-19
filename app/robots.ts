import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

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
 * Allow general search engines to crawl our own pages, but deny the mirrored
 * Wikipedia routes to everyone and deny dedicated AI scrapers entirely.
 *
 * `/wiki/` is disallowed for `*` because those pages cannot earn anything back.
 * They are `ƒ (Dynamic)` — one cold function invocation, two Wikipedia
 * round-trips and a full Parsoid render per unique slug — and they carry a
 * canonical pointing at en.wikipedia.org (see wiki/[slug]/generateMetadata), so
 * a crawler that walks them indexes Wikipedia's copy rather than ours. Every
 * such request was billed compute spent to rank someone else's page.
 *
 * That traffic was the entire hosting bill: 216.74K function invocations
 * against 224.62K edge requests, i.e. ~96% of all traffic executing a function
 * on a site that is otherwise fully prerendered. The AI-crawler denials and the
 * WAF ruleset below were already in place; this closes the remaining hole,
 * which was ordinary search crawlers doing exactly what they were permitted to.
 *
 * `/search` is disallowed for the same reason with an extra one: it is dynamic
 * and its query space is unbounded, so it is an infinite crawl surface.
 *
 * What stays open is everything worth indexing: the home page, /about, and all
 * of /wikiqorgi — original writing that canonicals to wikiqo itself and is
 * prerendered static, so crawling it costs nothing per request.
 *
 * Reversing this is a one-line change if the mirror is ever given
 * self-referencing canonicals and a bounded, cached page set.
 *
 * Inline article links additionally carry rel="nofollow" (see lib/sanitize.ts).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/wiki/", "/search"],
      },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        disallow: "/",
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
