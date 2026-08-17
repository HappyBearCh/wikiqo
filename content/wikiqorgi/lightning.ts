import type { RewrittenArticle } from "./types";

export const lightning: RewrittenArticle = {
  slug: "lightning",
  title: "Lightning: nobody is certain how a cloud charges itself",
  sourceTitle: "Lightning",
  dek: "The discharge is well understood. The mechanism that separates the charge in the first place is still argued over.",
  standfirst:
    "Lightning is the most familiar high-energy phenomenon on the planet and one of the least completely explained. The physics of the strike — the stepped leader, the return stroke, the thunder — has been photographed and measured in detail. The prior question of how a thundercloud manages to separate billions of coulombs of charge against the electrical force pulling them back together has a leading answer that is still not fully settled.",
  readingMinutes: 7,
  html: `
<h2 id="Charging">The part that is not settled</h2>
<p>A thundercloud ends up with a negative charge in its middle and lower region and a positive charge near the top, with a smaller positive pocket at the base. Producing that arrangement requires work, because separating charge against its own attraction costs energy.</p>
<p>The leading explanation is the non-inductive graupel–ice mechanism. In the mixed-phase region of a storm, where temperatures run between about −10 and −25°C, three things coexist: supercooled water droplets, small ice crystals, and graupel — soft hail, formed as droplets freeze onto falling particles. Graupel is heavy and falls; ice crystals are light and are carried upward.</p>
<p>When they collide, charge transfers between them, and the sign of the transfer depends on temperature and on how much liquid water is present. In the conditions typical of a thunderstorm's mixed-phase region, graupel charges negatively and the crystals positively. The updraught then does the separating for free, lofting positive crystals to the top while negative graupel settles lower.</p>
<p>This is supported by laboratory work and explains why storms without a strong updraught and without a deep mixed-phase layer produce little lightning. What remains disputed is the microphysics of the transfer itself — what actually moves during the collision, and why the sign reverses at a particular temperature. Several competing accounts exist, involving surface liquid layers, ion transfer and crystal growth rates, and none has closed the question.</p>
<p>It is a striking situation: an effect everyone can observe, exploited in weather radar and lightning detection networks, whose fundamental cause is a live research area.</p>

<h2 id="The_strike">What happens in a strike</h2>
<p>Air is an excellent insulator, and breaking it down requires around three million volts per metre. Cloud-to-ground potential differences run to hundreds of millions of volts, but they are spread over kilometres, so the field almost never exceeds breakdown across the whole gap at once. Lightning gets around this by building a conducting path in stages.</p>
<p>The <strong>stepped leader</strong> descends from the cloud in jumps of tens of metres, pausing microseconds between steps, branching as it goes. It is faint, carries relatively little current, and is feeling for a route — which is why lightning is forked.</p>
<p>As it nears the ground, the field at pointed objects intensifies enough that <strong>upward streamers</strong> rise from trees, buildings, masts and occasionally people. The strike location is decided in the last few tens of metres, when one streamer meets the leader.</p>
<p>Connection completes the circuit, and the <strong>return stroke</strong> propagates upward along the established channel at roughly a third of the speed of light, carrying typically 30,000 amperes. This is the flash — and it travels from the ground to the cloud, not the other way, which is the opposite of what everyone sees.</p>
<p>The channel heats to around 30,000 kelvin, roughly five times the surface temperature of the sun. That heating is what produces both the light and the thunder.</p>
<p>Several strokes commonly follow down the same channel within a fraction of a second, which is the flicker.</p>

<h2 id="Thunder">Thunder</h2>
<p>The channel's sudden heating causes the air to expand explosively, producing a shock wave that decays into a sound wave within a few metres.</p>
<p>Thunder is a crack when the strike is close and a rumble when it is distant, and the reason is geometry rather than distance alone. The channel is kilometres long, so sound from different parts of it arrives at different times — the near end first, the far end later — spreading a single event over several seconds. Terrain echoes and atmospheric refraction extend it further.</p>
<p>The counting rule works because light is effectively instantaneous and sound travels about 340 metres per second: three seconds per kilometre, or roughly five per mile.</p>
<p>Thunder is rarely heard beyond about 25 kilometres, because temperature gradients refract the sound upward. A flash seen without thunder is not silent lightning; it is lightning far enough away that the sound has bent over your head.</p>

<h2 id="Franklin">The kite, and what he was actually testing</h2>
<p>Benjamin Franklin's proposal in 1750 was not that lightning is electricity — that had been suggested before. It was an experiment to test it, using a tall iron rod to draw charge from a passing cloud.</p>
<p>The experiment was performed successfully in France in 1752 by Thomas-François Dalibard, before Franklin's own attempt. Franklin's kite experiment, if it happened as described, came afterwards.</p>
<p>The danger was real and was demonstrated the following year, when Georg Wilhelm Richmann was killed in St Petersburg attempting a version of it. Franklin was fortunate; his account describes drawing sparks from a key, which implies the kite was collecting ambient charge rather than taking a strike, since a direct strike would have killed him.</p>
<p>The lightning rod followed, and it does not attract lightning so much as provide a preferred path and a safe route to ground. Franklin declined to patent it, and there was a period of genuine theological objection to interfering with what was taken to be divine judgement — an objection that faded as churches, which are tall and were frequently struck, proved to benefit most.</p>

<h2 id="Safety">What actually helps</h2>
<p>Lightning kills a few thousand people a year worldwide, heavily concentrated in countries where outdoor agricultural work is common and substantial buildings are not.</p>
<p>A vehicle protects you, and not because of the tyres, which is the usual explanation and is wrong. Rubber a few millimetres thick is irrelevant to a discharge that has just crossed kilometres of air. The protection comes from the metal body acting as a Faraday cage, conducting current around the occupants. A convertible or a fibreglass-bodied vehicle offers nothing.</p>
<p>The most persistent myth is that lightning never strikes the same place twice, which is precisely backwards. Tall isolated conductive objects are struck repeatedly and by design — the Empire State Building is hit around twenty times a year.</p>
<p>Most casualties are not direct strikes. Ground current, spreading outward from the strike point, is the largest single cause, which is why sheltering under a tree is dangerous even if the tree takes the hit. Side flashes jumping from a struck object to a nearby person account for many more.</p>
<p>Survival is more common than expected — roughly nine in ten people struck survive — but long-term neurological and cardiac consequences are frequent among survivors and are considerably less discussed than the mortality figure.</p>

<h2 id="Upward">The discharges nobody knew about</h2>
<p>Pilots reported flashes above thunderstorms for decades and were generally not believed. The first photograph was taken accidentally in 1989, during a camera test, and confirmed an entire family of upper-atmosphere discharges.</p>
<p><strong>Sprites</strong> are large red flashes at 50 to 90 kilometres altitude, triggered by particularly powerful positive cloud-to-ground strikes. They are enormous — tens of kilometres across — and last only milliseconds, which is why they went unrecorded for so long.</p>
<p><strong>Blue jets</strong> shoot upward from cloud tops into the stratosphere. <strong>ELVES</strong> are expanding rings of light in the ionosphere, produced by the electromagnetic pulse from a strike.</p>
<p>Stranger still are <strong>terrestrial gamma-ray flashes</strong>, discovered in 1994 by a satellite built to observe cosmic gamma-ray bursts, which kept detecting them coming from below. Thunderstorms accelerate electrons to relativistic energies and produce gamma radiation, along with antimatter — positrons have been detected in association with them. Storms on this planet are, briefly, particle accelerators.</p>
`,
};
