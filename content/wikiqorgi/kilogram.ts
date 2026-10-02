import type { RewrittenArticle } from "./types";

export const kilogram: RewrittenArticle = {
  slug: "kilogram",
  title: "The kilogram: the last unit defined by an object in a vault",
  sourceTitle: "Kilogram",
  dek: "For 130 years, a kilogram was the mass of one metal cylinder near Paris, by definition. Its copies drifted, nobody could say whether it was the original or the copies that had changed, and in 2019 it was retired.",
  standfirst:
    "Every measurement of mass on Earth, from a laboratory balance to a bag of flour, was traceable to a single cylinder of platinum-iridium kept under three glass bell jars in a vault outside Paris. Whatever its mass was, that was a kilogram, by definition. That arrangement worked well enough for commerce but became an embarrassment for science, and replacing it required measuring a fundamental constant of quantum physics more precisely than had ever been done.",
  readingMinutes: 7,
  published: "2026-10-02",
  html: `
<h2 id="Water">From a litre of water to a metal cylinder</h2>
<p>When the metric system was created in the 1790s, the unit of mass was defined in terms of water: a gram was the mass of a cubic centimetre of water at the temperature of melting ice, and a kilogram therefore the mass of a litre. Water seemed a natural, universal standard.</p>
<p>In practice, it was hard to realise with precision. Water's density depends on temperature, pressure and purity, and measuring a volume accurately is difficult. So in 1799 a platinum cylinder made to match the water definition as closely as possible, the Kilogram of the Archives, became the standard instead. Later, the water definition was effectively abandoned.</p>
<p>In 1889, following the Metre Convention of 1875, a new standard was adopted: the International Prototype of the Kilogram, a cylinder of platinum and iridium about thirty-nine millimetres high and the same in diameter, kept at the International Bureau of Weights and Measures at Sèvres. It became known affectionately as Le Grand K. Copies were distributed to the countries that had signed the convention, to serve as their national standards.</p>

<h2 id="Drift">The cylinder that drifted, or didn't</h2>
<p>Le Grand K was removed from its vault only rarely, to be compared with its official copies. Over the twentieth century these comparisons revealed a problem. The copies, which had been made at the same time from the same alloy and agreed closely in 1889, had diverged from the prototype by tens of micrograms over a century — roughly the mass of a fingerprint or a grain of fine sand.</p>
<p>The difficulty was that nobody could say which had changed. The copies might have gained mass from absorbed contaminants or lost it through cleaning; the prototype itself might have changed. By definition, however, the prototype could not change: whatever its mass was, it was a kilogram. If it had lost atoms, then everything else in the world had, in effect, become slightly heavier.</p>
<p>That was intolerable for a system that was supposed to be universal and permanent. Other units also depend on the kilogram — the definitions of the ampere, the mole and the candela all involved it — so an unstable kilogram propagated uncertainty through the system.</p>

<h2 id="Constants">Defining mass by a constant of nature</h2>
<p>Other units had already been freed from physical objects. The metre had been redefined in 1983 by fixing the speed of light. The idea for the kilogram was similar: fix the value of a fundamental constant and define the kilogram through it.</p>
<p>The constant chosen was the Planck constant, which relates the energy of a photon to its frequency and appears throughout quantum physics. Its units include the kilogram, so fixing its numerical value defines the kilogram in terms of the metre and the second, which were already defined by constants. But to make the new definition agree with the old kilogram, the Planck constant first had to be measured, in terms of the old kilogram, more precisely than ever before — to a few parts in a hundred million.</p>

<h2 id="Measuring">Two ways to weigh the Planck constant</h2>
<p>Two very different experiments did it.</p>
<p>The first, the Kibble balance, was conceived by Bryan Kibble at the UK's National Physical Laboratory in 1975. It balances the weight of a test mass against the electromagnetic force on a coil carrying current in a magnetic field, and in a second step moves the coil through the field to calibrate the magnet. Combining the two, and measuring the electrical quantities using quantum effects whose values depend on the Planck constant, relates a mass directly to that constant.</p>
<p>The second, the Avogadro project, counted atoms. Researchers made spheres of extraordinarily pure silicon, enriched in the isotope silicon-28, polished them into some of the roundest objects ever made, and measured their dimensions and crystal spacing so precisely that the number of atoms in each sphere could be calculated. Knowing the number of atoms and the mass of each gives a link between a macroscopic mass and atomic quantities, and through them to the Planck constant.</p>
<p>The two approaches had disagreed earlier in the 2010s, which delayed the redefinition. By 2017 the measurements had converged closely enough.</p>

<h2 id="2019">The vote, and what changed</h2>
<p>On 16 November 2018, delegates to the General Conference on Weights and Measures at Versailles voted unanimously to redefine the kilogram, along with the ampere, the kelvin and the mole, in terms of fixed values of fundamental constants. The Planck constant was fixed at exactly 6.62607015 × 10<sup>−34</sup> joule-seconds. The new definitions took effect on 20 May 2019.</p>
<p>Nothing measurable changed for ordinary purposes: the new definition was chosen so that the kilogram stayed the same to within the best available measurement. What changed was its foundation. A kilogram is no longer defined by an object that can be damaged, contaminated or lost, and it can in principle be realised anywhere with the right apparatus.</p>
<p>Le Grand K still exists in its vault under three bell jars. It is now simply an extremely well-characterised piece of metal whose mass, like any other, has to be measured — and has an uncertainty.</p>
`,
};
