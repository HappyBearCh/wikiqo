import type { ArticleInfo, ParsedLink } from "@/lib/citation";

/**
 * Looks an article up on the MediaWiki Action API, from the reader's browser.
 *
 * `origin=*` makes it an anonymous CORS request, so the site needs no server
 * route: every page stays static and a lookup costs us nothing. Redirects are
 * followed, so "USA" is cited as "United States".
 */

type ApiPage = {
  title: string;
  missing?: boolean;
  invalid?: boolean;
  description?: string;
  revisions?: Array<{ revid: number; timestamp: string }>;
};

type ApiResponse = {
  query?: {
    pages?: ApiPage[];
    badrevids?: Record<string, unknown>;
  };
  error?: { info?: string };
};

export class LookupError extends Error {}

export async function fetchArticleInfo(link: ParsedLink, signal?: AbortSignal): Promise<ArticleInfo> {
  const params = new URLSearchParams({
    action: "query",
    format: "json",
    formatversion: "2",
    origin: "*",
    prop: "revisions|description",
    rvprop: "ids|timestamp",
  });
  // A permanent link pins the revision; otherwise cite the latest one. The API
  // refuses to resolve redirects alongside revids.
  if (link.oldid !== undefined) {
    params.set("revids", String(link.oldid));
  } else {
    params.set("titles", link.title ?? "");
    params.set("redirects", "1");
  }

  let response: Response;
  try {
    response = await fetch(`https://${link.lang}.wikipedia.org/w/api.php?${params}`, { signal });
  } catch (error) {
    if (signal?.aborted) throw error;
    throw new LookupError(`Couldn't reach ${link.lang}.wikipedia.org. Check the link and your connection.`);
  }
  if (!response.ok) {
    throw new LookupError(`Wikipedia answered with an error (${response.status}). Try again in a moment.`);
  }

  const data = (await response.json()) as ApiResponse;
  if (data.error) throw new LookupError(data.error.info ?? "Wikipedia couldn't look that up.");
  if (data.query?.badrevids) throw new LookupError(`Revision ${link.oldid} doesn't exist.`);

  const page = data.query?.pages?.[0];
  const revision = page?.revisions?.[0];
  if (!page || page.invalid) throw new LookupError("That isn't a valid Wikipedia title.");
  if (page.missing || !revision) {
    throw new LookupError(`There's no article called “${page.title}” on ${link.lang}.wikipedia.org.`);
  }

  return {
    lang: link.lang,
    title: page.title,
    revisionId: revision.revid,
    revisionTimestamp: revision.timestamp,
    description: page.description,
  };
}
