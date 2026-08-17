import type { RewrittenArticle } from "./types";

export const copyright: RewrittenArticle = {
  slug: "copyright",
  title: "Copyright: a printers' cartel that was rewritten as an author's right",
  sourceTitle: "Copyright",
  dek: "It began as censorship machinery, was recast as a bargain with the public, and has since been extended so often that the bargain is hard to locate.",
  standfirst:
    "Copyright is not an ancient right of creators. It is a statutory monopoly, roughly three hundred years old, invented to regulate a printing industry and repurposed almost immediately as a claim about authorship. The original deal was explicit: a limited term of exclusivity in exchange for the work eventually belonging to everyone. Both halves are still in the statute; only one is still enforced with any energy.",
  readingMinutes: 8,
  html: `
<h2 id="Before_authors">It started as licensing, not as rights</h2>
<p>Printing arrived in England in the 1470s, and within a century the Crown had noticed what a machine for mass-producing text meant for religious and political control. The response, in 1557, was to grant the Stationers' Company a monopoly on printing. Members registered titles; registration gave the member a perpetual exclusive right to print that work; and nothing could lawfully be printed by anyone outside the company.</p>
<p>The arrangement suited both parties precisely. The Crown obtained a manageable chokepoint for censorship, since a small guild is far easier to supervise than a diffuse trade. The stationers obtained a cartel with perpetual rights.</p>
<p>Authors had nothing. A writer sold a manuscript to a stationer and the right thereafter belonged to the stationer forever. Nobody involved conceived of copyright as originating with the person who wrote the thing.</p>
<p>The licensing system lapsed in 1695 when Parliament declined to renew it, and the stationers spent the next fifteen years lobbying to get their monopoly back. The argument they eventually found effective was that authors deserved protection — which was not what they wanted, but was what worked.</p>

<h2 id="The_statute_of_anne">The bargain, written down once, in 1710</h2>
<p>The Statute of Anne is the first copyright law in the modern sense, and it did something the stationers had not asked for. It vested the right in the author, and it made it temporary: fourteen years, renewable once for another fourteen if the author was still alive. Works already in print got a single twenty-one-year term, after which they were free.</p>
<p>Its full title described it as an act for the encouragement of learning, and the mechanism is a bargain. The public grants a limited monopoly; in return the work is created, and at the end of the term it belongs to everyone. The public domain is not what is left over — it is the consideration the public receives.</p>
<p>The stationers immediately tried to argue that the statute merely supplemented a perpetual common-law right that had always existed. This ran through the English courts for sixty years and was finally rejected in <em>Donaldson v Becket</em> in 1774, which held that whatever right existed before publication, after publication the statutory term governed and then the work was free. Thousands of books entered the public domain overnight, cheap editions followed, and the modern reading public is partly a consequence of that judgment.</p>

<h2 id="What_it_covers">What it covers, and what it conspicuously does not</h2>
<p>Copyright protects the expression of an idea and never the idea itself. You may not copy someone's novel; you may write your own novel with the same plot. You may not copy a manual's text; you may explain the same procedure in your own words. Recipes, mathematical results, historical facts, and methods are all outside it entirely.</p>
<p>The reason is structural rather than technical. A monopoly on ideas would foreclose future work in the whole area, which is the opposite of encouraging learning, and it would be impossible to administer since ideas have no edges.</p>
<p>Facts are unprotected however much they cost to gather. A telephone directory compiled at enormous expense was held in the United States to contain no copyrightable expression because alphabetical listing involves no creative choice, and effort alone earns nothing. Europe responded with a separate database right, which is a different instrument and is widely regarded as having failed to produce the industry it was meant to.</p>
<p>Protection is automatic on fixation. Nothing needs to be registered, filed, or marked; writing something down or saving a file creates the right. This is a significant change from the older regime, where formalities were required and works that failed them fell immediately into the public domain — under which a large proportion of twentieth-century material would now be free.</p>

<h2 id="The_term_problem">The term, and why it keeps growing</h2>
<p>Fourteen years, renewable once, has become the life of the author plus seventy in most of the world — meaning a work made by a young writer may be restricted for well over a century.</p>
<p>The economic case for this is weak to the point of nonexistence. The present value to an author of income in year ninety after their death is negligible; no plausible creator has ever made a different decision about whether to write because of it. Seventeen economists including five Nobel laureates filed a brief in the United States making exactly that argument, and lost.</p>
<p>Worse, the extensions have been retroactive, applying to works already made. It is impossible for an incentive to operate backwards in time. A retroactive extension transfers value from the public to existing rights holders and produces no new work by construction, which means it cannot be justified on the theory the institution rests on.</p>
<p>The visible driver has been a small number of extremely valuable properties whose owners lobby as their terms approach expiry, and the timing of the American extensions tracks that closely enough to have earned unkind nicknames.</p>
<p>The cost is not mainly the famous works, which stay in print regardless. It is the vast middle: books out of print, films decaying in vaults, photographs whose rights holders cannot be identified at all. These orphan works are commercially dead and legally untouchable, and libraries cannot digitise them without accepting a risk nobody can quantify. A long term protects a handful of valuable assets by freezing an enormous quantity of worthless ones.</p>

<h2 id="Fair_use">The safety valves</h2>
<p>Every system needs exceptions or it becomes unusable, and there are two broad designs.</p>
<p>The American approach is fair use: an open-ended standard weighing four factors — the purpose of the use, the nature of the work, how much was taken, and the effect on the market for the original. It is flexible enough to accommodate uses nobody anticipated, which is how search engine indexing, book scanning for search, and reverse engineering all came to be lawful. Its cost is unpredictability, since you generally discover whether a use was fair by being sued.</p>
<p>Most other countries use fair dealing or a closed list of permitted purposes: quotation, criticism, review, news reporting, private study, parody. This is more predictable and considerably less adaptable, because a use not on the list is infringing no matter how harmless.</p>
<p>Transformative use has become the centre of gravity in American analysis — whether the new work adds something with a further purpose or different character rather than substituting for the original. It is the doctrine now bearing the full weight of the argument over training machine learning systems on copyrighted material, a question the framework was not built for and is being asked to answer anyway.</p>

<h2 id="Digital">What copying costs nothing did to it</h2>
<p>Copyright was designed around a bottleneck. Copying required a press, presses were expensive and few, and enforcement meant supervising a manageable number of commercial operations. Ordinary readers could not infringe even if they wanted to.</p>
<p>Digital reproduction removed the bottleneck entirely and made every user a potential publisher, which turned a regulation of an industry into a regulation of everyone. Ordinary use of a computer involves making copies constantly — into memory, into caches, onto backups — so that the act copyright regulates became the basic operation of the medium.</p>
<p>Two responses followed. Technical protection measures attempt to enforce restrictions in software, and laws were passed making it illegal to circumvent them even for otherwise lawful purposes — which means an exception you are entitled to may be unavailable in practice, and has produced awkward results in areas as remote as tractor repair and medical devices.</p>
<p>The other response came from outside. Free software licences and Creative Commons use copyright's own machinery in reverse: the author holds the right and licenses it broadly in advance, on conditions. This depends entirely on copyright being strong, since a licence is only enforceable if there is a right to license, and it has produced an enormous body of shared work without any change to the underlying law.</p>
`,
};
