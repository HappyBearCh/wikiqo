import type { Metadata } from "next";

/**
 * Single source of truth for the site's identity. Used by the root metadata,
 * robots.txt, the sitemap, and the OG image, which previously each hardcoded
 * their own copy of the origin.
 */

/** Canonical production origin, without a trailing slash. */
export const SITE_URL = "https://wikiqo.com";

export const SITE_NAME = "wikiqo";

/** Used as the home-page title and the `%s | wikiqo` fallback. */
export const SITE_TITLE = "wikiqo — a clean reader for Wikipedia";

export const SITE_DESCRIPTION =
  "A fast, clean reader for Wikipedia. Search the encyclopedia and read millions of articles in a calm, uncluttered reading column — no ads, no account, no distractions.";

/** The generated social card served from app/opengraph-image.tsx. */
export const OG_IMAGE = "/opengraph-image";

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
