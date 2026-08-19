import type { RewrittenArticle } from "./types";

export const clocks: RewrittenArticle = {
  slug: "clocks",
  title: "Clocks: the machine could not manage unequal hours, so the hours were changed",
  sourceTitle: "Clock",
  dek: "For most of history an hour was a twelfth of daylight and got longer in summer. Mechanical clocks tick at one rate, and within a century the definition of an hour had given way.",
  standfirst:
    "The mechanical clock is one of the few inventions that rewrote the thing it was built to measure. Before it, an hour was a proportion of the day, longer in summer and shorter in winter, and every timekeeping device from the sundial to the water clock accommodated that. A gear train cannot. The clock kept equal hours because it had no alternative, and within roughly a century Europe had adopted equal hours because the clocks did.",
  readingMinutes: 7,
  html: `
<h2 id="Unequal_hours">The hour that changed length</h2>
<p>The classical and medieval hour was seasonal. Daylight was divided into twelve parts and darkness into twelve more, so a daytime hour in June was substantially longer than one in December, and the two were equal only at the equinoxes.</p>
<p>This was not primitive. It was the sensible unit for a society whose activity was bounded by daylight, and it is exactly what a sundial measures naturally, since the shadow sweeps through the same arc between sunrise and sunset in any season. Water clocks were built with compensating mechanisms — variable-flow vessels, adjustable scales, seasonal dials — specifically to reproduce unequal hours, which tells you how strongly the convention was held.</p>
<p>Monastic life gave the problem its urgency. The offices had to be sung at set points through the day and night, and getting a community out of bed for matins in the dark required something that would work without sunlight and without a watchman staying awake. Water clocks driving alarm bells did this and needed constant attention.</p>
<p>Then, somewhere in Europe in the late thirteenth century, the escapement appeared. Nobody knows who invented it or precisely when, because the early records describe clocks without describing mechanisms, and the first devices had no dials and no hands at all. They were bell-ringing machines: <em>clocca</em> means bell, and the object was named after its output.</p>

<h2 id="Escapement">What the escapement does</h2>
<p>A falling weight will unwind a drum as fast as gravity allows, which is useless. The whole problem of mechanical timekeeping is releasing that energy in equal, countable portions.</p>
<p>The escapement solves it by interposing an oscillator. A toothed wheel driven by the weight is caught and released, tooth by tooth, by a component that swings back and forth; each swing lets exactly one tooth pass. The energy that drives the hands is the same energy that keeps the oscillator going, which is elegant and is also the source of every accuracy problem in horology, since pushing an oscillator disturbs it.</p>
<p>The earliest form, the verge and foliot, used a horizontal bar with adjustable weights as its oscillator. It had no natural period of its own — its rate depended on how hard it was being pushed — and the resulting clocks drifted by many minutes a day. They were adjusted daily against a sundial, which is a good indication of the hierarchy: the machine was the convenience and the sun was the authority.</p>
<p>The transformation came in 1656, when Christiaan Huygens applied the pendulum, following Galileo's observation that a pendulum's period depends on its length rather than on the size of its swing. Accuracy improved from minutes a day to seconds a day almost immediately — one of the largest single jumps in precision in the history of measurement. The anchor escapement soon after allowed a smaller swing, which suited the long seconds-beating pendulum and produced the longcase clock.</p>
<p>Everything afterwards is refinement against specific error sources: temperature compensation for a pendulum rod that changes length, barometric compensation for air resistance and buoyancy, and eventually the removal of the pendulum from the driving train altogether in the free-pendulum clocks of the early twentieth century, which held to a few thousandths of a second a day.</p>

<h2 id="Equal_hours">How the clocks won the argument</h2>
<p>A weight-driven gear train runs at one rate. Making it produce hours that lengthen through spring would require a mechanism that changes ratio continuously through the year — buildable in principle, and Japanese clockmakers did build such things for centuries because Japan kept seasonal hours until 1873, with movable hour markers and clocks adjusted twice a month.</p>
<p>Europe did the opposite. The clocks kept equal hours, and the towns adopted equal hours. Public clocks spread across European cities through the fourteenth century, and with them the striking of hours over the whole community, audible whether or not anyone wanted to hear it.</p>
<p>The social consequence is well documented and worth stating plainly. Work in textile towns began to be measured and paid by clock time rather than by task, disputes over the length of the working day became disputes about the town clock, and the phrase for it in fourteenth-century Flanders — <em>werkglocke</em>, the work bell — describes the arrangement exactly. E. P. Thompson's account of the shift from task-orientation to time-discipline traces the whole industrial pattern of labour to this substitution.</p>
<p>The clock also supplied a metaphor that ran through European thought for three centuries: a universe of interlocking parts, set going and left to run, knowable by taking it apart. It is difficult to separate the mechanical philosophy from the machine that made it plausible.</p>

<h2 id="Portable">Getting it into a pocket</h2>
<p>A pendulum cannot be carried, since tilting or moving it destroys its period. Portable timekeeping required a different oscillator: the balance wheel with a spiral hairspring, again largely due to Huygens in the 1670s, which oscillates about its own axis and does not care about orientation.</p>
<p>Early watches were bad — a variation of many minutes a day was normal — and remained ornaments rather than instruments for a long time. The problem that forced them to improve was navigation, because longitude at sea can be found by comparing local noon against the time at a known meridian, and that requires a clock that keeps time on a ship for months through heat, damp and motion.</p>
<p>John Harrison's marine timekeepers, developed over decades in the middle of the eighteenth century, solved it with a combination of temperature-compensated components, near-frictionless bearings and a mechanism that kept running while being wound. His H4 of 1759 was a large watch rather than a clock, and it worked.</p>
<p>Mass production followed in the nineteenth century, driven by railways, which needed every station on a line to agree. The American factory system produced interchangeable-part watches cheap enough for working people, and by the early twentieth century personal time was ordinary.</p>

<h2 id="Quartz">The end of mechanism</h2>
<p>A quartz crystal cut correctly vibrates at a highly stable frequency when a voltage is applied, and the frequency can be divided down electronically to drive a display or a motor.</p>
<p>Quartz clocks were laboratory instruments from the late 1920s and became wristwatches around 1969. The effect on the mechanical watch industry was severe and rapid: a cheap quartz movement outperformed an expensive mechanical one by a large margin, employment in traditional watchmaking centres collapsed, and the surviving high-end industry repositioned itself around craft, heritage and jewellery rather than accuracy — which is the position it still occupies, selling objects that keep worse time than a disposable alternative and are valued for how they fail to.</p>
<p>The deeper break had already happened in 1967, when the second was redefined in terms of caesium rather than the rotation of the Earth. Until then a clock was an instrument for tracking the sky and the sky was the standard. Afterwards the standard was in the laboratory, the Earth's rotation became the thing being measured, and it turned out to be irregular.</p>
`,
};
