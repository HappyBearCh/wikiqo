/** Builds the internal /wiki/[slug] path for a given Wikipedia title. */
export function articleHref(title: string): string {
  return `/wiki/${encodeURIComponent(title.trim().replace(/\s+/g, "_"))}`;
}

/**
 * Whether a title belongs to a media namespace (File:/Image:/Media:). These
 * pages have no Parsoid article body or REST summary, so they can't be rendered
 * like an article — we embed the Wikipedia page in an iframe instead.
 */
export function isFileNamespace(title: string): boolean {
  return /^(File|Image|Media)\s*:/i.test(title.trim());
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
