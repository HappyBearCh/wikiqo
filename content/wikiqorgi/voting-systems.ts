import type { RewrittenArticle } from "./types";

export const votingSystems: RewrittenArticle = {
  slug: "voting-systems",
  title: "Voting systems: there is no fair way to add up preferences, and this is a theorem",
  sourceTitle: "Electoral system",
  dek: "Every method of turning individual rankings into a group ranking violates some condition everyone agrees is reasonable. This was proved in 1951.",
  standfirst:
    "The intuition that there must be a correct way to count votes, if only we were clever enough, is false in a specific and provable sense. Kenneth Arrow showed that a short list of entirely uncontroversial fairness conditions cannot all be satisfied at once by any ranking method. The practical question is therefore not which system is fair but which failure you prefer — and the systems in actual use differ enormously in how often and how badly they fail.",
  readingMinutes: 8,
  html: `
<h2 id="Condorcet">The paradox that starts it</h2>
<p>Consider three voters ranking three options. The first prefers A to B to C. The second prefers B to C to A. The third prefers C to A to B.</p>
<p>Compare them in pairs. A beats B, by two votes to one. B beats C, by two to one. And C beats A, by two to one.</p>
<p>There is no winner. The group's collective preference goes round in a circle, even though every individual has a perfectly consistent ordering. This is the Condorcet paradox, described in the 1780s, and it is not a defect of any particular counting method — it is a property of the preferences themselves.</p>
<p>The immediate consequence is that whoever controls the agenda controls the outcome. Take any two options first, then run the winner against the third, and you can produce any of the three as the final winner by choosing which pair goes first. Nothing dishonest occurs; the votes are counted correctly each time.</p>
<p>This is not a curiosity. It is why committee procedure, parliamentary amendment sequences and tournament seeding are contested so fiercely by people who understand them.</p>

<h2 id="Arrow">Arrow's theorem</h2>
<p>Kenneth Arrow asked in 1951 whether any method of aggregating individual rankings into a group ranking could satisfy a few minimal conditions.</p>
<p>The conditions are these. The method should produce a complete and consistent ranking from any set of individual rankings. If everyone prefers A to B, the group must rank A above B. The group's ranking of A against B should depend only on how individuals rank A against B, and not on what they think of some third option C. And no single individual should determine the outcome regardless of everyone else.</p>
<p>None of these looks negotiable. Arrow proved that with three or more options, no method satisfies all of them.</p>
<p>The condition that usually breaks is the third — independence of irrelevant alternatives. Its violation is what produces the spoiler effect: adding a candidate who cannot win nonetheless changes which of the others does. Every real system exhibits this in some form, and the American presidential elections of 2000 and 1992 are the standard citations.</p>
<p>Two clarifications matter, because Arrow's result is routinely overstated. It applies to methods that take rankings as input, so systems using ratings — where voters score options independently — escape its exact scope, though the related Gibbard–Satterthwaite theorem shows that every reasonable system can be gamed by strategic voting. And it does not say all systems are equally bad. It says none is perfect, which is a very different claim.</p>

<h2 id="First_past_the_post">The system with the worst properties</h2>
<p>Plurality voting — mark one candidate, most marks wins — is the simplest to run and performs poorly on nearly every criterion anyone has proposed.</p>
<p>It can elect a candidate a large majority actively opposes, whenever the opposition splits. With four candidates, thirty per cent can win against seventy per cent that is divided.</p>
<p>It punishes voters for supporting their actual preference, which is the most corrosive effect. A voter whose favourite is unlikely to win must choose between expressing a preference and influencing the outcome, and the rational choice is to abandon the preference. The system therefore does not measure what people want.</p>
<p>It produces two-party systems, reliably enough that the tendency is named Duverger's law, because third parties are squeezed from both directions — they cannot win, so voting for them is wasted, so they cannot win.</p>
<p>And its geographic version makes gerrymandering possible. When representation depends on district boundaries, drawing the boundaries determines the result. Packing opponents into a few districts they win overwhelmingly, and spreading the rest thinly across districts they narrowly lose, produces a legislature that does not resemble the vote. The technique is old enough to be named after a governor of Massachusetts in 1812 and precise enough now to be done by software.</p>

<h2 id="Alternatives">What the alternatives actually do</h2>
<p><strong>Two-round runoffs</strong> take the top two into a second election, which guarantees the winner has majority support against one opponent. It does not fix the first round, where vote-splitting can eliminate a candidate who would have beaten both finalists — which is precisely what happened in France in 2002.</p>
<p><strong>Ranked-choice voting</strong>, also called instant-runoff, has voters rank candidates; the lowest is eliminated and their votes transferred, repeatedly, until someone has a majority. It removes most of the incentive for tactical voting and lets people support minor candidates without waste. It can still fail in ways that surprise people — including cases where a candidate would have won had fewer people ranked them first — and it is harder to explain and to count.</p>
<p><strong>Condorcet methods</strong> elect the candidate who beats every other in a head-to-head comparison, which is arguably the correct answer when such a candidate exists. Sometimes none does, as the paradox shows, and the various methods differ only in how they resolve the cycle.</p>
<p><strong>Approval voting</strong> lets voters mark every candidate they find acceptable. It is dead simple to count on existing equipment, eliminates vote-splitting entirely, and forces a different strategic decision — where to set your own threshold of acceptability.</p>
<p><strong>Proportional representation</strong> addresses a different question altogether. Rather than asking who wins a seat, it asks that the legislature's composition match the votes. It effectively eliminates gerrymandering and wasted votes, and it produces coalition governments, so the trade-off is between representativeness and the directness of the link between a vote and a governing programme. Most established democracies use some form of it; the plurality systems are the outliers.</p>

<h2 id="Strategy">Nothing escapes strategy</h2>
<p>Gibbard and Satterthwaite proved independently in the 1970s that any voting system with three or more possible winners that is not a dictatorship and not random can be manipulated: there will be situations where a voter gets a better outcome by misrepresenting their preferences.</p>
<p>This is the companion result to Arrow's and it is arguably more damaging in practice, because it means honest voting cannot be made rational by design.</p>
<p>What differs between systems is how often manipulation is worth attempting and how much information it requires. Plurality is trivially manipulable and the manipulation is so routine that it has a polite name. Ranked systems generally require accurate knowledge of how everyone else will vote before a strategy can be identified, which makes strategic voting risky and rare.</p>
<p>The practical standard is therefore not immunity but resistance: how often does honest voting hurt you, and how hard is it to know when it will?</p>

<h2 id="What_to_take">What follows from all this</h2>
<p>The impossibility results are sometimes taken as showing that democracy is incoherent, which is a misreading with a poor track record of being made in good faith.</p>
<p>What they show is that aggregating preferences is a genuinely hard problem with no perfect solution, and that any real system embeds choices about which imperfections to accept. That is an argument for examining those choices, not for abandoning them.</p>
<p>It also reframes the usual debate. Arguing about which system is fairest in the abstract is a category error. The useful questions are empirical: how often does this system elect someone a majority opposes, how strongly does it punish honest voting, how much does the result depend on where lines were drawn, and how easily can a voter understand what happened to their ballot.</p>
<p>On those questions the systems differ enormously, and plurality voting — the most widely used in the English-speaking world — comes out worst on nearly all of them. That is a considerably more actionable conclusion than the theorem it is usually buried under.</p>
`,
};
