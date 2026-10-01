import { WIKIQORGI_CATALOG } from "@/content/wikiqorgi/catalog";
import { renderableTitleKeys } from "@/content/popular-titles";
import type { SearchIndex } from "@/lib/shelf-search";

/**
 * What the header search box needs to know that Wikipedia's autocomplete
 * can't tell it: which wikiqorgi articles match the query, and which
 * suggestions wikiqo will actually render rather than hand to Wikipedia.
 *
 * Static — built once per deploy and served from the CDN, so the typeahead
 * never costs a function invocation, as before. The browser fetches it
 * lazily, the first time someone types into the search box, and keeps it for
 * the rest of the visit. Most of its weight is the mirrored-title list
 * (~14K titles: ~330 KB raw, ~105 KB with Brotli, which the CDN applies).
 *
 * Crawlers are already kept off it: robots.txt disallows /search, and
 * robots.txt rules are prefix matches.
 */
export const dynamic = "force-static";

export function GET() {
  const index: SearchIndex = {
    shelf: WIKIQORGI_CATALOG,
    mirrored: renderableTitleKeys(),
  };
  return Response.json(index);
}
