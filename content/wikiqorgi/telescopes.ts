import type { RewrittenArticle } from "./types";

export const telescopes: RewrittenArticle = {
  slug: "telescopes",
  title: "Telescopes: buckets for light, and the argument they settled",
  sourceTitle: "Telescope",
  dek: "Not magnification — collection. A big telescope's real job is gathering photons that left before there was an Earth.",
  standfirst:
    "The popular idea of a telescope is a device that makes things look bigger. Magnification is the least important thing it does and the easiest to obtain. What a telescope is actually for is collecting light: the more you gather, the fainter the object you can detect and the finer the detail you can resolve. Everything about their design follows from wanting a bigger bucket.",
  readingMinutes: 7,
  html: `
<h2 id="What_aperture_buys">What aperture buys</h2>
<p>Two quantities matter, and both depend on the diameter of the main lens or mirror.</p>
<p><strong>Light-gathering power</strong> scales with collecting area, so with the square of the diameter. Double the aperture and you collect four times the light, seeing objects four times fainter — which, since brightness falls with distance squared, means seeing twice as far.</p>
<p><strong>Resolution</strong> — the ability to separate two close objects — improves in direct proportion to diameter. This is a hard physical limit set by diffraction, not by build quality: light passing through any aperture spreads slightly, and a point source becomes a small disc. Two sources closer than that disc cannot be distinguished however much you magnify.</p>
<p>Magnification, by contrast, is set by which eyepiece you screw in. Push it beyond what the aperture supports and you get a larger, dimmer, blurrier image containing no additional information — which is why cheap telescopes advertising enormous magnifications are selling the one specification that does not matter.</p>

<h2 id="Lenses,_then_mirrors">Lenses, then mirrors</h2>
<p>The first telescopes, appearing in the Netherlands around 1608, used lenses. Galileo heard of the design, built his own within months, and pointed it upward — which nobody had systematically done. What he found was decisive: mountains on the Moon, which was supposed to be a perfect sphere; four moons circling Jupiter, proving not everything orbits Earth; and phases of Venus, which the Ptolemaic arrangement cannot produce and the Copernican one requires.</p>
<p>Refractors have two problems. Glass bends different colours by different amounts, so a simple lens focuses blue and red at different points and surrounds everything with coloured fringes. Early astronomers fought this by building absurdly long instruments — some over forty metres, strung from masts — because the effect diminishes with focal length. Achromatic doublets, combining two glass types, largely solved it in the eighteenth century.</p>
<p>The second problem is unfixable. A lens must be supported at its edge and light must pass through it, so it sags under its own weight and must be flawless throughout its volume. The largest refractor ever built for research, at Yerkes in 1897, has a lens just over a metre across, and nothing larger has been attempted since.</p>
<p>Newton's answer was a mirror. Reflection is colour-blind — all wavelengths bounce identically, so chromatic aberration disappears entirely. A mirror can be supported across its entire back, only its front surface needs to be accurate, and it can be made of almost anything rigid. Every large telescope built since has been a reflector.</p>

<h2 id="Beating_the_atmosphere">Beating the atmosphere</h2>
<p>Ground-based telescopes have long been limited not by their own optics but by the air. Turbulent cells of slightly different temperature refract light unpredictably, smearing a point source into a blob that shifts many times a second. This is why stars twinkle and why, for most of the twentieth century, building a bigger telescope stopped improving resolution past a certain point.</p>
<p>Adaptive optics defeats it, and the method is audacious. Measure the distortion hundreds of times a second using a bright reference star, compute the correction, and apply it by deforming a small flexible mirror in the light path with hundreds of actuators. Where no suitably bright star is available, a laser is fired into the upper atmosphere to make one, exciting a layer of sodium at around 90 kilometres.</p>
<p>The result is that large ground telescopes now achieve resolution close to their theoretical limit, and in the infrared can outperform space telescopes of comparable size — which changed the argument about where to build.</p>

<h2 id="Why_go_to_space_anyway">Why go to space anyway</h2>
<p>The atmosphere is not merely turbulent; it is opaque. It blocks most ultraviolet, X-rays and gamma rays entirely, and absorbs large parts of the infrared. Whole branches of astronomy are impossible from the ground at any aperture.</p>
<p>Hubble's contribution was less about sharpness than about consistency and access to ultraviolet, and its most influential images were arguably the Deep Fields — pointing at an apparently empty patch of sky for days and finding thousands of galaxies. Its early history is also a useful lesson: the primary mirror was ground to the wrong shape, precisely, because a test instrument had been assembled incorrectly and the discrepant results from other tests were dismissed. Corrective optics fitted by a servicing mission fixed it.</p>
<p>The James Webb telescope shows how the constraints drive the design. Optimised for infrared, it must be kept extremely cold, so it sits far from Earth behind a tennis-court-sized sunshield and cannot be serviced. Its 6.5-metre mirror could not fit in any rocket, so it is built from eighteen hexagonal segments that unfolded after launch and are aligned to a fraction of a wavelength.</p>

<h2 id="Combining_apertures">Combining apertures</h2>
<p>If resolution depends on diameter, and a single mirror has practical limits, the way forward is to combine widely separated instruments so that they act as one of enormous effective size. Interferometry works by capturing the incoming waves at each site with precise timing and combining them so their interference reveals detail that no individual dish could.</p>
<p>Radio astronomy has used this longest, because longer wavelengths make the timing requirements tractable. The Event Horizon Telescope pushed it furthest, linking dishes across several continents to produce an effective aperture the size of Earth — enough resolution to image the shadow of a black hole's event horizon, which is the equivalent of reading a newspaper in another city.</p>
<p>The technique has one significant limitation: combining apertures improves resolution without improving light-gathering power, since the collecting area is still only the sum of the dishes. You get sharpness, not sensitivity.</p>

<h2 id="Seeing_without_light">Seeing without light</h2>
<p>The most significant recent change is that astronomy is no longer confined to electromagnetic radiation at all.</p>
<p>Neutrino observatories — enormous volumes of ice or water instrumented with light detectors — record particles that pass through matter almost unimpeded, and can therefore see into places light cannot leave. Gravitational wave detectors measure distortions in spacetime itself, using laser interferometers with arms kilometres long, sensitive to displacements a fraction of a proton's width.</p>
<p>The combination of these with conventional telescopes is what the field calls multi-messenger astronomy, and its arrival was announced in 2017, when a gravitational wave signal from two merging neutron stars was followed within seconds by a gamma-ray burst and then by observations across the spectrum from telescopes worldwide. The event confirmed that such mergers produce heavy elements, including gold — which is to say that the question of where gold comes from was answered by an instrument that does not detect light.</p>
`,
};
