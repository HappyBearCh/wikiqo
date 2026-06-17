import "server-only";
import type { FileInfo, OpenSearchSuggestion, SearchResult, WikiSummary } from "@/lib/types";

const REST_BASE = "https://en.wikipedia.org/api/rest_v1";
const ACTION_BASE = "https://en.wikipedia.org/w/api.php";
const PAGEVIEWS_TOP_BASE =
  "https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access";

// Wikimedia asks API consumers to identify themselves. No personal data here,
// just the calling site, per https://meta.wikimedia.org/wiki/User-Agent_policy
const USER_AGENT = "wikiqo.com/1.0 (https://wikiqo.com; Next.js Wikipedia reader)";

/** Normalizes a page title or URL slug into Wikipedia's underscore-separated form. */
function normalizeTitle(title: string): string {
  return title.trim().replace(/\s+/g, "_");
}

/** The canonical title -> path encoding Wikipedia itself uses, e.g. "C++" -> "C%2B%2B". */
function encodeTitle(title: string): string {
  return encodeURIComponent(normalizeTitle(title));
}

/** Builds the canonical en.wikipedia.org URL for a given title, for attribution links. */
export function wikipediaUrlFor(title: string): string {
  return `https://en.wikipedia.org/wiki/${encodeTitle(title)}`;
}

/**
 * Fetches the lead summary for an article from the REST API.
 * Cached at the edge/CDN for 24h since article summaries change infrequently.
 * Returns null if the page doesn't exist (404) or is a redirect-less miss.
 */
export async function getSummary(title: string): Promise<WikiSummary | null> {
  const res = await fetch(`${REST_BASE}/page/summary/${encodeTitle(title)}?redirect=true`, {
    headers: { "User-Agent": USER_AGENT, Accept: "application/json" },
    next: { revalidate: 86400 },
  });

  if (res.status === 404) return null;
  if (!res.ok) {
    throw new Error(`Wikipedia summary request failed: ${res.status} ${res.statusText}`);
  }

  return (await res.json()) as WikiSummary;
}

/**
 * Fetches the full rendered article body as HTML (Parsoid output) from the REST API.
 * Cached for 24h, matching the summary endpoint's freshness window.
 * Returns null if the page doesn't exist.
 */
export async function getArticleHtml(title: string): Promise<string | null> {
  const res = await fetch(`${REST_BASE}/page/html/${encodeTitle(title)}?redirect=true`, {
    headers: { "User-Agent": USER_AGENT, Accept: "text/html" },
    next: { revalidate: 86400 },
  });

  if (res.status === 404) return null;
  if (!res.ok) {
    throw new Error(`Wikipedia article HTML request failed: ${res.status} ${res.statusText}`);
  }

  return await res.text();
}

/**
 * Returns the most-viewed article titles over a recent window, via the
 * Wikimedia pageviews "top" API, deduped and ranked by recency of popularity.
 * Used to populate the sitemap with the pages most worth crawling — listing
 * all ~7M articles is neither feasible at request time nor desirable (every
 * article canonical-points to Wikipedia). Each day's top-1000 list is
 * immutable history, so it's cached for a week; namespace pages (Special:,
 * File:, etc.) and the main page are dropped so only real articles remain.
 *
 * Pageviews data lags ~1–2 days, so the window starts two days back to avoid
 * 404s on not-yet-published days.
 */
export async function getPopularArticleTitles(limit = 20000, days = 30): Promise<string[]> {
  const dates: string[] = [];
  for (let i = 2; i < days + 2; i++) {
    const d = new Date();
    d.setUTCDate(d.getUTCDate() - i);
    const month = String(d.getUTCMonth() + 1).padStart(2, "0");
    const day = String(d.getUTCDate()).padStart(2, "0");
    dates.push(`${d.getUTCFullYear()}/${month}/${day}`);
  }

  const lists = await Promise.all(
    dates.map(async (date) => {
      const res = await fetch(`${PAGEVIEWS_TOP_BASE}/${date}`, {
        headers: { "User-Agent": USER_AGENT, Accept: "application/json" },
        next: { revalidate: 604800 }, // 1 week — historical data is immutable
      });
      if (!res.ok) return [] as string[];
      const data = (await res.json()) as {
        items?: Array<{ articles?: Array<{ article: string }> }>;
      };
      return data.items?.[0]?.articles?.map((a) => a.article) ?? [];
    }),
  );

  const seen = new Set<string>();
  const titles: string[] = [];
  for (const list of lists) {
    for (const article of list) {
      // Skip the main page and any namespaced page (contains a colon, e.g.
      // Special:Search, File:…, Wikipedia:…) — the sitemap lists articles only.
      if (article === "Main_Page" || article.includes(":")) continue;
      if (seen.has(article)) continue;
      seen.add(article);
      titles.push(article);
      if (titles.length >= limit) return titles;
    }
  }
  return titles;
}

