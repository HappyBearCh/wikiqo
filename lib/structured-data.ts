import { SITE_NAME, SITE_URL } from "@/lib/site";

/**
 * Shared schema.org fragments for the JSON-LD on wikiqo's pages.
 *
 * Google reads JSON-LD to build rich results: the site name and logo beside a
 * result, breadcrumb trails in place of a raw URL, and article details.
 * Defining the publisher once keeps every page describing it identically,
 * which is what lets the pieces be joined up into a single entity.
 */

/** Absolute URL of the 512 px logo rendered by scripts/generate-icons.py. */
export const LOGO_URL = `${SITE_URL}/icon.png`;

/** wikiqo as an organisation, with the logo Google may show for it. */
export const ORGANIZATION = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: LOGO_URL,
    width: 512,
    height: 512,
  },
} as const;

/** A short reference to ORGANIZATION, for use inside other objects. */
export const ORGANIZATION_REF = { "@id": ORGANIZATION["@id"] } as const;

/**
 * A BreadcrumbList for a trail of pages, home first. Paths are site-relative
 * ("/wikiqorgi"); positions are numbered from 1 as schema.org requires.
 */
export function breadcrumbList(trail: Array<{ name: string; path: string }>) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path === "/" ? "" : crumb.path}`,
    })),
  };
}
