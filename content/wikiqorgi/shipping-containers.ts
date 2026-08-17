import type { RewrittenArticle } from "./types";

export const shippingContainers: RewrittenArticle = {
  slug: "shipping-containers",
  title: "The shipping container: a steel box that rearranged the world economy",
  sourceTitle: "Containerization",
  dek: "The invention was not the box. It was the agreement that everyone's box would be the same box.",
  standfirst:
    "Before containers, loading a ship meant dozens of men manhandling barrels, sacks and crates into a hold for days, and the cost of moving goods between countries was high enough to make distant manufacturing uneconomic for most products. A corrugated steel box with standardised corner fittings collapsed that cost by an order of magnitude, and the global division of labour that followed is a consequence of it. The hard part was never engineering.",
  readingMinutes: 7,
  html: `
<h2 id="Break_bulk">What it replaced</h2>
<p>Break-bulk shipping meant every item was handled individually. Cargo arrived at a port in whatever form its shipper used, was stored in a shed, was carried aboard by gangs of longshoremen, and was stowed by men who fitted irregular objects together in a hold as a matter of craft judgment.</p>
<p>A ship might spend a week or more in port for every week at sea, so a large capital asset sat idle roughly half the time. Loading costs commonly made up a substantial share of the total cost of shipping, sometimes more than the ocean voyage itself.</p>
<p>Theft was assumed. Goods passed through many hands in unsupervised sheds, and pilferage rates were high enough that insurance and packaging were designed around them. Wooden crates existed largely to survive rough handling and to make theft slightly harder.</p>
<p>The work was dangerous, casual and organised. Longshoremen were hired by the day at the dock gate, injury rates were among the worst of any occupation, and the unions that formed in response were among the most powerful in the industrialised world — which becomes important later.</p>

<h2 id="McLean">A trucking man who did not care about ships</h2>
<p>Malcom McLean ran a trucking company and his problem was that his trucks queued at ports while their contents were unloaded piece by piece. His idea, pursued from the mid-1950s, was to leave the cargo in the truck's body and lift the whole body onto the ship.</p>
<p>The first container voyage sailed in 1956, from Newark to Houston, aboard a converted tanker carrying fifty-eight boxes. The measured loading cost was a small fraction of the conventional figure — accounts vary, but the collapse was in the order of a hundredfold — and it was immediately clear the economics were different in kind rather than degree.</p>
<p>The insight that made him unusual was that he was not a shipping man. Shipping companies thought about ships. McLean thought about the door-to-door movement of goods, and saw that the box was the unit that should be preserved across truck, ship and rail rather than the vessel being the thing to optimise.</p>
<p>He also understood that the box was worth nothing alone. Containers require purpose-built ships with cell guides, gantry cranes at both ends, chassis to carry them on roads, rail wagons sized to take them, and warehouses arranged around them. Every part had to exist before any part was useful, which is why adoption took two decades rather than two years.</p>

<h2 id="Standards">The part that actually took the time</h2>
<p>Early containers were incompatible. Each operator used its own dimensions, its own lifting fittings and its own locking mechanisms, so a box from one line could not be handled by another's cranes or stacked on its ships. This preserved the very problem containers were meant to solve, one level up.</p>
<p>Standardisation ran through the late 1950s and 1960s and was a long argument in which every participant's existing fleet was at stake, since whichever dimensions were adopted would strand everyone else's equipment. The eventual settlement fixed the eight-foot width, the eight-foot-six height, and lengths of twenty and forty feet — hence the twenty-foot equivalent unit in which capacity is still counted.</p>
<p>The corner casting is the piece of engineering that matters most and is the least noticed. It is a steel block at each of the eight corners with slots that accept a twistlock: a fitting that is inserted and rotated a quarter turn to secure. It handles lifting, stacking and lashing, works identically on a crane, a ship, a chassis and a rail wagon, and is the reason any box interoperates with any equipment anywhere.</p>
<p>McLean released his patents into the standard rather than licensing them, having concluded that a universal system he participated in was worth more than a proprietary one he owned. This turned out to be correct and is rarer than it should be.</p>

<h2 id="The_ports">Ports moved, and cities changed</h2>
<p>Container handling needs deep water, enormous flat backland for stacking, and rail and motorway connections. Historic ports had none of these — they were in city centres, on shallow rivers, surrounded by warehouses and housing built to the scale of hand-carried cargo.</p>
<p>So the traffic left. London's docks, which had handled a large share of British trade, closed within a couple of decades, and the container business went to Felixstowe. New York's Manhattan and Brooklyn piers emptied and the port moved across the harbour to New Jersey. The pattern repeated in every old port city.</p>
<p>Dock labour collapsed with it. A gang of twenty men loading for a week was replaced by a crane driver and a handful of staff working a few hours. The unions in some places negotiated substantial buyouts and retraining in exchange for accepting mechanisation; elsewhere the jobs simply went, and the districts that depended on them went with them.</p>
<p>The vacated waterfronts became the standard template for urban redevelopment — converted warehouses, apartments, museums — which means the visible legacy of containerisation in most old port cities is a leisure district built on the site of the work it eliminated.</p>

<h2 id="What_it_enabled">What became possible once distance was cheap</h2>
<p>Shipping a container across an ocean costs a small enough amount that for many manufactured goods it is a negligible fraction of the retail price. Moving a full container from Asia to Europe can cost a few thousand dollars in ordinary conditions, holding thousands of individual items.</p>
<p>Once transport is nearly free relative to labour, the location of production is determined almost entirely by production costs, and manufacturing concentrates wherever those are lowest. Global supply chains in which components cross oceans several times before assembly are only rational under this condition, and they did not exist before it.</p>
<p>Just-in-time inventory depends on the same reliability. Holding minimal stock requires knowing that a shipment will arrive on a predictable date, which containerisation made possible and which is why disruptions to it propagate so quickly.</p>
<p>Economists attempting to quantify the effect have found container adoption associated with trade growth substantially larger than that attributable to the trade agreements of the same period, which is a striking result given how much political attention the agreements received and how little the box did.</p>

<h2 id="Costs">What it hid</h2>
<p>A sealed steel box that nobody opens is efficient and opaque, and both properties are load-bearing.</p>
<p>Only a small percentage of containers are physically inspected at any port, because inspecting them would destroy the economics. This is the standing problem in customs enforcement, in counterfeiting, in drug interdiction, and in the security assessments made after 2001.</p>
<p>Boxes are lost overboard in significant numbers each year, some containing hazardous material, most simply sinking. The industry's own estimates and independent ones differ considerably.</p>
<p>Seafarers work under flags of convenience with weak labour protection and low visibility, and the crew of a modern container ship is remarkably small for the value it carries.</p>
<p>And the opacity is part of the point commercially. The consumer sees a price and a shelf; the box is precisely the device that makes the conditions of production irrelevant to the transaction. It is difficult to think of another piece of industrial standardisation that has done as much, or that fewer people could name.</p>
`,
};
