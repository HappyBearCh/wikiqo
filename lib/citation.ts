/**
 * Parsing Wikipedia links and formatting citations for them.
 *
 * Everything here is pure, so it runs in the browser and in tests alike. The
 * network lookup lives in lib/wikipedia-api.ts.
 */

/** What a pasted link (or bare title) tells us before asking Wikipedia. */
export type ParsedLink = {
  /** Language subdomain, e.g. "en", "de", "zh-yue". */
  lang: string;
  /** Article title with spaces, or undefined when only a revision id was given. */
  title?: string;
  /** A specific revision, when the link was a permanent link. */
  oldid?: number;
};

/** The facts every citation is built from, as returned by the API. */
export type ArticleInfo = {
  lang: string;
  title: string;
  /** The revision being cited. */
  revisionId: number;
  /** When that revision was saved (ISO 8601, UTC). */
  revisionTimestamp: string;
  /** Short description from Wikidata, when the article has one. */
  description?: string;
};

export type CitationOptions = {
  /** Cite the exact revision's permanent link instead of the live article. */
  permalink: boolean;
  /** The day the reader looked at the article. */
  accessed: Date;
};

const HOST_RE = /^([a-z][a-z0-9-]*)\.(?:m\.)?wikipedia\.org$/i;

/**
 * Reads a Wikipedia link into language, title and revision. Accepts the forms
 * people actually paste: desktop and mobile hosts, /wiki/Title, index.php with
 * title= and/or oldid=, percent-encoded or not, with or without a #section, and
 * a bare title (treated as English Wikipedia).
 *
 * Returns null for anything that isn't a Wikipedia article link.
 */
export function parseWikipediaLink(input: string): ParsedLink | null {
  const raw = input.trim();
  if (!raw) return null;

  const looksLikeUrl = /^(https?:\/\/|[a-z][a-z0-9-]*\.(m\.)?wikipedia\.org\/)/i.test(raw);
  if (!looksLikeUrl) {
    return { lang: "en", title: normaliseTitle(raw) };
  }

  let url: URL;
  try {
    url = new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`);
  } catch {
    return null;
  }

  const host = url.hostname.match(HOST_RE);
  if (!host) return null;
  const lang = host[1].toLowerCase();
  if (lang === "www") return null;

  const oldidParam = url.searchParams.get("oldid");
  const oldid = oldidParam && /^\d+$/.test(oldidParam) ? Number(oldidParam) : undefined;

  let title: string | undefined;
  const wikiPath = url.pathname.match(/^\/wiki\/(.+)$/);
  if (wikiPath) {
    title = safeDecode(wikiPath[1]);
  } else if (url.searchParams.get("title")) {
    title = url.searchParams.get("title")!;
  }

  if (title) title = normaliseTitle(title);
  if (!title && oldid === undefined) return null;
  return { lang, title: title || undefined, oldid };
}

function safeDecode(s: string): string {
  try {
    return decodeURIComponent(s);
  } catch {
    return s;
  }
}

function normaliseTitle(title: string): string {
  return title.replace(/_/g, " ").replace(/\s+/g, " ").trim();
}

/** The article's encoded path segment: spaces become underscores. */
function titleSlug(title: string): string {
  return encodeURIComponent(title.replace(/ /g, "_"))
    .replace(/%2F/g, "/")
    .replace(/%3A/g, ":")
    .replace(/%2C/g, ",")
    .replace(/%28/g, "(")
    .replace(/%29/g, ")");
}

export function articleUrl(info: Pick<ArticleInfo, "lang" | "title">): string {
  return `https://${info.lang}.wikipedia.org/wiki/${titleSlug(info.title)}`;
}

export function permanentUrl(info: Pick<ArticleInfo, "lang" | "title" | "revisionId">): string {
  return `https://${info.lang}.wikipedia.org/w/index.php?title=${titleSlug(info.title)}&oldid=${info.revisionId}`;
}

// ---- Dates ------------------------------------------------------------------

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
// MLA abbreviates months longer than four letters; June and July stay whole.
// The Bluebook's table T12 abbreviates them the same way.
const MLA_MONTHS = [
  "Jan.", "Feb.", "Mar.", "Apr.", "May", "June",
  "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec.",
];
const SHORT_MONTHS = MONTHS.map((m) => m.slice(0, 3));
// IEEE abbreviates to three letters with a period, except May.
const IEEE_MONTHS = [
  "Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.",
  "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec.",
];

type Ymd = { y: number; m: number; d: number };

/** Revision timestamps are UTC; the access date is the reader's own calendar day. */
function utcParts(iso: string): Ymd {
  const date = new Date(iso);
  return { y: date.getUTCFullYear(), m: date.getUTCMonth(), d: date.getUTCDate() };
}

function localParts(date: Date): Ymd {
  return { y: date.getFullYear(), m: date.getMonth(), d: date.getDate() };
}

const pad = (n: number) => String(n).padStart(2, "0");
const utcTime = (iso: string) => {
  const date = new Date(iso);
  return `${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}`;
};

// ---- Formats ----------------------------------------------------------------

/**
 * A formatted citation. `html` carries the italics the style calls for and is
 * what gets rendered and copied as rich text; `text` is the plain fallback.
 */
export type Citation = {
  id: string;
  label: string;
  /** Short note on the edition of the style being followed. */
  edition?: string;
  html: string;
  text: string;
  /** In-text or parenthetical form, where the style has one. */
  inText?: string;
  /** What to call inText when it isn't an in-text citation, e.g. "Footnote". */
  inTextLabel?: string;
  /** Code formats are shown monospaced and copied as plain text only. */
  code?: boolean;
};

export function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/** A run of citation text; `{ i }` marks one the style sets in italics. */
type Part = string | { i: string };

function cite(...parts: Part[]): { html: string; text: string } {
  return {
    html: parts.map((p) => (typeof p === "string" ? escapeHtml(p) : `<i>${escapeHtml(p.i)}</i>`)).join(""),
    text: parts.map((p) => (typeof p === "string" ? p : p.i)).join(""),
  };
}

/** Titles end in their own punctuation sometimes ("Who Framed Roger Rabbit?"). */
const endsInPunctuation = (s: string) => /[.?!]$/.test(s);
const withPeriod = (s: string) => (endsInPunctuation(s) ? s : `${s}.`);
const withComma = (s: string) => (endsInPunctuation(s) ? s : `${s},`);

function bibtexKey(title: string, y: number): string {
  const ascii = title
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^A-Za-z0-9]+/g, "_")
    .replace(/^_|_$/g, "")
    .toLowerCase();
  return `wiki:${ascii || "article"}_${y}`;
}

