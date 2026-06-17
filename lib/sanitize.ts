import "server-only";
import DOMPurify from "isomorphic-dompurify";

/** Converts protocol-relative Wikimedia asset URLs ("//upload...") to https. */
function fixProtocolRelative(value: string): string {
  return value.replace(/(^|,|\s)\/\//g, "$1https://");
}

// Number of rainbow color tokens (--rb-1 … --rb-6) that inline content links
// cycle through, so each consecutive link reads in a different color.
const LINK_COLOR_COUNT = 6;

// Running index over content links within a single sanitize pass. Reset at the
// start of each sanitizeWikiHtml() call (see below). Safe as module state: the
// DOMPurify hook below and DOMPurify.sanitize() both run synchronously, so a
// single pass never interleaves with another request's pass.
let linkColorIndex = 0;

// Registered once per process. Rewrites Parsoid's relative wiki links
// ("./Some_Page") to our own /wiki/[slug] route, points external links to
// open in a new tab, upgrades protocol-relative Wikimedia image URLs, and
// tags each inline content link with a cycling rainbow color class.
DOMPurify.addHook("afterSanitizeAttributes", (node) => {
  if (node.tagName === "A" && node.hasAttribute("href")) {
    const href = node.getAttribute("href") ?? "";
    // Whether this is a prose/content link (a wiki page or external site)
    // rather than an in-page anchor like a "[1]" citation jump (href "#...").
    let isContentLink = false;

    if (href.startsWith("./")) {
      node.setAttribute("href", `/wiki/${href.slice(2)}`);
      isContentLink = true;
    } else if (href.startsWith("//")) {
      const absolute = `https:${href}`;
      node.setAttribute("href", absolute);
      node.setAttribute("target", "_blank");
      node.setAttribute("rel", "noopener noreferrer external");
      isContentLink = true;
    } else if (/^https?:\/\//.test(href)) {
      node.setAttribute("target", "_blank");
      node.setAttribute("rel", "noopener noreferrer external");
      isContentLink = true;
    }

    // DOMPurify visits nodes in document order, so cycling a counter here
    // gives each successive content link the next color in reading order.
    if (isContentLink) {
      const colorClass = `wlink-${(linkColorIndex % LINK_COLOR_COUNT) + 1}`;
      linkColorIndex += 1;
      const existing = node.getAttribute("class");
      node.setAttribute("class", existing ? `${existing} ${colorClass}` : colorClass);
    }
  }

  if (node.tagName === "IMG" || node.tagName === "SOURCE") {
    const src = node.getAttribute("src");
    if (src?.startsWith("//")) node.setAttribute("src", `https:${src}`);

    const srcset = node.getAttribute("srcset");
    if (srcset) node.setAttribute("srcset", fixProtocolRelative(srcset));
  }
});

/**
 * Sanitizes Wikipedia's Parsoid HTML (from the REST `/page/html/{title}`
 * endpoint) before it's rendered with dangerouslySetInnerHTML. Strips
 * scripts, styles, and other active content while preserving the tags
 * Wikipedia articles actually use (tables, infoboxes, MathML, etc).
 */
export function sanitizeWikiHtml(html: string): string {
  // Restart the rainbow cycle for each pass so a document's links always begin
  // at the same color regardless of what was sanitized before it.
  linkColorIndex = 0;
  return DOMPurify.sanitize(html, {
    USE_PROFILES: { html: true, mathMl: true },
    ADD_TAGS: ["figure", "figcaption"],
    ADD_ATTR: ["srcset", "sizes"],
    FORBID_TAGS: ["script", "style", "iframe", "object", "embed", "form", "input", "button", "link", "meta", "base"],
  });
}
