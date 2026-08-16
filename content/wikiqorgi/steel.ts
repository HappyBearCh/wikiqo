import type { RewrittenArticle } from "./types";

export const steel: RewrittenArticle = {
  slug: "steel",
  title: "Steel: iron plus a trace of carbon, and the whole modern world",
  sourceTitle: "Steel",
  dek: "The difference between wrought iron, steel and cast iron is about one per cent of carbon — and it changes everything.",
  standfirst:
    "Steel is iron with a small amount of carbon dissolved in it, and the amount is startlingly small: below about 0.02 per cent you have soft wrought iron, above about 2 per cent you have brittle cast iron, and the useful range in between is where nearly every structure, vehicle and tool of the industrial world lives. For most of history the difficulty was not knowing this but controlling it.",
  readingMinutes: 7,
  html: `
<h2 id="Why_a_trace_matters_so_much">Why a trace matters so much</h2>
<p>Pure iron is soft, because its atoms sit in a regular lattice whose layers slide past each other easily. Deformation in metals happens through the movement of defects in that lattice, and anything that obstructs those defects makes the metal harder.</p>
<p>Carbon atoms are small enough to squeeze into the gaps between iron atoms, and they act as obstructions. A little carbon impedes the sliding and the metal becomes dramatically stronger. Too much and it forms brittle carbide compounds throughout, so the material becomes hard but shatters rather than bending.</p>
<p>The other lever is heat treatment, and it exploits a peculiarity of iron: its crystal structure changes with temperature, and the high-temperature form dissolves far more carbon than the low-temperature form. Cool slowly and the carbon has time to migrate out and form soft, coarse structures. Quench it — cool it violently — and the carbon is trapped in a distorted, strained lattice that is extremely hard and dangerously brittle. Then reheat gently to temper it, relieving some of the strain and trading a little hardness for toughness.</p>
<p>Every traditional smith's technique is a manipulation of that sequence, arrived at empirically millennia before anyone could explain it.</p>

<h2 id="Before_it_could_be_made_in_bulk">Before it could be made in bulk</h2>
<p>Iron's advantage over bronze was never that it is better — early iron was inferior to good bronze — but that its ore is common. Bronze requires tin, which is rare and often had to be imported across long distances, so bronze-age metalworking depended on trade networks that could be cut. Iron ore is nearly everywhere.</p>
<p>Producing good steel, however, was slow and small-scale. Bloomery furnaces could not reach iron's melting point, so they produced a spongy mass that had to be hammered repeatedly to expel slag. Crucible steel, made in India from perhaps the first millennium BC and traded as wootz, produced a genuinely superior material — the basis of the patterned blades known in Europe as Damascus steel — in batches of a few kilograms.</p>
<p>Blast furnaces, developed in China by around the first century BC and in Europe much later, could melt iron fully, but the product absorbed so much carbon from the fuel that it emerged as brittle cast iron. Converting that to steel meant removing carbon, and doing so controllably at scale was the problem nobody had solved.</p>

<h2 id="Bessemer">Bessemer</h2>
<p>Henry Bessemer's process, announced in 1856, solved it with a counterintuitive move: blow cold air through molten pig iron.</p>
<p>The intuition says this will cool and solidify the metal. It does the opposite. Oxygen in the air reacts with the dissolved carbon and silicon, and those reactions release enough heat to keep the charge molten and raise its temperature. The impurities burn out of the iron and the process supplies its own energy.</p>
<p>The effect on cost and scale was extraordinary. A converter could process many tonnes in about twenty minutes, work that had previously taken a day per much smaller batch. Steel prices fell by something like an order of magnitude within a couple of decades.</p>
<p>The process had a serious defect that took time to fix: it could not remove phosphorus, which makes steel brittle, so it only worked with low-phosphorus ores — excluding most of the ore in Britain and continental Europe. The solution, developed by Sidney Gilchrist Thomas, was to line the converter with a basic material that reacts with phosphorus and captures it in the slag. The resulting phosphate-rich slag was then sold as fertiliser, which is a rare case of a metallurgical fix paying for itself twice.</p>

<h2 id="What_cheap_steel_built">What cheap steel built</h2>
<p>The consequences arrived quickly and are easy to underrate because they are now the background.</p>
<p>Railways had been built with iron rails that wore out within months under heavy traffic; steel rails lasted years, which made dense long-distance rail networks economic. Steel-framed construction removed the load from masonry walls — a stone building tall enough to be interesting needs walls thick enough at the base to consume the ground floor — and made the skyscraper possible, along with the safety elevator that made it usable. Ships in steel could be larger, lighter and safer than iron ones. Reinforced concrete, which is steel and concrete used together to exploit concrete's compressive strength and steel's tensile strength, became the default structural material of the twentieth century.</p>
<p>Stainless steel arrived in the 1910s from the discovery that adding chromium above about 11 per cent forms a self-repairing invisible oxide layer that resists corrosion. This is what made surgical instruments reliably sterilisable and food processing hygienic at scale.</p>

<h2 id="How_it_is_made_now">How it is made now</h2>
<p>Two routes dominate. The integrated route reduces iron ore with coke in a blast furnace, then refines the resulting pig iron in a basic oxygen furnace — Bessemer's principle with pure oxygen instead of air, which is faster and gives better control. The electric arc route melts scrap steel directly using enormous electrical currents.</p>
<p>The second is worth emphasising, because steel is the most recycled material on Earth by tonnage. It does not degrade through recycling in the way many materials do, and it is trivially separable from waste streams by magnet. A large share of steel production in some countries is scrap-based.</p>
<p>The problem is the first route, and it is chemical rather than merely energetic. Blast furnaces use coke not only as fuel but as the reducing agent that strips oxygen from iron ore, and that reaction produces carbon dioxide by stoichiometry. You cannot electrify your way out of it; the carbon is doing chemistry, not just providing heat.</p>
<p>Steelmaking accounts for something in the region of seven to nine per cent of global carbon dioxide emissions. The leading alternative is direct reduction using hydrogen, which strips the oxygen and produces water instead — technically demonstrated, commercially early, and dependent on hydrogen made without fossil fuels, which is a separate unsolved problem. It is one of the clearest cases where decarbonisation requires replacing a chemical process rather than changing an energy source.</p>
`,
};
