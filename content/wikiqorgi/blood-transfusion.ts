import type { RewrittenArticle } from "./types";

export const bloodTransfusion: RewrittenArticle = {
  slug: "blood-transfusion",
  title: "Blood transfusion: it killed people unpredictably for 250 years, then a lab test explained why",
  sourceTitle: "Blood transfusion",
  dek: "Some patients recovered and some died within minutes, with no way to tell which in advance. The answer was four groups.",
  standfirst:
    "Transfusion was attempted from the seventeenth century and produced results so erratic that it was banned in several countries and abandoned as reckless. The pattern made no sense until 1901, when Karl Landsteiner mixed samples from his own laboratory staff and found that some combinations clumped and others did not. Everything about modern transfusion — the letters, the cards, the cross-matching — follows from that one observation.",
  readingMinutes: 7,
  html: `
<h2 id="Early_attempts">The lethal centuries</h2>
<p>Once William Harvey established in 1628 that blood circulates rather than being consumed, the idea of replacing lost blood became conceivable.</p>
<p>The first documented transfusions in the 1660s used animal blood — lamb was popular, on the reasoning that a gentle animal might transfer its temperament, which tells you the theory in play. Richard Lower in England and Jean-Baptiste Denys in France both performed them. Denys's patients included a man who received calf's blood repeatedly and died; his widow accused Denys of murder, and although he was acquitted, the resulting scandal led the French parliament to ban the practice, with England and the Papacy following.</p>
<p>Transfusion essentially stopped for a century and a half.</p>
<p>It returned through obstetrics. James Blundell, a London obstetrician watching women bleed to death after childbirth, reasoned that human blood should be used for humans and performed a series of transfusions from the 1810s. Roughly half his patients survived, which was better than certain death from haemorrhage and was still an appalling record for a procedure nobody could predict.</p>
<p>The failures were dramatic. A patient would develop fever, back pain, dark urine and collapse, sometimes within minutes. The reaction was attributed to air, to clotting, to the speed of infusion, and to the donor's constitution. Nothing correlated.</p>

<h2 id="Landsteiner">Four groups</h2>
<p>Karl Landsteiner in Vienna took blood samples from himself and five colleagues in 1900, separated the serum from the red cells, and systematically mixed each person's serum with each person's cells.</p>
<p>The pattern was immediate and regular. Some combinations clumped the cells together; others did not; and the clumping followed a consistent scheme rather than being idiosyncratic to individuals.</p>
<p>He had found the ABO system. Red cells carry molecular markers — antigens — and the plasma carries antibodies against whichever markers the person lacks. Group A cells carry the A antigen and the plasma holds anti-B antibodies. Group B is the reverse. Group AB carries both antigens and neither antibody. Group O carries neither antigen and both antibodies.</p>
<p>The unusual feature, which distinguishes ABO from nearly every other blood group system, is that these antibodies are present without prior exposure. Most immune responses require a first encounter to sensitise; ABO antibodies develop in infancy, apparently in response to similar structures on gut bacteria. This is why the very first transfusion of mismatched blood can kill, with no warning from any previous exposure.</p>
<p>Group O is the universal donor for red cells, having no antigens to be attacked. Group AB is the universal recipient, having no antibodies to attack with. For plasma the relationship inverts, since plasma carries the antibodies rather than the cells — AB plasma is the universal donor, which is a detail that catches people out.</p>
<p>Landsteiner received the Nobel Prize in 1930, and identified the Rh system with Alexander Wiener in 1937.</p>

<h2 id="Rh">The rhesus problem</h2>
<p>The Rh system matters for a reason unrelated to transfusion, and it explains a disease that had killed newborns for as long as there were records.</p>
<p>An Rh-negative woman carrying an Rh-positive baby may be exposed to the baby's cells, typically at delivery, and produce antibodies against the Rh antigen. This does not harm the first baby. In a subsequent Rh-positive pregnancy, those antibodies cross the placenta and destroy the fetal red cells, causing haemolytic disease of the newborn — jaundice, anaemia, brain damage from bilirubin, and frequently death.</p>
<p>The pattern of a healthy first child followed by progressively affected siblings had been described for centuries with no explanation.</p>
<p>The solution is one of the most elegant interventions in medicine. Anti-D immunoglobulin, given to an Rh-negative mother around delivery, destroys any fetal cells that have entered her circulation before her immune system can register them and mount a response. Sensitisation never happens, so subsequent pregnancies are unaffected.</p>
<p>Introduced from the late 1960s, it reduced deaths from the condition by well over 90 per cent in countries where it is routine. It is a rare case of preventing an immune response by pre-emptively removing the trigger rather than by suppressing the system.</p>

<h2 id="Storage">Making blood keep</h2>
<p>Grouping made transfusion survivable. It did not make it practical, because blood clots within minutes of leaving the body, so early transfusion was direct — donor and recipient connected in the same room at the same time.</p>
<p>Sodium citrate, introduced around 1914, binds the calcium that clotting requires and prevents coagulation without poisoning the recipient. Adding glucose fed the cells and extended survival. Refrigeration extended it further.</p>
<p>Together these made blood a storable, transportable commodity, and the consequence was the blood bank. The First World War saw the first stored blood used at scale, and the Spanish Civil War and Second World War produced organised collection and distribution services.</p>
<p>The modern refinement is that whole blood is rarely transfused at all. It is separated by centrifugation into red cells, platelets and plasma, each stored under different conditions — red cells refrigerated for weeks, platelets at room temperature for days, plasma frozen for a year. A patient receives the component they lack, and one donation serves several people.</p>

<h2 id="Contamination">The blood supply as a route of infection</h2>
<p>Pooled blood products are an efficient way to distribute a bloodborne pathogen, and the consequences have been severe.</p>
<p>Hepatitis was recognised as transfusion-transmitted well before the responsible viruses were identified, and post-transfusion hepatitis was common through the mid-twentieth century.</p>
<p>The worst episode came with HIV. Before the virus was identified and screening existed, contaminated blood and plasma products infected large numbers of recipients — particularly people with haemophilia, who received clotting factor concentrates manufactured by pooling plasma from thousands of donors, so that a single infected donation could contaminate an entire batch. In several countries a majority of people with severe haemophilia were infected.</p>
<p>Public inquiries in France, Japan, Canada and the United Kingdom found not only the unavoidable ignorance of the early period but delays in acting once risk was recognised, continued distribution of untreated product, and prolonged official denial. The British inquiry reporting in 2024 described a catastrophe compounded by concealment. Criminal convictions followed in France and Japan.</p>
<p>Modern screening tests donations for HIV, hepatitis B and C, syphilis and other agents, with nucleic acid testing narrowing the window between infection and detectability. Residual risk per unit is now on the order of one in a million or less for these viruses. Bacterial contamination of platelets, stored warm, is now the more common infectious hazard.</p>

<h2 id="Practice">Less is more</h2>
<p>The clearest change in recent transfusion practice is that far less blood is given, and outcomes improved as a result.</p>
<p>For decades a haemoglobin threshold was applied almost reflexively, on the reasoning that more oxygen-carrying capacity must be better. Randomised trials comparing liberal with restrictive transfusion strategies found repeatedly that restrictive policies produced equal or better outcomes across a range of settings, including intensive care and gastrointestinal bleeding.</p>
<p>Stored red cells are not fresh red cells — they stiffen, lose the ability to deform through capillaries, and release free haemoglobin — and transfusion carries immunological consequences that are not fully characterised. There is no such thing as a transfusion with no downside.</p>
<p>The resulting discipline, patient blood management, focuses on treating anaemia before elective surgery, reducing surgical blood loss, minimising diagnostic sampling, and transfusing on clinical need rather than a number. It reduces transfusion rates substantially without harming patients, which is the unusual case of a change that saves money and improves outcomes at once.</p>
<p>Blood remains a donated human tissue that cannot be manufactured. Attempts at synthetic oxygen carriers have consistently failed in trials, some causing harm, and lab-grown red cells remain experimental and far from the volumes required. Supply still depends entirely on people volunteering.</p>
`,
};
