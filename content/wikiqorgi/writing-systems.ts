import type { RewrittenArticle } from "./types";

export const writingSystems: RewrittenArticle = {
  slug: "writing-systems",
  title: "Writing: invented for accounting, four times, by accident",
  sourceTitle: "History of writing",
  dek: "Nobody set out to record literature. The first texts are receipts, and it took centuries for anyone to write down a sentence.",
  standfirst:
    "Writing is so bound up with civilisation that its origin story is usually told as a triumph of the human spirit. The documents say otherwise. The earliest writing we can read is inventory — barley, sheep, oil, who owes what to whom — and the systems that produced it were developed by administrators trying to keep track of a warehouse.",
  readingMinutes: 8,
  html: `
<h2 id="Counting_before_writing">Counting before writing</h2>
<p>The clearest account of how writing began starts several thousand years earlier, with small clay tokens used across the Near East from around 8000 BC. Different shapes stood for different commodities — a cone for a measure of grain, a cylinder for an animal — and they were used to track goods.</p>
<p>As transactions grew more complex, tokens were sealed inside hollow clay envelopes so a shipment could not be tampered with. This created an obvious problem: you could not see what was inside without breaking the seal. The solution was to press the tokens into the soft outer surface first, leaving an impression of the contents.</p>
<p>And then someone noticed that if the impressions carry the information, the tokens inside are redundant. Drop them, flatten the envelope into a tablet, and you have a written record. The first writing is a shadow of an accounting device, and the earliest tablets from Uruk, around 3400 BC, are administrative: quantities, commodities, names of institutions.</p>
<p>This matters for how we think about literacy. Writing was not created to preserve stories — those were already handled by memory and performance, and often better. It was created because bureaucracy exceeded what a person could remember.</p>

<h2 id="The_hard_part_is_writing_sounds">The hard part is writing sounds</h2>
<p>A picture of a sheep means a sheep. That is straightforward, and it is also a dead end: you cannot draw a name, a verb tense, a negation, or the word "because". Early symbol systems could record what was in a warehouse and could not record language.</p>
<p>The breakthrough is the rebus principle, and it is genuinely one of the great intellectual leaps. Use a sign for its <em>sound</em> rather than its meaning — the way a picture of an eye can spell the first syllable of "island". Once symbols can represent sounds, anything sayable becomes writable, including names, abstractions and grammar.</p>
<p>Only a handful of societies appear to have crossed that threshold independently: Mesopotamia around 3200 BC, China by about 1200 BC and probably earlier, and Mesoamerica by the first millennium BC. Egyptian writing appeared close enough to Sumerian that whether it was independent or stimulated by contact is still argued. Every other writing system on Earth descends from one of these, or was created by someone who had seen writing and understood that the trick was possible.</p>
<p>That last category is worth its own note. Sequoyah, who was illiterate, invented a syllabary for Cherokee in the 1820s knowing only that marks on paper could carry speech. Within a few years Cherokee literacy exceeded that of the surrounding settler population. Knowing that a thing can be done is most of the invention.</p>

<h2 id="Three_ways_to_carve_up_language">Three ways to carve up language</h2>
<p>Writing systems differ in what size of linguistic unit each symbol represents, and the trade-off is consistent: fewer symbols means easier learning and longer words.</p>
<p><strong>Logographic</strong> systems assign symbols to morphemes — units of meaning. Chinese is the major living example, requiring a few thousand characters for ordinary literacy. The cost is years of study. The benefit is real and often overlooked: the writing is largely independent of pronunciation, so speakers of mutually unintelligible varieties of Chinese can read the same text, and a classical text remains legible across two thousand years of sound change.</p>
<p><strong>Syllabic</strong> systems give each syllable a symbol, needing perhaps 50 to a few hundred. Japanese kana are the familiar case, and they suit a language with a simple syllable structure. They suit English badly, which has thousands of possible syllables.</p>
<p><strong>Alphabetic</strong> systems assign symbols to individual sounds, needing a few dozen. This is the most economical arrangement and it was invented once. Every alphabet in use — Latin, Greek, Cyrillic, Arabic, Hebrew, the Indian scripts — descends from a single system devised around 1800 BC by Semitic speakers in Egypt, who took Egyptian hieroglyphs and used them for the first sound of the word each depicted.</p>
<p>That original was technically an abjad, writing consonants and leaving vowels to the reader — workable for Semitic languages, where vowels mostly carry grammatical rather than lexical information. The Greeks adapted it for a language where that was untrue, and repurposed the letters for sounds Greek lacked to mark vowels instead. Full alphabetic writing dates from that adaptation.</p>

<h2 id="Why_spelling_is_a_mess">Why spelling is a mess</h2>
<p>The theoretical ideal of an alphabet is one symbol per sound. Almost no orthography achieves it, and English is a spectacular failure.</p>
<p>The reasons are historical rather than stupid. English spelling was substantially fixed by printing in the fifteenth and sixteenth centuries, in the middle of the Great Vowel Shift — a wholesale rearrangement of long vowel pronunciation. The spellings recorded the old sounds and the speech moved on, which is why <em>name</em>, <em>meet</em> and <em>time</em> are spelled as though pronounced the way Chaucer would have said them.</p>
<p>On top of that sit borrowings that kept their source spelling, deliberate antiquarian meddling — the <em>b</em> in <em>debt</em> was inserted by scholars to display a Latin ancestry the English word never had — and silent letters that were once pronounced, like the <em>k</em> in <em>knight</em>.</p>
<p>The cost is measurable. Children learning transparent orthographies like Finnish or Italian reach fluent decoding in about a year; English-speaking children take two to three, and dyslexia is diagnosed more frequently in English-speaking populations, plausibly because an inconsistent system exposes difficulties a regular one would not.</p>

<h2 id="Decipherment">Decipherment</h2>
<p>Reading a lost script requires a way in, and the history of decipherment is a history of finding leverage.</p>
<p>Egyptian hieroglyphs fell to the Rosetta Stone, which carried the same decree in Greek, and to Champollion's insight that the script was not purely symbolic but partly phonetic — the assumption that it was pure symbolism had blocked progress for centuries. Linear B was cracked by Michael Ventris, an architect working as an amateur, who established that the underlying language was an early form of Greek, which nobody expected and which he had himself argued against. Maya glyphs were long held back by an influential scholar's conviction that they recorded only calendrical and astronomical matter; once they were read phonetically they turned out to record dynastic history in detail.</p>
<p>Several scripts remain unread, most prominently the Indus Valley symbols, where the texts are very short, the language is unknown, and there is no bilingual — three obstacles that together may be decisive.</p>

<h2 id="What_it_changed">What it changed</h2>
<p>Writing does something no other technology does: it detaches a statement from the person who made it and from the moment of making. Information can travel without a messenger who understands it, survive the death of everyone who knew it, and be checked against rather than merely recalled.</p>
<p>Plato has Socrates object that writing would ruin memory and produce people who seem wise without being so — an argument preserved, inevitably, in writing. He was not entirely wrong. Literate cultures do lose the prodigious memory feats that oral cultures sustain, and the epics were composed and transmitted by people who had no other option.</p>
<p>What writing bought in exchange is the possibility of accumulation. Law that outlasts a ruler's memory, contracts enforceable against denial, and the ability to build on an argument made in another century by someone you never met — none of which was the point when a Sumerian clerk pressed a reed into wet clay to record a delivery of barley.</p>
`,
};
