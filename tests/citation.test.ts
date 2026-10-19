import { describe, expect, it } from "vitest";
import { articleUrl, buildCitations, parseWikipediaLink, permanentUrl, type ArticleInfo } from "@/lib/citation";

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
});
