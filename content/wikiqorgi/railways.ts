import type { RewrittenArticle } from "./types";

export const railways: RewrittenArticle = {
  slug: "railways",
  title: "Railways: the first machine that forced everyone to agree what time it was",
  sourceTitle: "Rail transport",
  dek: "Before trains, every town kept its own clock by the sun, and this was fine. A timetable made it lethal.",
  standfirst:
    "The railway's technical achievement is a very low-friction interface between steel and steel. Its social achievement is stranger: it made local time unworkable, produced the first standardised time zones, invented modern management as a discipline, and imposed a schedule on people who had never previously needed one. Almost everything about how industrial society organises itself in time can be traced to a scheduling problem on a single track.",
  readingMinutes: 8,
  html: `
<h2 id="Steel_on_steel">The physics is the whole thing</h2>
<p>A steel wheel on a steel rail has extraordinarily low rolling resistance — on the order of a thousandth of the load, against perhaps a hundredth for a rubber tyre on asphalt. This single ratio determines every characteristic of railway operation.</p>
<p>It is why one locomotive can move thousands of tonnes, and why rail freight remains far more energy-efficient per tonne-kilometre than road.</p>
<p>It is also why trains cannot climb and cannot stop. The same low friction that reduces resistance reduces grip, so gradients must be gentle — typically well under two per cent on main lines — and a heavy train takes a kilometre or more to halt. Railway engineering is largely the business of avoiding slopes, hence the cuttings, embankments, viaducts and tunnels that make a railway more expensive to build than a road and cheaper to run.</p>
<p>The flanges on the wheels are not what keeps a train on the track, which is the common assumption. The wheel treads are coned, so if the wheelset drifts sideways the larger rolling radius on one side steers it back. The flanges are a last resort, and a train riding on its flanges is a train in trouble. This self-centring geometry also lets a rigid axle with both wheels fixed to it negotiate curves, where the outer wheel must travel further.</p>

<h2 id="Time">Time had to be standardised</h2>
<p>Local solar time varies with longitude — roughly four minutes for every degree — so noon in one town was several minutes off noon in the next. For centuries this mattered to nobody, because no information travelled faster than a horse.</p>
<p>A railway timetable made it intolerable and then dangerous. On single-track lines, trains passed each other at loops according to schedule, and if two crews were working from clocks that differed by ten minutes, the schedule was not a coordination device but a hazard. Collisions attributable to time discrepancies were a real category.</p>
<p>British railways adopted London time across their networks from the 1840s, distributing it by telegraph, and for some years towns kept two times — railway time and local time — with station clocks occasionally carrying two minute hands. Statutory unification followed in 1880, decades after the practice.</p>
<p>The global system came from an 1884 conference that divided the world into hourly zones from a prime meridian at Greenwich, chosen because most shipping already used British charts. So the reason a whole country shares a single clock reading, and the reason that reading jumps by an hour at an arbitrary line, is a nineteenth-century scheduling problem.</p>
<p>The habit went deeper than the clock. Punctuality as a personal virtue, the working day as a fixed interval, the idea that being late is a failing rather than an approximation — these are not ancient. They are what a population learns when missing a departure by two minutes means missing it entirely.</p>

<h2 id="Management">It invented the modern company</h2>
<p>Railways were the first enterprises too large and too dispersed to be run by an owner who could see the whole operation.</p>
<p>A canal company or a textile mill could be supervised directly. A railway had thousands of employees spread over hundreds of miles, operating expensive equipment in circumstances where a wrong decision killed people, and no principal could observe any of it.</p>
<p>The response was the invention of administrative structure: written operating rules covering every foreseeable situation, a clear hierarchy with defined authority, standardised reporting flowing upward on fixed schedules, and the separation of line operations from staff functions such as accounting and engineering. Daniel McCallum's organisational chart for the New York and Erie in the 1850s is generally taken as the first of its kind.</p>
<p>Cost accounting also became necessary here first, because a railway's costs are overwhelmingly fixed and the question of what a particular train actually costs to run has no obvious answer. Techniques developed to price rail freight became general business practice.</p>
<p>Alfred Chandler's argument that the modern corporation was invented by railways, and adopted afterwards by everyone else, remains the standard account precisely because the pressures were unique to them and the solutions turned out to be general.</p>

<h2 id="Gauge">The gauge, and the cost of getting a standard wrong</h2>
<p>Track gauge is the distance between the rails, and the dominant standard of four feet eight and a half inches is a number that looks like it was chosen by accident because it was.</p>
<p>It derives from the wagonways of English collieries, whose dimensions followed from the carts and the horses that had preceded them, and it became universal because George Stephenson used it and Stephenson's locomotives worked.</p>
<p>Brunel's Great Western used seven feet and a quarter inch instead, and by most engineering measures it was better — more stable, faster, with more room for machinery beneath the carriage. It lost anyway, because a network's value lies in connecting to other networks, and being technically superior and incompatible is a losing position. The Great Western spent decades and a great deal of money converting.</p>
<p>Where gauge differences survived they became strategic. Spain and Russia adopted broad gauges, with the frequently repeated claim that this was to impede invasion; the evidence for deliberate military motivation is thinner than the story suggests, but the effect was real and freight still has to be transhipped or have its bogies changed at those borders.</p>
<p>Australia's colonies chose three different gauges independently, and the country spent most of the twentieth century dealing with the consequences.</p>

<h2 id="Safety">Signalling, and why the rules are written like that</h2>
<p>Trains cannot stop within sight, cannot steer, and share a track. Preventing collisions therefore requires a system that guarantees separation rather than relying on drivers seeing danger.</p>
<p>The block system divides the line into sections and permits only one train in each. Early versions relied on time intervals, which fails if a train stops unexpectedly. The track circuit, patented in 1872, uses the train's own axles to short an electrical circuit through the rails, so the signalling system detects occupancy automatically — and crucially fails safe, since a broken rail or a power failure produces an occupied indication and stops traffic.</p>
<p>Interlocking prevents signals and points being set into conflicting combinations, originally through mechanical linkages that made a dangerous lever physically immovable rather than merely forbidden.</p>
<p>Automatic train protection intervenes when a driver does not, applying brakes at a signal passed at danger. Its absence has been the identified cause in a long series of accidents, and its installation has generally followed inquiries rather than preceded them — which is the standard pattern in railway safety, where the rulebook is a list of things that have already killed people.</p>

<h2 id="Now">The reversal</h2>
<p>Railways were dominant, were displaced by road and air across most of the twentieth century, and have returned for specific tasks rather than generally.</p>
<p>High-speed rail, beginning with the Shinkansen in 1964, wins decisively over air on journeys of roughly two to four hours because the comparison is city centre to city centre and includes the airport. Where such lines exist, air routes on the same corridor tend to collapse.</p>
<p>Urban rail is unmatched for throughput. A metro line can move tens of thousands of passengers per hour in a corridor a few metres wide, which no arrangement of road space approaches, and this is a geometric fact rather than a preference.</p>
<p>Freight rail dominates long-distance bulk movement and struggles with anything requiring flexibility, because a railway goes where the track goes and something has to complete the journey.</p>
<p>And rail is the easiest transport mode to decarbonise, since electrification runs a wire above the vehicle rather than requiring the energy to be carried — which is the same structural advantage it had over the horse, applied to a different problem.</p>
`,
};
