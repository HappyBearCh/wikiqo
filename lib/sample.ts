import { articleUrl, buildCitations, permanentUrl, type ArticleInfo, type Citation } from "@/lib/citation";

/**
 * A real revision of "Moon", so the permanent link in the worked examples on
 * the home page and the format guides opens what it claims to. The access date
 * is fixed so the pages don't change per build.
 */
export const SAMPLE: ArticleInfo = {
  lang: "en",
  title: "Moon",
  revisionId: 1266356498,
  revisionTimestamp: "2024-12-31T06:13:09Z",
};
const SAMPLE_ACCESSED = new Date(2025, 0, 15);

/** Hides which of the two links a citation uses, to compare everything else. */
const withoutLink = (text: string) =>
  [permanentUrl(SAMPLE), articleUrl(SAMPLE)].reduce((t, u) => t.replace(u.replace(/^https:\/\//, ""), "URL"), text);

/** The sample citations for some ids, with the live-article form only where it differs. */
export function sampleCitations(ids: string[]): { caption: string; citation: Citation }[] {
  const permanent = buildCitations(SAMPLE, { permalink: true, accessed: SAMPLE_ACCESSED });
  const live = buildCitations(SAMPLE, { permalink: false, accessed: SAMPLE_ACCESSED });
  return ids.flatMap((id) => {
    const p = permanent.find((c) => c.id === id)!;
    const l = live.find((c) => c.id === id)!;
    const shown = [{ caption: "With a permanent link to the revision", citation: p }];
    if (withoutLink(p.text) !== withoutLink(l.text)) shown.push({ caption: "With the live article", citation: l });
    return shown;
  });
}
