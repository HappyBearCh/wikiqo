import type { RewrittenArticle } from "./types";

export const replicationCrisis: RewrittenArticle = {
  slug: "replication-crisis",
  title: "The replication crisis: a large fraction of published findings are not real",
  sourceTitle: "Replication crisis",
  dek: "When researchers systematically repeated well-known experiments, roughly half of them failed to produce the original result.",
  standfirst:
    "Beginning around 2011, several fields discovered that a substantial share of their published findings could not be reproduced when the experiments were run again carefully. The immediate cause was not fraud, which is rare. It was a set of ordinary practices that everybody used, that nobody considered dishonest, and that reliably manufacture statistically significant results from data containing nothing at all.",
  readingMinutes: 8,
  html: `
<h2 id="The_numbers">What the audits found</h2>
<p>The Reproducibility Project in psychology repeated 100 studies published in leading journals, working with original materials and often with the original authors' input. Of the 97 that had reported significant effects, 36 did so on replication. Where effects did appear, their average size was about half the original.</p>
<p>Cancer biology produced similar results. An effort to replicate high-profile preclinical papers found a substantial proportion could not be reproduced, and the project's most quoted finding was almost incidental: a large share of the papers did not describe their methods in enough detail to attempt a replication at all, and many original authors would not supply the missing information.</p>
<p>Economics, in a replication of experimental papers from top journals, fared somewhat better at around sixty per cent. A large project in social science using registered replications with high statistical power reproduced roughly thirteen of twenty-one findings from <em>Nature</em> and <em>Science</em>, again with effects around half the original size.</p>
<p>Some specific casualties were prominent and had escaped the laboratory entirely. Ego depletion — the idea that willpower is a finite resource drained by use — supported an enormous literature and failed a large multi-lab replication. Priming effects, in which exposure to words about age caused people to walk more slowly, did not survive. Power posing's hormonal claims collapsed, and one of the original authors publicly disavowed them, which was the most honourable act in the entire episode.</p>

<h2 id="P_hacking">How honest people produce false results</h2>
<p>The core problem is that researchers make many decisions during analysis, each defensible in isolation, and the freedom to make them after seeing the data is enough to generate significance from noise.</p>
<p>Should outliers be excluded, and beyond what threshold? Should the analysis control for gender? Should the two similar measures be combined or reported separately? Should data collection stop now or continue to a rounder number? Should this condition, which did not work, be reported?</p>
<p>Every one of these has a reasonable answer, and choosing among the reasonable answers by which produces a cleaner result is what produces the crisis. A well-known demonstration showed that a handful of such flexibilities together raise the chance of finding a spurious significant result from the nominal five per cent to over sixty. The authors made the point unforgettably by running a real experiment, with real participants and entirely standard analysis choices, that established listening to a particular song made people two years younger — not feel younger, be younger, by date of birth.</p>
<p>Andrew Gelman's "garden of forking paths" describes why this happens even without any intent to cheat. A researcher need not try twenty analyses; they need only have been prepared to run a different one had the data looked different. The result is conditional on the data in a way the p-value assumes it is not.</p>
<p>The related error is HARKing — hypothesising after the results are known. An unexpected finding is written up as though it had been the prediction all along, which converts an exploratory result that requires confirmation into a confirmatory result that appears to have received it.</p>

<h2 id="Publication_bias">The filter on what gets published</h2>
<p>Journals prefer positive, novel, surprising results. Studies finding nothing are harder to publish, and researchers learn not to submit them — the file drawer, a term coined in 1979, long before the crisis was acknowledged.</p>
<p>The consequence is that the published literature is a biased sample of the research conducted. If twenty groups test an ineffective treatment, one will find a significant effect by chance, and that one is likelier to appear in print. A reader sees a positive finding and no trace of the nineteen null results.</p>
<p>Meta-analysis, which pools published studies, inherits the bias and amplifies it into an authoritative-looking summary. Funnel plots and related techniques attempt to detect the missing studies from the shape of the distribution, and they work imperfectly.</p>
<p>Direct replications were, until recently, close to unpublishable in most journals on the grounds of not being novel — which meant the single most important check on a result had no route into the record. That, more than any individual practice, is the institutional failure at the centre of the episode.</p>

<h2 id="Incentives">Why nobody stopped it</h2>
<p>The behaviour makes sense given the incentives, which is why exhortation was never going to fix it.</p>
<p>Careers depend on publications in high-status journals. Those journals want novelty and significance. Grants go to people with such publications, and hiring and tenure committees count them. Nobody has ever been promoted for a well-conducted null result or for confirming someone else's finding.</p>
<p>Goodhart's law applies exactly: a measure adopted as a target stops measuring what it did. Publication count and citation count became targets, and the practices that optimise them diverged from the practices that produce reliable knowledge.</p>
<p>Statistical training compounded it. Many researchers were taught significance testing as a procedure to execute rather than a piece of reasoning to understand, and a p-value below 0.05 was treated as meaning the finding is real — which it does not, and never did. The threshold was a rough convention Fisher suggested for deciding what merited a second look, and it hardened into a publication criterion.</p>
<p>Statistical power was the quiet disaster underneath. Typical studies in several fields were badly underpowered, with samples far too small to detect the effects being sought. An underpowered study that nonetheless finds significance has necessarily found a large effect, and if the true effect is small, the estimate must be inflated. Low power does not merely produce false negatives; it guarantees that the positives which survive are exaggerated.</p>

<h2 id="Fixes">What has actually changed</h2>
<p>The response has been more substantial than most scientific controversies produce, and much of it is structural rather than exhortatory.</p>
<p>Pre-registration puts hypotheses and analysis plans in a time-stamped public record before data collection, which converts flexible analysis into a visible deviation rather than an invisible choice. Registered reports go further: the journal reviews and accepts the design before results exist, and publishes whichever way it comes out. Studies published this way report null results at dramatically higher rates than conventional papers — the cleanest available measurement of how much the old system distorted.</p>
<p>Data and code sharing is now required by many journals and funders, which enables reanalysis and has already surfaced errors that review never would.</p>
<p>Multi-lab replication projects run the same protocol across dozens of sites with large combined samples, producing estimates far more reliable than any single study and settling several disputes.</p>
<p>Sample sizes have grown, statistical training has improved, and effect sizes with confidence intervals are increasingly reported instead of bare significance tests. Some have argued for lowering the threshold to 0.005; others for abandoning significance testing entirely. The argument continues.</p>

<h2 id="The_optimistic_reading">How to read all this</h2>
<p>It is worth being precise about what the crisis does and does not show.</p>
<p>It is not evidence that science does not work. It is evidence that science worked — the problem was found by scientists, using scientific methods, and published. No other system of knowledge production has ever audited itself this way, and the fields with the loudest crises are the ones that ran the audits.</p>
<p>It is also not a warrant for dismissing findings one dislikes. The lesson is about specific, identifiable weaknesses: small samples, flexible analysis, surprising single results, and effects that have never been independently reproduced. A finding with a large effect, a preregistered design, replication across independent groups, and a plausible mechanism is in a different category, and treating all published claims as equally suspect is a misreading that has been put to considerable bad use.</p>
<p>The practical upshot for a reader is a short checklist. How many participants? Was it preregistered? Has anyone else reproduced it? Is the effect size plausible, or does it require an implausibly large influence from a trivial intervention? Those four questions filter most of what went wrong.</p>
`,
};
