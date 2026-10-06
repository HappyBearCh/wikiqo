import Link from "next/link";
import { FEATURED } from "@/lib/featured";
import { articleHref } from "@/lib/links";

/** The shared "Try an article" / "Browse the catalogue" shelf. Renders the
 *  hand-picked FEATURED list as a grid of plain cards. Used on the home page
 *  and the empty search page. */
export default function FeaturedGrid() {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {FEATURED.map(({ title, blurb }) => (
        <li key={title}>
          <Link
            href={articleHref(title)}
            // The mirror is disallowed in robots.txt and canonicals to Wikipedia,
            // so a followed link here only gets the URL reported as "indexed,
            // though blocked by robots.txt" in Search Console.
            rel="nofollow"
            className="card h-full p-5"
          >
            <span className="font-serif text-lg font-semibold leading-snug text-foreground">
              {title}
            </span>
            <span className="mt-1.5 text-sm leading-relaxed text-muted">{blurb}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
