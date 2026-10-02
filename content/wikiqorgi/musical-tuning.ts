import type { RewrittenArticle } from "./types";

export const musicalTuning: RewrittenArticle = {
  slug: "musical-tuning",
  title: "Tuning: why every piano is deliberately out of tune",
  sourceTitle: "Musical tuning",
  dek: "Twelve perfect fifths overshoot seven octaves by a small, stubborn amount. Every tuning system in Western music is a decision about where to hide it.",
  standfirst:
    "The intervals that sound purest to the ear are simple frequency ratios — an octave is 2:1, a fifth 3:2, a major third 5:4. The trouble is that these ratios cannot all be satisfied at once on an instrument with a fixed set of notes. Stack them up and they fail to meet. For two and a half thousand years, musicians have argued about how to distribute that error, and the answer modern instruments use — spreading it evenly so that nothing is quite pure — was resisted for centuries as a compromise too far.",
  readingMinutes: 7,
  published: "2026-10-02",
  html: `
<h2 id="Ratios">Simple ratios and why they please</h2>
<p>When two notes sound together, how smooth they seem depends heavily on the ratio of their frequencies. Musical tones are not pure sine waves: a plucked or bowed string vibrates at its fundamental frequency and at whole-number multiples of it, the harmonics. Two notes whose frequencies stand in a simple ratio share many of those harmonics, and the combination sounds stable. When the ratio is slightly off, nearby harmonics interfere and produce a slow pulsing called beating, which the ear hears as roughness.</p>
<p>The ancient Greek tradition attributed to Pythagoras built a scale from the two simplest ratios after unison: the octave, 2:1, and the fifth, 3:2. Starting from one note, go up a fifth, then another, and another, folding the results back into a single octave, and the notes of the familiar scale appear one by one. It is an elegant procedure, and it contains a flaw.</p>

<h2 id="Comma">The gap that will not close</h2>
<p>Twelve fifths up from a starting note should, on a keyboard, arrive at the same note seven octaves higher. Arithmetic says otherwise. Twelve fifths multiply the frequency by three-halves to the twelfth power, about 129.75; seven octaves multiply it by two to the seventh, exactly 128. The difference, called the Pythagorean comma, is about a quarter of a semitone — small, but easily heard.</p>
<p>It is not a measurement problem. Powers of three are never equal to powers of two, so no amount of care will make pure fifths close the circle. Something has to give, and in Pythagorean tuning what gives is one fifth, left so far out of tune that it became known as the wolf, for the howling beats it produces.</p>
<p>A second problem emerged as polyphony grew. Pythagorean tuning makes major thirds noticeably wide — the ratio 81:64 rather than the pure 5:4 — and when medieval and Renaissance music began to treat thirds as consonant, building chords on them, the harsh Pythagorean thirds became a liability.</p>

<h2 id="Meantone">Trading pure fifths for pure thirds</h2>
<p>The Renaissance answer was meantone temperament. In its most common form, each fifth is narrowed slightly — by a quarter of a different small interval, the syntonic comma — so that four fifths stacked up produce a perfectly pure major third. Thirds, which had been rough, became beautifully smooth.</p>
<p>The cost is that meantone works only in keys close to the one it is built around. The narrowed fifths accumulate their error elsewhere, so some intervals become unusable, and the wolf moves rather than vanishes. Composers writing for meantone keyboards largely stayed in friendly keys, and the different keys genuinely sounded different from one another — a property later players would come to miss.</p>
<p>Through the seventeenth and eighteenth centuries, theorists such as Andreas Werckmeister proposed well temperaments, in which the error is spread unevenly so that every key is usable but each retains its own character: near keys smoother, distant ones more tense. Johann Sebastian Bach's <em>Well-Tempered Clavier</em> of 1722, with a prelude and fugue in each of the twenty-four keys, demonstrated that such a keyboard could play in all of them. Whether Bach intended a particular well temperament or something close to equal temperament is a question still argued over by musicologists, with no decisive evidence either way.</p>

<h2 id="Equal_temperament">Spreading the error evenly</h2>
<p>Equal temperament divides the octave into twelve exactly equal steps, each a frequency ratio of the twelfth root of two. It was calculated with precision by the Chinese prince Zhu Zaiyu in the 1580s and independently by European mathematicians around the same time, but it took until the nineteenth century to become the norm for keyboards in Europe.</p>
<p>Its virtue is complete freedom: every key is identical in structure, so music can modulate anywhere and an instrument tuned once can play anything. Its price is that almost no interval is pure. Fifths are narrow by about two hundredths of a semitone, which is barely noticeable. Major thirds are wide by around a seventh of a semitone, which is not — the equal-tempered major third beats audibly, and musicians trained on pure thirds hear it as slightly sour. The sound of a modern piano chord is, in this precise sense, the sound of a compromise everyone has stopped noticing.</p>
<p>Instruments without fixed pitches do not have to accept it. Choirs and string quartets routinely adjust intonation note by note toward purer intervals, often without realising they are doing so, and a barbershop quartet's ringing chords depend on tuning thirds and sevenths purer than a piano can.</p>

<h2 id="Pianos_and_pitch">Stretched octaves and the standard A</h2>
<p>Pianos are not even tuned to exact equal temperament. Their thick, stiff strings do not vibrate quite like ideal strings, and their harmonics run slightly sharp of whole-number multiples. If octaves were tuned to an exact 2:1, the upper note would clash with the sharp harmonics of the lower one. Tuners therefore stretch the octaves slightly, so that a concert grand's highest notes sit noticeably sharp, and its lowest flat, of their theoretical values. A tuning that is mathematically correct sounds wrong on the instrument.</p>
<p>The absolute pitch everything is anchored to is a convention too. For most of musical history there was no standard, and the A that orchestras tuned to varied by more than a semitone between cities and decades. France legislated a standard in 1859; an international conference in 1939 recommended 440 cycles per second for the A above middle C, later adopted as an international standard. Many orchestras still tune a little higher for brilliance, and performers of Baroque music commonly use a convention about a semitone lower.</p>
<p>Other musical traditions made different choices altogether. Indonesian gamelan uses scales whose intervals vary from ensemble to ensemble, Arabic and Persian music use intervals between the Western semitones, and Indian classical music tunes intervals to a drone rather than to a keyboard. Western equal temperament is one solution to the comma, adopted for practical reasons, and not the natural order of sound it can seem from inside it.</p>
`,
};
