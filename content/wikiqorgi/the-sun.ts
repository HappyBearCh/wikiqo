import type { RewrittenArticle } from "./types";

export const theSun: RewrittenArticle = {
  slug: "the-sun",
  title: "The Sun: a controlled explosion held together by its own weight",
  sourceTitle: "Sun",
  dek: "It is not burning. It is crushing hydrogen into helium at a rate that turns four million tonnes of matter into light every second.",
  standfirst:
    "Before nuclear physics, the Sun was an unsolved problem verging on a scandal. Any chemical fuel would have burned out in a few thousand years; even gravitational contraction, the best nineteenth-century answer, gave an age of some tens of millions of years — which geologists and Darwin both knew was far too short. The rocks said the Earth was old. Physics said the Sun could not be. Physics was wrong.",
  readingMinutes: 7,
  html: `
<h2 id="The_energy_problem">The energy problem</h2>
<p>Lord Kelvin calculated in the 1860s that a Sun powered by gravitational contraction — slowly collapsing, converting potential energy to heat — could shine for perhaps 20 to 100 million years. It was rigorous work with the physics available, and it put him in direct conflict with geologists reading far longer histories in sedimentary rock, and with Darwin, whose mechanism needed deep time.</p>
<p>The resolution arrived in stages. Radioactivity revealed an unknown energy source in matter itself. Einstein's mass–energy equivalence supplied the scale: a small quantity of mass corresponds to an enormous quantity of energy. And in 1920 Arthur Eddington proposed that the Sun ran on the fusion of hydrogen into helium, noting that a helium nucleus weighs slightly less than the four hydrogen nuclei composing it, and that the difference would appear as energy.</p>
<p>He was right, and he added a remark worth preserving: that if this were the source of stellar energy, it might one day be harnessed, or used for our own destruction. He wrote that in 1920.</p>

<h2 id="How_it_actually_works">How it actually works</h2>
<p>The Sun's core is compressed by the weight of everything above it to around 15 million degrees and a density well over ten times that of lead — though it remains a gas, because at those temperatures atoms are stripped of their electrons entirely.</p>
<p>Under those conditions, protons fuse. The dominant sequence converts four hydrogen nuclei into one helium nucleus through a chain of intermediate steps, releasing energy at each stage. About 0.7 per cent of the mass involved is converted, which sounds negligible and amounts to roughly four million tonnes per second turned into radiation.</p>
<p>There is a subtlety that makes the Sun possible. Two protons repel each other electrically, and even at 15 million degrees they overwhelmingly lack the energy to get close enough for the strong nuclear force to bind them. Fusion happens only because quantum tunnelling occasionally lets them through the barrier they cannot climb — a rare event, which is precisely why the Sun burns slowly enough to have lasted billions of years rather than detonating. The first step is so improbable that a given proton waits, on average, billions of years for it.</p>
<p>The whole thing is held in balance by a simple negative feedback. Gravity pulls inward; radiation and gas pressure push outward. Fuse too fast and the core heats, expands, and cools, slowing the reaction. Fuse too slowly and it contracts and heats. This is hydrostatic equilibrium, and it is why stars are stable rather than explosive.</p>

<h2 id="The_long_journey_out">The long journey out</h2>
<p>A photon produced in the core does not travel straight out. The interior is so dense that it is absorbed and re-emitted constantly, in random directions, executing a random walk that takes it outward only slowly. Estimates for the transit time vary widely with the assumptions, but tens of thousands of years is the usual figure. The light reaching you left the surface eight minutes ago and was generated before the last ice age.</p>
<p>Neutrinos do the opposite. Produced by the same reactions, they barely interact with matter and stream out directly, arriving at Earth about eight minutes after being made. They are the only direct observation of the core we have — everything else is inference from the surface.</p>
<p>That directness produced one of the great puzzles of twentieth-century physics. Detectors found roughly a third of the predicted number of solar neutrinos. For decades the suspicion fell on the solar models, which might have the core temperature slightly wrong. The models were fine. Neutrinos come in three types and oscillate between them in flight, and the early detectors were sensitive to only one. The solar neutrino problem was a discovery about particle physics that had been mistaken for an error in astronomy, and it established that neutrinos have mass.</p>

<h2 id="The_surface_and_the_temperature_paradox">The surface and the temperature paradox</h2>
<p>The visible surface — the photosphere — sits at about 5,500 degrees. Above it the temperature drops, and then, in the corona, rises again to over a million degrees.</p>
<p>This is genuinely strange: it is the equivalent of walking away from a fire and getting hotter. The coronal heating problem has been open for eighty years. The energy must come from the magnetic field, either through countless small reconnection events or through waves depositing energy in the thin outer gas, and current missions flying through the corona are attempting to settle which.</p>
<p>The magnetic field is also responsible for nearly everything else the Sun does that is not simply shining. Because the Sun is a fluid and rotates faster at the equator than at the poles, its field is continually wound up, tangled and eventually reorganised — a cycle that reverses the polarity roughly every 11 years and returns it every 22.</p>
<p>Sunspots are places where concentrated magnetic field suppresses convection, leaving the surface cooler and therefore darker; they are dark only by contrast, and would outshine an arc lamp. Their number tracks the cycle, and the historical record includes a long stretch in the seventeenth century — the Maunder Minimum — when they nearly vanished, coinciding with an unusually cold period in Europe.</p>

<h2 id="Space_weather">Space weather</h2>
<p>Solar flares and coronal mass ejections hurl radiation and charged particles outward, and when they reach Earth they interact with the magnetic field. The pleasant consequence is the aurora. The unpleasant one is induced current in long conductors.</p>
<p>The Carrington event of 1859 is the benchmark. Telegraph systems failed, operators received shocks, and some lines carried enough induced current to work with their batteries disconnected. Aurorae were seen near the tropics. An equivalent event today would strike a civilisation with continental power grids, and the specific vulnerability is high-voltage transformers, which are custom-built, take a long time to replace, and cannot be stockpiled cheaply. A smaller storm in 1989 collapsed the Quebec grid within ninety seconds.</p>

<h2 id="How_it_ends">How it ends</h2>
<p>The Sun is about 4.6 billion years into a main-sequence life of roughly 10 billion, and it is gradually brightening as helium accumulates in the core — it is around 30 per cent more luminous than when it formed, and will continue rising. That trend, rather than the eventual dramatic phase, is what ends Earth's habitability, probably within a billion years or so as rising luminosity drives a runaway loss of water.</p>
<p>When core hydrogen runs out, the core contracts and heats, shell fusion begins, and the Sun swells into a red giant that will engulf Mercury and Venus and leave Earth's fate uncertain between engulfment and a scorched orbit. It will then fuse helium into carbon and oxygen, shed its outer layers as a planetary nebula, and leave behind a white dwarf about the size of Earth — the exposed core, no longer fusing, cooling slowly for longer than the universe has so far existed.</p>
`,
};
