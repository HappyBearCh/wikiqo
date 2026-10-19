import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-border bg-background">
      {/* The brand's rainbow hairline along the very top edge. */}
      <div aria-hidden className="h-1 w-full" style={{ background: "var(--rainbow)" }} />
      <div className="shell flex items-center gap-6 py-3">
        <Link
          href="/"
          className="flex items-center gap-2 font-serif text-xl font-semibold tracking-tight text-foreground"
        >
          <span
            aria-hidden
            className="grid h-8 w-8 place-items-center rounded-lg bg-accent text-sm font-bold text-accent-foreground"
          >
            w
          </span>
          wikiqo
          <span className="hidden font-sans text-sm font-normal text-muted sm:inline">
            Wikipedia citation generator
          </span>
        </Link>
        <nav aria-label="Main" className="ml-auto flex items-center gap-5">
          <Link href="/" className="text-sm font-medium text-foreground hover:text-accent">
            Cite
          </Link>
          <Link href="/about" className="text-sm font-medium text-foreground hover:text-accent">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
