import { ImageResponse } from "next/og";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

export const alt = `${SITE_NAME} — a clean reader for Wikipedia`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The six-stripe pride spectrum from globals.css (--rb-1 … --rb-6). Repeated
// here rather than read from CSS because Satori only sees the inline styles on
// these elements — it never loads the stylesheet.
const STRIPES = ["#e40303", "#ff8c00", "#ffb800", "#008026", "#004dff", "#750787"];

/**
 * Social card for every route that doesn't supply its own image. Article pages
 * override this with the Wikipedia lead image (see wiki/[slug]/generateMetadata),
 * so in practice this covers the home, search, and about pages.
 *
 * Rendered at build time for the static routes, so it costs nothing per request.
 */
export default function OpengraphImage() {
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
        {/* Rainbow hairline along the top edge, mirroring the site header. */}
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
          <div
            style={{
              display: "flex",
              fontSize: 26,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#5f5f5f",
            }}
          >
            Powered by the Wikipedia API
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 132,
              fontWeight: 700,
              letterSpacing: -4,
              color: "#1d4ed8",
            }}
          >
            {SITE_NAME}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              maxWidth: 900,
              fontSize: 38,
              lineHeight: 1.4,
              color: "#5f5f5f",
            }}
          >
            {SITE_DESCRIPTION.split(".")[0]}.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            padding: "0 90px 64px",
            fontSize: 30,
            color: "#111111",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 12,
              height: 12,
              borderRadius: 12,
              background: "#b5179e",
            }}
          />
          wikiqo.com
        </div>
      </div>
    ),
    size,
  );
}
