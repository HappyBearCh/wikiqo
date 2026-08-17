import type { RewrittenArticle } from "./types";

export const venom: RewrittenArticle = {
  slug: "venom",
  title: "Venom: a chemical weapon that keeps being turned into medicine",
  sourceTitle: "Venom",
  dek: "It is expensive to make, so animals meter it carefully — and its precision at hitting biological targets is exactly what drug developers want.",
  standfirst:
    "Venom is not a single poison but a cocktail, often of dozens or hundreds of separate compounds, each evolved to disable a specific piece of physiological machinery. That precision is why envenomation is so hard to treat and why the same molecules keep reappearing as pharmaceuticals. Several drugs taken by millions of people every day were derived from things that evolved to kill.",
  readingMinutes: 7,
  html: `
<h2 id="Definitions">Venom, poison, toxin</h2>
<p>The terms are used interchangeably in ordinary speech and mean different things.</p>
<p>A <strong>toxin</strong> is any biologically produced substance that causes harm. <strong>Venom</strong> is a toxin actively delivered into another animal through a wound — a fang, a sting, a spine, a harpoon. <strong>Poison</strong> is a toxin that causes harm on being eaten or touched, with no delivery apparatus.</p>
<p>The distinction is about mechanism rather than severity. A venomous snake bites you; a poisonous frog is dangerous if you eat it. Most venoms are harmless swallowed, because they are proteins and the digestive system breaks them down — which is why snake handlers historically drank venom to demonstrate confidence, and why doing so with an ulcer would be a serious mistake.</p>
<p>Delivery is the expensive part evolutionarily. Producing a toxin is comparatively easy; evolving the gland, the duct, the injection structure and the behaviour to use it is a substantial investment, which is why venom systems are relatively rare and why they tend to be elaborated once they exist.</p>

<h2 id="Metering">Venom is costly, so it is rationed</h2>
<p>Regenerating a spent venom supply takes days to weeks and is metabolically expensive. Animals treat it accordingly.</p>
<p>Venom metering is well documented: snakes deliver larger doses to larger prey, more to unfamiliar prey, and more when striking to kill than when striking defensively. They are assessing and adjusting.</p>
<p>This produces the <strong>dry bite</strong>, which is a substantial fraction of defensive snake bites on humans — perhaps a quarter to a half depending on species. A snake biting something far too large to eat gains nothing by spending venom on it, and the bite is a warning.</p>
<p>It also explains the warning displays. Rattling, hooding, hissing and bright aposematic colouring all exist so that the animal does not have to use the weapon. A defensive venom system that is frequently discharged is failing at its job.</p>
<p>The same logic explains why a threatened animal that has already struck once may be more dangerous or less dangerous depending on species and circumstances, and why juveniles of some species are disproportionately hazardous — less control over metering, not more potent venom, though the folklore usually gets this backwards.</p>

<h2 id="What_it_does">What the components actually do</h2>
<p>Venoms are mixtures, and the composition varies between species, between populations of the same species, and with the animal's age and diet. Broadly the components fall into functional classes.</p>
<p><strong>Neurotoxins</strong> attack signalling between nerve and muscle. Some block acetylcholine receptors at the neuromuscular junction, producing flaccid paralysis — the victim's muscles cannot be told to contract, and death comes from respiratory failure while the person may remain conscious. Others block or force open ion channels, causing continuous firing and rigid paralysis. Elapids — cobras, mambas, kraits, sea snakes — rely mainly on these.</p>
<p><strong>Haemotoxins</strong> attack blood. Some destroy red cells; some activate the clotting cascade so comprehensively that it exhausts the available clotting factors and the victim then bleeds uncontrollably, which is a counterintuitive route to haemorrhage. Vipers are the classic source.</p>
<p><strong>Cytotoxins</strong> destroy tissue directly, digesting cell membranes and structural protein. These cause the severe local necrosis that leads to amputation, and they are why the long-term disability from snakebite is often worse than the acute risk.</p>
<p>Many venoms are effectively pre-digestive. A viper that immobilises prey and begins breaking down its tissue before swallowing has outsourced part of digestion to the strike.</p>

<h2 id="Antivenom">Treatment has barely changed in a century</h2>
<p>Antivenom is made essentially as it was in the 1890s. A horse or sheep is injected with sub-lethal, gradually increasing doses of venom; the animal produces antibodies; its plasma is collected and the antibody fraction purified.</p>
<p>The limitations are severe and well known.</p>
<p>It is <strong>species-specific</strong>. Antivenom raised against one snake may do nothing for another, and venom composition varies enough geographically that a product effective in one region can fail in another. Polyvalent products cover several species at the cost of potency against each.</p>
<p>It carries <strong>immunological risk</strong>, being foreign animal protein. Anaphylaxis and serum sickness are real hazards, so administration requires monitoring that is unavailable in many of the places where bites occur.</p>
<p>It requires a <strong>cold chain</strong> and is expensive, which puts it out of reach exactly where it is needed.</p>
<p>And it does not reverse tissue destruction. Antivenom neutralises circulating venom; necrosis already underway proceeds regardless, which is why prompt treatment matters so much and why delay costs limbs.</p>
<p>Snakebite kills on the order of a hundred thousand people a year and disables several times that number, overwhelmingly among agricultural workers in South Asia and sub-Saharan Africa. The World Health Organization classified it as a neglected tropical disease in 2017, having removed it from the list a few years earlier for lack of attention — an administrative sequence that describes the problem precisely. Research into small-molecule inhibitors and monoclonal antibodies that would be cheap, stable and broadly effective is ongoing and underfunded relative to the burden.</p>

<h2 id="Medicine">The drugs that came out of it</h2>
<p>Venom components are attractive to pharmacology for the same reason they are dangerous: they bind specific molecular targets with extremely high affinity, having been refined by selection to do exactly that. A molecule that shuts down one receptor and nothing else is what drug discovery is trying to produce.</p>
<p><strong>ACE inhibitors</strong>, among the most widely prescribed blood pressure drugs in the world, derive from the venom of the Brazilian pit viper <em>Bothrops jararaca</em>. Brazilian workers exposed to it collapsed from hypotension; a component was found to potentiate bradykinin by inhibiting the angiotensin-converting enzyme; captopril was developed from it and approved in 1981, and the entire drug class followed.</p>
<p><strong>Exenatide</strong>, for type 2 diabetes, comes from a peptide in Gila monster saliva. It resembles a human hormone that stimulates insulin release, and — crucially — resists the enzyme that degrades the human version within minutes, so it lasts hours instead. The reptile solved a pharmacokinetic problem.</p>
<p><strong>Ziconotide</strong> is derived from cone snail venom and blocks a calcium channel involved in pain signalling. It is far more potent than morphine, does not produce tolerance, and must be delivered directly into spinal fluid, which limits it to severe refractory pain.</p>
<p><strong>Eptifibatide</strong>, an antiplatelet drug, is based on a rattlesnake venom peptide.</p>
<p>Cone snails alone produce an estimated hundreds of distinct peptides per species across several hundred species, the overwhelming majority uncharacterised. The general point is that venomous animals have been running a very long combinatorial screen against nervous and circulatory systems, and the results are free to anyone willing to look — which is a reasonable argument for conserving the animals that carry them.</p>
`,
};
