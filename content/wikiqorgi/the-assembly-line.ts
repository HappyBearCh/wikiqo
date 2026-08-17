import type { RewrittenArticle } from "./types";

export const theAssemblyLine: RewrittenArticle = {
  slug: "the-assembly-line",
  title: "The assembly line: bring the work to the worker, and the line sets the pace",
  sourceTitle: "Assembly line",
  dek: "Ford cut chassis assembly from twelve hours to ninety minutes. Then he had to double wages, because nobody would stay.",
  standfirst:
    "The moving assembly line is a single idea with two faces. Moving the work past stationary workers eliminates the time they spend walking, fetching and searching, which produces extraordinary gains in output. It also transfers control of the pace from the worker to the machinery, and the labour turnover that followed at Ford was so severe that the company had to hire hundreds of workers to retain a hundred.",
  readingMinutes: 7,
  html: `
<h2 id="Before">Interchangeable parts came first</h2>
<p>An assembly line is impossible without parts that fit without adjustment, and that was the harder problem.</p>
<p>Craft production meant each component was fitted to its neighbours by a skilled worker with a file. Two nominally identical products were not identical, and a replacement part had to be made for the specific machine.</p>
<p>The pursuit of interchangeability ran through eighteenth-century French artillery and into American armouries at Springfield and Harpers Ferry, where it was driven by military logistics: an army needs to repair muskets in the field by swapping parts. Eli Whitney is traditionally credited and the credit is largely undeserved — his famous 1801 demonstration for Congress appears to have used pre-selected matched parts, and his own production never achieved interchangeability.</p>
<p>The real achievement was incremental and belonged to the armoury system: purpose-built machine tools, jigs and fixtures holding work in fixed relation to the cutter, and above all gauges. Go and no-go gauges let an unskilled worker verify a dimension without measuring it, which converts precision from a matter of judgment into a matter of inspection.</p>
<p>This became known as the American system of manufactures, and it spread from firearms to sewing machines, clocks, typewriters and bicycles before reaching cars.</p>

<h2 id="Ford">Highland Park, 1913</h2>
<p>Ford did not invent the constituent ideas. Continuous flow existed in flour mills, canneries and breweries. Disassembly lines had been running in Chicago meatpacking for decades, where carcasses moved on overhead trolleys past workers each making one cut — and Ford's people acknowledged this as the direct inspiration.</p>
<p>What Ford did was apply it to complex assembly, and do it systematically.</p>
<p>The sequence at Highland Park was incremental. Sub-assemblies were put on lines first — the magneto in 1913 cut assembly time from twenty minutes to five. Then engines and transmissions. Then, in late 1913, the chassis itself, initially dragged past workers by a rope and windlass.</p>
<p>The results are the reason the technique spread. Chassis assembly fell from roughly twelve and a half hours to about ninety minutes. Model T output rose from tens of thousands to millions, and the price fell from around $850 in 1908 to under $300 by the mid-1920s.</p>
<p>The gains came from removing everything that was not assembly. Workers stopped walking between stations, stopped fetching parts, stopped searching for tools. Each performed a small number of operations repeatedly, at a height and position arranged for the task. Parts were delivered to the point of use.</p>
<p>The line also enforced its own discipline. A worker who fell behind on a moving line was visibly behind, and the work physically moved away from them. No foreman was required to set the pace, because the conveyor did it — which is the feature that made the line contentious.</p>

<h2 id="Five_dollars">The five-dollar day was not generosity</h2>
<p>Ford announced in January 1914 that he would pay five dollars a day, roughly double the prevailing rate, for an eight-hour shift.</p>
<p>It is often presented as an act of enlightenment, sometimes with the added claim that Ford wanted his workers to afford his cars. That claim does not survive the arithmetic — Ford's workers were a negligible share of his market — and Ford himself gave the real reason.</p>
<p>The problem was turnover. The work was monotonous, paced by machinery, and physically punishing in a way craft work was not. Ford's annual labour turnover in 1913 has been reported at around 370 per cent, meaning the company hired something like 50,000 people to maintain a workforce of 14,000. Every departure meant recruiting and training a replacement, and absenteeism ran at ten per cent on an ordinary day.</p>
<p>Doubling the wage cut turnover dramatically and paid for itself in training costs alone. It is one of the clearest historical examples of an efficiency wage — paying above market rate because the higher wage changes worker behaviour enough to be profitable.</p>
<p>The conditions attached are less often mentioned. The full five dollars was contingent on approval by Ford's Sociological Department, which sent investigators into workers' homes to assess thrift, sobriety, domestic arrangements and whether they were sending money abroad. Workers judged unsatisfactory received the base rate. The scheme paid well and purchased a degree of supervision over private life that would now be unthinkable.</p>

<h2 id="Taylorism">Scientific management, and what was wrong with it</h2>
<p>Frederick Winslow Taylor's system, published in 1911, ran alongside the line and is often conflated with it.</p>
<p>Taylor's method was to break a job into elementary motions, time each with a stopwatch, identify the fastest sequence, and impose it as the one best way. Planning was to be separated entirely from execution: management would determine method, workers would perform it.</p>
<p>Genuine gains came from this. Standardising tools, matching tool size to task, and scheduling rest periods to reduce fatigue all produced measurable improvements, and the study of work as an object of analysis was a real contribution.</p>
<p>The failures were substantial. Taylor's own famous case studies have been examined by historians and found to be at best embellished — the pig iron loading demonstration in particular does not withstand scrutiny of the surviving records. His premise that workers were motivated by money alone and had nothing to contribute about method was both insulting and wrong, and it forfeited exactly the knowledge that the people doing the job possessed.</p>
<p>Separating planning from execution also removed the feedback loop by which processes actually improve, which is precisely what later Japanese manufacturing systems reversed by pushing responsibility for improvement back down to the line.</p>

<h2 id="Toyota">What replaced it</h2>
<p>The Toyota Production System, developed from the 1950s under conditions of scarce capital and small domestic demand, inverted several of Ford's assumptions.</p>
<p>Ford's system was built for enormous volumes of an identical product; the Model T was famously available in any colour so long as it was black, because black enamel dried fastest. Toyota needed variety at low volume, which required changeovers to be fast rather than rare — reducing die changes from hours to minutes changed the economics of small batches entirely.</p>
<p>Just-in-time delivery cut inventory to near zero, which saves capital and also exposes problems: with no buffer stock, a defect stops the line immediately and must be fixed rather than worked around.</p>
<p>The andon cord is the emblematic reversal. Any worker could stop the entire line on finding a defect. Under Ford's logic this is unthinkable, since the line stopping is the worst outcome. Under Toyota's it is the point: a defect passed down the line is embedded in more work and costs far more to fix later.</p>
<p>Continuous improvement returned method to the workers, reversing Taylor directly.</p>
<p>The results were unambiguous by the 1980s, and the study that documented them for Western industry gave the approach the name lean production.</p>

<h2 id="Now">The line, generalised</h2>
<p>The assembly line's logic — decompose the task, specialise the station, control the pace externally, measure everything — turned out to be portable well beyond manufacturing.</p>
<p>It is visible in fast food kitchens, in call centres with scripted interactions and monitored handling times, in warehouse picking with handheld devices directing each movement and timing it, and in delivery work routed by an app.</p>
<p>The pace-setting mechanism has moved from a conveyor to software, which makes it adjustable individually and continuously rather than uniformly. Whether that is an improvement depends entirely on who is setting it and against what target, which is the same question Highland Park raised in 1913.</p>
<p>Automation has removed many of the worst line jobs, and the ones remaining are frequently those requiring dexterity and judgment that robots still handle poorly — which is why final assembly of complex products remains stubbornly manual, and why the fully automated factory has been about a decade away for roughly fifty years.</p>
`,
};
