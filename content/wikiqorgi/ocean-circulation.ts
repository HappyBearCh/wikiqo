import type { RewrittenArticle } from "./types";

export const oceanCirculation: RewrittenArticle = {
  slug: "ocean-circulation",
  title: "Ocean circulation: a conveyor belt driven by salt and cold",
  sourceTitle: "Thermohaline circulation",
  dek: "Water that sinks in the North Atlantic will not surface again for a thousand years — and Europe's climate depends on it.",
  standfirst:
    "The ocean is usually pictured as a basin that wind pushes around at the surface. Underneath that is a slower system driven by density: water made heavy by cold and salt sinks in a few small regions, spreads across the planet at depth, and returns. It moves about as much heat as the atmosphere does, and it takes a millennium to complete a circuit.",
  readingMinutes: 7,
  html: `
<h2 id="Two_circulations,_stacked">Two circulations, stacked</h2>
<p>The surface ocean is driven by wind. Prevailing winds drag the top few hundred metres, and the Earth's rotation deflects the resulting flow, producing the great rotating gyres that fill each basin — clockwise in the northern hemisphere, anticlockwise in the southern.</p>
<p>Those gyres are lopsided, and the asymmetry matters. Because the Earth's rotation varies with latitude, the western side of each gyre carries a fast, narrow, deep current while the eastern return is broad and sluggish. The Gulf Stream and the Kuroshio are western boundary currents, moving water at several knots in a stream a hundred kilometres wide, carrying more water than every river on Earth combined by a wide margin.</p>
<p>Beneath that sits the thermohaline circulation, named for the two things that set water's density: temperature and salinity. Cold water is denser than warm. Salty water is denser than fresh. Make water cold and salty enough and it sinks — and once it sinks, it is out of contact with the atmosphere until it upwells somewhere else.</p>

<h2 id="Where_the_water_goes_down">Where the water goes down</h2>
<p>Deep water forms in very few places, and their smallness relative to their influence is the striking part.</p>
<p>In the North Atlantic, warm salty water carried north by the Gulf Stream loses heat to the cold air over the Nordic and Labrador Seas. Evaporation along the way has already concentrated its salt. Cooled, it becomes dense enough to sink, forming North Atlantic Deep Water that flows south at depth along the length of the Atlantic.</p>
<p>Around Antarctica, a different mechanism operates. When seawater freezes, the ice largely excludes salt, so sea-ice formation leaves behind extremely cold, extremely salty brine. This is the densest water in the ocean, and it sinks to the very bottom, spreading north beneath everything else as Antarctic Bottom Water.</p>
<p>The Pacific has no comparable sinking region, because its surface water is fresher — the Atlantic loses moisture to the atmosphere that rains out over the Pacific, a net freshwater transfer across Central America that keeps the Atlantic saltier and makes it the ocean where deep water forms.</p>

<h2 id="Coming_back_up">Coming back up</h2>
<p>Water that sinks must return, and the return path was long the weakest part of the picture. Diffuse warming across the whole ocean surface is too slow to account for it.</p>
<p>Most of the upwelling appears to happen in the Southern Ocean, where strong westerly winds circling Antarctica — unobstructed by any continent — draw deep water toward the surface. Wind-driven upwelling also occurs along certain coasts, where the wind pushes surface water offshore and deeper water rises to replace it.</p>
<p>Those coastal upwelling zones are disproportionately important to life. Deep water is rich in nutrients that have accumulated from sinking organic matter, and bringing it into the sunlit layer fuels enormous productivity. A handful of upwelling regions — off Peru, California, Namibia, north-west Africa — occupy a tiny fraction of the ocean's area and supply a large share of the world's fish catch. El Niño disrupts the Peruvian upwelling by warming the surface layer and capping it, and the collapse of the anchoveta fishery in such years is the most direct demonstration available of how tightly ecology is coupled to physics.</p>

<h2 id="Why_it_matters_for_climate">Why it matters for climate</h2>
<p>The circulation moves heat poleward on a scale comparable to the atmosphere's, and the redistribution is uneven enough to be politically significant.</p>
<p>North-west Europe is markedly warmer than its latitude implies. Comparing it with eastern North America at the same latitude is the standard illustration, though the popular version overstates the Gulf Stream's role — a substantial part of the difference is atmospheric, produced by how the winds interact with the Rockies. Ocean heat transport is nonetheless a real and large contributor.</p>
<p>The ocean also absorbs. It has taken up over 90 per cent of the excess heat trapped by the enhanced greenhouse effect, and roughly a quarter of emitted carbon dioxide. Both are buffering effects that have made warming at the surface far less severe than it would otherwise be, and both come with a bill: thermal expansion is a major component of sea level rise, and dissolved CO₂ forms carbonic acid, lowering ocean pH by an amount that sounds small on a logarithmic scale and represents a substantial increase in acidity.</p>

<h2 id="The_switch">The switch</h2>
<p>The circulation is not guaranteed to be stable, and the evidence that it can change abruptly is drawn from the geological record rather than from models.</p>
<p>The mechanism of concern is freshening. Deep water formation requires the surface water to be dense enough to sink; adding fresh water — from melting ice or increased rainfall — reduces its salinity and can stop the sinking. If the sinking stops, the northward surface flow that feeds it weakens, which reduces the salt delivered north, which weakens the sinking further. That is a self-reinforcing loop, and self-reinforcing loops can flip a system rather than nudge it.</p>
<p>The clearest historical instance is the Younger Dryas, around 12,900 years ago, when the warming out of the last glacial period reversed sharply and near-glacial conditions returned to the North Atlantic region within decades. The leading explanation is an enormous discharge of meltwater from a glacial lake into the North Atlantic, shutting down deep water formation.</p>
<p>Direct measurement of the modern Atlantic overturning began only in 2004, which is a short record for detecting a trend. Proxy reconstructions suggest a weakening over the past century, and the magnitude is disputed. Climate models generally project further weakening this century and mostly do not project full collapse, though several recent analyses argue the models are biased toward stability. The honest position is that a shutdown is not the expected outcome, is not excluded, and would matter enormously if it happened — which is an uncomfortable combination for anyone wanting a clean answer.</p>

<h2 id="How_we_know_any_of_this">How we know any of this</h2>
<p>The measurement problem is severe: the ocean is opaque to almost everything, enormous, and expensive to visit.</p>
<p>The single largest change in oceanography has been Argo, a fleet of several thousand autonomous floats that drift at depth, rise to the surface every ten days measuring temperature and salinity as they go, transmit by satellite, and sink again. Before it, the deep ocean's heat content was estimated from sparse ship transects; since it, there is a genuine global record.</p>
<p>Satellite altimetry measures sea surface height precisely enough to infer currents from the slopes. Chemical tracers do the timekeeping: radiocarbon, and — usefully — chlorofluorocarbons, which did not exist before the twentieth century, so finding them in a water mass dates its last contact with the atmosphere. The thousand-year circuit time is measured, not assumed.</p>
`,
};
