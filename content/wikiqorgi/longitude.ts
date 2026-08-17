import type { RewrittenArticle } from "./types";

export const longitude: RewrittenArticle = {
  slug: "longitude",
  title: "Longitude: knowing where you are at sea is a clock problem",
  sourceTitle: "History of longitude",
  dek: "Latitude you can read off the sky in an afternoon. Longitude requires knowing what time it is somewhere else.",
  standfirst:
    "For most of the age of sail, navigators could establish how far north or south they were with reasonable confidence and had essentially no way to determine how far east or west. Ships were wrecked on coasts their captains believed were still days away. The solution turned out to require not better astronomy but a clock that would keep time on a rolling, damp, temperature-swinging ship — and the man who built it spent forty years being refused his prize.",
  readingMinutes: 7,
  html: `
<h2 id="Why_one_is_easy">Why one coordinate is easy and the other is not</h2>
<p>Latitude has a natural reference: the Earth's axis. Measure the angle of the pole star above the horizon, or the sun's height at noon with a table of its seasonal declination, and you have your latitude to within a fraction of a degree. Sailors were doing this competently for centuries with instruments of modest precision.</p>
<p>Longitude has no such reference, because the Earth is symmetrical about its axis and every meridian looks like every other. There is nothing in the sky that tells you which one you are on.</p>
<p>What does distinguish them is time. The Earth turns 360 degrees in 24 hours, so one hour of difference between local time and the time at a known reference meridian is exactly fifteen degrees of longitude. Local time is easy — the sun is highest at local noon. So the entire problem reduces to knowing, while at sea, what time it currently is at a fixed reference place.</p>
<p>This had been understood since at least the sixteenth century. Gemma Frisius stated the clock method in 1530. Nobody could build the clock.</p>

<h2 id="Dead_reckoning">What they did instead</h2>
<p>Dead reckoning estimates position from a starting point, a heading and a speed maintained over time. Speed was measured with a chip log — a weighted board thrown overboard on a knotted line, the knots counted as it ran out over a sandglass interval, which is why speed at sea is measured in knots.</p>
<p>The errors compound relentlessly. Currents set the ship sideways without any indication. Leeway pushes it downwind. Compass readings are corrupted by magnetic variation that differs by place and drifts over decades, and by the ship's own iron. Each is small; over weeks they accumulate into hundreds of miles.</p>
<p>The practical workaround was to sail to the latitude of the destination well out to sea, then run along that parallel until land appeared. This is safe, wasteful of time, and — since everyone did it — concentrated shipping onto predictable tracks that pirates also knew about.</p>
<p>The disaster that forced political action was the loss of Sir Cloudesley Shovell's fleet on the Scilly Isles in 1707. Four ships and something approaching two thousand men were lost, in home waters, because the fleet believed it was safely west of the islands. Parliament passed the Longitude Act in 1714, offering up to £20,000 — a fortune — for a practical method.</p>

<h2 id="Lunar_distance">The astronomers' method</h2>
<p>The favoured approach among scientists was lunar distance, and it is genuinely ingenious. The moon moves against the background stars fast enough to serve as a clock hand across the sky. Measure the angle between the moon and a chosen star, consult tables predicting that angle for each moment of reference time, and you have the reference time.</p>
<p>Its problems were practical rather than theoretical. The observation required a precise instrument and a skilled observer on a moving deck. The moon's motion is irregular enough that producing accurate tables took decades of observation — which was the reason the Royal Observatory at Greenwich had been founded in the first place. And the calculation to correct for refraction and the observer's position on the globe took a competent navigator around four hours per fix.</p>
<p>It worked. The <em>Nautical Almanac</em> from 1767 made it usable, and lunars were the standard method for a period. Four hours of spherical trigonometry after every observation is nonetheless a considerable ongoing cost, and it left the method vulnerable to anything simpler.</p>

<h2 id="Harrison">The carpenter who built the clock</h2>
<p>John Harrison was a Lincolnshire joiner with no formal training who built wooden clocks of unusual accuracy, and he spent his life on the sea clock problem.</p>
<p>A pendulum is useless at sea, since it depends on gravity acting along a fixed line and a ship provides nothing of the kind. Temperature changes alter the length of every component and hence the rate. Humidity and salt corrode. Lubricants thicken in cold and thin in heat, changing friction. The clock must run for months without being touched and lose only seconds, because three seconds a day accumulates into an error of roughly a degree over a voyage.</p>
<p>Harrison solved these one at a time, and his solutions are still in use. Counter-oscillating balances linked so that the ship's motion affects both equally and cancels. The gridiron pendulum and later bimetallic strips, using two metals with different expansion rates so that their combination stays constant. The grasshopper escapement, nearly frictionless. Lignum vitae, a wood containing its own oils, so that bearings needed no lubricant at all.</p>
<p>His first three machines were large and heavy. The breakthrough was abandoning that line entirely: H4, completed in 1759, is a large watch about thirteen centimetres across, using a fast-oscillating balance whose momentum makes it far less disturbed by the ship's motion. On its 1761 trial to Jamaica it lost around five seconds over eighty-one days.</p>

<h2 id="The_dispute">The argument about the prize</h2>
<p>The Board of Longitude did not pay. Its membership included astronomers with a professional and intellectual investment in the lunar method, and the requirements were repeatedly adjusted: another trial, then disclosure of the mechanism, then the construction of duplicates by other makers to prove the design was reproducible rather than a single freak instrument.</p>
<p>Some of these conditions were not unreasonable. A prize for a practical method should establish that the method can be manufactured, and one irreplaceable watch made by one ageing genius is not a solution to a national problem. The Board's demands, in the abstract, were defensible.</p>
<p>The conduct was less so. Nevil Maskelyne, who became Astronomer Royal and a Board member while actively promoting lunar distance and publishing the almanac that supported it, was in a position that would now be recognised as a conflict of interest, and he examined Harrison's watch himself.</p>
<p>Harrison received substantial payments over the years but never the prize as such. In his eighties he petitioned the King, who intervened, and Parliament granted him a further award in 1773. He died three years later.</p>
<p>The popular telling casts this as genius versus establishment, which is satisfying and somewhat unfair. The lunar method genuinely worked and was cheaper, chronometers were initially far too expensive for general use, and for decades navigators used both — taking lunars to check the chronometer's rate. The clock won only when watchmaking industrialised enough to make marine chronometers affordable in quantity, which took another fifty years.</p>

<h2 id="After">What replaced it, and what did not change</h2>
<p>Radio time signals from the early twentieth century removed the need for a clock to keep reference time at all — a receiver could simply be told. Radio navigation systems then let a ship determine position from signal timing without any celestial observation.</p>
<p>Satellite positioning is the same principle taken to its conclusion, and it is worth noticing that it is still a clock problem. A receiver determines its position by comparing the arrival times of signals from satellites carrying atomic clocks, and the accuracy of the fix is limited by timing precision. The satellites' clocks must be corrected for relativistic effects, since they run at a different rate from clocks on the ground.</p>
<p>The prime meridian at Greenwich was fixed by an international conference in 1884, and the reason was Harrison's: most of the world's shipping already carried British charts and almanacs computed from that meridian, and the standard followed the practice. The line on the ground at the observatory is now around a hundred metres from the meridian satellite systems actually use, because the modern reference frame is defined by the Earth's centre of mass rather than by a particular telescope — which produces the mildly absurd result that visitors photograph themselves standing on a line that is no longer the line.</p>
`,
};
