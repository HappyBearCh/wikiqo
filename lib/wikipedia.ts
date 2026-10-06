import "server-only";
import type { SearchResult, WikiSummary } from "@/lib/types";

const REST_BASE = "https://en.wikipedia.org/api/rest_v1";
const ACTION_BASE = "https://en.wikipedia.org/w/api.php";

// Wikimedia asks API consumers to identify themselves. No personal data here,
// just the calling site, per https://meta.wikimedia.org/wiki/User-Agent_policy
const USER_AGENT = "wikiqo.com/1.0 (https://wikiqo.com; Next.js Wikipedia reader)";

// Cache Wikipedia content for a year. Article bodies/summaries change slowly and
// staleness is acceptable for a reader mirror, so a long window keeps the ISR
// cache warm: each slug is rendered (and re-fetched from Wikipedia) at most once
// a year instead of daily, slashing function invocations, ISR writes, and origin
// transfer. Content can still be refreshed on demand via revalidatePath/Tag.
const ONE_YEAR = 31_536_000;

/** Normalizes a page title or URL slug into Wikipedia's underscore-separated form. */
function normalizeTitle(title: string): string {
  return title.trim().replace(/\s+/g, "_");
}

/** The canonical title -> path encoding Wikipedia itself uses, e.g. "C++" -> "C%2B%2B". */
function encodeTitle(title: string): string {
  return encodeURIComponent(normalizeTitle(title));
}

// WIKIPEDIA_ARTICLE_BASE and wikipediaUrlFor moved to lib/links.ts, which is
// not server-only: proxy.ts runs on the edge and needs them to redirect titles
// this site declines to render. Re-exported here so the existing import sites
// (lib/sanitize.ts, the article route) keep reading naturally.
export { WIKIPEDIA_ARTICLE_BASE, wikipediaUrlFor } from "@/lib/links";

/**
 * Fetches the lead summary for an article from the REST API.
 * Cached for a year (see ONE_YEAR) since article summaries change infrequently.
 * Returns null if the page doesn't exist (404) or is a redirect-less miss.
 */
export async function getSummary(title: string): Promise<WikiSummary | null> {
  const res = await fetch(`${REST_BASE}/page/summary/${encodeTitle(title)}?redirect=true`, {
    headers: { "User-Agent": USER_AGENT, Accept: "application/json" },
    next: { revalidate: ONE_YEAR },
  });

  if (res.status === 404) return null;
  if (!res.ok) {
    throw new Error(`Wikipedia summary request failed: ${res.status} ${res.statusText}`);
  }

  return (await res.json()) as WikiSummary;
}

/**
 * Fetches the full rendered article body as HTML (Parsoid output) from the REST API.
 * Cached for a year, matching the summary endpoint's freshness window.
 * Returns null if the page doesn't exist.
 */
export async function getArticleHtml(title: string): Promise<string | null> {
  const res = await fetch(`${REST_BASE}/page/html/${encodeTitle(title)}?redirect=true`, {
    headers: { "User-Agent": USER_AGENT, Accept: "text/html" },
    next: { revalidate: ONE_YEAR },
  });

  if (res.status === 404) return null;
  if (!res.ok) {
    throw new Error(`Wikipedia article HTML request failed: ${res.status} ${res.statusText}`);
  }

  return await res.text();
}

/**
 * Full-text search via the MediaWiki Action API (`list=search`).
 * Cached for an hour: results for a given query barely shift hour-to-hour, and
 * caching dedupes repeated/identical searches so they don't each spend a fresh
 * external call + render. Distinct queries still miss, as expected.
 */
export async function searchArticles(query: string, limit = 20): Promise<SearchResult[]> {
  const url = new URL(ACTION_BASE);
  url.searchParams.set("action", "query");
  url.searchParams.set("list", "search");
  url.searchParams.set("srsearch", query);
  url.searchParams.set("srlimit", String(limit));
  url.searchParams.set("format", "json");

  const res = await fetch(url, {
    headers: { "User-Agent": USER_AGENT, Accept: "application/json" },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`Wikipedia search request failed: ${res.status} ${res.statusText}`);
  }

  const data = (await res.json()) as { query?: { search?: SearchResult[] } };
  return data.query?.search ?? [];
}
