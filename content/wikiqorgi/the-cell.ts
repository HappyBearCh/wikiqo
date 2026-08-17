import type { RewrittenArticle } from "./types";

export const theCell: RewrittenArticle = {
  slug: "the-cell",
  title: "The cell: every living thing is one, or is made of them, and they all descend from one",
  sourceTitle: "Cell (biology)",
  dek: "Named after monastery rooms by a man looking at dead cork, and not recognised as the unit of life for another 150 years.",
  standfirst:
    "The cell is the smallest thing that is unambiguously alive, and the boundary is sharp: half a cell is not half alive, it is debris. Everything living is either a single cell or an assembly of them, they all arise from existing cells, and the machinery inside them is similar enough across all life to establish that the whole of biology descends from one population that solved the problem once.",
  readingMinutes: 7,
  html: `
<h2 id="A_slow_discovery">A slow discovery</h2>
<p>Robert Hooke published drawings of thin-sliced cork in 1665 and called the compartments he saw <em>cells</em>, after the small rooms monks lived in. He was looking at the empty walls of dead plant tissue, and had no notion that the boxes had once contained anything important.</p>
<p>Antonie van Leeuwenhoek, a draper grinding his own remarkable lenses, saw the living version within a decade — bacteria, protozoa, sperm cells — and called them animalcules. He reported swimming creatures in pond water and in scrapings from his own teeth, and was believed only after the Royal Society sent people to check.</p>
<p>Then almost nothing happened for a century and a half, because lenses were not good enough and nobody was asking the right question. Cell theory was assembled only in the 1830s: Schleiden and Schwann proposed that all plants and animals are composed of cells, and Virchow added the crucial third clause — that every cell arises from a pre-existing cell. That last point killed spontaneous generation and made continuity of life a physical claim rather than a philosophical one.</p>

<h2 id="Two_designs">Two designs</h2>
<p>Cells come in two architectures, and the difference is one of the deepest divisions in biology.</p>
<p><strong>Prokaryotes</strong> — bacteria and archaea — keep their DNA loose in the cytoplasm with no enclosing membrane and have few internal compartments. They are small, typically a few micrometres, structurally simple, metabolically extraordinary, and they have been the dominant form of life for the entire history of the planet by any measure that counts.</p>
<p><strong>Eukaryotes</strong> — everything else, from yeast to whales — enclose their DNA in a nucleus and partition their interior into membrane-bound organelles. They are typically ten to a hundred times larger in linear dimension, which is a thousand to a million times the volume.</p>
<p>The size difference is not incidental. A larger cell has proportionally less surface area for its volume, which limits how much can be exchanged across the membrane, and diffusion becomes too slow to move things across a big interior. Compartmentalisation is how eukaryotes solved both: internal membranes restore surface area, and dedicated transport systems replace diffusion.</p>

<h2 id="The_bacteria_inside_you">The bacteria inside you</h2>
<p>Mitochondria — the organelles that carry out the oxygen-consuming reactions supplying most of a eukaryotic cell's energy — have a set of properties that make sense only one way. They have their own circular DNA, distinct from the nucleus. They have their own ribosomes, which resemble bacterial ribosomes more than the cell's own. They are wrapped in a double membrane. They divide independently of the cell.</p>
<p>Lynn Margulis argued in the 1960s that they are descended from free-living bacteria engulfed by an ancestral cell and retained rather than digested. Her paper was rejected repeatedly and the idea was ridiculed. It is now standard, confirmed by sequence comparisons placing mitochondria firmly among a group of bacteria, and chloroplasts among cyanobacteria.</p>
<p>The consequence is that the eukaryotic cell is a chimera — a merger of at least two lineages — and this may be the reason eukaryotes exist at all. The available energy per gene in a cell with internalised power plants is orders of magnitude greater than in a bacterium, which plausibly removed the constraint on genome size that had held prokaryotes at their limit for two billion years.</p>
<p>You inherit mitochondrial DNA from your mother only, since sperm contribute essentially none, which is why it is used to trace maternal ancestry and why mitochondrial diseases have their characteristic inheritance pattern.</p>

<h2 id="The_membrane">The membrane</h2>
<p>The cell's boundary is a double layer of lipid molecules, each with a water-attracting head and two water-avoiding tails. In water they arrange themselves spontaneously with tails inward and heads out, forming a sheet that closes into a sphere. No energy is required and no machinery assembles it: it is a consequence of water refusing to mix with oil.</p>
<p>The result is a barrier that small uncharged molecules cross freely and that ions and large molecules cannot cross at all. That selectivity is what makes a cell possible, since maintaining an interior different from the exterior is the precondition for everything else.</p>
<p>Embedded in the membrane are proteins doing the traffic control: channels that let specific ions through when opened, pumps that move substances against their concentration gradient at the cost of energy, and receptors that detect molecules outside and trigger responses within. Roughly a third of the proteins encoded by a typical genome are membrane proteins, and a large share of pharmaceuticals target them.</p>

<h2 id="Inside">Inside</h2>
<p>The organelles form a production system whose logic is genuinely industrial.</p>
<p>The nucleus stores DNA and is where it is transcribed into RNA. Ribosomes read that RNA and build proteins. The endoplasmic reticulum, a maze of membrane continuous with the nuclear envelope, folds and modifies proteins destined for export or for membranes. The Golgi apparatus, a stack of flattened sacs, sorts and labels them for their destinations. Lysosomes are acidic compartments containing digestive enzymes that break down waste and worn-out components.</p>
<p>The cytoskeleton is the part usually left out of diagrams and does more than its name suggests. It is not a static frame but a dynamic network that gives shape, moves organelles along its filaments using motor proteins that literally walk, drives cell division by pulling chromosomes apart, and enables movement and shape change. It assembles and disassembles continuously, and several anticancer drugs work by interfering with it during division.</p>

<h2 id="Deciding_to_die">Deciding to die</h2>
<p>One of the more counterintuitive findings is that cells carry machinery for their own destruction, and use it constantly.</p>
<p>Apoptosis is programmed cell death: a controlled sequence that dismantles the cell tidily, packages the remains, and signals neighbours to clear them without inflammation. It is the mechanism that removes the webbing between developing fingers, prunes surplus neurons during brain development, and eliminates cells with damaged DNA before they become dangerous.</p>
<p>Something on the order of tens of billions of cells in an adult human die this way each day and are replaced.</p>
<p>Cancer is, among other things, a failure of this system. A cell that accumulates damage should trigger its own destruction; a mutation disabling that pathway allows a damaged lineage to persist and keep accumulating damage. Which is why the gene most commonly mutated in human cancers is one whose normal job is to halt the cell cycle and, if the damage cannot be repaired, order the cell to kill itself.</p>
`,
};
