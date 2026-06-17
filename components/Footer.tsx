export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-surface">
      <div className="h-1 w-full" style={{ background: "var(--rainbow)" }} />
      <div className="shell py-8 text-sm text-muted">
        <p>
          wikiqo is an independent reader for Wikipedia, built with the{" "}
          <a
            href="https://en.wikipedia.org/api/rest_v1/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Wikipedia API
          </a>
          . It is not affiliated with the Wikimedia Foundation.
        </p>
      </div>
    </footer>
  );
}
