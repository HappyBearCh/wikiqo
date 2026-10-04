import Link from "next/link";
import { CookieSettingsButton } from "@/components/AnalyticsConsent";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-surface">
      <div className="shell flex flex-col gap-4 py-8 text-sm text-muted sm:flex-row sm:items-start sm:justify-between">
        <p className="max-w-2xl">
          wikiqo publishes original articles on{" "}
          <Link href="/wikiqorgi" className="underline">
            wikiqorgi
          </Link>{" "}
          and is an independent reader for Wikipedia&rsquo;s most-read articles,
          built with the{" "}
          <a
            href="https://en.wikipedia.org/api/rest_v1/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Wikipedia API
          </a>
          . It is not affiliated with the Wikimedia Foundation.
        </p>
        <nav aria-label="Footer" className="flex shrink-0 flex-wrap gap-x-5 gap-y-2">
          <a href="/wikiqorgi/feed.xml" className="underline hover:text-foreground">
            RSS
          </a>
          <Link href="/about" className="underline hover:text-foreground">
            About
          </Link>
          <CookieSettingsButton className="underline hover:text-foreground" />
        </nav>
      </div>
    </footer>
  );
}
