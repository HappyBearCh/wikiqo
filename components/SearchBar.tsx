"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { OpenSearchSuggestion } from "@/lib/types";
import { articleHref } from "@/lib/links";

// Autocomplete calls Wikipedia's opensearch API directly from the browser
// (CORS-enabled via origin=*) rather than proxying through a Vercel Function.
// This is exactly what Wikipedia's own search box does, and it keeps per-
// keystroke traffic entirely off our compute — no function invocations, no
// observability events for the typeahead.
const OPENSEARCH_ENDPOINT = "https://en.wikipedia.org/w/api.php";

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

export default function SearchBar() {
  const router = useRouter();
  const listboxId = useId();

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<OpenSearchSuggestion[]>([]);
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

  function handleChange(value: string) {
    setQuery(value);
    setActiveIndex(-1);

    if (debounceRef.current) clearTimeout(debounceRef.current);
    abortRef.current?.abort();

    const trimmed = value.trim();
    // Single characters return near-useless suggestions; requiring two cuts the
    // request volume without hurting the experience.
    if (trimmed.length < 2) {
      setSuggestions([]);
      setOpen(false);
      return;
    }

    debounceRef.current = setTimeout(async () => {
      const controller = new AbortController();
      abortRef.current = controller;
      try {
        const suggestions = await fetchSuggestions(trimmed, controller.signal);
        setSuggestions(suggestions);
        setOpen(suggestions.length > 0);
      } catch {
        // aborted or network hiccup — ignore, user is likely still typing
      }
    }, 200);
  }

  function goToSearch() {
    const trimmed = query.trim();
    if (!trimmed) return;
    setOpen(false);
    router.push(`/search?q=${encodeURIComponent(trimmed)}`);
  }

  function goToArticle(title: string) {
    setOpen(false);
    setQuery(title);
    router.push(articleHref(title));
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (!open || suggestions.length === 0) {
      if (event.key === "Enter") {
        event.preventDefault();
        goToSearch();
      }
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((i) => (i + 1) % suggestions.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((i) => (i <= 0 ? suggestions.length - 1 : i - 1));
    } else if (event.key === "Enter") {
      event.preventDefault();
      if (activeIndex >= 0) {
        goToArticle(suggestions[activeIndex].title);
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
          Search Wikipedia
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
            aria-expanded={open}
            aria-controls={listboxId}
            aria-autocomplete="list"
            aria-activedescendant={activeIndex >= 0 ? `${listboxId}-${activeIndex}` : undefined}
            autoComplete="off"
            placeholder="Search Wikipedia..."
            value={query}
            onChange={(e) => handleChange(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => suggestions.length > 0 && setOpen(true)}
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
          />
        </div>
      </form>

      {open && (
        <ul
          id={listboxId}
          role="listbox"
          className="glass animate-in absolute z-40 mt-2 w-full overflow-hidden rounded-2xl border border-border p-1.5 shadow-xl shadow-black/10"
        >
          {suggestions.map((s, i) => (
            <li
              key={s.title}
              id={`${listboxId}-${i}`}
              role="option"
              aria-selected={i === activeIndex}
              onMouseDown={(e) => {
                e.preventDefault();
                goToArticle(s.title);
              }}
              onMouseEnter={() => setActiveIndex(i)}
              className={`flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors ${
                i === activeIndex ? "bg-accent-soft" : ""
              }`}
            >
              <span
                className="h-6 w-1 shrink-0 rounded-full"
                style={{ background: "var(--rainbow)" }}
                aria-hidden
              />
              <span className="min-w-0">
                <span className="block font-medium">{s.title}</span>
                {s.description && (
                  <span className="block truncate text-xs text-muted">{s.description}</span>
                )}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
