import type { RewrittenArticle } from "./types";

export const opticalIllusions: RewrittenArticle = {
  slug: "optical-illusions",
  title: "Illusions: seeing is guesswork, and illusions are where you can watch the guess",
  sourceTitle: "Optical illusion",
  dek: "The image on the retina is ambiguous and the brain resolves it with assumptions. Knowing an illusion is an illusion does not switch the assumptions off.",
  standfirst:
    "The pattern of light on the retina is consistent with infinitely many arrangements of objects in the world, so vision cannot be a matter of reading it off. It is an inference: the visual system commits to the most probable interpretation given assumptions built in by evolution and experience. Illusions are the cases where those assumptions are violated, and their most instructive feature is that understanding one does not dispel it — which tells you the process is sealed off from anything you know.",
  readingMinutes: 7,
  html: `
<h2 id="Inverse">The problem vision has to solve</h2>
<p>Projecting a three-dimensional world onto a two-dimensional retina discards information irreversibly. A small near object and a large far one cast the same image; a surface may be dark because it is dark or because it is shadowed; an outline may be an object's edge or the boundary of a shadow.</p>
<p>Recovering the world from the image is therefore an underdetermined problem — the inverse optics problem — and it has no unique solution. What the visual system does instead is impose constraints: assume light comes from above, assume objects are rigid, assume surfaces are continuous behind occluders, assume the world is more likely to contain simple regular shapes than coincidentally aligned complex ones.</p>
<p>These assumptions are correct nearly always, which is why vision feels effortless and reliable. They can be violated by a display constructed to violate them, and the result is an illusion — not a malfunction but the system operating correctly on input it was never built for.</p>
<p>Hermann von Helmholtz named this unconscious inference in the nineteenth century, and the modern version treats perception as Bayesian: the percept combines the incoming evidence with prior expectations, weighted by how reliable each is. When the evidence is ambiguous the prior dominates, which is exactly when illusions are strongest.</p>

<h2 id="Brightness">Where the same grey is two greys</h2>
<p>Edward Adelson's checker-shadow figure is the cleanest demonstration available. Two squares on a checkerboard, one in shadow and one outside it, are printed in identical grey, and they look plainly different. Covering everything but the two squares makes them look identical, and uncovering the scene makes the difference return.</p>
<p>The system is not measuring the light from each square. It is estimating the reflectance of the surfaces — asking what colour of paint would produce this image under this lighting — and correctly concluding that a square that is this bright while in shadow must be painted lighter than one this bright in full light. The answer is right about the world it assumes and wrong about the flat printed page.</p>
<p>Simultaneous contrast works similarly: a grey patch on a dark background looks lighter than the same patch on a light background, because brightness is judged relative to surroundings. This is the same lateral inhibition that produces Mach bands, and it starts in the retina.</p>
<p>The general principle is that the visual system almost never reports absolute quantities. It reports relations, because relations are what stay constant when the illumination changes, and the illumination changes constantly.</p>

<h2 id="Geometry">Lines that are not the length they look</h2>
<p>The Müller-Lyer figure — two equal lines, one with outward arrowheads and one with inward ones — is the most-studied illusion there is, and the standard explanation is that the arrowheads resemble the corners of three-dimensional structures, an outer corner and an inner one, cueing different apparent distances and therefore different size corrections.</p>
<p>That explanation is contested, partly because the illusion works with figures that carry no depth interpretation. What is well established is that its strength varies between populations. Segall, Campbell and Herskovits reported in the 1960s that people raised in environments with fewer straight lines and rectangular structures showed a weaker effect, which supports the idea that the relevant assumptions are tuned by experience. The study has been criticised on method and remains one of the most cited pieces of evidence that perception is culturally calibrated.</p>
<p>The Ponzo illusion, in which converging lines make an upper object look larger, and the corridor and moon illusions all involve the same machinery: apparent distance modifying apparent size. The moon looks larger near the horizon than overhead despite subtending the same angle, and the explanation is still argued about after two millennia of attention, which is a reasonable indicator of how hard the problem is.</p>
<p>Size constancy itself is the useful function underneath. A person walking away halves their retinal image and does not appear to shrink, because apparent size is computed jointly with apparent distance. Every geometric illusion of this family is that mechanism being fed a misleading distance.</p>

<h2 id="Motion">Movement that is not there</h2>
<p>Motion is detected by dedicated circuits that compare signals across neighbouring positions over time, and those circuits can be driven by static input.</p>
<p>The motion aftereffect is the cleanest case. Watch a waterfall, or any sustained motion in one direction, for half a minute and then look at a stationary surface: it appears to drift the other way. Direction-selective neurons adapt, the balance between opposing populations shifts, and the system reads the imbalance as motion. The effect was described by Aristotle and named for the waterfall at Foyers, where Robert Addams reported it in 1834.</p>
<p>The peripheral drift illusions — static patterns of repeated asymmetric colour gradients that appear to rotate — exploit the fact that different luminances are processed at slightly different speeds, so tiny eye movements generate spurious motion signals. They stop if the eyes are held perfectly still, which is the giveaway.</p>
<p>Apparent motion, in which two lights flashed in sequence are seen as one light moving, is the phenomenon underlying every moving image ever displayed. The old explanation for cinema, persistence of vision, is wrong: the retinal afterimage explains why frames do not appear to flicker, not why they appear to move. Motion in film is generated by the motion system interpreting displaced images as a single moving object.</p>

<h2 id="Impenetrable">Why knowing does not help</h2>
<p>The most philosophically loaded property of illusions is their cognitive impenetrability. Being told the two squares are identical, measuring them, even having drawn the figure yourself, does not make them look the same.</p>
<p>This indicates that early visual processing is modular — sealed off from beliefs, running its own computation, and delivering a result the rest of the mind receives rather than participates in. Jerry Fodor used exactly this to argue for the modularity of perceptual systems, and illusions are the standard evidence.</p>
<p>The practical consequence is that vision cannot be corrected by knowing better, which matters wherever visual judgement is safety-critical. Pilots are trained against specific illusions — a runway that slopes or is unusually narrow produces systematic misjudgement of approach height, and the false climb sensation during acceleration has caused crashes — and the training consists of instrument discipline rather than an attempt to see correctly.</p>
<p>The reasonable conclusion is not that the senses are unreliable. It is that perception is a construction that is extremely good at its actual job, and that its errors are systematic, predictable and informative — which is why illusions are a research instrument rather than a curiosity. Nearly everything known about the stages of visual processing has been learned by finding an input that makes one stage disagree with another.</p>
`,
};
