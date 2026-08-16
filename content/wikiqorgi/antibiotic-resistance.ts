import type { RewrittenArticle } from "./types";

export const antibioticResistance: RewrittenArticle = {
  slug: "antibiotic-resistance",
  title: "Antibiotic resistance: the bill for eighty years of borrowed time",
  sourceTitle: "Antimicrobial resistance",
  dek: "Bacteria were fighting each other with antibiotics long before we found them — and had already worked out the counters.",
  standfirst:
    "The usual framing is that overuse of antibiotics created resistance. It didn't. Resistance genes are ancient, older than agriculture, older than us, recovered from permafrost sealed for thirty thousand years. What overuse did was hand an enormous evolutionary advantage to the organisms that already carried them, and then arrange for those organisms to meet each other.",
  readingMinutes: 7,
  html: `
<h2 id="A_weapon_borrowed_from_the_soil">A weapon borrowed from the soil</h2>
<p>Almost every antibiotic in clinical use descends from a molecule that some microorganism was already making. Penicillin came from a mould, streptomycin and tetracycline from soil bacteria, vancomycin from an organism collected in Borneo. These compounds exist because microbes have been competing chemically for hundreds of millions of years in the most crowded habitat on Earth — a gram of soil holds billions of cells belonging to thousands of species, all of them contesting the same carbon.</p>
<p>The implication is the one people miss. If an organism manufactures a poison, it must also be immune to it, and its neighbours are under relentless pressure to become immune too. Every antibiotic we discovered arrived with a resistance mechanism already circulating somewhere in the environment. We did not start this arms race. We walked into one already in progress, several hundred million years late, and were briefly delighted to find the weapons lying around.</p>

<h2 id="Four_ways_to_survive_a_drug">Four ways to survive a drug</h2>
<p>Bacterial defences are mechanically simple and depressingly effective.</p>
<ul>
<li><strong>Destroy it.</strong> Beta-lactamase enzymes snip open the chemical ring that gives penicillin and its relatives their punch. There are now thousands of variants, and the ones called extended-spectrum or carbapenemase chew through the drugs held in reserve for everything else.</li>
<li><strong>Pump it out.</strong> Efflux pumps sit in the cell membrane and eject antibiotics faster than they accumulate. Because many pumps are indiscriminate, one of them can confer resistance to several unrelated drug classes at once.</li>
<li><strong>Change the lock.</strong> Antibiotics bind to a specific target — a ribosome, an enzyme, a wall-building protein. A small mutation in that target can leave it working well enough while no longer fitting the drug. This is how MRSA works: an acquired gene builds a wall-assembly protein that methicillin cannot grip.</li>
<li><strong>Shut the door.</strong> Reducing the porin channels in the outer membrane simply lowers how much drug gets in. Crude, and often enough.</li>
</ul>

<h2 id="Why_it_spreads_faster_than_evolution_should_allow">Why it spreads faster than evolution should allow</h2>
<p>If bacteria could only pass resistance to their own descendants, the problem would be serious but slow. They can do considerably better than that.</p>
<p>Horizontal gene transfer lets bacteria exchange DNA sideways, between unrelated cells and across species boundaries, using plasmids — small circular genetic packages that copy themselves into a neighbour through direct contact. A harmless gut bacterium can hand a resistance plasmid to a pathogen it happens to be sitting next to. Worse, plasmids often carry several resistance genes together, so exposure to one antibiotic selects for cells carrying resistance to five.</p>
<p>Then there is the arithmetic. A bacterium divides every twenty minutes under good conditions; a single cell can become a billion overnight. Any advantage, however slight, is compounded through more generations in a week than human evolution has managed since we left the trees.</p>

<h2 id="Where_the_pressure_comes_from">Where the pressure comes from</h2>
<p>Antibiotics do not cause mutations. They do something more consequential: they kill everything that lacks a defence, clearing the field for whatever survives. Every course of treatment is a selection event, and its severity depends on how much drug, for how long, against how many bacteria.</p>
<p>The largest contributors are not the ones patients think about. Roughly two-thirds of global antibiotic consumption by mass goes to livestock, much of it at sub-therapeutic doses to accelerate growth in crowded conditions — the precise regime most likely to breed resistance, since it exposes vast bacterial populations to concentrations high enough to select but too low to eradicate. The European Union banned growth-promotion use in 2006; much of the world has not followed.</p>
<p>In human medicine the pattern is prescribing for viral infections, where antibiotics do nothing but select, and courses abandoned once symptoms fade. Pharmaceutical manufacturing effluent matters too: rivers downstream of antibiotic plants in parts of India have been measured carrying drug concentrations higher than a treated patient's bloodstream, which turns an entire waterway into a selection chamber.</p>

<h2 id="The_broken_market">The broken market</h2>
<p>The obvious answer — develop new antibiotics — collides with an economic structure that actively discourages it. Most classes in use today were discovered between the 1940s and 1960s. After that the well ran dry, partly because the easy soil organisms had been screened and partly because the returns stopped justifying the search.</p>
<p>Consider what a successful new antibiotic looks like commercially. It costs on the order of a billion dollars to bring through trials. It is then taken for a week rather than daily for life, unlike the drugs that fund the industry. And if it works against resistant organisms, responsible practice demands it be held in reserve and used as little as possible. A company that develops the most valuable antibiotic in a generation will be asked, correctly, not to sell much of it. Several firms that succeeded at exactly this went bankrupt.</p>
<p>Proposed fixes mostly involve breaking the link between volume and revenue — subscription models where a health service pays a flat fee for access regardless of quantity used, or prizes paid on approval. The UK has run a version of this since 2022. Nothing has yet been adopted at the scale the problem implies.</p>

<h2 id="What_losing_looks_like">What losing looks like</h2>
<p>Drug-resistant infections are associated with well over a million deaths a year, and the number is rising. But mortality understates the damage, because antibiotics are not primarily a treatment for infection — they are the safety net underneath everything else in modern medicine.</p>
<p>Hip replacements, caesarean sections, chemotherapy, transplants, intensive care and any surgery that opens the abdomen all depend on being able to control infection reliably afterwards. Chemotherapy deliberately destroys the immune system on the understanding that the resulting vulnerability is survivable. Withdraw that assumption and a large amount of routine medicine becomes a gamble rather than a procedure.</p>
<p>The realistic responses are unglamorous and mostly already known: stewardship programmes that reserve the strongest drugs, rapid diagnostics that distinguish bacterial from viral infection before a prescription is written, better infection control in hospitals, vaccines that prevent infections needing treatment at all, and removing antibiotics from animal growth promotion. Bacteriophage therapy and antibodies against bacterial toxins are promising and are not close to replacing the drug classes at risk. There is no version of this where the arms race ends. There is only the version where we stop losing ground quite so fast.</p>
`,
};
