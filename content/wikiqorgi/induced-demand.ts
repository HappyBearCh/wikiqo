import type { RewrittenArticle } from "./types";

export const inducedDemand: RewrittenArticle = {
  slug: "induced-demand",
  title: "Traffic: why building more road makes congestion worse",
  sourceTitle: "Induced demand",
  dek: "Add a lane, and within a few years the new lane is as jammed as the old ones. This is the expected result, not a surprise.",
  standfirst:
    "The intuition that congestion is a capacity problem is almost irresistible: too many cars, not enough road, therefore build road. Sixty years of evidence says otherwise. Expanded highways fill up, on a fairly predictable schedule, and the resulting traffic volume rises roughly in proportion to the capacity added. The mistake is treating travel demand as a fixed quantity rather than something the road itself creates.",
  readingMinutes: 7,
  html: `
<h2 id="The_measurement">The measurement</h2>
<p>The claim is not rhetorical; it has been quantified repeatedly. The best-known study, by Gilles Duranton and Matthew Turner using American data across decades, found an elasticity close to one: increase lane-kilometres in a metropolitan area by ten per cent and vehicle-kilometres travelled increase by about ten per cent. They called it the fundamental law of road congestion.</p>
<p>The effect appears at every scale that has been checked, in different countries, using different methods. It is one of the more robust findings in transport economics, and it is routinely ignored in the appraisal of individual schemes — where the standard modelling assumes a fixed volume of traffic that will be distributed across the new capacity, producing forecast time savings that then fail to materialise.</p>

<h2 id="Where_the_extra_traffic_comes_from">Where the extra traffic comes from</h2>
<p>The new traffic is not conjured from nothing. It arrives from four identifiable sources, in roughly this order.</p>
<p><strong>Rerouting.</strong> Drivers already making the journey switch from parallel roads to the improved one. This is immediate and is the only component conventional models capture well.</p>
<p><strong>Retiming.</strong> People who had shifted their trips to avoid the peak move back into it, because the peak is now tolerable. This erodes the improvement without adding a single new journey.</p>
<p><strong>Mode shift.</strong> Some who took transit, cycled or shared a ride now drive, because driving has become relatively more attractive. This one is doubly costly, since it also reduces the revenue and ridership supporting the alternatives.</p>
<p><strong>New trips and relocation.</strong> Over years, people make journeys they previously would not have bothered with, and — the largest effect in the long run — they move. Cheaper travel time makes a house further out affordable in time as well as money, so development follows the road, and the new residents commute along it.</p>
<p>That last mechanism is why the effect is not a one-off adjustment. The road changes where people choose to live and where firms choose to locate, and those decisions generate the traffic that fills it. Land use and transport are one system, and treating them separately is the root of the error.</p>

<h2 id="It_is_the_price_that_is_wrong">It is the price that is wrong</h2>
<p>The underlying economics is simpler than the sociology. Road space at peak times is a scarce resource distributed at a price of zero, and the predictable result of pricing something valuable at zero is that demand exceeds supply and the shortfall is rationed by queuing.</p>
<p>Congestion is that queue. It is the cost the system charges when it declines to charge money, and it is a peculiarly wasteful form of payment, since the time lost is destroyed rather than transferred to anyone.</p>
<p>Each driver joining a congested road imposes a small delay on everyone already there — a cost they do not bear and therefore do not consider. That gap between private and social cost is a textbook externality, described by Arthur Pigou in 1920 using, as it happens, a road example.</p>
<p>The implication is that adding capacity cannot solve it. Free road space will be consumed until the queue is unpleasant enough to deter the next marginal driver, and that equilibrium is a property of demand and price, not of capacity. Build more and the equilibrium re-establishes at a higher volume with the same delay.</p>

<h2 id="What_does_work">What does work</h2>
<p>Congestion pricing addresses the actual mechanism, and where it has been implemented the results are consistent. London's charge, introduced in 2003, cut traffic in the zone substantially and durably. Stockholm's is the more instructive case: introduced as a seven-month trial against strong public opposition, followed by a referendum, and approved once residents had experienced the effect. Singapore has priced roads since 1975 and varies the charge by road and time of day.</p>
<p>The consistent political pattern is that these schemes are unpopular beforehand and popular afterwards, which is a difficult sequence for elected officials to act on.</p>
<p>The corollary of induced demand is also real and less discussed. Reducing road capacity does not produce the gridlock predicted: traffic evaporates, as some journeys are retimed, rerouted, shifted to other modes or abandoned. Studies of dozens of road closures and removals found substantially less traffic afterwards than the sum of what the closed road and its alternatives had carried. Seoul removed an elevated motorway and restored the stream beneath it; San Francisco did not rebuild the Embarcadero Freeway after earthquake damage. Neither produced the forecast collapse.</p>
<p>The other effective lever is land use. Distances that can be covered on foot, by bike or by frequent transit generate fewer car trips, and the densities that make transit viable are largely a matter of what zoning permits. A city that mandates parking minimums and separates housing from everything else has decided its traffic pattern in advance.</p>

<h2 id="Why_the_wrong_answer_persists">Why the wrong answer persists</h2>
<p>Given the evidence, the persistence of road-widening as a congestion remedy needs explaining, and the explanation is mostly institutional rather than intellectual.</p>
<p>Highway agencies are funded and evaluated on building highways. Appraisal methods monetise forecast time savings, which produces favourable benefit-cost ratios precisely because they assume the induced traffic away. Construction is visible, attributable and ribbon-cuttable, whereas a pricing scheme is a charge levied on voters by name.</p>
<p>There is also a genuine framing problem. Congestion feels like a shortage, because the experience of sitting in it is the experience of insufficient road. The counterintuitive part is that the queue is doing a job — it is the mechanism allocating a free resource — and removing the queue without replacing the allocation mechanism simply moves the equilibrium.</p>
<p>None of which means road capacity never helps. A genuine bottleneck, a missing link, a road serving growth that has already occurred can all be worth building. What the evidence rules out is the general proposition that congestion can be built away, and that is the proposition most schemes are still sold on.</p>
`,
};
