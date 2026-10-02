import type { RewrittenArticle } from "./types";

export const metricSystem: RewrittenArticle = {
  slug: "metric-system",
  title: "The metric system: a revolution's unit, measured slightly wrong",
  sourceTitle: "Metric system",
  dek: "The metre was meant to be a ten-millionth of the distance from pole to equator. Two astronomers spent seven years measuring it, and one of them hid an error that haunted him to his death.",
  standfirst:
    "Before the French Revolution, France had hundreds of units of measure and thousands of local variants, and a bushel in one market was not a bushel in the next. The revolutionaries proposed to replace them with units taken from nature, divided by tens, and the same for everyone. The metric system succeeded so completely that almost the whole world now uses it — though the natural measurement it was founded on was slightly off, and the country that most conspicuously rejected it defines its own units in metric terms.",
  readingMinutes: 7,
  published: "2026-10-02",
  html: `
<h2 id="Chaos">Measures as local custom</h2>
<p>In eighteenth-century France, units of length, weight and volume varied from province to province and often from town to town. The same name could mean different quantities in different places, and measures were bound up with local power: lords and merchants controlled the standard measures of their markets, and complaints about manipulated measures were common in the grievances compiled before the Revolution of 1789.</p>
<p>Reformers had long proposed a universal system. The Revolution gave them the opportunity. In 1790 the National Assembly asked the Academy of Sciences to devise one, and the Academy proposed that the unit of length should be derived from the size of the Earth itself, a standard that belonged to no nation and could in principle be recovered by anyone. The metre was to be one ten-millionth of the distance from the North Pole to the equator, measured along the meridian through Paris.</p>
<p>The units of mass and volume would follow from it: the gram defined by the mass of a cubic centimetre of water, the litre as a cubic decimetre. All multiples and fractions would be powers of ten, with standard prefixes, ending the confusion of twelves, sixteens and other divisions.</p>

<h2 id="Survey">Seven years along a meridian</h2>
<p>The quarter-meridian could not be measured directly, but part of it could. Two astronomers, Jean-Baptiste Delambre and Pierre Méchain, were assigned to survey the arc between Dunkirk and Barcelona by triangulation, measuring angles between chains of church towers and hilltops, and calculating the full distance from the result.</p>
<p>They set out in 1792 and finished in 1798, working through revolution, war and the Terror. They were arrested as suspected spies, had their signal towers taken for counter-revolutionary devices, and lost assistants and equipment. Méchain, working in the south, was held in Spain when war broke out between the two countries.</p>
<p>Méchain also discovered a discrepancy in his measurements of the latitude of Barcelona that he could not explain. He concealed it, agonising over it for years, and died of yellow fever in 1804 while trying to extend the survey, still believing he had made an error that would expose him. The historian Ken Alder, in <em>The Measure of All Things</em>, argues that the discrepancy arose from the limits of the instruments and methods of the time rather than from carelessness.</p>
<p>In any case, the definitive metre, fixed in 1799 as a platinum bar, turned out to be about a fifth of a millimetre shorter than the definition intended, because the Earth's shape is not the regular ellipsoid assumed in the calculation. The error was in the assumption about nature, not in the survey's arithmetic. It no longer matters: the metre is now defined by the speed of light, and the distance from pole to equator is simply what it is — close to, but not exactly, ten thousand kilometres.</p>

<h2 id="Adoption">Slow adoption, even in France</h2>
<p>The revolutionaries also tried to decimalise time, with ten-hour days of a hundred minutes and a calendar of ten-day weeks. Decimal time was abandoned within two years, and the revolutionary calendar was abolished by Napoleon in 1806.</p>
<p>Metric units themselves met resistance. People were used to their old measures, and in 1812 Napoleon permitted traditional units adjusted to metric values. France made the metric system compulsory again in 1840.</p>
<p>It spread through Europe and Latin America during the nineteenth century, often with the spread of trade and of states consolidating their administration. In 1875 seventeen countries signed the Metre Convention, creating the International Bureau of Weights and Measures at Sèvres, near Paris, to maintain the international standards. In 1960 the modern form of the system was named the International System of Units, abbreviated SI.</p>

<h2 id="Holdouts">The countries that stayed out</h2>
<p>Today only a few countries have not officially adopted the metric system as their primary system of measurement, the United States being by far the most prominent. Even there, metric use is widespread in science, medicine, the military and much manufacturing. Since 1893, the US customary units themselves have been officially defined in terms of metric standards, and since 1959 the inch has been exactly 2.54 centimetres.</p>
<p>The United Kingdom adopted the metric system for most purposes but kept miles on road signs and pints for beer and milk, a mixed arrangement that gives rise to periodic political argument.</p>
<p>Mixed units have caused expensive failures. In 1999 NASA lost the Mars Climate Orbiter because software from one contractor produced thrust data in pound-force seconds while the navigation team's software expected newton-seconds. The spacecraft approached Mars on the wrong trajectory and was destroyed. In 1983 an Air Canada Boeing 767, during Canada's transition to metric units, ran out of fuel in flight after a calculation used pounds where kilograms were needed; the crew glided it to a safe landing at a former air base at Gimli, Manitoba.</p>

<h2 id="Constants">From the Earth to the constants of nature</h2>
<p>The founding idea of the metric system was to base units on nature rather than on a king's foot or an arbitrary bar. Its first realisations fell short: the metre and kilogram were for a long time defined by physical objects kept in a vault near Paris.</p>
<p>Over the twentieth century, the definitions moved to more fundamental phenomena. The second was defined in 1967 by the frequency of a transition in caesium atoms. The metre was redefined in 1983 as the distance light travels in a vacuum in 1/299,792,458 of a second. In 2019 the last physical artefact, the kilogram, was replaced by a definition based on a fixed value of the Planck constant, and the remaining base units were tied to fixed values of fundamental constants at the same time.</p>
<p>The ambition of 1790 — measures for all people, for all time — has in this sense been realised, though not by measuring the Earth. Any sufficiently equipped laboratory anywhere can now realise the units from first principles, without reference to any object or any country.</p>
`,
};
