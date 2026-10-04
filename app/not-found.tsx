import type { Metadata } from "next";
import Link from "next/link";

// Without this the 404 inherits the site title and reads as a real page in any
// tool that only looks at the markup. The `robots` override matters too: Next
// emits its own noindex here, and without this the layout's "index, follow"
// would sit alongside it as a contradictory second robots tag.
export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="shell py-24 text-center">
      <p className="font-serif text-6xl font-bold tracking-tight text-muted">404</p>
      <h1 className="mt-4 font-serif text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-2 text-muted">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link
        href="/"
        className="btn-primary mt-6"
      >
        Go home
      </Link>
    </div>
  );
}
