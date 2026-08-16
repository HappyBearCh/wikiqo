import type { RewrittenArticle } from "./types";

export const exoplanets: RewrittenArticle = {
  slug: "exoplanets",
  title: "Exoplanets: five thousand worlds, and almost none of them expected",
  sourceTitle: "Exoplanet",
  dek: "We had one solar system to theorise from, built a model of how planets form, and the first discoveries broke it immediately.",
  standfirst:
    "Until 1995 there were no confirmed planets around other stars, and the theory of planet formation had exactly one example to work from. It predicted systems like ours: small rocky worlds close in, gas giants far out, orbits neat and circular. The first planet found around a sun-like star was a Jupiter-mass body orbiting closer than Mercury, in four days. The model has been under repair ever since.",
  readingMinutes: 7,
  html: `
<h2 id="Why_it_took_so_long">Why it took so long</h2>
<p>Seeing a planet directly is close to impossible. It shines only by reflected light, and it sits beside a star billions of times brighter — the standard comparison is spotting a firefly next to a searchlight from a thousand kilometres away. Direct imaging works now for a handful of young, massive planets far from their stars, and it accounts for a tiny fraction of discoveries.</p>
<p>Everything else is indirect: infer the planet from what it does to the star.</p>
<p><strong>Radial velocity</strong> exploits the fact that a planet does not orbit its star so much as both orbit their common centre of mass. The star traces a small circle, moving alternately toward and away from us, and its spectrum shifts blue and red accordingly. The shifts are tiny — Jupiter moves the Sun at about 12 metres per second, Earth at about 9 centimetres per second — and detecting them required spectrographs of a precision that did not exist before the 1990s. This method finds massive planets close to their stars most easily, which shaped the early catalogue.</p>
<p><strong>Transits</strong> watch for the star dimming as a planet crosses in front. The dip is small — Jupiter across the Sun would block about one per cent, Earth about 0.008 per cent — and it only works for systems aligned edge-on to us, which is a small minority. Its advantage is that it scales: stare at a hundred thousand stars at once and the geometry works out for enough of them. The Kepler mission did exactly that, and is responsible for the bulk of known planets.</p>
<p>The two together are more than the sum: radial velocity gives mass, transits give radius, and mass and radius give density — which is the difference between knowing a planet exists and knowing whether it is rock, water or gas.</p>

<h2 id="The_first_ones_broke_the_theory">The first ones broke the theory</h2>
<p>Michel Mayor and Didier Queloz announced 51 Pegasi b in 1995: roughly half Jupiter's mass, orbiting a sun-like star every 4.2 days at a distance far inside Mercury's.</p>
<p>This was not supposed to be possible. Gas giants form far from their star, beyond the frost line where volatiles can condense into solid ice and build a core large enough to capture gas. Close in, it is too hot and there is not enough material. Yet there it was, and dozens more hot Jupiters followed.</p>
<p>The explanation is migration: planets do not stay where they form. Interaction with the remaining disc of gas and dust can drain a young planet's orbital energy and spiral it inward, sometimes enormously far. This was not a minor patch. It meant that a solar system's present arrangement is not a record of where its planets were built, and it forced a reassessment of our own — the leading account of the outer solar system now has Jupiter and Saturn migrating inward and back out again, rearranging the asteroid belt and possibly delivering water to Earth.</p>
<p>An earlier discovery deserves mention: the first confirmed exoplanets, found in 1992, orbit a pulsar — the remnant of a supernova. Planets around a stellar corpse, detected by timing variations in the pulsar's radio beats, and probably formed after the explosion. Nobody predicted that either.</p>

<h2 id="What_the_catalogue_looks_like">What the catalogue looks like</h2>
<p>With several thousand confirmed planets, the statistics have become meaningful, and the headline finding is that our solar system is not typical.</p>
<p>The most common type of planet in the galaxy appears to be something we do not have: bodies between Earth and Neptune in size, called super-Earths or sub-Neptunes. They are abundant, and the gap in our own system between Earth and the ice giants is the unusual feature.</p>
<p>There is also a genuine gap in the exoplanet size distribution — a scarcity of planets around 1.5 to 2 Earth radii, known as the radius valley. The likely cause is atmospheric loss: planets near their star are stripped of hydrogen envelopes by stellar radiation, leaving either a bare rocky core below the gap or a body that retained enough atmosphere to sit above it.</p>
<p>Multi-planet systems packed tightly are common. TRAPPIST-1, a small cool star, has seven roughly Earth-sized planets all orbiting closer than Mercury does the Sun, several within the range where liquid water is possible. Planets around such red dwarfs are the most numerous class in the galaxy, simply because red dwarfs are the most numerous stars.</p>

<h2 id="Habitable_is_doing_a_lot_of_work">Habitable is doing a lot of work</h2>
<p>The habitable zone is defined narrowly and reported loosely. It is the range of orbital distances where liquid water could exist on a planet's surface given a plausible atmosphere. That is all it is.</p>
<p>It says nothing about whether the planet has water, an atmosphere, a magnetic field, plate tectonics, or a surface at all. Venus sits at the inner edge of the Sun's habitable zone and has a surface hot enough to melt lead.</p>
<p>Red dwarf systems illustrate the difficulty. Their habitable zones are close in, where planets are likely tidally locked with one face permanently lit — survivable in principle if an atmosphere redistributes heat, and unknown in practice. Red dwarfs are also prone to violent flares that could strip an atmosphere entirely. Whether the most common planets around the most common stars can hold onto air is arguably the central open question in the field.</p>

<h2 id="Reading_an_atmosphere">Reading an atmosphere</h2>
<p>The current frontier is transmission spectroscopy, and the technique is remarkable. When a planet transits, a small fraction of the starlight passes through the sliver of its atmosphere at the limb. Gases there absorb at characteristic wavelengths, so subtracting the star's spectrum during transit from its spectrum outside transit leaves a fingerprint of the atmosphere's composition.</p>
<p>The signal is exceedingly faint, and the James Webb telescope was designed partly for this work. It has detected water, carbon dioxide, methane and sulphur dioxide in various atmospheres, and has found several small rocky planets that appear to have no significant atmosphere at all — a null result that matters enormously for the red dwarf question.</p>
<p>The longer aim is biosignatures: combinations of gases that chemistry alone should not sustain. Oxygen and methane together, for instance, react with each other, so their simultaneous presence implies something continuously replenishing both. The difficulty is that abiotic processes can mimic several proposed signatures, so any detection will be an argument about probability rather than a discovery — and the honest expectation is that the first plausible claim will be disputed for years.</p>
`,
};
