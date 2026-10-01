import type { HeadingNode } from "@/lib/structure";

/**
 * A collapsible "Contents" list for narrow screens.
 *
 * On large screens the sticky sidebar carries the D3 structure map, but the
 * sidebar is hidden below the lg breakpoint, so phone readers had no way to
 * see an article's shape or jump within it. This is the plain equivalent:
 * a native <details>, so it needs no JavaScript and works before hydration.
 *
 * Two levels deep, like the map. Anchors match the heading ids that both the
 * sanitized Wikipedia HTML and the hand-written wikiqorgi HTML carry.
 */
export default function MobileContents({ root }: { root: HeadingNode }) {
  if (root.children.length === 0) return null;

  return (
    <details className="group mb-8 overflow-hidden rounded-2xl border border-border bg-surface lg:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-3.5 font-serif text-base font-semibold text-foreground [&::-webkit-details-marker]:hidden">
        Contents
        <span className="font-sans text-xs font-normal text-muted">
          {root.children.length} sections
          <span
            aria-hidden
            className="ml-2 inline-block transition-transform duration-200 group-open:rotate-180"
          >
            ▾
          </span>
        </span>
      </summary>
      <ol className="border-t border-border px-5 py-3 text-sm">
        {root.children.map((section) => (
          <li key={section.id} className="py-1">
            <a href={`#${section.id}`} className="text-foreground hover:text-accent">
              {section.text}
            </a>
            {section.children.length > 0 && (
              <ol className="mt-1 ml-4 border-l border-border pl-3">
                {section.children.map((sub) => (
                  <li key={sub.id} className="py-0.5">
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
    </details>
  );
}
