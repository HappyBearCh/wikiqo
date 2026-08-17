import type { RewrittenArticle } from "./types";

export const refrigeration: RewrittenArticle = {
  slug: "refrigeration",
  title: "Refrigeration: moving heat uphill, and rearranging where food comes from",
  sourceTitle: "Refrigeration",
  dek: "A fridge does not make cold. It pumps heat out of a box and dumps it in your kitchen, and the whole global food system now depends on doing that continuously.",
  standfirst:
    "Cold is not a substance and cannot be added to anything. A refrigerator works by moving heat in the direction it does not want to go — out of a cold interior into a warmer room — which costs energy and requires a working fluid that boils at a convenient temperature. Getting that fluid right took a century and produced two of the largest environmental problems of the modern era.",
  readingMinutes: 7,
  html: `
<h2 id="The_cycle">The cycle</h2>
<p>The mechanism is a loop exploiting a simple fact: evaporating a liquid absorbs a lot of heat, and condensing a vapour releases it.</p>
<p>Inside the cold compartment, low-pressure refrigerant evaporates, absorbing heat from the food and air around it. The resulting vapour is drawn into a compressor, which raises its pressure and, in doing so, its temperature — above the temperature of the room. It then passes through condenser coils on the outside, where it gives up that heat to the kitchen and condenses back to liquid. An expansion valve drops the pressure sharply, the liquid cools dramatically, and it returns to start again.</p>
<p>Two consequences follow that people find counterintuitive. A refrigerator heats the room it is in, always, by more than it cools its interior — the difference is the compressor's electrical input, which also ends up as heat. And leaving the door open to cool a kitchen makes the kitchen warmer.</p>
<p>An air conditioner is the same machine with the cold side indoors and the hot side outside. A heat pump is the same machine again, run in the direction that heats a house, and its apparent efficiency above 100 per cent is not a violation of anything: it is not making heat, it is moving heat that already exists, and moving is cheaper than making.</p>

<h2 id="Before_machines">Before machines</h2>
<p>The natural ice trade was a substantial industry and is largely forgotten. Ice was cut from frozen lakes in New England and Norway in winter, stored in insulated ice houses packed with sawdust, and shipped — including to India and the Caribbean, where a large fraction melted en route and the remainder still turned a profit.</p>
<p>It supported the first urban cold chains: ice boxes in homes, iced railcars carrying meat, and the ice cream trade. It was also entirely dependent on cold winters, and warm years caused genuine shortages.</p>
<p>Mechanical refrigeration arrived commercially in the second half of the nineteenth century, first in industries that could not function without it — brewing, meatpacking, and shipping frozen meat from Argentina, Australia and New Zealand to Europe, which reorganised the world's meat trade within a couple of decades.</p>

<h2 id="The_refrigerant_problem">The refrigerant problem</h2>
<p>Early refrigerants were chosen for their thermodynamic properties and were all, in domestic terms, unacceptable. Ammonia is toxic. Sulphur dioxide is toxic and corrosive. Methyl chloride is toxic and flammable. Domestic refrigerators using them killed people through leaks, which is why home refrigeration was slow to spread despite the technology existing.</p>
<p>The response, in the 1920s, was a deliberate search for a compound that was non-toxic, non-flammable, and thermodynamically suitable. Thomas Midgley's team produced chlorofluorocarbons, and they were exactly as advertised: stable, inert, safe to breathe, harmless in every test anyone thought to run. Midgley demonstrated the point publicly by inhaling the vapour and using it to blow out a candle.</p>
<p>CFCs made domestic refrigeration and air conditioning ordinary. They were also used as aerosol propellants, foam-blowing agents and solvents. Their virtue — extreme chemical stability — turned out to be the problem: nothing in the lower atmosphere destroys them, so they persist and drift upward.</p>

<h2 id="What_they_did_up_there">What they did up there</h2>
<p>In the stratosphere, ultraviolet light finally breaks CFCs apart, releasing chlorine atoms. A chlorine atom catalyses the destruction of ozone and emerges unchanged, ready to do it again — one atom can destroy many thousands of ozone molecules before it is eventually removed.</p>
<p>Ozone in the stratosphere absorbs the ultraviolet wavelengths that damage DNA. Its depletion, discovered over Antarctica in 1985 by British Antarctic Survey scientists whose measurements were so far from expectation that they initially suspected instrument failure, was a straightforward threat to health and ecosystems.</p>
<p>The Montreal Protocol, agreed in 1987, phased out CFC production and is the most successful environmental treaty ever concluded — universally ratified, and the ozone layer is measurably recovering, with full repair projected around the middle of this century. It worked because substitutes existed, the industry could produce them, the harm was clearly attributable, and the timeline for damage was short enough to concentrate minds.</p>
<p>Midgley, incidentally, had earlier developed tetraethyl lead as a petrol additive. One chemist is thus responsible for both leaded petrol and CFCs — an environmental record that is difficult to match.</p>

<h2 id="The_replacement_problem">The replacement problem</h2>
<p>CFCs were replaced by HCFCs and then HFCs, which do not deplete ozone. HFCs are, however, extremely potent greenhouse gases, with warming effects per molecule hundreds to thousands of times that of carbon dioxide.</p>
<p>The Kigali Amendment of 2016 addresses this by phasing them down in turn, and the industry is moving to hydrocarbons — propane and isobutane, which are excellent refrigerants and flammable, bringing the story back to where it started — along with carbon dioxide and ammonia in industrial settings.</p>
<p>The larger issue is demand. Cooling accounts for a substantial and rapidly rising share of global electricity, and air conditioning demand is growing fastest in hot countries as incomes rise. It is a feedback with an uncomfortable shape: warming increases cooling demand, which increases emissions.</p>

<h2 id="What_it_changed">What it changed</h2>
<p>Refrigeration restructured food more thoroughly than almost any other technology. It broke the link between where food is grown and where it is eaten, and between when it is harvested and when it is consumed. Year-round fresh produce, a diet not dominated by preserved food, and the entire supermarket model all depend on an unbroken cold chain.</p>
<p>The health effects were substantial and are hard to see because they consist of absences: less food poisoning, less reliance on salting and smoking, better nutrition in winter. Stomach cancer rates fell markedly across the twentieth century in industrialised countries, and the decline in salt-preserved food is among the leading explanations.</p>
<p>The cold chain is also the reason modern vaccination works. Most vaccines require continuous refrigeration from manufacture to administration, and the last-mile failure of that chain is a routine obstacle in immunisation campaigns — which is why the vaccines developed for recent pandemics with ultra-cold storage requirements posed a logistical problem in some countries and an insurmountable one in others.</p>
`,
};
