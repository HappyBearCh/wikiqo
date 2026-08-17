import type { RewrittenArticle } from "./types";

export const theJury: RewrittenArticle = {
  slug: "the-jury",
  title: "The jury: twelve amateurs who may return any verdict they like",
  sourceTitle: "Jury",
  dek: "It began as a panel of local witnesses who already knew the answer, and became the opposite: strangers required to know nothing.",
  standfirst:
    "A jury is a body of untrained people, chosen essentially at random, who decide questions of fact and cannot be punished for deciding them wrongly. Almost every feature of it looks like a design flaw until you notice that the alternative is letting the state decide alone whether the state's accusation is true. Its origins are nothing like its present justification, and its use is shrinking almost everywhere it exists.",
  readingMinutes: 7,
  html: `
<h2 id="Backwards_origins">It started as the opposite of what it is now</h2>
<p>The earliest English juries were assembled precisely because they knew the parties and the local facts. A panel of neighbours was the cheapest available way to establish what had happened in a village, and jurors were expected to arrive already informed and to investigate on their own account. A juror with no knowledge of the matter was useless.</p>
<p>The modern jury is selected on the opposite principle: anyone with knowledge of the case or the people involved is disqualified, and jurors are instructed to consider only what is presented in court. The institution inverted its own selection criterion over several centuries without changing its name.</p>
<p>What it replaced is worth remembering. Trial by ordeal — carrying hot iron, being bound and lowered into water — was the standard method of resolving disputed facts, on the theory that God would intervene. It collapsed after 1215, when the Fourth Lateran Council forbade clergy from participating, which removed the divine authority that made the whole procedure meaningful. Something had to fill the gap, and jury trial expanded to fill it.</p>
<p>Magna Carta, in the same year, promised no free man would be imprisoned except by the lawful judgment of his peers or the law of the land. The clause did not mean jury trial as we know it, and "free man" excluded most of the population, but it became the text everyone later argued from.</p>

<h2 id="Bushels_case">The right to be wrong</h2>
<p>The most important thing about a jury is that its verdict cannot be corrected, and this was established by a single confrontation.</p>
<p>In 1670 William Penn was prosecuted for preaching to an unlawful assembly. The evidence was not seriously in dispute and the judge directed a conviction. The jury acquitted. The judge refused to accept it and sent them back; they acquitted again. He then locked them up without food, water, or heat for two nights. They acquitted a third time, and he fined them and imprisoned four who would not pay.</p>
<p>Edward Bushel sought habeas corpus, and the Court of Common Pleas ordered the jurors released, holding that a juror cannot be punished for the verdict he gives. That decision is the foundation of jury independence in the common law world, and it is engraved at the Old Bailey.</p>
<p>The consequence is that a jury may acquit in the teeth of the evidence and the law, and nothing can be done about it. This is usually called jury nullification, and its status is peculiar: it undeniably exists, it cannot be prevented, and in most jurisdictions counsel may not tell the jury about it and judges will instruct them that they must apply the law as given. It is a power without a permission.</p>
<p>Its historical record cuts both ways, which is why nobody defends it wholeheartedly. English juries in the eighteenth century routinely undervalued stolen goods to avoid the death penalty for theft, and American juries refused to convict under the fugitive slave laws. Southern juries also refused, systematically, to convict white defendants for the murder of black victims. The same power did both.</p>

<h2 id="Who_is_on_it">Selection</h2>
<p>The jury's claim to legitimacy rests on being drawn from the community, and for most of its history it was not.</p>
<p>Property qualifications restricted service to men of means well into the twentieth century in England. Women were excluded entirely until 1919 there, and in some American states until the 1970s, sometimes through the device of automatic exemption on request, which produced the same result while sounding considerate. Racial exclusion operated formally and then, after formal exclusion was struck down, through discretionary challenges that were harder to attack.</p>
<p>The mechanism of the peremptory challenge — removing a juror without stating a reason — is the persistent problem. Courts have held that using them on racial grounds is unconstitutional, but a lawyer need only offer some other explanation, and the case law is a long record of implausible explanations being accepted. England abolished peremptory challenges outright in 1988, which is the cleaner solution and is the direction of travel elsewhere.</p>
<p>Random selection from broad rolls is the current ideal. It is only as representative as the roll, and rolls built from registered voters or licence holders undercount exactly the groups already least represented.</p>

<h2 id="How_they_decide">What actually happens in the room</h2>
<p>Deliberation is secret, which makes research difficult and has produced a literature based on shadow juries, post-verdict interviews, and simulations.</p>
<p>The findings are less alarming than the institution's critics expect. Juries and judges agree on the verdict in the large majority of cases; where they diverge, juries acquit more often than judges would, particularly where they consider the law harsh or the defendant sympathetic. Juries generally follow the evidence, and collective deliberation corrects a good deal of individual error and misremembering.</p>
<p>The weaknesses are specific rather than general. Juries are poor at evaluating statistical evidence, and the presentation of forensic probabilities has produced identifiable and repeated reasoning errors, some of which have caused wrongful convictions. Confident eyewitness testimony is persuasive out of all proportion to its reliability. And instructions to disregard evidence that has been ruled inadmissible do not work; the studies are consistent that such material continues to influence the verdict, sometimes more than if it had never been flagged.</p>
<p>Size and unanimity matter measurably. Smaller juries deliberate for less time and produce more variable outcomes. Requiring unanimity forces the majority to engage with dissenters rather than outvote them, which lengthens deliberation and appears to improve it — a point that arrived late in American law, where non-unanimous state verdicts were only held unconstitutional in 2020, in a decision that had to confront the fact that the rules concerned had been adopted specifically to dilute the votes of black jurors.</p>

<h2 id="Disappearing">It is vanishing</h2>
<p>The striking fact about the modern jury is how rarely it sits.</p>
<p>The overwhelming majority of criminal cases in the United States end in a guilty plea, commonly cited at above ninety per cent, so the trial right functions mainly as a bargaining position rather than an event. The gap between the sentence offered for a plea and the sentence risked at trial is often large enough that exercising the right becomes irrational even for someone who believes they are innocent, which is a coercion problem the system has not resolved.</p>
<p>Civil juries have been abolished for most purposes in England, surviving mainly for a few specific torts, and jury trial has never been the norm in most of the world. Civil law systems use professional judges, sometimes with lay assessors sitting alongside them, and produce reasoned written judgments — which is the one thing a jury verdict cannot supply, since it is a bare word with no explanation attached.</p>
<p>That opacity is either the institution's fatal defect or its point, depending on what you think it is for. A verdict without reasons cannot be reviewed for faulty reasoning. It also cannot be pressured, second-guessed, or held against the twelve people who gave it, which is the whole of what Bushel's case protected.</p>
`,
};
