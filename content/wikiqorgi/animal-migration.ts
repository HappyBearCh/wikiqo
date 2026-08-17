import type { RewrittenArticle } from "./types";

export const animalMigration: RewrittenArticle = {
  slug: "animal-migration",
  title: "Animal migration: navigating by a magnetic sense we still cannot locate",
  sourceTitle: "Animal migration",
  dek: "A bird raised in a cage, that has never migrated and has no one to follow, will try to fly the right way at the right time of year.",
  standfirst:
    "Migration is not simply travelling. It is a heritable programme — direction, timing, distance and fuelling all encoded well enough that a naive juvenile can reach a wintering ground it has never seen, alone. The navigational toolkit includes a magnetic sense whose receptor has still not been definitively identified in any vertebrate, which makes this one of the largest unresolved questions in sensory biology.",
  readingMinutes: 8,
  html: `
<h2 id="Programmed">The programme is inherited</h2>
<p>The decisive evidence comes from birds raised in isolation. A captive songbird with no view of the sky, no experienced adults to follow, and no migratory experience of its own becomes restless at exactly the season its wild relatives depart — a behaviour German ornithologists named <em>Zugunruhe</em>, migratory restlessness.</p>
<p>Put such a bird in a funnel-shaped cage with a recording surface, and it hops preferentially in the direction it should be flying. The restlessness lasts roughly as long as the real journey would take, then stops. Direction, timing and duration are all inherited.</p>
<p>Crossbreeding experiments settled it further. Blackcaps from populations with different migratory directions, bred together, produce offspring that orient in an intermediate direction — which is what you would expect of a genetically encoded heading and not of a learned one.</p>
<p>The clearest natural demonstration is a recent one. Blackcaps from central Europe traditionally wintered in Iberia and North Africa. From the mid-twentieth century, a portion began wintering in Britain instead, drawn by garden bird feeding — a roughly north-westerly rather than south-westerly heading. The new route is heritable, the two groups now return to the breeding grounds at different times, and they are beginning to breed assortatively. A migratory route changed within decades and started splitting a species.</p>

<h2 id="Compasses">Three compasses, used together</h2>
<p>Migrants do not rely on a single cue. They carry several compasses and calibrate them against each other, which is why disabling any one in an experiment rarely stops them.</p>
<p>The <strong>sun compass</strong> requires knowing the time of day, since the sun's bearing changes through it. Birds and insects compensate using an internal clock — shift a bird's light cycle by six hours and it departs at a predictably wrong angle, which is the classic demonstration that a clock is involved. Many also read the polarisation pattern of skylight, which reveals the sun's position through cloud.</p>
<p>The <strong>star compass</strong> was worked out in planetariums. Stephen Emlen raised indigo buntings under artificial skies and found they learn the centre of celestial rotation — the point the stars turn around, which is north — rather than memorising specific constellations. Birds raised under a sky rotating about Betelgeuse treated Betelgeuse as north. They learn the rule, not the map, which makes the system robust to the slow precession of the actual pole star over millennia.</p>
<p>The <strong>magnetic compass</strong> works in total darkness and is the most interesting of the three.</p>

<h2 id="Magnetic">The sense nobody can find</h2>
<p>Birds' magnetic compass does not work like a hand compass. It is an inclination compass: it reads the angle the field lines make with the surface of the Earth rather than which way is north, so it distinguishes poleward from equatorward and is indifferent to magnetic polarity. Reverse the field's polarity in an experiment and the bird is unaffected; tilt the inclination and it reorients.</p>
<p>Two mechanisms are proposed and both may operate.</p>
<p><strong>Magnetite</strong> — crystals of iron oxide — has been found in the tissues of several species, and a physical particle aligning with the field could in principle be detected by attached nerve endings. Attempts to trace a nerve pathway from candidate magnetite deposits have repeatedly failed to replicate, and one prominent claimed receptor in pigeon beaks turned out on re-examination to be iron-rich immune cells.</p>
<p>The <strong>radical pair</strong> mechanism is stranger and currently better supported for the light-dependent compass. Cryptochrome proteins in the retina absorb blue light and form pairs of molecules with unpaired electrons whose spin states are sensitive to the magnetic field. The field alters the chemistry of the reaction, which alters a signal the bird can perceive — meaning the bird may effectively see the field as a pattern overlaid on vision.</p>
<p>Supporting evidence is indirect but consistent: the compass requires light of certain wavelengths, is disrupted by weak radiofrequency fields at the frequencies predicted to interfere with spin dynamics, and cryptochrome from migratory birds has been shown to be magnetically sensitive in vitro.</p>
<p>What has not been done is identifying the receptor cells, tracing them to the brain, and knocking them out to abolish the behaviour. Until that is done, the mechanism remains a strong hypothesis rather than a settled finding.</p>

<h2 id="Maps">A compass is not a map</h2>
<p>Knowing which way is north tells you a heading, not where you are. An experienced migrant blown off course can correct toward its goal, which requires positional information.</p>
<p>The decisive experiment displaced starlings during migration. Juveniles continued on their original heading and ended up in the wrong place entirely; adults compensated and reoriented toward the correct destination. Naive birds run the inherited programme; experienced birds have acquired a map.</p>
<p>What the map is made of is not fully known. Magnetic intensity and inclination both vary systematically over the Earth's surface and could supply a coordinate grid. Loggerhead turtles have been shown to respond to magnetic signatures corresponding to particular locations along their migratory circuit, orienting appropriately for a place they have never been — which is close to a direct demonstration of a magnetic map.</p>
<p>Olfaction contributes for some species, and the evidence in pigeons is strong enough that the once-derided olfactory navigation hypothesis is now mainstream. Salmon returning to their natal stream imprint on its chemical signature as juveniles and locate it by smell in the final stage, after using magnetic cues across the open ocean.</p>

<h2 id="Extremes">The journeys</h2>
<p>The Arctic tern makes the longest migration known, breeding in the Arctic and wintering in the Antarctic. Tracking has shown the round trip exceeds 70,000 kilometres in some individuals, following looping routes that exploit prevailing winds rather than flying direct. Over a lifetime the distance is comparable to several return trips to the moon.</p>
<p>The bar-tailed godwit holds the non-stop record: tracked flights from Alaska to New Zealand of over 13,000 kilometres in about ten days without landing, feeding or drinking. To do this the bird nearly doubles its body mass in fat beforehand and shrinks its digestive organs, which are dead weight in flight — physiological restructuring in preparation for a journey.</p>
<p>The monarch butterfly's migration is remarkable for a different reason: no individual completes the cycle. The journey from Canada to central Mexico takes several generations southward, and the overwintering generation lives far longer than the others before returning north. The navigational information cannot be learned, since the returning butterflies are the great-grandchildren of those that left.</p>

<h2 id="Threats">What is going wrong</h2>
<p>Migration depends on a chain of conditions holding simultaneously, which makes migrants disproportionately vulnerable — a species can be protected perfectly at both ends of its route and still collapse.</p>
<p>Stopover sites are the weak link. Long-distance migrants depend on a small number of refuelling locations, and losing one can affect an entire flyway. Reclamation of tidal flats in the Yellow Sea has been linked to steep declines in several shorebird species that have nowhere else to refuel on that route.</p>
<p>Phenological mismatch is subtler and increasingly documented. Migration timing is cued largely by day length, which does not change, while the emergence of the insects that feed nestlings is cued by temperature, which does. Arriving on the historical schedule to find the food peak already passed reduces breeding success, and this has been measured in several European populations.</p>
<p>Light pollution disorients nocturnal migrants and draws them into cities, where collisions with glass kill birds in very large numbers annually. Turning building lights off during migration peaks measurably reduces this, which is among the cheapest conservation interventions available.</p>
<p>Radiofrequency noise is a live question. Given that the leading compass mechanism is disrupted experimentally by weak radiofrequency fields, the effect of urban electromagnetic noise on orientation is being investigated, and at least one study found birds in a city unable to orient until the enclosures were electrically shielded.</p>
`,
};
