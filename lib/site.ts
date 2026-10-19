import type { Metadata } from "next";

/**
 * Single source of truth for the site's identity. Used by the root metadata,
 * robots.txt, the sitemap, and the OG image, which previously each hardcoded
 * their own copy of the origin.
 */

/**
 * Canonical production origin, without a trailing slash.
 *
 * This must be the host that actually serves the site. In the Vercel project,
 * wikiqo.com is configured to 308-redirect to www.wikiqo.com, so www is the
 * primary host. With the apex here instead, every canonical tag, sitemap
 * entry, Open Graph URL and structured-data link pointed at a URL that
 * redirects — which Search Console reports as "Page with redirect" and which
 * muddies which URL Google should index. If the Vercel redirect is ever
 * flipped to make the apex primary, change this to match.
 */
export const SITE_URL = "https://www.wikiqo.com";

export const SITE_NAME = "wikiqo";

/** Used as the home-page title and the `%s | wikiqo` fallback. */
export const SITE_TITLE = "wikiqo — Wikipedia citation generator (APA, MLA, Chicago, Harvard)";

/** The first sentence doubles as the tagline on the generated social card. */
export const SITE_DESCRIPTION =
  "Paste a Wikipedia link and get a ready-to-copy citation. APA, MLA, Chicago, Harvard, IEEE, AMA, Vancouver, BibTeX, RIS and wiki markup, with a permanent link to the exact revision you read.";

/** The generated social card served from app/opengraph-image.tsx. */
const OG_IMAGE = "/opengraph-image";

/**
 * Open Graph fields that every page needs to repeat. Next.js *replaces* the
 * parent segment's `openGraph` object wholesale when a child sets any og field
 * — it does not deep-merge — so a page that sets its own title/description
 * silently drops these unless it spreads them back in. That includes the image
 * inherited from the opengraph-image file convention, hence OG_IMAGE here.
 */
export const OG_BASE = {
  siteName: SITE_NAME,
  locale: "en_US",
  images: [OG_IMAGE],
} satisfies NonNullable<Metadata["openGraph"]>;
