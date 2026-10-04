import type { HeadingNode } from "@/lib/structure";

/**
 * An article's section list, in two forms:
 *
 * - "sidebar": a plain "On this page" list for the sticky desktop sidebar.
 * - "collapsible": a native <details> above the article on narrow screens,
 *   where there is no sidebar.
 *
 * Plain links to the heading ids that both the sanitized Wikipedia HTML and
 * the hand-written wikiqorgi HTML carry, so it works without JavaScript.
 * Two levels deep: sections and their subsections.
 */
export default function TableOfContents({
  root,
  variant,
}: {
  root: HeadingNode;
  variant: "sidebar" | "collapsible";
}) {
  if (root.children.length === 0) return null;

  const list = (
    <ol className="space-y-1.5 text-sm leading-snug">
      {root.children.map((section) => (
        <li key={section.id}>
          <a href={`#${section.id}`} className="text-foreground hover:text-accent">
            {section.text}
          </a>
          {section.children.length > 0 && (
            <ol className="mt-1.5 space-y-1.5 border-l border-border pl-3">
              {section.children.map((sub) => (
                <li key={sub.id}>
                  <a href={`#${sub.id}`} className="text-muted hover:text-accent">
                    {sub.text}
                  </a>
                </li>
              ))}
            </ol>
          )}
        </li>
      ))}
    </ol>
  );

  if (variant === "sidebar") {
    return (
      <nav aria-labelledby="toc-heading">
        <h2 id="toc-heading" className="eyebrow mb-3">
          On this page
        </h2>
        {list}
      </nav>
    );
  }

  return (
    <details className="group mb-8 rounded-xl border border-border lg:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-semibold [&::-webkit-details-marker]:hidden">
        On this page
        <span aria-hidden className="text-muted transition-transform group-open:rotate-180">
          ▾
        </span>
      </summary>
      <div className="border-t border-border px-4 py-3">{list}</div>
    </details>
  );
}
