"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import type { Keyword } from "@/lib/keywords";

// The three variants each pull in d3 (Constellation alone drags in d3-force and
// runs a physics simulation). Only one is ever on screen, so load each on demand
// rather than shipping all three — and their d3 modules — in the initial bundle.
// ssr:false is safe here: the band is purely decorative and renders client-side.
const Constellation = dynamic(() => import("@/components/textviz/Constellation"), {
  ssr: false,
});
const Ribbon = dynamic(() => import("@/components/textviz/Ribbon"), { ssr: false });
const TitlePath = dynamic(() => import("@/components/textviz/TitlePath"), {
  ssr: false,
});

type Variant = "cloud" | "ribbon" | "title";

interface TextBannerProps {
  /** Salient terms for the cloud and ribbon variants. */
  words: Keyword[];
  /** Headline for the title variant — page title, query, or site name. */
  title: string;
  /** Which variant to show first. Defaults to the word cloud. */
  initial?: Variant;
}

const TABS: { id: Variant; label: string }[] = [
  { id: "cloud", label: "Cloud" },
  { id: "ribbon", label: "Ribbon" },
  { id: "title", label: "Title" },
];

/**
 * Decorative D3 text-visualization band shown at the top of a page. It frames
 * three interchangeable views of the page's text — a floating word
 * constellation, a frequency ribbon, and a kinetic title — with a small switch
 * to flip between them. The cloud/ribbon need salient terms; the title only
 * needs a headline, so the band still works on text-sparse pages.
 */
export default function TextBanner({ words, title, initial = "cloud" }: TextBannerProps) {
  const hasWords = words.length > 0;
  const [variant, setVariant] = useState<Variant>(
    hasWords ? initial : "title",
  );

  // Hide the data-driven tabs when there's nothing to visualize.
  const tabs = hasWords ? TABS : TABS.filter((t) => t.id === "title");

  return (
    <section
      aria-label="Page text visualization"
      className="relative mb-10 overflow-hidden rounded-2xl border border-border bg-surface"
    >
      {/* Brand hairline, matching the app's other surfaces. */}
      <div className="h-1.5 w-full" style={{ background: "var(--rainbow)" }} />

      <div className="relative h-24 w-full sm:h-28 lg:h-32">
        {variant === "cloud" && <Constellation words={words} />}
        {variant === "ribbon" && <Ribbon words={words} />}
        {variant === "title" && <TitlePath title={title} />}
      </div>

      {tabs.length > 1 && (
        <div className="absolute right-2.5 top-3.5 flex gap-1 rounded-full border border-border bg-surface/80 p-0.5 backdrop-blur">
          {tabs.map((tab) => {
            const active = tab.id === variant;
            return (
              <button
                key={tab.id}
                type="button"
                aria-pressed={active}
                onClick={() => setVariant(tab.id)}
                className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
                  active
                    ? "text-white"
                    : "text-muted hover:text-foreground"
                }`}
                style={active ? { background: "var(--library-blue)" } : undefined}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
}
