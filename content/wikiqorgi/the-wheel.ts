import type { RewrittenArticle } from "./types";

export const theWheel: RewrittenArticle = {
  slug: "the-wheel",
  title: "The wheel: late, hard, and useless without the axle",
  sourceTitle: "Wheel",
  dek: "It arrives thousands of years after agriculture, weaving and metalworking, and entire advanced civilisations did without it on purpose.",
  standfirst:
    "The wheel is the standard shorthand for a primitive breakthrough, which gets almost everything about it wrong. It appears very late — after farming, pottery, writing and bronze — because the difficult part is not the disc but the fitted axle it must turn on, and because a wheel is worthless without a prepared surface to run it over. Several sophisticated civilisations knew of it and declined to use it for transport, for reasons that were entirely sound.",
  readingMinutes: 7,
  html: `
<h2 id="Why_so_late">Why it took so long</h2>
<p>The earliest evidence of wheeled vehicles is around 3500 BC, in Mesopotamia and Central Europe roughly simultaneously. By then people had been farming for five thousand years, firing pottery for four, weaving cloth, building cities and smelting metal.</p>
<p>The reason is that a wheel alone does nothing. What is required is a wheel-and-axle assembly, and the tolerances are the problem. The axle must be round enough and smooth enough to turn with acceptable friction, the hole through the wheel must fit it closely enough not to wobble but loosely enough to rotate, and the whole thing must bear the load without the axle snapping or wearing through. Achieving this in wood requires precise woodworking tools, which requires metal.</p>
<p>There is also a geometric trap. A thicker axle is stronger but has more surface in contact, so friction rises sharply; a thinner one turns easily and breaks. The workable range is narrow, and finding it is not obvious.</p>
<p>The potter's wheel appears earlier and is often cited as the ancestor. It is a much easier problem — it carries a light load, spins on a fixed pivot, and never has to move anywhere.</p>

<h2 id="Roads">The wheel is a claim about the ground</h2>
<p>A wheel outperforms a sledge only on a surface that is hard, reasonably level, and continuous. On soft ground it sinks, and a narrow wheel bearing a heavy load sinks faster than a sledge's broad runners. On rocky or steep terrain it is worse than useless.</p>
<p>So adopting wheeled transport commits a society to building and maintaining roads, which is an enormous permanent expense. The Roman road network is usually presented as an achievement of engineering, and it is equally a consequence: having standardised on wheeled military logistics, Rome had no choice but to pave.</p>
<p>This explains the cases that otherwise look inexplicable. Mesoamerican civilisations built cities, pyramids, calendars and writing systems, and are commonly said not to have known the wheel — but wheeled ceramic figurines have been excavated, so they clearly knew the principle. What they lacked was any draught animal capable of pulling a cart, and terrain that would have rewarded one. A wheel with nothing to pull it, in mountains and jungle, is a toy, and they used it as one.</p>
<p>The camel case is more striking still. Wheeled transport was in general use across the Middle East and North Africa, and between roughly the fourth and sixth centuries it substantially disappeared, replaced by camel caravans. This was not decline. A camel carries a heavy load over ground no cart can cross, needs no road, requires no wheelwright, and eats what it finds. Where infrastructure was decaying, the animal was simply more efficient — and cities rebuilt without wheeled traffic acquire the narrow winding lanes characteristic of old medinas, because streets only need to be cart-width if carts use them.</p>

<h2 id="Improvements">The improvements that mattered more than the wheel</h2>
<p>The original solid disc wheel is heavy, and weight at the rim is the worst place for it, since accelerating a vehicle means accelerating the rotation of every wheel as well.</p>
<p>The <strong>spoked wheel</strong>, appearing around 2000 BC, removes most of that mass while keeping the rim supported. Its immediate consequence was the light chariot, which was fast enough to be a weapon rather than a wagon, and which reorganised warfare across Eurasia for the better part of a millennium.</p>
<p>The <strong>iron tyre</strong>, fitted hot and shrunk on as it cooled, both protected the rim and compressed the whole wheel together. This was the wheelwright's central skill, and it is why the trade was a specialism rather than general carpentry.</p>
<p>The <strong>pivoting front axle</strong> allowed a four-wheeled wagon to turn, which sounds trivial and is the difference between a vehicle and a load-bearing sled with wheels.</p>
<p>Rolling-element <strong>bearings</strong> — balls or rollers between the axle and the hub — replaced sliding friction with rolling friction and cut losses dramatically. Leonardo sketched them; they became manufacturable only when steel could be produced to consistent hardness and precise dimensions, in the nineteenth century.</p>
<p>The <strong>pneumatic tyre</strong>, patented by Dunlop in 1888 for bicycles, was the last major change. An air-filled tyre deforms to the surface instead of transmitting every irregularity to the vehicle, which reduces rolling resistance on imperfect roads and makes speed survivable. Neither the bicycle nor the motor car would have been tolerable without it.</p>

<h2 id="Physics">What it actually does</h2>
<p>A wheel does not reduce friction in the sense of making surfaces slippery. It changes the kind of friction involved.</p>
<p>Dragging an object means shearing the contact between two surfaces continuously. A rolling wheel does not slide against the ground at all: at every instant the contact point is momentarily stationary relative to the surface. The energy loss comes instead from deformation — the tyre flexing, the ground compressing — and from friction at the axle, which is why bearings and lubrication matter so much.</p>
<p>The numbers are large. Rolling resistance for a steel wheel on a steel rail is on the order of a thousandth of the load, against sliding friction between dry surfaces of perhaps a third. This ratio is the entire case for railways: it is why one locomotive can pull a train weighing thousands of tonnes, and why a rail vehicle takes a mile to stop.</p>
<p>The trade-off is that the same low friction means poor traction, so rail systems are limited to gentle gradients and need enormous braking distances. Every property of railway operation follows from that one number.</p>

<h2 id="Where_it_still_fails">Where it still loses</h2>
<p>Wheels remain bad at exactly what they were always bad at, and modern engineering has not fixed it.</p>
<p>Legs handle rough terrain better, which is why walking machines are pursued despite being harder to build and control in every other respect. Tracks spread load over a much larger area and are used wherever the ground will not bear a wheel — snow, mud, loose sand, battlefields.</p>
<p>Mars rovers use wheels and are limited by them: one became permanently stuck in soft sand, and driving speeds are kept low partly because a stuck vehicle cannot be recovered. Wheel damage from sharp rocks has been a recurring problem on the larger rovers, addressed by redesigning the tread pattern for later missions.</p>
<p>Stairs remain the domestic version of the same limitation, and the reason wheeled access is a design requirement rather than an assumption.</p>
<p>Underneath it all is the point the standard story misses entirely. The wheel is not a general-purpose solution that a clever ancestor happened to hit on. It is a highly specific one that pays off only in combination with roads, draught power, precision joinery and metal — and where any of those is missing, the societies that skipped it were making the correct call.</p>
`,
};
