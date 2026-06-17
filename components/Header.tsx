import Link from "next/link";
import SearchBar from "@/components/SearchBar";

export default function Header() {
  return (
    <header className="glass sticky top-0 z-30 border-b border-border">
      {/* Rainbow hairline along the very top edge. */}
      <div className="h-1 w-full" style={{ background: "var(--rainbow)" }} />
      <div className="shell flex flex-wrap items-center gap-x-6 gap-y-3 py-3">
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-serif text-xl font-semibold tracking-tight text-foreground"
        >
          <span
            className="grid h-9 w-9 place-items-center rounded-xl text-sm font-bold text-white shadow-glow transition-transform group-hover:scale-110 group-hover:rotate-6"
            style={{ background: "var(--library-blue)", backgroundSize: "200% auto" }}
          >
            w
          </span>
          <span className="text-library-blue">wikiqo</span>
        </Link>
        <div className="ml-auto w-full sm:ml-0 sm:w-auto sm:flex-1">
          <SearchBar />
        </div>
        <Link
          href="/about"
          className="text-sm font-semibold text-muted transition-colors hover:text-accent"
        >
          About
        </Link>
      </div>
    </header>
  );
}
