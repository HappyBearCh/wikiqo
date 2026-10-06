import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// AI *training* crawlers: they copy pages into model datasets and send no
// readers back, so they get nothing. robots.txt is only advisory — bots that
// ignore it are stopped at the edge by the Vercel WAF "AI Bots" managed ruleset
// (see deploy notes), which blocks before any function runs and isn't billed.
//
// AI *search* agents are deliberately not here: OAI-SearchBot and ChatGPT-User
// (ChatGPT search), PerplexityBot and Perplexity-User, Claude-SearchBot and
// Claude-User. They cite and link the pages they read, which makes them search
// engines in every way that matters, so they fall through to the `*` group and
// see exactly what Googlebot sees: /wikiqorgi open, /wiki/ and /search closed.
// They were blocked when every page here was a Wikipedia mirror and crawling
// cost a function call per slug; /wiki/ is now closed to everyone and the
// original writing is prerendered, so crawling it costs nothing. If the WAF's
// AI Bots ruleset is set to block these as well, it has to exempt them for this
// to take effect.
const AI_CRAWLERS = [
  "GPTBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "CCBot",
  "Google-Extended",
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
 * Allow search engines, AI search included, to crawl our own pages, but deny
 * the mirrored Wikipedia routes to everyone and deny AI training crawlers
 * entirely.
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
 * Links this site renders into /wiki/ carry rel="nofollow" (FeaturedGrid,
 * ArticleView), and in-article links point at Wikipedia itself (lib/sanitize.ts).
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
