import type { Citation } from "@/lib/citation";

/** A fixed, worked citation of the sample article, as shown on the home page and the format guides. */
export default function CitationExample({ caption, citation }: { caption: string; citation: Citation }) {
  return (
    <figure className="card p-5">
      <figcaption className="flex flex-wrap items-baseline gap-x-2 text-sm">
        <span className="font-semibold">{citation.label}</span>
        {citation.edition && <span className="text-muted">{citation.edition}</span>}
        <span className="text-muted">· {caption}</span>
      </figcaption>
      {citation.code ? (
        <pre className="mt-3 overflow-x-auto whitespace-pre-wrap break-all rounded-lg bg-surface-hover p-3 font-mono text-[0.8125rem] leading-relaxed">
          {citation.text}
        </pre>
      ) : (
        <p
          className="mt-3 break-words font-serif text-[1.0625rem] leading-relaxed"
          // Built by lib/citation.ts from a fixed sample, which escapes every value and adds only <i>.
          dangerouslySetInnerHTML={{ __html: citation.html }}
        />
      )}
      {citation.inText && (
        <p className="mt-3 border-t border-border pt-3 text-sm">
          <span className="text-muted">{citation.inTextLabel ?? "In-text"}</span>{" "}
          <span className="break-words font-serif">{citation.inText}</span>
        </p>
      )}
    </figure>
  );
}
