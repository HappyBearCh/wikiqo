import type { RewrittenArticle } from "./types";

export const probability: RewrittenArticle = {
  slug: "probability",
  title: "Probability: mathematics for the things we do not know",
  sourceTitle: "Probability theory",
  dek: "A discipline invented to settle a gambling dispute, now the language of physics, medicine and every claim about evidence.",
  standfirst:
    "Probability is the only branch of mathematics whose central object is disputed by the people who use it daily. Everyone agrees on the rules. What a probability actually refers to — a long-run frequency in the world, or a degree of belief in a mind — has been argued for three hundred years, and the argument has real consequences for how evidence gets weighed.",
  readingMinutes: 8,
  html: `
<h2 id="A_late_arrival">A late arrival</h2>
<p>People have gambled for millennia, and dice recovered from ancient sites are often loaded, so the idea that some outcomes come up more than others is very old. What took until the seventeenth century was the notion that uncertainty could be <em>quantified</em> — that you could put a number on how likely something was and calculate with it.</p>
<p>The conventional starting point is a 1654 correspondence between Blaise Pascal and Pierre de Fermat about a gambling problem: if an interrupted game must be abandoned, how should the stakes be divided between players who are partway through? The answer requires reasoning about outcomes that never happened, weighting each by how likely it was. That move — treating unrealised possibilities as calculable objects — is the foundation of the whole field.</p>
<p>Why so late is a genuine puzzle. One plausible answer is that in cultures where outcomes were understood as expressions of divine will, computing the odds of a dice roll is not a mathematical question but a category error.</p>

<h2 id="Three_rules_and_everything_else">Three rules and everything else</h2>
<p>Probability was placed on rigorous footing by Andrey Kolmogorov in 1933, and the axioms are almost disappointingly simple. Every event has a probability of at least zero; something in the space of possibilities certainly happens, so the total is one; and the probability of any of several mutually exclusive events occurring is the sum of their individual probabilities. Everything else in the theory is derived from those three statements.</p>
<p>The consequential definition is <strong>conditional probability</strong>: the chance of one thing given that another has occurred. Most real questions are conditional — the probability of disease given a positive test, of rain given a falling barometer — and most errors in reasoning about probability come from confusing a conditional with its reverse. The chance you are wet given that it is raining is high. The chance it is raining given that you are wet is not the same number, and conflating them is the engine behind a startling amount of bad statistics in courtrooms and clinics.</p>

<h2 id="Bayes,_and_the_test_that_fools_doctors">Bayes, and the test that fools doctors</h2>
<p>Bayes' theorem converts one conditional into the other, and its practical importance is easiest to see in a worked case that has been given to medical professionals repeatedly, with dismal results.</p>
<p>A disease affects 1 in 1,000 people. A test detects it in 99 per cent of those who have it and returns a false positive in 5 per cent of those who do not. Your test is positive. How worried should you be?</p>
<p>The intuitive answer is around 95 per cent. The correct answer is about 2 per cent. Take 10,000 people: 10 have the disease and roughly 10 of them test positive; 9,990 do not, and about 500 of those also test positive. So there are 510 positives, of which 10 are real. The test is genuinely good. It is swamped because the condition is rare, and rarity — the base rate — is precisely what intuition discards.</p>
<p>This is not a curiosity. It is why screening healthy populations for rare conditions produces mostly false alarms, why a second independent test changes the picture so dramatically, and why "the probability of this evidence if the defendant were innocent" and "the probability the defendant is innocent given this evidence" are different quantities that have been swapped in real trials with real consequences.</p>

<h2 id="What_the_number_means">What the number means</h2>
<p>Two interpretations divide the field, and both are internally coherent.</p>
<p><strong>Frequentists</strong> hold that a probability is a long-run relative frequency. A fair coin lands heads half the time because in the limit of many tosses that is the proportion. On this view probability is a property of a repeatable process, and it is meaningless to speak of the probability of a one-off event: either it happened or it did not.</p>
<p><strong>Bayesians</strong> hold that a probability is a degree of belief, updated by evidence according to Bayes' theorem. This allows statements the frequentist view forbids — the probability that a particular theory is true, that this specific patient has a condition — at the cost of requiring a prior belief before the evidence arrives, which critics reasonably call subjective.</p>
<p>The practical difference shows up in what statistics is allowed to say. The frequentist p-value, which dominates published science, is the probability of observing data at least this extreme if there were no real effect. It is not, and cannot be, the probability that there is no real effect — which is what almost everyone reading it believes it says. That misreading, combined with a conventional threshold of 0.05, is a substantial part of why so many published findings fail to replicate.</p>

<h2 id="Randomness_that_is_not_random">Randomness that is not random</h2>
<p>Much of what we model probabilistically is not indeterminate at all. A tossed coin obeys deterministic mechanics; a sufficiently precise machine can produce heads reliably, and one has been built. We assign it a probability because we lack the initial conditions, not because the universe declines to have them.</p>
<p>This is <em>epistemic</em> uncertainty — ignorance about a definite fact — and it is the ordinary case. Insurance, weather forecasting, and most of statistics operate here. Quantum mechanics appears to supply the other kind, <em>aleatory</em> uncertainty, where the probabilities are irreducible features of nature rather than gaps in our knowledge; the experiments testing Bell's inequalities are best read as ruling out the comfortable alternative.</p>
<p>The distinction matters because the two behave differently under more information. Epistemic uncertainty shrinks as you learn more. Aleatory uncertainty does not.</p>

<h2 id="Why_the_intuitions_fail">Why the intuitions fail</h2>
<p>Human probabilistic reasoning is unreliable in patterned, predictable ways, catalogued extensively by Daniel Kahneman and Amos Tversky. We judge likelihood by how easily examples come to mind, which makes vivid risks feel common and quiet ones invisible. We rate a detailed story as more probable than a general one, though adding detail can only reduce probability. We read meaning into streaks that random processes produce routinely — genuinely random sequences contain more clustering than people expect, which is why shuffled music was redesigned to be less random in order to feel more so.</p>
<p>The Monty Hall problem is the standard demonstration, and it defeated professional mathematicians in print. Three doors, a prize behind one; you choose, the host — who knows the locations — opens a different door revealing no prize, and offers you the switch. Switching wins two times in three. The reason is that the host's choice is not random: it is constrained by what he knows, and that constraint transfers information to the door he left closed. Almost everyone's intuition treats the reveal as new randomness rather than as evidence, which is, in miniature, the mistake the entire field exists to correct.</p>
`,
};
