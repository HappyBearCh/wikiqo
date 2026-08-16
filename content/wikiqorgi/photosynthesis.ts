import type { RewrittenArticle } from "./types";

export const photosynthesis: RewrittenArticle = {
  slug: "photosynthesis",
  title: "Photosynthesis: how a leaf takes apart water and rebuilds the air",
  sourceTitle: "Photosynthesis",
  dek: "The chemistry that pulled oxygen into the sky, and still writes the menu for nearly everything alive.",
  standfirst:
    "Every textbook gives photosynthesis the same one-line summary: plants turn sunlight, water and carbon dioxide into sugar and oxygen. True, and almost useless. The interesting story is mechanical — a leaf is a machine that uses light to tear electrons off water, walks them downhill through a chain of proteins, and spends the released energy building sugar out of air.",
  readingMinutes: 8,
  html: `
<h2 id="The_trick_nobody_else_learned">The trick nobody else learned</h2>
<p>Life needs electrons. Building anything — a cell wall, a protein, a leaf — means taking carbon in its dull, fully oxidised form and adding electrons until it becomes something energetic enough to be worth eating. Getting electrons is therefore the central problem of biology, and most organisms solve it by stealing them from something else that is already alive.</p>
<p>Plants, algae and cyanobacteria found a different source: water. Water is everywhere, and it is a terrible electron donor precisely because it holds its electrons so tightly. Prying them loose takes an enormous amount of energy, which is why exactly one biological solution to the problem has ever evolved — a cluster of four manganese atoms and one calcium, no bigger than a few nanometres, that splits water using nothing but sunlight. Every oxygen molecule you have ever breathed came off that cluster or one of its descendants. It remains the single most consequential invention in the history of chemistry on this planet.</p>

<h2 id="Two_halves_of_one_machine">Two halves of one machine</h2>
<p>It is traditional to describe photosynthesis as "light reactions" and "dark reactions". The second name is a historical accident and actively misleading — the so-called dark reactions run in daylight and shut down at night. It is cleaner to think of the leaf as running two coupled workshops.</p>
<p>The <strong>first workshop captures light and banks the energy.</strong> Its currency is ATP, the cell's rechargeable energy carrier, and NADPH, a molecule that carries electrons around like a delivery van. The <strong>second workshop spends both</strong> to pull carbon dioxide out of the air and assemble sugar. Light never touches carbon dioxide directly. The two halves communicate entirely through those two chemical currencies, which is why the second half keeps running for a while after the sun sets, until the reserves are gone.</p>

<h2 id="Inside_the_first_workshop">Inside the first workshop</h2>
<p>The machinery sits in the thylakoids — stacked membrane sacs inside the chloroplast, folded to cram an enormous surface area into a small volume. Hundreds of chlorophyll and carotenoid molecules act as an antenna, absorbing photons and funnelling the excitation inward with an efficiency that still embarrasses engineered solar cells: energy transfer approaches 100 per cent, in under a picosecond, at room temperature.</p>
<p>What follows is a relay in four moves:</p>
<ul>
<li><strong>Photosystem II</strong> receives the excitation and uses it to rip electrons from water. Two water molecules yield four electrons, four protons, and one molecule of O₂ — the oxygen released as a by-product, which is to say as waste.</li>
<li><strong>The electron transport chain</strong> passes those electrons down a series of carriers, each slightly hungrier than the last. At each step, energy is released and used to pump protons into the thylakoid interior.</li>
<li><strong>Photosystem I</strong> gives the electrons a second shot of light — they have lost too much energy along the way — and loads them onto NADPH.</li>
<li><strong>ATP synthase</strong> lets the accumulated protons flow back out through a molecular turbine that physically rotates, and uses that rotation to make ATP. The mechanism is not a metaphor: the enzyme spins.</li>
</ul>
<p>Chlorophyll's colour, incidentally, is a leftover. It absorbs red and blue strongly and reflects green, which is why the world's most successful energy-capture pigment is the one that throws away the brightest part of the solar spectrum. Nobody has a fully satisfying explanation; the leading guesses involve the accidents of early evolution rather than any optimisation.</p>

<h2 id="Inside_the_second_workshop">Inside the second workshop</h2>
<p>Carbon fixation happens in the stroma, the fluid around the thylakoids, and it runs on an enzyme called rubisco. Rubisco attaches CO₂ to a five-carbon sugar, and the resulting six-carbon molecule immediately splits in two. Repeat, spend ATP and NADPH to reduce the fragments, and regenerate the starting sugar — the Calvin cycle. Three turns fix three carbon dioxide molecules; six turns yield one molecule of glucose.</p>
<p>Rubisco is simultaneously the most abundant protein on Earth and one of the worst enzymes ever characterised. It is slow, fixing only a few molecules per second where a typical enzyme handles thousands. Worse, it cannot reliably tell carbon dioxide from oxygen, and roughly a quarter of the time it grabs O₂ instead — starting a wasteful salvage pathway called photorespiration that costs the plant energy and releases carbon it had just captured. Plants compensate by manufacturing rubisco in absurd quantities, which is why leaves are as protein-rich as they are, and why so much of the world's nitrogen fertiliser ends up inside a single mediocre enzyme.</p>

<h2 id="Working_around_a_bad_enzyme">Working around a bad enzyme</h2>
<p>Rubisco evolved when the atmosphere held almost no oxygen, so its sloppiness cost nothing. As oxygen accumulated — the direct result of photosynthesis itself — the enzyme became a liability, and heat made it worse. Two workarounds evolved repeatedly and independently.</p>
<p><strong>C4 plants</strong>, including maize, sugarcane and most tropical grasses, capture carbon first with a different, fussier enzyme, then ferry it into a sealed inner compartment where rubisco works in a concentrated CO₂ atmosphere and is never tempted by oxygen. It costs extra energy and pays off handsomely in heat and bright light.</p>
<p><strong>CAM plants</strong>, such as cacti and pineapples, separate the steps in time rather than space. They open their pores only at night, when the air is cool and water loss is low, store the carbon as an acid, and process it behind closed pores the following day. It is a slow way to live and an excellent way to survive a desert.</p>

<h2 id="What_it_did_to_the_planet">What it did to the planet</h2>
<p>Oxygenic photosynthesis appeared in cyanobacteria at least 2.4 billion years ago, and the waste gas it produced poisoned the world. Free oxygen first rusted the dissolved iron out of the oceans, laying down the banded iron formations we now mine, then accumulated in the atmosphere in what is politely called the Great Oxidation Event and might more accurately be called the first mass extinction. For the anaerobic life that then dominated Earth, it was a catastrophe. For everything that followed, it was the precondition: oxygen respiration releases roughly an order of magnitude more energy than the alternatives, and the ozone layer it created made dry land survivable.</p>
<p>Chloroplasts themselves are a fossil of this transition. They carry their own circular DNA, divide independently, and are wrapped in a double membrane — the unmistakable signature of a free-living cyanobacterium that was engulfed by another cell and never left. Every plant on Earth is a partnership between a host and a bacterium that stopped being separate more than a billion years ago.</p>

<h2 id="The_scale_and_the_stakes">The scale, and the stakes</h2>
<p>Photosynthesis fixes on the order of a hundred billion tonnes of carbon a year, roughly split between land plants and ocean plankton — enough to visibly cycle the atmosphere's CO₂ with the northern hemisphere's seasons, a planetary breath you can read straight off the measurement record. Its overall energy efficiency, though, is low: only a few per cent of incoming sunlight ends up in biomass, most of it lost to unusable wavelengths, photorespiration and the cost of running the machinery.</p>
<p>That gap is the reason photosynthesis is now an engineering target as much as a subject of study. Efforts to speed up rubisco, install C4 machinery into rice, or short-circuit photorespiration are all attempts to improve on a system that evolution optimised for a different atmosphere than the one we live in — and that still, for now, feeds everything.</p>
`,
};
