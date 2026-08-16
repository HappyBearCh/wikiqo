import type { RewrittenArticle } from "./types";

export const vaccines: RewrittenArticle = {
  slug: "vaccines",
  title: "Vaccines: teaching an immune system about a threat it has not met",
  sourceTitle: "Vaccine",
  dek: "The only medical technology that has ever driven a human disease to extinction — and the only one whose success makes it look unnecessary.",
  standfirst:
    "A vaccine does nothing to a virus. It works entirely on you: it shows your immune system a convincing forgery of a pathogen, lets it mount a response with no disease attached, and leaves behind a cellular memory that recognises the real thing years later. The entire technology is a training exercise.",
  readingMinutes: 8,
  html: `
<h2 id="The_memory_the_body_already_had">The memory the body already had</h2>
<p>Vaccination did not invent immunity; it exploited a property the immune system already had and that people had noticed long before they could explain it. Thucydides recorded during the plague of Athens in 430 BC that survivors could nurse the sick without falling ill twice. That observation contains the whole principle.</p>
<p>The mechanism underneath it is the adaptive immune system, which does something genuinely strange: it generates an enormous library of randomly varied receptors — enough to recognise essentially any molecular shape, including ones that have never existed — and then selects from it. When a receptor happens to fit an invader, the cell carrying it multiplies. Most of the resulting army dies once the threat is cleared. A residue of memory cells remains, sometimes for decades, primed to respond in days instead of weeks.</p>
<p>That gap between days and weeks is the entire margin. Many infections are dangerous not because the immune system cannot beat them but because it cannot beat them <em>fast enough</em> on first acquaintance. A vaccine buys the first acquaintance in advance.</p>

<h2 id="Milkmaids_and_a_calculated_risk">Milkmaids and a calculated risk</h2>
<p>Deliberate immunisation predates its explanation by centuries. Variolation — inserting material from a mild smallpox case into a healthy person — was practised in China and India, spread through the Ottoman Empire, and was brought to England in the 1720s by Lady Mary Wortley Montagu, who had seen it in Constantinople and had her own children treated. It worked, and it killed perhaps one recipient in fifty, which against smallpox's thirty per cent mortality was a bargain people accepted.</p>
<p>Edward Jenner's contribution in 1796 was to act on a piece of rural folklore: milkmaids who caught cowpox seemed not to get smallpox. He inoculated a boy with cowpox, then exposed him to smallpox, and the boy did not develop it. The ethics would not survive a modern review board. The result was a procedure with a fraction of variolation's risk, and a name — from <em>vacca</em>, Latin for cow — that has outlived the disease it was invented for.</p>
<p>Nearly a century passed before Louis Pasteur established that the principle generalised: weaken a pathogen in the laboratory, and you can build a vaccine against almost anything. The germ theory arrived afterwards to explain why any of it worked.</p>

<h2 id="Five_ways_to_make_a_forgery">Five ways to make a forgery</h2>
<p>Every vaccine faces the same design problem — look enough like the pathogen to provoke a strong response, without being able to cause the disease. The approaches trade off along one axis: the closer the imitation, the better the immunity and the higher the risk.</p>
<ul>
<li><strong>Live attenuated.</strong> A weakened but replicating pathogen, grown until it loses virulence. Measles, mumps, rubella, yellow fever, the oral polio vaccine. These produce the strongest and longest-lasting immunity, often for life, from one or two doses — and they cannot be given to people with severely compromised immune systems.</li>
<li><strong>Inactivated.</strong> The pathogen killed outright. Safer, unable to replicate, and correspondingly weaker: usually several doses and periodic boosters. The Salk polio vaccine, most flu shots, rabies.</li>
<li><strong>Subunit.</strong> Only the fragment that matters — a surface protein, a toxin rendered harmless, a piece of capsule. Very safe, very specific, and usually in need of an adjuvant, a chemical irritant that convinces the immune system the fragment is worth taking seriously.</li>
<li><strong>Conjugate.</strong> A refinement for bacteria wrapped in sugar coats, which infant immune systems ignore. Chemically linking the sugar to a protein makes the whole thing visible. This is why <em>Haemophilus influenzae</em> type b, once a leading cause of childhood meningitis, has largely vanished from countries that vaccinate.</li>
<li><strong>Genetic.</strong> Rather than delivering a protein, deliver the instructions — as mRNA in a lipid envelope, or carried by a harmless modified virus — and let your own cells manufacture the antigen briefly. The mRNA platform was decades in development, most consequentially the discovery that modifying one of RNA's building blocks stops the body destroying the message on arrival. Its advantage is speed: the design can be changed in days, because only the sequence changes, not the manufacturing process.</li>
</ul>

<h2 id="The_part_that_protects_people_who_are_not_vaccinated">The part that protects people who are not vaccinated</h2>
<p>A vaccinated person who cannot transmit an infection is a dead end for it. Enough dead ends in a population and transmission chains break before they reach anyone vulnerable — the newborn too young for the schedule, the child on chemotherapy, the small fraction in whom the vaccine simply did not take.</p>
<p>The threshold depends on how contagious the disease is. Polio needs roughly 80 per cent coverage. Measles, which hangs in the air for two hours after an infected person leaves the room and infects the overwhelming majority of susceptible contacts, needs around 95 per cent. That number is why measles is always the first disease to come back: it has almost no tolerance for gaps, and a community that drifts from 95 to 90 per cent has not become slightly less safe but has re-opened the door.</p>
<p>Herd immunity is also what makes the arithmetic feel unfair to individuals. Each person's protection depends partly on decisions other people made, and the benefit is invisible — it consists entirely of illnesses that did not happen.</p>

<h2 id="Eradication,_and_why_it_almost_never_works">Eradication, and why it almost never works</h2>
<p>Smallpox is the one clean victory. Declared eradicated in 1980 after a campaign built on ring vaccination — find a case, vaccinate everyone around it, starve the chain rather than immunise a planet — it killed an estimated 300 million people in the twentieth century alone and now exists in two freezers.</p>
<p>It was also an unusually cooperative target. Smallpox had no animal reservoir, produced an unmistakable rash that made cases easy to find, and left no symptomless carriers. Almost nothing else combines those properties. Polio, the closest current campaign, is harder on every count: most infections cause no symptoms at all, so the virus travels invisibly, and it persists in conflict zones where vaccinators cannot safely go. Influenza mutates continuously and lives in birds and pigs, which is why the vaccine is redesigned annually and why eradication is not on the table.</p>

<h2 id="The_argument_that_will_not_end">The argument that will not end</h2>
<p>Vaccine hesitancy is older than vaccines — Jenner's contemporaries drew cartoons of patients sprouting cow heads. Its modern form owes a great deal to a 1998 paper claiming a link between the MMR vaccine and autism, based on twelve children. The paper was retracted, its author was found to have manipulated data and to have held an undisclosed financial interest, and he was struck off the medical register. Studies since have followed millions of children across multiple countries and found no association. Measles outbreaks traceable to the resulting drop in coverage have killed children in Europe and North America for two decades.</p>
<p>The deeper difficulty is structural, and honesty about it is more useful than exasperation. Vaccines carry real risks — small, quantified, and vastly smaller than the diseases — but the risk arrives as a decision someone makes on a specific day for a healthy child, while the benefit is a statistical absence spread across a lifetime. Success erases its own evidence: nobody now remembers polio wards, and a disease that has not been seen for a generation looks like a disease that was never dangerous. That is not a failure of public understanding so much as a predictable consequence of the technology working, and it is the reason the argument recurs in every generation that has been spared the thing being argued about.</p>
`,
};
