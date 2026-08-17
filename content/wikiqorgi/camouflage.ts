import type { RewrittenArticle } from "./types";

export const camouflage: RewrittenArticle = {
  slug: "camouflage",
  title: "Camouflage: breaking up an outline works better than matching a background",
  sourceTitle: "Camouflage",
  dek: "The zebra's stripes are the clearest case — and after a century of argument the best-supported explanation is not about predators at all.",
  standfirst:
    "Concealment is usually imagined as blending in, and blending in is only one of several strategies and often not the best. An animal that matches its background perfectly is still betrayed by its outline and its shadow. The techniques that actually work — disrupting edges, cancelling shading, mimicking specific objects — were worked out by a naturalist painter, adopted by navies, and are now being tested experimentally with a rigour the field lacked for most of its history.",
  readingMinutes: 7,
  html: `
<h2 id="Thayer">The painter who worked it out</h2>
<p>Abbott Thayer, an American artist, published the first systematic account in 1909 and identified two principles that remain central.</p>
<p><strong>Countershading</strong> addresses a problem that background matching cannot. A uniformly coloured object lit from above is bright on top and dark underneath, and that gradient reveals it as three-dimensional. Animals coloured dark above and pale below cancel the gradient, flattening their apparent form. The pattern is nearly universal in fish, birds and mammals, and its distribution matches the prediction: species that habitually rest upside down have the shading reversed.</p>
<p><strong>Disruptive coloration</strong> uses high-contrast patches that cross the body's edges, breaking the outline into apparently unrelated shapes. This is counterintuitive, because the patches themselves are conspicuous — but a visual system searching for a body-shaped object fails to assemble one. Detection depends on recognising a coherent form, and destroying the form is more effective than matching the colour.</p>
<p>Thayer then overreached badly. He argued that essentially all animal coloration was concealment, including the flamingo's pink, which he claimed matched sunset skies. Theodore Roosevelt attacked the book at length and with relish, and the excess damaged the reputation of the sound parts for decades.</p>
<p>The core claims have since been vindicated experimentally. Studies using artificial prey placed in the field, with survival measured against real wild predators, confirm that disruptive patterns outperform background-matching ones, and that patterns touching the outline work better than the same patterns placed inside it.</p>

<h2 id="Strategies">The other techniques</h2>
<p><strong>Masquerade</strong> is distinct from camouflage proper. The animal is seen and is misclassified — as a twig, a leaf, a stone, a bird dropping. Stick insects, leaf insects and the caterpillars that resemble broken branches are all detected perfectly well and then dismissed as uninteresting. This works at close range where concealment fails, and it is why some masquerading species are conspicuous rather than cryptic.</p>
<p><strong>Motion dazzle</strong> addresses a different problem, since almost no camouflage survives movement. High-contrast repeating patterns do not prevent detection but distort judgments of speed and trajectory, causing a pursuing predator to misjudge an interception. Experiments using human subjects chasing targets on screens support the effect for striped patterns, and it may apply to fast-moving grouped prey.</p>
<p><strong>Counter-illumination</strong> is the marine version of countershading and is more elegant. In open water, anything above a viewer is silhouetted against downwelling light, and no pigment fixes that. Many midwater squid and fish carry light organs on their undersides, matching the intensity of the light above so that the silhouette disappears. Some adjust the output as ambient light changes.</p>
<p><strong>Transparency</strong> is the most complete solution and is largely restricted to small aquatic animals — jellyfish, salps, larval fish. It fails on land because the refractive index difference with air is large, and it fails for large animals because thick tissue scatters light regardless.</p>

<h2 id="Zebra">The zebra argument</h2>
<p>Zebra stripes are the most discussed animal pattern in biology and the explanations proposed have included nearly everything.</p>
<p><strong>Predator confusion</strong> — that a moving herd's stripes prevent a lion from singling out an individual. Appealing, and poorly supported: lions take zebra successfully at ordinary rates, and modelling of feline visual acuity indicates a lion cannot resolve the stripes at the distances at which it detects prey. The stripes are for something that sees them close up.</p>
<p><strong>Thermoregulation</strong> — that black and white stripes set up convective currents. Measurements have not found the predicted air movement, and comparative analysis does not support a temperature association.</p>
<p><strong>Social recognition</strong> — that stripe patterns identify individuals. Plausible, but species without stripes manage individual recognition perfectly well.</p>
<p><strong>Biting flies</strong> is the explanation with the strongest evidence, and it comes from several independent directions. Comparative analysis across equid species finds striping correlates with the geographic range of tabanid flies rather than with predators or temperature. Tabanids carry diseases that are serious for equids, which supplies the selection pressure.</p>
<p>The direct test is the persuasive one. Tim Caro's group put striped and plain coats on horses and filmed approaching flies. Flies approached both at the same rate but failed to land on the striped ones — decelerating late, colliding, or veering away. The stripes appear to disrupt the optic flow cues flies use to control landing.</p>
<p>The case is strong and not unanimous, and it is a good example of a question that resisted a century of plausible reasoning and yielded to an experiment with painted horses.</p>

<h2 id="Cephalopods">The animals that change in milliseconds</h2>
<p>Cephalopod camouflage is the most sophisticated known, and it operates on a timescale nothing else approaches.</p>
<p>The skin contains chromatophores — pigment sacs surrounded by radial muscles under direct neural control. Contracting the muscles stretches the sac and exposes the pigment. Because the control is neural rather than hormonal, changes occur in well under a second.</p>
<p>Beneath these are iridophores producing structural colours by interference, and leucophores scattering ambient light broadly, which lets the animal match whatever illumination it is under.</p>
<p>Cuttlefish also alter skin texture, raising papillae into projections that mimic algae or rough rock. Shape, colour, pattern and texture change together.</p>
<p>The unresolved point is that cephalopods are, by every behavioural and physiological test, colour blind — they have a single visual pigment. How an animal that cannot see colour matches the colour of its background is a genuine puzzle. The leading proposal is that chromatic aberration in their unusual pupils, combined with rapid focal adjustment, allows colour to be inferred from how sharply different wavelengths focus. It is ingenious and not yet established.</p>

<h2 id="Military">The military borrowed all of it</h2>
<p>Armies wore bright colours until rifles became accurate enough to make visibility lethal. Khaki was adopted by British forces in India in the nineteenth century, and drab uniforms spread through European armies by the First World War.</p>
<p>Naval camouflage faced Thayer's problem in acute form: a ship cannot match a background that changes with weather, light and viewing angle. The response was <strong>dazzle painting</strong>, developed in Britain by Norman Wilkinson from 1917 — bold geometric patterns in contrasting colours, designed not to conceal but to confuse. A submarine commander had to estimate a target's course and speed by eye through a periscope to aim a torpedo at where the ship would be, and disrupting that estimate was enough.</p>
<p>Thousands of ships were painted, each differently, so that no pattern could be learned. Whether it worked was never established — the statistics from the period are confounded by convoying, which was introduced at the same time and certainly did work.</p>
<p>Modern digital camouflage uses pixellated micropatterns to provide disruption at several viewing distances at once, since a pattern effective at 50 metres blurs into a uniform tone at 500. This is Thayer's disruptive principle applied across scales, and it is one of the few cases where a military design was derived directly from a naturalist's account of birds.</p>
`,
};
