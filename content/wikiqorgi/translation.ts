import type { RewrittenArticle } from "./types";

export const translation: RewrittenArticle = {
  slug: "translation",
  title: "Translation: the impossible job everyone needs done",
  sourceTitle: "Translation",
  dek: "Every translation is a series of losses chosen deliberately — and the choosing is the work.",
  standfirst:
    "There is no such thing as a neutral translation. Languages divide the world differently, carry different associations, and make different things obligatory, so no sentence maps cleanly onto another. A translator is not transferring meaning across a gap; they are deciding, hundreds of times a page, what to sacrifice.",
  readingMinutes: 7,
  html: `
<h2 id="What_makes_it_hard">What makes it hard</h2>
<p>The naive picture treats words as labels on universal concepts, so translation becomes relabelling. Almost nothing survives contact with practice.</p>
<p>Languages carve up meaning differently. Russian has separate basic words for lighter and darker blue, and treats them as distinct colours rather than shades. Many languages distinguish inclusive from exclusive "we" — whether the listener is included — a distinction English cannot make without adding a clause. Japanese pronouns encode formality and relationship so densely that a choice between two words for "I" characterises a speaker in a way English can only render by rewriting the sentence.</p>
<p>Grammar makes things obligatory. Translating a plain English sentence into Japanese forces a decision about politeness level that the original did not specify. Translating into a language with grammatical gender forces choices about people the source left unmarked. Translating a Russian verb into English forces a tense the aspect system did not supply. You cannot decline to answer; the grammar requires a commitment the author never made.</p>
<p>And words carry freight. A dictionary equivalent may share a definition and none of the connotation — the register, the history, the associations that make a word land the way it does.</p>

<h2 id="The_oldest_argument">The oldest argument</h2>
<p>The field's central dispute is two thousand years old and has not moved much: how close should a translation stay to the original's form?</p>
<p>Cicero raised it, saying he translated not word for word but sense for sense. Jerome, translating the Bible into Latin in the fourth century, adopted the same principle — while adding, carefully, that scripture was an exception where even the word order held mystery.</p>
<p>The two poles are usually called <strong>domestication</strong> and <strong>foreignisation</strong>. A domesticating translation reads fluently in the target language, as though written in it, at the cost of erasing the source's strangeness. A foreignising translation preserves the source's rhythms and oddities, reminding the reader that they are reading something from elsewhere, at the cost of ease.</p>
<p>Neither is correct in general, and the choice is partly ethical rather than technical. Lawrence Venuti has argued that the Anglophone preference for invisible, fluent translation makes translators disappear and flattens other literatures into something comfortably English — that the smoothness is a kind of appropriation. Others reply that unreadable fidelity serves nobody.</p>

<h2 id="The_things_that_will_not_go">The things that will not go</h2>
<p>Some material resists in ways that force outright invention.</p>
<p><strong>Wordplay</strong> depends on the accidents of a particular language's sound. A pun cannot be transferred; it can only be replaced with a different pun in a different place, which means the translator is now writing rather than rendering. The standard defence is that reproducing the <em>effect</em> is more faithful than reproducing the words, and it is a reasonable defence that nonetheless concedes the point.</p>
<p><strong>Verse</strong> forces a choice among meaning, metre and rhyme, and you rarely keep all three. Formal poetry translated into free verse loses the constraint that shaped it; translated into rhyme, it usually distorts the sense to reach the rhyme.</p>
<p><strong>Dialect and register</strong> may be the hardest. A character speaking a regional variety carries class, place and history that a target-language dialect will map onto entirely different associations. Rendering rural Sicilian as Appalachian English imports a set of implications the author never invoked.</p>
<p><strong>Culture-specific reference</strong> forces a choice between a footnote that breaks the spell, a substitution that alters the world, and leaving the reader adrift.</p>

<h2 id="Translations_that_changed_things">Translations that changed things</h2>
<p>Some translations have mattered more than most originals.</p>
<p>The Septuagint, a Greek rendering of Hebrew scripture made in Alexandria, is the version early Christian writers quoted, so its interpretive choices propagated into Christian doctrine. Jerome's Vulgate governed Western Christianity for over a millennium.</p>
<p>Luther's German Bible did as much to standardise written German as any other single work, and he described his method plainly: look at how ordinary people speak, and write that. Tyndale's English translation cost him his life and supplied so much of the King James Version — and thus of English idiom — that phrases he coined are now used daily by people who have never opened either.</p>
<p>The transmission of Greek learning into Europe ran through translation twice: Greek into Arabic in Baghdad, then Arabic into Latin in Toledo and Sicily, with a good deal of commentary acquired en route. Much of what Europe called rediscovering antiquity was reading it in a third language.</p>

<h2 id="What_machines_did_and_did_not_solve">What machines did and did not solve</h2>
<p>Machine translation began with rule-based systems that encoded grammar and dictionaries, and they were poor. Statistical methods, trained on large parallel corpora, did better without understanding anything, by learning which phrases tended to correspond. Neural systems improved matters again, and the shift to transformer architectures produced output that is, for many language pairs and many purposes, genuinely usable.</p>
<p>The remaining failures are informative because they are not random. Machines handle informational prose well and struggle with exactly what human translators find hard: humour, irony, ambiguity that should stay ambiguous, register, and any passage where the right rendering depends on knowing what the whole book is doing. They also inherit their training data's biases, defaulting to a gender for occupational nouns when translating from a language without grammatical gender — a small and revealing failure, since the system is not choosing between meanings but reproducing a statistical regularity in text.</p>
<p>The practical effect has been to shift rather than eliminate the work. Post-editing machine output is now a large part of the commercial industry. Literary translation, where the value lies precisely in judgement about what to sacrifice, has been affected least.</p>

<h2 id="The_translator_is_an_author">The translator is an author</h2>
<p>The most useful correction to the popular view is that translation is not a mechanical service performed on a text but an interpretation of it, and different translators produce genuinely different books.</p>
<p>The Odyssey has been translated into English dozens of times, and the versions differ in ways that go beyond wording — in what kind of poem they take it to be, in how they render the enslaved women Odysseus has killed, in whether the hero is admirable. Emily Wilson's 2017 version, the first by a woman into English, made choices about that vocabulary that were widely discussed precisely because they exposed how much earlier translators had decided without announcing it.</p>
<p>Which is the general lesson. Every translation contains an argument about the original. The good ones know it.</p>
`,
};
