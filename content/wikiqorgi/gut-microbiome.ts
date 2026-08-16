import type { RewrittenArticle } from "./types";

export const gutMicrobiome: RewrittenArticle = {
  slug: "gut-microbiome",
  title: "The gut microbiome: the organ you were not born with",
  sourceTitle: "Human microbiome",
  dek: "Trillions of bacteria that digest what you cannot, train your immune system, and are the subject of an enormous amount of overclaiming.",
  standfirst:
    "You are carrying roughly as many bacterial cells as human ones, most of them in the large intestine, collectively holding several hundred times more genes than your own genome. That much is solid. Almost everything downstream of it — what those microbes do, and what changing them can achieve — is a field where genuine discoveries and commercial nonsense have become difficult to separate.",
  readingMinutes: 7,
  html: `
<h2 id="Correcting_the_numbers">Correcting the numbers</h2>
<p>The figure everyone repeats is that bacterial cells outnumber human cells ten to one. It came from a back-of-envelope estimate in 1972 and was never seriously checked until 2016, when a careful recount put the ratio at roughly one to one — about 38 trillion bacteria against 30 trillion human cells, and a single bowel movement shifts the balance.</p>
<p>The correction matters less than it sounds, because the striking number was always the genetic one. Your genome holds around 20,000 genes; the collective microbial genome in your gut holds several million. Whatever metabolic capabilities that community has, they vastly exceed your own, and they are not inherited in the usual way.</p>
<p>Composition varies enormously between people. Two healthy adults may share only a modest fraction of their bacterial species, which makes "a normal microbiome" a much harder concept than it first appears — and makes claims about correcting an abnormal one correspondingly slippery.</p>

<h2 id="What_they_demonstrably_do">What they demonstrably do</h2>
<p>Several functions are well established and not seriously disputed.</p>
<p><strong>They digest what you cannot.</strong> Human enzymes cannot break down most dietary fibre. Gut bacteria ferment it, and in doing so produce short-chain fatty acids — butyrate in particular, which is the preferred fuel of the cells lining the colon. Those cells are, oddly, fed by microbes rather than by blood-borne glucose. Fibre's health benefits appear to run substantially through this route, which reframes dietary fibre as food for the microbiome rather than as roughage.</p>
<p><strong>They synthesise vitamins.</strong> Vitamin K and several B vitamins are produced by gut bacteria in useful quantities.</p>
<p><strong>They occupy the space.</strong> A dense established community makes it hard for a newcomer to gain a foothold — colonisation resistance. The clearest demonstration is what happens when it is destroyed: broad-spectrum antibiotics can clear enough of the community for <em>Clostridioides difficile</em> to take over, causing severe and sometimes fatal colitis.</p>
<p><strong>They train the immune system.</strong> Germ-free mice, raised with no microbes at all, develop badly formed immune tissue and abnormal responses. A large part of immune development consists of learning which organisms to tolerate, and that education requires organisms to be present.</p>

<h2 id="The_transplant_that_works">The transplant that works</h2>
<p>Faecal microbiota transplantation is the field's one unambiguous therapeutic success, and it is worth dwelling on because it sets the standard the rest of the field has not met.</p>
<p>For recurrent <em>C. difficile</em> infection, transferring stool from a healthy donor into the patient's colon cures the great majority of cases — better than the antibiotics that usually caused the problem, and dramatically so. The trials were stopped early because withholding it from the control group became unethical.</p>
<p>Attempts to extend the approach have been far less impressive. Trials for inflammatory bowel disease, obesity, metabolic syndrome and various neurological conditions have produced mixed and mostly modest results. The pattern is instructive: it works spectacularly for a condition that consists of a missing community, and inconsistently for conditions where the microbiome is one contributing factor among many.</p>

<h2 id="The_gut_brain_claims">The gut–brain claims</h2>
<p>This is where the evidence and the headlines diverge most sharply.</p>
<p>There is a real communication system. The vagus nerve carries signals from gut to brain, gut bacteria produce neuroactive compounds, and most of the body's serotonin is made in the gut — though that last fact is routinely misused, since gut serotonin does not cross into the brain and is doing something else entirely.</p>
<p>The animal evidence is genuinely striking. Transferring gut bacteria from anxious mice to calm ones can transfer anxious behaviour, and germ-free mice show altered stress responses that are partially corrected by colonisation. These are real, replicated results.</p>
<p>The human evidence is much thinner. Most studies are observational, meaning they find that people with a condition have a different microbiome — which does not establish direction. Depression changes appetite, diet and activity, all of which change the microbiome, so finding a difference is exactly what you would expect whichever way causation runs. Intervention trials in humans, where a probiotic is given and mood measured, have produced small and inconsistent effects.</p>
<p>The honest summary is that the gut-brain axis is real, that its importance in human psychiatric conditions is unresolved, and that the confidence of the popular coverage is not supported by the trials.</p>

<h2 id="What_the_shelf_products_do">What the shelf products do</h2>
<p>Commercial probiotics face a structural problem: for most strains sold, the organisms pass through and do not establish. They can have effects while present — some strains have decent evidence for shortening antibiotic-associated diarrhoea and for infant colic — but the notion that a capsule permanently reshapes a community of trillions is not supported.</p>
<p>Prebiotics, meaning fibres that feed the bacteria already there, have a stronger theoretical basis, and the most reliable version of the advice is also the least commercial: eat a varied diet with plenty of plant fibre, which is what the evidence has supported since long before anyone sequenced a microbiome. Microbiome testing kits, which sequence a stool sample and issue personalised recommendations, currently outrun the science by a considerable margin — the field cannot yet say what an optimal composition is, so it cannot tell you how far you are from it.</p>

<h2 id="What_shapes_it">What shapes it</h2>
<p>Colonisation begins at birth, and delivery mode makes an early difference — vaginally born infants acquire maternal vaginal and gut organisms, caesarean-born infants acquire more skin and environmental ones. The difference narrows over the first years, and attempts to correct it by swabbing newborns remain experimental.</p>
<p>Breast milk is a remarkable piece of evidence for how deep the relationship runs. It contains complex sugars that human infants cannot digest at all. They are there to feed specific bacteria — the milk is provisioning the microbiome directly, which is not something that evolves by accident.</p>
<p>After infancy the community is fairly stable, and diet shifts it within days but not permanently. Antibiotics perturb it substantially, and recovery takes weeks to months, sometimes with lasting absences. That is the strongest practical implication the field has produced so far, and it is not a supplement recommendation: it is a reason to take antibiotics when they are needed and not when they are not.</p>
`,
};
