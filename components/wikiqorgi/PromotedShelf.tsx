import Link from "next/link";
import { rewrittenHref, sectionHref } from "@/content/wikiqorgi";
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
  now,
}: {
  count?: number;
  /** Injected by the page so the render is deterministic and testable. */
  now?: Date;
}) {
  const promoted = latestPromoted(count, now);

  // Before the first promotion date there is nothing to show. Render nothing
  // rather than an empty grid with a heading over it.
  if (promoted.length === 0) return null;

  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {promoted.map(({ article, section }) => (
        <li key={article.slug}>
          <Link
            href={rewrittenHref(article.slug)}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
          >
            {/* Color wash that blooms in on hover. */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10"
              style={{ background: section.hue }}
            />
            <span
              aria-hidden
              className="h-1.5 w-10 rounded-full transition-all duration-300 group-hover:w-16"
              style={{ background: section.hue }}
            />
            <span className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted">
              {section.title}
            </span>
            <span className="mt-2 font-serif text-lg font-semibold leading-snug tracking-tight text-foreground">
              {article.title}
            </span>
            <span className="mt-2 text-sm leading-relaxed text-muted">{article.dek}</span>
            <span className="mt-auto pt-4 text-xs text-muted">
              {article.readingMinutes} min read · rewritten from {article.sourceTitle}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** The section links the promoted cards came from, for the "browse it all" row. */
export function PromotedShelfFooter({ now }: { now?: Date }) {
  const promoted = latestPromoted(4, now);
  if (promoted.length === 0) return null;

  const sections = [...new Set(promoted.map(({ section }) => section))];

  return (
    <p className="mt-6 text-center text-sm text-muted">
      From{" "}
      {sections.map((section, index) => (
        <span key={section.id}>
          {index > 0 && (index === sections.length - 1 ? " and " : ", ")}
          <Link href={sectionHref(section.id)} className="underline hover:text-foreground">
            {section.title}
          </Link>
        </span>
      ))}
      .{" "}
      <Link href="/wikiqorgi" className="underline hover:text-foreground">
        Browse the whole shelf
      </Link>
      .
    </p>
  );
}
