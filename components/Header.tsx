import Link from "next/link";
import SearchBar from "@/components/SearchBar";

/**
 * Site header. On phones it is two short rows — logo and links, then search —
 * and scrolls away with the page, so it doesn't permanently take a fifth of a
 * small screen. From the md breakpoint up it is a single row that stays at
 * the top while reading.
 */
export default function Header() {
  return (
    <header className="z-30 border-b border-border bg-background/95 backdrop-blur md:sticky md:top-0">
      {/* The brand's rainbow hairline along the very top edge. */}
      <div aria-hidden className="h-1 w-full" style={{ background: "var(--rainbow)" }} />
      <div className="shell flex flex-wrap items-center gap-x-6 gap-y-3 py-3">
        <Link
          href="/"
          className="order-1 flex items-center gap-2 font-serif text-xl font-semibold tracking-tight text-foreground"
        >
          <span
            aria-hidden
            className="grid h-8 w-8 place-items-center rounded-lg bg-accent text-sm font-bold text-accent-foreground"
          >
            w
          </span>
          wikiqo
        </Link>
        <nav aria-label="Main" className="order-2 ml-auto flex items-center gap-5 md:order-3 md:ml-0">
          <Link href="/wikiqorgi" className="text-sm font-medium text-foreground hover:text-accent">
            Articles
          </Link>
          <Link href="/about" className="text-sm font-medium text-foreground hover:text-accent">
            About
          </Link>
        </nav>
        <div className="order-3 w-full md:order-2 md:mx-auto md:w-auto md:max-w-xl md:flex-1">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}
