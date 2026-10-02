import type { RewrittenArticle } from "./types";

export const desalination: RewrittenArticle = {
  slug: "desalination",
  title: "Desalination: pushing seawater through a membrane at sixty atmospheres",
  sourceTitle: "Desalination",
  dek: "Taking salt out of the sea was a ship's emergency measure for centuries. A plastic film invented in a California lab turned it into the water supply of entire countries.",
  standfirst:
    "There is no shortage of water on Earth; nearly all of it is simply too salty to drink or grow crops with. Removing the salt is chemically straightforward and energetically expensive, because the salt does not want to leave. For most of history that cost confined desalination to ships and desert outposts. Over the last half century it has fallen far enough that several countries now drink mainly the sea — leaving behind a different problem in the form of the concentrated brine.",
  readingMinutes: 7,
  published: "2026-10-02",
  html: `
<h2 id="Boiling">Boiling it off</h2>
<p>The oldest method is distillation: heat salt water, collect the vapour, condense it as fresh water. Aristotle noted that evaporated seawater returns as fresh rain, and sailors used crude stills for centuries as an emergency supply. The difficulty is energy. Turning water into vapour takes an enormous amount of heat, and a simple still throws most of it away when the vapour condenses.</p>
<p>Industrial thermal plants recover much of that heat. In a multi-stage flash plant, heated seawater passes through a series of chambers at successively lower pressures; at each stage some of it boils instantly, and the vapour condenses on pipes carrying the incoming seawater, preheating it. Such plants became common in the Persian Gulf from the 1960s onward, often built next to power stations to use their waste heat, in countries with cheap fuel and almost no fresh water.</p>

<h2 id="Membranes">The membrane that changed the economics</h2>
<p>Osmosis is the tendency of water to move across a membrane that lets water through but not salt, from the fresh side toward the salty side. Reverse osmosis forces it the other way by applying pressure on the salty side greater than the osmotic pressure. For seawater that pressure is around twenty-seven atmospheres, and practical plants work at roughly fifty-five to eighty, because the remaining water grows saltier as fresh water is extracted.</p>
<p>The idea is simple; the material was the obstacle. Membranes had to let water pass quickly while rejecting more than ninety-nine per cent of the salt, and survive years of high pressure. Around 1960, Sidney Loeb and Srinivasa Sourirajan at the University of California, Los Angeles, made the breakthrough: a cellulose acetate membrane with a very thin, dense skin on a porous support, which allowed water to pass fast enough to be useful. Thin-film composite membranes of polyamide, developed in the following decades, improved on it further and are the standard today, wound into spiral cartridges that pack large areas of membrane into a compact tube.</p>
<p>Reverse osmosis now accounts for the large majority of new desalination capacity worldwide.</p>

<h2 id="Energy">The energy floor</h2>
<p>Separating salt from water requires a minimum amount of energy set by thermodynamics, and no technology can go below it. For seawater, at the recovery rates plants typically use, that floor is around one kilowatt-hour per cubic metre of fresh water.</p>
<p>Modern seawater reverse osmosis plants use around three to four kilowatt-hours per cubic metre for the desalination itself, within a small multiple of the theoretical limit — a large improvement on early plants. Much of the gain came from energy recovery devices: the concentrated brine leaves the membranes still at high pressure, and pressure exchangers transfer that pressure directly to incoming seawater, recapturing most of the energy that would otherwise be wasted.</p>
<p>Because the remaining gap to the theoretical minimum is not large, further dramatic reductions in energy use are unlikely. Cheaper desalination now depends mostly on cheaper electricity, longer-lasting membranes and better pre-treatment of the seawater, rather than on any breakthrough in the separation itself.</p>

<h2 id="Israel">A country that drinks the sea</h2>
<p>Global desalination capacity has grown to tens of millions of cubic metres a day, with roughly half in the Middle East and North Africa. Saudi Arabia and the United Arab Emirates are the largest producers.</p>
<p>Israel is the clearest case of a country rebuilding its water supply around the technology. After severe droughts in the 2000s, it built a series of large reverse osmosis plants along the Mediterranean coast, among them the Sorek plant south of Tel Aviv, which on opening in 2013 was one of the largest in the world and produced water at a notably low cost. Desalinated water now supplies the majority of the country's household and municipal water. Israel also treats and reuses most of its wastewater for agriculture, and the combination turned a chronic shortage into a modest surplus.</p>
<p>The transition revealed unexpected side effects. Reverse osmosis removes minerals as well as salt, including magnesium that had been present in natural water supplies, raising questions about whether it should be added back. And seawater contains boron, which conventional membranes remove poorly and which is toxic to some crops at low concentrations, requiring extra treatment for water used in irrigation.</p>

<h2 id="Brine">What is left behind</h2>
<p>For every litre of fresh water a seawater plant produces, it typically returns somewhat more than a litre of brine with roughly twice the salinity of the sea, along with residues of the chemicals used to clean and protect the membranes. A 2019 global assessment estimated that brine production exceeds the output of fresh water.</p>
<p>Brine is denser than seawater and tends to sink and spread along the seabed, where it can harm organisms adapted to stable salinity. Well-designed outfalls disperse it quickly through diffusers that mix it into the surrounding water, and in open, energetic seas the effects are usually localised. In enclosed, shallow, already salty bodies of water such as the Persian Gulf, where many plants discharge into the same basin, the cumulative effect is a growing concern.</p>
<p>Intakes cause harm too: fish and smaller organisms are trapped against screens or drawn into the plant. Newer designs use slow intake velocities or draw seawater through wells in the seabed to reduce it. Desalination is a real answer to water scarcity on coasts, but it is not free of the environmental trade-offs that every other water source carries; it moves them from rivers and aquifers to the sea.</p>
`,
};
