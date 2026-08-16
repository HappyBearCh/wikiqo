import type { RewrittenArticle } from "./types";

export const incompleteness: RewrittenArticle = {
  slug: "incompleteness",
  title: "Gödel's incompleteness: the theorem that ended a century of ambition",
  sourceTitle: "Gödel's incompleteness theorems",
  dek: "Mathematics cannot prove everything true, and cannot prove its own consistency. A 25-year-old demonstrated both in one paper.",
  standfirst:
    "In 1931 Kurt Gödel published a result that terminated the most ambitious programme in the history of mathematics — not by finding an error in it, but by proving that its goal was unreachable in principle. The proof is constructive, exact, and turns on a single trick: getting a formal system to talk about itself.",
  readingMinutes: 8,
  html: `
<h2 id="What_was_being_attempted">What was being attempted</h2>
<p>By 1900 mathematics had been alarmed by its own foundations. Paradoxes had turned up in set theory, most famously Russell's — consider the set of all sets that do not contain themselves, and ask whether it contains itself; either answer is contradictory. If such trouble could appear in reasoning that looked obviously sound, what else was unsafe?</p>
<p>David Hilbert proposed the fix. Reduce mathematics to a formal system: a finite list of axioms and precise rules of inference, in which proof becomes a purely mechanical matter of symbol manipulation with no appeal to intuition. Then establish three properties — that the system is <strong>consistent</strong> (never proves both a statement and its negation), <strong>complete</strong> (proves every true statement in its language), and <strong>decidable</strong> (there is a procedure determining whether any given statement is provable).</p>
<p>Achieve that and mathematical certainty is secured permanently. Whitehead and Russell had spent three volumes and several hundred pages getting to a proof that 1 + 1 = 2, which gives some sense of the seriousness of the effort. Hilbert was confident. His epitaph reads <em>Wir müssen wissen, wir werden wissen</em> — we must know, we will know. He chose it after Gödel's paper.</p>

<h2 id="The_trick:_making_arithmetic_talk_about_itself">The trick: making arithmetic talk about itself</h2>
<p>Gödel's central device is a coding scheme. Assign a number to every symbol, then to every formula, then to every sequence of formulas — a Gödel numbering, arranged so that the encoding is unambiguous and recoverable.</p>
<p>The consequence is that statements about formulas become statements about numbers. "This sequence of formulas is a valid proof of that formula" becomes an arithmetical relationship between two numbers, checkable by calculation. A system powerful enough to do ordinary arithmetic is therefore powerful enough to express claims about its own proofs, without anyone having designed it to.</p>
<p>That is the whole opening. Everything after it follows from making the system say something awkward about itself.</p>

<h2 id="The_sentence_that_breaks_it">The sentence that breaks it</h2>
<p>Gödel constructed a formula — call it G — which, decoded, asserts: <em>this statement is not provable in this system.</em> Building it rigorously is delicate; the idea is a formalised version of the liar paradox, with "not provable" substituted for "not true", and that substitution is what turns a word game into a theorem.</p>
<p>Now consider the possibilities.</p>
<p>If G is provable, then the system proves a statement asserting its own unprovability — so the system has proved something false, and is inconsistent.</p>
<p>If G is not provable, then what G asserts is exactly the case. G is true, and the system cannot prove it.</p>
<p>So any consistent system capable of arithmetic contains true statements it cannot prove. This is the first incompleteness theorem, and adding G as a new axiom does not rescue the situation: the enlarged system permits construction of a new unprovable sentence, indefinitely.</p>

<h2 id="And_it_cannot_vouch_for_itself">And it cannot vouch for itself</h2>
<p>The second theorem is the more devastating one for Hilbert's purposes, and it follows from the first.</p>
<p>The argument above shows that <em>if</em> the system is consistent, then G is unprovable. That reasoning can itself be formalised inside the system. So the system can prove the conditional: consistency implies G is unprovable — which is to say, consistency implies G.</p>
<p>Therefore, if the system could prove its own consistency, it could prove G. But G is unprovable. So the system cannot prove its own consistency.</p>
<p>No sufficiently powerful formal system can establish, using only its own methods, that it will never produce a contradiction. Consistency can be proved from a stronger system, whose consistency then requires a stronger one still. The regress does not terminate, and Hilbert's programme, in its original form, was finished.</p>

<h2 id="What_it_does_not_say">What it does not say</h2>
<p>Few theorems have been misused as energetically, so the limits are worth stating plainly.</p>
<p>It does not say mathematics is inconsistent or unreliable. Arithmetic is almost universally believed consistent; the theorem says that belief cannot be established from within, not that it is doubtful. Consistency proofs for arithmetic exist, using stronger assumptions.</p>
<p>It does not apply to every formal system. Systems too weak to encode arithmetic escape it entirely — and some rich ones do too. The first-order theory of real numbers and geometry is complete and decidable, proved by Tarski, which surprises people who assume incompleteness is universal.</p>
<p>It does not establish that human minds surpass machines. This is the most persistent overreach, argued by Lucas and by Penrose: we can see G is true while the system cannot prove it, therefore we are not formal systems. The standard reply is that we see G is true only <em>conditionally</em> on the system's consistency, which we have not established either — a machine can perform exactly the same conditional reasoning. The argument assumes what it needs to prove.</p>
<p>And it says nothing about truth outside mathematics. Invocations of incompleteness in support of claims about theology, postmodernism, or the limits of science are, without exception, illegitimate. The theorem is a precise statement about formal systems capable of arithmetic.</p>

<h2 id="What_followed">What followed</h2>
<p>The immediate consequence was Turing's, five years later. Asked whether a procedure exists to determine provability — Hilbert's decidability requirement — Turing defined computation, showed the halting problem unsolvable, and answered no. The two results are close relatives, both showing a system cannot fully analyse itself, and Turing's version created computer science on the way past.</p>
<p>Concrete unprovable statements followed too, refuting the hope that Gödel sentences were artificial curiosities. Goodstein's theorem, a genuine statement about sequences of integers, is true but unprovable in ordinary arithmetic. The continuum hypothesis turned out to be independent of standard set theory. These are questions mathematicians asked for their own sake, and the answer is that the axioms do not decide them.</p>
<p>Gödel himself was a strange, rigorous man who believed mathematical objects were as real as physical ones and that his theorem supported that view — since truth outruns provability, truth must be something other than what we can derive. He fled Austria for Princeton, became a close friend of Einstein, who said he went to the office mainly for the privilege of walking home with Gödel, and found a solution to the field equations of general relativity permitting closed timelike curves, which he presented to Einstein as a birthday present. He developed severe paranoia about being poisoned, ate only what his wife prepared, and when she was hospitalised he stopped eating. He died in 1978 weighing sixty-five pounds.</p>
`,
};
