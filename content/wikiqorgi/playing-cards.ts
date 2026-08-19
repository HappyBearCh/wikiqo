import type { RewrittenArticle } from "./types";

export const playingCards: RewrittenArticle = {
  slug: "playing-cards",
  title: "Playing cards: the deck in your drawer is a Mamluk artefact with French marketing",
  sourceTitle: "Playing card",
  dek: "Cups, coins, swords and polo sticks became hearts, diamonds, spades and clubs because two colours and simple shapes were cheaper to print.",
  standfirst:
    "A standard deck looks like a natural object — fifty-two cards, four suits, three court cards each — and every part of it is a decision someone made for a reason, usually a manufacturing one. The deck travelled from China through the Islamic world into Europe, was redesigned in fifteenth-century France to be cheap to stencil, acquired reversible court cards and corner indices in the nineteenth century because of how people hold them, and picked up the joker in America.",
  readingMinutes: 7,
  html: `
<h2 id="Route">The route west</h2>
<p>Cards appear first in China, where references to a leaf game date from the Tang period and printed money-suited cards are documented later; the technology and the concept both plausibly follow from woodblock printing and paper money, which is to say cards are a by-product of a society that had already worked out how to print small rectangular objects in quantity.</p>
<p>The decisive evidence for the western line is a surviving Mamluk deck in the Topkapı collection in Istanbul, incomplete but unmistakable. It has four suits — cups, coins, swords and polo sticks — with numbered cards from one to ten and three court cards per suit, none of them depicting a human figure, in keeping with the prevailing prohibition on figural representation in that context. That is fifty-two cards arranged exactly as a modern deck is arranged.</p>
<p>Cards arrive in Europe abruptly in the 1370s: multiple cities record them within a few years of each other, several of them by banning them. The suits carried over almost unchanged into Italy and Spain, which still use cups, coins, swords and batons — the polo stick having become a club or cudgel in places where nobody played polo.</p>
<p>Germany substituted hearts, bells, acorns and leaves. Switzerland used shields, roses, bells and acorns. Every early European suit system is a local reinterpretation of the same four-way division.</p>

<h2 id="French_suits">Why the French system won</h2>
<p>Around 1480 French makers replaced the suit symbols with <em>cœurs</em>, <em>carreaux</em>, <em>piques</em> and <em>trèfles</em> — hearts, tiles, pike-heads and clover — and this is the set that conquered the world.</p>
<p>It won on cost. The four French symbols are flat silhouettes in two colours, which can be applied with simple stencils, and printing them takes a fraction of the labour that Italian cups and swords or German acorns require. A French deck could be produced faster and cheaper than any rival, and the economics propagated the design.</p>
<p>The English names are a mixed inheritance. Hearts and diamonds translate the shapes; spades and clubs do not translate the French words at all but appear to be borrowed from the Italian <em>spade</em>, meaning swords, and <em>bastoni</em>, batons, attached to shapes that mean something else entirely. The English deck is a French design wearing Italian labels.</p>
<p>The court cards were named in France after specific figures — the kings identified with David, Alexander, Caesar and Charlemagne, and similar assignments for queens and knaves — a convention that was standardised in Rouen, exported to England, and then forgotten in England while the pictures themselves were copied for centuries by makers reproducing whatever the previous maker had done. The result is that English court cards are degraded copies of French sixteenth-century woodcuts, which is why they have their peculiar stiff heraldic look and why the king of hearts appears to be putting a sword through his own head: the original held it behind his shoulder, and the detail was lost in repeated copying.</p>

<h2 id="Design">The design changes that came from how hands work</h2>
<p>Two nineteenth-century alterations are so successful that they are invisible.</p>
<p>Reversible court cards — double-headed, so there is no wrong way up — were introduced in the early nineteenth century for a specific reason: turning an upside-down court card the right way round told the table you had one. The double-headed design removed the tell, and cost the illustrations their legs.</p>
<p>Corner indices are the more consequential change, popularised in the United States in the 1870s under the name Squeezers. Printing the rank and suit in the corner lets a player fan a hand tightly with one hand and read the whole of it, which is why every subsequent card game assumes a fanned hand. Before indices, a hand had to be spread far enough to show each card's centre.</p>
<p>The joker is American, from the 1860s, invented for the game of euchre, where it served as the highest trump. Its name is generally traced to <em>juker</em>, a form of the game's name. It has no European ancestry and no fixed function; it survives because manufacturers include it, and games invent uses for it afterwards.</p>
<p>Two other refinements belong to the same period of industrial card-making: rounded corners, because square ones wear and a worn corner marks a card, and the layer of dark paper between the front and back of a card, which is why you cannot read a card by holding it up to the light.</p>

<h2 id="Randomness">Shuffling, and how badly people do it</h2>
<p>A deck is a randomisation device, and the mathematics of how well it randomises is well characterised and consistently ignored.</p>
<p>The standard result, from Bayer and Diaconis, is that about seven riffle shuffles are needed to bring a fifty-two-card deck close to random, and that the approach is abrupt — the deck stays substantially ordered through five shuffles and then becomes disordered quickly. Fewer than seven leaves exploitable structure, which matters in casinos and mattered enormously to the people who worked this out.</p>
<p>Overhand shuffling, the common domestic method of pulling packets from one hand to the other, is far worse: it requires thousands of repetitions to approach randomness, because it mostly preserves the order of blocks and only shifts them around.</p>
<p>The related fact that gets casinos' attention is that a deck retains information even when shuffled adequately, provided cards are dealt without replacement. This is the basis of card counting in blackjack: as low cards leave the shoe the remaining distribution shifts in the player's favour, and tracking a single running number is enough to know when. Casinos responded not by banning the arithmetic, which is impossible, but by changing the physical situation — multiple decks, shuffling before the shoe is exhausted, and continuous shuffling machines, all of which destroy the information rather than the reasoning.</p>

<h2 id="Structure">Why fifty-two, and what the deck is good at</h2>
<p>The number is not designed and there is no shortage of tempting numerology about weeks and seasons, which postdates the deck and explains nothing. Fifty-two is what you get from four suits of thirteen, and thirteen is what the Mamluk arrangement of ten numerals plus three courts produces. Other traditions kept other numbers: the Italian forty-card deck drops the eights, nines and tens and is used for a large family of games; tarot decks add a fifth suit of trumps and are, in most of Europe, ordinary game equipment rather than a divination tool.</p>
<p>What makes the standard deck durable is that it is a general-purpose randomness generator with structure. Fifty-two distinguishable objects can be partitioned by colour, by suit, by rank, by parity, into pairs and into sequences, which means one physical object supports an enormous family of unrelated games — trick-taking, matching, shedding, betting, patience — with no equipment change.</p>
<p>That generality is also why the deck has outlasted almost every game played with it. The specific games rise and fall with fashion; whist gave way to bridge, faro vanished, poker was a regional American game before it was a global one. The apparatus survives because it was never designed for any of them.</p>
`,
};
