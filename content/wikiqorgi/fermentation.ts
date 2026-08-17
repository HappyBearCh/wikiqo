import type { RewrittenArticle } from "./types";

export const fermentation: RewrittenArticle = {
  slug: "fermentation",
  title: "Fermentation: letting microbes eat your food before you do",
  sourceTitle: "Fermentation in food processing",
  dek: "Every culture on Earth independently worked out that controlled spoilage makes food safer, and nobody knew why for ten thousand years.",
  standfirst:
    "Fermentation is deliberate decay. You invite microorganisms to consume part of your food, and in exchange they make it keep longer, digest more easily, and taste of considerably more than it did. Humans have been doing this since before agriculture, and did it successfully for the entire period in which the existence of microorganisms was unknown.",
  readingMinutes: 7,
  html: `
<h2 id="Why_it_preserves">Why it preserves</h2>
<p>The logic is competitive exclusion. Food spoils because organisms colonise it, and most of the dangerous ones are fussy — they want a neutral pH, plenty of oxygen, and no competition.</p>
<p>Fermentation stacks the deck for organisms that are harmless to us and hostile to them. Lactic acid bacteria consume sugars and excrete acid, dropping the pH to a level most pathogens cannot tolerate. Yeasts produce alcohol, which is a preservative in its own right. Both consume the available sugar, so there is nothing left for later arrivals. And a dense established population of anything makes it hard for a newcomer to establish.</p>
<p>The technique is to control the starting conditions so the organisms you want win. Salt is the usual lever: brine at the right concentration inhibits most spoilage organisms while lactic acid bacteria tolerate it comfortably. Submerging vegetables excludes oxygen, which disadvantages moulds. After that the food ferments itself, using bacteria already present on the vegetables.</p>
<p>Sauerkraut and kimchi need nothing but cabbage and salt. That is not a simple recipe so much as a well-designed one.</p>

<h2 id="Bread_and_the_gas">Bread and the gas</h2>
<p>Yeast metabolises sugar and produces carbon dioxide and ethanol. In brewing the alcohol is the point and the gas is a by-product; in baking the reverse, with the alcohol boiling off in the oven.</p>
<p>What makes bread possible is not the gas alone but wheat's ability to trap it. Wheat contains proteins that, when hydrated and worked, link into an elastic network — gluten — strong enough to hold expanding bubbles without tearing. Kneading develops it, which is why bread dough is worked and cake batter is not. Grains lacking this network make flatbreads and porridge, which is why leavened bread is a wheat and rye phenomenon rather than a universal one.</p>
<p>Sourdough is the older method and a more interesting organism. A starter is not a single yeast but a stable community — wild yeasts alongside lactic acid bacteria — that reaches a self-sustaining equilibrium. The bacteria produce acids that give the flavour, and the acidity also slows staling and improves the availability of minerals otherwise bound up in the grain. Commercial baker's yeast, a single selected strain, ferments faster and produces bread with much less of that.</p>

<h2 id="Milk">Milk</h2>
<p>Dairy fermentation solves a specific biological problem. Most adult humans historically could not digest lactose, because the enzyme that breaks it down is normally switched off after weaning. Fermenting milk lets bacteria consume the lactose first, which is why yoghurt and aged cheese are tolerable to people who cannot drink milk.</p>
<p>Cheese adds a second step. Rennet — traditionally an enzyme from a calf's stomach — cuts a specific protein that keeps milk proteins dispersed, causing them to coagulate into curds. Draining the whey concentrates protein and fat into something that keeps for months rather than days, which is a way of storing summer's milk into winter.</p>
<p>What happens after that is microbial husbandry of considerable sophistication. Specific moulds are introduced deliberately for blue cheese and for the rinds of soft cheeses; bacterial cultures on washed rinds produce the aggressive smells. Each is a managed ecosystem, and the traditional cheeses of a region are largely a record of which organisms happened to live in those cellars.</p>

<h2 id="Nobody_knew_why">Nobody knew why</h2>
<p>Until the nineteenth century, fermentation was assumed to be a purely chemical process — spontaneous decomposition of organic matter. The prevailing view among leading chemists was that yeast was a by-product rather than a cause.</p>
<p>Louis Pasteur established otherwise in the 1850s and 60s, working on a practical problem: French brewers and winemakers were losing product to batches that soured unpredictably. He showed that fermentation was carried out by living organisms, that different organisms produced different results, and that the spoiled batches contained different microbes from the good ones.</p>
<p>The practical output was pasteurisation — heating to kill unwanted organisms without ruining the product — and the theoretical output was rather larger. If microorganisms cause fermentation and spoilage, they might cause disease, and germ theory follows. A substantial part of modern medicine begins with an investigation into why wine goes off.</p>

<h2 id="What_it_does_to_the_food">What it does to the food</h2>
<p>Beyond preservation, fermentation changes food in ways that matter nutritionally.</p>
<p>It breaks down antinutrients. Phytic acid in grains and legumes binds iron and zinc and prevents their absorption; fermentation degrades it substantially, which is why traditional preparations of staple grains almost always involve soaking or souring. Cassava contains cyanogenic compounds and is genuinely toxic without processing; the fermentation steps used across West Africa and South America remove them.</p>
<p>It predigests. Bacteria break proteins into amino acids and peptides, which is where the savoury depth of soy sauce, fish sauce and aged cheese comes from — these are all essentially controlled protein breakdown, and the compound responsible for their shared character is glutamate.</p>
<p>It synthesises. Some fermentations produce vitamins absent from the raw ingredient, notably B vitamins, and certain bacteria produce vitamin B12, which is otherwise almost entirely absent from plant foods.</p>

<h2 id="Industrial_fermentation">Industrial fermentation</h2>
<p>The technique long ago escaped food. Most antibiotics are produced by fermenting the moulds and bacteria that make them, in vessels holding tens of thousands of litres. Citric acid, used across the food industry, is produced by a mould rather than extracted from fruit. Most industrial enzymes — including those in laundry detergent — are microbial products.</p>
<p>Insulin was the turning point for the pharmaceutical version. Before 1982 it was extracted from pig and cattle pancreases; since then it has been produced by bacteria carrying the human gene, fermented in tanks. The same approach now makes a large share of protein drugs.</p>
<p>The current frontier is precision fermentation, in which engineered microbes produce specific molecules — dairy proteins without cows, egg proteins without hens, fats and flavour compounds for meat substitutes. It is the oldest food technology in existence, arriving back at the dinner table by way of genetic engineering.</p>
`,
};
