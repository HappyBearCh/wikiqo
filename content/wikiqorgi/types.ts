/**
 * Shapes for the wikiqorgi shelf — Wikipedia subjects re-reported and rewritten
 * from scratch in wikiqo's own voice.
 *
 * Nothing here is fetched, cached, or stored: every article is a hand-authored
 * module compiled into the bundle, so `/wikiqorgi/*` prerenders to plain static
 * HTML at build time.
 */

/** One rewritten article, authored in full rather than mirrored. */
export interface RewrittenArticle {
  /** URL segment under /wikiqorgi/. */
  slug: string;
  /** Our headline. Deliberately not the Wikipedia title. */
  title: string;
  /** The Wikipedia article this one covers, for the source credit. */
  sourceTitle: string;
  /** One-line summary used on the section cards. */
  dek: string;
  /** Opening standfirst shown above the body. */
  standfirst: string;
  /** Rough reading time in minutes, shown on the card and the article header. */
  readingMinutes: number;
  /**
   * The day the article was first published on the site, as an ISO date
   * (YYYY-MM-DD). Taken from the commit that added the file. This is not the
   * front-page promotion date — see ./schedule.ts for that — and it feeds
   * `datePublished` in the article's JSON-LD, so it must stay truthful.
   */
  published: string;
  /**
   * The article body as static HTML. Every `<h2>` carries an `id` so the
   * section-outline map (see lib/structure.ts) can link into it, exactly as it
   * does for mirrored Wikipedia articles.
   */
  html: string;
}

/** One entry in an article's "Sources" list. See ./sources.ts. */
export interface Source {
  /** Author(s) or issuing body, as they would appear in a citation. */
  author: string;
  /** Title of the book, paper or report. */
  title: string;
  /** Year of first publication. */
  year: number;
  /** Journal, publisher or series, where it helps identify the work. */
  publication?: string;
}

/** A themed shelf on the wikiqorgi index page. */
export interface WikiqorgiSection {
  /** Anchor id for the section heading. */
  id: string;
  title: string;
  blurb: string;
  /** One stripe of the shared pride spectrum (see globals.css --rb-*). */
  hue: string;
  articles: RewrittenArticle[];
}
