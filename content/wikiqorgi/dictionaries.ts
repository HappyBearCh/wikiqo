import type { RewrittenArticle } from "./types";

export const dictionaries: RewrittenArticle = {
  slug: "dictionaries",
  title: "Dictionaries: a record of usage that everyone mistakes for a rulebook",
  sourceTitle: "Dictionary",
  dek: "Lexicographers describe how words are used. Readers want to be told how they should be. The gap has produced some spectacular fights.",
  standfirst:
    "A dictionary looks like an authority and is in fact a survey. Its compilers gather evidence of how a word has actually been used, and record what they find — including the uses they personally dislike. That this is the job has been explained repeatedly by lexicographers and disbelieved just as repeatedly by the public, occasionally to the point of scandal.",
  readingMinutes: 7,
  html: `
<h2 id="Word_lists_before_dictionaries">Word lists before dictionaries</h2>
<p>The ancestor of the dictionary is the glossary, and it existed to solve a narrower problem: readers encountering hard words in a text. Mesopotamian scribes compiled bilingual sign lists; medieval monks wrote translations of difficult Latin words between the lines of manuscripts, and those interlinear notes were eventually gathered into standalone lists.</p>
<p>Early English dictionaries inherited that scope. Robert Cawdrey's <em>A Table Alphabeticall</em> of 1604, generally counted the first, covers about 2,500 "hard usuall English wordes" and is aimed explicitly at readers without a classical education. It did not occur to anyone to include ordinary words, because everyone knew those.</p>
<p>The shift to comprehensive coverage — recording the whole language rather than its difficult margins — came later and changed what the book was for. A dictionary of hard words is a reference; a dictionary of the whole language is a portrait.</p>

<h2 id="Johnson">Johnson</h2>
<p>Samuel Johnson's dictionary of 1755 was compiled in about eight years with six assistants, against a French Academy effort that had taken forty years and forty members. Johnson noted the comparison with satisfaction.</p>
<p>His methodological innovation was the illustrative quotation. Rather than assert a meaning, he demonstrated it — over 100,000 quotations from Shakespeare, Milton, Dryden and others, showing the word doing its work in real sentences. That principle, that evidence of usage outranks the compiler's opinion, is the foundation of modern lexicography.</p>
<p>He set out to fix the language and concluded, in the preface, that he could not. It is one of the great passages of intellectual honesty: he had hoped to secure English from corruption and had come to see that expecting a language to stop changing was expecting the impossible, and that a lexicographer who imagines otherwise is chasing a shadow.</p>
<p>He was also funny in a way dictionaries have not been since. <em>Lexicographer</em>: a writer of dictionaries, a harmless drudge. <em>Oats</em>: a grain which in England is generally given to horses, but in Scotland supports the people. Asked by a woman how he came to define <em>pastern</em> incorrectly, he replied: ignorance, madam, pure ignorance.</p>

<h2 id="The_OED_and_the_crowd">The OED and the crowd</h2>
<p>The Oxford English Dictionary was conceived in 1857 on a principle Johnson had begun: document every word in the language with dated quotations tracing its history from first appearance onward. The scale was misjudged spectacularly. It was expected to take ten years; the first edition was completed in 1928, after seventy.</p>
<p>The method was distributed reading. Volunteers were sent lists of books, read them, and mailed in slips recording notable usages with their context. Several million slips arrived. James Murray, the principal editor, worked from a corrugated iron shed in his garden — the Scriptorium — surrounded by pigeonholes.</p>
<p>The most prolific contributors included William Chester Minor, an American army surgeon who submitted thousands of quotations from Broadmoor, where he was confined after a killing committed during a psychotic episode. Murray corresponded with him for years before learning the circumstances.</p>
<p>The result is not a dictionary of current meaning but a history of the language, which is why its entries record obsolete senses and why the first-recorded-use dates are so widely cited. It has been continuously revised since, and the third edition remains in progress.</p>

<h2 id="Describe_or_prescribe">Describe or prescribe</h2>
<p>The field's central tension broke into public argument in 1961, when Webster's Third New International Dictionary appeared.</p>
<p>Its editors had applied descriptive principles consistently: record usage, mark it with evidence, and drop the moralising labels earlier editions had used to condemn words. Most notoriously, it entered <em>ain't</em> without a condemnation, noting it was used by cultivated speakers in some contexts.</p>
<p>The reaction was ferocious. Reviewers accused the dictionary of abandoning standards, of permissiveness, of accelerating the language's decay. The New York Times called for the second edition to be kept in print. A publisher commissioned a rival dictionary specifically to restore usage guidance, which became the American Heritage Dictionary and its panel of usage experts.</p>
<p>The row exposed a genuine disagreement about what the book is. Lexicographers overwhelmingly hold that they report the language rather than legislate it, and that a dictionary recording only approved usage would be useless for its main purpose — telling you what a word you have encountered means. Readers, reasonably enough, want to know what is correct, and there is no other book they think to consult.</p>
<p>The compromise most dictionaries reached is usage notes: record the usage, and note that it is contested. It satisfies nobody entirely and is probably the right answer.</p>

<h2 id="What_a_modern_dictionary_is_made_of">What a modern dictionary is made of</h2>
<p>Slips have been replaced by corpora — searchable collections of hundreds of millions or billions of words of real text, drawn from journalism, fiction, transcribed speech, correspondence and the web.</p>
<p>This changed the work substantially. A lexicographer can now see a word's actual distribution: which words it typically appears beside, which grammatical patterns it occurs in, how frequently, and in what registers. Senses that intuition would have ranked as primary sometimes turn out to be rare, and patterns invisible to introspection become obvious. Definitions written from corpus evidence tend to describe how a word behaves rather than what a compiler believes it ought to mean.</p>
<p>It has also made the omissions visible. Historical dictionaries drew their evidence from published writing, which for centuries meant the writing of educated men, so the record under-represents everyone else's language — a bias the OED's current revision is explicitly working against.</p>

<h2 id="Deciding_what_counts">Deciding what counts</h2>
<p>The question of when a new word is admitted is answered less dramatically than the annual press coverage implies. The usual criteria are sustained use over several years, across independent sources, in contexts where the writer does not stop to explain it. That last point is the practical test: a word that still needs glossing has not arrived.</p>
<p>Words are rarely removed from historical dictionaries, since their purpose is the record. Smaller print dictionaries do cut, because pages are finite, and those cuts occasionally cause their own small controversies.</p>
<p>The deeper point is the one Johnson reached in 1755 and that every generation rediscovers with irritation. A dictionary cannot stop a language changing, and a word's presence in one is not permission. It is a report that enough people were already using it that leaving it out would have made the book less accurate.</p>
`,
};
