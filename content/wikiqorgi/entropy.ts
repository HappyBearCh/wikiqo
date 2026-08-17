import type { RewrittenArticle } from "./types";

export const entropy: RewrittenArticle = {
  slug: "entropy",
  title: "Entropy: not disorder, and the reason the past is different from the future",
  sourceTitle: "Entropy",
  dek: "Every fundamental law of physics works equally well run backwards. One statistical quantity explains why nothing else does.",
  standfirst:
    "Entropy is routinely explained as disorder, which is a metaphor that misleads more than it helps. It is a count — of how many microscopic arrangements produce the same macroscopic state — and its tendency to increase is not a law of nature so much as an overwhelming statistical likelihood. That distinction is what makes it interesting, because it is the only thing in physics that distinguishes forward from backward in time.",
  readingMinutes: 8,
  html: `
<h2 id="Two_definitions">Two definitions, arrived at from opposite ends</h2>
<p>Entropy was defined twice, by people solving different problems, and the two definitions turned out to describe the same quantity.</p>
<p>The thermodynamic definition came from engineers. Rudolf Clausius, generalising Carnot's analysis of heat engines in the 1850s, found a quantity that changes by the heat added divided by the temperature at which it is added, and which never decreases in an isolated system. It was a bookkeeping device that made the second law quantitative, and it said nothing about what entropy is.</p>
<p>The statistical definition came from Ludwig Boltzmann. Consider a macroscopic state — a gas at a given temperature and pressure — and count how many distinct microscopic arrangements of molecules would produce it. Entropy is proportional to the logarithm of that count. The formula is on his gravestone.</p>
<p>The two definitions agree, which is one of the more satisfying convergences in physics, and the statistical one explains why the thermodynamic one holds.</p>

<h2 id="Not_disorder">Why the disorder metaphor fails</h2>
<p>The standard image is a tidy room becoming untidy, and it breaks down as soon as it is pressed.</p>
<p>A tidy room and an untidy room have essentially the same entropy, because entropy concerns the arrangement of molecules and not the arrangement of furniture. Nothing thermodynamic distinguishes socks on the floor from socks in a drawer.</p>
<p>Worse, ordered structures form spontaneously in entropy-increasing processes all the time. Water freezing into ice produces a highly ordered crystal — and the entropy of the universe still rises, because freezing releases heat into the surroundings and that increase exceeds the decrease in the ice. Oil separating from water is a spontaneous increase in visible order driven by an entropy increase in the water molecules that no longer have to arrange themselves around the oil.</p>
<p>The accurate statement is about counting. A macrostate with many corresponding microstates is overwhelmingly more likely to be observed than one with few, simply because there are more ways for it to happen.</p>
<p>The numbers involved make "overwhelmingly" an understatement. For a room's worth of air molecules, the ratio of arrangements spread throughout the room to arrangements confined to one half is not large in an ordinary sense — it is a number with an exponent in the region of ten to the twenty-third. The air in a room could spontaneously gather in one corner, and nothing forbids it; you would simply have to wait many times the age of the universe, repeatedly, to see it.</p>
<p>This is why the second law is different in character from the others. It is not a prohibition but a statement about probabilities so lopsided that the distinction stops mattering.</p>

<h2 id="Arrows">The arrow of time</h2>
<p>Here is the genuine puzzle. Write down the fundamental laws — Newton's, Maxwell's, Schrödinger's, general relativity — and every one of them works identically with time reversed. A film of two billiard balls colliding, played backwards, shows a physically legal collision. Nothing at the microscopic level distinguishes past from future.</p>
<p>Yet everything at the macroscopic level does. A film of a glass shattering, played backwards, is obviously wrong. Heat flows from hot to cold and never the reverse. We remember the past and not the future.</p>
<p>Entropy is the only asymmetry available, and the explanation it offers is not a law but an initial condition. Entropy increases toward the future because it was lower in the past — and it was lower in the past because the universe began in an extraordinarily low-entropy state.</p>
<p>This pushes the question back rather than answering it. Why did the universe start that way? The state at the Big Bang appears, by any counting argument, to be fantastically improbable, and the "past hypothesis" is the name given to assuming it rather than explaining it. Roger Penrose has estimated the degree of improbability and the number is grotesque.</p>
<p>Everything that distinguishes the future from the past — memory, causation, ageing, the fact that you can affect tomorrow and not yesterday — traces back to that one condition. The direction of time is not built into the laws; it is inherited from how things happened to begin.</p>

<h2 id="Demon">Maxwell's demon, and the cost of knowing</h2>
<p>James Clerk Maxwell proposed in 1867 a creature small enough to see individual molecules, operating a frictionless door between two chambers. It lets fast molecules through one way and slow ones the other, with no work done on the gas. One side heats, the other cools, and entropy has decreased.</p>
<p>The puzzle stood for decades and the resolution, when it came, was more interesting than the problem. Leó Szilárd, and later Rolf Landauer and Charles Bennett, showed that the accounting must include the demon's own information processing.</p>
<p>Landauer's principle states that erasing one bit of information necessarily dissipates a minimum quantity of heat, proportional to temperature. Measurement itself can in principle be done reversibly and at no cost; what cannot be free is forgetting. The demon accumulates a record of which molecule went where, and its memory is finite, so eventually it must erase — and the entropy cost of erasure exactly cancels the gain.</p>
<p>The implication is that information is a physical quantity subject to thermodynamic accounting. This was verified experimentally in 2012, with a measurement of the heat released when a single bit is erased, and it sets a hard lower bound on the energy any computation can consume.</p>

<h2 id="Life">Living things and the objection about evolution</h2>
<p>A recurring argument holds that evolution violates the second law, because organisms are more ordered than the materials they are built from.</p>
<p>The error is in the phrase "isolated system", which is a technical requirement rather than a decoration. The second law says entropy does not decrease in a system exchanging nothing with its surroundings. The Earth is emphatically not such a system: it receives a continuous stream of high-energy, low-entropy photons from the sun and radiates a much larger number of low-energy, high-entropy photons back into space.</p>
<p>An organism maintains its own low entropy by increasing the entropy of everything around it, and by a considerable margin. Schrödinger's formulation in <em>What is Life?</em> was that a living thing feeds on negative entropy — it takes in ordered energy and excretes disordered energy and matter.</p>
<p>A refrigerator makes the point without any biology. It lowers the entropy of its interior, and it is plugged in, and it heats the room by more than it cools the box.</p>

<h2 id="Heat_death">Where this ends</h2>
<p>Extrapolated far enough, the second law predicts a universe approaching maximum entropy: energy spread uniformly, no temperature differences, and therefore no way to extract work from anything.</p>
<p>The idea was proposed by Kelvin in the 1850s and caused genuine dismay among Victorian readers, for whom the thermodynamic obsolescence of the universe was a novel form of bad news.</p>
<p>Whether the picture is right is unsettled. It assumes the universe behaves as a thermodynamic system in the ordinary sense, and gravity complicates that badly — self-gravitating systems clump rather than spread, so a uniform distribution of matter is a low-entropy state where gravity dominates, which is the opposite of the usual intuition. The accelerating expansion, the eventual evaporation of black holes, and the status of entropy in an expanding spacetime all bear on the answer and none is closed.</p>
<p>What is not in doubt is the near-term direction. Every process that has ever been observed has increased the total entropy, and the resource that makes anything happen at all is not energy — which is conserved and never runs out — but the difference between hot and cold. That difference is what is being spent.</p>
`,
};
