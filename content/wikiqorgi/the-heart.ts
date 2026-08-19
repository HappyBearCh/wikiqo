import type { RewrittenArticle } from "./types";

export const theHeart: RewrittenArticle = {
  slug: "the-heart",
  title: "The heart: Harvey proved circulation with arithmetic, and it cost him his practice",
  sourceTitle: "Heart",
  dek: "Multiply the volume of a heartbeat by the number of beats in an hour. The answer is more blood than the body contains, so it must be going round.",
  standfirst:
    "William Harvey's demonstration in 1628 that blood circulates was not an anatomical discovery — the structures had been described before him. It was a quantitative argument, the first of its kind in physiology, and it was unanswerable: the heart moves so much blood that no source could supply it and no tissue could consume it, therefore the same blood returns. The medical establishment rejected it for a generation.",
  readingMinutes: 7,
  html: `
<h2 id="Galen">What the heart was thought to do</h2>
<p>The system Harvey overturned was Galen's, and it had stood for roughly fourteen centuries. In it, blood was continuously manufactured in the liver from digested food, distributed outward through the veins, and consumed by the tissues. There was no circuit and no return.</p>
<p>The heart in this scheme was not primarily a pump. Its left side dealt in a different substance, and the two sides communicated through invisible pores in the wall between them — pores Galen asserted because his framework required them and which nobody could find.</p>
<p>Corrections accumulated before Harvey. Ibn al-Nafis in thirteenth-century Damascus rejected the pores and described blood passing from the right heart through the lungs, a text that was unknown in Europe until it was rediscovered in the twentieth century. Michael Servetus and Realdo Colombo described the pulmonary transit independently in the sixteenth century. Harvey's teacher at Padua, Fabricius, described the valves in the veins and got their purpose wrong, taking them for devices to slow the outward flow.</p>
<p>The pieces were on the table. What was missing was someone willing to add up.</p>

<h2 id="Arithmetic">The calculation</h2>
<p>Harvey's argument in <em>De Motu Cordis</em> runs roughly as follows. Estimate the volume the left ventricle ejects with each contraction — he used a deliberately conservative figure — and multiply by the pulse rate, and then by the minutes in an hour.</p>
<p>The product is a quantity of blood far exceeding the weight of the whole body, produced every hour. No liver could manufacture it from food, and no tissue could absorb it. Even at the most cautious assumptions the numbers are impossible by orders of magnitude, which is why the argument does not depend on the accuracy of his estimates.</p>
<p>The only remaining possibility is that the same blood passes through repeatedly. Harvey supported it with experiment: ligature of an arm's veins, showing the swelling occurs on the side away from the heart and that valves permit flow in one direction only, which reversed his teacher's interpretation of the very structures he had described.</p>
<p>One thing Harvey could not supply was the connection between arteries and veins, since capillaries are invisible without a microscope. He argued for their existence from necessity, and Marcello Malpighi observed them in frog lung in 1661, four years after Harvey's death.</p>
<p>Harvey reported that his practice suffered and that he was thought crackbrained after publication. The resistance was not stupidity: circulation invalidated the theoretical basis of bloodletting, which was the central therapeutic activity of the profession, and physicians had rather more invested in Galen than a modern reader assumes.</p>

<h2 id="Pump">What the pump actually is</h2>
<p>The heart is two pumps sharing a wall and a rhythm, working in series against very different loads.</p>
<p>The right side pushes blood through the lungs, a short low-resistance circuit at low pressure. The left pushes the same volume through the entire body, and does so at around five times the pressure — which is why the left ventricle's wall is several times thicker while both chambers eject the same amount per beat. Any mismatch would flood or drain a circuit within minutes, and the balance is maintained automatically by the Frank–Starling relationship: a chamber filled more stretches more and contracts harder, so a ventricle receiving more blood ejects more without any signal being sent.</p>
<p>Output is not constant. A resting adult moves roughly five litres a minute; in heavy exercise a trained person can reach several times that, achieved mostly by heart rate and partly by ejecting a larger fraction of the ventricle's contents.</p>
<p>The valves are passive, opening and closing on pressure differences alone, and the sounds of a heartbeat are the valves shutting rather than the muscle contracting. Murmurs are turbulence, and a murmur's timing tells you which valve is at fault before any imaging is done.</p>
<p>The arterial tree contributes a mechanism that is easy to overlook. The aorta is elastic; it distends during ejection and recoils during the pause, converting an intermittent output into something closer to continuous flow. When arteries stiffen with age this cushioning is lost, which is why systolic pressure rises and pulse pressure widens in older people — a mechanical consequence, not a failure of the pump.</p>

<h2 id="Electricity">Its own electrical system</h2>
<p>The heart generates its own beat. Isolated cardiac tissue continues to contract rhythmically, and a transplanted heart, with every nerve to it severed, works.</p>
<p>The rhythm originates in the sinoatrial node, a patch of cells in the right atrium whose membranes leak steadily toward the threshold for firing, so they cannot rest. Several other regions can do the same thing more slowly, providing a hierarchy of backups: if the sinoatrial node fails, a slower pacemaker takes over, at a rate low enough to be inadequate but sufficient to be alive.</p>
<p>The signal spreads across the atria, then reaches the atrioventricular node, which does something unusual — it deliberately delays conduction by a fraction of a second. That delay is what allows the atria to finish emptying before the ventricles contract, and it is the only electrical route between the two, the rest of the junction being insulating tissue.</p>
<p>From there the impulse runs down specialised fast-conducting fibres so the ventricles contract from the apex upward, squeezing toward the outflow rather than in a disorganised wave. The electrocardiogram records the sum of all this from the skin, which is why it localises damage: a region that is not conducting or not repolarising normally shows up as a change in a specific lead.</p>
<p>The autonomic nerves modulate the rate rather than causing it. The vagus slows the heart continuously, which is why the resting rate is well below the sinoatrial node's intrinsic rate and why fitness lowers resting pulse — largely by increasing that restraint.</p>

<h2 id="Failure">Why heart attacks are permanent</h2>
<p>Cardiac muscle has almost no capacity to regenerate. Carbon-dating work using the atmospheric spike from mid-century nuclear testing established that human cardiomyocytes do renew, but at a rate under one per cent a year, falling with age, so under half the cells present at birth are replaced across a lifetime.</p>
<p>This is why a myocardial infarction produces permanent injury. The muscle downstream of a blocked coronary artery dies within hours and is replaced by scar, which conducts poorly and does not contract, so the loss is subtracted from output for good — and the entire logic of emergency treatment is to reopen the artery before the tissue is lost, which is where the phrase about time and muscle comes from.</p>
<p>The coronary supply is itself a peculiarity worth noting: the heart sits in a chamber full of blood and cannot use any of it, being supplied instead by arteries branching from the aorta just past the valve. Those arteries fill during relaxation rather than contraction, because the contracting muscle squeezes them shut — so an excessively fast heart rate, by shortening the pause, reduces the heart's own supply at precisely the moment its demand is highest.</p>
<p>Heart failure is the chronic version, in which the pump cannot meet demand at normal filling pressures, and the body's compensations — fluid retention, vasoconstriction, sympathetic activation — are short-term measures that make the long term worse. Most modern drug therapy for it works by blocking those compensations rather than by stimulating the heart, a reversal of the intuitive approach that took decades to establish and that rests on trials showing the intuitive drugs increased mortality.</p>
`,
};
