import type { RewrittenArticle } from "./types";

export const fungi: RewrittenArticle = {
  slug: "fungi",
  title: "Fungi: more closely related to you than to plants, and mostly invisible",
  sourceTitle: "Fungus",
  dek: "A mushroom is a fruiting body. The organism is a network of threads in the soil that may cover several square kilometres and be thousands of years old.",
  standfirst:
    "Fungi were classified as plants for most of the history of biology, on the reasoning that they do not move. They are not plants: they cannot photosynthesise, their cell walls are chitin rather than cellulose, they store glycogen as animals do, and molecular phylogeny places them closer to animals than to plants. They constitute a kingdom whose visible portion is a small and temporary part of the organism, and whose ecological function — dismantling dead material — is what keeps the carbon cycle from stopping.",
  readingMinutes: 7,
  html: `
<h2 id="Not_plants">The reclassification</h2>
<p>Linnaeus put fungi among the plants, and the arrangement lasted into the twentieth century. Robert Whittaker's five-kingdom scheme of 1969 separated them, and molecular work from the 1990s onward settled the relationships decisively.</p>
<p>Fungi and animals form a group called the Opisthokonta, named for a shared feature: the single posterior flagellum found in the motile cells of both, on a sperm cell in animals and on the spores of some early-branching fungi. Plants are on a different branch entirely.</p>
<p>The differences from plants are not superficial. Fungi have no chlorophyll and cannot make their own food. Their cell walls are chitin, the same polymer as an insect's exoskeleton, rather than cellulose. They store carbohydrate as glycogen, as animals do, rather than as starch. And they obtain nutrition by absorption — secreting enzymes into their surroundings and taking up the products — which is digestion performed outside the body.</p>
<p>That last point shapes everything about their form. An organism that digests externally benefits from maximising the ratio of surface to volume and from growing toward food, which is what a filament does and a compact body does not.</p>

<h2 id="Mycelium">The organism is the network</h2>
<p>The fungal body is a mycelium: a branching network of thread-like hyphae, typically a few micrometres across, growing at their tips and fusing where they meet.</p>
<p>Its scale is routinely underestimated because it is underground. A single individual of <em>Armillaria ostoyae</em> in Oregon's Malheur National Forest has been mapped by genetic sampling across an area of several square kilometres, and is estimated at thousands of years old — among the largest and oldest organisms known by any measure.</p>
<p>The mycelium grows only at the tips, which lets it explore. Hyphae respond to chemical gradients, proliferate where food is found and are abandoned where it is not, and the resulting network reorganises continuously. Experiments in which a mycelium is offered food sources arranged like a transport network have found it produces connection patterns comparable in efficiency to engineered ones, a result obtained with slime moulds — which are not fungi — and demonstrated in fungi too.</p>
<p>Hyphae grow by turgor pressure and the controlled softening of the wall at the tip, and the pressures generated are considerable. Some plant pathogens form a specialised cell that generates enough pressure to punch mechanically through a leaf's surface, without any enzyme.</p>
<p>The mushroom, when it appears, is a temporary structure assembled from that network for reproduction, expanded largely by pumping water into cells that are already built. This is why mushrooms appear overnight after rain: they are not grown then, they are inflated.</p>

<h2 id="Decomposition">The reason wood does not accumulate</h2>
<p>Fungi are the principal decomposers of terrestrial plant material, and they hold that position because of one chemical capability that almost nothing else has.</p>
<p>Wood is cellulose fibres embedded in lignin, a complex, irregular, three-dimensional polymer that is chemically stubborn precisely because it has no repeating structure for an enzyme to target. White rot fungi degrade it using non-specific oxidative enzymes that generate free radicals and attack it more or less indiscriminately — an unusual strategy, since it means releasing a destructive chemistry into the environment rather than a targeted catalyst.</p>
<p>Without that capability, dead wood accumulates. The extensive coal deposits formed during the Carboniferous prompted the hypothesis that lignin-degrading fungi had not yet evolved, leaving woody material to pile up unrotted. A 2012 analysis dating the origin of the relevant enzymes to around the end of that period supported it; subsequent work has argued that climate, tectonics and rapid burial in swamp basins explain much of the coal formation independently. The hypothesis is contested and the underlying point stands: whether wood rots depends on whether the enzymes to rot it exist.</p>
<p>Brown rot fungi take a different approach, degrading the cellulose and leaving the lignin, which is why brown-rotted wood ends up as crumbling brown cubes. Both processes return carbon to the atmosphere that would otherwise be locked in place.</p>

<h2 id="Diversity">How many, and how little is known</h2>
<p>Around 150,000 fungal species have been described. Estimates of the true number range from about two million to more than ten million, with figures around two to three million now commonly cited, meaning the described fraction is a few per cent.</p>
<p>The gap exists because most fungi are microscopic, live inside soil, wood or other organisms, and cannot be cultured. Environmental DNA sequencing finds enormous numbers of lineages that have never been seen, and much of the diversity is known only as sequences.</p>
<p>The major groups are worth distinguishing. Ascomycetes, the largest phylum, produce spores in sacs and include most moulds, yeasts, morels, truffles and the fungal partners of most lichens. Basidiomycetes produce spores on club-shaped cells and include most familiar mushrooms, the bracket fungi and the rusts and smuts. Several early-branching lineages retain flagellated spores, and the Glomeromycota form the mycorrhizal associations that most land plants depend on.</p>
<p>Yeasts are not a taxonomic group but a growth form — single-celled, dividing by budding — that has evolved repeatedly, mostly within the ascomycetes.</p>

<h2 id="Us">What they do to us and for us</h2>
<p>The human relationship with fungi is unusually two-sided.</p>
<p>They are the basis of several foods and drinks that have structured whole economies: bread, beer, wine and a great many fermented foods all depend on yeast, and cheeses on moulds. They gave us penicillin, the statins, and ciclosporin — the immunosuppressant that made organ transplantation practical — which is a remarkable therapeutic contribution from one kingdom.</p>
<p>They also cause disease, and the burden is larger than its profile suggests. Estimates put annual deaths from fungal infection in the range of one to two million, comparable to tuberculosis, concentrated among people with weakened immunity. The World Health Organization published its first priority list of fungal pathogens in 2022, in part because the field is badly under-resourced.</p>
<p>Treatment is hard for a structural reason: fungal cells are eukaryotic, like ours, so there are far fewer targets present in the pathogen and absent in the patient than there are for bacteria. The available antifungal classes are few, resistance is rising, and <em>Candida auris</em> — which emerged on several continents simultaneously in the 2000s, is frequently resistant to multiple drug classes, and persists on hospital surfaces — is the current worry.</p>
<p>The larger ecological threat is to other species. Chytrid fungus has driven catastrophic amphibian declines and extinctions worldwide; white-nose syndrome has killed bats in North America in enormous numbers; ash dieback, chestnut blight and Dutch elm disease have each reshaped forests. In each case the organism was moved by humans into a population with no evolved resistance, which is the recurring mechanism behind nearly every fungal catastrophe of the last century.</p>
`,
};
