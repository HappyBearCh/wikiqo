import type { RewrittenArticle } from "./types";

export const pain: RewrittenArticle = {
  slug: "pain",
  title: "Pain: an output of the brain, not a reading from the body",
  sourceTitle: "Pain",
  dek: "Damage and pain are separate things. Understanding why is the difference between treating an injury and treating a person.",
  standfirst:
    "The intuitive model is that pain is a signal travelling from an injury to the brain, with intensity proportional to damage. Almost every part of that is wrong. Soldiers have walked off catastrophic wounds feeling nothing; people have suffered agony in limbs that were amputated years earlier. Pain is not a measurement of tissue damage. It is a decision the brain makes about how much danger you are in.",
  readingMinutes: 7,
  html: `
<h2 id="The_wire_that_is_not_a_wire">The wire that is not a wire</h2>
<p>Descartes drew the standard picture in the seventeenth century: a fire, a foot, a thread running to the brain, ringing a bell. It was a reasonable guess and it held for three hundred years.</p>
<p>The first serious break came in 1965, when Ronald Melzack and Patrick Wall proposed gate control theory. Signals from the periphery, they argued, pass through a modulating checkpoint in the spinal cord that can amplify or suppress them — and crucially, that checkpoint receives instructions descending from the brain. The channel runs both ways. The brain is not a passive recipient; it is actively deciding how much of the incoming traffic to let through.</p>
<p>You demonstrate this constantly without noticing. Rubbing a banged elbow genuinely helps, because touch signals travelling on faster fibres reach the gate first and reduce what gets through. Distraction reduces pain measurably. Anxiety and attention increase it, not psychologically but physiologically, by opening the gate.</p>

<h2 id="Nociception_is_not_pain">Nociception is not pain</h2>
<p>The clean way to hold this is to separate two things that ordinary language conflates.</p>
<p><strong>Nociception</strong> is the detection of potentially damaging stimuli by specialised nerve endings and their transmission to the spinal cord. It is a measurement, it happens in the body, and it can occur under general anaesthesia with no pain whatsoever.</p>
<p><strong>Pain</strong> is the conscious experience, produced by the brain after weighing that input against a great deal of other information: context, memory, expectation, what else is happening, what the injury means for what you need to do next.</p>
<p>The two frequently disagree, and the disagreements are the most informative cases. Substantial injuries can produce no pain in the moment — the classic reports come from battlefields and accidents, where the brain apparently judges that escape matters more than protecting the wound. Conversely, a great deal of severe pain occurs with no detectable damage at all. Phantom limb pain is the starkest example: agony precisely located in a limb that does not exist, which no signal-transmission model can accommodate.</p>

<h2 id="When_the_system_learns_the_wrong_lesson">When the system learns the wrong lesson</h2>
<p>Acute pain is useful. It stops you walking on a broken ankle, and the rare people born unable to feel it — a genetic condition affecting sodium channels in nociceptive neurons — accumulate terrible injuries and typically die young. Pain is protective, and its absence is not a gift.</p>
<p>Chronic pain is a different phenomenon wearing the same name. Persisting beyond healing, it stops being a symptom and becomes the condition, and its mechanism is largely one of learning. Repeated signalling makes the pathway more efficient: pain-transmitting neurons become more excitable, the threshold falls, and the nervous system amplifies its own input. This is central sensitisation, and it is a form of plasticity — the same process underlying any skill. The nervous system has become good at producing pain.</p>
<p>The practical consequence is that treating chronic pain as though it were prolonged acute pain fails, because there is often nothing at the site to fix. Imaging finds structural abnormalities in large numbers of people with no symptoms at all, and the correlation between what a scan shows and what a patient feels is far weaker than either patients or clinicians expect. Explaining that to someone in pain is delicate and important, because "your pain is real and it is not caused by ongoing damage" is a genuinely difficult sentence to deliver.</p>

<h2 id="Placebo,_and_why_it_is_not_nothing">Placebo, and why it is not nothing</h2>
<p>Pain is the domain where placebo effects are strongest and best understood, and dismissing them as imagination misses what is actually happening.</p>
<p>Placebo analgesia has a traceable mechanism. Expectation of relief triggers release of endogenous opioids, and administering naloxone — which blocks opioid receptors — abolishes the effect. The relief is produced by the same chemistry a drug would engage. It is a real pharmacological event, initiated by belief.</p>
<p>The reverse exists too. Nocebo effects, where expectation of harm produces symptoms, account for a substantial fraction of reported side effects in trials, and warning patients about a side effect measurably increases its incidence.</p>
<p>Context does extraordinary work here. The same drug is more effective when the patient sees it administered than when it is delivered covertly by an infusion pump. Larger pills work better than small ones, injections better than tablets, and expensive-looking treatments better than cheap ones — findings that are embarrassing for medicine and entirely consistent with a system in which the brain's assessment of the situation determines the output.</p>

<h2 id="The_opioid_problem">The opioid problem</h2>
<p>Opioids remain the most effective drugs available for acute severe pain, and they work by mimicking the body's own suppression system. Their failure in chronic pain has been one of the costliest medical errors of the past half-century.</p>
<p>Tolerance develops, requiring escalating doses. Opioid-induced hyperalgesia can make patients more sensitive to pain over time, so the treatment worsens the condition. And the drugs' effect on mood makes them uniquely liable to dependence. The American epidemic followed aggressive marketing of long-acting formulations on claims about addiction risk that were not supported, and a widely repeated figure about low addiction rates that originated in a five-sentence letter to a journal describing hospitalised patients, subsequently cited hundreds of times as though it were a study.</p>
<p>What actually helps chronic pain is less satisfying and more effective: graded exercise, which restores function without waiting for pain to resolve; cognitive and acceptance-based therapies, which change the brain's threat assessment rather than the input; sleep, which affects pain thresholds directly; and education about the mechanism, which reliably reduces pain on its own. None of these are placebos and none of them mean the pain is imagined. They work because pain is generated by a system that responds to context, and changing the context is a legitimate way to change the output.</p>
`,
};
