import { describe, expect, it } from "vitest";
import { articleUrl, buildCitations, parseWikipediaLink, permanentUrl, type ArticleInfo } from "@/lib/citation";
import { GUIDES, guideForCitation } from "@/lib/formats";

describe("parseWikipediaLink", () => {
  it.each([
    ["https://en.wikipedia.org/wiki/Ada_Lovelace", { lang: "en", title: "Ada Lovelace" }],
    ["en.wikipedia.org/wiki/Ada_Lovelace#Early_life", { lang: "en", title: "Ada Lovelace" }],
    ["https://en.m.wikipedia.org/wiki/Moon", { lang: "en", title: "Moon" }],
    ["https://de.wikipedia.org/wiki/K%C3%B6ln", { lang: "de", title: "Köln" }],
    ["https://zh-yue.wikipedia.org/wiki/香港", { lang: "zh-yue", title: "香港" }],
    ["https://en.wikipedia.org/wiki/AC/DC", { lang: "en", title: "AC/DC" }],
    [
      "https://en.wikipedia.org/w/index.php?title=Moon&oldid=1266356498",
      { lang: "en", title: "Moon", oldid: 1266356498 },
    ],
    ["https://en.wikipedia.org/w/index.php?oldid=42", { lang: "en", oldid: 42 }],
    ["  Photosynthesis ", { lang: "en", title: "Photosynthesis" }],
  ])("reads %s", (input, expected) => {
    expect(parseWikipediaLink(input)).toEqual({ oldid: undefined, title: undefined, ...expected });
  });

  it.each(["", "https://example.com/wiki/Moon", "https://www.wikipedia.org/", "https://en.wikipedia.org/"])(
    "rejects %j",
    (input) => expect(parseWikipediaLink(input)).toBeNull(),
  );
});

const info: ArticleInfo = {
  lang: "en",
  title: "Ada Lovelace",
  revisionId: 1234,
  revisionTimestamp: "2024-05-03T14:22:00Z",
};
const accessed = new Date(2026, 9, 19);
const byId = (permalink: boolean) =>
  Object.fromEntries(buildCitations(info, { permalink, accessed }).map((c) => [c.id, c]));

describe("buildCitations", () => {
  it("links the exact revision by default", () => {
    expect(permanentUrl(info)).toBe("https://en.wikipedia.org/w/index.php?title=Ada_Lovelace&oldid=1234");
    expect(byId(true).apa.text).toBe(
      "Ada Lovelace. (2024, May 3). In Wikipedia. https://en.wikipedia.org/w/index.php?title=Ada_Lovelace&oldid=1234",
    );
  });

  it("adds a retrieval date to APA when citing the live article", () => {
    expect(byId(false).apa.text).toBe(
      "Ada Lovelace. (2024, May 3). In Wikipedia. Retrieved October 19, 2026, from https://en.wikipedia.org/wiki/Ada_Lovelace",
    );
  });

  it("formats MLA with abbreviated months and no scheme", () => {
    expect(byId(false).mla.text).toBe(
      "“Ada Lovelace.” Wikipedia, Wikimedia Foundation, 3 May 2024, en.wikipedia.org/wiki/Ada_Lovelace. Accessed 19 Oct. 2026.",
    );
  });

  it("italicises the container and escapes the title", () => {
    const html = buildCitations({ ...info, title: "<b>&" }, { permalink: false, accessed }).find((c) => c.id === "mla")!.html;
    expect(html).toContain("<i>Wikipedia</i>");
    expect(html).toContain("“&lt;b&gt;&amp;.”");
    expect(html).not.toContain("<b>");
  });

  it("doesn't double up a title's own punctuation", () => {
    const apa = buildCitations({ ...info, title: "Who Framed Roger Rabbit?" }, { permalink: false, accessed })[0];
    expect(apa.text.startsWith("Who Framed Roger Rabbit? (2024")).toBe(true);
  });

  it("produces machine-readable BibTeX and RIS", () => {
    const { bibtex, ris } = byId(true);
    expect(bibtex.text).toMatch(/^@misc\{wiki:ada_lovelace_2024,/);
    expect(bibtex.text).toContain('note = "[Online; accessed 19-October-2026]"');
    expect(ris.text.split("\n")[0]).toBe("TY  - ELEC");
    expect(ris.text).toContain("Y2  - 2026/10/19");
  });

  it("builds a cite web template", () => {
    expect(byId(false).wikitext.text).toBe(
      `{{cite web |title=Ada Lovelace |url=${articleUrl(info)} |website=Wikipedia |publisher=Wikimedia Foundation |date=2024-05-03 |access-date=2026-10-19}}`,
    );
  });

  it("formats ASA with a retrieval date and the URL in parentheses", () => {
    expect(byId(false).asa.text).toBe(
      "Wikipedia contributors. 2024. “Ada Lovelace.” Wikipedia, The Free Encyclopedia. Retrieved October 19, 2026 (https://en.wikipedia.org/wiki/Ada_Lovelace).",
    );
  });

  it("formats ACS with an ISO access date", () => {
    expect(byId(false).acs.text).toBe(
      "(1) Ada Lovelace. Wikipedia, May 3, 2024. https://en.wikipedia.org/wiki/Ada_Lovelace (accessed 2026-10-19).",
    );
  });

  it("gives CSE an access date only for the live article", () => {
    expect(byId(false).cse.text).toBe(
      "1. Ada Lovelace. Wikipedia, The Free Encyclopedia; [updated 2024 May 3; accessed 2026 Oct 19]. https://en.wikipedia.org/wiki/Ada_Lovelace",
    );
    expect(byId(true).cse.text).toContain("[updated 2024 May 3]. https://");
  });

  it("formats ISO 690", () => {
    expect(byId(true).iso690.text).toBe(
      `Ada Lovelace. In: Wikipedia, The Free Encyclopedia [online]. Wikimedia Foundation, 3 May 2024 [viewed 19 October 2026]. Available from: ${permanentUrl(info)}`,
    );
  });

  it("drops the OSCOLA access date for a persistent link", () => {
    expect(byId(true).oscola.text).toBe(`‘Ada Lovelace’ (Wikipedia, 3 May 2024) <${permanentUrl(info)}>.`);
    expect(byId(false).oscola.text).toBe(
      "‘Ada Lovelace’ (Wikipedia, 3 May 2024) <https://en.wikipedia.org/wiki/Ada_Lovelace> accessed 19 October 2026.",
    );
  });

  it("dates a Bluebook revision and marks the live article last visited", () => {
    expect(byId(true).bluebook.text).toBe(`Ada Lovelace, Wikipedia (May 3, 2024, 14:22 UTC), ${permanentUrl(info)}.`);
    expect(byId(false).bluebook.text).toBe(
      "Ada Lovelace, Wikipedia, https://en.wikipedia.org/wiki/Ada_Lovelace (last visited Oct. 19, 2026).",
    );
    expect(byId(false).bluebook.html.startsWith("<i>Ada Lovelace</i>,")).toBe(true);
  });
});

describe("format guides", () => {
  it("documents every citation the generator produces, once", () => {
    const ids = buildCitations(info, { permalink: true, accessed }).map((c) => c.id);
    for (const id of ids) expect(guideForCitation(id), id).toBeDefined();
    const documented = GUIDES.flatMap((g) => g.citationIds);
    expect(new Set(documented).size).toBe(documented.length);
    expect(documented.every((id) => ids.includes(id))).toBe(true);
  });

  it("has unique slugs", () => {
    expect(new Set(GUIDES.map((g) => g.slug)).size).toBe(GUIDES.length);
  });
});
