/**
 * Shape of the response from the Wikipedia REST API's
 * `/page/summary/{title}` endpoint.
 * https://en.wikipedia.org/api/rest_v1/#/Page%20content/get_page_summary__title_
 */
export interface WikiSummary {
  type: "standard" | "disambiguation" | "no-extract" | string;
  title: string;
  displaytitle: string;
  pageid: number;
  extract: string;
  extract_html?: string;
  description?: string;
  thumbnail?: WikiImage;
  originalimage?: WikiImage;
  lang: string;
  timestamp: string;
  content_urls: {
    desktop: { page: string };
    mobile: { page: string };
  };
}

interface WikiImage {
  source: string;
  width: number;
  height: number;
}

/** One hit from the MediaWiki Action API's `list=search` module. */
export interface SearchResult {
  pageid: number;
  title: string;
  /** HTML snippet with <span class="searchmatch"> highlights around matches. */
  snippet: string;
  wordcount: number;
  timestamp: string;
}

/** A single suggestion returned by the `action=opensearch` autocomplete module. */
export interface OpenSearchSuggestion {
  title: string;
  description: string;
  url: string;
}
