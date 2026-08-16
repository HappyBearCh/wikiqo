import type { RewrittenArticle } from "./types";

export const originOfLife: RewrittenArticle = {
  slug: "origin-of-life",
  title: "The origin of life: chemistry's least finished business",
  sourceTitle: "Abiogenesis",
  dek: "It happened once, quickly, nearly four billion years ago, and nobody has yet made it happen again.",
  standfirst:
    "Evolution explains what happens once you have things that copy themselves imperfectly. It says nothing about how you get the first one. That problem — a chemical system crossing into biology — remains genuinely open, and it is the largest unresolved question in the natural sciences that is not merely a matter of collecting more data.",
  readingMinutes: 8,
  html: `
<h2 id="The_timing_is_the_first_clue">The timing is the first clue</h2>
<p>Earth formed around 4.54 billion years ago and spent its early history too hot and too heavily bombarded for anything to persist. The oldest widely accepted evidence of life — isotopic signatures and microbial structures in ancient rock — dates to somewhere between 3.5 and 3.8 billion years, and contested claims run earlier still.</p>
<p>That leaves a window measured in a few hundred million years, possibly less, between the planet becoming habitable and life being present. On geological timescales this is brisk. It suggests, without proving, that the transition is not a freak event requiring extraordinary luck, but something chemistry does reasonably readily given the right conditions.</p>
<p>The counter-consideration is that we are reasoning from one instance, and observing it from inside. A universe in which abiogenesis is astronomically improbable would still contain occasional planets whose inhabitants noticed it had happened early on theirs. One data point cannot distinguish easy from lucky.</p>

<h2 id="What_has_to_be_explained">What has to be explained</h2>
<p>"Life" is not one thing to be produced but several capabilities that must eventually coexist.</p>
<p><strong>A boundary.</strong> Chemistry that is not contained disperses. Something must separate inside from outside while still admitting materials.</p>
<p><strong>Metabolism.</strong> A source of energy, and a way of coupling it to reactions that would not otherwise run — building complex molecules against the general tendency toward disorder.</p>
<p><strong>Heredity.</strong> A molecule that stores information and can be copied, with enough fidelity to preserve what works and enough error to permit change.</p>
<p>Which came first is the field's organising dispute, and it is not merely academic. Modern cells have all three interlocked in a way that is difficult to decompose: DNA stores the information for building proteins, but copying DNA requires proteins. Each is needed to make the other, and no plausible route starts with both.</p>

<h2 id="The_RNA_world">The RNA world</h2>
<p>The most developed answer to that circularity is that RNA came first, because RNA can do both jobs.</p>
<p>It carries information in a sequence of bases like DNA, and — the discovery that made the idea respectable, and won a Nobel Prize in 1989 — some RNA molecules fold into shapes with catalytic activity, acting as enzymes. A single class of molecule can therefore be both the message and the machinery, breaking the deadlock.</p>
<p>The evidence from living cells is suggestive in a way that is hard to dismiss. The ribosome, which builds every protein in every organism, has RNA at its catalytic core; the protein components are structural scaffolding around it. Several essential cofactors are chemically RNA fragments. These look like the fossils of an earlier arrangement that was never fully replaced.</p>
<p>The difficulty is chemical. RNA is unstable, hard to assemble without enzymes, and its component sugar is difficult to produce selectively under plausible conditions. Considerable progress has been made — notably routes that build the finished nucleotides directly rather than assembling them from separately synthesised parts, which was the step everyone had assumed was necessary and which was the obstacle. Whether RNA was truly first, or was preceded by a simpler informational polymer that has left no trace, remains open.</p>

<h2 id="Where_it_might_have_happened">Where it might have happened</h2>
<p>Two candidate settings dominate, and they imply different orders of events.</p>
<p><strong>The warm little pond</strong>, Darwin's own speculation in a letter, and the setting of the famous 1952 Miller–Urey experiment, which sparked electricity through a mixture of gases and water and produced amino acids within days. That result was electrifying and somewhat misleading: the atmosphere Miller assumed is no longer thought representative, and producing building blocks is a much smaller achievement than producing a system. Surface pools do offer something valuable, though — wet-dry cycling, where evaporation concentrates molecules and drives the water-releasing reactions that link them into chains, then rehydration frees them to interact.</p>
<p><strong>Alkaline hydrothermal vents</strong> on the deep seafloor make a different case, and it is a metabolism-first case. These are not the scalding black smokers but cooler, porous mineral chimneys, riddled with micro-compartments that act as natural containers. Crucially, alkaline fluid meeting acidic ancient ocean water creates a proton gradient across thin mineral walls — which is precisely the arrangement every living cell still uses to generate energy. That universal mechanism is strange enough, and specific enough, that its resemblance to vent chemistry is unlikely to be coincidence.</p>
<p>Delivery from space plays a supporting role in either scenario. Meteorites contain amino acids, sugars and nucleobases, formed without biology, so the raw ingredients were arriving continuously regardless of what Earth made for itself.</p>

<h2 id="The_step_nobody_has_taken">The step nobody has taken</h2>
<p>Laboratory work has produced amino acids, nucleotides, self-assembling lipid vesicles, and RNA molecules that catalyse reactions including partial copying of other RNA. These are real achievements.</p>
<p>What has not been produced is a system that sustains itself and evolves — one that maintains a boundary, harvests energy, copies its information well enough to inherit improvements, and keeps going without an experimenter supplying purified reagents at each stage. That is the actual threshold, and the gap between the pieces and the system is the entire remaining problem.</p>
<p>Two honest difficulties compound it. Any early evidence has been destroyed by four billion years of plate tectonics, so there is no fossil record of the transition to consult. And there is no agreed definition of life sharp enough to say when a chemical system has crossed the line — which means even a successful experiment might be argued about.</p>

<h2 id="The_common_ancestor">The common ancestor</h2>
<p>Everything alive descends from a single population, called LUCA, the last universal common ancestor. We know this because the shared machinery is arbitrary in ways that only inheritance explains: the same genetic code mapping the same triplets to the same amino acids, the same handedness of sugars and amino acids where mirror images would work equally well, the same energy currency.</p>
<p>Comparing genes present across all domains of life allows LUCA to be partially reconstructed. It appears to have been a fairly sophisticated organism already — with a genetic code, ribosomes, and a proton-gradient metabolism — which means it was itself the product of a long prior history that has left no direct evidence.</p>
<p>LUCA is not the origin of life. It is the last common ancestor of what survived, and everything before it is the part we cannot see. Whether life started once or many times, with only one lineage persisting, is not currently answerable — which is a fair summary of the field as a whole: a set of plausible, partially demonstrated chemistry, and a transition nobody has yet witnessed or reproduced.</p>
`,
};
