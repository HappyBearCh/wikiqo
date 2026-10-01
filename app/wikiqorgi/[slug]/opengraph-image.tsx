import { ImageResponse } from "next/og";
import {
  WIKIQORGI_ARTICLES,
  WIKIQORGI_SECTIONS,
  getRewrittenArticle,
  getSection,
  getSectionForSlug,
} from "@/content/wikiqorgi";
import { SITE_NAME } from "@/lib/site";

export const alt = "An original article from wikiqorgi, on wikiqo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Same closed set as the page beside this file: every section and article is
// known at build time, so every card is rendered once, at build, and served as
// a static PNG. Nothing outside the set is generated on demand.
export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...WIKIQORGI_SECTIONS.map((section) => ({ slug: section.id })),
    ...WIKIQORGI_ARTICLES.map((article) => ({ slug: article.slug })),
  ];
}

// The six-stripe spectrum from globals.css. Satori never sees the stylesheet,
// so the section hues (stored as var(--rb-N)) are resolved to hex here.
const STRIPES = ["#e40303", "#ff8c00", "#ffb800", "#008026", "#004dff", "#750787"];

function hueToHex(hue: string | undefined): string {
  const index = Number(/--rb-(\d)/.exec(hue ?? "")?.[1] ?? 5) - 1;
  return STRIPES[index] ?? STRIPES[4];
}

function clip(text: string, max: number): string {
  return text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text;
}

/**
 * Social card for each wikiqorgi article and section page. Until now every
 * share showed the generic site card; these carry the headline, the dek and
 * the section's colour, so a shared link says what it is.
 *
 * page.tsx deliberately leaves openGraph.images unset for this segment: an
 * explicit image there takes precedence over this file.
 */
export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const section = getSection(slug);
  const article = section ? undefined : getRewrittenArticle(slug);
  const home = section ?? getSectionForSlug(slug);

  const kicker = section ? "wikiqorgi · section" : `wikiqorgi · ${home?.title ?? ""}`;
  const title = section?.title ?? article?.title ?? "wikiqorgi";
  const body = section?.blurb ?? article?.dek ?? "";
  const accent = hueToHex(home?.hue);
  const meta = article
    ? `${article.readingMinutes} min read · on ${article.sourceTitle}`
    : section
      ? `${section.articles.length} articles`
      : "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#ffffff",
          color: "#111111",
        }}
      >
        <div style={{ display: "flex", height: 14 }}>
          {STRIPES.map((hue) => (
            <div key={hue} style={{ flex: 1, background: hue }} />
          ))}
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 90px",
          }}
        >
          <div style={{ display: "flex", width: 120, height: 12, borderRadius: 6, background: accent }} />
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 26,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "#5f5f5f",
            }}
          >
            {clip(kicker, 60)}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              fontSize: title.length > 48 ? 58 : 72,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: -2,
            }}
          >
            {clip(title, 90)}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 26,
              fontSize: 32,
              lineHeight: 1.4,
              color: "#5f5f5f",
            }}
          >
            {clip(body, 150)}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 90px 48px",
            fontSize: 26,
            color: "#5f5f5f",
          }}
        >
          <div style={{ display: "flex", fontWeight: 700, color: "#1d4ed8" }}>{SITE_NAME}</div>
          <div style={{ display: "flex" }}>{meta}</div>
        </div>
      </div>
    ),
    size,
  );
}
