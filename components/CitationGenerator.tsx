"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  articleUrl,
  buildCitations,
  parseWikipediaLink,
  permanentUrl,
  type ArticleInfo,
  type Citation,
} from "@/lib/citation";
import Link from "next/link";
import { guideForCitation } from "@/lib/formats";
import { LookupError, fetchArticleInfo } from "@/lib/wikipedia-api";

const EXAMPLES = [
  { label: "Ada Lovelace", value: "https://en.wikipedia.org/wiki/Ada_Lovelace" },
  { label: "Photosynthesis", value: "https://en.wikipedia.org/wiki/Photosynthesis" },
  { label: "Berlin (German)", value: "https://de.wikipedia.org/wiki/Berlin" },
  { label: "A permanent link", value: "https://en.wikipedia.org/w/index.php?title=Moon&oldid=1266356498" },
];

const RECENT_KEY = "wikiqo-recent-citations";
const RECENT_MAX = 6;

type Recent = { title: string; lang: string; url: string };

function readRecent(): Recent[] {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(RECENT_KEY) ?? "[]");
    return Array.isArray(parsed) ? parsed.slice(0, RECENT_MAX) : [];
  } catch {
    return []; // storage blocked or corrupted
  }
}

function writeRecent(list: Recent[]) {
  try {
    window.localStorage.setItem(RECENT_KEY, JSON.stringify(list));
  } catch {
    // Not persisted; the list still works for this visit.
  }
}

