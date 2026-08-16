import type { RewrittenArticle } from "./types";

export const artificialIntelligence: RewrittenArticle = {
  slug: "artificial-intelligence",
  title: "Artificial intelligence: seventy years of moving the goalposts",
  sourceTitle: "Artificial intelligence",
  dek: "A field defined less by what machines can do than by what we stop calling intelligent once they can do it.",
  standfirst:
    "Artificial intelligence has no stable definition, and that is not sloppiness — it is the central fact about the field. Every capability that once counted as proof of machine intelligence became, on the day it was achieved, an ordinary piece of software. Chess. Translation. Speech. The definition of AI is whatever has not been solved yet.",
  readingMinutes: 9,
  html: `
<h2 id="The_founding_bet">The founding bet</h2>
<p>The field was named at a 1956 workshop in Dartmouth, whose proposal contained one of the more consequential sentences in the history of computing: that "every aspect of learning or any other feature of intelligence can in principle be so precisely described that a machine can be made to simulate it." The organisers thought a summer's work by ten people might make significant progress. They were wrong by about seventy years and counting, but the underlying bet — that thinking is a kind of information processing, and therefore substrate-independent — has never been refuted either.</p>
<p>Alan Turing had reframed the question six years earlier. Rather than ask whether machines can think, a question he considered "too meaningless to deserve discussion", he proposed a behavioural test: can a machine hold a text conversation indistinguishable from a human's? The imitation game sidestepped metaphysics entirely and set the field's tone. AI has always measured itself by performance, not by understanding.</p>

<h2 id="Two_traditions_repeatedly_reversed">Two traditions, repeatedly reversed</h2>
<p>For most of its history the field ran on two rival intuitions about where intelligence comes from.</p>
<p>The <strong>symbolic</strong> tradition held that thinking is the manipulation of structured symbols according to rules. Encode facts, encode logic, and reason from them. It produced theorem provers, planners, and — in its commercially successful form — expert systems that captured a specialist's rules of thumb in explicit if-then chains. Its outputs could be inspected and explained, which remains its great advantage. Its weakness was the knowledge bottleneck: every rule had to be written by hand, and the number of rules required to handle an ordinary messy situation turns out to be effectively unbounded.</p>
<p>The <strong>connectionist</strong> tradition held that intelligence emerges from many simple units adjusting their connections in response to data. No rules, only weights. It was largely abandoned after a 1969 critique exposed the limits of the simplest networks, revived in the 1980s when backpropagation made multi-layer training practical, and dismissed again as impractical through the 1990s. Then it won.</p>
<p>It won for unglamorous reasons. The algorithms of 2012 were not radically better than those of 1990. What changed was the arrival of enormous labelled datasets, and the discovery that graphics processors — built to render video games — were nearly ideal for the dense matrix arithmetic neural networks require. Compute and data, not insight, broke the deadlock.</p>

<h2 id="What_machine_learning_actually_does">What machine learning actually does</h2>
<p>Underneath the terminology, a modern AI system is doing curve fitting at enormous scale. It has a very large number of adjustable parameters, a measure of how wrong its current outputs are, and a procedure for nudging every parameter slightly in the direction that reduces that error. Repeat several trillion times.</p>
<p>The variations matter mainly in what supplies the error signal:</p>
<ul>
<li><strong>Supervised learning</strong> uses labelled examples — images tagged with what they contain, sentences paired with translations. It is the workhorse, and its cost is the labelling.</li>
<li><strong>Unsupervised and self-supervised learning</strong> manufacture the signal from the data itself, most powerfully by hiding part of the input and asking the model to predict it. This is what made training on the raw text of the internet possible, and it is why language models exist.</li>
<li><strong>Reinforcement learning</strong> supplies no correct answers, only rewards for outcomes, and lets the system discover its own strategy. It is how programs learned to play Go and StarCraft at superhuman level, and it is expensive, unstable, and unreasonably effective when it works.</li>
</ul>
<p>Deep learning simply means stacking many layers, so that early layers learn crude features — edges, textures, word fragments — and later layers compose them into something abstract. Nobody specifies what the layers should represent. That is the point, and also the problem: the representations are learned, distributed across millions of parameters, and largely uninterpretable.</p>

<h2 id="The_architecture_that_ate_the_field">The architecture that ate the field</h2>
<p>In 2017 a paper with the memorable title <em>Attention Is All You Need</em> introduced the transformer, an architecture that processes an entire sequence at once and lets every element attend directly to every other. Its predecessors read text word by word, which made them slow to train and forgetful over long passages. The transformer's parallelism turned training from a sequential grind into something that could absorb as much hardware as anyone could buy.</p>
<p>What followed was less a series of breakthroughs than a demonstration of scale. Larger models trained on more text kept getting better, and — unexpectedly — kept acquiring abilities nobody had trained for: arithmetic, translation between languages barely present in the data, following instructions expressed in plain prose. Whether these are genuinely new capabilities or the gradual surfacing of patterns already latent in the data is actively disputed. So is the more fundamental question of whether a system trained to predict the next token can be said to understand anything at all. The honest position is that we do not have a test that settles it, which returns the field neatly to where Turing left it.</p>

<h2 id="Where_it_is_already_ordinary">Where it is already ordinary</h2>
<p>The most reliable sign of a mature technology is that it stops being mentioned. Machine learning already routes your packets, filters your mail, ranks your search results, prices your flights, reads deposited cheques, flags fraudulent transactions, and transcribes your voice. In medicine, image models match specialists at spotting diabetic retinopathy and certain cancers; in structural biology, prediction of protein folding from sequence has gone from a decades-old grand challenge to a solved routine that has reshaped drug discovery.</p>
<p>The pattern is consistent. AI performs best on narrow, well-specified tasks with abundant data and a clear notion of correct — and worst wherever the world is open-ended, the data is thin, or "correct" is contested.</p>

<h2 id="The_failure_modes_are_structural">The failure modes are structural</h2>
<p>Most of what goes wrong with AI systems follows from how they are built rather than from bugs.</p>
<p><strong>They inherit their data.</strong> A model trained on historical hiring decisions learns historical hiring prejudices and applies them at scale, with the added authority of appearing to be mathematics. Bias in these systems is not an anomaly to be patched out; it is the training data, faithfully reproduced.</p>
<p><strong>They cannot explain themselves.</strong> A decision distributed across billions of weights has no summary. That is tolerable for film recommendations and unacceptable for parole decisions, loan refusals, and diagnoses — which is why interpretability research and the regulatory demand for a "right to an explanation" both exist.</p>
<p><strong>They are confidently wrong.</strong> A generative model produces fluent, well-formed output whether or not the content is true, because fluency is what it was optimised for. It has no internal flag distinguishing recall from invention.</p>
<p><strong>They are brittle.</strong> Small, carefully chosen perturbations — imperceptible to a person — can flip a classifier's answer entirely, which is a security problem wherever these systems face an adversary.</p>
<p>And they are expensive. Training a frontier model consumes energy and capital on a scale that concentrates the technology in a handful of organisations, a governance question at least as significant as any technical one.</p>

<h2 id="The_argument_about_what_comes_next">The argument about what comes next</h2>
<p>Serious people hold incompatible views about where this goes, and the disagreement is not resolvable with current evidence. One camp expects that scaling current methods, with refinements, leads to systems of broadly human-level generality within decades, and treats the alignment of such systems with human intentions as an urgent open problem. Another holds that prediction over text is fundamentally the wrong shape for general intelligence — that no amount of it produces grounded understanding, causal reasoning, or goals — and that the field will need an idea it does not yet have.</p>
<p>Both camps agree on the near-term realities, which are less speculative and no less serious: labour displacement concentrated in specific occupations, an enormous increase in the ease of manufacturing convincing false material, surveillance capability sold as convenience, and the quiet transfer of consequential decisions to systems nobody can fully audit. Those are not future problems awaiting a breakthrough. They are consequences of what already works.</p>
`,
};
