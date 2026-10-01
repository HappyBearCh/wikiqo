"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { OpenSearchSuggestion } from "@/lib/types";
import { articleHref, renderableTitleKey, rewrittenHref, wikipediaUrlFor } from "@/lib/links";
import { searchShelf, type SearchIndex, type ShelfEntry } from "@/lib/shelf-search";

// Autocomplete calls Wikipedia's opensearch API directly from the browser
// (CORS-enabled via origin=*) rather than proxying through a Vercel Function.
// This is exactly what Wikipedia's own search box does, and it keeps per-
// keystroke traffic entirely off our compute — no function invocations, no
// observability events for the typeahead.
const OPENSEARCH_ENDPOINT = "https://en.wikipedia.org/w/api.php";

/** wikiqorgi matches shown above the Wikipedia suggestions. */
const SHELF_LIMIT = 3;

async function fetchSuggestions(
  query: string,
  signal: AbortSignal,
): Promise<OpenSearchSuggestion[]> {
  const url = new URL(OPENSEARCH_ENDPOINT);
  url.searchParams.set("action", "opensearch");
  url.searchParams.set("search", query);
  url.searchParams.set("limit", "8");
  url.searchParams.set("namespace", "0");
  url.searchParams.set("format", "json");
  url.searchParams.set("origin", "*"); // CORS: anonymous cross-origin request

  const res = await fetch(url, { signal });
  if (!res.ok) return [];

  const [, titles, descriptions, urls] = (await res.json()) as [
    string,
    string[],
    string[],
    string[],
  ];

  return titles.map((title, i) => ({
    title,
    description: descriptions[i] ?? "",
    url: urls[i] ?? "",
  }));
}

interface LoadedIndex {
  shelf: ShelfEntry[];
  mirrored: Set<string>;
}

// Fetched once per page load, the first time anyone types, and shared by every
// SearchBar instance. It is a static file on the CDN (app/search-index.json),
// so this costs no function invocation. A failed fetch resolves to null and
// the box falls back to plain Wikipedia suggestions, as it worked before.
let indexPromise: Promise<LoadedIndex | null> | null = null;

function loadIndex(): Promise<LoadedIndex | null> {
  indexPromise ??= fetch("/search-index.json")
    .then((res) => (res.ok ? (res.json() as Promise<SearchIndex>) : null))
    .then((data) => (data ? { shelf: data.shelf, mirrored: new Set(data.mirrored) } : null))
    .catch(() => null);
  return indexPromise;
}

type Option =
  | { kind: "shelf"; entry: ShelfEntry }
  | { kind: "wikipedia"; suggestion: OpenSearchSuggestion; offsite: boolean };

function optionKey(option: Option): string {
  return option.kind === "shelf" ? `shelf:${option.entry.slug}` : `wiki:${option.suggestion.title}`;
}

