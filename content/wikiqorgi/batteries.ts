import type { RewrittenArticle } from "./types";

export const batteries: RewrittenArticle = {
  slug: "batteries",
  title: "Batteries: a controlled corrosion, forced to route its electrons through you",
  sourceTitle: "Electric battery",
  dek: "The chemistry wants to happen anyway. A battery's design is entirely about making the electrons take the long way round.",
  standfirst:
    "A battery is two materials that would react if allowed to touch, deliberately kept apart. The reaction can only proceed if electrons travel from one to the other, and the only path provided runs out through a terminal, through whatever you have connected, and back in the other side. Everything difficult about batteries — capacity, lifetime, charging speed, fires — follows from managing a reaction that is straining to happen the short way.",
  readingMinutes: 7,
  html: `
<h2 id="How_it_works">The trick</h2>
<p>Some materials give up electrons more readily than others. Put a metal that surrenders them easily next to a compound that accepts them eagerly, and there is a chemical incentive for electrons to move from one to the other.</p>
<p>Allow the two to touch and the reaction runs immediately, releasing its energy as heat and accomplishing nothing. This is corrosion, and it is what a battery is preventing.</p>
<p>Instead the two electrodes are separated by an electrolyte, which conducts ions but not electrons. Ions can cross to balance the charge; electrons cannot. The reaction therefore stalls unless the electrons are given another route, and the external circuit is that route. They flow out of the negative electrode, through the load — doing work on the way — and back into the positive one.</p>
<p>The voltage is set by the chemistry: how strongly one material wants to give electrons up and the other wants to take them. It is a property of the materials and essentially independent of the cell's size. Capacity, by contrast, is just how much material is present, which is why a small and a large alkaline cell both read 1.5 volts and last very different lengths of time.</p>
<p>A rechargeable cell is one whose reaction can be driven backwards by applying a voltage, physically moving the material back where it started. Whether this is possible depends on whether the products form in a structure that can be reversed, and most chemistries cannot.</p>

<h2 id="Volta">Frogs, and an argument that was lost usefully</h2>
<p>Luigi Galvani found in the 1780s that a frog's leg twitched when touched with two different metals, and concluded that he had found animal electricity — a vital force resident in living tissue.</p>
<p>Alessandro Volta disagreed, arguing that the electricity came from the junction of dissimilar metals and that the frog was merely a detector. To prove it he built a device with no biology in it at all: alternating discs of zinc and copper separated by brine-soaked cloth, stacked into a pile. It produced a steady current, in 1800, and settled the argument.</p>
<p>Galvani was wrong about the frog and right that biological tissue generates electrical signals, which is the ordinary fate of interesting mistakes.</p>
<p>The voltaic pile mattered enormously because it was the first source of continuous current. Everything before it produced static discharges — a spark and then nothing. A steady current made electrochemistry possible immediately: within weeks water was being split into hydrogen and oxygen, and within a decade Humphry Davy had isolated sodium, potassium, calcium and magnesium by electrolysis, which is a substantial fraction of the periodic table discovered with one device.</p>

<h2 id="Lead_acid">The chemistry that would not die</h2>
<p>Gaston Planté's lead-acid cell of 1859 is the first practical rechargeable battery, and it is still manufactured in enormous quantities.</p>
<p>By modern standards it is dreadful. It is extremely heavy, since lead is dense and there is a great deal of it. Its energy density is among the worst of any battery in production. It contains sulphuric acid and a toxic heavy metal.</p>
<p>It survives because it does one thing supremely well: deliver a very large current briefly. Starting an engine requires hundreds of amps for a second or two, and lead-acid's low internal resistance handles this better than most alternatives. It is also cheap, tolerant of abuse, and the most recycled consumer product in the world by mass — the closed loop for automotive batteries recovers the great majority of the lead, which is a genuine and rarely cited success in materials recovery.</p>
<p>It is a useful corrective to the assumption that better technology displaces worse. A hundred-and-sixty-year-old chemistry remains the correct answer to a specific question.</p>

<h2 id="Lithium">Lithium, and why it took so long</h2>
<p>Lithium is the obvious candidate for a battery: it is the lightest metal and gives up its electron readily, which is exactly the combination that produces high energy per unit mass.</p>
<p>It is also violently reactive with water and air, which is why the obvious candidate took a century to use.</p>
<p>The solution, developed through the 1970s and 80s, was to avoid metallic lithium entirely. In a lithium-ion cell, lithium exists only as ions moving between two host structures — a layered oxide on one side and graphite on the other — that absorb them into their lattices without changing shape much. Charging drives the ions into the graphite; discharging sends them back. The materials are hosts rather than reactants, which is why the cell survives hundreds of cycles.</p>
<p>Stanley Whittingham, John Goodenough and Akira Yoshino shared the 2019 chemistry Nobel for the successive steps. Goodenough's cobalt oxide cathode in 1980 supplied the voltage; Yoshino's use of carbon for the anode made it safe enough to sell; Sony commercialised it in 1991. Goodenough was 97 when he received the prize, and was still publishing.</p>
<p>Everything portable that has appeared since — laptops, phones, cordless tools, drones, electric vehicles, grid storage — depends on this. It is difficult to identify another single component that gated as many product categories at once.</p>

<h2 id="Failure">Why they catch fire and why they wear out</h2>
<p>A lithium-ion cell contains a flammable organic electrolyte and a great deal of stored energy separated by a plastic film tens of micrometres thick. If that separator is punctured, crushed, or degraded, the electrodes touch and the energy discharges internally as heat.</p>
<p>Above a certain temperature the cell enters thermal runaway: heat drives reactions that produce more heat, faster, and the process cannot be stopped once started. The cell vents flammable gas and burns at a temperature that reignites readily, which is why lithium fires are difficult for conventional extinguishers and why aviation rules treat loose cells the way they do.</p>
<p>Ageing is a separate and slower failure. Each charge cycle leaves a little lithium locked into an interfacial layer on the anode, permanently unavailable. The electrode materials crack slightly as ions move in and out. Both effects accumulate, which is why capacity declines with cycle count and why heat — which accelerates every side reaction — is the main determinant of how long a battery lasts. A phone left in a hot car ages measurably faster than one that is not.</p>
<p>Fast charging trades lifetime for convenience, since high currents encourage lithium to plate out as metal on the anode rather than intercalating into it, which both loses capacity and grows structures that can eventually reach the separator.</p>

<h2 id="Limits">The constraint that will not move</h2>
<p>Battery energy density improves at a few per cent a year, which is respectable and is nothing like the exponential improvement people accustomed to semiconductors expect.</p>
<p>The reason is that a transistor gets better by getting smaller, and a battery's capacity is set by chemistry — how much energy a given reaction releases per unit mass — which has a hard ceiling determined by the periodic table. There is no equivalent of shrinking.</p>
<p>Petrol holds roughly fifty times more energy per kilogram than the best lithium-ion cells. Electric vehicles are competitive despite this only because electric motors are around three times more efficient than internal combustion engines, and because a car does not need to carry a fifty-fold margin.</p>
<p>The gap is why battery-powered aviation remains limited to short flights and small aircraft, and why the argument about it is a physics argument rather than an engineering one.</p>
<p>Grid storage changes the criteria entirely: mass and volume barely matter for a stationary installation, and cost, lifetime and material abundance matter enormously. This is why sodium-ion, flow batteries and various thermal and mechanical schemes are being pursued for the grid even though none would be acceptable in a vehicle. The best battery is not a single thing, and asking which one is best is the wrong question.</p>
`,
};
