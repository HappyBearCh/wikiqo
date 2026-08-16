import type { RewrittenArticle } from "./types";

export const infinity: RewrittenArticle = {
  slug: "infinity",
  title: "Infinity: the discovery that some infinities are bigger than others",
  sourceTitle: "Infinity",
  dek: "Cantor proved it in the 1870s, was attacked for it by the leading mathematicians of his day, and was right.",
  standfirst:
    "For two thousand years infinity was handled by not handling it — treated as a direction rather than a quantity, something a process tends toward but never reaches. Then Georg Cantor took it seriously as an object you could count with, and found that the infinite comes in different sizes. The result is one of the few mathematical proofs that genuinely offends intuition, and it is not difficult.",
  readingMinutes: 7,
  html: `
<h2 id="The_ancient_refusal">The ancient refusal</h2>
<p>Greek mathematics distinguished the <em>potential</em> infinite — a process that can always be continued, like adding one more to any number — from the <em>actual</em> infinite, a completed infinite totality. Aristotle permitted the first and rejected the second, and the distinction held for two millennia.</p>
<p>The caution was not superstition. Zeno's paradoxes had shown that reasoning about infinite subdivision produces apparent absurdities: to cross a room you must first cross half, then half the remainder, and so on without end, so motion appears impossible. Galileo found another. The whole numbers can be paired one-to-one with the perfect squares — 1 with 1, 2 with 4, 3 with 9, forever — so there are as many squares as numbers, though the squares are obviously a small subset that thins out. Galileo concluded that comparisons of size simply do not apply to infinite collections, and stopped.</p>
<p>That was the reasonable response. It was also the wrong one, and the paradox he set aside is precisely the tool that eventually worked.</p>

<h2 id="Counting_without_numbers">Counting without numbers</h2>
<p>Cantor's move was to ask what comparing sizes actually means, and to notice that it does not require counting.</p>
<p>A shepherd with no numbers can still tell whether every sheep has a pen: pair them off, and see whether anything is left over. Two collections are the same size if their members can be matched one-to-one. This definition needs no arithmetic, so it extends to infinite collections without modification.</p>
<p>Apply it and Galileo's paradox stops being a paradox and becomes the definition of infinite: a set is infinite precisely when it can be matched one-to-one with a proper part of itself. The even numbers can be paired with all the whole numbers, so there are exactly as many. So can the integers including negatives. So, more surprisingly, can the fractions — every rational number can be arranged in a grid and traced by a zigzag path that reaches each one eventually, giving a complete numbered list.</p>
<p>Any set that can be listed this way is called countable, and countability turns out to absorb a remarkable amount. Hilbert's hotel makes the point vividly: a hotel with infinitely many rooms, all occupied, can still accommodate a new guest by moving everyone up one room — and can accommodate infinitely many new guests by moving each occupant to twice their room number, freeing every odd room.</p>

<h2 id="The_diagonal">The diagonal</h2>
<p>Then Cantor asked whether the real numbers — every point on the line, including the irrationals — could also be listed. He proved they cannot, with an argument short enough to state in a paragraph.</p>
<p>Suppose someone hands you a complete list of all real numbers between 0 and 1, each written as an infinite decimal, numbered 1, 2, 3 and onward. Construct a new number as follows: make its first digit differ from the first digit of the first number on the list, its second digit differ from the second digit of the second number, its third from the third of the third, and so on down the diagonal.</p>
<p>The number you have built differs from every number on the list in at least one place, so it is not on the list. But the list was supposed to contain every real number. The assumption fails, and no such list can exist.</p>
<p>The reals are therefore strictly more numerous than the whole numbers. There are at least two different sizes of infinity, and the same technique generates an endless hierarchy: the set of all subsets of any set is always strictly larger than the set itself, so there is no largest infinity. The tower goes up forever, and its levels are called cardinal numbers.</p>

<h2 id="Almost_every_number_is_unnameable">Almost every number is unnameable</h2>
<p>One consequence deserves its own sentence, because it is more unsettling than the theorem that produced it.</p>
<p>The algebraic numbers — every solution to any polynomial equation with whole-number coefficients — are countable. So the transcendental numbers, which are everything else, must be uncountable, and therefore constitute almost all of the real line. Yet they are notoriously hard to find: proving that π and e are transcendental took considerable effort, and the status of many ordinary-looking constants is still unknown.</p>
<p>Push further. There are only countably many finite descriptions in any language, since you can list all possible strings of symbols. There are uncountably many real numbers. So almost every real number cannot be described, named, or specified by any finite means whatsoever. The numbers we can talk about are a vanishingly thin sliver of the ones that exist — and this follows from a two-line argument about a diagonal.</p>

<h2 id="The_question_with_no_answer">The question with no answer</h2>
<p>Cantor's next question was the obvious one: is there an infinity strictly between the whole numbers and the reals? He believed there was not — the continuum hypothesis — and spent much of his life failing to prove it, suffering repeated breakdowns as he did.</p>
<p>The resolution, when it came, was stranger than either outcome. Gödel showed in 1940 that the hypothesis cannot be disproved from the standard axioms of set theory. Paul Cohen showed in 1963 that it cannot be proved from them either. It is independent: both it and its negation can be consistently added, producing different but equally valid mathematics.</p>
<p>This is not ignorance awaiting a cleverer proof. It is a demonstration that the question, as posed, has no answer within the framework — a concrete instance of Gödel's incompleteness applied to a question people actually cared about, and Cohen's technique for proving it opened a whole branch of the field.</p>

<h2 id="The_reception">The reception</h2>
<p>Cantor's work was received with hostility that is startling to read now. Leopold Kronecker, an established figure with real institutional power, considered actual infinities a corruption of mathematics, called Cantor a charlatan and a corrupter of youth, and worked to block his publications and his appointments. Poincaré described the theory as a disease. Wittgenstein later dismissed it as mathematics fooling itself.</p>
<p>The resistance was not merely personal; it reflected a genuine philosophical position about whether mathematical objects must be constructible to be real, and constructivist mathematics remains a serious minority tradition on exactly this ground. But the mainstream verdict was Hilbert's: no one shall expel us from the paradise that Cantor has created. Set theory became the foundation on which the rest of mathematics is standardly built, and the diagonal argument reappears throughout — in Gödel's incompleteness proof, in Turing's halting problem, wherever a system is shown to be unable to capture itself.</p>
<p>Cantor died in 1918 in a sanatorium, during a wartime famine, still defending work that had been settled in his favour for a decade.</p>
`,
};
