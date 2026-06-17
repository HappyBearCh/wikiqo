import Link from "next/link";

export default function NotFound() {
  return (
    <div className="shell py-24 text-center">
      <p className="text-rainbow font-serif text-7xl font-bold tracking-tight">404</p>
      <h1 className="mt-4 font-serif text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-2 text-muted">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link
        href="/"
        className="shadow-glow mt-6 inline-block rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105"
        style={{ background: "var(--library-blue)", backgroundSize: "200% auto" }}
      >
        Go home
      </Link>
    </div>
  );
}
