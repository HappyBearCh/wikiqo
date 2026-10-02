import type { RewrittenArticle } from "./types";

export const thermometer: RewrittenArticle = {
  slug: "thermometer",
  title: "The thermometer: how to measure something before you know what it is",
  sourceTitle: "Thermometer",
  dek: "Early thermometers disagreed with each other, and there was no way to tell which was right without already knowing the temperature. Building one that could be trusted took two centuries.",
  standfirst:
    "A thermometer seems the simplest of instruments: a liquid expands when warm, and a scale reads off how much. The difficulty, which took most of the seventeenth and eighteenth centuries to work through, is circular. To check that a thermometer reads correctly, you need to know the true temperature, which is what the thermometer is supposed to tell you. The story of how that circle was broken is a small history of how measurement itself became reliable.",
  readingMinutes: 7,
  published: "2026-10-02",
  html: `
<h2 id="Thermoscope">An instrument without a scale</h2>
<p>Around the end of the sixteenth century, Galileo and others built thermoscopes: a glass bulb with a long tube dipping into water. When the air in the bulb warmed, it expanded and pushed the water down; when it cooled, the water rose. The device showed that something was getting hotter or colder, but it had no scale and was open to the air, so changes in atmospheric pressure moved the water as well. It was, without anyone realising at first, partly a barometer.</p>
<p>The Venetian physician Santorio Santorio added a scale and used such instruments to measure patients' temperatures in the early seventeenth century. In the 1650s instrument makers associated with the Medici court in Florence sealed liquid, usually alcohol, inside glass tubes, removing the effect of air pressure and producing the first true thermometers. They were beautiful and fairly consistent with each other, but each maker's scale was his own.</p>

<h2 id="Scales">Fixed points and competing scales</h2>
<p>A scale needs reference points: temperatures that can be reproduced anywhere. Over the following century, dozens of scales were proposed, using reference points such as the melting of snow, the heat of a summer day, the temperature of the human body or of a cellar, and the boiling of water.</p>
<p>Daniel Gabriel Fahrenheit, an instrument maker working in Amsterdam, made reliable mercury thermometers in the early eighteenth century. His scale, published in 1724, set zero at the temperature of a mixture of ice, water and salt — the coldest he could reliably produce — and placed the freezing point of water at thirty-two and the temperature of the human body at around ninety-six. The boiling point of water later came to sit at 212.</p>
<p>In 1742 the Swedish astronomer Anders Celsius proposed a scale with a hundred degrees between the freezing and boiling points of water. Celsius set boiling at zero and freezing at a hundred; the scale was inverted, probably by others at Uppsala, shortly after his death. It became the scale used across most of the world.</p>
<p>The fixed points themselves turned out to be problematic. The boiling point of water depends on atmospheric pressure and, in practice, on the vessel and how the water is heated. Making such points reproducible required specifying conditions in detail.</p>

<h2 id="Circle">Which liquid tells the truth?</h2>
<p>Even with agreed fixed points, a deeper problem remained. A thermometer reads temperatures between the fixed points by assuming that its liquid expands uniformly with temperature, so that halfway up the tube means halfway in temperature. But mercury and alcohol thermometers calibrated to agree at freezing and boiling disagreed between them, because the two liquids do not expand in exactly the same way. Which one was right?</p>
<p>There was no way to check by comparing either with the true temperature, because measuring the true temperature required a correct thermometer. The philosopher of science Hasok Chang, in his book <em>Inventing Temperature</em>, uses this as a case study of the problem of building measurement from scratch.</p>
<p>The way out came in stages. In the nineteenth century the French physicist Henri Victor Regnault compared many thermometers and argued that the best was the one that gave the most consistent readings under all conditions; air thermometers, which measure the expansion of a gas, proved most consistent. Then thermodynamics provided an independent foundation. In 1848 William Thomson, later Lord Kelvin, proposed an absolute temperature scale defined by the efficiency of an ideal heat engine, not by the properties of any substance. Gas thermometers turned out to approximate it closely, which explained why they behaved so consistently.</p>

<h2 id="Fever">Normal body temperature</h2>
<p>In the 1860s the German physician Carl Wunderlich published a study based on a very large number of temperature readings from patients, establishing the clinical thermometer as a diagnostic tool and fixing 37 °C, or 98.6 °F, as normal body temperature. Fever became a measurement rather than an impression.</p>
<p>The figure has not held up exactly. Studies in recent years have found average body temperatures in modern populations somewhat below 37 °C, and an analysis of American records published in 2020 argued that average temperature has declined since the nineteenth century, possibly reflecting reductions in chronic infection and inflammation. Normal temperature also varies between individuals, by time of day and by where in the body it is measured, so a single number was always an approximation.</p>

<h2 id="Modern">Mercury out, constants in</h2>
<p>Mercury thermometers, standard for two centuries, have been largely phased out because of the toxicity of mercury. An international treaty, the Minamata Convention on Mercury, provided for ending the manufacture of most mercury thermometers by 2020. Digital thermometers using electrical resistance or thermocouples, and infrared thermometers reading the radiation from a surface, have replaced them.</p>
<p>The definition of temperature has moved, like other units, to fundamental constants. Until 2019 the kelvin was defined by the triple point of water, the unique temperature and pressure at which ice, liquid water and water vapour coexist. Since 2019 it has been defined by fixing the value of the Boltzmann constant, which links temperature to the average energy of particles. Temperature is, in the end, a measure of molecular motion — which is what those early thermoscope makers, watching water rise and fall in a tube, could not have known they were measuring.</p>
`,
};
