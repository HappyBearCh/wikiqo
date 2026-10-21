/**
 * The guide pages under /formats: one per citation style the generator
 * produces, explaining how the style works, how it handles a Wikipedia
 * article, and where it came from.
 *
 * Each guide names the citation ids from lib/citation.ts it documents, so the
 * live examples on its page and the "About this style" links in the generator
 * both come from here. Facts in `history` and `anecdotes` are backed by the
 * entries in `sources`; keep the two in step when editing.
 */

export type FormatGuide = {
  slug: string;
  /** Short name, as on the generator's tabs. */
  name: string;
  /** What the initials stand for, or a fuller title. */
  fullName: string;
  /** Ids from buildCitations() this guide covers, in display order. */
  citationIds: string[];
  /** One line for cards and the index. */
  note: string;
  /** Meta description and standfirst. */
  intro: string;
  /** Who keeps it, which edition, who uses it. */
  facts: { label: string; value: string }[];
  howItWorks: string[];
  /** How a Wikipedia article fits the style, element by element. */
  wikipedia: string[];
  history: string[];
  anecdotes: { title: string; body: string }[];
  sources: { label: string; url: string }[];
};

export const GUIDES: FormatGuide[] = [
  {
    slug: "apa",
    name: "APA",
    fullName: "American Psychological Association style",
    citationIds: ["apa"],
    note: "7th edition. Psychology, education and the social sciences.",
    intro:
      "APA style is the author–date system of the American Psychological Association, used across psychology, education, nursing, business and most of the social sciences. It began as a seven-page article in 1929 and is now a 400-page manual.",
    facts: [
      { label: "Maintained by", value: "American Psychological Association" },
      { label: "Current edition", value: "Publication Manual, 7th edition (2019)" },
      { label: "First published", value: "1929, as a journal article; first manual 1952" },
      { label: "System", value: "Author–date, alphabetical reference list" },
      { label: "Used in", value: "Psychology, education, nursing, social sciences, business" },
    ],
    howItWorks: [
      "APA is an author–date style. In the text you give the author's surname and the year in parentheses, as in (Smith, 2020), and the full details go in an alphabetical reference list at the end. The point is that a reader in the social sciences cares when a finding was published almost as much as who found it, so the year sits right beside the name.",
      "Every reference answers four questions in the same order: who (author), when (date), what (title) and where (source, such as the journal, publisher or URL). Titles of articles and web pages are in sentence case, with only the first word and proper nouns capitalised, while the title of the larger work they sit in, such as a journal or encyclopedia, is italicised.",
      "When a work has no named author, the title moves into the author position and the in-text citation uses the title instead, set in quotation marks if it is a part of something bigger. That is exactly the situation of a Wikipedia article.",
      "The 7th edition simplified several things: publisher locations were dropped, DOIs are written as https://doi.org/ links, “et al.” is used from the first citation for works with three or more authors, and the singular “they” is endorsed in your own prose.",
    ],
    wikipedia: [
      "The article title takes the author position, because the article has no single author.",
      "The date is the date of the revision you are citing, as year, month and day.",
      "“In Wikipedia” names the encyclopedia the entry sits in, italicised like the title of any reference work.",
      "APA asks for a retrieval date for pages designed to change, and drops it when you link an archived version. A permanent (oldid) link is such an archived version, so wikiqo leaves out “Retrieved …” when the permanent link is on and adds it when you cite the live article.",
      "In the text: the title in quotation marks and the year, for example (“Moon,” 2026).",
    ],
    history: [
      "In 1928 a group of editors and business managers of psychology and anthropology journals met to agree on a simple set of procedures for manuscripts. The result appeared in Psychological Bulletin in 1929 as “Instructions in regard to preparation of manuscript”, a seven-page article (pages 57–63) by Madison Bentley and five colleagues. The authors presented it as a standard for doubtful cases, not a rigid law.",
      "The guidance grew into a 32-page article in the same journal in 1944, and in 1952 the first Publication Manual of the American Psychological Association was issued as a 61-page supplement to Psychological Bulletin. Further editions followed in 1974, 1983, 1994, 2001, 2009 and 2019.",
      "The 7th edition, published in October 2019, is the current one. It is the first to treat student papers as a category of their own, with a simpler title page and no running head.",
    ],
    anecdotes: [
      {
        title: "Why APA titles are in sentence case",
        body: "The 1929 article recommended keeping capitals to a minimum because too many capital letters “increases the cost of printing and disturbs the reader”. Nearly a century later, typesetting costs nothing extra, but APA reference lists still put article titles in sentence case.",
      },
      {
        title: "A manual that had to be reprinted",
        body: "The first printing of the 6th edition in 2009 contained a run of errors, many of them in the sample papers meant to show students how a finished manuscript should look. APA published corrections and the second printing replaced the first. It is a reminder that style guides, too, need proofreading.",
      },
    ],
    sources: [
      { label: "APA Style: About APA Style", url: "https://apastyle.apa.org/about-apa-style" },
      { label: "Bentley et al. (1929), Psychological Bulletin 26(2), 57–63", url: "https://doi.org/10.1037/h0071487" },
      { label: "APA Style blog: sentence case in references", url: "https://apastyle.apa.org/blog/sentence-case-titles-references" },
      { label: "Wikipedia: APA style", url: "https://en.wikipedia.org/wiki/APA_style" },
    ],
  },
  {
    slug: "mla",
    name: "MLA",
    fullName: "Modern Language Association style",
    citationIds: ["mla"],
    note: "9th edition. Literature, languages and the humanities.",
    intro:
      "MLA style is how literature, language and cultural studies cite their sources. It grew out of a 1951 style sheet and today builds every entry from the same short list of “core elements”, which is why it copes so well with sources like Wikipedia.",
    facts: [
      { label: "Maintained by", value: "Modern Language Association of America (founded 1883)" },
      { label: "Current edition", value: "MLA Handbook, 9th edition (2021)" },
      { label: "First published", value: "MLA Style Sheet, 1951; first Handbook 1977" },
      { label: "System", value: "Author–page in the text, alphabetical works-cited list" },
      { label: "Used in", value: "English, modern languages, literature, film and cultural studies" },
    ],
    howItWorks: [
      "MLA uses short parenthetical references in the text, usually the author's surname and a page number, as in (Morrison 42), with no comma and no year. The full details go in a works-cited list in alphabetical order. Literary scholars quote closely and often, so the page number matters more to them than the year.",
      "Since the 8th edition, MLA no longer gives a separate recipe for every kind of source. Instead each entry is assembled from nine core elements in a fixed order: author, title of source, title of container, other contributors, version, number, publisher, publication date and location. A container is whatever holds the source, such as the anthology that holds a poem, the journal that holds an article, or the website that holds a page.",
      "Titles of self-contained works are italicised and titles of parts are put in quotation marks. Months longer than four letters are abbreviated (Jan., Feb., Sept.), and URLs are given without the https:// prefix.",
    ],
    wikipedia: [
      "There is no author, so the entry starts with the article title in quotation marks.",
      "Wikipedia is the container, so it is italicised.",
      "The publisher, the Wikimedia Foundation, is given because its name differs from the website's.",
      "The date is the revision date in day–month–year order with MLA's abbreviated months, and the location is the URL without https://.",
      "MLA recommends an access date for sources that change without notice, so the entry ends with “Accessed” and the day you read the article.",
      "In the text: a shortened title in quotation marks, as in (“Moon”).",
    ],
    history: [
      "The Modern Language Association was founded in 1883. William Riley Parker, who became its secretary in 1947 and also edited its journal PMLA, grew frustrated with the erratic styles of contributors. After surveying a number of journals in the field by questionnaire, he compiled the first MLA Style Sheet, published in 1951.",
      "The style sheet was revised in 1970 by John H. Fisher and others. In 1977 the MLA published the first MLA Handbook for Writers of Research Papers, edited by Joseph Gibaldi and Walter S. Achtert and aimed at students rather than journal contributors.",
      "The second edition in 1984 replaced footnotes with parenthetical citations, the biggest change in the style's history. The 8th edition of 2016 replaced source-by-source rules with the core-elements model, and the 9th edition of 2021, now simply titled MLA Handbook, refined it.",
    ],
    anecdotes: [
      {
        title: "The year footnotes disappeared",
        body: "Until 1984, students writing in MLA style put their references in footnotes or endnotes, numbered through the paper. The switch to parenthetical citations that year meant a generation of teachers had to unlearn the style they had been taught, and many older literature books still use the footnote system.",
      },
      {
        title: "One recipe for everything",
        body: "Earlier editions tried to give a model for each type of source, and every new medium needed a new rule. The 2016 edition gave up on that and taught a method instead, so that a tweet, a video game or a Wikipedia article can be cited without a dedicated example.",
      },
    ],
    sources: [
      { label: "MLA Style Center", url: "https://style.mla.org/" },
      { label: "Wikipedia: MLA Handbook", url: "https://en.wikipedia.org/wiki/MLA_Handbook" },
      { label: "Open Library: The MLA Style Sheet (1951)", url: "https://openlibrary.org/books/OL207458M" },
    ],
  },
  {
    slug: "chicago",
    name: "Chicago",
    fullName: "The Chicago Manual of Style",
    citationIds: ["chicago", "chicago-ad"],
    note: "Notes and bibliography, plus author-date. History and publishing.",
    intro:
      "The Chicago Manual of Style is the oldest and broadest of the major style guides, used by historians, publishers and editors. It offers two systems, notes and bibliography and author–date, and began as a single sheet of rules for one university press's proofreaders.",
    facts: [
      { label: "Maintained by", value: "University of Chicago Press" },
      { label: "Current edition", value: "18th edition (September 2024)" },
      { label: "First published", value: "1906" },
      { label: "Systems", value: "Notes and bibliography; author–date" },
      { label: "Used in", value: "History, the arts, publishing, many books and magazines" },
    ],
    howItWorks: [
      "Chicago offers two systems. Notes and bibliography, preferred in history and the humanities, puts a superscript number in the text and the source in a footnote or endnote, with a bibliography at the end. Author–date, preferred in the sciences and social sciences, puts (Author Year) in the text and a reference list at the end, much like APA.",
      "In notes, the first citation of a source is given in full and later ones in a shortened form. Bibliography entries invert the first author's name and use full stops between elements where notes use commas.",
      "Chicago is much more than a citation guide. Most of the manual covers grammar, punctuation, numbers, indexing and the production of books, which is why it is the house style of many publishers even when their authors cite in another system.",
      "Students often meet Chicago through Kate L. Turabian's A Manual for Writers of Research Papers, Theses, and Dissertations, which adapts Chicago for student papers. “Turabian style” is Chicago style.",
    ],
    wikipedia: [
      "Chicago treats Wikipedia as an online reference work. These are normally cited in notes rather than the bibliography, so wikiqo gives the full note, plus the short form for later notes.",
      "The note names Wikipedia, then the entry title in quotation marks. Earlier editions put “s.v.” (sub verbo, “under the word”) before the title; the 18th edition no longer recommends it.",
      "For a continually updated resource, Chicago wants the date of the latest revision rather than an edition or an access date, and allows a time stamp, so the note gives the revision's date and UTC time.",
      "If your instructor wants Wikipedia in the bibliography as well, use the same elements separated by full stops instead of commas: Wikipedia. “Moon.” Last modified ….",
      "In author–date form Wikipedia takes the author position, followed by the year, and the text citation is (Wikipedia 2026).",
    ],
    history: [
      "In the 1890s a proofreader at the University of Chicago Press prepared a single sheet of typographic rules for the university community. The sheet grew into a pamphlet, and in 1906 the press published it as a book: Manual of Style: Being a Compilation of the Typographical Rules in Force at the University of Chicago Press, to Which Are Appended Specimens of Type in Use. It ran to 203 pages, close to half of them type specimens.",
      "The 12th edition of 1969 was the most thorough revision in the manual's history, and the 13th, in 1982, was the first to carry the title The Chicago Manual of Style. The 16th edition in 2010 was the first published in print and online at the same time.",
      "The 17th edition appeared in 2017 and the 18th in September 2024. The 18th dropped the place of publication from book citations, lists up to six authors before switching to “et al.”, and retired the Latin “s.v.” for dictionary and encyclopedia entries.",
    ],
    anecdotes: [
      {
        title: "Half a book of type samples",
        body: "The 1906 first edition was as much a printer's catalogue as a style guide: alongside roughly a hundred pages of rules, it reproduced the typefaces the press had in stock, so authors could see what their book might look like.",
      },
      {
        title: "The dissertation secretary",
        body: "Kate L. Turabian was the University of Chicago's graduate dissertation secretary from 1930 to 1958, and every thesis had to pass her desk. Her short guide for students, first a pamphlet and published as a book in 1955, has sold millions of copies and made her name a byword for Chicago style.",
      },
    ],
    sources: [
      { label: "The Chicago Manual of Style Online", url: "https://www.chicagomanualofstyle.org/" },
      { label: "CMOS Shop Talk: Chicago style then and now", url: "https://cmosshoptalk.com/2023/06/20/chicago-style-then-and-now/" },
      { label: "Wikipedia: The Chicago Manual of Style", url: "https://en.wikipedia.org/wiki/The_Chicago_Manual_of_Style" },
      { label: "Wikipedia: Kate L. Turabian", url: "https://en.wikipedia.org/wiki/Kate_L._Turabian" },
      { label: "Douglas College Library: Chicago 18th ed., reference works", url: "https://guides.douglascollege.ca/Chicago18/ReferenceWorks" },
      { label: "Red Deer Polytechnic: Chicago 18th ed., encyclopedias and dictionaries", url: "https://guides.rdpolytech.ca/chicago18/citation/referencework" },
    ],
  },
  {
    slug: "harvard",
    name: "Harvard",
    fullName: "Harvard referencing (Cite Them Right)",
    citationIds: ["harvard"],
    note: "Cite Them Right, the form most UK and Australian universities teach.",
    intro:
      "Harvard is the generic name for author–date referencing in Britain, Australia and much of the world. No single body owns it; most universities follow Cite Them Right. The system itself goes back to an 1881 paper on the embryology of the garden slug.",
    facts: [
      { label: "Maintained by", value: "No single authority; Cite Them Right is the common reference" },
      { label: "Common edition", value: "Cite Them Right, 12th edition (2022)" },
      { label: "First used", value: "1881, by Edward Laurens Mark at Harvard" },
      { label: "System", value: "Author–date, alphabetical reference list" },
      { label: "Used in", value: "UK, Irish and Australian universities across most subjects" },
    ],
    howItWorks: [
      "In the text you give the author and year, and a page number when quoting: (Smith, 2020, p. 14). At the end, a reference list in alphabetical order gives the full details.",
      "Because “Harvard” is a family rather than a standard, details vary from one university to the next: where the year goes, whether titles are italicised or underlined, how “Available at:” and “Accessed:” are written. Most UK universities settle the question by following Cite Them Right by Richard Pears and Graham Shields, first published in 2004 at Northumbria University and now in its 12th edition.",
      "Online sources in Cite Them Right end with “Available at: URL (Accessed: date)”, so a reader can see both where the page was and when you looked at it.",
    ],
    wikipedia: [
      "“Wikipedia contributors” is the author, followed by the year of the revision in parentheses.",
      "The article title goes in single quotation marks, as British typography prefers, and Wikipedia, The Free Encyclopedia is italicised as the larger work.",
      "“Available at:” gives the URL and “(Accessed: …)” the day you read it, written day month year.",
      "In the text: (Wikipedia contributors, 2026).",
    ],
    history: [
      "Before the 1880s, scientific papers referred to their sources in footnotes, in no consistent form, flagged by asterisks, daggers and other printers' symbols. In 1881 Edward Laurens Mark, a zoologist and later director of Harvard's zoological laboratory, published “Maturation, fecundation, and segmentation of Limax campestris”, a long study of the garden slug. On page 194 he cited a work by author and year in parentheses and explained the system in a footnote.",
      "Contemporaries credited Mark with the idea, and the method spread through biology and then the other sciences during the twentieth century. It became known as the “Harvard system” because of where Mark taught, although Harvard University never issued it as a standard.",
      "In 1988 the physician and historian Eli Chernin traced the system's origin in the British Medical Journal, in an article titled “The ‘Harvard system’: a mystery dispelled”.",
    ],
    anecdotes: [
      {
        title: "It started with a slug",
        body: "The paper that introduced author–date citation is about the eggs of Limax campestris, a garden slug. Mark's study ran to more than 400 pages in the Bulletin of the Museum of Comparative Zoology, and the citation method buried on page 194 has outlived its science.",
      },
      {
        title: "Harvard doesn't use Harvard",
        body: "Harvard University has never published a Harvard style, and its own libraries point students to APA, MLA and Chicago. The name stuck in Britain and the Commonwealth, where it is now the default for undergraduate essays.",
      },
    ],
    sources: [
      { label: "Chernin E. The “Harvard system”: a mystery dispelled. BMJ 1988;297:1062", url: "https://www.bmj.com/content/297/6655/1062" },
      { label: "Mark EL (1881), Limax campestris, Biodiversity Heritage Library", url: "https://www.biodiversitylibrary.org/part/304379" },
      { label: "Cite Them Right Online", url: "https://www.citethemrightonline.com/" },
      { label: "Wikipedia: Parenthetical referencing", url: "https://en.wikipedia.org/wiki/Parenthetical_referencing" },
    ],
  },
  {
    slug: "asa",
    name: "ASA",
    fullName: "American Sociological Association style",
    citationIds: ["asa"],
    note: "7th edition. Sociology and related social sciences.",
    intro:
      "ASA style is the American Sociological Association's adaptation of Chicago author–date, used in sociology journals and courses. It looks like Chicago with a few habits of its own, such as keeping a retrieval date for web pages and putting the URL in parentheses.",
    facts: [
      { label: "Maintained by", value: "American Sociological Association" },
      { label: "Current edition", value: "ASA Style Guide, 7th edition (2022)" },
      { label: "First published", value: "1990s, as a separate style guide" },
      { label: "System", value: "Author–date, alphabetical reference list" },
      { label: "Used in", value: "Sociology, criminology, demography" },
    ],
    howItWorks: [
      "In the text you give the surname and year without a comma, as in (Durkheim 1897), adding a page number after a colon when you quote: (Durkheim 1897:42). The reference list is alphabetical and uses full first names where they are known.",
      "References follow Chicago author–date: author, year, title in quotation marks, the larger work in italics. Web pages end with “Retrieved Month Day, Year”, followed by the URL in parentheses.",
      "ASA style also asks for full names of journals rather than abbreviations, and for the issue number in parentheses after the volume.",
    ],
    wikipedia: [
      "“Wikipedia contributors” is the author, followed by the year of the revision.",
      "The article title is in quotation marks and Wikipedia, The Free Encyclopedia is italicised as the website.",
      "The entry ends “Retrieved October 21, 2026 (URL).”, with the date you read the article.",
      "In the text: (Wikipedia contributors 2026), with no comma.",
    ],
    history: [
      "The association was founded in 1905 as the American Sociological Society. For most of the twentieth century its journals, starting with the American Sociological Review from 1936, followed editorial instructions printed for contributors rather than a book of their own.",
      "Those instructions were collected into a separate ASA Style Guide in the 1990s. Its second edition appeared in 1997, the third in 2007 and the sixth in 2019. The 7th edition of 2022 is the current one, with expanded guidance on electronic, digital and social-media sources.",
      "From the start the guide was built on The Chicago Manual of Style, and it refers readers to Chicago for anything it doesn't cover.",
    ],
    anecdotes: [
      {
        title: "A name change in 1959",
        body: "The American Sociological Society became the American Sociological Association in 1959, after a membership vote. No official reason was recorded beyond the vote, but the sociologist Irving Louis Horowitz, writing in 1964, observed that a majority had preferred being known as ASA's rather than ASS's.",
      },
    ],
    sources: [
      { label: "ASA Style Guide (asanet.org)", url: "https://www.asanet.org/publications/journals/asa-style-guide/" },
      { label: "Framingham State University: ASA 7th edition guide", url: "https://library.framingham.edu/c.php?g=524800&p=10003963" },
      { label: "Wikipedia: ASA style", url: "https://en.wikipedia.org/wiki/ASA_style" },
      { label: "ASA: History of the association", url: "https://www.asanet.org/about/history-of-asa" },
    ],
  },
  {
    slug: "ieee",
    name: "IEEE",
    fullName: "Institute of Electrical and Electronics Engineers style",
    citationIds: ["ieee"],
    note: "Engineering, computer science and electronics.",
    intro:
      "IEEE style is the numbered citation system of the world's largest technical professional society. References are numbered in the order you first cite them, and the number in square brackets stands in for the source in the text.",
    facts: [
      { label: "Maintained by", value: "IEEE (Institute of Electrical and Electronics Engineers)" },
      { label: "Current guide", value: "IEEE Editorial Style Manual and IEEE Reference Guide" },
      { label: "Society founded", value: "1963, from the AIEE (1884) and the IRE (1912)" },
      { label: "System", value: "Numbered in order of citation, [1]" },
      { label: "Used in", value: "Electrical engineering, computer science, electronics" },
    ],
    howItWorks: [
      "Each source gets a number in square brackets the first time you cite it, [1], [2], [3], and keeps that number every time it is cited again. The reference list at the end is in numerical order, not alphabetical.",
      "The number can be used as a noun in the sentence (“as shown in [3]”), which suits engineering writing, where papers often build on a long chain of earlier results. Ranges are written [4]–[7].",
      "Authors are given as initials then surname, article titles in quotation marks, and the names of journals, books and websites in italics. Months are abbreviated to three letters with a full stop, except May.",
      "Online sources carry the label “[Online]. Available:” before the URL, and an access date when the content may change.",
    ],
    wikipedia: [
      "The entry begins with the number, [1], and the article title in quotation marks.",
      "Wikipedia, The Free Encyclopedia is italicised as the larger work, followed by the revision date.",
      "“Accessed:” gives the day you read the article and “[Online]. Available:” the URL.",
      "In the text: [1], or whatever number the article has in your list.",
    ],
    history: [
      "The American Institute of Electrical Engineers was founded in 1884 to serve the new profession of electrical power. The Institute of Radio Engineers followed in 1912 as wireless grew. By the 1950s electronics had blurred the line between the two, and after member votes in 1962 they merged on 1 January 1963 to form the IEEE.",
      "IEEE publishes a large share of the world's literature in electrical engineering and computer science, and its numbered style came with the journals. The IEEE Editorial Style Manual and the IEEE Reference Guide set out the rules for authors.",
    ],
    anecdotes: [
      {
        title: "Edison was there at the start",
        body: "The founders of the AIEE in 1884 included Thomas Edison, Elihu Thomson, Edwin Houston and Edward Weston. Its first technical meeting was held on 7–8 October 1884 at the Franklin Institute in Philadelphia, during the International Electrical Exhibition.",
      },
    ],
    sources: [
      { label: "ETHW: Chronology of the AIEE and IRE merger", url: "https://ethw.org/Chronology_of_AIEE_and_IRE_Merger" },
      { label: "McGill Library: IEEE style guide", url: "https://libraryguides.mcgill.ca/citations/ieee" },
      { label: "Wikipedia: American Institute of Electrical Engineers", url: "https://en.wikipedia.org/wiki/American_Institute_of_Electrical_Engineers" },
    ],
  },
  {
    slug: "acs",
    name: "ACS",
    fullName: "American Chemical Society style",
    citationIds: ["acs"],
    note: "Chemistry and chemical engineering.",
    intro:
      "ACS style is the citation style of the American Chemical Society, used in chemistry papers, lab reports and theses. It lets authors choose between superscript numbers, italic numbers in parentheses, and author–date, and is known for its compact reference format.",
    facts: [
      { label: "Maintained by", value: "American Chemical Society (founded 1876)" },
      { label: "Current guide", value: "ACS Guide to Scholarly Communication (2020, online)" },
      { label: "First published", value: "The ACS Style Guide, 1986" },
      { label: "Systems", value: "Superscript numbers, italic numbers, or author–date" },
      { label: "Used in", value: "Chemistry, biochemistry, chemical engineering" },
    ],
    howItWorks: [
      "ACS allows three ways to cite in the text: superscript numbers,¹ italic numbers in parentheses (1), or author and year (Smith, 2020). With numbers, references are listed in the order they are first cited; with author–date, alphabetically. The journal you write for decides which.",
      "References are terse. Journal titles are abbreviated following the CAS Source Index (J. Am. Chem. Soc.), the year is in bold, the volume in italics, and article titles are often left out altogether in journal references.",
      "For web pages, the title of the page comes first, then the website's name in italics, the date and the URL. Content that can change, such as a wiki, gets an access date at the end in the form (accessed 2026-10-21).",
    ],
    wikipedia: [
      "The entry starts with its number in parentheses and the article title.",
      "Wikipedia is italicised as the website's name, followed by the date of the revision.",
      "The URL is followed by an access date in year-month-day form, because a wiki can change after you cite it.",
      "In the text: a superscript number, such as ¹.",
    ],
    history: [
      "The American Chemical Society was founded in New York in 1876 and began publishing the Journal of the American Chemical Society in 1879. Like most societies, it set out rules for authors in its journals long before it published a book on them.",
      "The ACS Style Guide: A Manual for Authors and Editors, edited by Janet S. Dodd, appeared in 1986. A second edition followed in 1997 and a third, edited by Anne M. Coghill and Lorrin R. Garson, in 2006.",
      "In 2020 the guide was relaunched as the ACS Guide to Scholarly Communication, an expanded online work that covers open access, preprints, safety information and intellectual property as well as citation.",
    ],
    anecdotes: [
      {
        title: "Chemists abbreviate everything",
        body: "Chemistry cites more journals than almost any other field, so ACS style abbreviates their names following a list kept by the Chemical Abstracts Service. The Journal of the American Chemical Society shrinks to J. Am. Chem. Soc., and a full reference to an article can fit on a single line.",
      },
    ],
    sources: [
      { label: "ACS Axial: the ACS Guide to Scholarly Communication", url: "https://axial.acs.org/publishing/acs-style-guide-acs-guide-to-scholarly-communication" },
      { label: "Auckland University of Technology: ACS websites", url: "https://auckland.libguides.com/acs/website" },
      { label: "UC Berkeley Library: ACS style", url: "https://guides.lib.berkeley.edu/acs-style" },
    ],
  },
  {
    slug: "ama",
    name: "AMA",
    fullName: "American Medical Association style",
    citationIds: ["ama"],
    note: "11th edition. Medicine and the health sciences.",
    intro:
      "AMA style is the house style of JAMA and the other journals of the American Medical Association, and the usual choice for medical and health-science papers in the United States. It cites with superscript numbers and keeps references short.",
    facts: [
      { label: "Maintained by", value: "American Medical Association (JAMA Network)" },
      { label: "Current edition", value: "AMA Manual of Style, 11th edition (2020)" },
      { label: "First published", value: "October 1962" },
      { label: "System", value: "Superscript numbers in order of citation" },
      { label: "Used in", value: "Medicine, nursing, pharmacy, public health" },
    ],
    howItWorks: [
      "Sources are numbered in the order they are first cited, and the number is set as a superscript after the fact it supports: “Hypertension affects nearly half of adults.¹” The superscript goes outside full stops and commas, and the reference list is in numerical order.",
      "Authors are listed by surname and initials without full stops (Smith JA). Up to six authors are named; with more, the first three are given and then “et al.” Journal titles are abbreviated as in PubMed and italicised.",
      "Web pages are cited with the page title, the website name in italics, the publication or update date, the access date and the URL.",
    ],
    wikipedia: [
      "With no author, the entry starts with the article title.",
      "Wikipedia is italicised as the website name.",
      "“Updated” gives the revision date and “Accessed” the day you read it, followed by the URL.",
      "In the text: a superscript number, such as ¹.",
    ],
    history: [
      "The AMA was founded in 1847 and has published JAMA since 1883. The first edition of its editorial manual, a booklet of about 70 pages written by the JAMA editor John H. Talbott for the AMA's own Scientific Publications Division, appeared in October 1962. A second edition followed in 1963.",
      "Outside authors and editors soon adopted it. The seventh edition of 1981 was retitled Manual for Authors & Editors and was the first produced by an outside publisher. From the eighth edition on, a committee of editors from JAMA and the Archives journals has written it, with external peer review.",
      "The 11th edition, published in 2020 by Oxford University Press and available online, runs to about 1,200 pages.",
    ],
    anecdotes: [
      {
        title: "From 70 pages to 1,200",
        body: "The 1962 booklet was written for staff, not the public. Sixty years later the manual is about seventeen times as long, covering statistics, ethics, units of measure and nomenclature for genes and drugs as well as references.",
      },
    ],
    sources: [
      { label: "AMA Style Insider: a blueprint for science editing", url: "https://amastyleinsider.com/2019/11/21/a-blueprint-for-science-editing" },
      { label: "AMA Manual of Style online", url: "https://www.amamanualofstyle.com/" },
      { label: "Wikipedia: AMA Manual of Style", url: "https://en.wikipedia.org/wiki/AMA_Manual_of_Style" },
    ],
  },
  {
    slug: "vancouver",
    name: "Vancouver",
    fullName: "Vancouver style (ICMJE and NLM)",
    citationIds: ["vancouver"],
    note: "Numbered references for biomedical journals.",
    intro:
      "Vancouver is the numbered reference style used by most biomedical journals worldwide. It is named after the Canadian city where a small group of medical editors met in 1978 to agree on a common format for manuscripts.",
    facts: [
      { label: "Maintained by", value: "ICMJE recommendations; details in NLM's Citing Medicine" },
      { label: "Detailed guide", value: "Citing Medicine, 2nd edition (2007, updated online)" },
      { label: "First published", value: "1979, after the 1978 Vancouver meeting" },
      { label: "System", value: "Numbered in order of citation" },
      { label: "Used in", value: "Medicine and biomedical science worldwide" },
    ],
    howItWorks: [
      "References are numbered in the order they are first cited, and the number appears in the text in brackets, parentheses or superscript, depending on the journal. The reference list is in numerical order.",
      "The format comes from the US National Library of Medicine, which runs PubMed. Punctuation is minimal: authors as surname and initials without full stops, abbreviated journal titles, and dates written year month day, as in 2026 Oct 3.",
      "Electronic sources are marked with a medium designator such as [Internet] after the title, and carry a “cited” date in square brackets for the day you consulted them.",
    ],
    wikipedia: [
      "“Wikipedia contributors” stands in the author position.",
      "The article title is followed by [Internet] to show it is an online source.",
      "Wikipedia, The Free Encyclopedia is the publisher, followed by the revision date and time in year–month–day order.",
      "“[cited …]” gives the day you read it, and “Available from:” the URL.",
      "In the text: a number, such as (1).",
    ],
    history: [
      "In 1978 a small group of editors of general medical journals met informally in Vancouver, British Columbia, to set guidelines for the format of manuscripts submitted to their journals. They became known as the Vancouver Group.",
      "Their Uniform Requirements for Manuscripts Submitted to Biomedical Journals were first published in 1979, including reference formats developed by the National Library of Medicine. The group grew into the International Committee of Medical Journal Editors (ICMJE), which widened its concerns to authorship, conflicts of interest and publication ethics.",
      "In 2013 the document was renamed the Recommendations for the Conduct, Reporting, Editing, and Publication of Scholarly Work in Medical Journals. For the fine detail of references, it points to Citing Medicine, the NLM's style guide, whose second edition appeared in 2007 and is kept up to date online.",
    ],
    anecdotes: [
      {
        title: "A style named after a meeting",
        body: "Most styles are named after a society, a university or a journal. Vancouver is named after the city where an informal meeting of a few editors happened to take place, and the name has stuck for more than four decades.",
      },
    ],
    sources: [
      { label: "ICMJE: Recommendations", url: "https://www.icmje.org/recommendations/" },
      { label: "NLM: Citing Medicine, 2nd edition", url: "https://www.ncbi.nlm.nih.gov/books/NBK7256/" },
      { label: "Wikipedia: Vancouver system", url: "https://en.wikipedia.org/wiki/Vancouver_system" },
    ],
  },
  {
    slug: "cse",
    name: "CSE",
    fullName: "Council of Science Editors style",
    citationIds: ["cse"],
    note: "9th edition. Biology and the natural sciences.",
    intro:
      "CSE style, from the Council of Science Editors' manual Scientific Style and Format, is used in biology and the other natural sciences. It is unusual in offering three citation systems in one manual, and in writing dates year first, as scientists do.",
    facts: [
      { label: "Maintained by", value: "Council of Science Editors" },
      { label: "Current edition", value: "Scientific Style and Format, 9th edition (2024)" },
      { label: "First published", value: "1960, by the Conference of Biology Editors" },
      { label: "Systems", value: "Citation–sequence, citation–name, name–year" },
      { label: "Used in", value: "Biology, ecology, the life and earth sciences" },
    ],
    howItWorks: [
      "CSE offers three systems. In citation–sequence, sources are numbered in the order they are first cited. In citation–name, the reference list is alphabetised first and the numbers follow that order. In name–year, the text gives (Author Year) and the list is alphabetical. wikiqo uses citation–sequence, the most common in student work.",
      "Punctuation is minimal: no italics or quotation marks for titles of articles or web pages, authors as surname and initials, and dates written year, abbreviated month and day without full stops, as in 2026 Oct 3.",
      "Web pages carry an “updated” date in square brackets when the page shows one, and an “accessed” date when the content may change.",
    ],
    wikipedia: [
      "The entry begins with its number and the article title, with no quotation marks.",
      "Wikipedia, The Free Encyclopedia names the publisher.",
      "The revision date is the date the page was updated, in square brackets. When you cite the live article rather than a permanent link, the access date goes in the same brackets.",
      "In the text: a superscript number, such as ¹.",
    ],
    history: [
      "The organisation was founded in 1957 as the Conference of Biology Editors, set up by the American Institute of Biological Sciences with funding from the National Science Foundation. It issued its first style manual in 1960.",
      "As members from other sciences joined, it became the Council of Biology Editors, and in 1994 its manual was relaunched as Scientific Style and Format, the first edition to cover the physical sciences as well as biology. The organisation took its current name, Council of Science Editors, on 1 January 2000.",
      "The 9th edition of 2024 simplified web citations and dropped the place of publication from references.",
    ],
    anecdotes: [
      {
        title: "Dates the way a lab writes them",
        body: "CSE writes dates largest unit first, 2026 Oct 3, the same order as a lab notebook or a sample label. It is one of the few styles where a reference sorts chronologically if you sort it as text.",
      },
    ],
    sources: [
      { label: "CSE Manual: History of Scientific Style and Format", url: "https://www.csemanual.org/info/History-of-Scientific-Style-and-Format.html" },
      { label: "CSE Citation Quick Guide", url: "https://www.csemanual.org/Tools/CSE-Citation-Quick-Guide.html" },
      { label: "Wikipedia: Council of Science Editors", url: "https://en.wikipedia.org/wiki/Council_of_Science_Editors" },
    ],
  },
  {
    slug: "iso-690",
    name: "ISO 690",
    fullName: "ISO 690, the international standard for bibliographic references",
    citationIds: ["iso690"],
    note: "The international standard behind many European styles.",
    intro:
      "ISO 690 is the International Organization for Standardization's standard for bibliographic references. Few students use it by name, but it underlies the national citation standards of many countries, from Germany and the Czech Republic to France and Spain.",
    facts: [
      { label: "Maintained by", value: "ISO technical committee 46, Information and documentation" },
      { label: "Current edition", value: "ISO 690:2021 (4th edition)" },
      { label: "First published", value: "1975" },
      { label: "Systems", value: "Name–date, numeric, or running notes" },
      { label: "Used in", value: "Theses and libraries in Europe and beyond; national standards" },
    ],
    howItWorks: [
      "ISO 690 defines which elements a reference must contain and in what order, rather than every comma. It allows three ways of linking text to references: name and date, numbers, or running notes, so publishers and universities can build their own house style on top of it.",
      "Online sources are marked with [online] after the title of the larger work. The date you consulted them is given in square brackets after “viewed” (or “cited”), and the address follows “Available from:”.",
      "Titles of whole works, such as a book or website, are italicised; titles of parts, such as an article or an entry, are not.",
    ],
    wikipedia: [
      "The entry title comes first, then “In:” and the title of the whole work, Wikipedia, The Free Encyclopedia, in italics.",
      "[online] marks it as an electronic resource, and the Wikimedia Foundation is the publisher.",
      "The revision date follows, then the day you read it in square brackets after “viewed”.",
      "“Available from:” gives the URL.",
    ],
    history: [
      "The first edition of ISO 690 was published on 1 September 1975. A second edition in 1987 added rules for patents, and in 1997 a separate part, ISO 690-2, covered electronic documents for the first time.",
      "In 2010 the two parts were revised and merged into a single standard, the third edition. The fourth, ISO 690:2021, published in June 2021, covers research datasets, software, web archives and social media.",
      "Many countries publish ISO 690 as their own standard, sometimes with national additions, which is why university citation guides in Europe often look alike even when they have different names.",
    ],
    anecdotes: [
      {
        title: "A standard for writing standards' references",
        body: "ISO 690 is maintained by the same committee that standardises library work, from ISBNs (ISO 2108) to transliteration schemes. Bibliographic references are treated as data to be exchanged between libraries and databases, which explains its focus on elements and order rather than typography.",
      },
    ],
    sources: [
      { label: "Wikipedia: ISO 690", url: "https://en.wikipedia.org/wiki/ISO_690" },
    ],
  },
  {
    slug: "oscola",
    name: "OSCOLA",
    fullName: "Oxford University Standard for Citation of Legal Authorities",
    citationIds: ["oscola"],
    note: "5th edition. Law in the UK and much of the Commonwealth.",
    intro:
      "OSCOLA is the standard way to cite legal sources in the United Kingdom, used by law schools, journals and many courts. It cites in footnotes with as little punctuation as possible, and its fifth edition, published in 2026, stopped using “ibid”.",
    facts: [
      { label: "Maintained by", value: "Faculty of Law, University of Oxford" },
      { label: "Current edition", value: "5th edition (2026), edited by James Goudkamp" },
      { label: "First published", value: "2000, devised by Peter Birks" },
      { label: "System", value: "Footnotes, with tables of cases and legislation" },
      { label: "Used in", value: "Law in the UK, Ireland and other Commonwealth countries" },
    ],
    howItWorks: [
      "Every reference goes in a footnote, marked by a superscript number in the text, and each footnote ends with a full stop. Longer works add a bibliography, plus separate tables listing the cases and legislation cited.",
      "OSCOLA uses minimal punctuation: no full stops in abbreviations (eg, ie, edn) and as few commas as possible. Case names are italicised, titles of articles and web pages go in single quotation marks, and dates and publishers sit in round brackets.",
      "For websites, the 5th edition asks for the author, the title in single quotation marks, the name of the website in italics and the date in round brackets, then the address in angle brackets. Persistent links are preferred; when you give one, no access date is needed. Otherwise the citation ends with the date you accessed the page.",
    ],
    wikipedia: [
      "There is no author, so the footnote starts with the article title in single quotation marks.",
      "Wikipedia is the website's name, in italics, with the revision date in round brackets.",
      "The URL goes in angle brackets. A permanent (oldid) link is a persistent link, so wikiqo omits the access date when it is on and adds “accessed …” when you cite the live article.",
      "OSCOLA discourages citing Wikipedia in legal writing, so check whether a primary source would serve better.",
    ],
    history: [
      "OSCOLA was devised by Professor Peter Birks in 2000, in consultation with students and academics at the Oxford Law Faculty. Further editions followed in 2002 (by Birks), 2004 (by Timothy Endicott and Sandra Meredith) and 2012 (by Donal Nolan and Sandra Meredith). The 2012 fourth edition remained current for fourteen years.",
      "The fifth edition, edited by James Goudkamp with Donal Nolan as consultant editor, was published by Hart in spring 2026 and made freely available online by the Faculty at the same time. It removed “ibid”, added guidance on social media, podcasts and generative AI, encouraged persistent links for web sources, and folded the international law supplement of 2006 back into the main text.",
    ],
    anecdotes: [
      {
        title: "Two golden rules",
        body: "The introduction to OSCOLA states that there are two golden rules for citing legal authorities: one is consistency, the other is consideration for the reader. The whole standard is meant as an application of those two ideas.",
      },
      {
        title: "Goodbye, ibid",
        body: "Generations of law students learned to write “ibid” for a source cited in the footnote just before. The fifth edition dropped it in favour of short forms, and in 2026 the new edition won the Wallace Breem Memorial Award.",
      },
    ],
    sources: [
      { label: "Oxford Law Faculty: OSCOLA", url: "https://www.law.ox.ac.uk/oscola" },
      { label: "Oxford Law Faculty: fifth edition published", url: "https://www.law.ox.ac.uk/content/news/fifth-edition-oxford-university-standard-citation-legal-authorities-published" },
      { label: "Oxford Law Faculty: key changes in the fifth edition (PDF)", url: "https://www.law.ox.ac.uk/sites/default/files/2026-04/OSCOLA%20key%20changes.pdf" },
      { label: "Wikipedia: OSCOLA", url: "https://en.wikipedia.org/wiki/Oxford_Standard_for_Citation_of_Legal_Authorities" },
    ],
  },
  {
    slug: "bluebook",
    name: "Bluebook",
    fullName: "The Bluebook: A Uniform System of Citation",
    citationIds: ["bluebook"],
    note: "22nd edition. Law in the United States.",
    intro:
      "The Bluebook is the dominant system of legal citation in the United States, compiled by the editors of four law reviews. It is famous for its detail, its blue cover and the arguments it provokes, including about who wrote it in the first place.",
    facts: [
      { label: "Maintained by", value: "Harvard, Columbia, Penn and Yale law reviews" },
      { label: "Current edition", value: "22nd edition (May 2025)" },
      { label: "First published", value: "1926, as A Uniform System of Citation" },
      { label: "System", value: "Footnotes (law reviews) or in-text citations (court documents)" },
      { label: "Used in", value: "US law schools, law reviews, courts and practice" },
    ],
    howItWorks: [
      "The Bluebook has two sets of typography. Law review footnotes use roman, italics and large and small capitals, following the main rules in the white pages. Court documents and legal memoranda use plain roman and italics, following the simpler Bluepages at the front. wikiqo gives the Bluepages form, which is what most students and practitioners need.",
      "Rule 18 covers sources found online. The 22nd edition renamed them web-based sources, prefers authenticated or official copies, encourages timestamps with a time zone, and requires an archived copy (such as a Perma.cc link or a PDF kept on file) for web pages cited in law reviews.",
      "A web page is cited as the title, the website's name, the date (and time, if the page gives one), and the URL. When the page has no date, “last visited” and the day you looked at it go in parentheses at the end.",
    ],
    wikipedia: [
      "The article title is italicised, followed by Wikipedia as the website's name.",
      "When you cite a permanent link, the revision's date and UTC time go in parentheses, and the oldid URL serves as the fixed copy.",
      "When you cite the live article, “(last visited …)” with the day you read it replaces the date, because the page has no date of its own that stays true.",
      "Many courts and journals frown on citing Wikipedia for anything contestable; it is safest for uncontroversial background.",
    ],
    history: [
      "The traditional story, told by Harvard, is that Erwin Griswold, then an editor of the Harvard Law Review and later dean of Harvard Law School and US Solicitor General, wrote a short pamphlet of citation rules in 1926. It was compiled with the Columbia, Pennsylvania and Yale law reviews and sold partly to help pay for printing.",
      "The blue cover, and with it the nickname, arrived with the sixth edition in 1939. Editions now come every five years or so; the 21st appeared in 2020 and the 22nd at the end of May 2025, with the largest changes to Rule 18 in a decade.",
    ],
    anecdotes: [
      {
        title: "Who really wrote it?",
        body: "In 2016 two Yale law librarians, Fred Shapiro and Julie Graves Krishnaswami, went through the archives at Harvard and Yale and concluded that Griswold's account of the origin was “wildly erroneous”: the Bluebook's lineage leads back to a 1920 citation guide that Karl Llewellyn prepared at Yale.",
      },
      {
        title: "“Goodbye to the Bluebook”",
        body: "In 1986 Judge Richard Posner published an essay of that title in the University of Chicago Law Review, mocking the Bluebook's complexity and arguing that legal citation needed only a fraction of its rules. He returned to the attack in 2011 with “The Bluebook Blues” in the Yale Law Journal.",
      },
      {
        title: "The Indigo Book",
        body: "Because the Bluebook is copyrighted and sold, law professor Christopher Sprigman and his students at NYU wrote a free, public-domain manual implementing the same system. It was first announced as “Baby Blue's Manual of Legal Citation” and, after objections from the Harvard Law Review Association, published in 2016 as The Indigo Book.",
      },
    ],
    sources: [
      { label: "The Bluebook (legalbluebook.com)", url: "https://www.legalbluebook.com/" },
      { label: "University of Washington: Bluebook 22nd edition, Rule 18", url: "https://lib.law.uw.edu/bluebook101/22nd_18" },
      { label: "Shapiro & Krishnaswami, The Secret History of the Bluebook (Minnesota Law Review)", url: "https://minnesotalawreview.org/?p=7600" },
      { label: "Wikipedia: Bluebook", url: "https://en.wikipedia.org/wiki/Bluebook" },
      { label: "The Indigo Book", url: "https://law.resource.org/pub/us/code/blue/IndigoBook.html" },
    ],
  },
  {
    slug: "bibtex",
    name: "BibTeX",
    fullName: "BibTeX, the bibliography format for LaTeX",
    citationIds: ["bibtex"],
    note: "For LaTeX, Overleaf and reference managers.",
    intro:
      "BibTeX is not a citation style but a file format and program: you store references as structured records, and LaTeX formats them in whatever style your journal wants. It has been at version 0.99 since 1988.",
    facts: [
      { label: "Created by", value: "Oren Patashnik, with Leslie Lamport" },
      { label: "First released", value: "1985 (version 0.98)" },
      { label: "Current version", value: "0.99 series; 1.0 long planned" },
      { label: "File extension", value: ".bib" },
      { label: "Used in", value: "Mathematics, physics, computer science, any LaTeX writing" },
    ],
    howItWorks: [
      "A .bib file holds entries like @article{…}, @book{…} or @misc{…}, each with a citation key and fields such as author, title, year and url. In a LaTeX document you write \\cite{key}, and BibTeX looks the key up and produces a reference list.",
      "The visual style comes from a separate .bst file, so the same .bib entry can come out as IEEE, APA or a journal's house style without being retyped. Modern setups often use biblatex and Biber, which read the same .bib files.",
      "Braces matter: BibTeX lowercases titles in some styles, and text wrapped in {braces} is protected from that, which is why “{W}ikipedia” keeps its capital W.",
    ],
    wikipedia: [
      "wikiqo produces a @misc entry in the shape Wikipedia's own Special:CiteThisPage uses, which many LaTeX users already know.",
      "The author is {Wikipedia contributors}, in double braces so BibTeX treats it as one corporate name rather than a first and last name.",
      "The title carries “--- {W}ikipedia{,} The Free Encyclopedia”, with braces protecting the capital and the comma.",
      "The note field records the access date, and the url points at the permanent link when that option is on.",
      "Copy the entry into your .bib file and cite it with \\cite{wiki:…}.",
    ],
    history: [
      "Leslie Lamport released LaTeX in the mid-1980s, and Oren Patashnik, then a graduate student at Stanford, wrote BibTeX to go with it. The first public version, 0.98, came out in 1985 and version 0.99 in 1988.",
      "For more than twenty years, from February 1988 to March 2010, BibTeX had no new release. Version 0.99d in 2010 improved how URLs are printed and clarified the licence; small updates since have kept the 0.99 numbering.",
    ],
    anecdotes: [
      {
        title: "Version 1.0, still coming",
        body: "In a 1994 TUGboat article Patashnik described 1.0 as the long overdue final version, still under preparation. Three decades later BibTeX is still numbered 0.99, one of the most widely used pieces of software never to reach 1.0.",
      },
      {
        title: "The third author of Concrete Mathematics",
        body: "Patashnik is also the third author, with Ronald Graham and Donald Knuth, of Concrete Mathematics (1989), the textbook that grew out of Knuth's Stanford course and was itself typeset with TeX.",
      },
    ],
    sources: [
      { label: "Oren Patashnik on BibTeX, TUGboat 15(3), 1994", url: "https://tug.org/TUGboat/tb15-3/tb44patashnik.pdf" },
      { label: "Wikipedia: BibTeX", url: "https://en.wikipedia.org/wiki/BibTeX" },
    ],
  },
  {
    slug: "ris",
    name: "RIS",
    fullName: "RIS, the Research Information Systems tagged format",
    citationIds: ["ris"],
    note: "Imports into Zotero, Mendeley and EndNote.",
    intro:
      "RIS is a plain-text format for moving references between programs. Almost every reference manager and library database can read and write it, although the company and the program it was made for no longer exist.",
    facts: [
      { label: "Created by", value: "Research Information Systems, Inc." },
      { label: "Made for", value: "Reference Manager (support ended 2016)" },
      { label: "Specification", value: "No maintained official home" },
      { label: "File extension", value: ".ris" },
      { label: "Read by", value: "Zotero, Mendeley, EndNote, RefWorks, most library databases" },
    ],
    howItWorks: [
      "Each record is a block of lines. Every line starts with a two-letter tag, two spaces, a hyphen and a space, then the value: “TI  - Moon”. The first line of a record is always TY, the type of reference, and the last is always ER, end of record.",
      "Between those, tags can appear in any order: AU for an author, PY for the year, T2 for the larger work, UR for the URL, Y2 for the access date, and so on. A file can hold one record or thousands.",
      "RIS carries data, not formatting. Once imported, your reference manager formats the record in whichever citation style you choose.",
    ],
    wikipedia: [
      "TY  - ELEC marks the record as an electronic source.",
      "AU is “Wikipedia contributors”, T2 the encyclopedia's name and PB the Wikimedia Foundation.",
      "PY and DA hold the revision's year and date, Y2 the day you read the article, and LA the language edition.",
      "Save the text as a .ris file, or paste it into a reference manager's import box.",
    ],
    history: [
      "Research Information Systems was founded in 1982 by Ernest Beutler and his son Earl, and its Reference Manager was one of the first commercial reference management programs. The company designed RIS so that citation programs and databases could exchange records.",
      "Thomson Business Information, later Thomson Reuters, bought the company in 1994, and Reference Manager came to sit alongside EndNote in the same portfolio. Sales stopped at the end of 2015 and support on 31 December 2016, but by then RIS had become a lingua franca, and it remains the most common export option on publisher and library websites.",
    ],
    anecdotes: [
      {
        title: "A format without a home",
        body: "RIS is an odd case: one of the most widely deployed formats in academia, whose original specification no longer has a maintained home. Programs largely agree on it because they copy each other, and small differences in tags between them are a familiar annoyance for librarians.",
      },
    ],
    sources: [
      { label: "Wikipedia: RIS (file format)", url: "https://en.wikipedia.org/wiki/RIS_(file_format)" },
      { label: "Wikipedia: Reference Manager", url: "https://en.wikipedia.org/wiki/Reference_Manager" },
      { label: "RefDB manual: the RIS format", url: "https://refdb.sourceforge.net/manual/ch07.html" },
    ],
  },
  {
    slug: "wiki-markup",
    name: "Wiki markup",
    fullName: "{{cite web}} and Citation Style 1",
    citationIds: ["wikitext"],
    note: "A ready {{cite web}} template for editing a wiki.",
    intro:
      "Wikipedia formats its own references with templates such as {{cite web}}, part of a house style called Citation Style 1. wikiqo writes one for you, for citing a Wikipedia article on a talk page, another wiki or a sister project.",
    facts: [
      { label: "Maintained by", value: "Wikipedia's editors" },
      { label: "Style", value: "Citation Style 1 (CS1)" },
      { label: "Engine", value: "Module:Citation/CS1, in Lua, since 2013" },
      { label: "Syntax", value: "{{cite web |title= |url= |date= |access-date= }}" },
      { label: "Used in", value: "Wikipedia and other MediaWiki sites" },
    ],
    howItWorks: [
      "A citation template is a named set of parameters between double braces. You fill in what you know, such as title, url, website, date and access-date, and the template turns it into a consistently formatted reference when the page is displayed.",
      "Wrapped in <ref>…</ref> tags, the citation becomes a numbered footnote and appears in the page's references section. Different templates exist for books, journals, news and web pages, but they share parameter names and a single style, Citation Style 1.",
      "Because the citation is structured data, bots can check it, archive the URL, flag dead links and report errors such as a missing title.",
    ],
    wikipedia: [
      "title is the article's title; a pipe character in it is escaped as {{!}} so it doesn't break the template.",
      "url is the permanent or live link, website is Wikipedia and publisher the Wikimedia Foundation.",
      "date is the revision date and access-date the day you read it, both in ISO form, 2026-10-21.",
      "For editions other than English, language records which one.",
      "Wikipedia's own policy is not to cite Wikipedia as a source for its articles, since that would be circular, so use this on talk pages, project pages and other wikis.",
    ],
    history: [
      "Early Wikipedia articles cited sources however their authors liked. Citation templates spread in the mid-2000s, alongside the [citation needed] tag, as the community put more weight on its verifiability policy.",
      "By 2013 the templates had grown so complex that they were slowing down page rendering. As part of the switch to Lua scripting, editors rewrote the whole Citation Style 1 family as a single module, Module:Citation/CS1, which now powers millions of references.",
    ],
    anecdotes: [
      {
        title: "[citation needed]",
        body: "The superscript [citation needed] tag began as a template on Wikipedia in the mid-2000s and became a joke on the wider internet. In July 2007 the webcomic xkcd ran “Wikipedian Protester”, in which a man at a political rally holds up a sign reading “[citation needed]”. The tag now appears on hundreds of thousands of articles.",
      },
      {
        title: "Wikipedia tells you how to cite it",
        body: "Wikipedia has a page called Wikipedia:Citing Wikipedia and a tool, Special:CiteThisPage, on every article that produces citations in several styles, including the BibTeX shape wikiqo follows. Both advise checking the article's own sources first.",
      },
    ],
    sources: [
      { label: "Wikipedia: Help:Citation Style 1", url: "https://en.wikipedia.org/wiki/Help:Citation_Style_1" },
      { label: "Wikipedia: Template:Cite web", url: "https://en.wikipedia.org/wiki/Template:Cite_web" },
      { label: "Wikipedia: Citation needed", url: "https://en.wikipedia.org/wiki/Citation_needed" },
      { label: "xkcd 285: Wikipedian Protester", url: "https://xkcd.com/285/" },
      { label: "Wikipedia: Citing Wikipedia", url: "https://en.wikipedia.org/wiki/Wikipedia:Citing_Wikipedia" },
    ],
  },
];

