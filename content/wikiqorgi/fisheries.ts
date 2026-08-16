import type { RewrittenArticle } from "./types";

export const fisheries: RewrittenArticle = {
  slug: "fisheries",
  title: "Fisheries: the resource that collapses precisely because it recovers",
  sourceTitle: "Overfishing",
  dek: "A stock that regrows invites the belief that it cannot be exhausted. Newfoundland's cod proved otherwise, and did not come back.",
  standfirst:
    "Fish are renewable, which is exactly what makes them easy to destroy. A resource that replenishes itself supports the assumption that harvesting is sustainable by default, and the arithmetic of population growth means a stock can appear healthy until shortly before it is not. The collapses of the last century were not caused by ignorance of this. They were caused by institutions unable to act on it.",
  readingMinutes: 7,
  html: `
<h2 id="The_curve_everyone_is_managing">The curve everyone is managing</h2>
<p>The concept underlying fisheries management is maximum sustainable yield, and its logic is genuinely elegant.</p>
<p>An unfished population sits near the environment's carrying capacity, where growth is slow because competition for food and space is intense. Reduce it and the survivors grow faster and breed more successfully, so the population's <em>rate</em> of increase rises. Push it down too far and there are simply too few adults to reproduce. Somewhere in between — classically around half the unfished biomass — production peaks, and that surplus is what can be taken indefinitely.</p>
<p>The theory is sound and the practice is treacherous, for three reasons. Carrying capacity is not constant, since ocean conditions shift. The estimate of current biomass is uncertain, often badly so, because counting fish in the sea is genuinely hard. And the curve is asymmetric in its consequences: err on the low side and you forgo some catch, err on the high side and you erode the stock that generates next year's surplus.</p>
<p>Managing to the exact peak means being wrong half the time in the direction that compounds.</p>

<h2 id="Newfoundland">Newfoundland</h2>
<p>The Grand Banks cod fishery was described by sixteenth-century sailors as so dense that fish could be scooped in baskets, and it supported communities for five centuries.</p>
<p>Industrial trawling arrived in force after the Second World War, and catches rose through the 1960s to a peak far above anything the fishery had produced historically. They then fell. Quotas were set, and set generously; the scientific estimates of stock size were based partly on commercial catch rates, which stayed high because the boats had better technology and because cod aggregate — so a shrinking population can be found and caught efficiently right up to the end. The index designed to measure abundance was measuring the fleet's improving ability to find what remained.</p>
<p>In 1992 Canada declared a moratorium. Some 30,000 people lost their livelihoods more or less at once, in a region with no alternative industry.</p>
<p>The part that should be better known is what happened next. Thirty years on, the northern cod have not recovered to anything like their former abundance. The ecosystem appears to have reorganised — the crab and shrimp that cod preyed on expanded, and now occupy the space and may prey on juvenile cod, holding the system in a new state. Recovery is not the reverse of collapse, and the assumption that stopping the pressure restores the previous arrangement is not supported.</p>

<h2 id="Why_the_incentives_point_the_wrong_way">Why the incentives point the wrong way</h2>
<p>Open-access fisheries are the standard illustration of a commons problem, and the mechanism is worth stating exactly.</p>
<p>A fisher who restrains their catch bears the whole cost of that restraint and receives a tiny fraction of the benefit, since the fish they leave are available to everyone. A fisher who takes more captures the whole benefit and shares the cost across the fleet. Every individual acting sensibly produces a collective outcome nobody wanted.</p>
<p>Two further dynamics make it worse. Subsidies — for fuel, vessel construction and modernisation — keep fleets fishing past the point where the economics alone would stop them, and global fisheries subsidies run to tens of billions annually with a large share going to capacity-enhancing categories. And the race to fish, under a total quota with no individual allocation, rewards catching your share before someone else does, producing dangerous overcapitalisation and seasons that collapse to a few frantic days.</p>

<h2 id="Fishing_down_the_food_web">Fishing down the food web</h2>
<p>Daniel Pauly's analysis of global catch data found a systematic decline in the average trophic level of what is landed. Fleets take the large, long-lived, high-value predators first; as those decline, they move to smaller species lower down.</p>
<p>Catch tonnage can remain stable through this transition, which is why it looks fine on a spreadsheet. What is actually happening is a structural change in the ecosystem, and the smaller species being taken are often the food supply of the ones that were removed.</p>
<p>Pauly also named the more insidious problem: shifting baselines. Each generation of scientists and fishers takes the abundance they encountered at the start of their career as the natural state, so the reference point moves downward with each generation, and the cumulative decline becomes invisible to everyone living through it. Historical records — of catch weights, of fish sizes in old photographs, of species present in medieval middens — consistently describe seas far richer than any living person has seen.</p>

<h2 id="Bycatch_and_the_seabed">Bycatch and the seabed</h2>
<p>Two harms fall outside the target species entirely.</p>
<p>Bycatch — the unintended capture of other species — is enormous in some fisheries, and discarded animals are usually dead. Shrimp trawling has historically been the worst offender by ratio. Turtles, seabirds, dolphins and sharks are caught as byproducts of fisheries targeting other things, and for slow-breeding species this is enough to drive decline on its own. Gear modifications work well when adopted: turtle excluder devices, weighted longlines and streamers that keep albatrosses away from baited hooks have each substantially reduced mortality where required.</p>
<p>Bottom trawling drags weighted nets across the seafloor, and the habitat damage is comparable to clear-cutting. Structures built over centuries — cold-water coral, sponge beds — are removed in a single pass, and they are the nursery habitat that juvenile fish depend on.</p>

<h2 id="What_has_actually_worked">What has actually worked</h2>
<p>The picture is not uniformly grim, and the successes share features worth identifying.</p>
<p>Assigning secure, transferable shares of the quota to individuals or communities changes the incentive fundamentally: a fisher holding a percentage of future catch has a direct financial stake in the stock's size, and the race to fish disappears. Analyses of fisheries that adopted catch shares find markedly lower collapse rates. The distributional concerns are real — quota tends to consolidate, and fishing communities can lose access to a resource they historically worked — and are separable from the conservation result.</p>
<p>Marine protected areas work when they are genuinely no-take and genuinely enforced, and often increase catch in the surrounding waters through spillover. Paper parks accomplish nothing.</p>
<p>Well-managed fisheries recover. Several stocks in United States waters have rebuilt under legally binding rebuilding requirements — the key word being binding, since the failure mode everywhere has been managers empowered to set catch limits above scientific advice, and then doing so under pressure. Where the discretion was removed, the stocks came back.</p>
`,
};
