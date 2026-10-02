import type { RewrittenArticle } from "./types";

export const musicalNotation: RewrittenArticle = {
  slug: "musical-notation",
  title: "Musical notation: writing down something that only exists while it is happening",
  sourceTitle: "Musical notation",
  dek: "The first music writing reminded singers of tunes they already knew. It took six centuries to write down rhythm, and the page still leaves most of the music out.",
  standfirst:
    "A written score looks like a complete set of instructions. It is not, and was never meant to be. Western notation grew piece by piece, each addition solving a problem the previous system could not — first how high, then how long, then how fast — and at every stage it relied on performers to supply what it did not say. The history of notation is a history of deciding which parts of music are worth writing down, and those decisions changed the music itself.",
  readingMinutes: 7,
  published: "2026-10-02",
  html: `
<h2 id="Before_writing">Music without a page</h2>
<p>For most of human history music was transmitted by ear, and in many traditions it still is. Indian classical music, much folk music everywhere, and the improvised parts of jazz are learned through listening, imitation and long practice, with writing playing at most a supporting role.</p>
<p>Writing music down is nevertheless old. Clay tablets from the city of Ugarit in Syria, from around 1400 BC, preserve a hymn in the Hurrian language with instructions in cuneiform that appear to describe intervals on a lyre; how to read them is disputed, and several quite different reconstructions exist. The ancient Greeks had a working notation that recorded pitch with letter-like signs, and a short song engraved on a gravestone found in western Turkey, the Seikilos epitaph, is often cited as the oldest complete surviving piece of music.</p>
<p>Greek notation was lost along with much else, and when European music came to be written again it started almost from nothing.</p>

<h2 id="Neumes">Reminders, not instructions</h2>
<p>From around the ninth century, monks copying liturgical chant began adding small marks above the words, called neumes. They showed the shape of the melody — rising, falling, an ornament here, several notes on one syllable there — but not exact pitches or intervals.</p>
<p>That was not a defect. The singers already knew the chants, learned by repetition over years; the neumes jogged the memory of a melody that lived in the singers' heads rather than on the page. Nobody could have sung an unfamiliar chant from them, and modern reconstructions of the earliest neumes rely on comparison with later manuscripts that specify more.</p>
<p>Specifying more required a reference for pitch. Scribes began drawing a horizontal line to mark one fixed note, then two, and positioning the neumes above and below them. Guido of Arezzo, an eleventh-century Italian monk, systematised the use of lines a third apart and promoted a set of syllables — ut, re, mi, fa, sol, la, taken from the opening of each line of a hymn — to help singers learn intervals. He claimed his method could produce a competent singer in a fraction of the time oral training took. Whatever the exact figure, the staff made it possible for the first time to sing a melody one had never heard.</p>

<h2 id="Rhythm">Writing down time</h2>
<p>Pitch was the easy part. For centuries, notation said little about rhythm, which in chant followed the words and was learned by tradition.</p>
<p>That became untenable once composers began writing music for several independent voices. If two or three melodic lines are to move against one another and arrive together, each singer must know how long every note lasts. The thirteenth-century system known as mensural notation, described by the theorist Franco of Cologne among others, gave notes distinct shapes for distinct durations — the direct ancestors of modern whole, half and quarter notes.</p>
<p>Here the influence ran both ways. Notation was developed to record polyphony, and polyphony of real complexity was only possible once it could be written: the elaborate interweaving voices of late medieval and Renaissance music could not have been composed, rehearsed and transmitted without a precise record. Writing did not just preserve the music; it made a new kind of music feasible.</p>
<p>Later additions accumulated slowly. Bar lines became standard in the seventeenth century. Dynamic markings, tempo words in Italian, and expression marks multiplied through the eighteenth and nineteenth centuries. The metronome, patented in 1815, let composers specify tempo numerically for the first time, and Beethoven was an early adopter — though several of his markings are so fast that performers have argued ever since about whether his metronome was faulty, he misread it, or he meant exactly what he wrote.</p>

<h2 id="Printing">From manuscript to printed page</h2>
<p>Music was harder to print than text, because notes must be positioned precisely on lines. In 1501 the Venetian printer Ottaviano Petrucci published a collection of polyphonic songs using a multiple-impression process — staves printed first, then notes and text — and the result was clear enough to sing from.</p>
<p>Printing did for music roughly what it did for text: it standardised repertoires, spread composers' reputations beyond their own cities, and created a market of amateur players buying music for use at home. By the nineteenth century, sheet music was a mass commodity, and the piano in a middle-class parlour was fed by a publishing industry that kept popular songs circulating in print long before recording existed.</p>

<h2 id="What_is_missing">What the page leaves out</h2>
<p>For all its precision, staff notation records a narrow slice of what musicians actually do. It specifies pitches from a fixed set and durations in simple ratios, but not the exact shading of loudness within a note, the flexibility of tempo that makes a phrase breathe, the bending of pitch on a blues guitar, or the uneven, swung division of the beat that jazz depends on. Written swing rhythms are an approximation every jazz musician knows not to read literally.</p>
<p>Other notations make other trade-offs. Tablature, used for lute in the Renaissance and for guitar today, records where to put the fingers rather than which pitches to produce, which suits instruments whose tuning varies. Chord charts give harmony and leave everything else to the player.</p>
<p>In the twentieth century some composers turned the gap into a subject. Graphic scores by John Cage, Cornelius Cardew and others replaced conventional notation with drawings and diagrams to be interpreted, deliberately leaving performers to decide what sounds the marks imply. That is an extreme case of something true of all notation: a score is less a recording of a piece than a set of constraints on a performance, and the performer has always been half the author.</p>
`,
};