/** Strips an extmetadata HTML value down to a trimmed string, or undefined. */
function metaValue(field?: { value?: string }): string | undefined {
  const value = field?.value?.trim();
  return value ? value : undefined;
}

/**
 * Resolves a File:/Image: title to its underlying media via the Action API's
 * `prop=imageinfo` module, returning the upload.wikimedia.org URL plus a
 * display-sized thumbnail and attribution metadata. Cached for 24h, matching
 * the article endpoints. Returns null if the file doesn't exist.
 */
export async function getFileInfo(title: string, thumbWidth = 1600): Promise<FileInfo | null> {
  const url = new URL(ACTION_BASE);
  url.searchParams.set("action", "query");
  url.searchParams.set("titles", normalizeTitle(title));
  url.searchParams.set("prop", "imageinfo");
  url.searchParams.set("iiprop", "url|size|mime|extmetadata");
  url.searchParams.set("iiurlwidth", String(thumbWidth));
  url.searchParams.set("format", "json");
  url.searchParams.set("formatversion", "2");

  const res = await fetch(url, {
    headers: { "User-Agent": USER_AGENT, Accept: "application/json" },
    next: { revalidate: 86400 },
  });

  if (!res.ok) {
    throw new Error(`Wikipedia imageinfo request failed: ${res.status} ${res.statusText}`);
  }

  type ImageInfo = {
    url: string;
    thumburl?: string;
    descriptionurl: string;
    width: number;
    height: number;
    mime: string;
    extmetadata?: Record<string, { value?: string }>;
  };
  const data = (await res.json()) as {
    query?: { pages?: Array<{ missing?: boolean; imageinfo?: ImageInfo[] }> };
  };

  // Commons-hosted files report `missing: true` on en.wikipedia (no *local*
  // description page) yet still return fully populated federated `imageinfo`.
  // So existence is determined by the presence of imageinfo, not `missing`.
  const page = data.query?.pages?.[0];
  const info = page?.imageinfo?.[0];
  if (!page || !info) return null;

  const meta = info.extmetadata ?? {};
  return {
    url: info.url,
    thumbUrl: info.thumburl,
    width: info.width,
    height: info.height,
    mime: info.mime,
    description: metaValue(meta.ImageDescription),
    artist: metaValue(meta.Artist),
    license: metaValue(meta.LicenseShortName),
    descriptionUrl: info.descriptionurl,
  };
}

/**
 * Full-text search via the MediaWiki Action API (`list=search`).
 * Always fetched fresh — search results should never be cached/stale.
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
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Wikipedia search request failed: ${res.status} ${res.statusText}`);
  }

  const data = (await res.json()) as { query?: { search?: SearchResult[] } };
  return data.query?.search ?? [];
}

/**
 * Autocomplete suggestions via the `action=opensearch` module.
 * Cached for 1h — suggestion lists for a given prefix barely change.
 */
export async function openSearch(query: string, limit = 8): Promise<OpenSearchSuggestion[]> {
  const url = new URL(ACTION_BASE);
  url.searchParams.set("action", "opensearch");
  url.searchParams.set("search", query);
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("namespace", "0");
  url.searchParams.set("format", "json");

  const res = await fetch(url, {
    headers: { "User-Agent": USER_AGENT, Accept: "application/json" },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`Wikipedia opensearch request failed: ${res.status} ${res.statusText}`);
  }

  const [, titles, descriptions, urls] = (await res.json()) as [
    string,
    string[],
    string[],
    string[],
  ];

  return titles.map((title, i) => ({
    title,
    description: descriptions[i] ?? "",
    url: urls[i] ?? "",
  }));
}
