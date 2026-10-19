import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// AI *training* crawlers: they copy pages into model datasets and send no
// readers back, so they get nothing. robots.txt is only advisory — bots that
// ignore it are stopped at the edge by the Vercel WAF "AI Bots" managed ruleset
// (see deploy notes), which blocks before any function runs and isn't billed.
//
// AI *search* agents (OAI-SearchBot, ChatGPT-User, PerplexityBot, Claude-User
// and the like) are deliberately not here: they cite and link the pages they
// read, so they fall through to the `*` group like any search engine.
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

/** Open to search engines, closed to AI training crawlers. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
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
