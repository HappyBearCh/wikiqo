import type { Metadata } from "next";
import Link from "next/link";
import { OG_BASE } from "@/lib/site";

const DESCRIPTION =
  "About wikiqo, a free citation generator for Wikipedia articles: what it does, where its data comes from, and what it keeps about you (nothing).";

export const metadata: Metadata = {
  title: "About",
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: {
    ...OG_BASE,
    type: "article",
    url: "/about",
    title: "About wikiqo",
    description: DESCRIPTION,
  },
};

export default function AboutPage() {
  return (
    <div className="shell py-12 sm:py-16">
      <article className="prose prose-neutral mx-auto max-w-2xl dark:prose-invert prose-headings:font-serif prose-a:text-accent">
        <h1>About wikiqo</h1>
        <p className="lead">
          wikiqo turns a Wikipedia link into a correctly formatted citation, in
          whichever style your teacher, journal or editor asks for.
        </p>

        <h2>Where the details come from</h2>
        <p>
          When you paste a link, your browser asks Wikipedia&rsquo;s public{" "}
          <a href="https://www.mediawiki.org/wiki/API:Main_page" target="_blank" rel="noopener noreferrer">
            MediaWiki API
          </a>{" "}
          for the article&rsquo;s canonical title, its revision number and the
          moment that revision was saved. Those three facts, plus the date you
          read it, are everything a citation of a Wikipedia article needs.
          Nothing passes through our servers.
        </p>

        <h2>Why a permanent link</h2>
        <p>
          A Wikipedia article is a moving target. Citing the revision you
          actually read, with an <code>oldid</code> link, lets your reader see
          exactly what you saw. wikiqo does this by default; you can switch to
          the article&rsquo;s ordinary address if your style guide prefers it.
        </p>

        <h2>Privacy</h2>
        <p>
          There are no accounts. Your recent lookups are kept in your own
          browser&rsquo;s storage and never sent anywhere. Google Analytics only
          loads if you allow it, and you can change your mind from the{" "}
          <em>Cookie settings</em> link at the bottom of every page.
        </p>

        <h2>Not affiliated</h2>
        <p>
          wikiqo is independent and is not affiliated with or endorsed by the
          Wikimedia Foundation. Wikipedia is a registered trademark of the
          Wikimedia Foundation.
        </p>

        <p>
          <Link href="/">Cite an article &rarr;</Link>
        </p>
      </article>
    </div>
  );
}
