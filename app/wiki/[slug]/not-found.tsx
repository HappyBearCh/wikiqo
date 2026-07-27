import type { Metadata } from "next";
import Link from "next/link";

// This boundary — not the page's generateMetadata — supplies the head tags once
// notFound() fires, so the title and robots directive have to live here.
export const metadata: Metadata = {
  title: "Article not found",
  robots: { index: false, follow: true },
};

export default function ArticleNotFound() {
  return (
    <div className="shell py-24 text-center">
      <h1 className="font-serif text-3xl font-semibold tracking-tight">Article not found</h1>
      <p className="mt-2 text-muted">
        Wikipedia doesn&apos;t have an article with that exact title.
      </p>
      <Link href="/search" className="mt-6 inline-block text-accent underline">
        Try a search instead
      </Link>
    </div>
  );
}
