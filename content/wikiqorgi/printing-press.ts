import type { RewrittenArticle } from "./types";

export const printingPress: RewrittenArticle = {
  slug: "printing-press",
  title: "The printing press: an invention whose consequences nobody wanted",
  sourceTitle: "Printing press",
  dek: "Gutenberg set out to sell Bibles more cheaply. He ended up shattering the institution that commissioned them.",
  standfirst:
    "The printing press is the standard example of a technology whose effects ran far beyond its purpose. It was a business proposition — mechanise the copying of books people already bought — and within seventy years it had broken the Church's monopoly on interpretation, standardised half a dozen languages, and made cumulative science possible. Its inventor went bankrupt.",
  readingMinutes: 8,
  html: `
<h2 id="What_Gutenberg_actually_invented">What Gutenberg actually invented</h2>
<p>Printing was not new. Woodblock printing had been practised in China for centuries, movable type of clay was described by Bi Sheng around 1040, and Korea was printing with cast metal type decades before Gutenberg — the <em>Jikji</em>, printed in 1377, survives. Europe's contribution was not the idea but a manufacturing system.</p>
<p>Gutenberg's achievement, around 1450 in Mainz, was to solve several problems at once in a way that made the whole thing economic. He devised a hand mould that could cast type in enormous quantities to identical dimensions — the hard part, since letters must align perfectly or the page is unreadable. He developed a metal alloy of lead, tin and antimony that melted at a workable temperature, cast crisply, and expanded slightly on cooling to fill the mould. He formulated an oil-based ink that would adhere to metal, where the water-based inks of manuscript culture simply beaded off. And he adapted the screw press already used for wine and olives to apply even pressure across a full page.</p>
<p>The alphabet mattered too. Movable type suits a script with a few dozen characters far better than one with thousands, which is a substantial part of why the technology transformed Europe faster than it had East Asia, where woodblock printing remained competitive for good reasons.</p>
<p>Gutenberg financed the work with a loan from Johann Fust, fell behind, and lost the lawsuit. Fust took the workshop, the type and the completed Bibles, and prospered. Gutenberg's name survived; his business did not.</p>

<h2 id="The_arithmetic_of_copies">The arithmetic of copies</h2>
<p>Before printing, a book was copied by hand. A scribe might produce a substantial volume in months, and every copy consumed a skilled person's labour for that period. Books were correspondingly rare and expensive, and libraries of a few hundred volumes were remarkable.</p>
<p>Printing changed the shape of the cost, not merely its size. Setting the type for a page is laborious, but once set, the marginal cost of the two-hundredth copy is paper and ink. That is the modern structure of publishing, software and media — high fixed cost, negligible marginal cost — appearing for the first time.</p>
<p>The result was a step change in volume. By 1500, presses across Europe had produced something on the order of twenty million volumes, more books than European scribes had generated in the preceding thousand years. Prices fell by an order of magnitude within decades. Literacy, which had been a professional skill for clergy and clerks, became worth acquiring for a merchant, an artisan, a woman running a household business.</p>

<h2 id="Identical_copies_change_what_knowledge_is">Identical copies change what knowledge is</h2>
<p>The subtler effect was not abundance but <em>exactness</em>, and it may matter more.</p>
<p>Hand copying introduces errors, and errors compound across generations of copies. A scholar in Paris and one in Bologna working from the same nominal text were often working from meaningfully different documents, and could not know which differences were the author's. Correcting a text was itself a scholarly speciality.</p>
<p>Print produced hundreds of identical copies, with identical page numbers. That made it possible for the first time to cite a passage and have a distant reader find precisely the same words — a small-sounding capability that underwrites the entire apparatus of modern scholarship. It also made errors correctable at scale: a mistake found in one copy was in all of them, and could be fixed in the next edition, so texts improved over time rather than degrading. Diagrams, previously hopeless to copy accurately by hand, became reliable, which transformed anatomy, botany and engineering.</p>
<p>Elizabeth Eisenstein's argument, and the standard one since, is that this is the precondition for cumulative science. Building on others' work requires being confident about what they said.</p>

<h2 id="The_Reformation_as_a_media_event">The Reformation as a media event</h2>
<p>Luther posted his ninety-five theses in 1517, in Latin, intending an academic dispute. Within weeks they had been translated, printed and distributed across Germany; within two months, across Europe. Luther had not authorised any of it.</p>
<p>Earlier reform movements — Wycliffe, Hus — had been contained by isolating them geographically. That option no longer existed. Luther then became something new: the first author to write deliberately for the press, producing short, cheap, vernacular pamphlets in enormous numbers, illustrated with woodcuts legible to people who could not read at all. His output accounted for a substantial share of everything printed in German in the 1520s.</p>
<p>The theological core of the argument depended on the technology too. If salvation comes through scripture directly, ordinary believers need scripture in a language they read — which requires cheap vernacular Bibles, which requires presses. The Church's response, an index of prohibited books, was an attempt to restore a control that the economics had already removed.</p>

<h2 id="Languages_get_standardised">Languages get standardised</h2>
<p>Printers were businesses, and a business wants the largest possible market for one setting of type. That commercial pressure pushed toward a single written form of each language where dozens of regional variants had existed.</p>
<p>Luther's Bible translation did much to fix written German. The dialect of the London-Oxford-Cambridge region became standard English largely because that is where the presses were. Spelling, previously a matter of individual taste, converged — and froze, in English, at an unfortunate moment when pronunciation was in the middle of shifting, which is why the spelling system remains a monument to fifteenth-century speech.</p>
<p>The winners were the languages with presses. Regional tongues without a printing industry were pushed toward dialect status, a process that has repeated with every subsequent communications technology.</p>

<h2 id="What_it_teaches">What it teaches</h2>
<p>The press is worth thinking about carefully because it resists the comfortable version of technological history. Its consequences were not intended, not predicted, and not uniformly good. It spread the Reformation and it spread the wars of religion; it enabled the scientific revolution and it enabled the witch-hunting manuals that circulated in far larger numbers than any scientific text. The most printed genres of the first century were not the ones the period is remembered for.</p>
<p>Nor was the transition quick. The gap between Gutenberg's Bible and the Reformation is seventy years, and between the press and anything recognisable as a scientific revolution, longer still. Institutions and habits took generations to reorganise around the new capability, which is the part most likely to be relevant to anyone reasoning by analogy about a more recent change in how information moves.</p>
`,
};
