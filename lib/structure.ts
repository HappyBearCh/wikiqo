/**
 * Extracts the section outline (heading hierarchy) from a Wikipedia article's
 * sanitized Parsoid HTML, so it can be visualized as an interactive tree.
 *
 * Parsoid renders section headings as `<h2 id="...">`, `<h3 id="...">`, etc.,
 * where the `id` is the in-page anchor (e.g. "Early_development"). Those same
 * ids survive sanitization and end up on the rendered DOM nodes, so the tree's
 * nodes can scroll the reader straight to the matching section.
 */

/** A single heading pulled from the article body. */
export interface FlatHeading {
  /** The heading's anchor id, matching the rendered element's `id`. */
  id: string;
  /** Plain-text heading label (inner markup stripped). */
  text: string;
  /** HTML heading level: 2, 3, or 4. */
  level: number;
}

/** A node in the article's nested section outline. */
export interface HeadingNode {
  id: string;
  text: string;
  /** 1 for the synthetic article-title root, then 2/3/4 for real headings. */
  level: number;
  children: HeadingNode[];
}

/**
 * Pulls level 2–4 headings out of the article HTML in document order.
 * Headings without an `id` or with empty text are skipped, since they can't be
 * linked to and add no structure.
 */
export function extractHeadings(html: string): FlatHeading[] {
  const headings: FlatHeading[] = [];
  // Match an opening h2/h3/h4 tag, capture its attributes and inner content,
  // up to the matching close tag (back-reference \1 keeps the levels aligned).
  const headingRe = /<h([2-4])\b([^>]*)>([\s\S]*?)<\/h\1>/gi;

  let match: RegExpExecArray | null;
  while ((match = headingRe.exec(html)) !== null) {
    const level = Number(match[1]);
    const idMatch = /\bid="([^"]*)"/i.exec(match[2]);
    const id = idMatch?.[1] ?? "";

    // Strip any nested markup (anchor spans, formatting) to get a clean label.
    const text = match[3]
      .replace(/<[^>]+>/g, "")
      .replace(/\s+/g, " ")
      .trim();

    if (!id || !text) continue;
    headings.push({ id, text, level });
  }

  return headings;
}

/**
 * Folds a flat, document-ordered heading list into a nested tree rooted at the
 * article title. Deeper headings attach to the most recent shallower heading;
 * levels that skip a step (e.g. h2 straight to h4) still nest sensibly against
 * whatever is currently on the stack.
 */
export function buildHeadingTree(title: string, headings: FlatHeading[]): HeadingNode {
  const root: HeadingNode = { id: "", text: title, level: 1, children: [] };
  // Stack of open ancestors, shallowest first; root is always the base.
  const stack: HeadingNode[] = [root];

  for (const heading of headings) {
    const node: HeadingNode = { ...heading, children: [] };

    // Pop until the stack's top is a valid (shallower) parent for this heading.
    while (stack.length > 1 && stack[stack.length - 1].level >= heading.level) {
      stack.pop();
    }

    stack[stack.length - 1].children.push(node);
    stack.push(node);
  }

  return root;
}

/** Convenience: parse article HTML straight into a section-outline tree. */
export function parseArticleStructure(title: string, html: string): HeadingNode {
  return buildHeadingTree(title, extractHeadings(html));
}
