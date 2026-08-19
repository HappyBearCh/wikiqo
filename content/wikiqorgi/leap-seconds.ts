import type { RewrittenArticle } from "./types";

export const leapSeconds: RewrittenArticle = {
  slug: "leap-seconds",
  title: "The leap second: the Earth is an unreliable clock, and by 2035 we stop pretending",
  sourceTitle: "Leap second",
  dek: "Civil time is tied to a caesium atom and to the rotation of a planet, and the two disagree. For fifty years the fix has been an extra second inserted by hand.",
  standfirst:
    "There are two ways to define a second: as a fraction of the Earth's rotation, which is what a day has always meant, and as a fixed number of oscillations of a caesium atom, which is what the second officially became in 1967. The planet does not rotate at a constant rate, so the two definitions drift apart, and since 1972 the gap has been closed by occasionally inserting an extra second into the last minute of a day. That practice is scheduled to end.",
  readingMinutes: 7,
  html: `
<h2 id="Two_seconds">Two incompatible definitions</h2>
<p>The historical second was astronomical: a day divided by 86,400. This was serviceable for as long as nothing could measure the day precisely enough to notice it varying.</p>
<p>Better clocks noticed. Quartz clocks in the 1930s and atomic clocks from the 1950s were stable enough to reveal that the Earth's rotation is not — it varies seasonally, over decades, and irregularly. Using it as a frequency standard means using a standard that wanders.</p>
<p>In 1967 the second was redefined as 9,192,631,770 periods of the radiation corresponding to a specific transition in caesium-133. The number was chosen to match the astronomical second as it then stood, so that nothing appeared to change, and after that the atom was the authority.</p>
<p>This leaves two time scales. International Atomic Time, TAI, is the straightforward count of atomic seconds. Universal Time, UT1, tracks the actual rotation of the Earth and is measured by observing distant quasars with radio telescopes. Coordinated Universal Time, UTC, is the compromise everyone actually uses: it ticks in atomic seconds but is kept within 0.9 seconds of UT1 by inserting a leap second when the gap grows too large.</p>
<p>The reason to care about UT1 at all is that it is what the sky does. Astronomical pointing, satellite tracking and celestial navigation all need the orientation of the Earth, not an abstract count of seconds.</p>

<h2 id="Slowing">Why the planet is slowing, and why it is not simple</h2>
<p>The long-term trend is deceleration, caused mainly by tidal friction. The Moon raises tidal bulges in the oceans, the Earth's rotation drags those bulges slightly ahead of the Moon, and the gravitational pull between them transfers angular momentum from the Earth's spin to the Moon's orbit. The day lengthens by something on the order of a couple of milliseconds per century, and the Moon recedes by a few centimetres a year, which is measured directly by bouncing lasers off reflectors left on the surface.</p>
<p>Fossil evidence supports the long history. Growth banding in ancient corals and in tidal sediments indicates substantially more days per year in the distant past, meaning shorter days, consistent with a planet that has been slowing for a very long time.</p>
<p>Superimposed on that trend is a mess of shorter-term variation. Angular momentum moves between the solid Earth, the atmosphere and the oceans, so seasonal wind patterns change the rotation rate measurably. Motion in the liquid core exchanges momentum with the mantle on decadal scales. Large earthquakes redistribute mass and change the moment of inertia slightly. Melting ice sheets move mass from the poles toward the equator, which slows rotation, while the ongoing rebound of land depressed by vanished ice sheets moves mass toward the axis, which speeds it up.</p>
<p>The net result is that leap seconds cannot be predicted more than about six months ahead, which is precisely what makes them awkward. They are announced by the International Earth Rotation and Reference Systems Service, and the announcement is a measurement rather than a schedule.</p>
<p>Since around 2020 the Earth has been running slightly fast, producing several of the shortest days on record. If that persisted, the required correction would be a negative leap second — deleting a second rather than adding one — which has never been done and which essentially no software has been tested against.</p>

<h2 id="Mechanics">What actually happens</h2>
<p>A positive leap second is inserted at the end of a chosen day, preferentially the last day of June or December. The final minute of that day runs 23:59:58, 23:59:59, 23:59:60, and then 00:00:00.</p>
<p>The 23:59:60 is the problem. Most software assumes seconds run from 00 to 59, and most systems represent time as a count of seconds since an epoch — a representation that has no room for an extra one.</p>
<p>The consequences have been concrete. The 2012 leap second caused a kernel bug that sent large numbers of Linux servers into high CPU load, taking down parts of several major services; airline reservation systems were disrupted. The 2015 and 2016 events caused further incidents, including a network outage that affected a routing provider's customers.</p>
<p>The workaround that emerged from industry is to lie smoothly. Leap smearing spreads the extra second over a window of hours by running the clock imperceptibly slow, so no timestamp is ever repeated or missing and nothing sees a 60th second. Google, Amazon and others do this. It works, and it means that during the smear window those systems disagree with UTC by up to a second, and different providers smear over different windows with different curves, so they disagree with each other too.</p>
<p>That is the practical situation the standard was meant to prevent: instead of one time scale with an awkward correction, there are several approximations of it that differ during exactly the period when the correction matters.</p>

<h2 id="Abolition">The 2022 decision</h2>
<p>In November 2022 the General Conference on Weights and Measures resolved to stop inserting leap seconds by 2035, allowing the difference between UTC and UT1 to grow beyond a second and leaving the tolerance to be determined later.</p>
<p>The case for abolition is that the leap second protects a requirement almost nobody has any more. Systems that genuinely need the Earth's orientation — telescopes, satellite operations, geodesy — already obtain UT1 separately and apply it explicitly, because a correction accurate to only 0.9 seconds was never sufficient for their purposes. Everything else needs a monotonic, uniform time scale, which is what a leap second breaks.</p>
<p>The case against was made most strongly by Russia, whose GLONASS satellite navigation system incorporates leap seconds directly, unlike GPS, which has ignored them since 1980 and simply accumulates an offset. Other objections were about principle: severing civil time from the Sun means that, on a scale of centuries and millennia, clock noon drifts away from solar noon, and the eventual correction would have to be a leap minute or a leap hour, which merely postpones a much larger discontinuity.</p>
<p>The arithmetic of that worry is reassuring on any human timescale. At present rates the divergence would reach a minute in something on the order of a century, and an hour is a matter of millennia. Whether it is reasonable to hand a discontinuous hour-long correction to people in the year 4000 rather than a one-second correction every few years is a genuine question about intergenerational engineering, and it was answered in favour of the people who have to run the servers now.</p>
`,
};
