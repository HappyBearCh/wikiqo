import Link from "next/link";
import { rewrittenHref } from "@/content/wikiqorgi";
import { latestPromoted } from "@/content/wikiqorgi/schedule";

/**
 * The rotating wikiqorgi shelf on the home page.
 *
 * Shows the most recently promoted originals rather than the whole shelf — see
 * content/wikiqorgi/schedule.ts for why the release is staggered. The cards
 * deliberately echo FeaturedGrid's shape so the two shelves read as one site,
 * but carry a section label and a reading time, because these are wikiqo's own
 * writing rather than a jumping-off point into Wikipedia.
 */
export default function PromotedShelf({
  count = 4,
  offset = 0,
  now,
}: {
  count?: number;
  /** Skip this many of the newest — the home page shows the newest one on its
   *  own, above the shelf. */
  offset?: number;
  /** Injected by the page so the render is deterministic and testable. */
  now?: Date;
}) {
  const promoted = latestPromoted(offset + count, now).slice(offset);

  // Before the first promotion date there is nothing to show. Render nothing
  // rather than an empty grid with a heading over it.
  if (promoted.length === 0) return null;

  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {promoted.map(({ article, section }) => (
        <li key={article.slug}>
          <Link href={rewrittenHref(article.slug)} className="card h-full p-5">
            <span className="flex items-center gap-2 text-xs text-muted">
              <span
                aria-hidden
                className="h-2 w-2 shrink-0 rounded-full"
                style={{ background: section.hue }}
              />
              {section.title}
            </span>
            <span className="mt-2 font-serif text-lg font-semibold leading-snug text-foreground">
              {article.title}
            </span>
            <span className="mt-2 text-sm leading-relaxed text-muted">{article.dek}</span>
            <span className="mt-auto pt-4 text-xs text-muted">
              {article.readingMinutes} min read
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
