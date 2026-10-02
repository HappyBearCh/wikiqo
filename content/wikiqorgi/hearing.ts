import type { RewrittenArticle } from "./types";

export const hearing: RewrittenArticle = {
  slug: "hearing",
  title: "Hearing: a frequency analyser coiled inside the skull",
  sourceTitle: "Hearing",
  dek: "The ear converts air pressure into fluid waves, sorts them by pitch along a membrane, and amplifies the faint ones itself — so actively that healthy ears emit sound.",
  standfirst:
    "Hearing has a hard engineering problem at its centre. Sound arrives as tiny pressure changes in air, but the sensory cells that detect it sit in fluid, and almost all of the energy of a sound wave bounces off the boundary between air and water. The ear solves that with a lever system built from three of the smallest bones in the body, then hands the signal to a coiled tube that separates it into frequencies before a single nerve impulse is fired.",
  readingMinutes: 7,
  published: "2026-10-02",
  html: `
<h2 id="Air_to_water">The mismatch the middle ear exists to fix</h2>
<p>Air is light and compressible; the fluid of the inner ear is dense and nearly incompressible. When sound in air meets a water surface, the great majority of its energy is reflected rather than transmitted — the reason a swimmer with their head underwater hears very little of what is said at the poolside.</p>
<p>The middle ear is an impedance-matching device that gets around this. The eardrum collects pressure over a relatively large area and passes its vibration through a chain of three tiny bones — the malleus, incus and stapes — to the oval window of the inner ear, which is many times smaller. Concentrating the same force onto a smaller area raises the pressure, and the slight lever action of the bone chain adds a little more. Together they recover most of what would otherwise be lost.</p>
<p>The bones have a remarkable history. Comparative anatomy and the fossil record show that two of them, the malleus and incus, descend from bones that formed the jaw joint in the reptile-like ancestors of mammals. As the mammalian jaw was reorganised around a new joint, the old jaw bones shrank, migrated and were recruited into hearing. The transition is documented in a sequence of fossils with unusual completeness, and the embryonic development of the ear in living mammals still retraces part of it.</p>

<h2 id="Cochlea">Sorting sound by pitch along a membrane</h2>
<p>The inner ear's hearing organ is the cochlea, a fluid-filled tube coiled about two and a half times, small enough to fit inside a pea-sized space in the temporal bone. Running along its length is the basilar membrane, which is narrow and stiff at the base, near the oval window, and wider and floppier at the far end.</p>
<p>When the stapes pushes on the oval window it sets up a wave in the fluid that travels along the membrane. Because the membrane's mechanical properties change continuously along its length, each frequency produces its biggest movement at a different place: high frequencies near the base, low frequencies toward the apex. Georg von Békésy worked this out by observing the membrane directly in cochleas from cadavers, and was awarded the Nobel Prize in 1961 for it.</p>
<p>The consequence is that the cochlea performs a frequency analysis mechanically, before any neural processing. Each place along the membrane is a channel tuned to a particular pitch, and the nerve fibres leaving each place carry information about that band of frequencies. This arrangement, called tonotopy, is preserved through the auditory pathway all the way to the cortex.</p>

<h2 id="Hair_cells">The amplifier and the ears that emit sound</h2>
<p>The detectors are hair cells, so called for the bundles of stiff projections on their upper surfaces. When the membrane moves, the bundles are deflected, mechanically opening ion channels and changing the cell's voltage. A human cochlea has only around fifteen thousand of these cells, in two kinds.</p>
<p>The inner hair cells, a single row of a few thousand, do most of the sensing and send the signal to the brain. The more numerous outer hair cells do something stranger: they change length in response to their own electrical signals, using a motor protein called prestin, and in doing so they pump energy back into the vibration of the membrane. This cochlear amplifier boosts faint sounds and sharpens the tuning of each place far beyond what the passive membrane could achieve.</p>
<p>The amplifier is active enough to leak. In 1978 David Kemp reported that the ear emits faint sounds of its own, detectable with a sensitive microphone in the ear canal. These otoacoustic emissions are a by-product of the outer hair cells at work, and because they disappear when those cells are damaged they are now the basis of routine hearing screening in newborns.</p>

<h2 id="Where">Knowing where a sound came from</h2>
<p>Unlike the eye, the ear contains no map of space; direction has to be computed. The brain does it largely by comparing the two ears.</p>
<p>A sound from the left reaches the left ear slightly earlier than the right — by up to about two-thirds of a millisecond for a sound directly to one side — and the auditory brainstem can detect differences of a few tens of microseconds. For higher frequencies, the head casts an acoustic shadow, so the sound is also louder at the nearer ear. Timing dominates for low sounds and level differences for high ones.</p>
<p>Neither cue distinguishes front from back or up from down, because a sound directly ahead and one directly behind arrive at both ears identically. That ambiguity is broken by the outer ear. The folds of the pinna reflect and filter incoming sound in a way that depends on its direction, imprinting a characteristic spectral signature that the brain learns to read. People fitted with moulds that change the shape of their ears lose the ability to judge elevation, and recover it over a few weeks as they relearn the new filter.</p>

<h2 id="Loss">Why hearing loss is usually permanent</h2>
<p>Mammalian hair cells are not replaced. Each person has the cells they were born with, and every one destroyed by noise, certain drugs, infection or simply age is gone. Birds and fish regenerate their hair cells readily, which has made them a focus of research into whether the capacity could be switched back on in mammals.</p>
<p>Noise damages hair cells mechanically and metabolically, and the outer hair cells at the high-frequency base of the cochlea are usually affected first, which is why age-related and noise-induced hearing loss typically begins with the high pitches — consonants rather than vowels, and so with trouble following speech in a noisy room long before any sense of going deaf. The World Health Organization's 2021 report on hearing estimated that more than one and a half billion people live with some degree of hearing loss.</p>
<p>The most effective intervention for profound loss bypasses the hair cells entirely. A cochlear implant places a strip of electrodes along the cochlea and stimulates the nerve directly, place by place, exploiting the same tonotopic arrangement the membrane would have used. The sound it produces is coarse compared with natural hearing, but it is good enough for most recipients to follow speech, and more than a million people now use one.</p>
`,
};
