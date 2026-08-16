import type { RewrittenArticle } from "./types";

export const semiconductors: RewrittenArticle = {
  slug: "semiconductors",
  title: "Semiconductors: how deliberate contamination became the basis of everything",
  sourceTitle: "Semiconductor",
  dek: "Silicon is useless as a conductor and useless as an insulator. Its value is that you can switch it between the two.",
  standfirst:
    "The entire digital world runs on a material chosen for being mediocre at conducting electricity. What matters about silicon is not what it does but what it can be made to do: add a few atoms of the right impurity, in the right place, and you get a region whose conductivity you can control with a voltage. Every transistor is that trick, repeated a few billion times on a chip.",
  readingMinutes: 8,
  html: `
<h2 id="Between_conductor_and_insulator">Between conductor and insulator</h2>
<p>Whether a material conducts depends on whether its electrons can move freely. In a metal they can. In an insulator they are bound, and the energy needed to free one — the band gap — is too large to supply.</p>
<p>Semiconductors have a small band gap. At absolute zero they would be insulators; at room temperature, thermal energy frees a modest number of electrons, so they conduct weakly. That intermediate position is not what makes them useful on its own. What makes them useful is that the number of available charge carriers can be altered by many orders of magnitude by adding impurities.</p>
<p>This is doping, and it is deliberate contamination at a precision that is difficult to convey. Silicon has four outer electrons and bonds to four neighbours in a tidy lattice. Substitute an atom with five outer electrons — phosphorus, say — and the fifth has no bond to occupy and is easily freed, giving an excess of mobile negative carriers: n-type. Substitute an atom with three — boron — and there is a missing bond, a hole, which neighbouring electrons hop into, so the hole moves and behaves as a mobile positive carrier: p-type.</p>
<p>The concentrations involved are on the order of one dopant atom per million or per billion silicon atoms. Which means the base material must be purer than that by a wide margin — electronic-grade silicon is among the purest bulk substances ever manufactured, at better than one impurity atom in a billion.</p>

<h2 id="The_junction">The junction</h2>
<p>Put n-type and p-type material in contact and something useful happens at the boundary. Electrons diffuse across into the p-side, holes diffuse the other way, and they annihilate near the junction, leaving a region depleted of carriers with a built-in electric field across it.</p>
<p>That field is directional. Apply voltage one way and it collapses the barrier, so current flows freely. Apply it the other way and it reinforces the barrier, so almost nothing flows. A p-n junction is a one-way valve for current — a diode — and it is the foundation of everything else.</p>
<p>Two variants matter. Photons striking the depletion region can knock electrons loose, and the built-in field sweeps them out as current: that is a solar cell, and a photodiode. Running it backwards — injecting carriers that recombine and release their energy as light — is a light-emitting diode, whose colour depends on the band gap of the material chosen.</p>

<h2 id="The_transistor">The transistor</h2>
<p>The invention that mattered came at Bell Labs in 1947, when Bardeen, Brattain and Shockley demonstrated amplification in a semiconductor. It replaced the vacuum tube, which was bulky, hot, power-hungry and prone to failure.</p>
<p>The design that actually took over is the MOSFET, and its operation is worth understanding because it explains why chips behave as they do. It has three terminals: a source and a drain, separated by a channel, with a gate electrode sitting above the channel — separated from it by a very thin insulating layer of silicon dioxide.</p>
<p>Apply a voltage to the gate and its electric field reaches through the insulator and attracts carriers into the channel, forming a conducting path between source and drain. Remove it and the channel disappears. The gate controls current without any current flowing through the gate itself, because the insulator blocks it — which is why the device consumes power mainly when switching rather than continuously.</p>
<p>Silicon's decisive advantage over the germanium used in the first transistors is exactly this insulator. Silicon dioxide grows on silicon by simply heating it in oxygen, forming a stable, high-quality, chemically compatible insulating layer. Germanium's oxide is water-soluble and useless. The best semiconductor won because of the properties of its rust.</p>

<h2 id="Printing_with_light">Printing with light</h2>
<p>The integrated circuit — many components fabricated together on one piece of silicon — was conceived independently by Jack Kilby and Robert Noyce around 1958. Noyce's version, using a planar process with components connected by metal deposited on a flat oxide surface, is the one that scaled.</p>
<p>Manufacture is photolithography, and it is essentially printing. Coat the wafer in a light-sensitive polymer, project a pattern onto it through a mask, develop away the exposed regions, then etch, deposit or implant through the resulting stencil. Repeat, layer by layer, with alignment accuracy far finer than the features themselves. A modern chip requires dozens of such cycles.</p>
<p>Feature size is limited by the wavelength of the light, which is why the industry has pushed to ever shorter wavelengths and now uses extreme ultraviolet at 13.5 nanometres — light so readily absorbed that it cannot pass through any lens or any air, so the entire optical path is mirrors in vacuum, and the light itself is generated by hitting droplets of molten tin with a laser twice. The machines that do this are made by essentially one company, cost a few hundred million dollars each, and are among the most complex objects ever built.</p>

<h2 id="Moores_law_and_what_replaced_it">Moore's law, and what replaced it</h2>
<p>Gordon Moore observed in 1965 that the number of components per chip was doubling annually, later revised to roughly every two years. It was an observation about an industry's trajectory, not a law of physics, and it functioned largely as a target that the industry then organised itself to hit.</p>
<p>The associated benefit was Dennard scaling: as transistors shrank, they also got faster and used less power per transistor, so performance improved without heat becoming worse. That relationship broke down around 2005, when leakage currents at small scales stopped falling. Clock speeds stopped rising as a result — which is why processors have been stuck around a few gigahertz for two decades, and why the industry moved to multiple cores rather than faster ones.</p>
<p>Transistor counts have continued climbing, though the node names — 5 nanometre, 3 nanometre — no longer correspond to any physical dimension and are essentially marketing labels for process generations. Gains now come from three-dimensional structures that wrap the gate around the channel, from stacking chips vertically, and from specialised architectures designed for particular workloads rather than general computation.</p>

<h2 id="A_chokepoint">A chokepoint</h2>
<p>The supply chain is the most concentrated of any critical industry, and the concentration is not a matter of policy but of accumulated capability.</p>
<p>Leading-edge fabrication is dominated by a very small number of firms, with a large majority of the most advanced chips made in Taiwan. The lithography machines come from one supplier in the Netherlands. Certain specialty chemicals and substrates come from a handful of Japanese producers. Chip design tools come from two or three American companies.</p>
<p>Each of these is a genuine bottleneck, and none can be replaced quickly, because the barrier is tacit process knowledge accumulated over decades rather than any single patent or machine. A new leading-edge fab costs tens of billions and takes years, and building one does not confer the yield expertise that makes it economic.</p>
<p>This is why semiconductors have moved from a technical subject to a geopolitical one, and why export controls, subsidy programmes and reshoring efforts have become a central instrument of industrial policy in several countries at once.</p>
`,
};
