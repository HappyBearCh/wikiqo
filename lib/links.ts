/**
 * Origin + path prefix for an article on Wikipedia itself.
 *
 * This lives here rather than in lib/wikipedia.ts because that module is
 * `server-only` and these are pure string functions with no fetching in them.
 * proxy.ts runs on the edge and needs to build a Wikipedia URL for every title
 * we decline to render, so it cannot import the server-only module.
 */
export const WIKIPEDIA_ARTICLE_BASE = "https://en.wikipedia.org/wiki/";

/** Builds the canonical en.wikipedia.org URL for a given title, for attribution links. */
export function wikipediaUrlFor(title: string): string {
  return `${WIKIPEDIA_ARTICLE_BASE}${encodeURIComponent(title.trim().replace(/\s+/g, "_"))}`;
}

/** Builds the internal /wiki/[slug] path for a given Wikipedia title. */
export function articleHref(title: string): string {
  return `/wiki/${encodeURIComponent(title.trim().replace(/\s+/g, "_"))}`;
}

/** Recovers a Wikipedia page title from a /wiki/[slug] route param. */
export function titleFromSlug(slug: string): string {
  let decoded = slug;
  try {
    decoded = decodeURIComponent(slug);
  } catch {
    // already decoded or malformed — fall back to the raw slug
  }
  return decoded.replace(/_/g, " ");
}

/**
 * The form content/popular-titles.ts stores titles in: underscores for spaces,
 * lower case. Here rather than there so the browser can apply the same
 * normalisation to the key list served from /search-index.json without
 * importing the list itself.
 */
export function renderableTitleKey(title: string): string {
  return title.trim().replace(/[\s_]+/g, "_").toLowerCase();
}

/** Builds the internal /wikiqorgi/[slug] path for a rewritten article. */
export function rewrittenHref(slug: string): string {
  return `/wikiqorgi/${slug}`;
}
