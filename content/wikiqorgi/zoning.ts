import type { RewrittenArticle } from "./types";

export const zoning: RewrittenArticle = {
  slug: "zoning",
  title: "Zoning: the rules that decide what a city is allowed to become",
  sourceTitle: "Zoning",
  dek: "A technical planning instrument that determines housing costs, commute lengths, and who is permitted to live where.",
  standfirst:
    "Zoning sounds like municipal housekeeping — a map, some categories, a set of permitted uses. It is in practice one of the most consequential policy instruments any government wields, because it decides in advance what can be built and therefore how many people can live in a place. Much of the argument about housing costs is an argument about zoning conducted without naming it.",
  readingMinutes: 7,
  html: `
<h2 id="What_it_does">What it does</h2>
<p>Zoning divides land into districts and specifies what may be built in each. Ordinances typically control <em>use</em> — residential, commercial, industrial, and their subdivisions — and also <em>form</em>: how tall, how far from the street, how much of the lot may be covered, how many dwellings per building, and how many parking spaces must be provided.</p>
<p>The form controls are frequently the binding ones, and they are less visible than use categories. A parcel zoned for housing may still be unbuildable at any reasonable density if minimum lot sizes are large, setbacks deep, height limits low and parking requirements steep. The combination can prohibit apartments without an ordinance ever mentioning them.</p>
<p>The most common designation across much of North America is detached single-family residential, which permits one dwelling per lot and forbids duplexes, terraces and small apartment buildings outright. In many cities this covers the substantial majority of residential land.</p>

<h2 id="Where_it_came_from">Where it came from</h2>
<p>The original rationale was nuisance separation, and it was legitimate. Industrial cities placed tanneries, slaughterhouses and foundries next to housing, and the resulting smoke, noise and effluent were genuine harms that individual lawsuits handled badly.</p>
<p>New York adopted the first comprehensive American ordinance in 1916, prompted partly by a tower that overshadowed its neighbours. The Supreme Court upheld municipal zoning in 1926, and adoption spread quickly.</p>
<p>Its use for exclusion was not incidental. Explicit racial zoning was struck down in 1917, and municipalities substituted requirements that achieved similar effects without naming race: large minimum lot sizes, bans on multi-family housing, minimum floor areas. The mechanism was economic and the intent was frequently documented in the record. Federal mortgage practice reinforced it by rating neighbourhoods for lending risk on explicitly racial criteria, and the resulting maps shaped which areas received investment for decades.</p>
<p>This history matters for the present argument because the instruments introduced then are largely the instruments still in force, and their exclusionary effect does not depend on anyone currently intending it.</p>

<h2 id="The_arithmetic_of_housing_cost">The arithmetic of housing cost</h2>
<p>Where demand to live in a place rises and the permitted quantity of housing does not, prices rise. This is not a controversial proposition in the abstract; it becomes controversial when applied to a specific neighbourhood.</p>
<p>The empirical literature is reasonably consistent. Regions with more restrictive land-use regulation show higher prices relative to construction costs, weaker supply responses to demand, and lower rates of in-migration. Because high-productivity cities are precisely the ones with the tightest restrictions, workers are deterred from moving to where their labour is worth most — economists have estimated the aggregate cost of this misallocation in the percentage points of national output, and while the magnitude is disputed, the direction is not.</p>
<p>Parking minimums deserve a specific mention, because they are unusually costly and unusually invisible. Requiring a fixed number of spaces per dwelling adds substantial cost per unit, consumes land, and makes small infill projects unviable. Donald Shoup's work established that the required ratios were largely copied between municipalities with no empirical basis, and many cities have since removed them entirely.</p>

<h2 id="The_arguments_against_relaxing_it">The arguments against relaxing it</h2>
<p>Opposition to upzoning is not uniformly bad faith and deserves to be stated fairly.</p>
<p>Existing residents made large, illiquid, leveraged investments partly on the basis of the current rules, and a change alters the character of a place they chose. Concerns about infrastructure capacity, school places and local services are often real, since permitting more housing does not automatically fund the systems serving it.</p>
<p>The displacement concern is the most substantive. New market-rate housing in a low-income neighbourhood can coincide with rising rents and the departure of existing residents, and telling people that regional supply effects will eventually help them is cold comfort if they are gone before it happens. The research suggests new supply reduces rents in the surrounding area rather than raising them, but the effects are unevenly distributed and the local experience does not always match the aggregate.</p>
<p>The weakest objection is the one most often made: that a neighbourhood's character should be preserved indefinitely. Cities have always changed, and the version being preserved is usually a mid-twentieth-century arrangement that was itself imposed by rule rather than arrived at organically.</p>

<h2 id="What_reform_looks_like">What reform looks like</h2>
<p>A cluster of changes has moved through various jurisdictions over the past decade, and enough time has passed for some evidence.</p>
<p>Japan offers the clearest contrast, because it zones nationally rather than locally, uses a small number of inclusive categories where each permits everything less intensive than its designation, and does not give neighbours a veto. Tokyo has added housing at a rate that has kept rents broadly stable across decades of population growth — an outcome no comparably sized Western city has achieved.</p>
<p>Elsewhere: New Zealand's upzoning in Auckland was followed by a substantial increase in construction and rents lower than they would otherwise have been, in the most-studied natural experiment available. Several American states have overridden local single-family-only zoning, legalised accessory dwelling units, or removed parking minimums, with California's ADU reforms producing tens of thousands of new units.</p>
<p>The recurring lesson is procedural rather than substantive. Reforms that grant permission <em>by right</em> — build it if it meets the rules, no discretionary hearing — produce construction. Reforms that permit something in principle while leaving each project subject to case-by-case approval mostly do not, because the cost and uncertainty of the process are themselves the constraint. The binding restriction is often not what the map allows but how many opportunities exist to object.</p>
`,
};
