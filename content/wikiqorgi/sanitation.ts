import type { RewrittenArticle } from "./types";

export const sanitation: RewrittenArticle = {
  slug: "sanitation",
  title: "Sewers: the least admired thing that ever saved a hundred million lives",
  sourceTitle: "Sanitation",
  dek: "Readers of the British Medical Journal voted sanitation the greatest medical advance since 1840. It beat antibiotics and vaccines.",
  standfirst:
    "The largest gains in human life expectancy came from civil engineering rather than medicine. Separating drinking water from sewage did more to reduce death than any drug, and it was accomplished largely before anyone understood why it worked — by people acting on a theory of disease that was completely wrong.",
  readingMinutes: 7,
  html: `
<h2 id="Cities_used_to_kill_people">Cities used to kill people</h2>
<p>Until roughly 1900, large cities did not sustain their own populations. Deaths exceeded births, and urban numbers grew only through continuous migration from the countryside — a phenomenon demographers call the urban graveyard effect.</p>
<p>The cause was concentration. A rural household disposing of waste in a pit contaminates a small area slowly. A hundred thousand households doing the same on a few square miles, drawing water from shallow wells in the same ground, creates a permanent circuit between sewage and drinking water. Cholera, typhoid, dysentery and infant diarrhoea followed, and infant mortality in the worst districts ran to a quarter or more of live births.</p>
<p>Some ancient cities had done better. Roman aqueducts brought clean water from distant sources and the Cloaca Maxima drained the forum; the Indus Valley cities of four thousand years ago had covered drains and household bathing platforms. The knowledge was lost or not scaled, and industrial cities grew far faster than any provision for them.</p>

<h2 id="The_wrong_theory_that_worked">The wrong theory that worked</h2>
<p>The prevailing explanation of epidemic disease was miasma: illness arose from foul air emitted by rotting matter. It was wrong in mechanism and roughly right in its practical implications, since the places that smelled worst were the places most heavily contaminated.</p>
<p>Edwin Chadwick, a lawyer and civil servant rather than a doctor, published a report in 1842 documenting the connection between filth, disease and poverty in unsparing statistical detail, and argued that cleaning cities would pay for itself in reduced pauperism. He was abrasive, widely disliked, and effective. The resulting public health legislation created local boards with authority over drainage and water supply.</p>
<p>His signature policy shows how the wrong theory could mislead even while helping. Convinced that accumulated waste in cesspits produced disease-bearing air, Chadwick pushed to flush it away into the rivers — which in London meant the Thames, from which several water companies drew their supply. Removing waste from where people lived and depositing it in their drinking water made the cholera worse.</p>

<h2 id="The_Great_Stink">The Great Stink</h2>
<p>London's sewage problem was ignored through repeated cholera epidemics and then solved within eighteen months of inconveniencing Parliament.</p>
<p>The summer of 1858 was hot, the Thames was low, and the smell from the untreated sewage flowing past Westminster became unbearable. Curtains soaked in chloride of lime were hung in the windows of the Commons; members considered relocating. A bill funding a comprehensive sewerage system passed in eighteen days.</p>
<p>Joseph Bazalgette's design remains the backbone of London's system. Rather than let sewers discharge into the river throughout the city, he built intercepting sewers running parallel to the Thames, carrying flow eastward to outfalls downstream — 1,100 miles of street sewers feeding 82 miles of main intercepting sewers, driven by gravity where possible and pumping stations where not, and requiring the construction of the embankments that reshaped the river frontage.</p>
<p>His most consequential decision was to calculate the required pipe diameter for the projected population and then double it. Asked why, he observed that London would grow and they would only do this once. The system served a city several times the size he was designing for, and it is the standard example of infrastructure engineering done with the right time horizon.</p>

<h2 id="What_actually_reduced_mortality">What actually reduced mortality</h2>
<p>The historical epidemiology is unusually clear, because the interventions arrived at different times in different cities and their effects can be separated.</p>
<p>Water filtration and, from the early 1900s, chlorination produced immediate and large drops in typhoid and infant diarrhoea. Studies of American cities attribute roughly half the total mortality decline in the early twentieth century to clean water alone, and a very large share of the fall in infant and child deaths.</p>
<p>This is worth holding against the popular history of medicine. The great infectious killers were in steep decline before antibiotics existed and, in most cases, before the corresponding vaccines. Tuberculosis mortality had fallen dramatically before any effective treatment. The drugs mattered enormously for the individuals who received them; the population-level decline was already underway, driven by water, sewers, better nutrition and less crowded housing.</p>

<h2 id="How_it_works_now">How it works now</h2>
<p>Modern treatment runs in stages. Primary treatment settles out solids physically. Secondary treatment is biological: bacteria are supplied with oxygen and consume the dissolved organic matter, which is essentially a controlled and accelerated version of what a river does slowly. Tertiary treatment, where required, removes nitrogen and phosphorus that would otherwise cause algal blooms, and disinfects.</p>
<p>The persistent weakness in older cities is combined sewers, which carry sewage and rainwater in the same pipe. During heavy rain the volume exceeds treatment capacity and the surplus discharges untreated into rivers and coastal water. It was a reasonable design when built and is now a chronic pollution source that is extremely expensive to correct, since separating the systems means digging up the city.</p>
<p>Newer problems have arrived that the process was not designed for: pharmaceutical residues, hormones, microplastics and persistent industrial chemicals pass through conventional treatment largely intact.</p>

<h2 id="The_part_that_is_not_solved">The part that is not solved</h2>
<p>Roughly three and a half billion people lack safely managed sanitation, and hundreds of millions still practise open defecation. Diarrhoeal disease remains among the leading causes of death in children under five, and it is almost entirely preventable by means that have been understood for over a century.</p>
<p>The obstacles are not technical. Sewerage is enormously capital-intensive, requires reliable water and continuous maintenance, and pays returns that are diffuse, delayed, and impossible to attribute to whoever funded them. It is the hardest kind of investment for a political system to make: the benefit is deaths that do not happen, to people who will never know they were at risk.</p>
<p>Which is also why the subject is so poorly regarded. Sanitation's success is measured entirely in absence, and there is no constituency for a catastrophe that was averted a century before anyone now living was born.</p>
`,
};
