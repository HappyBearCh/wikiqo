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

/**
 * MediaWiki namespaces that hold no mirrorable article body, minus the media
 * ones handled by isFileNamespace. Canonical names plus the long-form aliases
 * (Project:, WP:, WT:, Image talk:).
 *
 * Deliberately excludes English Wikipedia's short pseudo-namespaces (MOS:,
 * CAT:, H:, T:) — those are ordinary mainspace redirects, not real namespaces,
 * so they resolve to readable articles and must not be rejected.
 */
const NON_ARTICLE_NAMESPACES = [
  "Special", "Talk", "User", "User talk", "Wikipedia", "Wikipedia talk",
  "Project", "Project talk", "WP", "WT", "File talk", "Image talk",
  "MediaWiki", "MediaWiki talk", "Template", "Template talk",
  "Help", "Help talk", "Category", "Category talk", "Portal", "Portal talk",
  "Draft", "Draft talk", "TimedText", "TimedText talk", "Module", "Module talk",
  "Gadget", "Gadget talk", "Gadget definition", "Gadget definition talk",
  "Topic",
];

// Longest first so "User talk" is tried before "User" — alternation is
// first-match-wins at a given position. Interior spaces match a run of spaces
// or underscores, since a title may arrive in either form.
const NON_ARTICLE_RE = new RegExp(
  `^(?:${[...NON_ARTICLE_NAMESPACES]
    .sort((a, b) => b.length - a.length)
    .map((ns) => ns.replace(/ /g, "[\\s_]+"))
    .join("|")})[\\s_]*:`,
  "i",
);

/**
 * Whether a title belongs to a non-article namespace (Talk:, Template talk:,
 * Category:, Portal:, …). These have no Parsoid body to mirror, so the article
 * route 404s them immediately instead of spending two Wikipedia round-trips to
 * discover the same thing. Crawlers walk these by the thousand.
 *
 * Only registered namespace prefixes match, never a bare colon: plenty of real
 * articles carry one ("Alien: Covenant", "Blade Runner: Black Lotus"), and a
 * colon-anywhere test would 404 them all.
 */
export function isNonArticleNamespace(title: string): boolean {
  return NON_ARTICLE_RE.test(title.trim());
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
