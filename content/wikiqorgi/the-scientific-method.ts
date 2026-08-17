import type { RewrittenArticle } from "./types";

export const theScientificMethod: RewrittenArticle = {
  slug: "the-scientific-method",
  title: "The scientific method: a description that no scientist actually follows",
  sourceTitle: "Scientific method",
  dek: "The numbered steps taught in school describe almost no real research. What science actually has is a set of social arrangements for catching mistakes.",
  standfirst:
    "Observe, hypothesise, predict, experiment, conclude. The version on the classroom poster is tidy, memorable, and a poor description of how any significant discovery has been made. Philosophers of science spent the twentieth century failing to find a single procedure that distinguishes science from everything else, and the more useful account that emerged is not about method at all but about institutions built to make error expensive.",
  readingMinutes: 8,
  html: `
<h2 id="The_textbook_version">The version on the poster</h2>
<p>The standard formulation presents research as a linear sequence: notice something, form a hypothesis, deduce a testable prediction, run a controlled experiment, accept or reject.</p>
<p>It fails as a description in several specific ways.</p>
<p>Observation is not a starting point, because there is no such thing as observing without already having decided what counts as relevant. A scientist walking into a field does not record everything; the theory determines what is data and what is background. This point, that observation is theory-laden, is one of the few things philosophers of science broadly agree on.</p>
<p>Experiment is unavailable to entire disciplines. Astronomy cannot manipulate stars, geology cannot rerun the formation of a continent, epidemiology cannot randomly assign people to smoke. These fields test hypotheses by prediction and comparison rather than intervention, and they are not less scientific for it.</p>
<p>And the order is frequently reversed. A great deal of research begins with a technique, an anomaly in existing data, or a mathematical result looking for a phenomenon. Discoveries arrive by accident often enough that the field has a word for it, and the linear narrative is usually reconstructed afterwards for the paper — which is why published methods sections are among the least reliable accounts of what was actually done.</p>

<h2 id="Falsification">Popper's answer, and what it got right</h2>
<p>Karl Popper's problem was demarcation: what separates physics from astrology, given that both make claims and both have adherents who point to confirming instances?</p>
<p>His answer was that confirmation is worthless because it is too easy. Any theory vague enough can be confirmed by almost anything, and its supporters will find confirmations everywhere. What distinguishes a scientific claim is that it forbids something — it makes a prediction that could come out wrong. A theory compatible with every possible observation tells you nothing.</p>
<p>The asymmetry underneath is logically sound. No number of confirming instances proves a universal claim, while a single genuine counter-instance refutes it. Popper's example was Einstein's prediction that starlight would bend by a specific amount near the sun: a precise number, measurable, and wrong by a measurable margin if the theory were false. Eddington's 1919 expedition could have destroyed general relativity in an afternoon. That risk is what made it a serious theory.</p>
<p>Falsifiability remains the single most useful thing to ask of a claim, and it is the right question to put to a confident assertion that never seems to be at risk from anything.</p>
<p>It does not, however, work as a description of practice. When an experiment contradicts a theory, scientists do not abandon the theory — they question the apparatus, the sample, the analysis, the auxiliary assumptions. And they are usually right to: the observed orbit of Uranus contradicted Newtonian mechanics, the response was to postulate an unseen planet, and Neptune was found where the calculation said. The same manoeuvre applied to Mercury failed, and there the theory really was wrong. Nothing in the logic of falsification tells you in advance which case you are in.</p>

<h2 id="Kuhn">Kuhn, and the trouble he caused</h2>
<p>Thomas Kuhn argued in 1962 that science does not accumulate steadily but alternates between two modes.</p>
<p>Normal science operates within a paradigm — a shared framework of theory, methods, exemplary problems and standards — and consists largely of puzzle-solving, extending the framework and cleaning up discrepancies. Anomalies accumulate and are set aside as unsolved problems rather than refutations, which is exactly what Popper said should not happen and precisely what does.</p>
<p>When anomalies become intolerable and an alternative framework appears, a revolution occurs and the field reorganises around new fundamentals. Kuhn's provocative claim was that competing paradigms are incommensurable — they define their terms differently, disagree about what counts as a legitimate problem, and cannot be compared by any neutral standard. Mass means something different in Newtonian and relativistic physics, so the theories are not straightforwardly rival answers to one question.</p>
<p>This was seized on by people arguing that scientific truth is merely social agreement, which Kuhn spent the rest of his career objecting to. The defensible core is narrower and survives: theory choice involves judgment about accuracy, scope, simplicity and fruitfulness, these criteria can conflict, and no algorithm resolves them. That is a claim about the absence of a decision procedure, not about the absence of reality.</p>

<h2 id="What_actually_works">What actually does the work</h2>
<p>If no single method demarcates science, what accounts for its results? The better answer is that science is a set of institutions designed on the assumption that individual scientists are ordinary people who fool themselves.</p>
<p>Controls exist because change has causes other than the one you are interested in. Randomisation exists because assignment by any other means smuggles in the differences between the groups. Blinding exists because expectation alters both what a subject experiences and what an experimenter records, and the effect is measurable and large. Replication exists because any single result may be a fluke, a mistake, or a fraud, and nothing distinguishes those from the outside.</p>
<p>Publication and peer review exist to expose work to people motivated to find its errors. Standardised reporting exists so that others can check the reasoning. Pre-registration — stating hypotheses and analysis plans before collecting data — exists because the freedom to choose an analysis after seeing the results reliably produces significant findings from noise.</p>
<p>None of these are steps in a procedure. They are countermeasures against specific failure modes, added one at a time as each failure mode was identified, usually after it had done damage. Feynman's formulation is the most honest available: the first principle is not to fool yourself, and you are the easiest person to fool.</p>

<h2 id="Demarcation">Telling the difference in practice</h2>
<p>The philosophers' failure to find a clean criterion does not leave us with nothing, because the practical differences between fields that work and fields that do not are visible.</p>
<p>Astrology's problem is not that it lacks a hypothesis-experiment sequence. It is that its predictions are unfalsifiably vague, failures produce reinterpretation rather than revision, its practitioners do not systematically test it, and it has not changed in response to evidence in centuries.</p>
<p>The useful markers are behavioural. Does the field make risky, specific predictions? Are failures treated as informative or explained away? Do practitioners actively seek disconfirmation of their own claims? Does the body of knowledge change when the evidence changes? Are results checked by people with an interest in finding them wrong?</p>
<p>Imre Lakatos put this in terms of research programmes rather than individual theories: a programme is progressive if its modifications generate new predictions that pan out, and degenerating if each modification only accommodates the anomaly that prompted it. The distinction is judged over time rather than in a single case, which is less satisfying than a bright line and considerably more accurate about how the judgment is actually made.</p>

<h2 id="Not_a_ladder">A closing caution about the word</h2>
<p>Two errors run in opposite directions and are both common.</p>
<p>The first is treating scientific results as certain because they are scientific. Nothing empirical is proved; theories are supported to varying degrees, and well-supported ones have been overturned. Confidence should track the weight of evidence in the specific case, not the label on the field.</p>
<p>The second is concluding from the absence of a single method — or from the history of overturned theories — that science is merely one opinion among others. That inference ignores the results. The methods described above have produced a body of prediction and control that no other approach has come close to, and the fact that the machinery is fallible and social is an argument about how it works, not about whether.</p>
<p>The honest position is that science is a fallible, self-correcting, institutionally organised effort that has been spectacularly successful, and that both its fallibility and its success are consequences of the same design.</p>
`,
};
