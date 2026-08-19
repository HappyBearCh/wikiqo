import type { RewrittenArticle } from "./types";

export const moulds: RewrittenArticle = {
  slug: "moulds",
  title: "Moulds: they decide how long food lasts, and one of them changed medicine by contamination",
  sourceTitle: "Mold",
  dek: "Cutting the fuzzy bit off a mouldy loaf does not work. The visible growth is the fruiting layer of a network already through the crumb.",
  standfirst:
    "Mould is not a taxonomic group but a growth habit — filamentous fungi producing visible colonies on a surface — and it is the principal reason food spoils, buildings decay and stored grain becomes dangerous. It is also the source of penicillin, of several cheeses, of citric acid at industrial scale, and of the compound that lowers cholesterol in tens of millions of people. The same biology underlies all of it: an organism that digests its substrate externally and defends the resulting meal with chemistry.",
  readingMinutes: 7,
  html: `
<h2 id="Growth">What is actually growing</h2>
<p>What you see on a spoiled surface is mostly not the organism. The mycelium has already penetrated the substrate, secreting enzymes and absorbing the products; the visible fuzz is the aerial layer producing spores, and its colour comes from those spores rather than from the fungus itself — which is why moulds are described as blue, green or black.</p>
<p>This is why the common practice of trimming mould from soft food does not achieve much. In a high-moisture, porous food the hyphae extend well beyond the visible colony, and any toxins produced diffuse further still. Food safety guidance distinguishes accordingly: discard soft foods, bread, soft fruit and cooked dishes entirely, while hard cheeses and firm vegetables can be cut generously around the affected area because the dense structure limits penetration.</p>
<p>Moulds need moisture, and the useful measure is water activity rather than water content — the availability of water rather than its quantity. Preservation techniques nearly all reduce it: drying, salting, sugaring, freezing. Xerophilic moulds tolerate remarkably low water activity and are what eventually spoils jam, dried fruit and even honey-adjacent products that bacteria cannot touch.</p>
<p>Spores are everywhere, in air and dust, in numbers that make sterility temporary rather than achievable. Preventing mould is a matter of denying conditions, not of excluding the organism.</p>

<h2 id="Penicillin">The most consequential contamination</h2>
<p>Alexander Fleming returned to his laboratory at St Mary's in September 1928 after a holiday and found a culture plate of staphylococci contaminated by a mould, with the bacterial colonies dissolving in a zone around it. He identified the mould as a <em>Penicillium</em>, named the active substance penicillin, and published in 1929.</p>
<p>The usual telling stops there and misses the actual difficulty. Fleming could not purify the compound in useful quantity, found it unstable, and his paper attracted little attention for a decade. He largely moved on.</p>
<p>The work that produced a drug was done at Oxford from 1939 by Howard Florey, Ernst Chain and Norman Heatley. They solved extraction and stabilisation, demonstrated systemic efficacy in mice in 1940, and treated the first patient in 1941 — a policeman with septicaemia who improved markedly and then died when the supply ran out, some of it having been recovered from his own urine to be reused.</p>
<p>Scale-up happened in the United States, driven by wartime need. The decisive improvements came from fermentation engineering rather than chemistry: deep-tank submerged culture, corn steep liquor as a medium, and a higher-yielding strain isolated from a mouldy cantaloupe in a Peoria market. Yields rose by orders of magnitude, and by 1944 supply was sufficient for the invasion of Normandy.</p>
<p>Fleming, Florey and Chain shared the Nobel Prize in 1945, and Fleming used his lecture to warn that underdosing would select for resistant organisms — a prediction made before the drug was widely available and borne out completely.</p>

<h2 id="Toxins">The invisible hazard in stored grain</h2>
<p>Many moulds produce secondary metabolites that are toxic to animals, presumably as defence of a food source, and these mycotoxins are a serious and under-recognised problem in food supply.</p>
<p>Aflatoxins, produced by <em>Aspergillus flavus</em> and relatives, are the most important. They are potent liver carcinogens, and their effect interacts with hepatitis B infection to raise liver cancer risk substantially in regions where both are common. They contaminate groundnuts, maize and tree nuts, particularly where crops are grown and stored warm and humid.</p>
<p>Their discovery came from a 1960 outbreak in England that killed around a hundred thousand turkeys, traced to contaminated Brazilian groundnut meal. The disease was called turkey X disease before the toxin was identified.</p>
<p>Acute poisoning still occurs. An outbreak in Kenya in 2004 caused well over a hundred deaths from contaminated maize stored damp after harvest.</p>
<p>Other mycotoxins matter differently. Ochratoxin contaminates cereals, coffee and dried fruit. <em>Fusarium</em> toxins affect wheat and maize and cause both acute illness and chronic effects in livestock. Ergot alkaloids, from a fungus infecting rye, cause the convulsive and gangrenous poisoning recorded through European history as St Anthony's fire, and are a standing candidate explanation for episodes of mass hysteria — the Salem witchcraft accusations among them, a hypothesis that remains suggestive rather than demonstrated.</p>
<p>Regulatory limits exist in most countries and enforcement varies enormously. The practical controls are drying grain properly before storage and keeping it dry, which is unglamorous and is the whole intervention.</p>

<h2 id="Useful">Moulds people cultivate deliberately</h2>
<p>A number of foods depend on controlled mould growth, and in each case a species that would otherwise be spoilage is directed at a purpose.</p>
<p><em>Penicillium roqueforti</em> makes blue cheeses; <em>Penicillium camemberti</em> makes the white rind of camembert and brie. Both digest fats and proteins, generating the compounds that give those cheeses their flavour and their texture — a ripening camembert softens from the outside inward because the mould is working from the rind.</p>
<p><em>Aspergillus oryzae</em>, koji, underpins a large part of East Asian food production: sake, soy sauce, miso and rice vinegar all begin with it breaking starch into fermentable sugars and protein into amino acids. It is a domesticated organism, selected over centuries, and its wild relative <em>Aspergillus flavus</em> is the aflatoxin producer — the domesticated lineage has lost the capacity to make the toxin.</p>
<p>Industrially, moulds are production organisms. Most of the world's citric acid is made by <em>Aspergillus niger</em> fermentation, which displaced extraction from citrus fruit in the early twentieth century and broke an Italian price cartel in the process. The statins were found in fungal cultures — lovastatin from <em>Aspergillus terreus</em> — and are now among the most prescribed drugs in the world. Ciclosporin, from a soil fungus, made routine organ transplantation possible.</p>

<h2 id="Buildings">Damp buildings and what is actually known</h2>
<p>Mould growth indoors follows moisture: leaks, condensation on cold surfaces, rising damp, inadequate ventilation. It grows on plasterboard, wallpaper paste, dust on any surface, and the cellulose in building materials.</p>
<p>The health evidence is clearer for some claims than others. Damp and mouldy indoor environments are consistently associated with respiratory symptoms, worsening of asthma, and increased risk of developing asthma in children; major reviews have found this association robust. Allergic sensitisation to fungal spores is well established, and people with weakened immunity can develop invasive aspergillosis, which is severe.</p>
<p>The claims around toxic black mould are weaker than their public profile. <em>Stachybotrys chartarum</em> does produce potent toxins in culture, and the evidence that airborne exposure in homes causes the systemic illnesses attributed to it is not persuasive; an association with infant pulmonary haemorrhage reported in the 1990s was investigated and the causal claim withdrawn.</p>
<p>The practical guidance follows from the biology rather than from the toxicology. Remediation means finding and fixing the moisture source, because cleaning or applying biocide to a surface that stays wet simply delays regrowth. This is well understood, expensive in older housing stock, and is why damp remains concentrated in the least well-maintained housing.</p>
`,
};
