import type { RewrittenArticle } from "./types";

export const sleep: RewrittenArticle = {
  slug: "sleep",
  title: "Sleep: a third of your life spent doing something nobody can fully explain",
  sourceTitle: "Sleep",
  dek: "Evolution does not tolerate expensive habits without reason — and it has never found a way to skip this one.",
  standfirst:
    "Sleep is the strongest evidence that the brain is doing something we do not understand. An animal that sleeps is immobile, insensible and defenceless for hours at a stretch, which is close to the worst survival strategy imaginable. Every animal examined closely does it anyway. Whatever sleep is for, the price of skipping it must be higher than being eaten.",
  readingMinutes: 8,
  html: `
<h2 id="Not_the_absence_of_anything">Not the absence of anything</h2>
<p>The intuition that sleep is the brain switching off survived until researchers put electrodes on a sleeping scalp in the 1920s and found the opposite. Sleep is an active, structured, tightly choreographed state — in some phases the brain consumes as much energy as it does awake, and produces patterns of activity that never occur during waking at all.</p>
<p>What distinguishes it from a coma or anaesthesia is reversibility and regulation. You can be woken. You accumulate a debt if deprived and repay it afterwards, sleeping longer and deeper than usual. And the timing is governed rather than random.</p>

<h2 id="Two_clocks,_not_one">Two clocks, not one</h2>
<p>Sleepiness is the sum of two independent systems, which is why an all-nighter feels worse at 4 a.m. than at 8 a.m. despite an extra four hours awake.</p>
<p>The <strong>homeostatic</strong> system is a simple accumulator. Adenosine, a by-product of the brain's energy use, builds up through the waking day and increases pressure to sleep; sleep clears it. Caffeine works by blocking adenosine receptors — it does not remove the pressure, it hides it, which is why the accumulated tiredness lands as soon as it wears off.</p>
<p>The <strong>circadian</strong> system is a genuine oscillator, running on a molecular feedback loop in which proteins accumulate, switch off the genes producing them, degrade, and let the cycle start again — a chemical clock with a period near 24 hours that runs even in constant darkness. Its master copy sits in a cluster of a few thousand neurons in the hypothalamus, synchronised to the outside world mainly by light striking specialised retinal cells that are not involved in vision at all. These cells respond most strongly to blue wavelengths, which is the entire basis of the argument about screens at night.</p>
<p>Nearly every tissue in the body carries its own peripheral clock, tuned by the central one. This is why jet lag is not simply tiredness but a temporary disagreement between organs — digestion, temperature, hormone release and alertness each arriving on different schedules until they resynchronise, at roughly a day per time zone.</p>

<h2 id="The_architecture_of_a_night">The architecture of a night</h2>
<p>A night's sleep is not uniform. It cycles roughly every ninety minutes through stages that differ as much from each other as any of them differs from waking.</p>
<p><strong>Non-REM sleep</strong> deepens progressively into slow-wave sleep, where the electrical activity of large populations of neurons synchronises into slow, high-amplitude oscillations. This is the hardest sleep to wake from, and someone roused out of it is confused for several minutes. It dominates the first half of the night.</p>
<p><strong>REM sleep</strong> is the strange one. Brain activity resembles waking, the eyes move rapidly, and the body is paralysed — motor neurons are actively inhibited, which appears to exist to stop you acting out dreams. Vivid narrative dreaming happens mostly here. REM periods lengthen through the night, so the majority of it occurs in the hours before waking, and anyone who cuts their sleep short at the end is disproportionately cutting REM.</p>

<h2 id="What_it_appears_to_be_for">What it appears to be for</h2>
<p>There is no single accepted answer, and the honest position is that sleep probably serves several functions that became bundled together.</p>
<p><strong>Memory consolidation</strong> has the strongest evidence. During slow-wave sleep, the hippocampus replays sequences of neural activity recorded during the day, at speed, apparently transferring them into cortical storage. Learn a task, sleep, and you perform better afterwards than an equivalent period awake produces — and disrupting slow-wave sleep specifically blocks the improvement. REM appears to do something different and less well characterised, associated with procedural skills and with finding connections between memories rather than fixing them.</p>
<p><strong>Clearance</strong> is a more recent line. The brain lacks conventional lymphatic drainage and instead flushes cerebrospinal fluid through the tissue along channels around blood vessels. This flow increases substantially during sleep, apparently because the spaces between cells widen, and it removes metabolic waste including the amyloid proteins associated with Alzheimer's disease. The correlation between chronic poor sleep and later dementia is well established; whether it is cause, consequence, or both is not settled.</p>
<p><strong>Synaptic housekeeping</strong> proposes that learning strengthens connections all day, which is unsustainable, and sleep scales them back down proportionally — preserving what was learned while restoring capacity to learn more.</p>

<h2 id="The_cost_of_going_without">The cost of going without</h2>
<p>Sleep deprivation degrades performance in a specific and dangerous pattern: the ability to judge one's own impairment declines faster than the impairment itself. People who have been awake nineteen hours perform on reaction and attention tasks comparably to someone legally too drunk to drive, and consistently rate themselves as fine.</p>
<p>The failure mode is not gradual slowing but the microsleep — a lapse of a few seconds in which the brain briefly goes offline while the eyes stay open. At motorway speed that is a hundred metres travelled by nobody. Drowsy driving is estimated to cause a substantial fraction of fatal single-vehicle crashes, and the standard investigation cannot detect it after the fact.</p>
<p>Chronic restriction, the ordinary six-hours-a-night version, produces measurable metabolic effects within days: impaired glucose tolerance, altered appetite hormones, raised inflammatory markers. Long-term epidemiology links it to cardiovascular disease, type 2 diabetes and depression, though disentangling cause from consequence is genuinely hard, since most of those conditions also damage sleep.</p>

<h2 id="What_the_advice_gets_wrong">What the advice gets wrong</h2>
<p>Two widely repeated ideas deserve correction. The first is that everyone needs eight hours. The population distribution centres near seven to nine for adults, but the spread is real, and a small number of people carry variants in genes governing the circadian clock that leave them genuinely well-rested on six. Most people who believe they are in that group are not, but the group exists.</p>
<p>The second is that chronotype is a lifestyle choice. The tendency toward late nights is substantially genetic and shifts predictably with age, peaking in lateness during adolescence — which is why school start times have become an actual public-health argument rather than a scheduling one, and why districts that pushed them later report measurably better attendance and fewer teenage car crashes.</p>
<p>Sleeping in a segmented pattern, incidentally, appears to be historically normal. Records from before industrial lighting describe a first and second sleep divided by an hour or two of quiet wakefulness, and the pattern re-emerges spontaneously when people are kept in long winter-length darkness. The consolidated eight-hour block may be less a biological requirement than an artefact of artificial light and the working day.</p>
`,
};
