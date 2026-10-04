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
        className="btn-primary mt-6"
      >
        Try again
      </button>
    </div>
  );
}
