import type { RewrittenArticle } from "./types";

export const evolution: RewrittenArticle = {
  slug: "evolution",
  title: "Evolution: an algorithm that has been running for four billion years",
  sourceTitle: "Evolution",
  dek: "Not a theory about origins so much as a mechanism so simple it is nearly a tautology — and so powerful it built everything alive.",
  standfirst:
    "Natural selection requires only three conditions: things vary, some of that variation is inherited, and some variants leave more descendants than others. Wherever those hold, the population changes, necessarily. That is close to a logical consequence rather than an empirical claim, which is what makes evolution both hard to argue with and easy to misunderstand.",
  readingMinutes: 9,
  html: `
<h2 id="What_Darwin_actually_contributed">What Darwin actually contributed</h2>
<p>The idea that species change over time was not new in 1859 and Darwin never claimed it was. His grandfather had proposed a version; Lamarck had published a full theory decades earlier. What was missing was a mechanism that did not require organisms to strive toward improvement or a designer to supply direction.</p>
<p>Darwin's contribution was to notice that a mechanism was already visible in agriculture. Breeders produce astonishing changes in pigeons, dogs and cabbages within a few generations, simply by choosing which individuals reproduce. Darwin's move was to remove the chooser: in nature, differential survival and reproduction perform the same selection without anyone performing it. Alfred Russel Wallace reached the identical conclusion independently, which prompted the joint presentation in 1858 and finally forced Darwin, who had been sitting on the idea for twenty years, to publish.</p>
<p>The theory had one enormous hole, and Darwin knew it. He had no account of inheritance, and the prevailing assumption — that offspring blend their parents' traits — would dilute any advantageous variant to nothing within a few generations. The answer had already been written by Gregor Mendel, working on pea plants in a monastery, showing that inheritance is particulate: traits are carried by discrete units that do not blend, and can hide in one generation to reappear in the next. Mendel's work was ignored until 1900. The reconciliation of Mendelian genetics with natural selection, the modern synthesis of the 1930s and 40s, is what turned Darwin's argument into a working quantitative science.</p>

<h2 id="Four_forces,_not_one">Four forces, not one</h2>
<p>Natural selection is the most important mechanism of evolution and not the only one, and treating them as synonymous causes most of the confusion.</p>
<ul>
<li><strong>Mutation</strong> supplies the raw variation — copying errors, radiation damage, transposable elements moving about. Mutations are random with respect to what the organism needs, which is the crucial point: the environment does not induce useful changes, it merely filters existing ones. Most mutations are neutral, many are harmful, a very small number help.</li>
<li><strong>Natural selection</strong> is the only mechanism that produces adaptation — the appearance of design. It is not random, and describing evolution as a random process is the single most common error in popular accounts.</li>
<li><strong>Genetic drift</strong> changes gene frequencies by chance alone. In a small population, whether a variant spreads can depend on which individuals happen to die in a storm. Drift is powerful in small populations and negligible in large ones, and it can eliminate beneficial variants and fix harmful ones. Much of molecular evolution appears to be dominated by drift acting on changes that make no difference either way.</li>
<li><strong>Gene flow</strong> moves variants between populations through migration, keeping them similar. Cut it off, and populations diverge.</li>
</ul>

<h2 id="How_a_species_splits">How a species splits</h2>
<p>Speciation usually needs isolation. Populations separated by a mountain range, an ocean, or an inhospitable stretch of habitat accumulate independent changes, and if they diverge enough before contact resumes, they can no longer produce fertile offspring — at which point they are separate species under the most commonly used definition.</p>
<p>That definition, incidentally, has ragged edges that undermine any tidy picture. It cannot be applied to organisms that reproduce asexually, which includes most life. Ring species form chains of populations in which each can interbreed with its neighbours but the ends cannot. Hybridisation across supposed species boundaries turns out to be common — including in our own history, since non-African human genomes carry a few per cent Neanderthal DNA. Species are a real pattern and a somewhat arbitrary line drawn through a continuum, and expecting nature to respect the categories is the mistake.</p>

<h2 id="The_evidence,_from_several_directions">The evidence, from several directions</h2>
<p>The strength of the case is that independent lines of evidence, from fields that could easily have contradicted each other, converge.</p>
<p><strong>Fossils</strong> appear in a consistent order, with transitional forms found where the theory predicts. <em>Tiktaalik</em>, a fish with a neck and weight-bearing fins, was located by working out the age and type of rock in which a fish-to-tetrapod transitional form should occur, and then going to look. Whale evolution is documented through a sequence of increasingly aquatic land mammals, and modern whales retain vestigial pelvic bones connected to nothing.</p>
<p><strong>Genetics</strong> supplies the sharpest test. Family trees built from DNA sequences match those built from anatomy and from fossils, which they need not have done. The evidence carries oddities that only common descent explains: humans and other primates share a broken vitamin C gene, disabled by the same mutation, so we must obtain the vitamin from food while most mammals synthesise it. Two ape chromosomes are fused into one in humans, and the fusion point still carries the telltale sequence of a chromosome end sitting in the middle.</p>
<p><strong>Direct observation</strong> settles the question of whether it happens now. Antibiotic and pesticide resistance are natural selection on a timescale of months. A forty-year experiment on Galápagos finches recorded beak dimensions shifting measurably with drought and rainfall. A long-running <em>E. coli</em> experiment has followed tens of thousands of generations and captured a population evolving an entirely new metabolic capability.</p>

<h2 id="What_it_does_not_say">What it does not say</h2>
<p>Several persistent misreadings are worth dispatching directly.</p>
<p>Evolution is not progress toward complexity. It has no direction and no goal; it produces whatever survives locally, which frequently means simplification. Parasites routinely lose organs their ancestors had. Cave fish lose eyes. Most of the biomass on Earth belongs to organisms that have remained single-celled for billions of years and are, by any measure of success, winning.</p>
<p>"Survival of the fittest" is a phrase Darwin borrowed from Herbert Spencer and it invites circularity. Fitness in the technical sense means reproductive success in a particular environment, not strength or superiority. An organism that survives brilliantly and does not reproduce has zero fitness.</p>
<p>The theory says nothing about how life began. Abiogenesis is a separate and much less settled problem; evolution describes what happens once replication with variation exists.</p>
<p>And the argument that complex organs could not evolve because intermediate stages would be useless has been answered case by case. The eye has evolved independently dozens of times, and every intermediate stage — a light-sensitive patch, a cupped patch giving directional information, a pinhole, a fluid-filled chamber, a lens — exists in living organisms today, each perfectly serviceable to its owner. The intermediates need not be worse versions of the endpoint. They need only be better than nothing.</p>

<h2 id="Why_it_matters_outside_biology">Why it matters outside biology</h2>
<p>Evolutionary thinking is not confined to organisms. Cancer is evolution inside a body: cell lineages accumulating mutations, competing, and being selected for uncontrolled growth — which is precisely why single-drug therapies fail, since treatment selects for resistant clones exactly as antibiotics do. Crop and livestock breeding is applied selection. Directed evolution in the laboratory, in which enzymes are mutated and screened over successive rounds, produces molecules no chemist could design and won a Nobel Prize for doing so.</p>
<p>The algorithm has also escaped biology entirely: genetic algorithms solve engineering problems by mutating and selecting candidate solutions, and often arrive at designs that work while remaining opaque to the humans who ran them. That opacity is the signature of the process. Selection optimises without understanding, and leaves behind results that nobody planned and nobody can fully explain — which is a reasonable description of every living thing.</p>
`,
};