/** Styles people ask about that the generator doesn't produce, and what to use instead. */
export const OTHER_STYLES: { name: string; note: string; seeSlug?: string }[] = [
  { name: "Turabian", note: "Chicago adapted for student papers.", seeSlug: "chicago" },
  { name: "NLM", note: "The National Library of Medicine's format, which Vancouver follows.", seeSlug: "vancouver" },
  { name: "MHRA", note: "Modern Humanities Research Association; footnote style used in British arts and humanities." },
  { name: "APSA", note: "American Political Science Association; an author–date style close to Chicago.", seeSlug: "chicago" },
  { name: "AAA", note: "American Anthropological Association; Chicago author–date with small changes.", seeSlug: "chicago" },
  { name: "SBL", note: "Society of Biblical Literature; Chicago notes for biblical and religious studies.", seeSlug: "chicago" },
  { name: "DIN ISO 690, GOST", note: "National standards in Germany, Russia and elsewhere, built on ISO 690.", seeSlug: "iso-690" },
  { name: "ALWD", note: "The ALWD Guide to Legal Citation, a US alternative to the Bluebook.", seeSlug: "bluebook" },
];

const BY_SLUG = new Map(GUIDES.map((g) => [g.slug, g]));
const BY_CITATION = new Map(GUIDES.flatMap((g) => g.citationIds.map((id) => [id, g] as const)));

export function getGuide(slug: string): FormatGuide | undefined {
  return BY_SLUG.get(slug);
}

/** The guide that documents a citation id from buildCitations(). */
export function guideForCitation(id: string): FormatGuide | undefined {
  return BY_CITATION.get(id);
}
