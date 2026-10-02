import type { RewrittenArticle } from "./types";

export const spacedRepetition: RewrittenArticle = {
  slug: "spaced-repetition",
  title: "Spaced repetition: the study method that feels worse and works better",
  sourceTitle: "Spaced repetition",
  dek: "Reviewing material at growing intervals, and testing rather than rereading, is among the most reliable findings in psychology. Most students still cram, because cramming feels like learning.",
  standfirst:
    "If there is one result from the science of learning that almost everyone could use, it is this: spreading study out over time, with each review coming just before the material would be forgotten, produces far more durable memory than the same amount of study packed into one session. It was first measured in the 1880s and has been replicated hundreds of times. The puzzle is why it is not universal, and the answer says something about how badly people judge their own learning.",
  readingMinutes: 7,
  published: "2026-10-02",
  html: `
<h2 id="Spacing">The spacing effect</h2>
<p>Hermann Ebbinghaus, who first measured forgetting experimentally in the 1880s, noticed that he learned lists more efficiently when he spread his repetitions over several days than when he crammed them into one sitting. The phenomenon, now called the spacing effect, has since been demonstrated across ages, materials and species, from vocabulary and facts to motor skills, in laboratory and classroom.</p>
<p>A large analysis of the research by Nicholas Cepeda and colleagues, published in 2006, confirmed that spaced study reliably beats massed study for long-term retention. A follow-up study in 2008 examined how long the gap between study sessions should be. The answer depended on how long the information needed to be remembered: the optimal gap was a fraction of the retention interval, very roughly ten to twenty per cent of it. To remember something for a week, review it after a day or so; to remember it for a year, review it after several weeks.</p>
<p>A remarkable demonstration of long-term effects came from a study by Harry Bahrick and members of his family, published in 1993, who learned foreign-language vocabulary with different spacings between review sessions and tested themselves over periods of up to five years. Wider spacing between sessions produced markedly better retention years later, even with fewer total sessions.</p>

<h2 id="Testing">Testing beats rereading</h2>
<p>The second key finding is that the way material is reviewed matters as much as when. Retrieving information from memory — answering a question, recalling a definition without looking — strengthens memory much more than rereading or reviewing it passively. This is called the testing effect, or retrieval practice.</p>
<p>In a study published in 2006, Henry Roediger and Jeffrey Karpicke had students study a prose passage and then either reread it or take recall tests on it. When tested five minutes later, those who had reread did slightly better. When tested a week later, those who had practised recall remembered substantially more. The same pattern has been found with many kinds of material.</p>
<p>Spaced repetition combines the two: material is reviewed by being recalled, at intervals that grow longer each time it is successfully remembered and shorter when it is forgotten.</p>

<h2 id="Systems">Boxes, algorithms and apps</h2>
<p>The first popular system was mechanical. In the early 1970s the German science journalist Sebastian Leitner described a method using flashcards and a series of boxes. A card answered correctly moves to the next box, reviewed less often; a card answered incorrectly goes back to the first, reviewed every day. Hard cards are seen often and easy ones rarely, so effort goes where it is needed.</p>
<p>In the 1980s a Polish student, Piotr Woźniak, frustrated at forgetting the English vocabulary he was learning, kept records of his own retention and devised an algorithm to calculate the optimal review interval for each item. It became the program SuperMemo, released in 1987, and its algorithm, known as SM-2, has been adapted by many later programs. The most widely used, Anki, released in 2006, is free and open source and is used heavily by medical students, who face enormous quantities of factual material. More recent scheduling algorithms model each learner's memory statistically from their review history.</p>
<p>Language-learning apps use related methods, estimating how quickly each word is likely to be forgotten and scheduling reviews accordingly.</p>

<h2 id="Why_not">Why people still cram</h2>
<p>If spacing and testing work so well, why does nearly everyone cram before exams and reread their notes? The research points to a systematic error in how people judge their own learning.</p>
<p>Massed study and rereading feel effective. The material becomes familiar and easy to process, and that fluency is mistaken for knowledge. Spaced study and testing feel harder: after a gap, the material is partly forgotten, and retrieving it is effortful and often fails. That difficulty is exactly what makes them work. The psychologist Robert Bjork called such conditions "desirable difficulties": things that slow apparent progress during learning but improve long-term retention.</p>
<p>The error persists even after experience. In a study by Nate Kornell and Bjork, published in 2008, people learned artists' painting styles either by seeing each artist's paintings in a block or interleaved with other artists'. Interleaving produced better ability to identify the style of new paintings — yet most participants believed they had learned better from the blocked condition, even after being tested.</p>

<h2 id="Limits">What it does and doesn't do</h2>
<p>Spaced repetition is most effective for material that can be broken into discrete items: vocabulary, definitions, facts, formulas, anatomical names. It is less obviously suited to deep conceptual understanding or complex skills, although the underlying principles of spacing and retrieval apply there too, and researchers have argued for building them into how whole subjects are taught, by revisiting topics over a course rather than finishing each and moving on.</p>
<p>It also requires discipline. The benefits come from reviewing consistently over months, and a missed week produces a backlog of reviews. Many people start and give up.</p>
<p>The deeper lesson is about memory itself. Forgetting is not the enemy of learning; partial forgetting followed by effortful recall is what makes memory durable. A method that allows material to slip slightly before reviewing it works with that fact, while cramming works against it — and feels better while doing so.</p>
`,
};
