"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ArticleError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Article page error:", error);
  }, [error]);

  return (
    <div className="shell py-24 text-center">
      <h1 className="font-serif text-3xl font-semibold tracking-tight">Couldn&apos;t load this article</h1>
      <p className="mt-2 text-muted">
        Wikipedia&apos;s API didn&apos;t respond. Please try again in a moment.
      </p>
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={reset}
          className="btn-primary"
        >
          Try again
        </button>
        <Link href="/search" className="text-accent underline">
          Back to search
        </Link>
      </div>
    </div>
  );
}
