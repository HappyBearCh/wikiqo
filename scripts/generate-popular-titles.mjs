#!/usr/bin/env node
/**
 * Regenerates the POPULAR_TITLES set in content/popular-titles.ts from the
 * Wikimedia pageviews API: the top 1,000 English Wikipedia articles for each
 * of the last N days, deduplicated, lowercased, with namespaced titles
 * (anything containing a colon) and the Main Page removed.
 *
 * That set is the gate on /wiki/[slug] — see the comment at the top of
 * content/popular-titles.ts for why it exists. It is a snapshot, so it goes
 * stale: rerun this every month or two and commit the diff.
 *
 * Usage:
 *   npm run gen:popular-titles            # 90 days, rewrites the file
 *   npm run gen:popular-titles -- --days=180
 *   npm run gen:popular-titles -- --dry-run
 *
 * Only the POPULAR_TITLES literal and the "Generated …" line are rewritten.
 * Everything else in the file (LINKED_TITLES, the FEATURED fold-in,
 * isRenderableTitle) is left alone.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const FILE = join(dirname(fileURLToPath(import.meta.url)), "..", "content", "popular-titles.ts");
const TOP_BASE = "https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access";
// Wikimedia asks API clients to identify themselves:
// https://meta.wikimedia.org/wiki/User-Agent_policy
const USER_AGENT = "wikiqo.com/1.0 (https://wikiqo.com; popular-titles generator)";
const PER_LINE = 8;
const CONCURRENCY = 6;

const args = process.argv.slice(2);
const days = Number(args.find((a) => a.startsWith("--days="))?.slice("--days=".length) ?? 90);
const dryRun = args.includes("--dry-run");

if (!Number.isInteger(days) || days < 1) {
  console.error("--days must be a positive integer");
  process.exit(1);
}

// Pageviews data lags a day or two; start two days back to avoid 404s on days
// that have not been published yet.
const dates = Array.from({ length: days }, (_, i) => {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - (i + 2));
  return `${d.getUTCFullYear()}/${String(d.getUTCMonth() + 1).padStart(2, "0")}/${String(d.getUTCDate()).padStart(2, "0")}`;
});

async function topForDay(date) {
  const res = await fetch(`${TOP_BASE}/${date}`, {
    headers: { "User-Agent": USER_AGENT, Accept: "application/json" },
  });
  if (!res.ok) {
    console.warn(`  ${date}: HTTP ${res.status}, skipped`);
    return [];
  }
  const data = await res.json();
  return data.items?.[0]?.articles?.map((a) => a.article) ?? [];
}

const titles = new Set();
let failedDays = 0;
for (let i = 0; i < dates.length; i += CONCURRENCY) {
  const batch = await Promise.all(dates.slice(i, i + CONCURRENCY).map(topForDay));
  for (const list of batch) {
    if (list.length === 0) failedDays++;
    for (const title of list) {
      // Compare before lowercasing: the API returns "Main_Page".
      if (title === "Main_Page" || title.includes(":")) continue;
      titles.add(title.toLowerCase());
    }
  }
}

// Exits by setting exitCode and falling off the end rather than calling
// process.exit(): on Windows, exiting while fetch's keep-alive sockets are
// still closing trips a libuv assertion.
if (titles.size === 0 || failedDays > days / 2) {
  console.error(`Only ${days - failedDays}/${days} days returned data; refusing to write.`);
  process.exitCode = 1;
} else {
  writeTitles();
}

function writeTitles() {
  const sorted = [...titles].sort();
  const today = new Date().toISOString().slice(0, 10);
  console.log(`${sorted.length} titles from ${days - failedDays}/${days} days`);

  if (dryRun) return;

  const source = readFileSync(FILE, "utf8");
  const open = "const POPULAR_TITLES = new Set([\n";
  const start = source.indexOf(open);
  const end = source.indexOf("\n]);", start);
  if (start === -1 || end === -1) throw new Error("Could not find the POPULAR_TITLES literal");

  const lines = [];
  for (let i = 0; i < sorted.length; i += PER_LINE) {
    lines.push(`  ${sorted.slice(i, i + PER_LINE).map((t) => JSON.stringify(t)).join(", ")},`);
  }

  const updated = (source.slice(0, start + open.length) + lines.join("\n") + source.slice(end)).replace(
    /Generated \d{4}-\d{2}-\d{2} — \d+ titles\./,
    `Generated ${today} — ${sorted.length} titles.`,
  );

  writeFileSync(FILE, updated);
  console.log(`Rewrote ${FILE}`);
}
