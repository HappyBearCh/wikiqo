import type { RewrittenArticle } from "./types";

export const hurricanes: RewrittenArticle = {
  slug: "hurricanes",
  title: "Hurricanes: a heat engine that cannot form at the equator",
  sourceTitle: "Tropical cyclone",
  dek: "They need warm water, and they need the Earth's rotation — which is zero at the equator, so the warmest water on the planet never produces one.",
  standfirst:
    "A tropical cyclone is a machine for moving heat from a warm ocean to the upper atmosphere, and it obeys the same thermodynamic limits as any other heat engine. Understanding it as an engine explains everything about it: why it needs water above a threshold temperature, why it dies over land within hours, why it spins the way it does, and why there is a computable ceiling on how strong one can get.",
  readingMinutes: 8,
  html: `
<h2 id="The_engine">It is literally a heat engine</h2>
<p>Kerry Emanuel's framing, developed in the 1980s, treats a hurricane as a Carnot cycle. Air spirals inward at the sea surface, picking up heat and enormous quantities of water vapour from warm water. It rises in the eyewall, where the vapour condenses and releases its latent heat — this is where nearly all the storm's energy comes from. The air flows outward at high altitude and radiates heat to space at a much colder temperature, then sinks.</p>
<p>Hot reservoir: the sea surface, around 300 kelvin. Cold reservoir: the tropopause, around 200 kelvin. The efficiency available from that temperature difference is about a third, which is better than most power stations manage.</p>
<p>The power involved is difficult to state in a way that lands. A mature hurricane releases latent heat at a rate several hundred times the entire world's electricity generating capacity. The fraction converted into wind is a small percentage of that; the rest goes into the atmosphere as heat.</p>
<p>This framing yields the concept of potential intensity — the maximum wind speed thermodynamically available given the sea surface temperature and the temperature aloft. Real storms usually fall short because of friction, dry air intrusion and wind shear, but almost none exceed it, which is a strong confirmation that the engine model is right.</p>

<h2 id="Ingredients">What has to be true for one to form</h2>
<p>Tropical cyclogenesis needs several conditions simultaneously, which is why the world sees perhaps eighty a year rather than thousands.</p>
<p><strong>Warm water, deep.</strong> Roughly 26.5°C or above, through a layer tens of metres thick. Surface warmth alone is insufficient, because the storm's own winds churn cooler water up from below — a storm that stalls over a shallow warm layer chills its own fuel supply and weakens. Ocean heat content matters more than surface temperature, which is why the same reading over a deep warm eddy supports a far stronger storm.</p>
<p><strong>Low wind shear.</strong> If winds at altitude differ much from winds at the surface, the vertical column of the storm is tilted and torn apart, and the heat released aloft is displaced from the circulation below. Shear is the single most common reason a promising disturbance fails.</p>
<p><strong>Moist mid-levels.</strong> Dry air entrained into the storm kills convection. The Saharan Air Layer, a mass of dry dusty air drifting off Africa, routinely suppresses Atlantic storms.</p>
<p><strong>A pre-existing disturbance.</strong> Storms do not organise from nothing. In the Atlantic most originate as easterly waves rolling off West Africa.</p>
<p><strong>Enough Coriolis.</strong> Which is the interesting one.</p>

<h2 id="Coriolis">Why not at the equator</h2>
<p>Air flows from high pressure toward low pressure. For a storm to become a rotating system rather than simply filling in, that inflowing air must be deflected — and the deflection comes from the Earth's rotation.</p>
<p>The Coriolis effect is zero at the equator and increases with latitude. Within about five degrees of the equator there is not enough of it to organise inflow into a closed circulation, so tropical cyclones essentially never form there despite the water being at its warmest. The rare exceptions are extraordinary enough to be individually famous among meteorologists.</p>
<p>The same effect sets the direction of rotation, which is anticlockwise in the northern hemisphere and clockwise in the southern, always, with no exceptions.</p>
<p>This is a good moment to dispose of the bathtub claim. Coriolis is far too weak at the scale of a sink to overcome the influence of how the basin is shaped and how the water was moving when it started. It governs systems hundreds of kilometres across over hours or days. It does not govern your plughole.</p>

<h2 id="Structure">The parts of a storm</h2>
<p>The <strong>eye</strong> is a region of sinking air, typically 20 to 60 kilometres across, with light winds and often clear sky. It exists because air spiralling inward conserves angular momentum and speeds up as the radius shrinks, but cannot reach the exact centre — centrifugal effects prevent it — so the innermost air descends instead. Descending air warms and dries, which dissolves cloud.</p>
<p>The <strong>eyewall</strong> is the ring of towering thunderstorms immediately around it, and it contains the strongest winds and heaviest rain in the storm. Almost all the destructive energy is here.</p>
<p><strong>Rainbands</strong> spiral outward, producing squalls well ahead of the centre.</p>
<p>Intense storms undergo <strong>eyewall replacement cycles</strong>: an outer ring of convection organises, chokes the inner eyewall of inflow, and replaces it. During the transition peak winds drop and the eye widens, then the storm reintensifies with a larger eye. The wind speed falls while the storm grows — so the total destructive potential may increase even as the headline category drops, which is a persistent problem in communicating risk.</p>

<h2 id="What_kills">What actually causes the deaths</h2>
<p>Public attention fixes on wind speed, and wind is not the main killer.</p>
<p><strong>Storm surge</strong> is. Low pressure lifts the sea slightly, but the dominant mechanism is wind pushing water toward the coast, piling it up where the shelf is shallow and the coastline funnels it. Surges of several metres are common in major storms and have exceeded eight. Historically surge accounts for the large majority of tropical cyclone deaths, and low-lying deltas — Bangladesh, Myanmar, Louisiana — carry the worst exposure.</p>
<p><strong>Inland flooding</strong> from rainfall is the next largest, and it is governed by how fast the storm moves rather than how strong it is. A weak storm that stalls delivers more rain than a powerful one passing through quickly. Hurricane Harvey in 2017 dropped over 1,500 millimetres on parts of Texas because it stopped moving; its winds were almost irrelevant to the damage.</p>
<p>The Saffir–Simpson scale, which produces the familiar categories, is based purely on sustained wind speed. It says nothing about size, forward speed, rainfall or surge, which is why a category 1 storm can kill far more people than a category 4, and why forecasters have spent years trying to shift public attention away from the number.</p>

<h2 id="Climate">What warming does and does not change</h2>
<p>This is an area where the confident version of the story in either direction outruns the evidence, and the actual findings are more specific.</p>
<p><strong>Frequency</strong> is not expected to increase, and most modelling suggests the global number of tropical cyclones stays flat or falls somewhat.</p>
<p><strong>Intensity</strong> is expected to increase, and the proportion of storms reaching the highest categories with it. Potential intensity rises with ocean heat content, and this follows directly from the engine model rather than from statistics.</p>
<p><strong>Rainfall</strong> increases with high confidence, for basic thermodynamic reasons: warmer air holds around seven per cent more moisture per degree, and what a storm gathers it eventually drops.</p>
<p><strong>Rapid intensification</strong> — a large jump in wind speed within 24 hours — appears to be becoming more common, which is the most operationally alarming trend, because it compresses the warning time available to evacuate.</p>
<p><strong>Storm surge</strong> worsens regardless of any change in the storms themselves, because it starts from a higher sea level.</p>
<p>Detecting trends is genuinely hard, and the reason is worth stating: the satellite record is only a few decades long, and earlier counts undercount storms that never approached land or shipping. Some apparent increases are improvements in observation. This is a real limitation, not a rhetorical dodge, and it is why the frequency question remains less settled than the intensity one.</p>
`,
};