export default function SearchBar() {
  const router = useRouter();
  const listboxId = useId();

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<OpenSearchSuggestion[]>([]);
  const [index, setIndex] = useState<LoadedIndex | null>(null);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const trimmed = query.trim();
  const shelfMatches =
    index && trimmed.length >= 2 ? searchShelf(index.shelf, trimmed, SHELF_LIMIT) : [];
  const options: Option[] = [
    ...shelfMatches.map((entry): Option => ({ kind: "shelf", entry })),
    ...suggestions.map(
      (suggestion): Option => ({
        kind: "wikipedia",
        suggestion,
        // Unknown until the index arrives; until then the link goes through
        // /wiki/, where proxy.ts makes the same decision.
        offsite: index ? !index.mirrored.has(renderableTitleKey(suggestion.title)) : false,
      }),
    ),
  ];
  const showList = open && options.length > 0;

  function handleChange(value: string) {
    setQuery(value);
    setActiveIndex(-1);

    if (debounceRef.current) clearTimeout(debounceRef.current);
    abortRef.current?.abort();

    const next = value.trim();
    // Single characters return near-useless suggestions; requiring two cuts the
    // request volume without hurting the experience.
    if (next.length < 2) {
      setSuggestions([]);
      setOpen(false);
      return;
    }

    setOpen(true);
    if (!index) void loadIndex().then(setIndex);

    debounceRef.current = setTimeout(async () => {
      const controller = new AbortController();
      abortRef.current = controller;
      try {
        setSuggestions(await fetchSuggestions(next, controller.signal));
      } catch {
        // aborted or network hiccup — ignore, user is likely still typing
      }
    }, 200);
  }

  function goToSearch() {
    if (!trimmed) return;
    setOpen(false);
    router.push(`/search?q=${encodeURIComponent(trimmed)}`);
  }

  function choose(option: Option) {
    setOpen(false);
    if (option.kind === "shelf") {
      setQuery(option.entry.sourceTitle);
      router.push(rewrittenHref(option.entry.slug));
    } else if (option.offsite) {
      // Straight to Wikipedia: going via /wiki/ would only earn a redirect.
      window.location.assign(wikipediaUrlFor(option.suggestion.title));
    } else {
      setQuery(option.suggestion.title);
      router.push(articleHref(option.suggestion.title));
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (!showList) {
      if (event.key === "Enter") {
        event.preventDefault();
        goToSearch();
      }
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((i) => (i + 1) % options.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((i) => (i <= 0 ? options.length - 1 : i - 1));
    } else if (event.key === "Enter") {
      event.preventDefault();
      const active = options[activeIndex];
      if (active) {
        choose(active);
      } else {
        goToSearch();
      }
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <div ref={containerRef} className="relative w-full sm:mx-auto sm:max-w-xl">
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          goToSearch();
        }}
      >
        <label htmlFor="site-search" className="sr-only">
          Search wikiqo and Wikipedia
        </label>
        <div className="rainbow-border flex items-center gap-2.5 rounded-full px-4 py-2.5 shadow-sm transition-shadow focus-within:shadow-glow">
          <svg
            aria-hidden
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="h-4 w-4 shrink-0 text-accent"
          >
            <circle cx="9" cy="9" r="6" />
            <path d="M18 18l-4.35-4.35" strokeLinecap="round" />
          </svg>
          <input
            id="site-search"
            type="text"
            role="combobox"
            aria-expanded={showList}
            aria-controls={listboxId}
            aria-autocomplete="list"
            aria-activedescendant={activeIndex >= 0 ? `${listboxId}-${activeIndex}` : undefined}
            autoComplete="off"
            placeholder="Search articles..."
            value={query}
            onChange={(e) => handleChange(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => {
              if (trimmed.length >= 2) setOpen(true);
            }}
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
          />
        </div>
      </form>

      {showList && (
        <ul
          id={listboxId}
          role="listbox"
          className="glass animate-in absolute z-40 mt-2 w-full overflow-hidden rounded-2xl border border-border p-1.5 shadow-xl shadow-black/10"
        >
          {options.map((option, i) => {
            const firstOfKind = i === 0 || options[i - 1].kind !== option.kind;
            return (
              <li
                key={optionKey(option)}
                id={`${listboxId}-${i}`}
                role="option"
                aria-selected={i === activeIndex}
                onMouseDown={(e) => {
                  e.preventDefault();
                  choose(option);
                }}
                onMouseEnter={() => setActiveIndex(i)}
                className={`cursor-pointer rounded-xl px-3 py-2 text-sm transition-colors ${
                  i === activeIndex ? "bg-accent-soft" : ""
                } ${firstOfKind && i > 0 ? "mt-1.5 border-t border-border pt-2.5" : ""}`}
              >
                {firstOfKind && (
                  <span
                    aria-hidden
                    className="mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-muted"
                  >
                    {option.kind === "shelf" ? "Written for wikiqo" : "From Wikipedia"}
                  </span>
                )}
                {option.kind === "shelf" ? (
                  <ShelfOption entry={option.entry} />
                ) : (
                  <WikipediaOption suggestion={option.suggestion} offsite={option.offsite} />
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function ShelfOption({ entry }: { entry: ShelfEntry }) {
  return (
    <span className="flex items-center gap-3">
      <span
        className="h-6 w-1 shrink-0 rounded-full"
        style={{ background: "var(--accent)" }}
        aria-hidden
      />
      <span className="min-w-0">
        <span className="block truncate font-medium">{entry.title}</span>
        <span className="block truncate text-xs text-muted">
          {entry.section} · on {entry.sourceTitle}
        </span>
      </span>
    </span>
  );
}

function WikipediaOption({
  suggestion,
  offsite,
}: {
  suggestion: OpenSearchSuggestion;
  offsite: boolean;
}) {
  return (
    <span className="flex items-center gap-3">
      <span
        className="h-6 w-1 shrink-0 rounded-full"
        style={{ background: "var(--rainbow)" }}
        aria-hidden
      />
      <span className="min-w-0 flex-1">
        <span className="block font-medium">{suggestion.title}</span>
        {suggestion.description && (
          <span className="block truncate text-xs text-muted">{suggestion.description}</span>
        )}
      </span>
      {offsite && (
        <span className="shrink-0 text-[11px] text-muted">
          Wikipedia <span aria-hidden>↗</span>
          <span className="sr-only">(opens on Wikipedia)</span>
        </span>
      )}
    </span>
  );
}
