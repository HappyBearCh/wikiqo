import type { RewrittenArticle } from "./types";

export const clouds: RewrittenArticle = {
  slug: "clouds",
  title: "Clouds: water needs something to condense onto, and the biggest uncertainty in climate",
  sourceTitle: "Cloud",
  dek: "Pure water vapour in clean air will not form a cloud at all. And nobody can say whether clouds will amplify warming or damp it.",
  standfirst:
    "A cloud is not water vapour — vapour is invisible. It is a suspension of liquid droplets or ice crystals, each formed on a speck of dust, salt or pollution, because water in genuinely clean air refuses to condense until it is supersaturated several hundred per cent. Clouds also cool the planet by reflecting sunlight and warm it by trapping heat, and which effect wins as the world warms is the single largest unresolved question in climate projection.",
  readingMinutes: 7,
  html: `
<h2 id="Nucleation">Water will not condense on its own</h2>
<p>Cooling moist air to its dew point ought to produce droplets. In genuinely clean air it does not.</p>
<p>The obstacle is surface tension. A droplet forming from nothing starts microscopically small, and a very small droplet has extreme curvature, which makes molecules evaporate from it far more readily than from a flat surface. So tiny droplets evaporate faster than they grow, and homogeneous nucleation requires supersaturation of several hundred per cent — conditions that never occur in the atmosphere.</p>
<p>What actually happens is heterogeneous nucleation: water condenses onto existing particles, called cloud condensation nuclei. These start out large enough that the curvature problem does not apply, so condensation proceeds at supersaturations of a fraction of one per cent.</p>
<p>The nuclei are sea salt from breaking waves, mineral dust, sulphate particles from volcanoes and from burning fossil fuels, smoke, pollen, and — in a finding that took a long time to be accepted — bacteria. Certain bacterial proteins are exceptionally good ice nucleators, and the same organism responsible for frost damage in crops is found in cloud water and in snow.</p>
<p>This is why cloud formation is not purely a matter of humidity and temperature. The available particles determine how many droplets form and how large each gets, and that determines what the cloud looks like and what it does.</p>

<h2 id="Why_they_float">Why they do not fall</h2>
<p>A cumulus cloud contains a great deal of water — a modest one holds hundreds of tonnes — and it is denser than the air around it. The obvious question is why it stays up.</p>
<p>The answer is that the droplets are extremely small, typically around 20 micrometres, and a small particle falling through air reaches terminal velocity almost immediately because drag scales with surface area while weight scales with volume. A cloud droplet's terminal velocity is around a centimetre per second — slower than the gentle updraughts that formed the cloud in the first place.</p>
<p>So the droplets are falling, continuously, and the air is rising faster. The cloud is not suspended; it is in a steady state.</p>
<p>Rain requires droplets to become roughly a million times more massive, which condensation alone is far too slow to achieve. Two mechanisms do it. In warm clouds, droplets of slightly different sizes fall at different speeds, collide and merge, and the process accelerates as they grow. In colder clouds, the dominant route is the Bergeron process, which exploits the fact that ice has a lower saturation vapour pressure than liquid water — so where ice crystals and supercooled droplets coexist, the crystals grow at the droplets' expense until they are heavy enough to fall. Most rain in the middle latitudes begins as snow.</p>

<h2 id="Classification">The naming system, and who made it</h2>
<p>Luke Howard, a London pharmacist and amateur meteorologist, proposed the modern classification in 1802. Before him clouds were considered too formless to classify, which was more or less the settled view.</p>
<p>His insight was that a small number of basic forms recur, and that clouds transition between them in ways that can be described. He used Latin: <em>cirrus</em> for fibrous, <em>cumulus</em> for heaped, <em>stratus</em> for layered, <em>nimbus</em> for precipitating, combinable into compound names.</p>
<p>The scheme survived intact for two centuries because it describes formation processes rather than appearances. Cumulus means convection; stratus means a stable layer lifted or cooled; cirrus means ice at altitude. The name carries physics.</p>
<p>Howard's essay was admired well beyond meteorology — Goethe wrote poems addressed to him, and Constable's cloud studies were made in the light of it.</p>
<p>The modern system adds altitude as a second axis: high clouds above roughly 6 kilometres are ice, low clouds below 2 kilometres are liquid, and cumulonimbus spans the whole depth of the troposphere, topping out where it hits the tropopause and spreads sideways into the anvil shape that is visible from a very long way off.</p>

<h2 id="Radiation">The two opposing effects</h2>
<p>Clouds interact with radiation twice, in opposite directions, and their net effect depends on which dominates.</p>
<p>They <strong>reflect incoming sunlight</strong> back to space, which cools the surface. This is the albedo effect, and it is strongest for thick, bright, low clouds.</p>
<p>They <strong>absorb outgoing infrared</strong> from the surface and re-emit it, some downward, which warms. This is strongest for high, cold, thin clouds — because a cloud radiates to space at its own temperature, and a cold cloud top emits far less than the warm ground it is blocking.</p>
<p>So the two effects sort by cloud type. Low stratocumulus over the ocean is a powerful net cooler: bright, and warm enough that it radiates nearly as much as the surface would. High cirrus is a net warmer: nearly transparent to sunlight, and very cold at the top.</p>
<p>Globally, the cooling wins. Clouds currently cool the planet by around 20 watts per square metre and warm it by around 12, for a net cooling of roughly 8 — which is several times larger in magnitude than the entire warming from doubled carbon dioxide.</p>

<h2 id="Feedback">Why this is the biggest unknown</h2>
<p>Because clouds have such a large net effect, a small proportional change in them matters as much as a large change in greenhouse gases. And warming changes clouds in several ways at once, pulling in different directions.</p>
<p>Warmer air holds more moisture, which could mean more cloud. Warming also changes atmospheric stability and circulation, which changes where clouds form and at what altitude. High clouds appear to rise as the troposphere deepens, keeping their tops at a similar temperature while the surface warms — which strengthens their warming effect, a positive feedback with reasonably good theoretical support.</p>
<p>The critical case is low marine stratocumulus, the sheets covering large areas of subtropical ocean. They are the most effective cooling clouds on the planet, and models disagree about whether warming thins them. If it does, the reflected sunlight is lost and warming accelerates. Some high-resolution simulations suggest these decks can break up entirely above a threshold of carbon dioxide, which would be an abrupt and largely irreversible transition — a result that is taken seriously and is not settled.</p>
<p>Cloud feedback is consistently the largest single source of spread in climate sensitivity across models, and it is why the plausible range for warming from doubled carbon dioxide has narrowed so slowly over forty years. The problem is structural: clouds form at scales of metres to kilometres, and global models have grid cells of tens of kilometres, so clouds are represented by approximations rather than simulated. Recent work with kilometre-scale global models is the main hope for narrowing it, and it is expensive enough that only a handful of runs exist.</p>

<h2 id="Seeding">Making it rain, mostly not</h2>
<p>If clouds need nuclei, adding nuclei ought to produce rain. Cloud seeding, using silver iodide — whose crystal structure resembles ice closely enough to nucleate it — or dry ice, has been attempted since the 1940s and is operationally deployed in dozens of countries.</p>
<p>The evidence that it works is much weaker than the scale of deployment suggests. The fundamental difficulty is the counterfactual: rain that falls after seeding may have fallen anyway, and establishing otherwise requires randomised trials over many events, which are expensive and rarely run properly.</p>
<p>The better-designed studies find modest effects in specific circumstances — mainly orographic snowpack enhancement in winter mountain clouds that are already supercooled and short of ice nuclei. Claims about ending droughts or suppressing hail have far less support, and a drought is precisely the condition in which there are no clouds to seed.</p>
<p>The unintentional experiment is larger and better documented. Ship exhaust seeds marine clouds with sulphate particles, producing visible lines of brightened cloud along shipping lanes that are obvious from satellites. More nuclei mean more, smaller droplets, which makes a cloud brighter and longer-lived. These ship tracks are the clearest direct evidence of the aerosol effect on clouds — and the regulation of ship fuel sulphur from 2020 has measurably reduced them, which appears to have removed a small cooling influence that had been masking part of the warming.</p>
`,
};
