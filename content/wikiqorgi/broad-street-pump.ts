import type { RewrittenArticle } from "./types";

export const broadStreetPump: RewrittenArticle = {
  slug: "broad-street-pump",
  title: "The Broad Street pump: how one man mapped an epidemic and was ignored",
  sourceTitle: "1854 Broad Street cholera outbreak",
  dek: "John Snow proved cholera travelled in water in 1854. The medical establishment rejected it for another thirty years.",
  standfirst:
    "The story is told as a triumph: a doctor plots deaths on a map, spots the cluster, removes the pump handle, and the outbreak ends. Almost every element of that is partly wrong — the outbreak was already fading, the map came after the conclusion, and Snow's argument was formally rejected by the authorities who reviewed it. What he actually did was better than the legend.",
  readingMinutes: 7,
  html: `
<h2 id="What_cholera_does">What cholera does</h2>
<p>Cholera arrived in Britain in the 1830s, having spread from Bengal along expanding trade routes, and it was terrifying in a way the endemic diseases were not. A healthy adult could be dead within a day, through catastrophic fluid loss — the intestinal lining stripped of its ability to retain water by a bacterial toxin, though none of that was known at the time.</p>
<p>The prevailing explanation was miasma. Cholera was believed to arise from foul air, which fitted the observation that it struck hardest in the poorest, smelliest districts and fitted the moral assumptions of the era comfortably enough that few pressed further.</p>
<p>John Snow, a London physician better known at the time for pioneering work in anaesthesia — he administered chloroform to Queen Victoria — thought the miasma account failed on the evidence. The disease's first symptoms were digestive, not respiratory, which is strange for something inhaled. It spread along routes of human movement rather than radiating from foul locations. And people breathing identical air fell ill at wildly different rates.</p>
<p>He published his argument that cholera was transmitted by something ingested, present in the excretions of the sick and reaching others through contaminated water, in 1849. It was received without enthusiasm.</p>

<h2 id="Soho,_1854">Soho, 1854</h2>
<p>In late August 1854 an outbreak began in Soho, close to where Snow lived, and killed with extraordinary speed — over five hundred deaths within about ten days in a few streets.</p>
<p>Snow went door to door. He established where the dead had drawn their water, and found the deaths concentrated around a public pump in Broad Street. Crucially, he pursued the cases that did not fit, and the exceptions are what make the investigation persuasive.</p>
<p>A workhouse in the middle of the affected area had over five hundred inmates and almost no cases; it had its own well. A brewery on Broad Street had none among its workers, who drank the beer they made and had a private supply. A widow in Hampstead, well outside the district, died of cholera — and her son reported that she had liked the taste of Broad Street water so much that she had it carted to her regularly. Her niece, visiting, drank some and died too.</p>
<p>Those anomalies are the strongest evidence in the whole episode. A miasma confined to a few streets cannot kill a woman in Hampstead, and cannot spare five hundred people living at its centre. Only the water explains both.</p>

<h2 id="The_map,_and_what_it_was_for">The map, and what it was for</h2>
<p>Snow's map of the outbreak — deaths marked as bars stacked along the street where they occurred, clustering visibly around the pump — has become one of the most reproduced images in the history of data visualisation, and it deserves the reputation with one correction.</p>
<p>It was not the instrument of discovery. Snow had reached his conclusion from the door-to-door work before the map was drawn, and the map was made to <em>persuade</em> others. That is not a demotion. Communicating a finding to people disposed to reject it is a distinct and difficult task, and Snow's second version added a genuinely sophisticated element: a boundary line marking the area from which the Broad Street pump was the nearest, measured by walking distance through the actual street layout rather than straight-line distance. It is an early Voronoi diagram, constructed to answer the obvious objection that proximity on a map is not the same as which pump you would actually use.</p>

<h2 id="The_handle">The handle</h2>
<p>Snow presented his evidence to the parish Board of Guardians on 7 September, and they agreed to remove the pump handle the following day.</p>
<p>The outbreak subsided. It had, however, already peaked several days earlier — partly because a large part of the neighbourhood had fled. Snow himself was careful about this and did not claim the removal ended the epidemic. The popular version, in which one decisive act stops a plague, is a later simplification, and the honest account is less cinematic and more useful: the intervention was correct, and the evidence for it did not depend on the outcome.</p>
<p>The source was identified afterwards by a local curate, Henry Whitehead, who had begun as a sceptic of Snow's theory and went looking for evidence against it. He found the index case instead — an infant who had fallen ill at 40 Broad Street, whose mother had washed the soiled nappies and emptied the water into a cesspit. Inspection showed the cesspit's brickwork was decayed and sat a few feet from the pump's well.</p>
<p>Whitehead's contribution deserves more attention than it gets. He was a hostile investigator who followed the evidence to the opposite of his starting position, and he and Snow subsequently worked together.</p>

<h2 id="The_larger_experiment">The larger experiment</h2>
<p>Snow's more rigorous work is less famous and more impressive. South London was served by two water companies whose pipes ran along the same streets, supplying neighbouring houses more or less at random according to which company a landlord had once chosen. One drew its water from the Thames upstream of London's sewage discharge; the other from within the tidal reach, downstream.</p>
<p>Snow recognised this as an experiment conducted, as he put it, on the grandest scale — the households differed in nothing systematic except their water source. He traced supply for hundreds of cholera deaths and found the death rate among customers of the downstream company was many times higher.</p>
<p>This is a natural experiment with a plausible claim to being the founding work of modern epidemiology, and its logic — find a source of variation that is effectively random with respect to everything else — is the same logic used today.</p>

<h2 id="Rejected_anyway">Rejected anyway</h2>
<p>The official inquiry into the Soho outbreak considered Snow's evidence and rejected his conclusion, reaffirming atmospheric causes. Snow died in 1858, aged 45, with his theory still a minority position. An obituary in The Lancet gave his cholera work a single dismissive line.</p>
<p>Vindication came slowly: Filippo Pacini had actually observed the bacterium in 1854, unnoticed; Robert Koch isolated and characterised it in 1884, and germ theory made the mechanism intelligible. The Lancet printed a retraction in 2013, a hundred and fifty-five years late, which is either a graceful gesture or an unusually thorough one.</p>
<p>The episode is usually offered as a lesson about data. It is at least as much a lesson about institutions: Snow was right, his evidence was strong, he presented it clearly, and it was rejected for three decades because it contradicted a theory that everyone competent already believed. Being correct is not sufficient, and the map — for all its fame — did not fix that.</p>
`,
};
