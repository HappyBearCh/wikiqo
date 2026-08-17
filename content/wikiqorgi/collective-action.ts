import type { RewrittenArticle } from "./types";

export const collectiveAction: RewrittenArticle = {
  slug: "collective-action",
  title: "Collective action: why groups with a common interest usually do nothing",
  sourceTitle: "Collective action problem",
  dek: "A million people each losing a small amount will lose to a hundred people each gaining a large one, reliably and for structural reasons.",
  standfirst:
    "The intuition that a group with a shared interest will act on it is one of the most persistent and least accurate assumptions in political analysis. Mancur Olson's argument, published in 1965, is that the opposite is usually true: large groups with diffuse interests organise badly, small groups with concentrated interests organise well, and the resulting asymmetry explains a great deal about who gets what.",
  readingMinutes: 7,
  html: `
<h2 id="The_logic">The free-rider problem</h2>
<p>Consider something that benefits everyone in a group whether or not they helped produce it: clean air, a functioning union, a road, a defended border, a maintained open-source library.</p>
<p>Each individual reasons the same way. My contribution is small relative to the whole, the outcome will barely change if I withhold it, and I receive the benefit either way. Contributing is therefore individually irrational, and if everyone reasons correctly, nothing is produced.</p>
<p>This is not cynicism about motives. It follows from the good being non-excludable — you cannot withhold it from those who did not pay — combined with any individual's negligible marginal influence.</p>
<p>Olson's crucial extension concerns size. In a small group, each member's contribution is a noticeable fraction of the total, defection is visible, and social pressure operates. In a large group, each contribution is negligible, defection is invisible, and there is no relationship to damage. So the ability to act collectively falls sharply as the group grows, which is exactly the opposite of the assumption that numbers mean power.</p>
<p>The uncomfortable corollary is that a group's political effectiveness is often inversely related to how many people it contains.</p>

<h2 id="Concentrated_costs">Concentrated benefits, diffuse costs</h2>
<p>This asymmetry is the single most useful lens in the study of regulation, and it explains outcomes that otherwise look like corruption or stupidity.</p>
<p>Suppose a policy transfers a hundred million from consumers to an industry of twenty firms. Each firm gains five million and will spend heavily to obtain it — hiring lobbyists, funding campaigns, producing research, attending every hearing. The cost falls across fifty million consumers at two pounds each, which is not worth anyone's afternoon to oppose.</p>
<p>The industry wins, and it wins even though the total loss exceeds the total gain. No bribery is required and no participant behaves irrationally.</p>
<p>The pattern is visible across sugar quotas, occupational licensing for trades where the public-safety case is thin, tariffs on specific products, taxi medallions, and the structure of building regulation. In each case a small identifiable group has a large stake and the opposing interest is spread so thinly that it never organises.</p>
<p>Regulatory capture follows from the same arithmetic. The regulated industry attends every consultation, employs people who understand the technical detail, and is the regulator's main source of information about its own sector. The public attends nothing. Over time the agency's view of the industry comes to resemble the industry's view of itself, without anyone having been bought.</p>

<h2 id="Solutions">What actually gets groups to act</h2>
<p>Olson's own answer was selective incentives: benefits available only to contributors, attached to the collective good but excludable.</p>
<p>Unions historically provided legal representation, strike pay, insurance and social clubs — private goods for members, funding an organisation whose main product was a public good. Professional associations provide credentials, journals and networks. Political parties in some periods provided jobs and favours. The public good is, in a sense, a by-product of an organisation held together by private benefits.</p>
<p>Compulsion is the blunter version, and it is why unions fought so hard over closed shops and why taxation is not voluntary. National defence is the standard example of a good that cannot be funded any other way.</p>
<p>Elinor Ostrom's work complicates Olson considerably and is the most important qualification to it. Studying commons managed successfully for centuries without either privatisation or state control, she identified the conditions that make self-governance work: clearly defined boundaries around the resource and the group, rules adapted to local circumstances, participation by users in setting those rules, monitoring by the users themselves, sanctions that escalate rather than starting at expulsion, and cheap local dispute resolution.</p>
<p>The common thread is that these conditions turn a one-shot anonymous interaction into a repeated one among people who know each other — which converts the problem from an incentive structure into a trust structure, and trust structures are solvable.</p>

<h2 id="Entrepreneurs">Who does the organising</h2>
<p>Olson's model struggles to explain why any large movement exists, and plainly they do.</p>
<p>Part of the answer is political entrepreneurship: individuals who bear the organising costs for reasons of their own — belief, ambition, career, or the satisfaction of the thing itself. A movement does not need everyone to contribute; it needs someone to absorb the fixed cost of starting.</p>
<p>Part is that participation is not purely instrumental. People join because of who they are and who they wish to be seen as, because friends are joining, and because the activity itself has value. The model's assumption that only the outcome matters is the assumption that fails.</p>
<p>And part is that thresholds matter enormously. Granovetter's threshold model observes that people differ in how many others must act before they will, and that a movement's success depends on the distribution of those thresholds rather than on average sentiment. A population where everyone requires a hundred prior participants never starts; the same population with a handful of unconditional joiners cascades. This is why the first movers in a protest matter out of all proportion to their number, and why regimes concerned with dissent concentrate on preventing small gatherings rather than large ones.</p>
<p>Communication technology lowers coordination costs sharply, which changes the calculation. Organising a demonstration once required an organisation with premises, staff and mailing lists; it now requires far less. The consequence, visible over the last two decades, is that large mobilisations form far faster and dissolve far faster — because the sustaining apparatus that used to be a precondition for assembling was also what kept a movement together afterwards.</p>

<h2 id="Sclerosis">Olson's second argument</h2>
<p>His later and more contested claim was about what accumulates over time.</p>
<p>Stable societies gradually acquire more organised interest groups, since organising takes years and undisturbed conditions favour it. These groups mostly pursue redistribution toward themselves rather than growth, because a group capturing a small share of national income gains almost nothing from making the pie larger and a great deal from taking a bigger slice.</p>
<p>The accumulation produces institutional sclerosis: a thickening layer of protections, restrictions, licences and carve-outs, each individually defended by a group that cares intensely and opposed by nobody in particular. Growth slows.</p>
<p>Olson's evidence was the post-war performance of Germany and Japan, whose interest-group structures had been destroyed, against Britain's, which had not. It is a suggestive comparison and a badly underdetermined one, since a great many other things differed, and the thesis remains argued over rather than established.</p>
<p>The underlying observation stands regardless of the macro claim. Arrangements benefiting a concentrated group at diffuse cost are extremely difficult to remove, precisely because the same asymmetry that created them protects them — and removal offers each opponent a small gain while threatening each beneficiary with a large loss, which is the original problem running in reverse.</p>
`,
};
