import type { RewrittenArticle } from "./types";

export const theSteamEngine: RewrittenArticle = {
  slug: "the-steam-engine",
  title: "The steam engine: built to pump water out of coal mines, and it ran on the coal",
  sourceTitle: "Steam engine",
  dek: "The first practical engines were absurdly inefficient and it did not matter, because they sat on top of their own fuel supply.",
  standfirst:
    "The steam engine was not invented to power industry. It was invented to solve one specific problem — mines flooding faster than horses could bail them — and the earliest working version wasted well over ninety-nine per cent of its fuel. It survived that inefficiency because it was installed at the pithead, where fuel was effectively free. Everything afterwards followed from making it good enough to move.",
  readingMinutes: 8,
  html: `
<h2 id="The_problem">A pumping problem</h2>
<p>Deep mining runs into water. Below the water table a shaft fills continuously, and by the early eighteenth century British coal and tin mines had reached depths where horse-driven pumps could not keep up. Mines were being abandoned not because the seam was exhausted but because they could not be kept dry.</p>
<p>The economic value of a solution was therefore enormous and highly localised, which is why the first engines were built where they were.</p>
<p>Thomas Savery's engine of 1698 had no piston at all. Steam filled a vessel, was condensed by spraying cold water on the outside, and the resulting vacuum sucked water up a pipe. It could only lift water about as high as atmospheric pressure allows, roughly ten metres, and it consumed fuel prodigiously. It was barely useful and it demonstrated the principle.</p>
<p>Thomas Newcomen's engine of 1712 is the first that genuinely worked. Steam filled a cylinder beneath a piston, cold water was injected directly into the cylinder to condense it, and atmospheric pressure — not steam pressure — pushed the piston down. A beam transmitted the stroke to the pump rods. It is properly an atmospheric engine, and the steam's only job is to be removed.</p>
<p>Its efficiency was somewhere below one per cent. Hundreds were built anyway, because a mine that produces coal does not care what a machine at the pithead burns.</p>

<h2 id="Watt">What Watt actually changed</h2>
<p>The standard story has James Watt watching a kettle, which is nonsense. He was repairing a model Newcomen engine at Glasgow University in 1763 and noticed how much steam it took to run.</p>
<p>The diagnosis was precise. The cylinder was heated by steam and then cooled by injected water on every single stroke, so a large part of each charge of steam was spent reheating metal that had just been deliberately chilled. The cycle wasted energy by design.</p>
<p>His answer, in 1765, was the separate condenser: a second vessel, kept permanently cold, connected to the cylinder by a valve. Steam is drawn into the condenser and condensed there, while the working cylinder stays hot throughout. Nothing is heated and cooled repeatedly.</p>
<p>This roughly quadrupled efficiency, which is the difference between an engine that only makes sense on a coal seam and one worth installing anywhere fuel must be bought.</p>
<p>Watt added the rest over two decades: double action, with steam admitted alternately to each side of the piston; the sun-and-planet gear converting the beam's reciprocating motion into rotation, adopted because the obvious crank was patented by someone else; and the centrifugal governor, which throttles the steam as the engine speeds up and is the first widely used automatic feedback controller — the ancestor of control theory as a discipline.</p>
<p>His partnership with Matthew Boulton priced the engines by a share of the fuel saved compared with a Newcomen engine doing the same work, which is a remarkable piece of commercial design and made both men rich.</p>
<p>Watt also spent years enforcing his patents aggressively and blocked high-pressure development, which he considered dangerous. He was not wrong about the danger and the delay was real; the field moved quickly once the patent expired in 1800.</p>

<h2 id="High_pressure">High pressure, and why engines could move</h2>
<p>Watt's engines were low-pressure, large, and heavy — fine bolted to a foundation, useless on a vehicle. The power available depends on pressure and cylinder area, so a low-pressure engine needs an enormous cylinder for meaningful output.</p>
<p>Richard Trevithick built high-pressure engines from around 1800, accepting the risk of boiler explosion in exchange for a machine with a far better power-to-weight ratio. Boilers did explode, and fatally, and the resulting deaths drove both metallurgical improvement and the first industrial safety regulation.</p>
<p>Once an engine could be small enough to carry its own weight and still do useful work, locomotion followed almost immediately: Trevithick's rail engine in 1804, Stephenson's <em>Rocket</em> in 1829, and commercial steamships across the same period.</p>
<p>Compounding — expanding the steam through two or three cylinders in succession, at progressively lower pressure — extracted considerably more work from each charge and made long ocean voyages practical, since a ship's range is set by how much coal it must carry.</p>

<h2 id="Thermodynamics">The engine came first, the theory afterwards</h2>
<p>This is the part usually inverted. Steam engines were built, sold and improved for over a century before anyone understood the principles governing them, and the science emerged from the machines rather than the other way round.</p>
<p>Sadi Carnot, a French military engineer, published in 1824 an analysis asking what the maximum possible efficiency of a heat engine is. His answer was that it depends only on the temperatures of the hot and cold reservoirs, and not at all on the working substance or the mechanical arrangement. No engine, however cleverly built, can exceed the limit set by those two temperatures.</p>
<p>This is a startling result. It means the pursuit of a better engine design has a hard ceiling, and that raising efficiency requires raising the input temperature or lowering the exhaust temperature — which is why every subsequent improvement in thermal power generation has been a materials problem about how hot the machinery can be run.</p>
<p>Carnot's work was ignored for two decades and became the foundation of thermodynamics. The second law, in its various formulations, follows from it: heat does not flow spontaneously from cold to hot, no cyclic engine converts heat entirely into work, and entropy in an isolated system does not decrease.</p>
<p>A discipline that now describes the fate of the universe was assembled to answer a question about how good a pump could get.</p>

<h2 id="What_it_did">What changed because of it</h2>
<p>Water power dictated location: a mill went where a river fell, which meant industry was distributed along valleys and constrained by drought and freezing. Steam power detached production from geography. A factory could be built where labour, raw materials or transport were best, which is why industrial cities grew where they did.</p>
<p>It also detached work from daylight and season. A steam-driven mill runs at night, in winter, in a drought, at a rate set by management rather than by a river — which is a change in the character of employment as much as in output.</p>
<p>And the demand for coal drove deeper mining, requiring more pumping, requiring more engines, burning more coal. The feedback is the cleanest example in industrial history of a technology creating the conditions for its own expansion.</p>
<p>The Jevons paradox was formulated on exactly this case. William Stanley Jevons observed in 1865 that Watt's efficiency improvements had not reduced British coal consumption but increased it, because cheaper steam power made steam power worth using for far more things. Efficiency gains lower the effective price of a service, and demand responds. The observation remains the standard caution against assuming that using less energy per unit of output means using less energy.</p>

<h2 id="Still_here">It never actually left</h2>
<p>Reciprocating steam engines are obsolete. Steam is not.</p>
<p>The overwhelming majority of the world's electricity is generated by boiling water and driving a turbine with the steam — coal, gas, nuclear, biomass, concentrated solar and geothermal plants all do this, differing only in what supplies the heat. A nuclear reactor is, in the part that produces the electricity, a very elaborate way of running a steam engine.</p>
<p>The turbine replaced the piston because it converts steam flow directly into rotation without reciprocating masses, which allows far higher speeds and far greater output from a given size. Charles Parsons demonstrated his in 1884 and then, in 1897, by driving an unauthorised turbine-powered launch at high speed through the middle of a naval review, which was an unusually effective sales technique.</p>
<p>Carnot's limit still governs all of it, which is why efficiencies of modern thermal plants sit where they do and why the exhaust heat has to go somewhere — into a river, a cooling tower, or the sea.</p>
`,
};
