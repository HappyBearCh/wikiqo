import type { RewrittenArticle } from "./types";

export const photography: RewrittenArticle = {
  slug: "photography",
  title: "Photography: the image was easy, keeping it was the hard part",
  sourceTitle: "Photography",
  dek: "The camera existed for centuries before anyone could make a picture stay. The invention was chemical, not optical.",
  standfirst:
    "A camera obscura projects a perfect image of the world onto a wall, and artists were tracing them in the sixteenth century. The problem was never getting the image; it was that the substances which darken in light keep darkening, so a picture continues exposing until it is a uniform black. Photography is the solution to that second problem, and everything the medium later became — evidence, memory, journalism, surveillance — followed from a fixing agent.",
  readingMinutes: 8,
  html: `
<h2 id="Fixing">The actual invention</h2>
<p>The optics were ancient. A small hole in the wall of a dark room projects an inverted image of what is outside, described in China in the fifth century BC and in the Arab world by Ibn al-Haytham around the year 1000. By the Renaissance the camera obscura was a portable drawing aid with a lens and a mirror, and there is a long-running argument about how many old master paintings were traced from one.</p>
<p>Silver salts darkening in sunlight were known too. Johann Heinrich Schulze demonstrated it in 1717, and Thomas Wedgwood produced images on treated leather around 1800 that he could only look at by candlelight, because daylight destroyed them within minutes. He had photographs and could not keep them.</p>
<p>The fix came from John Herschel in 1819, who found that sodium thiosulphate dissolves unexposed silver salts. Wash the plate with it and the unreacted material is removed; what remains cannot darken further because there is nothing left to darken. Herschel was not trying to invent photography — he was doing chemistry — and he passed the discovery to the people who were.</p>
<p>Nicéphore Niépce made the earliest surviving photograph from nature around 1826, an exposure of eight hours or more onto a bitumen-coated plate, which is why the buildings in it are lit from both sides. Louis Daguerre, his partner, produced a far more practical process announced in 1839, and the French government bought it and released it to the world free — with the pointed exception of England, where Daguerre had separately taken out a patent.</p>

<h2 id="Two_processes">Two inventions, and only one had a future</h2>
<p>1839 produced two rival processes with fundamentally different architectures, and the one that lost technically won conceptually.</p>
<p>The <strong>daguerreotype</strong> produced an image directly on a silvered copper plate. The results were astonishingly sharp — sharper than most photography for the next century — and each was unique. There was no negative, so a daguerreotype could not be copied except by photographing it again. Every portrait was a single object, and the image was laterally reversed unless a mirror was used.</p>
<p>William Henry Fox Talbot's <strong>calotype</strong> produced a paper negative, from which any number of positive prints could be made. The images were softer, because the paper's fibres diffused the light, and the process was encumbered by patents Talbot enforced aggressively.</p>
<p>Reproducibility decided it. A medium that yields one object per exposure is a kind of miniature painting; a medium that yields unlimited copies is a publishing technology. Every subsequent process — wet collodion, dry plates, film, and eventually digital sensors — took the negative-positive architecture, and the daguerreotype was commercially extinct within twenty years.</p>

<h2 id="Kodak">The moment it left the professionals</h2>
<p>Early processes were laboratory work. Wet collodion plates, which dominated from the 1850s, had to be coated, exposed and developed before the emulsion dried — perhaps ten minutes in total — so a photographer travelled with a darkroom. The battlefield photographers of the American Civil War hauled wagons of chemicals, which is one reason the surviving images are overwhelmingly of camps, corpses and static positions rather than fighting.</p>
<p>Dry plates in the 1870s broke the connection between exposure and processing. George Eastman then broke the connection between taking a photograph and knowing anything about photography. The Kodak of 1888 came pre-loaded with a hundred exposures; you sent the whole camera back, and the company returned the prints and the reloaded camera. The slogan was that you press the button and they do the rest, and it is a fair description of what changed.</p>
<p>The consequence was the snapshot, and with it a shift in what photographs were for. Photography stopped being a formal event and became a way ordinary families produced a record of themselves — which is why the visual memory of the twentieth century looks entirely unlike that of the nineteenth.</p>

<h2 id="Evidence">The claim to truth, and its limits</h2>
<p>Photography's cultural authority came from its apparent mechanical objectivity: the image is formed by light from the object itself, so it seems to testify rather than represent.</p>
<p>This has always been overstated, and manipulation is as old as the medium. Composite prints were assembled from multiple negatives in the 1850s. Political retouching was routine well before digital tools — the Soviet practice of removing purged officials from photographs is the famous case, and the retouching was done with brushes and scalpels.</p>
<p>More fundamentally, every photograph involves choices that shape what it asserts: where the frame stops, when the shutter fires, what is left outside, what focal length compresses or exaggerates. A photograph of a small protest can be made to look like a crowd or a handful of people from two positions ten metres apart, with no manipulation at all.</p>
<p>Two famous images make the point differently. The Migrant Mother, one of the defining images of the Depression, was the last of several frames in which the photographer moved closer and rearranged the children; the subject said decades later that she had felt exploited and had received nothing. The raising of the flag at Iwo Jima was genuine but was the second flag of the day, raised for practical reasons, and spent years being described as staged because the first raising had already happened.</p>
<p>What survives of the truth claim is narrower and still valuable: a photograph is evidence that light of a certain configuration reached a sensor at a certain moment. What it means requires everything the photograph does not contain.</p>

<h2 id="Digital">What digital actually changed</h2>
<p>The sensor replaced film in the 1990s and 2000s, and the usual account emphasises convenience. The deeper changes are elsewhere.</p>
<p>The marginal cost of an exposure fell to zero, which changed behaviour more than technology. Film imposed discipline through scarcity: thirty-six frames, each costing money to shoot and to develop. Digital removed the constraint, and the number of photographs taken annually now exceeds the total taken on film in the entire history of the medium by a very large factor.</p>
<p>The image also stopped being a single moment. Computational photography — which is what a phone camera does — combines multiple exposures, applies noise reduction trained on large image sets, and reconstructs detail by inference rather than measurement. A modern phone photograph of the moon may contain detail the sensor never resolved, supplied by a model that knows what the moon looks like. This is a genuinely new situation: the picture is partly a prediction, and the boundary between recording and generating has stopped being sharp.</p>
<p>Longevity ran backwards. A properly processed silver print survives a century or more with no intervention. Digital files require active migration across formats and media, and the shoebox of prints in an attic has proved a more robust archive than a hard drive in a drawer.</p>

<h2 id="Surveillance">The other thing cameras are for</h2>
<p>A technology for recording appearances is also a technology for identifying people, and this was understood immediately.</p>
<p>Alphonse Bertillon systematised the police photograph in the 1880s, pairing standardised front and profile views with body measurements. The mugshot is his, and so is the underlying idea that a person can be reduced to a filed record and retrieved.</p>
<p>The scale changed with automation. Ubiquitous cameras produce more footage than anyone can watch, which made the recordings largely inert; automated face recognition removes that limit and converts an archive nobody reviews into a searchable index of where people have been. The technical accuracy question — error rates that have been shown to differ substantially across demographic groups — is real and is not the only question, since a system that worked perfectly would raise the harder one.</p>
<p>The medium that began as a way of keeping an image from fading now mostly produces images nobody looks at, held in systems that can find any of them on demand. That is a considerable distance from a bitumen plate exposed for eight hours to a courtyard in Burgundy.</p>
`,
};
