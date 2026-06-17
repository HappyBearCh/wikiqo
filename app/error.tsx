"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="shell py-24 text-center">
      <h1 className="font-serif text-3xl font-semibold tracking-tight">Something went wrong</h1>
      <p className="mt-2 text-muted">
        We couldn&apos;t load that page. This is usually temporary.
      </p>
      <button
        onClick={reset}
        className="shadow-glow mt-6 rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105"
        style={{ background: "var(--library-blue)", backgroundSize: "200% auto" }}
      >
        Try again
      </button>
    </div>
  );
}
