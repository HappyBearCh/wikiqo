import Link from "next/link";
import { FEATURED } from "@/lib/featured";
import { articleHref } from "@/lib/links";

/** The shared "Try an article" / "Browse the catalogue" shelf. Renders the
 *  hand-picked FEATURED list as a grid of cards, each washed in its own stripe
 *  of the rainbow on hover. Used on the home page and the empty search page. */
export default function FeaturedGrid() {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {FEATURED.map(({ title, blurb, hue }) => (
        <li key={title}>
          <Link
            href={articleHref(title)}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
          >
            {/* Color wash that blooms in on hover. */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10"
              style={{ background: hue }}
            />
            <span
              aria-hidden
              className="h-1.5 w-10 rounded-full transition-all duration-300 group-hover:w-16"
              style={{ background: hue }}
            />
            <span className="mt-4 font-serif text-lg font-semibold tracking-tight text-foreground">
              {title}
            </span>
            <span className="mt-2 text-sm leading-relaxed text-muted">{blurb}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
