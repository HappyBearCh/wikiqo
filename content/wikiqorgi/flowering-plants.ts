import type { RewrittenArticle } from "./types";

export const floweringPlants: RewrittenArticle = {
  slug: "flowering-plants",
  title: "Flowering plants: Darwin's abominable mystery, still not fully solved",
  sourceTitle: "Flowering plant",
  dek: "They appear in the fossil record suddenly, diversify explosively, and take over the world's vegetation in a geological instant.",
  standfirst:
    "Darwin wrote in 1879 that the rapid development of the higher plants within recent geological times was an abominable mystery, and the phrase has stuck because the problem has not entirely gone away. Flowering plants appear in the Cretaceous, radiate faster than any comparable group, and now account for roughly nine in ten plant species. Explaining the speed, and the apparent absence of a fossil record leading up to it, remains an active argument.",
  readingMinutes: 7,
  html: `
<h2 id="The_mystery">What Darwin was complaining about</h2>
<p>Gradual evolution predicts gradual appearance: a lineage should show up as scarce and simple forms, then diversify over a long stretch of rock.</p>
<p>Angiosperms do not do this. They are essentially absent from the record, then present in the Early Cretaceous around 130 million years ago, and within roughly 30 million years they are diverse, abundant and dominant across many environments. By the Late Cretaceous they had displaced conifers and ferns over much of the land surface.</p>
<p>Darwin's letter to Joseph Hooker called it an abominable mystery, and he was troubled by it specifically because it looked like the kind of abrupt appearance his theory was meant to rule out.</p>
<p>Part of the problem has since dissolved. Molecular clock estimates generally place the origin of the group considerably earlier than the first unambiguous fossils, suggesting a long cryptic period during which angiosperms existed at low abundance in environments that preserve poorly — uplands, disturbed ground, or as small herbs. Early flowers are also small and delicate, which is not what fossilises well.</p>
<p>But the clock estimates and the fossil record disagree by an uncomfortable margin, sometimes by tens of millions of years, and reconciling them is an unresolved technical dispute rather than a settled matter. Occasional claims of much older angiosperm fossils appear and are usually contested.</p>

<h2 id="What_is_new">What a flower actually changed</h2>
<p>The defining innovations are less about petals than about how reproduction is packaged.</p>
<p><strong>Enclosed ovules.</strong> The name means covered seed. In conifers the ovule sits exposed on a scale; in angiosperms it is enclosed in a carpel. This protects it, permits chemical screening of arriving pollen, and — crucially — provides a structure that can develop into a fruit.</p>
<p><strong>Double fertilisation.</strong> Two sperm cells are delivered. One fertilises the egg; the other fuses with a second nucleus to produce endosperm, the nutritive tissue. This is efficient in a way the alternative is not: conifers provision the seed before knowing whether fertilisation succeeded, while angiosperms build the food store only once there is an embryo to feed. No investment is wasted on unfertilised ovules.</p>
<p><strong>Fruit.</strong> Enclosing the seed created the opportunity to make the container attractive, which recruits animals into dispersal.</p>
<p><strong>Faster life cycles and better plumbing.</strong> Angiosperm xylem uses vessels — wider, more efficient conduits than the tracheids of conifers — allowing higher water transport and therefore higher photosynthetic rates. This is part of why angiosperms outcompete conifers on fertile, well-watered ground, and why conifers persist where they do: cold, dry and nutrient-poor sites where the angiosperm strategy of fast growth cannot be sustained and where narrow tracheids resist freezing damage better.</p>

<h2 id="Coevolution">Insects are the usual explanation, and it is incomplete</h2>
<p>The standard account credits the radiation to coevolution with insect pollinators — flowers and insects driving each other's diversification in a mutual escalation.</p>
<p>There is real support. Many angiosperm lineages are pollinated by specific insect groups, specialisation is common, and specialised pollination promotes reproductive isolation, which promotes speciation.</p>
<p>The account has problems as well. Insect pollination predates angiosperms — some extinct gymnosperm groups were insect-pollinated — so it is not an angiosperm invention. Major pollinator groups including bees appear after the angiosperm radiation was already under way, not before it. And several of the largest angiosperm families are wind-pollinated.</p>
<p>Alternative and complementary explanations have accumulated. Genome duplication is one: angiosperm lineages show repeated whole-genome duplications, which supply redundant genes free to acquire new functions, and duplications cluster around periods of diversification. Faster life cycles allow more generations and quicker adaptation. Higher photosynthetic and transpiration rates may have altered regional climates by increasing rainfall recycling, effectively improving their own conditions.</p>
<p>Herbivory pressure, defensive chemistry, and the ability of many angiosperms to be herbaceous — completing a life cycle in months, which no conifer can do — all plausibly contribute.</p>
<p>The current view is that no single cause accounts for it and that the group possessed an unusual combination of traits that compounded.</p>

<h2 id="Amborella">Where the group starts</h2>
<p>Identifying the earliest-diverging living angiosperm lineage was contested for a long time and now has a reasonably firm answer.</p>
<p>Molecular phylogenetics places <em>Amborella trichopoda</em>, a shrub found only in the cloud forests of New Caledonia, as sister to all other flowering plants. It is not an ancestor and it is not primitive; it is a surviving branch that split off before everything else diverged, and it has been evolving for exactly as long as any oak.</p>
<p>Its features are nonetheless informative because some are ancestral. It lacks vessels in its xylem, using only tracheids like a conifer, which indicates that vessels came after the group's origin rather than being part of the founding package.</p>
<p>Following it are water lilies and star anise relatives, and then the great split into monocots and eudicots that accounts for the overwhelming majority of species.</p>
<p>Magnolias were long presented as the archetypal primitive flower — many parts, spirally arranged, beetle-pollinated. Their position turns out to be less basal than that story assumed, and the reconstructed ancestral flower, published in 2017 from a large comparative analysis, was bisexual with parts in whorls of three, which resembles no single living flower particularly closely.</p>

<h2 id="Dominance">What their success did to everything else</h2>
<p>The angiosperm radiation restructured terrestrial ecosystems, and the consequences reach well beyond botany.</p>
<p>Leaf litter changed. Angiosperm leaves are generally thinner and decompose faster than conifer needles, which accelerated nutrient cycling and altered soil chemistry.</p>
<p>Fruit created a food source that had not existed, and frugivory shaped the evolution of birds, bats and primates — including, at some remove, colour vision in primates, which is well suited to detecting ripe fruit against foliage.</p>
<p>Grasses, an angiosperm family, later produced the grasslands that reshaped mammalian herbivores and eventually supplied the crops agriculture is built on.</p>
<p>Insect diversity rose alongside them, with the beetles, bees, butterflies and flies associated with flowering plants accounting for an enormous share of animal species.</p>
<p>Roughly 90 per cent of living plant species are angiosperms, somewhere around 300,000 of them, against a few thousand gymnosperms. Almost everything eaten, worn as cotton or linen, brewed, or used as a drug of plant origin comes from this one group, which arrived late and won comprehensively for reasons still being argued about.</p>
`,
};
