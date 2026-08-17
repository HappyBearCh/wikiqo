import type { RewrittenArticle } from "./types";

export const randomisedTrials: RewrittenArticle = {
  slug: "randomised-trials",
  title: "Randomised trials: the only reliable way to find out whether something works",
  sourceTitle: "Randomized controlled trial",
  dek: "Randomisation does not make groups similar in the ways you thought of. It makes them similar in the ways you did not.",
  standfirst:
    "The central problem in evaluating any treatment is that people who receive it differ from people who do not, in ways that are usually unknown and frequently invisible. Randomisation is the one procedure that solves this, and it solves it completely: assigning by chance balances the groups on every characteristic, including the ones nobody has thought to measure. Almost every other feature of a modern trial exists to protect that single property from being undermined.",
  readingMinutes: 8,
  html: `
<h2 id="The_problem_it_solves">The problem it solves</h2>
<p>Suppose people taking a vitamin have fewer heart attacks than people who do not. There are three possible explanations and only one of them is interesting.</p>
<p>The vitamin works. Or the people who take it differ — they are wealthier, more health-conscious, more likely to exercise and see doctors — and those differences cause the outcome. Or the causation runs backwards, and people who feel unwell stop taking supplements.</p>
<p>Statistical adjustment can handle the confounders you know about and measure. It cannot handle the ones you do not, and the history of nutritional and lifestyle epidemiology is largely a history of adjusted associations that evaporated when finally tested properly. Hormone replacement therapy is the standard cautionary case: large observational studies consistently showed substantial cardiac benefit, adjustment was applied conscientiously, and the randomised trial showed the opposite.</p>
<p>Randomisation works because chance assignment cannot be correlated with anything about the participants. Over a sufficient sample, the groups end up balanced on age, income, genetics, diet, motivation, unmeasured biology, and every other variable simultaneously — not because the design accounted for them, but because nothing systematic determined who went where.</p>
<p>This is why a trial can establish causation and an observational study cannot, however large. Sample size does not fix confounding; it makes a biased estimate more precise.</p>

<h2 id="Where_it_came_from">Where it came from</h2>
<p>Deliberate comparison is old. James Lind divided twelve scurvy patients aboard a ship in 1747 into six pairs, gave each pair a different remedy, and observed that the two on citrus recovered. He did not randomise and his own conclusions were muddled, but the comparative structure was there.</p>
<p>Randomisation as a statistical principle came from Ronald Fisher's agricultural work in the 1920s, where the problem was that a field's soil varies systematically and any tidy arrangement of plots risks confounding treatment with position. His insight, worked out with plants rather than people, was that random allocation makes the assignment independent of everything else and thereby licenses the significance test.</p>
<p>The first properly randomised medical trial is generally taken to be the British Medical Research Council's 1948 study of streptomycin for tuberculosis, designed by Austin Bradford Hill. Its randomisation used sealed envelopes with allocations concealed from the recruiting clinicians, which is the detail that made it work. Hill later recorded that the trial was ethically possible partly because the supply of the drug was so limited that some patients could not receive it in any case, which is an uncomfortable but honest account of how the design became acceptable.</p>

<h2 id="The_supporting_machinery">The machinery around it</h2>
<p>Randomisation alone is fragile, and the rest of the apparatus exists to defend it.</p>
<p><strong>Allocation concealment</strong> means the person enrolling a participant cannot know what the next assignment will be. Without it, a clinician who suspects the next slot is placebo may steer a sicker patient toward the following one, which reintroduces exactly the bias randomisation removed. Trials with inadequate concealment report systematically larger treatment effects, and this is one of the best-documented findings in trial methodology.</p>
<p><strong>Blinding</strong> is separate and addresses a different problem. Participants who know they received a treatment report improvement; clinicians who know report more favourable assessments, particularly on subjective measures. Double-blinding conceals assignment from both. Where blinding is impossible — surgery, physiotherapy, most behavioural interventions — outcome assessment can still be blinded, and objective endpoints such as death are far less vulnerable.</p>
<p><strong>Intention-to-treat analysis</strong> is the least intuitive and the most important. Participants are analysed in the group they were assigned to, whether or not they complied, even if they never took a single dose. Analysing only compliant participants seems more informative and destroys the randomisation, because compliance is not random — people who take their medication reliably have better outcomes even on placebo, which has been measured repeatedly and is a striking finding in its own right.</p>
<p><strong>Pre-registration</strong> of the primary outcome and analysis plan closes the last gap. A trial measuring twenty outcomes will find something significant by chance, and reporting the one that worked as though it had been the target is a well-documented practice that comparisons of registrations against published papers expose routinely.</p>

<h2 id="Placebo">What the placebo group is actually for</h2>
<p>The placebo effect is widely misdescribed, and the misdescription matters because it inflates what trials are thought to show.</p>
<p>People given placebo often improve, but most of that improvement is not caused by the placebo. Illnesses fluctuate and people enrol when symptoms are worst, so improvement toward the average is expected. Many conditions resolve on their own. Measurement drifts. Participants report what they think is expected.</p>
<p>A review comparing placebo groups against no-treatment groups — the comparison that actually isolates the placebo effect — found little effect on objective outcomes and a modest one on subjectively reported symptoms, particularly pain. That is a real effect and a much smaller one than the popular account suggests.</p>
<p>The control arm's purpose is therefore not to measure placebo response. It is to provide a comparison that includes all the same non-treatment influences, so the difference between arms isolates the treatment.</p>

<h2 id="Limits">What trials cannot tell you</h2>
<p>The randomised trial's authority has produced a tendency to treat it as the answer to every question, and it is not.</p>
<p>Trial populations are not general populations. Eligibility criteria exclude the elderly, the pregnant, people with multiple conditions, and people on other medications — which is to say a large share of the people who will eventually take the drug. A result established in fit fifty-year-olds may not transfer to frail eighty-year-olds with four other diagnoses, and often does not.</p>
<p>Trials are short and outcomes may be long. Effects appearing after five years are invisible in a two-year study, which is why post-marketing surveillance exists and why drugs are still withdrawn after approval.</p>
<p>Surrogate endpoints are a persistent trap. Measuring a marker that correlates with the outcome — cholesterol rather than heart attacks, tumour shrinkage rather than survival — is faster and cheaper, and sometimes badly misleading. Drugs that improved heart rhythm markers after myocardial infarction were shown, when a trial finally measured deaths, to increase mortality substantially.</p>
<p>Many questions cannot be randomised at all, for ethical or practical reasons. Nobody will randomise people to smoke. The case against smoking was built observationally, and it is overwhelming — which demonstrates that observational evidence can establish causation when the effect is enormous, the dose-response is clean, the temporal order is right, and a mechanism exists. Bradford Hill, who designed the first randomised trial, also wrote the criteria for when you may draw causal conclusions without one.</p>

<h2 id="Beyond_medicine">Outside medicine</h2>
<p>Randomised evaluation spread to economics and social policy over the last three decades, and the 2019 Nobel in economics recognised its use in development — trials of teaching methods, microcredit, deworming, cash transfers.</p>
<p>The gains have been real: several widely believed propositions about what helps poor households did not survive contact with a control group. The critiques are also substantive. A result from one district under one implementation may not generalise; the questions amenable to randomisation are not always the important ones, since you cannot randomise a trade policy or a constitution; and there are genuine concerns about experimenting on people with little power to refuse.</p>
<p>Online A/B testing is the same logic at enormous scale, and it is the most-used experimental method in the world by volume. Large platforms run thousands of concurrent randomised experiments. The methodology is sound and the striking finding, reported consistently by the companies doing it, is how often confident expert predictions about which variant will win are wrong — which is, in the end, the argument for the whole enterprise.</p>
`,
};
