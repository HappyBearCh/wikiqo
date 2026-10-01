import { rewrittenHref } from "@/content/wikiqorgi";
import { promotedArticles } from "@/content/wikiqorgi/schedule";
import { SITE_NAME, SITE_URL } from "@/lib/site";

/**
 * RSS feed of the wikiqorgi shelf, in promotion order.
 *
 * The home page already releases the shelf a few articles a week (see
 * content/wikiqorgi/schedule.ts), but a reader had no way to follow that
 * except by coming back to look. The feed follows the same schedule, and an
 * item's date is the day it reached the front page. That makes the feed and
 * the home page agree, and a subscriber sees the shelf arrive at the same pace
 * as everyone else rather than 160 items at once.
 *
 * Regenerated once a day, like the home page, so new promotions appear without
 * a deploy. One fixed path revalidated daily: the cheap kind of ISR, not the
 * unbounded kind warned about in app/wiki/[slug]/page.tsx.
 *
 * This static segment takes precedence over the sibling [slug] route, which
 * only serves the closed set of section and article slugs anyway.
 */
export const dynamic = "force-static";
export const revalidate = 86400;

function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const now = new Date();
  const promoted = promotedArticles(now);
  const feedUrl = `${SITE_URL}/wikiqorgi/feed.xml`;

  const items = promoted
    .map(({ article, section, promotedAt }) => {
      const url = `${SITE_URL}${rewrittenHref(article.slug)}`;
      return `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${promotedAt.toUTCString()}</pubDate>
      <category>${escapeXml(section.title)}</category>
      <description>${escapeXml(`${article.dek} ${article.standfirst}`)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>wikiqorgi — ${escapeXml(SITE_NAME)}</title>
    <link>${SITE_URL}/wikiqorgi</link>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
    <description>Wikipedia's subjects, researched again and written from scratch. New articles a few times a week.</description>
    <language>en</language>
    <lastBuildDate>${(promoted[0]?.promotedAt ?? now).toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
