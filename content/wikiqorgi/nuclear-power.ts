import type { RewrittenArticle } from "./types";

export const nuclearPower: RewrittenArticle = {
  slug: "nuclear-power",
  title: "Nuclear power: the safest way to generate electricity, and the least trusted",
  sourceTitle: "Nuclear power",
  dek: "Deaths per unit of energy put it alongside wind and solar. Its problem has never been the number.",
  standfirst:
    "Count deaths per terawatt-hour and nuclear power sits among the safest sources ever operated, well ahead of every fossil fuel and comparable to renewables. This is not a contested figure. Yet it is the source most people fear most, and the gap between the statistic and the perception is not simple irrationality — it reflects real features of the risk that a single number does not capture, and a history in which the industry earned a great deal of the distrust.",
  readingMinutes: 8,
  html: `
<h2 id="The_reaction">What a reactor is doing</h2>
<p>A uranium-235 nucleus struck by a slow neutron splits, releasing energy and two or three further neutrons. If on average exactly one of those goes on to split another nucleus, the reaction sustains itself at a constant rate. Above one it grows; below one it dies out.</p>
<p>The energy released is enormous per unit mass — roughly a million times that of a chemical reaction — because it comes from the strong nuclear force rather than from electron bonds. A single fuel pellet the size of a fingertip contains energy comparable to about a tonne of coal.</p>
<p>Natural uranium is over 99 per cent uranium-238, which does not sustain fission with slow neutrons, and well under one per cent uranium-235. Most reactors require enrichment to a few per cent, which is the technically demanding step and the one that connects civil power to weapons, since the same equipment taken much further produces weapons material.</p>
<p>Neutrons emerging from fission are too fast to be efficiently captured, so a moderator — ordinary water, heavy water or graphite — slows them by collision. The choice of moderator and coolant determines almost everything else about a reactor's design and its failure modes.</p>
<p>Everything past this point is conventional. The fission heats water, the steam drives a turbine, the turbine drives a generator. A nuclear plant is a steam engine with an unusual firebox.</p>

<h2 id="Safety_numbers">The numbers, stated plainly</h2>
<p>Comparisons of mortality per unit of electricity generated, which include mining, construction, operation and accidents, consistently place coal worst by a very large margin — largely through air pollution rather than accidents — with oil next, then gas, then hydro, and nuclear, wind and solar clustered at the bottom in the same order of magnitude.</p>
<p>Coal's toll is measured in the hundreds of thousands of deaths per year globally from particulate air pollution, and it is invisible because it consists of ordinary cardiovascular and respiratory deaths distributed across populations with no identifiable cause of death naming the power station.</p>
<p>Chernobyl in 1986 caused a documented death toll in the dozens from acute radiation and firefighting, plus several thousand thyroid cancers among people exposed as children — most of which were treatable and which would have been largely prevented by prompt iodine distribution and a milk ban. Projections of eventual excess cancers over the following decades vary widely depending on the model used, and the models disagree substantially about very low doses.</p>
<p>Fukushima in 2011 caused no deaths from radiation. The evacuation caused a substantial number, particularly among elderly and hospitalised people moved in haste, and the psychological and social consequences of long-term displacement have been severe. The disaster was triggered by a tsunami that killed something approaching twenty thousand people, and the reactor accident is the part everyone remembers.</p>

<h2 id="Why_the_fear">Why the perception does not follow the numbers</h2>
<p>Dismissing public fear as ignorance is both unkind and analytically lazy. The features that make nuclear risk feel different are real, and risk perception research identifies them consistently.</p>
<p>The harm is invisible and undetectable by any sense. You cannot see, smell or feel radiation, which removes every ordinary means of self-protection.</p>
<p>The consequences are delayed and probabilistic. A dose received today may express as a cancer in twenty years, or not, and no individual can ever know which.</p>
<p>The risk is imposed rather than chosen, and it lands on people who receive no particular benefit — a person living near a plant has no more electricity than anyone else.</p>
<p>The failures are concentrated rather than distributed. A thousand deaths spread thinly across a decade of coal smoke does not register as an event; a hundred deaths in one place with a name does.</p>
<p>And the association with weapons is not a confusion. The technologies genuinely share ancestry, several civil programmes were built alongside military ones, and the reassurance that they are separate has not always been true.</p>
<p>Layered on top is a documented history of understatement by operators and regulators — at Windscale, at Three Mile Island, at Chernobyl, at Fukushima — which is the ordinary way institutions destroy their own credibility and then complain about being disbelieved.</p>

<h2 id="Waste">The waste problem, which is small and unsolved</h2>
<p>Spent fuel is intensely radioactive, remains hazardous for a very long time, and is currently held in pools and dry casks at reactor sites in nearly every country that has reactors.</p>
<p>The volumes are strikingly small. All the high-level waste ever produced by civil nuclear power worldwide would occupy a space of a few sports fields at modest depth. Coal ash, by contrast, is produced in hundreds of millions of tonnes annually, contains heavy metals and — because coal contains traces of uranium and thorium — is itself mildly radioactive, and is disposed of in unlined ponds without much comment.</p>
<p>Deep geological disposal is the accepted technical solution and the physics is not seriously disputed: stable rock formations have contained material for hundreds of millions of years, and the natural fission reactors that operated at Oklo in Gabon two billion years ago left their products largely in place.</p>
<p>Finland is the only country to have actually built one. Onkalo is excavated, licensed and beginning operation. The United States spent decades and a great deal of money on Yucca Mountain and abandoned it politically rather than technically.</p>
<p>The obstacle is consent, not geology. Nobody wants the repository, everyone wants the problem solved, and the Finnish approach — a voluntary process with an existing nuclear community and genuine local veto — is the only one that has worked. That is a finding about siting procedure that applies well beyond nuclear waste.</p>

<h2 id="Economics">The reason it is not being built</h2>
<p>The decisive problem for nuclear power in most Western countries is not safety and not waste. It is capital cost and construction time.</p>
<p>Recent Western projects have run years late and multiples over budget. Flamanville in France, Hinkley Point C in Britain and Vogtle in the United States all followed the pattern. Since the cost of a nuclear plant is overwhelmingly the cost of building it, and since that cost is financed over a long construction period, delay compounds directly into price.</p>
<p>The causes are argued about. Loss of the industrial supply chain and the skilled workforce during the decades when little was built is clearly part of it. First-of-a-kind engineering for new designs is part of it. Regulatory processes that change during construction are part of it. So is the fact that each plant has tended to be a bespoke project rather than a repeated build.</p>
<p>South Korea and, more recently, China have built more cheaply and faster, and the most credible explanation is repetition — building the same design many times with a standing workforce, which is how costs fall in any construction industry.</p>
<p>Meanwhile solar and wind costs have fallen dramatically, which changes the comparison. The remaining argument for nuclear is that it supplies power independent of weather and takes very little land, and that a grid running mostly on variable sources needs something firm — a role currently filled by gas.</p>

<h2 id="Whats_next">What might change it</h2>
<p>Small modular reactors are the main hope, and the reasoning is about manufacturing rather than physics. Building reactors in a factory in repeated units, and shipping them, replaces bespoke site construction with production learning. Several designs are licensed or under construction, and none has yet demonstrated the cost claims, which will only be settled by building a lot of them.</p>
<p>Alternative fuel cycles — thorium, fast reactors that consume long-lived waste, molten salt designs — have real technical merits and a long history of remaining ten years away.</p>
<p>Fusion is a different technology entirely, with no meltdown mechanism and no long-lived waste, and remains unproven at net power on any commercial timescale.</p>
<p>The honest summary is that nuclear power is a demonstrated, low-carbon, low-mortality source that most rich countries have found themselves unable to build affordably, for reasons that are institutional rather than physical — and that this is a harder problem to fix than a technical one would be.</p>
`,
};
