import type { RewrittenArticle } from "./types";

export const theMoon: RewrittenArticle = {
  slug: "the-moon",
  title: "The Moon: the wreckage of a collision, and the reason you have seasons",
  sourceTitle: "Moon",
  dek: "Absurdly large for a planet our size, made of the wrong material, and slowly leaving.",
  standfirst:
    "Every other rocky planet has either no moon or captured asteroids a few kilometres across. Ours is a quarter of Earth's diameter, which by planetary standards is not a satellite but a companion. Explaining how it got there took until the 1980s, and the answer is that something the size of Mars hit us.",
  readingMinutes: 7,
  html: `
<h2 id="The_composition_problem">The composition problem</h2>
<p>Before Apollo there were three competing theories, and the returned samples killed all of them.</p>
<p>The capture hypothesis held that the Moon formed elsewhere and was gravitationally captured. Capture is dynamically difficult — you need to shed a great deal of energy in the encounter — and it predicts a body chemically unrelated to Earth. The fission hypothesis held that a rapidly spinning early Earth threw off a blob. The co-accretion hypothesis held that both formed together from the same material.</p>
<p>The lunar samples showed something none of them predicted cleanly. The Moon's oxygen isotope ratios are essentially identical to Earth's — a fingerprint that varies between bodies formed in different parts of the solar system, and which rules out an unrelated origin. Yet the Moon has almost no iron core, where Earth has a large one, and is markedly depleted in volatile elements: no water in the original rocks, little of anything that boils easily.</p>
<p>So: made of Earth-like material, but only the outer, rocky, roasted part of it. That is a very specific constraint.</p>

<h2 id="The_giant_impact">The giant impact</h2>
<p>The explanation that fits is a collision, around 4.5 billion years ago, between the young Earth and a body roughly the size of Mars — conventionally named Theia. The impactor's iron core merged with Earth's, which is why Earth's core is oversized and the Moon has almost none. Mantle material from both bodies was flung into orbit, vaporised and partially boiled off, which accounts for the missing volatiles. What remained coalesced, quickly, into the Moon.</p>
<p>The model explains the composition, the angular momentum of the Earth–Moon system, and Earth's axial tilt in one stroke. It also has a well-known difficulty: the isotopic match is <em>too</em> good. Simulations generally put most of the Moon's material from the impactor rather than from Earth, and two independently formed bodies should differ isotopically. Proposed fixes involve a more violent, more thoroughly mixing impact, or an impactor that formed at a similar distance from the Sun. The broad picture is accepted; the details are still being worked.</p>

<h2 id="Why_you_only_see_one_side">Why you only see one side</h2>
<p>The Moon rotates on its axis in exactly the time it takes to orbit Earth, so it keeps one face turned toward us. This is not a coincidence but the endpoint of a process.</p>
<p>Earth's gravity raises a bulge in the Moon's solid body. If the Moon rotated faster than it orbited, that bulge would be dragged ahead of the Earth–Moon line, and Earth's pull on it would act as a brake. The rotation slows until the bulge stays aligned and the torque vanishes. Tidal locking is the generic fate of close-orbiting bodies, and most large moons in the solar system are locked to their planets.</p>
<p>The far side is not dark — it receives as much sunlight as the near side, on the same monthly cycle. It is simply hidden, and nobody saw it until a Soviet probe returned images in 1959. It turned out to look strikingly different: heavily cratered, with almost none of the dark volcanic plains that dominate the near side. The likely reason is a thicker crust on the far side, which magma could not penetrate.</p>

<h2 id="Tides,_and_a_slowing_planet">Tides, and a slowing planet</h2>
<p>The Moon raises tides in Earth's oceans, and the process runs both ways.</p>
<p>Earth rotates faster than the Moon orbits, so friction drags the tidal bulge slightly ahead of the Earth–Moon line. The bulge's gravity tugs the Moon forward in its orbit, which raises it — the Moon is receding at about 3.8 centimetres a year, a figure measured directly by bouncing lasers off reflectors the Apollo missions left on the surface. The same interaction brakes Earth's rotation, lengthening the day by roughly two milliseconds per century.</p>
<p>This has consequences over deep time. When the Moon formed it was perhaps ten times closer and appeared enormous; the tides were correspondingly violent. Fossil growth bands in ancient corals and layered sediments record the number of days per year in the distant past, and they confirm the slowdown — around 400 million years ago the year held roughly 400 shorter days.</p>
<p>The Sun contributes tides too, at about half the Moon's strength. When the two align at new and full Moon the tides are largest; when they oppose at the quarters they are smallest.</p>

<h2 id="The_stabiliser">The stabiliser</h2>
<p>Earth's axial tilt of about 23.4 degrees is what produces seasons, and its stability is what makes those seasons consistent.</p>
<p>A planet's tilt is perturbed by the gravity of other planets, and can wander chaotically over millions of years. Mars, with only two tiny moons, has swung between roughly 10 and 60 degrees — which would mean climate shifts on a scale that makes long-term habitability precarious. Earth's large moon exerts a steadying torque that has held the tilt within about a degree of its current value.</p>
<p>How essential this is for life is honestly uncertain and often overstated. It is one of the standard arguments that large moons might matter for habitability, and it rests on modelling rather than observation.</p>

<h2 id="Going_there">Going there</h2>
<p>Apollo delivered twelve people to the surface between 1969 and 1972 and returned 382 kilograms of rock, which remains the foundation of nearly everything we know about lunar geology. The programme consumed a substantial share of the American federal budget at its peak and was, in its own framing, an instrument of the Cold War rather than of science — which does not diminish the science it produced.</p>
<p>The most consequential recent finding is water. Permanently shadowed craters at the poles, whose floors have not seen sunlight in billions of years, are cold enough to trap ice, and orbital measurements plus a deliberate impact experiment have confirmed it is there in quantity. Water is the resource that changes the economics of everything else: drinkable, breathable when split, and the constituents of rocket propellant. A base that need not lift its water out of Earth's gravity well is a different proposition from one that must.</p>
<p>Which is why the current programmes target the south pole specifically, and why the Moon has become interesting again after fifty years of being a place we had already been.</p>
`,
};
