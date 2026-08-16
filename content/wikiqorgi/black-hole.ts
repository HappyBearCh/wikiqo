import type { RewrittenArticle } from "./types";

export const blackHole: RewrittenArticle = {
  slug: "black-hole",
  title: "Black holes: the places where geometry gives up",
  sourceTitle: "Black hole",
  dek: "Not a hole and not made of anything — a black hole is a shape in spacetime that light cannot climb out of.",
  standfirst:
    "A black hole is usually introduced as an object so heavy that nothing escapes it. That is a serviceable half-truth. The better description is stranger and simpler: a black hole is not a thing sitting in space, it is a region where space and time have been bent so far that every road out has quietly turned into a road inward.",
  readingMinutes: 8,
  html: `
<h2 id="What_a_black_hole_actually_is">What a black hole actually is</h2>
<p>Start with the mistake almost everyone makes. A black hole is not a cosmic drain, and it is not a super-dense ball with an especially fierce grip. If the Sun were swapped for a black hole of exactly the same mass, Earth's orbit would not change by a metre. Gravity does not become greedier when matter collapses; it only becomes <em>closer</em>. What collapse buys you is proximity — the chance to stand near an enormous mass without a stellar surface in the way — and proximity is where general relativity stops resembling anything Newton would recognise.</p>
<p>In Einstein's account, mass and energy tell spacetime how to curve, and that curvature is what we experience as gravity. Pile enough mass into a small enough volume and the curvature runs away with itself. You reach a point where the geometry tilts so severely that the future of every path — light included — points inward. Not because escape is hard, but because "out" has stopped being a direction you can choose. That surface of no return is the <strong>event horizon</strong>, and it is the only part of a black hole that can honestly be said to exist as a place.</p>

<h2 id="The_horizon_is_a_boundary_not_a_barrier">The horizon is a boundary, not a barrier</h2>
<p>Nothing is there. Cross the horizon of a large black hole and you feel no wall, no jolt, no sign that anything has happened. There is no local experiment that reveals the crossing; the horizon is defined by where you can eventually get to, which is not a question any instrument in your hand can answer. It is a fact about the whole future of spacetime, expressed as a sphere.</p>
<p>Its size is embarrassingly easy to compute. The Schwarzschild radius scales in direct proportion to mass: about three kilometres for every solar mass. The Sun would need to be squeezed to the width of a mid-sized city. Earth would need to fit inside a marble. The black hole at the centre of our galaxy, four million solar masses, has a horizon that would sit comfortably inside Mercury's orbit — vast by human standards, unremarkable by galactic ones.</p>
<p>The famous consequence of all this curvature is that time near the horizon runs slow as seen from far away. Watch a friend fall in and you never see them arrive. Their image reddens, dims, and freezes, stretched across the last instants before crossing until it fades below detection. From their own point of view nothing of the kind occurs. They fall, they cross, and — in the idealised picture — they reach the centre in a finite and rather short time. Both accounts are correct. This is the moment where "what really happened" stops being a well-formed question.</p>

<h2 id="Three_numbers_and_nothing_else">Three numbers and nothing else</h2>
<p>A black hole formed from a collapsing star retains almost none of the star's biography. Classical relativity says the finished object is fully specified by mass, angular momentum, and electric charge — a result physicists summarised, with unusual flair, as the no-hair theorem. Real astrophysical black holes carry essentially no charge, which leaves two numbers. Two numbers to describe an object built from a lifetime of nuclear fusion, a particular chemistry, a particular history. Everything else is gone from the exterior description.</p>
<p>Spin turns out to matter enormously. A rotating black hole drags spacetime around with it, creating a zone outside the horizon — the ergosphere — where standing still is not an option, because the frame you would stand still in is itself being swept along. That dragging is not a curiosity. It is the machinery behind some of the most energetic phenomena in the universe.</p>

<h2 id="Why_the_darkest_objects_make_the_brightest_light">Why the darkest objects make the brightest light</h2>
<p>Black holes are invisible; the neighbourhoods around them are not. Gas spiralling inward cannot fall straight in — it carries angular momentum, so it flattens into an accretion disc and grinds against itself. Friction and magnetic turbulence heat the inner disc to millions of degrees, and it radiates ferociously in X-rays. Meanwhile, twisted magnetic fields anchored in the disc and in the spinning geometry itself can fling a fraction of the inflow back out as jets, collimated so tightly that they stay coherent across distances larger than a galaxy.</p>
<p>The efficiency is what should astonish you. Nuclear fusion converts roughly 0.7 per cent of rest mass into energy. Accretion onto a rapidly spinning black hole can convert tens of per cent. Quasars — the blazing cores of young galaxies — are simply this process at scale, outshining every star around them from a region the size of a solar system.</p>

<h2 id="How_we_know_they_are_real">How we know they are real</h2>
<p>For most of the twentieth century black holes were a mathematical embarrassment: a solution to Einstein's equations that nobody, Einstein included, expected nature to bother building. Three independent lines of evidence closed the argument.</p>
<ul>
<li><strong>Stellar orbits.</strong> Decades of patient tracking showed stars at the galactic centre whipping around something four million times the Sun's mass that emits almost nothing. No other object can be that heavy, that small, and that dark.</li>
<li><strong>Gravitational waves.</strong> Since 2015, detectors have recorded the ringing of spacetime as pairs of black holes spiral together and merge — signals whose shape matches relativity's predictions with almost impertinent precision, and which briefly radiate more power than all the stars in the observable universe combined.</li>
<li><strong>Direct imaging.</strong> A planet-wide network of radio telescopes has now resolved the shadow cast by the horizons of the black holes in M87 and at our own galactic centre: a dark disc ringed by light bent around it, exactly the silhouette the equations demanded.</li>
</ul>

<h2 id="The_unfinished_part">The unfinished part</h2>
<p>Two problems remain genuinely open, and both are signs that our theories are incomplete rather than merely unfinished.</p>
<p>The first is the singularity. Follow the equations inward and curvature grows without bound, which is physics' way of announcing that the equations no longer apply. Something must replace them at the centre, and that something will be a theory of quantum gravity we do not yet have.</p>
<p>The second is more subtle. Stephen Hawking showed that horizons are not perfectly black: quantum effects make them glow faintly, and over immense timescales a black hole evaporates entirely. But the radiation appears to depend only on mass, spin, and charge — carrying none of the detail of whatever fell in. If that is right, information is destroyed, which quantum mechanics forbids. Decades of work have narrowed the possibilities without settling them. The information paradox is the sharpest point of contact between our two best theories, and it is still cutting.</p>

<h2 id="Why_they_matter">Why they matter</h2>
<p>Black holes are not an exotic sideshow. Supermassive ones sit at the centre of nearly every large galaxy, and the energy they pump outward regulates how much gas cools, how many stars form, and how big galaxies grow — a feedback loop between an object smaller than a solar system and a structure a hundred thousand light-years across. They are also the cleanest laboratories physics has: objects with no chemistry, no surface, and almost no properties, where the only thing left to test is the shape of spacetime itself.</p>
`,
};
