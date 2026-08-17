import type { RewrittenArticle } from "./types";

export const encyclopedias: RewrittenArticle = {
  slug: "encyclopedias",
  title: "Encyclopedias: the recurring attempt to hold everything at once",
  sourceTitle: "Encyclopedia",
  dek: "Every generation builds one, every one goes out of date, and the alphabet was a radical innovation.",
  standfirst:
    "The idea of collecting all knowledge in one work is old, persistent, and repeatedly defeated by the same two problems: knowledge grows faster than the book, and any arrangement of it embeds a claim about how the world is organised. The solutions adopted at each attempt — alphabetical order, cross-references, paid contributors, continuous revision — were each controversial when introduced and each look obvious now.",
  readingMinutes: 7,
  html: `
<h2 id="Before_alphabetical">Arrangement was the first fight</h2>
<p>Pliny the Elder's <em>Natural History</em>, finished around AD 77, is the earliest surviving work recognisably of this kind: thirty-seven books, drawing on hundreds of sources he named — an unusual courtesy at the time — covering astronomy, geography, zoology, botany, medicine and minerals. It was copied and consulted for fifteen centuries, and a good deal of it is wrong in ways later readers took on trust for far too long.</p>
<p>Everything through the medieval period was arranged thematically, and the theme was rarely neutral. Works began with God, descended through the heavens, and worked down to minerals and manual crafts. The order was an argument about the structure of creation, and looking something up required knowing where in that hierarchy it belonged.</p>
<p>Alphabetical arrangement was resisted precisely because it discards this. Ordering entries by the accident of their spelling treats the sacred and the trivial identically, and to critics it looked like an abdication of the compiler's duty to explain how things relate. It won because it is the only arrangement a reader can use without already understanding the subject — which is exactly the reader an encyclopedia exists for.</p>

<h2 id="The_encyclopedie">The one that was a political act</h2>
<p>Diderot and d'Alembert's <em>Encyclopédie</em>, published in Paris between 1751 and 1772, ran to twenty-eight volumes with over seventy thousand articles and some three thousand plates, written by more than a hundred contributors including Voltaire, Rousseau and Montesquieu.</p>
<p>Its stated aim was to change the way people think, and it pursued this in ways that got it suppressed twice, condemned by the Pope, and continued in semi-clandestine conditions with a publisher who quietly censored the later volumes without telling Diderot.</p>
<p>Two features made it dangerous. It treated the mechanical arts with the same seriousness as theology, with plates documenting how glass was blown, paper made and stockings knitted — a systematic assertion that craft knowledge is knowledge. And it used cross-references as a weapon: an innocuous article would refer the reader to another that undercut it, so that orthodox statements about religion pointed toward entries on superstition and credulity. The subversion was in the apparatus rather than the text, which is how it passed censors reading the entries one at a time.</p>
<p>Its organising diagram derived all knowledge from human faculties — memory, reason, imagination — rather than from divine order. Placing theology as a branch of human reasoning, in a table at the front of the first volume, was the whole argument stated once and then not repeated.</p>

<h2 id="Britannica">The commercial century</h2>
<p><em>Encyclopædia Britannica</em> began in Edinburgh in 1768 as a three-volume response, deliberately less radical, and became the dominant English-language work for two hundred years. Its structure shifted over editions between long treatises by named authorities and short factual entries, which is the standing tension in the form: depth for the reader who will study, findability for the reader with a question.</p>
<p>The eleventh edition of 1911 is the one still quoted, partly because it is out of copyright and partly because its contributors were remarkable. It is also a period document, and its articles on race, on colonised peoples and on non-European civilisations are of their moment in ways that make its continued circulation online a mixed blessing.</p>
<p>The business model shaped the product more than is usually admitted. Britannica was sold door to door on instalment plans to aspirational households, and the sales pitch was about children's prospects rather than the contents. A set was expensive, was revised on a cycle of years, and was frequently unopened — an object bought as a statement about a family and consulted rarely.</p>
<p>That model died fast. The CD-ROM in the 1990s destroyed the economics of selling a shelf of books, and Britannica's response — declining to license its content cheaply, then pricing an online subscription — lost to a free product bundled with computers. The print edition ended in 2012 after 244 years.</p>

<h2 id="Wikipedia">The one that worked for reasons nobody predicted</h2>
<p>Wikipedia began in 2001 as a side project to a conventional encyclopedia with credentialed authors and peer review, which was producing articles too slowly to be viable. The open wiki was intended as a feeder. It overtook the parent within months and the parent was abandoned.</p>
<p>The prediction at the time, made by nearly everyone including people who had thought carefully about it, was that a text anyone could edit would degrade into vandalism and nonsense. This did not happen, and the reasons are worth stating because they are not obvious.</p>
<p>Reverting damage is far cheaper than causing it: a single click restores a previous version, while vandalism requires composition. Every change is logged with an author and a timestamp, so the entire history is inspectable and nothing is lost. Watchlists concentrate attention where committed editors already care. And bots handle the crude cases within seconds.</p>
<p>The content policies do the rest, and they are more interesting than the technology. Articles must present a neutral point of view, must be verifiable against published sources, and must contain no original research. The third is counterintuitive — an encyclopedia that forbids new analysis — and it is what makes disputes resolvable. An argument about whether a claim is true is unwinnable among anonymous strangers; an argument about whether a reliable source says it is has an answer.</p>
<p>A 2005 comparison in <em>Nature</em> found comparable error rates in Wikipedia and Britannica science articles, which was disputed at length by Britannica and set the terms of the argument for a decade.</p>

<h2 id="Problems">What it has not solved</h2>
<p>Coverage is uneven in ways that track its contributor base rather than the world. Surveys have consistently found editors to be overwhelmingly male, and the resulting gaps — biographies of women, subjects with little Western press coverage, topics without a strong online source base — are structural rather than incidental. A verifiability rule that depends on published reliable sources inherits every bias in what has historically been published.</p>
<p>The prohibition on original research means Wikipedia is a mirror of the source literature, so where that literature is wrong, so is the encyclopedia, faithfully and with citations.</p>
<p>Editor numbers peaked years ago and have declined, and the usual diagnosis is that the accumulated rules, templates and processes that make the project function also make it forbidding to newcomers. An institution's immune system does not distinguish between an attack and an unfamiliar contributor.</p>
<p>And the position has changed underneath it. Wikipedia is now the substrate for search results, voice assistants and language models, which take its content and present it stripped of the citations, the edit history, the talk page and the disputed tags — all the apparatus by which a reader could judge how much to trust a given sentence. The encyclopedia's own safeguards do not survive the transfer, which is a problem for everyone downstream and not one the project can fix from its end.</p>
`,
};
