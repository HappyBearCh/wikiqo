import type { RewrittenArticle } from "./types";

export const theFactory: RewrittenArticle = {
  slug: "the-factory",
  title: "The factory: the innovation was supervision, not machinery",
  sourceTitle: "Factory",
  dek: "Water-powered mills existed for centuries. What was new was gathering workers under one roof where they could be watched and timed.",
  standfirst:
    "The factory is usually explained by its machines, and the machines are the less interesting half. Powered mills were medieval; what changed around 1770 was the decision to bring workers into a single building on a fixed schedule under continuous supervision. That was a change in the organisation of labour rather than in technology, and the resistance it met was not to the machines but to what the machines were being used to impose.",
  readingMinutes: 8,
  html: `
<h2 id="Putting_out">What it replaced</h2>
<p>Textile production before the factory ran on the putting-out system. A merchant supplied raw material to households, collected the finished goods, and paid by the piece. Spinning and weaving were done at home, on the household's own equipment, at hours the household chose.</p>
<p>From the worker's side this had real advantages. Work fitted around agricultural seasons, childcare and everything else. Nobody supervised. The pace was self-determined, and the practice of taking Monday off after a weekend — Saint Monday — was widespread and simply absorbed by working harder later in the week.</p>
<p>From the merchant's side it had persistent problems. Quality was uneven. Delivery was unpredictable. Material went missing — embezzlement of yarn was endemic and hard to prove. And it was impossible to increase output quickly, since there was no way to make households work faster.</p>
<p>The factory solved all of these at once, and solved them by removing the autonomy that had made the old system tolerable.</p>

<h2 id="Arkwright">Cromford, 1771</h2>
<p>Richard Arkwright's mill at Cromford is conventionally the first modern factory, and what makes it the first is not the water frame but the organisation around it.</p>
<p>Arkwright ran two twelve-hour shifts, keeping the machinery running through the night. He hired predominantly women and children, on the stated reasoning that they were more tractable and cheaper. He built housing to attract workers to a rural site, which also meant his workers lived in his village. He imposed fines for lateness, and a worker who missed the start of a shift could be locked out and lose the day's pay.</p>
<p>None of this required the water frame. It required a building, a clock and a foreman.</p>
<p>Arkwright's real talent was organisational rather than mechanical — the originality of his machines was contested at the time and his patents were eventually overturned — and it is telling that the man remembered as the archetypal inventor of the industrial revolution was principally a manager.</p>
<p>The reason the arrangement spread is that it worked commercially. Output per worker rose, quality became controllable, and the merchant could now respond to demand by extending hours.</p>

<h2 id="Time">Time became the unit of work</h2>
<p>The deepest change the factory made was to how work was measured.</p>
<p>Task-oriented work is paced by the job: you milk the cows, you finish the cloth, and the day ends when the work does. Time-oriented work is paced by the clock: you are present from six until six, and what you produce in that span is the employer's concern.</p>
<p>E.P. Thompson's essay on this remains the standard account, and its central observation is that industrial discipline had to be taught. Workers accustomed to task orientation did not naturally understand why arriving an hour late mattered if the work was done. Employers responded with fines, with clocks, and with a moral vocabulary — punctuality, regularity, industry — that had to be instilled through schooling and preaching as much as through the wage.</p>
<p>The manipulation ran both ways. Factory clocks were owned by the factory, and there are documented cases of employers adjusting them, running them slow through the working day and fast at meal breaks. Workers were forbidden to bring their own watches. The dispute over whose time it was is why the standardisation of public time later mattered so much to unions.</p>
<p>The habits stuck. Treating lateness as a character flaw, dividing the day into paid and unpaid portions, and experiencing time as a resource to be spent are all inheritances from this period, and all of them were novel and contested when introduced.</p>

<h2 id="Conditions">The conditions, and the arguments about them</h2>
<p>Early factory work was dangerous, and the specific hazards followed from the machinery and the workforce.</p>
<p>Unguarded belt drives and exposed gearing caught clothing and hair. Children were used to clean under running machinery because they were small enough to fit, and were maimed doing it. Cotton dust caused byssinosis. Noise caused deafness. Hours ran to twelve or more, six days a week, for children as young as six.</p>
<p>The historical argument about living standards is genuine and unresolved in its details. Optimists point out that real wages rose over the long run and that rural poverty was also brutal. Pessimists note that the gains arrived late — real wages were roughly flat for the first several decades of industrialisation, a period sometimes called Engels's pause — while the disruption was immediate.</p>
<p>Height data offers a partial arbitration, since stature reflects childhood nutrition and disease: average heights in industrialising Britain fell for cohorts born in the early nineteenth century before recovering. Urban mortality was worse than rural. Whatever the wage series show, the bodies of the people in question got smaller for a period.</p>
<p>Regulation came slowly and against sustained opposition. The Factory Act of 1833 restricted children's hours and, crucially, created inspectors with power to enter premises — earlier acts had set rules with no enforcement and were widely ignored. The Ten Hours Act followed in 1847. Each was resisted with the argument that limiting hours would destroy competitiveness, and each was followed by continued growth.</p>

<h2 id="Luddites">What the Luddites actually objected to</h2>
<p>The Luddites are remembered as opponents of technology, and the word is now used for anyone hostile to novelty. This is close to the opposite of the record.</p>
<p>The machine-breaking in the English Midlands and North between 1811 and 1816 was carried out largely by skilled textile workers who had used machinery all their lives. Their objection was to the use of machines to circumvent established practices — employing unapprenticed labour, producing deliberately inferior goods, and cutting wages — in an industry where custom and statute had previously regulated these things.</p>
<p>The attacks were targeted. Machines belonging to employers who maintained customary rates were often left alone in workshops where others were destroyed. This is not indiscriminate hostility to machinery; it is enforcement of a labour standard by the only means available to people with no legal right to organise, since combination was then a crime.</p>
<p>The response was severe. Machine-breaking was made a capital offence, more troops were deployed against the Luddites in some periods than were then serving under Wellington in Spain, and men were hanged and transported.</p>
<p>Reclaiming the accuracy here matters because the caricature does real work: it converts a dispute about the distribution of gains from technology into a dispute about technology itself, which is a substitution that keeps recurring.</p>

<h2 id="After">Where it went</h2>
<p>The factory system spread from textiles to everything and then, in the rich countries, largely left.</p>
<p>Manufacturing employment as a share of the workforce peaked in most industrialised economies in the mid-twentieth century and has declined since. The common explanation is offshoring, and productivity growth is the larger part — output has continued rising while employment fell, which means fewer people making more things.</p>
<p>Production itself moved as well, first to Japan and Korea, then to China and Southeast Asia, following the same logic that moved it from households to mills: concentrate the work where it can be organised most cheaply. The shipping container is what made that logistically possible.</p>
<p>What has not changed is the underlying proposition. The factory was a bargain in which workers exchanged autonomy over their time for a wage and a place in a coordinated system that produced far more than they could alone. Every subsequent argument about working conditions — the assembly line, scientific management, the eight-hour day, and the algorithmic scheduling and productivity monitoring now applied in warehouses and delivery work — is a renegotiation of the same trade, usually over the same question of who controls the pace.</p>
`,
};
