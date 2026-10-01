# wikiqo

[wikiqo.com](https://wikiqo.com) is two things:

- **wikiqorgi** (`/wikiqorgi`): original articles on the encyclopedia's best
  subjects, researched again and written from scratch. 160 articles in 32
  sections, each with its sources listed. This is the part of the site meant to
  be found and read.
- **A Wikipedia reader** (`/wiki/[slug]`): Wikipedia's most-read articles in a
  clean reading column. It canonicals to en.wikipedia.org and is not indexed.

Next.js 16 (App Router) on Vercel. Read `node_modules/next/dist/docs/` before
changing framework code; this version differs from older training data (see
`AGENTS.md`).

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm test         # vitest
npm run lint
npm run build
```

## How the site is put together

| Route | Rendering | Notes |
| --- | --- | --- |
| `/` | Static, revalidated daily | Leads with the newest promoted wikiqorgi article. |
| `/wikiqorgi`, `/wikiqorgi/[slug]` | Static (SSG), closed set | Sections and articles share one slug namespace. Each has a generated social card. |
| `/wikiqorgi/feed.xml` | Static, revalidated daily | RSS, following the promotion schedule. |
| `/search` | Dynamic | wikiqorgi matches first, then Wikipedia's. Disallowed in robots.txt. |
| `/search-index.json` | Static | Catalog plus mirrored-title list for the header search box. |
| `/wiki/[slug]` | Dynamic | Renders only titles in `content/popular-titles.ts`; anything else gets a 307 to Wikipedia from `proxy.ts`. |

### Cost controls on `/wiki/`

Nearly all traffic to the mirror used to be crawlers walking Wikipedia's title
space. Three things keep that from turning into a bill, and each is explained
at length in the file concerned:

- `proxy.ts` redirects unknown titles before any rendering happens.
- `app/wiki/[slug]/page.tsx` stays `force-dynamic`. Route-level ISR was tried
  and cost far more in ISR writes than it saved.
- `app/robots.ts` disallows `/wiki/` and `/search`.

### The wikiqorgi shelf

Everything lives in `content/wikiqorgi/` as compile-time constants:

- `index.ts` lists the sections (append only, never reorder: see `schedule.ts`)
  and runs build-time checks. The build fails on duplicate slugs, an
  out-of-date catalog, or an article without sources.
- `schedule.ts` staggers which articles the home page and feed promote.
- `sources.ts` holds each article's further-reading list.
- `crosslinks.ts` links the first mention of other articles' subjects in each
  body. Link phrases are declared per target article.
- `catalog.ts` is **generated**: slug, headline, source title, dek and section
  for every article. The dynamic routes and the proxy use it so they never
  bundle the shelf's ~2 MB of prose.

To add an article: write `content/wikiqorgi/<slug>.ts`, add it to a section in
`index.ts`, add its sources to `sources.ts`, optionally add link phrases to
`crosslinks.ts`, then run:

```bash
npm run gen:catalog
```

### Regenerating the popular-titles set

`content/popular-titles.ts` is a snapshot of the pageviews API and goes stale.
Refresh it every month or two:

```bash
npm run gen:popular-titles                  # last 90 days
npm run gen:popular-titles -- --days=180    # wider
npm run gen:popular-titles -- --dry-run
```

### Analytics

GA4 loads only after the reader accepts the consent banner
(`components/AnalyticsConsent.tsx`). A Global Privacy Control signal counts as
declining. The footer's "Cookie settings" link reopens the banner.