/** yyyy-mm-dd in the reader's own time zone, for the date input. */
function toDateInput(date: Date): string {
  const p = (n: number) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${p(date.getMonth() + 1)}-${p(date.getDate())}`;
}

function fromDateInput(value: string): Date | null {
  const m = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  return m ? new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3])) : null;
}

/** Copies rich text where the browser allows it, so italics survive a paste into Word or Docs. */
async function copyCitation(citation: Citation | { html?: string; text: string; code?: boolean }) {
  if (!citation.code && citation.html && typeof ClipboardItem !== "undefined" && navigator.clipboard?.write) {
    try {
      await navigator.clipboard.write([
        new ClipboardItem({
          "text/html": new Blob([citation.html], { type: "text/html" }),
          "text/plain": new Blob([citation.text], { type: "text/plain" }),
        }),
      ]);
      return;
    } catch {
      // Fall through to plain text (Firefox before 127, some permission setups).
    }
  }
  await navigator.clipboard.writeText(citation.text);
}

type State =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "done"; info: ArticleInfo };

export default function CitationGenerator() {
  const [input, setInput] = useState("");
  const [state, setState] = useState<State>({ status: "idle" });
  const [permalink, setPermalink] = useState(true);
  const [accessed, setAccessed] = useState("");
  const [recent, setRecent] = useState<Recent[]>([]);
  const [copied, setCopied] = useState<string | null>(null);
  const controller = useRef<AbortController | null>(null);

  const lookup = useCallback(async (value: string) => {
    const link = parseWikipediaLink(value);
    if (!link) {
      setState({ status: "error", message: "That doesn't look like a Wikipedia link. Paste an address like https://en.wikipedia.org/wiki/Moon." });
      return;
    }

    controller.current?.abort();
    const abort = new AbortController();
    controller.current = abort;
    setState({ status: "loading" });

    try {
      const info = await fetchArticleInfo(link, abort.signal);
      setState({ status: "done", info });

      const shareable = new URL(window.location.href);
      shareable.searchParams.set("url", value.trim());
      window.history.replaceState(null, "", shareable);

      const entry = { title: info.title, lang: info.lang, url: articleUrl(info) };
      setRecent((prev) => {
        const next = [entry, ...prev.filter((r) => r.url !== entry.url)].slice(0, RECENT_MAX);
        writeRecent(next);
        return next;
      });
    } catch (error) {
      if (abort.signal.aborted) return;
      setState({
        status: "error",
        message: error instanceof LookupError ? error.message : "Something went wrong looking that up. Try again.",
      });
    }
  }, []);

  // Restore what can only be known in the browser: today's date in the
  // reader's time zone, their recent lookups, and a ?url= shared with them.
  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect */
    setAccessed(toDateInput(new Date()));
    setRecent(readRecent());
    const shared = new URLSearchParams(window.location.search).get("url");
    if (shared) {
      setInput(shared);
      void lookup(shared);
    }
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [lookup]);

  const citations = useMemo(() => {
    if (state.status !== "done") return [];
    return buildCitations(state.info, {
      permalink,
      accessed: fromDateInput(accessed) ?? new Date(),
    });
  }, [state, permalink, accessed]);

  async function handleCopy(id: string, citation: Parameters<typeof copyCitation>[0]) {
    try {
      await copyCitation(citation);
      setCopied(id);
      window.setTimeout(() => setCopied((current) => (current === id ? null : current)), 1800);
    } catch {
      setCopied(null);
    }
  }

  function submit(event: React.FormEvent) {
    event.preventDefault();
    void lookup(input);
  }

  function citeExample(value: string) {
    setInput(value);
    void lookup(value);
  }

  return (
    <div>
      <form onSubmit={submit} className="card p-2 shadow-sm sm:p-2.5" role="search">
        <label htmlFor="wiki-url" className="sr-only">
          Wikipedia article link
        </label>
        <div className="flex flex-col gap-2 sm:flex-row">
          <input
            id="wiki-url"
            type="text"
            inputMode="url"
            autoComplete="off"
            spellCheck={false}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="https://en.wikipedia.org/wiki/…"
            className="min-w-0 flex-1 rounded-xl bg-transparent px-4 py-3 text-base text-foreground outline-none placeholder:text-muted"
          />
          <button type="submit" className="btn-primary px-6 py-3 text-base" disabled={state.status === "loading"}>
            {state.status === "loading" ? "Looking up…" : "Cite"}
          </button>
        </div>
      </form>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
        <span className="text-muted">Try:</span>
        {EXAMPLES.map((example) => (
          <button key={example.value} type="button" onClick={() => citeExample(example.value)} className="chip">
            {example.label}
          </button>
        ))}
      </div>

      <div aria-live="polite">
        {state.status === "error" && (
          <p className="mt-6 rounded-xl border border-danger/40 bg-danger-soft px-4 py-3 text-sm text-foreground" role="alert">
            {state.message}
          </p>
        )}

        {state.status === "loading" && (
          <div className="mt-8 space-y-3" aria-label="Loading">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-24 animate-pulse rounded-2xl bg-surface-hover" />
            ))}
          </div>
        )}

        {state.status === "done" && (
          <Results
            info={state.info}
            citations={citations}
            permalink={permalink}
            onPermalink={setPermalink}
            accessed={accessed}
            onAccessed={setAccessed}
            copied={copied}
            onCopy={handleCopy}
          />
        )}
      </div>

      {recent.length > 0 && state.status !== "loading" && (
        <div className="mt-10">
          <h2 className="eyebrow">Recently cited</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {recent.map((r) => (
              <li key={r.url}>
                <button type="button" className="chip" onClick={() => citeExample(r.url)}>
                  {r.title}
                  {r.lang !== "en" && <span className="ml-1 text-muted">({r.lang})</span>}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function Results({
  info,
  citations,
  permalink,
  onPermalink,
  accessed,
  onAccessed,
  copied,
  onCopy,
}: {
  info: ArticleInfo;
  citations: Citation[];
  permalink: boolean;
  onPermalink: (value: boolean) => void;
  accessed: string;
  onAccessed: (value: string) => void;
  copied: string | null;
  onCopy: (id: string, citation: Parameters<typeof copyCitation>[0]) => void;
}) {
  const revised = new Date(info.revisionTimestamp).toLocaleString(undefined, {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "UTC",
  });
  const allText = citations.map((c) => `${c.label}\n${c.text}`).join("\n\n");

  return (
    <section className="mt-8" aria-labelledby="result-title">
      <div className="card p-5 sm:p-6">
        <p className="eyebrow">{info.lang}.wikipedia.org</p>
        <h2 id="result-title" className="mt-1 font-serif text-2xl font-bold tracking-tight sm:text-3xl">
          <a href={articleUrl(info)} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent">
            {info.title}
          </a>
        </h2>
        {info.description && <p className="mt-1 text-muted">{info.description}</p>}
        <p className="mt-3 text-sm text-muted">
          Revision{" "}
          <a href={permanentUrl(info)} target="_blank" rel="noopener noreferrer" className="underline">
            {info.revisionId}
          </a>
          , saved {revised} UTC
        </p>

        <div className="mt-5 flex flex-col gap-4 border-t border-border pt-5 sm:flex-row sm:items-center sm:gap-8">
          <label className="flex cursor-pointer items-center gap-3 text-sm">
            <input
              type="checkbox"
              checked={permalink}
              onChange={(e) => onPermalink(e.target.checked)}
              className="h-4 w-4 accent-[var(--accent)]"
            />
            <span>
              Link to this exact revision
              <span className="block text-xs text-muted">Recommended: the article may change after you cite it.</span>
            </span>
          </label>
          <label className="flex items-center gap-3 text-sm">
            Accessed
            <input
              type="date"
              value={accessed}
              onChange={(e) => onAccessed(e.target.value)}
              className="rounded-lg border border-border bg-background px-2.5 py-1.5 text-sm text-foreground"
            />
          </label>
          <button
            type="button"
            className="btn-secondary sm:ml-auto"
            onClick={() => onCopy("all", { text: allText, code: true })}
          >
            {copied === "all" ? "Copied all" : "Copy all formats"}
          </button>
        </div>
      </div>

      <nav aria-label="Citation formats" className="mt-6 flex flex-wrap gap-2">
        {citations.map((c) => (
          <a key={c.id} href={`#cite-${c.id}`} className="chip">
            {c.label}
          </a>
        ))}
      </nav>

      <ul className="mt-4 space-y-4">
        {citations.map((c) => {
          const guide = guideForCitation(c.id);
          return (
            <li key={c.id} id={`cite-${c.id}`} className="card scroll-mt-24 p-5">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-semibold">
                  {c.label}
                  {c.edition && <span className="ml-2 text-sm font-normal text-muted">{c.edition}</span>}
                </h3>
                <button type="button" className="copy-btn" onClick={() => onCopy(c.id, c)}>
                  {copied === c.id ? "Copied ✓" : "Copy"}
                </button>
              </div>
              {c.code ? (
                <pre className="mt-3 overflow-x-auto whitespace-pre-wrap break-all rounded-lg bg-surface-hover p-3 font-mono text-[0.8125rem] leading-relaxed">
                  {c.text}
                </pre>
              ) : (
                <p
                  className="citation mt-3 break-words font-serif text-[1.0625rem] leading-relaxed"
                  // Built by lib/citation.ts, which escapes every value and adds only <i>.
                  dangerouslySetInnerHTML={{ __html: c.html }}
                />
              )}
              {c.inText && (
                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-border pt-3 text-sm">
                  <span className="text-muted">{c.inTextLabel ?? "In-text"}</span>
                  <span className="break-words font-serif">{c.inText}</span>
                  <button
                    type="button"
                    className="copy-btn ml-auto"
                    onClick={() => onCopy(`${c.id}-in`, { text: c.inText!, code: true })}
                  >
                    {copied === `${c.id}-in` ? "Copied ✓" : "Copy"}
                  </button>
                </div>
              )}
              {guide && (
                <Link href={`/formats/${guide.slug}`} className="mt-3 self-start text-xs text-muted underline hover:text-accent">
                  How {guide.name} works
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
