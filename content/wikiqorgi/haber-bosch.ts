import type { RewrittenArticle } from "./types";

export const haberBosch: RewrittenArticle = {
  slug: "haber-bosch",
  title: "Haber–Bosch: the reaction that feeds half the world and armed two wars",
  sourceTitle: "Haber process",
  dek: "Roughly half the nitrogen atoms in your body passed through an industrial catalyst. The same process made the explosives.",
  standfirst:
    "Air is 78 per cent nitrogen and almost none of it is available to living things, because the two atoms in an N₂ molecule are bound by one of the strongest bonds in chemistry. Breaking it industrially was the single most consequential chemical achievement of the twentieth century — it removed the limit on how many people the planet could feed, and it removed a limit on how long a war could last.",
  readingMinutes: 7,
  html: `
<h2 id="The_nitrogen_bottleneck">The nitrogen bottleneck</h2>
<p>Every protein and every strand of DNA contains nitrogen. It is abundant in the atmosphere and useless there: the triple bond holding N₂ together requires an enormous amount of energy to break, so plants cannot touch it.</p>
<p>Before industrial fixation, the nitrogen entering ecosystems came from three sources. Lightning fixes a small amount. Certain bacteria — some free-living, some housed in nodules on the roots of legumes — possess an enzyme capable of breaking the bond at ordinary temperatures, which is why crop rotation with beans and clover works and why it was discovered empirically long before the chemistry was understood. And decomposition recycles what is already in circulation.</p>
<p>That was the ceiling on agriculture. Yields were limited by available nitrogen, and the only ways to raise it were to rotate crops, apply manure, or import fixed nitrogen from somewhere else.</p>
<p>The nineteenth century did the third at scale, and the story is unedifying. Guano deposits on Peruvian and Chilean islands — seabird droppings accumulated over millennia in a rainless climate — were mined and shipped to Europe and North America until they were exhausted within decades. Chilean nitrate deposits followed, and a war was fought over control of them. By 1900 chemists were warning publicly that the nitrogen supply would fail and mass starvation would follow.</p>

<h2 id="Forcing_the_reaction">Forcing the reaction</h2>
<p>Nitrogen and hydrogen combine to make ammonia, and the reaction is thermodynamically favourable at ordinary temperatures. It also proceeds so slowly as to be useless, because breaking the N₂ bond first requires a large activation energy.</p>
<p>Raise the temperature and the rate improves — but the reaction is exothermic, so higher temperature shifts the equilibrium backwards and reduces the yield. This is the trap: the conditions that make it fast make it unproductive.</p>
<p>Fritz Haber's solution, demonstrated at laboratory scale around 1909, was to attack both terms. Because the reaction converts four molecules into two, high pressure pushes the equilibrium toward ammonia — Le Chatelier's principle applied with enough force. A catalyst provides an alternative pathway with lower activation energy, giving acceptable rates at moderate temperature. And rather than waiting for equilibrium, the ammonia is removed continuously and the unreacted gases recycled, so the reaction never reaches the point where it would stop.</p>
<p>The conditions are severe: several hundred atmospheres and around 400 to 500 °C, over an iron-based catalyst.</p>

<h2 id="The_engineering_was_the_hard_part">The engineering was the hard part</h2>
<p>Haber demonstrated the chemistry on a bench. Carl Bosch, at BASF, made it an industry, and the difficulty is easy to underestimate.</p>
<p>Nothing existed that could contain hot hydrogen at those pressures. Hydrogen at high temperature attacks steel, diffusing into the metal and reacting with its carbon, which destroys the alloy from within — early vessels failed catastrophically after days. Bosch's answer was a double wall: a soft iron liner that hydrogen could not damage chemically, inside a pressure-bearing steel shell drilled with small holes to let permeating hydrogen escape rather than accumulate.</p>
<p>His team also screened thousands of catalyst formulations to find a workable one, and had to develop the compressors, the hydrogen supply, and the continuous-process control to run it all. It is arguably the founding achievement of chemical engineering as a discipline distinct from chemistry, and Bosch received his own Nobel Prize for the high-pressure methods.</p>

<h2 id="And_then_the_war">And then the war</h2>
<p>Fixed nitrogen makes fertiliser and it makes explosives, because nitrates are the oxidiser in nearly all of them. Germany had no domestic nitrate source and depended on Chilean imports, which the Royal Navy blockaded within months of war breaking out in 1914.</p>
<p>By any reasonable expectation Germany should have run out of munitions within a year. Haber–Bosch plants supplied the nitrates instead, and the war continued for four more years. It is one of the clearest cases in history of a single industrial process changing the duration of a conflict.</p>
<p>Haber's own conduct went further. He personally directed the development and first deployment of chlorine gas at Ypres in 1915, supervising the release at the front, and argued that gas was a humane weapon because it would shorten the war. His wife Clara Immerwahr, herself a chemist, killed herself with his service pistol days after the first attack; he left for the eastern front the following morning.</p>
<p>He was awarded the Nobel Prize in Chemistry for 1918, which was controversial then and remains so. He was Jewish by birth, converted, and intensely German nationalist; in 1933 the Nazi regime forced him out and he left the country, dying in exile the following year. Compounds developed by his institute for use as insecticides were later manufactured as Zyklon B and used to kill members of his extended family.</p>

<h2 id="What_it_did_to_population">What it did to population</h2>
<p>The demographic effect is difficult to overstate and has been quantified with reasonable care. Something in the region of half the nitrogen in the proteins of a typical person alive today was fixed industrially rather than biologically. Estimates suggest that without synthetic fertiliser, the planet could support perhaps three to four billion people at current diets — meaning roughly half of everyone alive depends on this reaction.</p>
<p>Vaclav Smil's assessment, that it is the most consequential technical invention of the twentieth century, is a defensible position rather than a rhetorical one.</p>

<h2 id="The_bill">The bill</h2>
<p>The consequences are proportionate to the scale.</p>
<p><strong>Energy.</strong> The process consumes on the order of one to two per cent of global energy, and most of the hydrogen comes from natural gas by steam reforming, which releases carbon dioxide as part of the chemistry rather than merely as fuel. Fertiliser prices track gas prices, which is why food prices track energy prices.</p>
<p><strong>Runoff.</strong> Crops take up only a fraction of applied nitrogen — often around half — and the rest leaches into water. In rivers and coastal seas it fertilises algae, which bloom, die, and are decomposed by bacteria that consume the dissolved oxygen. The resulting dead zones, of which the one in the Gulf of Mexico is the best known, are seasonal areas where most marine animals cannot survive.</p>
<p><strong>Nitrous oxide.</strong> Soil bacteria convert some applied nitrogen to N₂O, a greenhouse gas with a warming effect per molecule hundreds of times that of carbon dioxide and an atmospheric lifetime measured in a century.</p>
<p>Humans now fix more nitrogen than all natural processes on land combined, which is a genuine planetary-scale alteration of a nutrient cycle. Green ammonia — using hydrogen from electrolysis rather than gas — addresses the emissions and none of the runoff. The runoff problem is agronomic: applying less, applying it in the right place at the right time, and rebuilding the crop rotations that industrial fertiliser made unnecessary.</p>
`,
};
