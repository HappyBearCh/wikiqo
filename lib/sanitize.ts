import "server-only";
import sanitizeHtml from "sanitize-html";

// We sanitize with sanitize-html (a parser-based, pure-JS sanitizer) rather than
// DOMPurify. DOMPurify needs a server DOM, and the only backend that sanitizes
// correctly is jsdom — which pulls an ESM-only transitive dependency that the
// bundled serverless runtime can't require() (ERR_REQUIRE_ESM), crashing every
// article/search page in production. sanitize-html needs no DOM at all.

/** Converts protocol-relative Wikimedia asset URLs ("//upload...") to https. */
function fixProtocolRelative(value: string): string {
  return value.replace(/(^|,|\s)\/\//g, "$1https://");
}

// Number of rainbow color tokens (--rb-1 … --rb-6) that inline content links
// cycle through, so each consecutive link reads in a different color.
const LINK_COLOR_COUNT = 6;

// Running index over content links within a single sanitize pass. Reset at the
// start of each sanitizeWikiHtml() call (see below). Safe as module state:
// sanitize-html processes a document synchronously and in document order, so a
// single pass never interleaves with another request's pass.
let linkColorIndex = 0;

// MathML elements, preserved so formula markup from Parsoid survives. Mirrors
// the set DOMPurify's `mathMl` profile allowed.
const MATHML_TAGS = [
  "math", "maction", "annotation", "annotation-xml", "menclose", "merror",
  "mfenced", "mfrac", "mi", "mmultiscripts", "mn", "mo", "mover", "mpadded",
  "mphantom", "mprescripts", "mroot", "mrow", "ms", "semantics", "mspace",
  "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext",
  "mtr", "munder", "munderover", "none",
];

// The HTML tags Wikipedia articles actually use. Anything not listed (script,
// style, iframe, object, embed, form controls, link, meta, base, …) is dropped.
const ALLOWED_TAGS = [
  "div", "span", "p", "section", "article", "header", "footer", "aside", "nav",
  "details", "summary", "h1", "h2", "h3", "h4", "h5", "h6",
  "a", "b", "i", "em", "strong", "small", "s", "u", "del", "ins", "mark", "sub",
  "sup", "abbr", "cite", "q", "blockquote", "code", "pre", "kbd", "samp", "var",
  "time", "data", "bdi", "bdo", "wbr", "br", "hr", "ruby", "rt", "rp",
  "ul", "ol", "li", "dl", "dt", "dd",
  "table", "caption", "colgroup", "col", "thead", "tbody", "tfoot", "tr", "td", "th",
  "figure", "figcaption", "img", "picture", "source", "audio", "video", "track",
  "map", "area",
  ...MATHML_TAGS,
];

// Safe attributes permitted on every tag. Crucially this list never contains
// any `on*` event handler, so sanitize-html strips inline JS by construction.
// Inline `style` and `class` are kept for Wikipedia's infobox/table styling;
// `data-*`/`aria-*` globs preserve Parsoid metadata and accessibility hooks.
const COMMON_ATTRS = [
  "id", "class", "style", "title", "lang", "dir", "role", "translate",
  "data-*", "aria-*",
  // tables
  "colspan", "rowspan", "headers", "scope", "span", "abbr",
  // lists
  "start", "reversed", "value", "type",
  // MathML presentation attributes
  "display", "displaystyle", "scriptlevel", "mathvariant", "mathcolor",
  "mathbackground", "xmlns", "alttext", "width", "height", "depth",
  "linethickness", "fence", "separator", "stretchy", "symmetric", "accent",
  "accentunder", "columnalign", "rowalign", "columnlines", "rowlines",
  "columnspacing", "rowspacing", "open", "close", "notation", "align",
];

/**
 * Rewrites links during sanitization: Parsoid's relative wiki links ("./Some_Page")
 * become our own /wiki/[slug] route; external and protocol-relative links open in
 * a new tab; and each inline content link gets a cycling rainbow color class.
 */
function transformAnchor(tagName: string, attribs: sanitizeHtml.Attributes) {
  const href = attribs.href ?? "";
  // Whether this is a prose/content link (a wiki page or external site) rather
  // than an in-page anchor like a "[1]" citation jump (href "#...").
  let isContentLink = false;

  if (href.startsWith("./")) {
    attribs.href = `/wiki/${href.slice(2)}`;
    // nofollow on internal article links: every article is a non-canonical
    // mirror (canonical points at Wikipedia), so there's no SEO value in
    // crawlers traversing the ~7M-page Wikipedia link graph through us — only
    // cost (each unique slug is a cold function invocation). nofollow stops
    // compliant crawlers from walking the graph; only the curated sitemap set
    // is meant to be crawled.
    attribs.rel = "nofollow";
    isContentLink = true;
  } else if (href.startsWith("//")) {
    attribs.href = `https:${href}`;
    attribs.target = "_blank";
    attribs.rel = "noopener noreferrer external";
    isContentLink = true;
  } else if (/^https?:\/\//.test(href)) {
    attribs.target = "_blank";
    attribs.rel = "noopener noreferrer external";
    isContentLink = true;
  }

  // sanitize-html visits tags in document order, so cycling a counter here gives
  // each successive content link the next color in reading order.
  if (isContentLink) {
    const colorClass = `wlink-${(linkColorIndex % LINK_COLOR_COUNT) + 1}`;
    linkColorIndex += 1;
    attribs.class = attribs.class ? `${attribs.class} ${colorClass}` : colorClass;
  }

  return { tagName, attribs };
}

/** Upgrades protocol-relative Wikimedia media URLs ("//upload…") to https. */
function transformMedia(tagName: string, attribs: sanitizeHtml.Attributes) {
  if (attribs.src?.startsWith("//")) attribs.src = `https:${attribs.src}`;
  if (attribs.srcset) attribs.srcset = fixProtocolRelative(attribs.srcset);
  return { tagName, attribs };
}

const OPTIONS: sanitizeHtml.IOptions = {
  allowedTags: ALLOWED_TAGS,
  allowedAttributes: {
    "*": COMMON_ATTRS,
    a: [...COMMON_ATTRS, "href", "target", "rel", "name"],
    img: [...COMMON_ATTRS, "src", "srcset", "sizes", "alt", "loading", "decoding"],
    source: [...COMMON_ATTRS, "src", "srcset", "sizes", "media"],
    audio: [...COMMON_ATTRS, "src", "controls", "preload", "loop", "muted"],
    video: [...COMMON_ATTRS, "src", "controls", "preload", "poster", "loop", "muted", "playsinline"],
    track: [...COMMON_ATTRS, "src", "kind", "srclang", "label", "default"],
  },
  // Relative ("/wiki/…") and fragment ("#cite_note…") hrefs carry no scheme and
  // are allowed; only these explicit schemes pass for absolute URLs.
  allowedSchemes: ["http", "https", "mailto", "tel"],
  transformTags: {
    a: transformAnchor,
    img: transformMedia,
    source: transformMedia,
  },
};

/**
 * Sanitizes Wikipedia's Parsoid HTML (from the REST `/page/html/{title}`
 * endpoint) before it's rendered with dangerouslySetInnerHTML. Strips scripts,
 * styles, event handlers, and other active content while preserving the tags
 * Wikipedia articles actually use (tables, infoboxes, MathML, etc).
 */
export function sanitizeWikiHtml(html: string): string {
  // Restart the rainbow cycle for each pass so a document's links always begin
  // at the same color regardless of what was sanitized before it.
  linkColorIndex = 0;
  return sanitizeHtml(html, OPTIONS);
}
