import type { RewrittenArticle } from "./types";

export const dna: RewrittenArticle = {
  slug: "dna",
  title: "DNA: a molecule whose shape gives away what it does",
  sourceTitle: "DNA",
  dek: "Two strands that each specify the other — the structure and the copying mechanism are the same discovery.",
  standfirst:
    "Most molecular structures tell you how something works only after considerable further study. DNA is the exception. The moment the double helix was drawn, with each base on one strand paired to a specific partner on the other, the mechanism of heredity was visible in it: separate the strands and each is a template for rebuilding its partner. Watson and Crick's paper noted this in a single famously coy sentence.",
  readingMinutes: 8,
  html: `
<h2 id="Nobody_thought_it_was_the_one">Nobody thought it was the one</h2>
<p>DNA was isolated in 1869 by Friedrich Miescher, working with pus-soaked bandages, and for seventy years it was regarded as a structural molecule of no great interest. Genes were assumed to be made of protein, and the reasoning was sound: proteins are built from twenty different amino acids and are enormously varied, whereas DNA has only four components and was thought to be a monotonous repeating polymer. Four letters looked too impoverished to carry the complexity of an organism.</p>
<p>Two experiments changed this. Avery, MacLeod and McCarty showed in 1944 that a substance transferring a heritable trait between bacterial strains was destroyed by enzymes that degrade DNA and survived those that degrade protein. Hershey and Chase in 1952 labelled viral DNA and viral protein separately and showed that only the DNA entered the infected cell.</p>
<p>Erwin Chargaff had meanwhile found a regularity nobody could explain: in any organism's DNA, the amount of adenine equalled the amount of thymine, and guanine equalled cytosine. The ratios were a clue lying in plain sight for years.</p>

<h2 id="The_structure">The structure</h2>
<p>The 1953 model at Cambridge was built partly from Rosalind Franklin's X-ray diffraction data — most importantly Photograph 51, which showed a distinctive cross pattern indicating a helix, and from which the dimensions could be extracted. That image and an unpublished report of her measurements were shown to Watson and Crick without her knowledge or consent, and the credit history is not a matter of dispute so much as of how long it took to be stated plainly. Franklin died in 1958 at 37; the Nobel Prize was awarded in 1962 and is not given posthumously, but the question of acknowledgement in the intervening decade is separate from the rules.</p>
<p>The structure: two strands wound around a shared axis, each a backbone of sugar and phosphate with bases projecting inward. The bases pair specifically — adenine with thymine, guanine with cytosine — held by hydrogen bonds, which explains Chargaff's ratios exactly. The pairing is dictated by geometry and bonding: a purine must pair with a pyrimidine for the helix to keep a constant width, and only those two combinations form the right hydrogen bonds.</p>
<p>The strands run in opposite directions, which turns out to matter enormously for how copying works.</p>
<p>The paper's closing line — that it had not escaped their notice that the specific pairing immediately suggests a possible copying mechanism for the genetic material — is the most cited piece of understatement in science.</p>

<h2 id="Copying">Copying</h2>
<p>Replication separates the strands and builds a new partner against each, so every daughter molecule contains one old strand and one new. This was demonstrated elegantly by Meselson and Stahl in 1958, growing bacteria on heavy nitrogen and then switching to light, and watching the density of the DNA change exactly as the semi-conservative model predicted and not as the alternatives did.</p>
<p>The mechanics have an awkwardness that has real consequences. The enzyme that builds new DNA can only work in one direction, and the two strands run opposite ways. So one strand is copied smoothly and continuously, while the other must be built in short backwards fragments that are then stitched together — a solution that looks like a workaround because it is one.</p>
<p>Fidelity is extraordinary. The raw error rate of the copying enzyme is around one in ten thousand; proofreading, in which the enzyme backs up and removes a mismatched base, and subsequent mismatch repair, bring the final rate to roughly one error per billion bases. A human genome of three billion bases is copied with a handful of mistakes.</p>
<p>The linear ends of chromosomes cannot be fully copied by this machinery, so they carry repetitive caps called telomeres that shorten with each division. This is a genuine limit on how many times most cells can divide, and its relationship to ageing and to cancer — where the enzyme that rebuilds telomeres is often reactivated — remains an active area.</p>

<h2 id="From_sequence_to_protein">From sequence to protein</h2>
<p>DNA does not do anything directly. A gene is transcribed into messenger RNA, which is read by a ribosome and translated into a chain of amino acids that folds into a protein.</p>
<p>The code is read in triplets. Three bases specify one amino acid, which gives 64 combinations for 20 amino acids plus stop signals, so the code is redundant — most amino acids have several triplets. The redundancy is not random: synonymous triplets usually differ in the third position, so many single-letter errors change nothing, which is error tolerance built into the code itself.</p>
<p>The code is essentially identical across all known life, which is among the strongest evidence for universal common descent. There is no chemical reason a particular triplet must specify a particular amino acid; the assignment is arbitrary, and everything alive uses the same arbitrary assignment.</p>
<p>Francis Crick's central dogma stated that information flows from nucleic acid to protein and not back. It has been refined — retroviruses copy RNA back into DNA, which is how HIV works and how a major class of drugs targets it — but the core claim, that protein sequence is not written back into the genome, has held.</p>

<h2 id="Most_of_it_is_not_genes">Most of it is not genes</h2>
<p>The Human Genome Project, completed in 2003, produced a surprise: roughly 20,000 protein-coding genes, against pre-project estimates commonly running to 100,000. Fewer than a rice plant. Protein-coding sequence occupies around two per cent of the genome.</p>
<p>The rest was called junk DNA, which was premature. Much of it is genuinely parasitic — transposable elements, sequences that copy themselves around the genome, making up a large fraction. Some is broken remnants of genes. But a substantial portion is regulatory: sequences controlling when, where and how strongly genes are switched on, which is where much of the difference between organisms with similar gene counts actually lives. A liver cell and a neuron carry identical DNA and differ entirely in what is expressed.</p>
<p>Epigenetics adds another layer — chemical modifications to DNA and to the proteins it wraps around, which alter accessibility without changing sequence, are heritable through cell division, and respond to environment. The popular claims about epigenetic inheritance across generations in humans run well ahead of the evidence, which is worth saying since the field attracts a lot of overreach.</p>

<h2 id="Reading_and_writing_it">Reading and writing it</h2>
<p>Sanger sequencing, developed in the 1970s, was the workhorse for decades and read a few hundred bases at a time. The Human Genome Project cost billions and took thirteen years. Sequencing a human genome now costs a few hundred dollars and takes a day, a cost decline steeper than anything in computing over the same period.</p>
<p>Writing came later. CRISPR, adapted from a bacterial immune system that stores fragments of viral DNA to recognise repeat attackers, provides a way to cut DNA at a sequence specified by a guide RNA — which means targeting is a matter of ordering a short piece of RNA rather than engineering a new protein for each site. It made gene editing cheap and accessible almost overnight, and the first approved CRISPR therapy, for sickle cell disease, arrived in 2023.</p>
<p>It also made germline editing technically feasible, which is why the 2018 announcement of edited human embryos brought to term caused near-universal condemnation and a prison sentence. The technical barrier is gone; what remains is agreement about not doing it, which is a considerably less robust kind of constraint.</p>
`,
};
