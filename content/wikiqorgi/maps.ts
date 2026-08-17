import type { RewrittenArticle } from "./types";

export const maps: RewrittenArticle = {
  slug: "maps",
  title: "Maps: every one of them is wrong, and the question is how",
  sourceTitle: "Cartography",
  dek: "A sphere cannot be flattened without distortion. Choosing a map is choosing which lie you can live with.",
  standfirst:
    "There is a theorem behind every world map. A curved surface cannot be represented on a flat one without distorting something — area, shape, distance, or direction — and no projection preserves all of them. This is not a limitation of technique that better cartography might overcome; it is a proof, and it means every flat map of the Earth misrepresents it in a way its maker selected.",
  readingMinutes: 7,
  html: `
<h2 id="The_theorem">Why it cannot be done</h2>
<p>Gauss proved in 1827 that a surface has an intrinsic curvature which no bending or stretching can change without tearing. A sphere and a plane have different intrinsic curvature, so no mapping between them preserves distances. The result is usually called the <em>Theorema Egregium</em>, the remarkable theorem, which is what Gauss himself thought of it.</p>
<p>The everyday demonstration is an orange peel. Remove it in one piece and try to flatten it: it will either tear or you will have to stretch parts of it. There is no third option.</p>
<p>So every projection sacrifices something deliberately. A conformal projection preserves local shapes and angles while distorting areas. An equal-area projection preserves areas while distorting shapes. Others preserve distances along particular lines, or directions from a particular point. The choice is dictated by what the map is for, and a map that is wrong for one purpose may be exactly right for another.</p>

<h2 id="Mercator">The famous argument</h2>
<p>Gerardus Mercator published his projection in 1569 for one specific job: navigation under sail.</p>
<p>Its property is that a straight line drawn on the map is a line of constant compass bearing. A navigator could rule a line from departure to destination, read off the bearing, and hold that heading. Nothing else available did this, and for a sailor with a compass and no way to compute a curved course, it was transformative. The route is not the shortest — great circles are — but it is followable, which mattered more.</p>
<p>The cost is that it inflates area with distance from the equator, without limit. Greenland appears comparable to Africa and is about fourteen times smaller. Alaska looks larger than Mexico and is not. The poles cannot be shown at all, since they would be infinitely far away, which is why Mercator maps are always cut off.</p>
<p>The political critique — that a map enlarging Europe and shrinking Africa is not innocent — was made loudly by Arno Peters in 1973, promoting an equal-area alternative. Cartographers reacted badly, partly because Peters overstated his originality, since the projection had been published by James Gall a century earlier, and partly because his own map distorts shapes severely, stretching the tropics into vertical smears. The professional bodies eventually issued a statement discouraging all rectangular world maps.</p>
<p>The historical charge is also weaker than the slogan suggests: Mercator made a navigational chart in the sixteenth century, and it was later generations who hung it in classrooms, which is a different offence by different people. But the underlying point survives — most people's mental image of relative continental size is wrong, and it is wrong because of a projection designed for a task nobody in a classroom is performing.</p>

<h2 id="Blank_spaces">What is left out</h2>
<p>A map's silences are as constructed as its marks, and the omissions are usually the most informative part.</p>
<p>Medieval European mappae mundi placed Jerusalem at the centre with east at the top, because they were diagrams of religious order rather than instruments for travel. Whether the maker knew the geography was beside the point; the map was answering a different question. The convention of north at the top is equally arbitrary and equally revealing — Islamic cartographers commonly used south, and Chinese maps often faced whichever way the emperor did.</p>
<p>Colonial mapping made blankness into an argument. Territory marked as empty was territory available, and the areas so marked were frequently inhabited by people whose settlements the survey declined to record. The map then functioned as evidence for the claim it was drawn to support. Straight-line borders across Africa are the visible residue of this: they follow lines of longitude because the negotiators in Berlin had lines of longitude and very little else.</p>
<p>Deliberate falsification has its own tradition. Soviet maps published for civilian use through much of the twentieth century displaced towns, altered river courses and omitted installations, a programme systematic enough that the accurate maps were themselves classified. Commercial cartographers insert trap streets — fictitious lanes with invented names — to catch copiers, which means a small number of streets on ordinary maps do not exist and are there to be sued over.</p>

<h2 id="Surveying">How the shape was actually determined</h2>
<p>Before satellites, the outline of the world was established by triangulation: measure one baseline extremely carefully, then build a network of triangles outward, measuring only angles thereafter. Errors accumulate slowly through a well-designed network, and the technique was accurate enough to determine that the Earth is not a sphere but flattened at the poles — an argument settled in the 1730s by expeditions to Lapland and Peru measuring the length of a degree of latitude at each.</p>
<p>The Great Trigonometrical Survey of India ran for most of the nineteenth century, cost the lives of a substantial number of its surveyors to disease, and produced measurements good enough that its height for the mountain later named Everest was within a few metres of the modern value.</p>
<p>Longitude was the harder half and was a clock problem rather than a survey problem: local time compared against the time at a reference meridian gives the angle east or west, which requires a clock that keeps reference time reliably at sea. That the reference meridian passes through Greenwich is a decision of an 1884 conference, and it followed the fact that most of the world's shipping was already using British charts.</p>

<h2 id="Digital_maps">The map that knows where you are</h2>
<p>Satellite positioning inverted the relationship. A paper map is a document you orient yourself against; a digital map orients itself against you, and the user is the fixed point.</p>
<p>Global positioning works by timing signals from satellites whose positions are known precisely. Four satellites give three-dimensional position plus a correction for the receiver's clock. The satellites carry atomic clocks that must be corrected for both special and general relativity — they move fast, which slows their clocks, and are higher in the gravitational field, which speeds them up, and the general relativistic effect dominates. Without those corrections positions would drift by kilometres per day, which makes satellite navigation the most widely used practical application of relativity there is.</p>
<p>Digital maps also removed the projection problem for local viewing, since a screen can render any small area with negligible distortion and re-project continuously as you move. Web maps nonetheless standardised on a variant of Mercator, chosen because it is conformal — square tiles stay square at every zoom level — which means the projection designed for sixteenth-century navigation is still the one most people see, for reasons that are now about tile geometry.</p>
<p>What changed most is that a map is no longer a static claim. It is a query answered from a database, personalised, updated continuously, and different for different users — which makes the old critique harder to apply, because there is no longer a single artefact to examine and no way for a reader to see what was left out of theirs.</p>
`,
};
