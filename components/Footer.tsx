import Link from "next/link";
import { CookieSettingsButton } from "@/components/AnalyticsConsent";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-surface">
      <div className="shell flex flex-col gap-4 py-8 text-sm text-muted sm:flex-row sm:items-start sm:justify-between">
        <p className="max-w-2xl">
          wikiqo builds citations from article details published by the{" "}
          <a
            href="https://www.mediawiki.org/wiki/API:Main_page"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            MediaWiki API
          </a>
          . It is not affiliated with the Wikimedia Foundation. Always check a
          citation against your style guide before you submit.
        </p>
        <nav aria-label="Footer" className="flex shrink-0 flex-wrap gap-x-5 gap-y-2">
          <Link href="/about" className="underline hover:text-foreground">
            About
          </Link>
          <CookieSettingsButton className="underline hover:text-foreground" />
        </nav>
      </div>
    </footer>
  );
}
