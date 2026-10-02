import type { RewrittenArticle } from "./types";

export const earthsCircumference: RewrittenArticle = {
  slug: "earths-circumference",
  title: "Measuring the Earth: a shadow, a well and a camel caravan's estimate",
  sourceTitle: "Earth's circumference",
  dek: "Around 240 BC, Eratosthenes measured the planet from a shadow in Alexandria. Columbus later sailed on a smaller, wrong estimate — and the scholars who doubted him were right.",
  standfirst:
    "People did not need to wait for explorers or satellites to know the size of the Earth. A Greek scholar in Egypt worked it out more than two thousand years ago from the angle of a shadow and the distance between two cities, and his method was sound even if the precise accuracy of his answer is still debated. The later history of measuring the Earth includes a famous mistake by Columbus, a myth about medieval ignorance, and the discovery that the planet is not quite round.",
  readingMinutes: 7,
  published: "2026-10-02",
  html: `
<h2 id="Eratosthenes">A shadow in Alexandria</h2>
<p>Eratosthenes of Cyrene was the chief librarian at Alexandria in the third century BC, a mathematician, geographer and poet. His measurement of the Earth survives only in a later summary by the astronomer Cleomedes, but the reasoning is clear.</p>
<p>At Syene, modern Aswan, in southern Egypt, the Sun was said to be directly overhead at noon on the summer solstice, lighting the bottom of a deep well and casting no shadow from a vertical post. At Alexandria, to the north, the Sun at the same moment was not overhead; a vertical rod cast a shadow, and Eratosthenes measured the angle of the Sun from the vertical as one-fiftieth of a full circle, a little over seven degrees.</p>
<p>Assuming the Sun is so distant that its rays arrive parallel, that angle equals the angle between the two cities measured at the centre of the Earth. So the distance between Alexandria and Syene must be one-fiftieth of the Earth's circumference. Taking that distance as 5,000 stadia, a figure probably based on surveys or the travel times of caravans, he obtained a circumference of 250,000 stadia, later adjusted to 252,000.</p>

<h2 id="How_accurate">How close was he?</h2>
<p>The method is sound. How accurate the result was depends on the length of the stadion he used, which is uncertain: ancient units of that name varied considerably. Depending on which value is assumed, his result is within a couple of per cent of the true circumference of about forty thousand kilometres, or off by more than fifteen per cent.</p>
<p>His assumptions were also not quite right. Syene is not exactly on the Tropic of Cancer, nor exactly due south of Alexandria, and the distance between them was not precisely known. Some of these errors may have cancelled each other. What is not in doubt is that he showed how the size of the whole Earth could be calculated from measurements made on a small part of it, and got an answer of the right size.</p>
<p>Later scholars repeated the attempt. The ninth-century Abbasid caliph al-Ma'mun sponsored astronomers who measured the length of one degree of latitude on a plain in Mesopotamia. In the eleventh century, the scholar al-Biruni devised a method using the angle of the horizon seen from a mountain of known height.</p>

<h2 id="Columbus">Columbus and the smaller Earth</h2>
<p>A persistent myth holds that people in the Middle Ages believed the Earth was flat and that Columbus proved it round. Educated Europeans had known the Earth was a sphere since antiquity, and the myth largely took shape in the nineteenth century, helped by Washington Irving's romanticised biography of Columbus in 1828.</p>
<p>The real dispute about Columbus's voyage was over size. Ptolemy's influential geography had used a smaller figure for the Earth than Eratosthenes, and Columbus, seeking support for a westward route to Asia, adopted the smallest estimates available and combined them with exaggerated ideas of how far Asia extended eastward. His calculation put Japan within a few thousand kilometres of Spain.</p>
<p>The scholars who advised the Spanish and Portuguese crowns against him objected that the ocean was far too wide to cross with the supplies a ship could carry. They were right. Columbus survived only because the Americas, unknown to everyone involved, lay in the way.</p>

<h2 id="Not_round">Not quite a sphere</h2>
<p>In 1615 the Dutch mathematician Willebrord Snellius pioneered the method of triangulation, measuring a long distance by a chain of triangles whose angles could be measured precisely, and the method became the basis of geodesy, the science of measuring the Earth.</p>
<p>Isaac Newton predicted that the Earth's rotation should make it bulge at the equator and flatten at the poles. French measurements in the early eighteenth century seemed to suggest the opposite. To settle the question, the French Academy of Sciences sent expeditions in the 1730s to Lapland, near the Arctic Circle, and to the Andes, near the equator, to measure the length of a degree of latitude in each. The Lapland expedition, led by Pierre Louis Maupertuis, found that a degree was longer near the pole, confirming Newton: the Earth is an oblate spheroid.</p>
<p>The flattening is small — the equatorial radius is about twenty-one kilometres greater than the polar radius, a difference of about one part in three hundred — but it matters for accurate maps and navigation.</p>

<h2 id="Today">Forty thousand kilometres, by design</h2>
<p>The circumference measured around the poles is very close to forty thousand kilometres, and the round number is not a coincidence. When the metre was defined in the 1790s, it was intended as one ten-millionth of the distance from the North Pole to the equator, so a full circuit through the poles was meant to be forty million metres. The survey that fixed the metre was slightly off, so the true figure is a little over forty thousand kilometres. Around the equator, the circumference is about sixty-seven kilometres more, because of the bulge.</p>
<p>The shape of the Earth is now measured by satellites, which track their own orbits with extreme precision and map the planet's gravity field, revealing an irregular surface called the geoid — the shape the oceans would take under gravity and rotation alone, which differs from a perfect ellipsoid by up to about a hundred metres. Satellite navigation systems depend on a model of the Earth's shape built on these measurements, which are, in a direct line of descent, refinements of what Eratosthenes did with a shadow.</p>
`,
};
