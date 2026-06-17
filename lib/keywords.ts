/**
 * Lightweight keyword extraction shared by the text-visualization banner.
 *
 * Every banner variant (word constellation, frequency ribbon, kinetic title)
 * consumes the same `{ text, weight }[]` shape, so a page can feed it whatever
 * text it has — a body of article prose, a handful of result titles, or the
 * featured cards on the home page — and get a sensible set of salient terms
 * back. This is a frequency heuristic, not real NLP: it tokenizes words, drops
 * stopwords, counts the rest, and returns the most common ones.
 */

/** A salient term plus how often it occurred (its visual weight). */
export interface Keyword {
  text: string;
  weight: number;
}

// Common English function words plus a few that show up constantly in
// Wikipedia boilerplate ("references", "retrieved", "isbn", …). Kept lowercase;
// tokens are lowercased before lookup.
const STOPWORDS = new Set<string>([
  "the", "and", "for", "are", "but", "not", "you", "all", "any", "can", "had",
  "her", "was", "one", "our", "out", "day", "get", "has", "him", "his", "how",
  "man", "new", "now", "old", "see", "two", "way", "who", "boy", "did", "its",
  "let", "put", "say", "she", "too", "use", "with", "that", "this", "from",
  "they", "have", "were", "been", "their", "would", "there", "what", "which",
  "when", "your", "them", "than", "then", "into", "such", "also", "more", "most",
  "some", "only", "other", "after", "first", "where", "these", "those", "being",
  "between", "while", "about", "many", "much", "over", "under", "during", "both",
  "each", "very", "could", "should", "because", "however", "though", "through",
  "before", "above", "below", "again", "further", "once", "here", "down", "off",
  "same", "used", "using", "include", "including", "known", "called", "may",
  "references", "retrieved", "archived", "original", "external", "links", "isbn",
  "pp", "vol", "ed", "eds", "cite", "citation", "wikipedia", "article", "see",
  "according", "within", "around", "among", "another", "since", "still", "made",
]);

// A letter (any script) followed by letters, combining marks, apostrophes or
// hyphens — keeps "naïve", "co-op", "rock'n'roll" whole, splits on everything
// else (digits, punctuation, whitespace).
const TOKEN_RE = /\p{L}[\p{L}\p{M}'’-]*/gu;

// Cap how much text we scan. The leading sections of an article already
// dominate term frequency, and this keeps work bounded on very long pages.
const MAX_SCAN = 50_000;

/** Extracts the top `limit` salient terms from a block of plain text. */
export function keywordsFromText(text: string, limit = 22): Keyword[] {
  const counts = new Map<string, { weight: number; display: string }>();

  for (const match of text.slice(0, MAX_SCAN).matchAll(TOKEN_RE)) {
    const raw = match[0];
    const key = raw.toLowerCase();
    if (key.length < 3 || STOPWORDS.has(key)) continue;

    const existing = counts.get(key);
    if (existing) {
      existing.weight += 1;
    } else {
      // Remember the first-seen casing so proper nouns keep their capitals.
      counts.set(key, { weight: 1, display: raw });
    }
  }

  return [...counts.values()]
    .map(({ weight, display }) => ({ text: display, weight }))
    // Most frequent first; break ties toward longer (more specific) words.
    .sort((a, b) => b.weight - a.weight || b.text.length - a.text.length)
    .slice(0, limit);
}

/** Strips tags/entities from HTML, then extracts keywords from what's left. */
export function keywordsFromHtml(html: string, limit = 22): Keyword[] {
  return keywordsFromText(htmlToText(html), limit);
}

/** Rough HTML→text: drop script/style, strip tags, decode common entities. */
function htmlToText(html: string): string {
  return html
    .replace(/<(script|style)[\s\S]*?<\/\1>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#0?39;|&apos;/gi, "'")
    .replace(/&#\d+;/g, " ");
}
