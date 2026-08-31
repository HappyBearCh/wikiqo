import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isRenderableTitle } from "@/content/popular-titles";
import { WIKIPEDIA_ARTICLE_BASE, titleFromSlug } from "@/lib/links";

/**
 * Hands every /wiki/ title we don't mirror straight to Wikipedia, before the
 * app renders anything.
 *
 * ## Why this exists
 *
 * app/wiki/[slug]/page.tsx already refuses to render titles outside
 * content/popular-titles.ts. That check is the correctness guarantee and it
 * stays. But reaching it costs a function invocation, a React render of the
 * response and tens of KB of origin transfer, and the traffic that trips it is
 * ~45,000 requests a day — a crawler walking Wikipedia's title space, one
 * distinct title per request, essentially never repeating.
 *
 * Proxy runs before the render pipeline, so a declined request costs a set
 * lookup and a 307 with an empty body instead of the render.
 *
 * It does not make the request free. Vercel logs these as source=middleware,
 * not as edge requests, so the invocation is still billed — measured on the
 * first deployment of this file: 797 middleware entries, 779 redirects and 6
 * function renders in 15 minutes, where before essentially every one of those
 * would have been a render. What goes away is everything that made a render
 * expensive: two Wikipedia round-trips, the sanitize/parse/keyword passes, and
 * ~71KB of origin transfer per request. Invocation count is the floor, and
 * only something ahead of the application — a WAF rule — can go below it.
 *
 * The route's own redirect is not a substitute, even though it returns the same
 * status and Location. redirect() thrown from a Server Component unwinds a
 * render that has already begun, and Next flushes its streaming-redirect
 * document with it: measured against `next start`, 10,712 bytes of HTML per
 * declined request, versus 44 through here. Over the crawl's volume that
 * difference is the whole point of this file.
 *
 * ## Why the check has to be an allowlist
 *
 * The gate this replaces let a request through if it carried a same-origin
 * `Referer`, on the reasoning that a crawler enumerating URLs has no page to
 * have come from. Measured over 24 hours on 2026-08-31: 54,164 requests to
 * /wiki/[slug] across 45,642 distinct titles, of which 40,415 returned 200 —
 * so the client was sending a same-origin Referer on titles like
 * `RMAS_Goosander` and `Paya_Rumput`, which no page here links to. It also
 * clears the Vercel challenge page, so it runs a real browser engine. Every
 * request-shaped signal — Referer, user-agent, the RSC header — is one line of
 * code away for a client like that. Only a bounded set of titles actually
 * bounds the work.
 *
 * A further 9,337 of those requests were 500s: Wikipedia had started answering
 * us with 429 Too Many Requests. The crawl was costing them as much as it cost
 * us.
 *
 * ## Why a redirect rather than a 404
 *
 * The reader who searched for an obscure article still lands on it, on the site
 * our canonical already points at (see generateMetadata in the article route).
 * A crawler follows it off-site and stops asking us. And it is the cheapest
 * response we can send: no body.
 *
 * Temporary (307), not permanent: content/popular-titles.ts is regenerated from
 * the pageviews API, so a title outside the set today can be inside it next
 * quarter, and a 308 cached in a reader's browser would outlive that.
 */
export function proxy(request: NextRequest): NextResponse {
  const slug = request.nextUrl.pathname.slice("/wiki/".length);

  if (isRenderableTitle(titleFromSlug(slug))) {
    return NextResponse.next();
  }

  // The slug is passed through as-is rather than re-encoded from the decoded
  // title: it arrived in Wikipedia's own encoding and round-tripping it through
  // a decoder mangles escaped characters. lib/sanitize.ts rewrites in-article
  // links the same way, for the same reason.
  return NextResponse.redirect(`${WIKIPEDIA_ARTICLE_BASE}${slug}`, 307);
}

// Only the mirrored article route. /wikiqorgi, /search, the home page and every
// static asset are untouched, so nothing else pays for an extra hop.
export const config = {
  matcher: "/wiki/:slug",
};
