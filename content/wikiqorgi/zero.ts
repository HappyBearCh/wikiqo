import type { RewrittenArticle } from "./types";

export const zero: RewrittenArticle = {
  slug: "zero",
  title: "Zero: the number Europe spent four centuries refusing",
  sourceTitle: "0",
  dek: "A placeholder, then a number, then a scandal — and the reason arithmetic stopped requiring a specialist.",
  standfirst:
    "Zero looks like the most obvious thing in mathematics and was the last basic idea to arrive. Counting numbers are natural; nobody has to be taught that three sheep are three sheep. A symbol for the absence of sheep, treated as a quantity you can add and multiply, took several thousand years and was resisted every time it appeared.",
  readingMinutes: 7,
  html: `
<h2 id="Two_different_inventions">Two different inventions</h2>
<p>Zero is really two ideas, and conflating them muddles the history.</p>
<p>The first is <strong>zero as a placeholder</strong> — a mark that distinguishes 205 from 25 by holding an empty column. This is a notational convenience, and several civilisations arrived at it independently. Babylonian scribes, working in base 60, used a pair of slanted wedges by around 300 BC to mark a gap. The Maya had a shell glyph performing the same job in their calendar. Neither treated the mark as a number. It was punctuation.</p>
<p>The second is <strong>zero as a quantity</strong> — a thing that sits on the number line with the others, that can be added to, subtracted from, and reasoned about. This is a far stranger step, because it requires accepting that nothing is a kind of something. It happened once, in India, and everything else is transmission.</p>

<h2 id="Brahmagupta_writes_the_rules">Brahmagupta writes the rules</h2>
<p>In 628 the Indian mathematician Brahmagupta set out arithmetic that included zero as a full participant, along with negative numbers, which he framed as debts. His rules are the ones still taught: a number plus zero is unchanged, a number minus itself is zero, zero times anything is zero.</p>
<p>He also attempted division by zero, and got it wrong — he suggested zero divided by zero was zero. That failure is more interesting than a success would have been, because it took another thousand years and the invention of calculus to articulate why the operation has no answer rather than a difficult one. Division asks how many times one quantity fits into another; nothing fits into something an unbounded number of times, and the honest response is that the question is malformed.</p>
<p>Indian mathematics reached the Islamic world within a century. Al-Khwarizmi's ninth-century treatise on Hindu numerals carried the whole system — ten digits, place value, zero — into Baghdad, and his name, mangled through Latin, became <em>algorithm</em>. The numerals we call Arabic are Indian, transmitted by Arabic scholarship, and the misattribution has stuck for a millennium.</p>

<h2 id="Europe_says_no">Europe says no</h2>
<p>The system reached Europe and stalled for four hundred years. Fibonacci, who had learned it as a merchant's son in North Africa, published a persuasive account in 1202 showing that Hindu-Arabic numerals made commercial arithmetic dramatically easier than Roman ones. He was correct and largely ignored.</p>
<p>The resistance was not simply conservatism. Roman numerals plus an abacus was a working system, and it had one advantage the new numerals lacked: results were hard to falsify. A written 0 can be turned into a 6 or a 9 with a pen stroke, and an entire column of figures can be inflated by adding a digit. Florence banned the numerals for banking in 1299 for exactly this reason. Merchants who adopted them anyway did so quietly, and kept two sets of books — one legible to auditors, one they could actually calculate in.</p>
<p>There was also genuine philosophical unease. Aristotelian physics denied the existence of a void, the Church was hostile to arguments that made nothingness real, and a symbol for absence sat awkwardly with both. The numerals won in the end because double-entry bookkeeping and long-distance trade made the arithmetic advantage overwhelming, and printing standardised the shapes beyond easy forgery.</p>

<h2 id="What_it_actually_bought">What it actually bought</h2>
<p>The payoff of positional notation with zero is easy to underrate because we learn it at six years old.</p>
<p>Roman numerals encode value in the symbols themselves, so arithmetic requires manipulating the symbols according to rules that do not generalise. Multiplying MCMXLVII by XXIII is not a procedure a child can be taught; it is a task for a trained calculator with a counting board. Positional notation, by contrast, reduces multiplication of any two numbers of any size to the same short algorithm applied repeatedly, using memorised facts about single digits.</p>
<p>That is the real revolution: arithmetic stopped being a profession. Calculation became something an ordinary literate person could do on paper, which is a precondition for commerce, engineering, navigation and eventually science conducted by people who are not primarily mathematicians.</p>

<h2 id="Zero_as_a_mathematical_object">Zero as a mathematical object</h2>
<p>In modern terms zero is the additive identity — the unique element that leaves everything unchanged when added — and this property, not the idea of emptiness, is what makes it structurally essential. Fields, rings, vector spaces and groups are all defined partly by having such an element. Remove zero and most of abstract algebra has nothing to stand on.</p>
<p>It is also where several definitions become delicate. Zero is even, which surprises people, though it satisfies every definition of evenness. Zero factorial is 1, which follows from the recursive definition and from the combinatorial fact that there is exactly one way to arrange nothing. Zero to the power of zero is usually defined as 1 in combinatorics and algebra and left undefined in analysis, which is not a contradiction but a reminder that mathematical definitions are chosen for usefulness rather than discovered.</p>
<p>The empty set plays the analogous role in set theory, and the standard construction of the natural numbers builds every number out of it: zero <em>is</em> the empty set, one is the set containing it, and so on upward. The whole of arithmetic can be constructed from nothing, quite literally.</p>

<h2 id="The_machine_that_needed_it_most">The machine that needed it most</h2>
<p>Binary arithmetic, and therefore computing, is unthinkable without zero as a value rather than an absence. Every bit is a choice between two states, and both are meaningful — a stored zero is data, not a blank. Leibniz worked out binary in the seventeenth century and thought it theologically suggestive, God creating everything from nothing; Boole turned logic into algebra over the same two values; Shannon connected that algebra to electrical switching in 1937, and the modern computer follows.</p>
<p>Programming has kept the awkwardness alive in miniature. Whether to number the first element of a list zero or one is a genuine and much-argued design decision, and the off-by-one error is the most common bug in the discipline. Division by zero remains one of the few arithmetic operations that will halt a processor outright. Four centuries after Europe stopped banning the digit, it is still the one most capable of causing trouble.</p>
`,
};