const bibtexEscape = (s: string) => s.replace(/([{}%&$#_])/g, "\\$1");

export function buildCitations(info: ArticleInfo, options: CitationOptions): Citation[] {
  const url = options.permalink ? permanentUrl(info) : articleUrl(info);
  const title = info.title;
  const rev = utcParts(info.revisionTimestamp);
  const acc = localParts(options.accessed);
  const revTime = utcTime(info.revisionTimestamp);

  const citations: Citation[] = [];

  // APA 7: title in the author position, the revision date, "In Wikipedia",
  // and the permanent link. APA drops the retrieval date when the URL is an
  // archived version, and asks for it when the page is designed to change.
  {
    const date = `${rev.y}, ${MONTHS[rev.m]} ${rev.d}`;
    const retrieved = options.permalink
      ? ""
      : ` Retrieved ${MONTHS[acc.m]} ${acc.d}, ${acc.y}, from`;
    citations.push({
      id: "apa",
      label: "APA",
      edition: "7th edition",
      ...cite(`${withPeriod(title)} (${date}). In `, { i: "Wikipedia" }, `.${retrieved} ${url}`),
      inText: `(“${title},” ${rev.y})`,
    });
  }

  // MLA 9.
  {
    const date = `${rev.d} ${MLA_MONTHS[rev.m]} ${rev.y}`;
    const accessed = `${acc.d} ${MLA_MONTHS[acc.m]} ${acc.y}`;
    const bareUrl = url.replace(/^https?:\/\//, "");
    citations.push({
      id: "mla",
      label: "MLA",
      edition: "9th edition",
      ...cite(`“${withPeriod(title)}” `, { i: "Wikipedia" }, `, Wikimedia Foundation, ${date}, ${bareUrl}. Accessed ${accessed}.`),
      inText: `(“${title}”)`,
    });
  }

  // Chicago 18 (14.131). Online encyclopedias are cited in notes rather than
  // the bibliography, under the entry title, with the revision's date and
  // time standing in for an access date. The 18th edition dropped "s.v.".
  {
    const modified = `${MONTHS[rev.m]} ${rev.d}, ${rev.y}, ${revTime} (UTC)`;
    citations.push({
      id: "chicago",
      label: "Chicago",
      edition: "18th ed., note",
      ...cite(`Wikipedia, “${withComma(title)}” last modified ${modified}, ${url}.`),
      inTextLabel: "Short note",
      inText: `Wikipedia, “${withPeriod(title)}”`,
    });
  }

  // Chicago author-date, with Wikipedia in the author position as in the note.
  {
    const modified = `${MONTHS[rev.m]} ${rev.d}, ${rev.y}, ${revTime} (UTC)`;
    citations.push({
      id: "chicago-ad",
      label: "Chicago author-date",
      edition: "18th edition",
      ...cite(`Wikipedia. ${rev.y}. “${withPeriod(title)}” Last modified ${modified}. ${url}.`),
      inText: `(Wikipedia ${rev.y})`,
    });
  }

  // Harvard (Cite Them Right).
  {
    const accessed = `${acc.d} ${MONTHS[acc.m]} ${acc.y}`;
    citations.push({
      id: "harvard",
      label: "Harvard",
      edition: "Cite Them Right",
      ...cite(
        `Wikipedia contributors (${rev.y}) ‘${title}’, `,
        { i: "Wikipedia, The Free Encyclopedia" },
        `. Available at: ${url} (Accessed: ${accessed}).`,
      ),
      inText: `(Wikipedia contributors, ${rev.y})`,
    });
  }

  // ASA 7: Chicago author-date in outline, but the retrieval date stays and
  // the URL goes in parentheses after it.
  {
    const accessed = `${MONTHS[acc.m]} ${acc.d}, ${acc.y}`;
    citations.push({
      id: "asa",
      label: "ASA",
      edition: "7th edition",
      ...cite(
        `Wikipedia contributors. ${rev.y}. “${withPeriod(title)}” `,
        { i: "Wikipedia, The Free Encyclopedia" },
        `. Retrieved ${accessed} (${url}).`,
      ),
      inText: `(Wikipedia contributors ${rev.y})`,
    });
  }

  // IEEE.
  {
    const accessed = `${IEEE_MONTHS[acc.m]} ${acc.d}, ${acc.y}`;
    const date = `${IEEE_MONTHS[rev.m]} ${rev.d}, ${rev.y}`;
    citations.push({
      id: "ieee",
      label: "IEEE",
      ...cite(
        `[1] “${withComma(title)}” `,
        { i: "Wikipedia, The Free Encyclopedia" },
        `, ${date}. Accessed: ${accessed}. [Online]. Available: ${url}`,
      ),
      inText: "[1]",
    });
  }

  // ACS (Guide to Scholarly Communication): wikis always get an ISO access date.
  {
    const date = `${MONTHS[rev.m]} ${rev.d}, ${rev.y}`;
    const accessed = `${acc.y}-${pad(acc.m + 1)}-${pad(acc.d)}`;
    citations.push({
      id: "acs",
      label: "ACS",
      ...cite(`(1) ${withPeriod(title)} `, { i: "Wikipedia" }, `, ${date}. ${url} (accessed ${accessed}).`),
      inText: "¹",
    });
  }

  // AMA 11.
  {
    const updated = `${MONTHS[rev.m]} ${rev.d}, ${rev.y}`;
    const accessed = `${MONTHS[acc.m]} ${acc.d}, ${acc.y}`;
    citations.push({
      id: "ama",
      label: "AMA",
      edition: "11th edition",
      ...cite(`${withPeriod(title)} `, { i: "Wikipedia" }, `. Updated ${updated}. Accessed ${accessed}. ${url}`),
      inText: "¹",
    });
  }

  // Vancouver (NLM).
  {
    const date = `${rev.y} ${SHORT_MONTHS[rev.m]} ${rev.d}, ${revTime} UTC`;
    const cited = `${acc.y} ${SHORT_MONTHS[acc.m]} ${acc.d}`;
    citations.push({
      id: "vancouver",
      label: "Vancouver",
      ...cite(`Wikipedia contributors. ${title} [Internet]. Wikipedia, The Free Encyclopedia; ${date} [cited ${cited}]. Available from: ${url}`),
      inText: "(1)",
    });
  }

  // CSE 9, citation-sequence. The revision date is the page's "updated" date;
  // the access date is only needed when the link can still change.
  {
    const updated = `${rev.y} ${SHORT_MONTHS[rev.m]} ${rev.d}`;
    const accessed = options.permalink ? "" : `; accessed ${acc.y} ${SHORT_MONTHS[acc.m]} ${acc.d}`;
    citations.push({
      id: "cse",
      label: "CSE",
      edition: "9th ed., citation-sequence",
      ...cite(`1. ${withPeriod(title)} Wikipedia, The Free Encyclopedia; [updated ${updated}${accessed}]. ${url}`),
      inText: "¹",
    });
  }

  // ISO 690:2021, the international standard most of Europe's styles derive from.
  {
    const date = `${rev.d} ${MONTHS[rev.m]} ${rev.y}`;
    const viewed = `${acc.d} ${MONTHS[acc.m]} ${acc.y}`;
    citations.push({
      id: "iso690",
      label: "ISO 690",
      edition: "2021",
      ...cite(
        `${withPeriod(title)} In: `,
        { i: "Wikipedia, The Free Encyclopedia" },
        ` [online]. Wikimedia Foundation, ${date} [viewed ${viewed}]. Available from: ${url}`,
      ),
    });
  }

  // OSCOLA 5 footnote. A persistent link (the oldid permalink) needs no access date.
  {
    const date = `${rev.d} ${MONTHS[rev.m]} ${rev.y}`;
    const accessed = options.permalink ? "" : ` accessed ${acc.d} ${MONTHS[acc.m]} ${acc.y}`;
    citations.push({
      id: "oscola",
      label: "OSCOLA",
      edition: "5th edition, footnote",
      ...cite(`‘${title}’ (`, { i: "Wikipedia" }, `, ${date}) <${url}>${accessed}.`),
    });
  }

  // Bluebook 22, Bluepages form. A revision has a date and time of its own;
  // the live article only has the day it was last visited.
  {
    const parts: Part[] = options.permalink
      ? [{ i: title }, `, Wikipedia (${MLA_MONTHS[rev.m]} ${rev.d}, ${rev.y}, ${revTime} UTC), ${url}.`]
      : [{ i: title }, `, Wikipedia, ${url} (last visited ${MLA_MONTHS[acc.m]} ${acc.d}, ${acc.y}).`];
    citations.push({
      id: "bluebook",
      label: "Bluebook",
      edition: "22nd ed., Bluepages",
      ...cite(...parts),
    });
  }

  // {{cite web}}, for citing one Wikipedia article from another wiki page.
  {
    const date = `${rev.y}-${pad(rev.m + 1)}-${pad(rev.d)}`;
    const accessed = `${acc.y}-${pad(acc.m + 1)}-${pad(acc.d)}`;
    const text = `{{cite web |title=${title.replace(/\|/g, "{{!}}")} |url=${url} |website=Wikipedia |publisher=Wikimedia Foundation |date=${date} |access-date=${accessed}${info.lang === "en" ? "" : ` |language=${info.lang}`}}}`;
    citations.push({ id: "wikitext", label: "Wiki markup", edition: "{{cite web}}", html: escapeHtml(text), text, code: true });
  }

  // BibTeX, in the shape Special:CiteThisPage gives, which LaTeX users expect.
  {
    const accessed = `${acc.d}-${MONTHS[acc.m]}-${acc.y}`;
    const text = [
      `@misc{${bibtexKey(title, rev.y)},`,
      `  author = "{Wikipedia contributors}",`,
      `  title = "${bibtexEscape(title)} --- {W}ikipedia{,} The Free Encyclopedia",`,
      `  year = "${rev.y}",`,
      `  url = "${url}",`,
      `  note = "[Online; accessed ${accessed}]"`,
      `}`,
    ].join("\n");
    citations.push({ id: "bibtex", label: "BibTeX", html: escapeHtml(text), text, code: true });
  }

  // RIS, for Zotero, Mendeley, EndNote and the like.
  {
    const text = [
      "TY  - ELEC",
      `TI  - ${title}`,
      "AU  - Wikipedia contributors",
      "T2  - Wikipedia, The Free Encyclopedia",
      "PB  - Wikimedia Foundation",
      `PY  - ${rev.y}`,
      `DA  - ${rev.y}/${pad(rev.m + 1)}/${pad(rev.d)}`,
      `Y2  - ${acc.y}/${pad(acc.m + 1)}/${pad(acc.d)}`,
      `LA  - ${info.lang}`,
      `UR  - ${url}`,
      "ER  - ",
    ].join("\n");
    citations.push({ id: "ris", label: "RIS", html: escapeHtml(text), text, code: true });
  }

  return citations;
}
