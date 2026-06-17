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

export interface WikiImage {
  source: string;
  width: number;
  height: number;
}

/**
 * Resolved media for a File:/Image: page, distilled from the MediaWiki Action
 * API's `prop=imageinfo` module. `url` points at upload.wikimedia.org.
 */
export interface FileInfo {
  /** Direct upload.wikimedia.org URL for the full-resolution original. */
  url: string;
  /** A scaled thumbnail URL suitable for inline display, if available. */
  thumbUrl?: string;
  width: number;
  height: number;
  /** MIME type, e.g. "image/jpeg", "audio/ogg", "application/pdf". */
  mime: string;
  /** Human-readable description (HTML), pulled from extmetadata if present. */
  description?: string;
  /** Author/uploader attribution (HTML), from extmetadata if present. */
  artist?: string;
  /** Short license name, e.g. "CC BY-SA 4.0", from extmetadata if present. */
  license?: string;
  /** Wikipedia file-description page URL. */
  descriptionUrl: string;
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

export class WikipediaApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
  ) {
    super(message);
    this.name = "WikipediaApiError";
  }
}
