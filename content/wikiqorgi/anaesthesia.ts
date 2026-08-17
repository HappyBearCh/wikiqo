import type { RewrittenArticle } from "./types";

export const anaesthesia: RewrittenArticle = {
  slug: "anaesthesia",
  title: "Anaesthesia: the gases sat in laboratories for fifty years while surgeons cut people awake",
  sourceTitle: "Anesthesia",
  dek: "Ether and nitrous oxide were known, synthesised and used recreationally decades before anyone thought to apply them to surgery.",
  standfirst:
    "The most striking fact about anaesthesia is not its discovery but its delay. Both ether and nitrous oxide were available, well characterised, and being inhaled at parties for entertainment for roughly half a century before anyone connected them to the problem of surgical pain. In the meantime operations were performed on conscious patients held down by assistants, and speed was the surgeon's most valued skill. Nobody has a fully satisfying explanation for the gap.",
  readingMinutes: 8,
  html: `
<h2 id="Before">What surgery was</h2>
<p>Before 1846, an operation was a controlled assault. Patients were restrained by strong assistants or strapped to the table, given alcohol or opium of limited effect, and sometimes bled to unconsciousness. Screaming was expected, and hospitals sited operating theatres away from the wards for that reason.</p>
<p>Speed was the primary surgical virtue, because the duration of the procedure was the duration of the agony and because shock killed. Robert Liston, the most celebrated British operator of the era, could take a leg off in under thirty seconds, and his patients did better than most for precisely that reason.</p>
<p>The constraint this imposed was severe. Surgery was limited to the body's surface and extremities — amputations, bladder stones, superficial tumours. Nothing that required opening the abdomen or the chest was feasible, because such an operation cannot be done in thirty seconds and no conscious patient could tolerate it. Delicacy was impossible; the surgeon was working against a struggling person.</p>
<p>Many patients simply declined, preferring the disease.</p>

<h2 id="The_delay">The fifty-year gap</h2>
<p>Nitrous oxide was synthesised by Joseph Priestley in 1772. Humphry Davy investigated it thoroughly in 1800, described its intoxicating effects, noted that it relieved the pain of an erupting wisdom tooth, and wrote explicitly that it might be usable in surgical operations. He then moved on to other work, and nobody followed it up.</p>
<p>Ether was older still, known since the sixteenth century, and its effects on inhalation were familiar.</p>
<p>What both gases were actually used for was entertainment. Ether frolics and laughing gas demonstrations were popular amusements in Britain and America through the early nineteenth century — travelling showmen would dose volunteers for a paying audience, and medical students held ether parties.</p>
<p>So for decades, people staggered around insensible for fun in the same towns where patients were being held down for amputations. The suggestion that it might be applied medically had been published by one of the most famous scientists of the age.</p>
<p>Explanations offered include the assumption that pain was an inevitable and perhaps necessary part of healing, the low status of pain relief as a medical goal, a general expectation that surgery would hurt, and the association of the gases with disreputable entertainment. None of these is fully convincing, and the episode remains a standing example of how a solution can sit in plain sight next to a problem without anyone joining them.</p>

<h2 id="The_demonstration">1846, and a bitter fight over credit</h2>
<p>Crawford Long, a Georgia physician, used ether for an operation in 1842 and did not publish for seven years, which cost him the priority he otherwise had.</p>
<p>Horace Wells, a dentist, demonstrated nitrous oxide for a tooth extraction in Boston in 1845. The patient cried out, the audience jeered, and Wells was discredited. The dose had probably been insufficient; nitrous oxide alone is a weak anaesthetic and is difficult to push far enough without also cutting off oxygen.</p>
<p>William Morton, Wells's former partner, used ether instead at Massachusetts General Hospital on 16 October 1846. The surgeon, John Collins Warren, removed a tumour from a patient's neck while the man lay still and silent. Warren turned to the audience and said that this was no humbug.</p>
<p>The news travelled extraordinarily fast for the period — ether was in use in London within weeks and across Europe within months.</p>
<p>The aftermath was ugly. Morton had administered the ether disguised with dye and scent, calling it Letheon, and attempted to patent it, which the profession regarded as unacceptable for something of this importance. He, Wells and Charles Jackson — a chemist who claimed to have suggested it to Morton — spent years in public disputes over priority and money. Wells took his own life in 1848. Morton died impoverished at 48. Jackson died in an asylum. Long, who had done it first and said nothing, had the quietest life of the four.</p>

<h2 id="Chloroform">Chloroform, and the argument about women</h2>
<p>James Young Simpson in Edinburgh introduced chloroform in 1847, testing it on himself and his colleagues after dinner by inhaling candidate compounds until they fell over — a research method that would not survive an ethics committee.</p>
<p>Chloroform was more potent than ether, faster acting, non-flammable — which mattered enormously in rooms lit by open flame — and pleasanter to inhale. It was also considerably more dangerous, with a narrow margin between an anaesthetic dose and a fatal one, and it caused sudden cardiac deaths in otherwise healthy patients. It also damaged the liver. It was eventually abandoned for these reasons.</p>
<p>Simpson's use of it in childbirth provoked genuine opposition, some of it theological, on the argument that the pain of labour was divinely ordained. The extent of this objection has probably been overstated in retrospect, and much of the medical resistance concerned safety for the infant rather than scripture.</p>
<p>It ended largely for reasons of status. John Snow — the same physician who traced the Broad Street cholera outbreak — administered chloroform to Queen Victoria for the birth of Prince Leopold in 1853. Royal use settled the question faster than any argument, and the practice became fashionable.</p>

<h2 id="How_it_works">The mechanism, which is still not fully understood</h2>
<p>General anaesthesia produces four distinct effects: unconsciousness, amnesia, immobility, and blunting of the stress response. These are separable — they are produced by different drugs acting at different sites, and modern practice combines agents deliberately rather than pushing one drug hard enough to achieve all four.</p>
<p>The old explanation, the Meyer–Overton correlation, noted that anaesthetic potency tracks solubility in lipid almost perfectly across chemically unrelated compounds, and concluded that anaesthetics dissolve into cell membranes and disrupt them non-specifically. The correlation is real and striking. The conclusion is now considered wrong.</p>
<p>The current view is that anaesthetics bind to specific protein targets — chiefly GABA-A receptors, which they potentiate, and NMDA receptors, which some block — and that the lipid correlation reflects how these drugs reach hydrophobic binding pockets rather than what they do on arrival.</p>
<p>What remains genuinely unresolved is how any of this produces unconsciousness. The receptor pharmacology is well characterised; the step from altered receptor activity to the loss of subjective experience is not. Anaesthesia is consequently one of the main experimental tools in consciousness research, since it is the only reliable way to switch the phenomenon off and on in a controlled fashion.</p>
<p>Awareness under anaesthesia — being conscious and paralysed but unable to signal — occurs rarely, in perhaps one or two cases per thousand, and is a serious harm when it does. Depth-of-anaesthesia monitors exist and their reliability is debated.</p>

<h2 id="What_it_enabled">What it made possible, and what it did not</h2>
<p>Anaesthesia removed the time limit and the struggling patient, which opened the body's interior to surgery for the first time.</p>
<p>It did not immediately improve survival. It arguably made things worse for a period, because longer operations in deeper tissue with no understanding of infection produced appalling mortality. Death rates after major surgery in the 1850s and 60s were dreadful, and the phrase used at the time — that the operation was successful but the patient died — belongs to this window.</p>
<p>Surgery only became genuinely useful when antisepsis arrived two decades later. The pairing is what mattered: anaesthesia made the operation possible and asepsis made it survivable, and neither alone would have produced modern surgery.</p>
<p>Anaesthesia also created a medical specialty out of nothing. Administering these drugs is a continuous act of judgment — dosing to effect, managing the airway, supporting circulation, watching for the failures that arrive without warning — and the specialty's obsessive culture of monitoring, checklists and simulation has made it one of the safest areas of medicine. Mortality attributable to anaesthesia itself has fallen by something like two orders of magnitude over the last fifty years, which is a record other specialties study deliberately.</p>
`,
};
