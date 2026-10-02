import type { RewrittenArticle } from "./types";

export const cavendishExperiment: RewrittenArticle = {
  slug: "cavendish-experiment",
  title: "Weighing the Earth: the experiment that measured gravity between two balls",
  sourceTitle: "Cavendish experiment",
  dek: "In 1798 a reclusive aristocrat measured the pull between lead spheres in a shed, watching through a telescope from outside so his body heat would not disturb it. The result revealed the density of the planet.",
  standfirst:
    "Newton's law of gravitation describes how every mass attracts every other, but it contains a constant, G, that sets the strength of the pull, and Newton had no way to measure it. Gravity between objects of human scale is so weak that it is swamped by every other influence. A century later, Henry Cavendish measured it with a delicate apparatus in a sealed room, and in doing so determined the density, and hence the mass, of the Earth. His result was within about one per cent of the modern value — and G remains the least precisely known of the fundamental constants.",
  readingMinutes: 7,
  published: "2026-10-02",
  html: `
<h2 id="Problem">Why gravity is hard to measure</h2>
<p>The gravitational attraction between two people standing a metre apart is less than a ten-thousandth of the weight of a paper clip. Gravity dominates the motion of planets only because planets are so massive. To measure the attraction between objects small enough to handle, an experiment must detect forces far smaller than those produced by air currents, vibrations, magnetism, static electricity or the temperature difference between one side of an instrument and the other.</p>
<p>Knowing the strength of gravity matters because Newton's law relates the force between bodies to their masses and the gravitational constant. If G is known, the mass of the Earth can be calculated from the acceleration of falling objects at its surface, and from that, the masses of the Sun and planets from their orbits. Without G, astronomers knew only ratios of masses.</p>

<h2 id="Schiehallion">The mountain that moved a plumb line</h2>
<p>The first serious attempt used a mountain. In 1774 the Astronomer Royal, Nevil Maskelyne, measured how much the Scottish mountain Schiehallion, chosen for its regular shape and isolation, pulled a plumb line aside from vertical. Comparing star positions on opposite sides of the mountain gave the tiny deflection.</p>
<p>Turning the deflection into the Earth's density required knowing the mass of the mountain, which meant estimating its volume and the density of its rocks. The mathematician Charles Hutton, who did the calculations, drew lines connecting points of equal height to make sense of the survey data, and is credited with inventing contour lines in the process. The result suggested the Earth's average density was around four and a half times that of water, much greater than surface rocks, implying a dense interior.</p>

<h2 id="Apparatus">A torsion balance in a shed</h2>
<p>Cavendish took a different approach, using an apparatus designed by the clergyman and natural philosopher John Michell, who died before he could use it. A wooden rod about six feet long, with a small lead sphere at each end, was suspended at its centre by a thin wire. Two much larger lead spheres, around a hundred and fifty kilograms each, could be swung into position close to the small ones, on opposite sides. Their gravitational pull would twist the rod slightly, and the wire's resistance to twisting would balance it.</p>
<p>The force required to twist the wire through a given angle could be found from how quickly the rod oscillated when disturbed, which Cavendish measured. Measuring the twist when the large spheres were moved into place then gave the gravitational force between the spheres.</p>
<p>Cavendish, a wealthy and famously shy man who rarely spoke to anyone, took extreme precautions. He placed the apparatus in a closed room and observed it from outside through telescopes, reading tiny scales lit by lamps, and moved the large spheres by mechanisms operated from outside, so that his own body heat would not create air currents. The rod's oscillations were slow, each taking several minutes, and he recorded them over hours.</p>

<h2 id="Result">The density of the Earth</h2>
<p>Cavendish published his results in 1798 under the title "Experiments to determine the Density of the Earth." He did not express his result as a value of G, which was not then the convention; he gave the Earth's mean density as 5.48 times that of water. An arithmetic slip in his paper, later noticed, meant his own data actually indicated 5.45. The modern value is about 5.51.</p>
<p>A value of G can be calculated from his data and is within about one per cent of today's. For an experiment in the 1790s, measuring a force comparable to the weight of a grain of sand, it was an extraordinary achievement. It also confirmed what Schiehallion had suggested: the Earth's average density is about twice that of rocks at the surface, so its interior must contain much denser material — consistent with what is now known to be an iron core.</p>
<p>The experiment became known as weighing the Earth, and the torsion balance remained the basic method for measuring G for more than a century. In the 1890s Charles Vernon Boys improved it using extremely fine fibres of quartz.</p>

<h2 id="G_today">The constant that won't settle</h2>
<p>Remarkably, G is still the least precisely known of the fundamental physical constants. Other constants are known to many decimal places; G is known to only about four or five significant figures.</p>
<p>The difficulty is not only that gravity is weak. Different experiments, using torsion balances, falling atoms or other methods, have produced values of G that disagree with each other by more than their stated uncertainties, suggesting unrecognised systematic errors in at least some of them. A pair of experiments published in 2018 by a team in China, using two different methods, achieved very small uncertainties but still did not resolve the spread between laboratories.</p>
<p>The problem is in principle the same one Cavendish faced: isolating an extremely small force from everything else that pushes and pulls. More than two centuries after he measured gravity between two balls of lead from outside a sealed room, the best laboratories in the world are still working to do it better.</p>
`,
};
