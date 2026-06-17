export default function SearchLoading() {
  return (
    <div className="shell py-10">
      <div className="mx-auto max-w-4xl">
        <div className="h-4 w-20 animate-pulse rounded bg-surface" />
        <div className="mt-2 h-8 w-72 animate-pulse rounded bg-surface" />
        <ul className="mt-6 flex flex-col gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <li key={i} className="space-y-2 rounded-2xl px-4 py-4">
              <div className="h-5 w-48 animate-pulse rounded bg-surface" />
              <div className="h-4 w-full animate-pulse rounded bg-surface" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
