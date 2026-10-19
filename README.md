# wikiqo

[wikiqo.com](https://wikiqo.com) is a Wikipedia citation generator. Paste an
article link (any language, desktop or mobile, or an `oldid` permanent link)
and get it as APA, MLA, Chicago (bibliography, footnote and author-date),
Harvard, IEEE, AMA, Vancouver, BibTeX, RIS and `{{cite web}}` wiki markup.

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

## How it works

Every route is static. The lookup runs in the reader's browser against the
MediaWiki Action API (`origin=*` CORS), so there is no server code and no
per-request cost.

| File | Role |
| --- | --- |
| `lib/citation.ts` | Parses links and formats every style. Pure; covered by `tests/citation.test.ts`. |
| `lib/wikipedia-api.ts` | Fetches the canonical title, revision id and timestamp. |
| `components/CitationGenerator.tsx` | The form, options (permanent link, access date) and copy buttons. Citations copy as rich text so italics survive a paste. |

A `?url=` query parameter pre-fills and runs a lookup, so a citation can be
shared as a link. Recent lookups are kept in `localStorage` only.

### Analytics

GA4 loads only after the reader accepts the consent banner
(`components/AnalyticsConsent.tsx`). A Global Privacy Control signal counts as
declining. The footer's "Cookie settings" link reopens the banner.
