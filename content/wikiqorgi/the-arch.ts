import type { RewrittenArticle } from "./types";

export const theArch: RewrittenArticle = {
  slug: "the-arch",
  title: "The arch: stone cannot be pulled, so the shape does the work instead",
  sourceTitle: "Arch",
  dek: "A stone beam snaps because its underside is in tension. Curve the same stones into an arch and every one of them is being squeezed, which is what stone is good at.",
  standfirst:
    "Stone is enormously strong in compression and feeble in tension, often by a factor of ten or twenty. That single asymmetry dictates the entire history of masonry construction: a stone lintel can only span a few metres before its lower face pulls apart, and the arch exists because a curved arrangement of blocks converts a load that would bend a beam into a load that squeezes a line of stones. Everything else — the vault, the dome, the flying buttress — is a consequence of that substitution and of the sideways push it produces.",
  readingMinutes: 7,
  html: `
<h2 id="Tension">Why a stone beam fails</h2>
<p>Load a beam in the middle and it bends. Bending stretches the bottom face and compresses the top, and the two are unavoidable — they are what bending is.</p>
<p>For stone this is fatal, because tensile strength is a small fraction of compressive strength. A stone lintel therefore fails from below, in tension, long before anything is crushed, and the span at which this happens is short. Greek architecture is built around that limit: the columns of a temple stand close together because the architraves resting on them cannot reach further, and the resulting rhythm of closely spaced supports is a structural constraint that became an aesthetic.</p>
<p>The corbelled opening is the first workaround — successive courses stepped inward until they meet — and it is not an arch, because each stone still cantilevers and works in bending. It reaches only modest spans and appears independently across many cultures, including in the Mycenaean tombs and Maya architecture.</p>
<p>The true arch changes the geometry so bending largely disappears. Wedge-shaped blocks, or voussoirs, are arranged along a curve; the load at the top pushes down, each block presses on its neighbour, and the force travels around the curve as pure compression. No stone is being stretched, so the material is used at its strength rather than its weakness.</p>

<h2 id="Thrust">Where the force goes</h2>
<p>An arch does something a beam does not: it pushes outward at its feet.</p>
<p>A beam transmits a vertical load to vertical supports. An arch turns a vertical load into an inclined one, and the horizontal component of that force — the thrust — must be resisted, or the arch spreads and collapses. This is the arch's price, and it is the reason so much of masonry architecture is concerned with what is happening at the sides rather than the top.</p>
<p>The thrust is larger the shallower the arch. A semicircular arch pushes outward moderately; a flat, wide arch pushes enormously, which is why shallow arches need massive abutments and why segmental arches were used cautiously.</p>
<p>The available answers are few. Build thick walls, which is the Roman approach, using mass to redirect the resultant force safely down through the masonry. Butt one arch against another, so adjacent thrusts cancel — an arcade is self-balancing except at its ends, which is why the end bay of a Roman aqueduct is always heavier. Or catch the thrust with a separate structure and carry it down outside the building, which is the Gothic flying buttress.</p>
<p>The Gothic system is best understood as an economy of material. Rather than making the wall thick enough to contain the thrust everywhere, concentrate the structure into piers and buttresses at intervals and leave the space between them as glass. The pinnacles on top of the buttresses, usually read as decoration, add weight that steers the combined force back inside the masonry, which is a real structural function performed by an object that looks ornamental.</p>

<h2 id="Centring">Building something that does not work until finished</h2>
<p>An arch is stable only when complete. Until the final stone is placed the assembly is a row of blocks leaning on nothing, so every masonry arch requires temporary support — centring, a timber former on which the voussoirs are laid.</p>
<p>This is a substantial hidden cost. The timber falsework for a large vault could rival the permanent structure in expense, and it dictated the sequence of construction: a Roman aqueduct's arches were built in series with the centring dismantled and moved along, which is why bridge piers frequently carry projecting stones or slots — sockets that once held the falsework.</p>
<p>Removing the centring is the moment of truth, since the arch settles slightly and takes up its own load for the first time. Masons expected this settlement and allowed for it.</p>
<p>The keystone gets more credit than it deserves. It is placed last and it completes the ring, and it is not more important than the other voussoirs; an arch can be built with an even number of stones and a joint at the crown. The stones under greatest stress are generally not at the crown at all but at the haunches, partway down, where the thrust line runs closest to the edge of the masonry.</p>

<h2 id="Hanging_chain">The right shape, discovered upside down</h2>
<p>Which curve should an arch follow? The answer was found by inverting the problem.</p>
<p>A chain hung between two points takes a shape in which every link is in pure tension and there is no bending anywhere — the catenary. Robert Hooke stated in 1675, in the form of a Latin anagram he published to establish priority without revealing the result, that as hangs the flexible line, so but inverted will stand the rigid arch. Flip the chain's shape and you have a curve carrying the same loads in pure compression.</p>
<p>This is exact and enormously useful, because it means the ideal arch shape depends on the load it carries. A chain under its own weight gives a catenary; a chain loaded with a uniform horizontal distribution, as in a bridge deck, gives a parabola. Change the loading and the correct curve changes with it.</p>
<p>Antoni Gaudí built the technique into a design method, using hanging models of strings weighted with small bags of shot to find the form of the Colònia Güell chapel, and photographing the result upside down to obtain the elevation. The inclined columns that make his work look wilful are the output of a physical computation.</p>
<p>The reason real arches are not all catenaries is that a masonry arch does not need to follow the ideal line exactly. It needs the line of thrust to stay inside the masonry. Jacques Heyman's safe theorem formalises this: if any statically admissible thrust line can be drawn within the material, the structure is safe. That is a generous criterion, and it explains why so many geometrically arbitrary medieval arches have stood for eight hundred years, and why the ones that fail generally do so because the abutments moved rather than because the stone was overloaded.</p>

<h2 id="Afterwards">What replaced it, and what did not</h2>
<p>The arch's dominance ended when materials arrived that are strong in tension. Iron, then steel, then reinforced concrete removed the constraint the arch existed to circumvent, and beams and frames became viable at spans stone could never reach.</p>
<p>Reinforced concrete is worth stating precisely as an inversion of the original problem: concrete is a synthetic stone, strong in compression and weak in tension, and steel bars are placed exactly where the tension occurs — the bottom of a beam, the top over a support. The reinforcement drawings for any concrete structure are a map of where the material is being pulled.</p>
<p>Arches survive where compression remains the efficient answer. Long-span concrete bridges use arch forms because the shape still minimises material. Tunnels and underground openings are arched because surrounding ground exerts pressure from all directions and an arched profile turns it into compression. Dams across narrow gorges are arched in plan, transferring water pressure sideways into the rock walls.</p>
<p>And there is a quieter legacy in analysis. The insight that a structure is safe if a valid path for the forces can be found within it — rather than requiring a unique calculated answer — underlies strut-and-tie modelling in modern concrete design. The engineer draws a plausible internal skeleton of compression struts and tension ties, and provides material along it. That is Hooke's chain, generalised.</p>
`,
};
