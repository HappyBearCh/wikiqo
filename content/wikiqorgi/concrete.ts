import type { RewrittenArticle } from "./types";

export const concrete: RewrittenArticle = {
  slug: "concrete",
  title: "Concrete: the most used substance on Earth after water, and it is failing",
  sourceTitle: "Concrete",
  dek: "Roman harbour walls have stood in seawater for two thousand years. Twentieth-century concrete is often designed to last fifty.",
  standfirst:
    "Concrete is the second most consumed material on the planet, and it is used at a rate that makes its problems enormous by arithmetic alone. It is also, in its modern reinforced form, a material with a built-in expiry date — one that the Romans, whose structures are still standing, managed to avoid entirely by not using the ingredient that causes it.",
  readingMinutes: 7,
  html: `
<h2 id="What_it_is">What it is</h2>
<p>Concrete is a composite: aggregate — sand and gravel — bound together by cement paste. The aggregate is most of the volume and does most of the compressive work. The cement is the part that does the chemistry.</p>
<p>Cement is not a glue that dries. It reacts. Portland cement is made by heating limestone with clay to around 1,450 °C, which drives carbon dioxide out of the limestone and produces hard nodules called clinker, ground to powder with a little gypsum. Add water and the compounds in that powder hydrate, growing interlocking crystals that lock the aggregate into a solid mass.</p>
<p>Two consequences follow from this being a reaction rather than a drying. Concrete cures underwater perfectly well, which is why it can be poured into foundations and river piers. And it continues gaining strength for years, most rapidly in the first month but measurably for far longer.</p>

<h2 id="The_Roman_version">The Roman version</h2>
<p>Roman concrete was made with volcanic ash rather than the material used today, and its marine performance is genuinely superior in a way that has been investigated seriously rather than romanticised.</p>
<p>Harbour structures poured two thousand years ago are intact in seawater that destroys modern concrete in decades. Analysis found the reason: seawater percolating through the material reacts with the volcanic ash to grow rare interlocking mineral crystals in the cracks. The structure is not merely resisting the sea. It is being strengthened by it.</p>
<p>More recent work suggests the Romans mixed quicklime directly at high temperature, leaving small lime clasts distributed through the material. When a crack forms and water reaches a clast, it dissolves and recrystallises, sealing the crack. What was long assumed to be sloppy mixing appears to be self-healing.</p>
<p>The Pantheon's dome, unreinforced concrete cast in 126 AD with progressively lighter aggregate toward the top, remains the largest unreinforced concrete dome in the world.</p>
<p>The knowledge was lost with the western empire and not recovered until the eighteenth century, when John Smeaton investigated hydraulic limes for the Eddystone Lighthouse, and Joseph Aspdin patented Portland cement in 1824.</p>

<h2 id="The_reinforcement_problem">The reinforcement problem</h2>
<p>Concrete is extremely strong in compression and weak in tension — roughly a tenth as strong, sometimes less. A beam under load is compressed on top and stretched underneath, so unreinforced concrete cracks and fails on the tension side. That confines it to arches, domes and walls, where the loads can be kept compressive.</p>
<p>Embedding steel bars in the tension zone solves it, and the combination works better than it has any right to. Steel is strong in tension. The two materials expand at almost the same rate with temperature, which is a piece of luck without which the composite would tear itself apart on any hot day. And fresh concrete is strongly alkaline, which forms a passivating layer on the steel that prevents it rusting.</p>
<p>Reinforced concrete, developed in the nineteenth century, is the material that built the twentieth. It can be poured into any shape, uses cheap and locally available ingredients, requires no highly skilled labour, and is fire-resistant. Prestressed concrete goes further, tensioning the steel before loading so the concrete is held in compression permanently, allowing far longer spans and thinner sections.</p>

<h2 id="Why_it_has_a_deadline">Why it has a deadline</h2>
<p>The alkalinity that protects the steel does not last, and its loss is what sets the lifespan.</p>
<p>Carbon dioxide from the air penetrates the concrete slowly and reacts with the alkaline compounds, neutralising them — carbonation, advancing from the surface inward over decades. Chloride ions, from de-icing salt or seawater, penetrate faster and attack the passive layer directly.</p>
<p>Once the steel begins to corrode, the failure is mechanical rather than chemical. Rust occupies substantially more volume than the steel it replaced, so the expanding corrosion cracks and spalls the surrounding concrete, which admits more water and air, which accelerates the corrosion. Concrete cancer is self-accelerating, and by the time it is visible on the surface the reinforcement inside is already substantially compromised.</p>
<p>This is why so much mid-twentieth-century infrastructure is reaching the end of its life simultaneously. It was built quickly in a few decades, often with thin cover over the reinforcement and inadequate attention to water ingress, and it is failing on schedule. The world has an enormous bill coming due for structures that are not old by the standards of masonry.</p>

<h2 id="The_emissions">The emissions</h2>
<p>Cement production accounts for roughly seven to eight per cent of global carbon dioxide emissions, and — as with steel — the problem is chemical as well as energetic.</p>
<p>Around 40 per cent of the emissions come from burning fuel to reach 1,450 °C, which could in principle be electrified or supplied by other means. The remaining 60 per cent come from the limestone itself: calcium carbonate decomposing to calcium oxide releases carbon dioxide as a matter of stoichiometry. Change the fuel and that fraction remains.</p>
<p>The available responses are partial. Substituting part of the cement with fly ash or blast furnace slag works well and is widely done, but both are by-products of coal power and steelmaking — supplies that shrink precisely as those industries decarbonise. Calcined clays are a more durable substitute. Novel low-carbon cement chemistries exist and face the difficulty that a structural material with a fifty-year design life is not one anybody adopts quickly. Carbon capture at cement plants addresses the process emissions directly and is expensive.</p>
<p>Concrete does slowly reabsorb carbon dioxide over its life through carbonation — the same process that ruins the reinforcement — recovering perhaps a fifth of the process emissions across decades. It is a real effect and not a solution.</p>

<h2 id="The_sand">The sand</h2>
<p>The less obvious constraint is aggregate. Concrete is mostly sand and gravel, and the world consumes tens of billions of tonnes of it annually, making it the most extracted solid material on Earth.</p>
<p>Desert sand is useless for it: wind erosion produces grains that are too rounded and smooth to interlock. The sand that works comes from riverbeds, floodplains and the seabed, and extracting it causes riverbank collapse, saltwater intrusion into groundwater, and the loss of the sediment that would otherwise replenish deltas and beaches. Illegal sand mining is a substantial criminal industry in several countries, with associated violence.</p>
<p>It is a strange place for a resource conflict — a material so ordinary that most people would not think of it as a resource at all.</p>
`,
};
