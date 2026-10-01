/**
 * Search over the wikiqorgi shelf.
 *
 * Deliberately free of any import from content/wikiqorgi: that module carries
 * every article body (~2 MB of HTML), and this one also runs in the browser,
 * in the header search box. The server hands it WIKIQORGI_CATALOG directly;
 * the browser fetches the same catalog from /search-index.json.
 *
 * The shelf is 160 entries, so a linear scan per keystroke is nothing. Scoring
 * is simple on purpose: every query word must appear somewhere, and where it
 * appears decides the rank.
 */

/** The fields of a rewritten article that search needs, and nothing else. */
export interface ShelfEntry {
  slug: string;
  title: string;
  /** The Wikipedia title the article covers. */
  sourceTitle: string;
  dek: string;
  section: string;
}

/** The body of /search-index.json (see app/search-index.json/route.ts). */
export interface SearchIndex {
  shelf: ShelfEntry[];
  /** Wikipedia titles wikiqo renders, in renderableTitleKey() form. */
  mirrored: string[];
}

/** Lower-cased, accent-folded words of two or more characters. */
function words(text: string): string[] {
  return text
    .normalize("NFKD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .split(/[^\p{L}\p{N}]+/u)
    .filter((word) => word.length >= 2);
}

// Where a query word turns up, by how much that should count. The Wikipedia
// title outranks our headline because it is what people type: someone
// searching "Moon" wants the Moon article, whose headline is a sentence.
const FIELD_WEIGHTS = {
  sourceTitle: 8,
  title: 5,
  section: 2,
  dek: 1,
} as const satisfies Partial<Record<keyof ShelfEntry, number>>;

/**
 * Entries matching every word of `query`, best first. A word matches a field
 * when some word of the field starts with it, so "photo" finds photography and
 * photosynthesis while typing is still under way.
 */
export function searchShelf(entries: ShelfEntry[], query: string, limit = 5): ShelfEntry[] {
  const terms = words(query);
  if (terms.length === 0) return [];
  const exact = terms.join(" ");

  const scored: Array<{ entry: ShelfEntry; score: number }> = [];

  for (const entry of entries) {
    let score = 0;
    let matchedAll = true;

    for (const term of terms) {
      let best = 0;
      for (const [field, weight] of Object.entries(FIELD_WEIGHTS)) {
        const fieldWords = words(entry[field as keyof typeof FIELD_WEIGHTS]);
        if (fieldWords.some((word) => word.startsWith(term))) {
          best = Math.max(best, weight);
        }
      }
      if (best === 0) {
        matchedAll = false;
        break;
      }
      score += best;
    }

    if (!matchedAll) continue;
    // An exact subject match ("dna", "black hole") goes to the top.
    if (words(entry.sourceTitle).join(" ") === exact) score += 100;
    scored.push({ entry, score });
  }

  return scored
    .sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title))
    .slice(0, limit)
    .map(({ entry }) => entry);
}

/**
 * The shelf entry covering a given Wikipedia title, if wikiqorgi has one.
 * Compares case-insensitively and treats spaces and underscores alike, since
 * the title may come from a URL slug or from the REST API.
 */
export function findBySourceTitle(entries: ShelfEntry[], title: string): ShelfEntry | undefined {
  const key = title.trim().replace(/[\s_]+/g, " ").toLowerCase();
  return entries.find((entry) => entry.sourceTitle.toLowerCase() === key);
}
