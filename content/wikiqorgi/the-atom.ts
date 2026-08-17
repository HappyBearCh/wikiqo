import type { RewrittenArticle } from "./types";

export const theAtom: RewrittenArticle = {
  slug: "the-atom",
  title: "The atom: mostly nothing, and not shaped like the diagram",
  sourceTitle: "Atom",
  dek: "The solar system picture was already known to be wrong when it was drawn. Electrons do not orbit anything.",
  standfirst:
    "The atom in the logo — a nucleus with electrons circling it on neat elliptical tracks — was obsolete within about a decade of being proposed, and physicists knew it could not work even as they used it. Its replacement is harder to draw and considerably stranger: electrons occupy standing-wave patterns of probability, and asking where one is between measurements may not be a meaningful question.",
  readingMinutes: 7,
  html: `
<h2 id="Mostly_empty">Mostly empty</h2>
<p>Ernest Rutherford's team fired alpha particles at a thin gold foil in 1909, expecting them to pass through with slight deflections. Almost all did. A tiny fraction bounced back, which Rutherford described as about as credible as firing a shell at tissue paper and having it come back at you.</p>
<p>The only arrangement that produces that result is a very small, very dense, positively charged core with the rest of the volume essentially empty. If an atom were scaled to the size of a sports stadium, the nucleus would be a pea at the centre and the electrons would be specks in the stands. Matter is overwhelmingly vacant space, and the reason a table is solid is not that its atoms are solid but that electromagnetic repulsion and a quantum rule against electrons sharing states prevent one atom's electrons from passing through another's.</p>
<p>Rutherford's model created an immediate crisis. A charged particle moving in a circle radiates energy, so an orbiting electron should spiral into the nucleus in a fraction of a nanosecond. By classical physics, atoms cannot exist. They evidently do.</p>

<h2 id="Bohrs_patch">Bohr's patch</h2>
<p>Niels Bohr's response in 1913 was to declare the problem away by fiat: electrons occupy only certain permitted orbits and do not radiate while in them, and light is emitted or absorbed only when an electron jumps between them, carrying exactly the energy difference.</p>
<p>It was an unprincipled fix and it made a precise prediction. Hydrogen's emission spectrum consists of sharp lines at specific wavelengths — a fact known for decades and unexplained — and Bohr's model calculated them correctly. That is why it was accepted despite having no justification for its central assumption.</p>
<p>It also failed for anything more complicated than hydrogen, which was the signal that a proper theory was needed rather than a better patch.</p>

<h2 id="What_replaced_it">What replaced it</h2>
<p>Louis de Broglie proposed in 1924 that matter has wave properties, with wavelength inversely proportional to momentum. If an electron is a wave confined around a nucleus, only those wavelengths that fit a whole number of times can persist — the rest interfere with themselves and cancel. Bohr's arbitrary permitted orbits become the standing-wave patterns of a confined wave, which is the same reason a guitar string produces only certain notes.</p>
<p>Erwin Schrödinger turned this into an equation whose solutions describe the electron's state, and Max Born supplied the interpretation: the solution's squared magnitude gives the probability of finding the electron at a given place. Not where it is — where it would be found if you looked.</p>
<p>So electrons occupy orbitals, which are three-dimensional probability distributions, and they have shapes that are not spheres. The s orbitals are spherical; p orbitals are dumbbells along three axes; d orbitals are stranger still, with four lobes or a dumbbell wearing a ring. These shapes are the whole basis of chemistry — the geometry of molecules, the angle in a water molecule, the tetrahedral arrangement of carbon's bonds — and none of it follows from a solar-system picture.</p>
<p>Heisenberg's uncertainty principle explains why the old model could not be repaired. Position and momentum cannot both be precisely defined, not because measurement disturbs the system but because a wave with a definite wavelength has no definite location. An orbit requires both at once, so an orbit is not a thing an electron can have.</p>

<h2 id="Inside_the_nucleus">Inside the nucleus</h2>
<p>The nucleus holds protons and neutrons, and the immediate problem is why it holds together at all, since positively charged protons repel each other fiercely at that range.</p>
<p>The strong nuclear force binds them, and it is far stronger than electromagnetism but effective only across roughly the width of a nucleus. This tension sets the shape of nuclear physics. Small nuclei are stable because every particle is within range of every other. As nuclei grow, the strong force still reaches only to neighbours while electrical repulsion acts across the whole nucleus — so large nuclei need extra neutrons to dilute the charge, and beyond a certain size nothing is stable.</p>
<p>The same tension explains where energy comes from. Binding energy per particle peaks around iron. Fusing light nuclei toward iron releases energy; splitting heavy nuclei toward iron also releases energy. Stars run on the first, reactors on the second, and both stop at iron — which is why iron is unusually abundant in the universe and why a star that starts fusing it dies.</p>
<p>Protons and neutrons are themselves composite, made of quarks bound by gluons, and — a detail that surprises people — the quarks account for only a small percentage of the mass. Most of a proton's mass is the energy of the field binding it together. Almost all of your mass is binding energy rather than matter in any intuitive sense.</p>

<h2 id="Why_the_periodic_table_looks_like_that">Why the periodic table looks like that</h2>
<p>Mendeleev arranged the elements by properties in 1869 and left gaps for elements he predicted, correctly, would be found. He had no idea why the pattern existed.</p>
<p>The answer is orbital structure. Electrons fill orbitals in order of energy, and orbitals come in shells of specific capacities. An element's chemistry is determined almost entirely by its outermost electrons, so elements with the same outer configuration behave alike — which is why the table has columns.</p>
<p>The noble gases are inert because their outer shell is complete and there is nothing to gain by reacting. The alkali metals are violently reactive because they have a single loose outer electron to shed. The halogens are reactive because they are one short. The table's shape — two columns, then a block of ten, then a block of fourteen set below — is a direct readout of orbital capacities: 2, 6, 10 and 14 electrons.</p>
<p>The periodic table is a chart of quantum mechanics compiled sixty years before quantum mechanics.</p>

<h2 id="Seeing_them">Seeing them</h2>
<p>Atoms are smaller than the wavelength of visible light, so no optical microscope can resolve one, however good.</p>
<p>The scanning tunnelling microscope, invented in 1981, works differently. A conducting tip is brought within a nanometre of a surface, and although classical physics forbids current across the gap, quantum tunnelling allows electrons through — at a rate exquisitely sensitive to the distance. Scan the tip across the surface while adjusting height to hold the current constant, and the record of those adjustments is a map of the surface at atomic resolution.</p>
<p>The images are not photographs; they are plots of electron density. But individual atoms are visible in them, and can be pushed around deliberately — IBM famously arranged 35 xenon atoms to spell the company name in 1989, which was a demonstration of control rather than of typography.</p>
`,
};
