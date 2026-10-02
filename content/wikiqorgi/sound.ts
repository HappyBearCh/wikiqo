import type { RewrittenArticle } from "./types";

export const sound: RewrittenArticle = {
  slug: "sound",
  title: "Sound: a pressure wave in which nothing actually travels",
  sourceTitle: "Sound",
  dek: "A voice crosses a room without any air crossing it. What moves is a pattern of squeezing, passed along molecule to molecule at a third of a kilometre a second.",
  standfirst:
    "Sound is easy to describe badly. It is not a substance, and the air that carries it barely moves: each molecule shuffles back and forth over a distance smaller than a bacterium and ends up where it started. What travels is a disturbance — a ripple of slightly higher and slightly lower pressure — and almost everything strange about sound, from why it turns corners to why Isaac Newton got its speed wrong, follows from that.",
  readingMinutes: 7,
  published: "2026-10-02",
  html: `
<h2 id="Nothing_travels">A disturbance, not a thing</h2>
<p>When a loudspeaker cone pushes forward it crowds the air in front of it slightly, and that crowded layer pushes on the next. When the cone pulls back it leaves a slightly thinned region, which the next layer relaxes into. The result is a train of compressions and rarefactions moving outward, while each parcel of air only oscillates in place along the direction the wave is going. That makes sound a longitudinal wave, unlike the transverse ripple on a pond or a plucked string, where the medium moves at right angles to the wave.</p>
<p>Because the wave is a pattern in a medium, it needs a medium. Robert Boyle demonstrated this in the 1660s by pumping the air out of a jar containing a ticking watch and finding the ticking faded as the air went. Space is silent for the same reason, and the roar that accompanies every explosion in a film set in orbit is an artistic convention rather than physics.</p>
<p>The pressure changes involved are astonishingly small. Normal conversation corresponds to pressure swings of a few hundredths of a pascal against an atmospheric pressure of around a hundred thousand pascals — a variation of a few parts in ten million. The ear's ability to detect changes of that size, and fainter ones still, is the reason hearing is such a sensitive instrument.</p>

<h2 id="Newtons_error">The speed Newton got wrong</h2>
<p>In dry air at room temperature sound travels at about 343 metres per second. Seventeenth-century experimenters measured it by timing the gap between the flash and the bang of a distant cannon, and arrived at figures in that neighbourhood.</p>
<p>Isaac Newton then tried to derive it from first principles in the <em>Principia</em>, treating air as a spring whose stiffness came from its pressure. His calculation came out roughly fifteen per cent too low. Rather than abandon the theory, he proposed corrections — dust and water vapour in the air, the solid size of the particles themselves — that brought the answer into line. They were not convincing, and the gap stood for more than a century.</p>
<p>Pierre-Simon Laplace resolved it in 1816. Newton had assumed the temperature of the air stayed constant as it was compressed. In fact compression happens too quickly for heat to flow away, so each compressed region warms slightly and pushes back harder than a constant-temperature gas would. Accounting for that — treating the process as adiabatic rather than isothermal — raises the predicted speed by exactly the missing amount. The episode is a useful reminder that a theory can be nearly right for a deep reason and still need a second idea to come out right.</p>
<p>The speed depends on how stiff a medium is relative to how dense it is. Water is much denser than air but far harder to compress, so sound moves through it more than four times faster, at around 1,500 metres per second. In steel it is several times faster again. In air the speed rises with temperature and is essentially independent of pressure, which surprises people who expect thin mountain air to carry sound more slowly.</p>

<h2 id="Loudness">Measuring a range of a trillion to one</h2>
<p>The quietest sound a young, healthy ear can detect and the loudest it can bear without pain differ in intensity by a factor of roughly a trillion. No linear scale handles that comfortably, which is why sound levels are given in decibels: a logarithmic unit in which every ten decibels is a tenfold increase in intensity.</p>
<p>The decibel scale has a cost in intuition. A sound of 90 decibels is not a little louder than one of 80; it carries ten times the power. Perceived loudness grows much more slowly than intensity — a ten-decibel rise sounds roughly twice as loud — so the ear is itself doing something close to a logarithm, which is part of why the scale works at all.</p>
<p>Two sources do not make something twice as loud. Doubling the power adds about three decibels, a change most listeners can only just notice. And intensity falls with the square of the distance from a small source in open air, so moving from one metre away to two drops the level by about six decibels.</p>

<h2 id="Corners">Why you can hear round a corner but not see round it</h2>
<p>Every wave bends around obstacles and spreads through openings, an effect called diffraction, and the amount depends on how the wavelength compares with the size of the obstacle. Audible sound has wavelengths from about seventeen metres at the low end to under two centimetres at the high end — the scale of doorways, furniture and people. Light has wavelengths of a few hundred nanometres. So sound spreads into the room next door through the open door while light goes straight past it.</p>
<p>The bending is not equal across frequencies, which is why a band heard from around a corner or through a wall is mostly bass. The long wavelengths diffract and penetrate; the short ones are blocked and absorbed. It is also why low notes are hard to locate and why a single subwoofer can be placed almost anywhere in a room.</p>
<p>Sound also refracts — changes direction — when its speed varies along its path. On a calm evening, air near cool ground is colder than the air above it, sound travels faster higher up, and waves bend back down toward the listener. That is why distant traffic and church bells can be startlingly clear at night. In the ocean the same principle produces a layer, roughly a kilometre down in many regions, where the speed of sound reaches a minimum and sound is trapped and channelled across entire ocean basins with little loss.</p>

<h2 id="Moving_sources">Moving sources and the barrier that wasn't</h2>
<p>When a source of sound moves toward a listener, each successive wave crest is emitted from a little closer, so the crests arrive bunched together and the pitch is higher; as it moves away, the pitch drops. Christian Doppler described the effect in 1842, and it was tested in the Netherlands a few years later with musicians playing a steady note on an open railway carriage while trained listeners on the platform judged the pitch as it passed.</p>
<p>If the source moves faster than sound itself, the waves cannot get ahead of it at all. They pile up along a cone trailing the object, and the abrupt pressure jump at its edge is heard on the ground as a sonic boom — not once, as the aircraft breaks the "barrier," but continuously along its path for as long as it flies supersonically.</p>
<p>Aircraft approaching the speed of sound in the 1940s met severe buffeting and loss of control as shock waves formed over their wings, which encouraged talk of a physical barrier. Chuck Yeager flew the rocket-powered Bell X-1 past it in 1947. The obstacle had been real but aerodynamic: a matter of wing shape and control surfaces rather than any wall in the air.</p>
`,
};
