import type { RewrittenArticle } from "./types";

export const electricalGrid: RewrittenArticle = {
  slug: "electrical-grid",
  title: "The grid: the largest machine ever built, and it has no storage",
  sourceTitle: "Electrical grid",
  dek: "Supply must match demand every second of every day, across a continent, or the whole thing falls over.",
  standfirst:
    "A power grid is usually pictured as a distribution network — electricity made somewhere, delivered to you. The more accurate picture is a single enormous machine whose every part is mechanically synchronised, in which generation must equal consumption continuously, because there is essentially nowhere for a surplus to go and nothing to draw a shortfall from.",
  readingMinutes: 7,
  html: `
<h2 id="The_current_war,_and_why_it_was_won">The current war, and why it was won</h2>
<p>Edison's first system, opened in Manhattan in 1882, used direct current, and it had a fatal limitation. Transmission losses rise with current, and at the low voltages DC could practically be generated and used at, the losses confined a station to serving perhaps a mile. Electrifying a city meant a power station every few blocks.</p>
<p>Alternating current solved this through the transformer, which changes voltage efficiently and works only with alternating current. Power delivered is voltage times current, so the same power can be moved at high voltage and low current — and since losses depend on current squared, raising the voltage by a factor of ten cuts losses by a factor of a hundred. Generate at moderate voltage, step up to hundreds of kilovolts for transmission, step down for distribution and again for the house.</p>
<p>The dispute between Edison and the Westinghouse–Tesla camp was commercial rather than technical, and Edison's conduct during it was disgraceful — publicly electrocuting animals to associate AC with danger, and encouraging its use in the first electric chair so that being executed might be described with a coined verb referencing his rival. The engineering was never in doubt. AC won because the physics required it.</p>
<p>High-voltage DC has since returned for specific jobs — very long point-to-point links and undersea cables, where AC's losses become prohibitive — which is a rehabilitation rather than a reversal.</p>

<h2 id="Everything_must_balance,_continuously">Everything must balance, continuously</h2>
<p>The grid's defining constraint is that electricity is generated and consumed in the same instant. There is no buffer of consequence in the system itself.</p>
<p>Balance is visible in the frequency. Generators across a synchronous area spin in lockstep, producing 50 or 60 cycles per second, and the frequency is a direct readout of the balance between supply and demand. Draw more than is being generated and the spinning machines are loaded down, slowing fractionally; generate more than is drawn and they speed up. Operators watch frequency the way a doctor watches a pulse, and correct continuously.</p>
<p>Rotational inertia is what buys time. The physical mass of hundreds of large spinning turbines resists sudden change, so a lost generator produces a manageable dip rather than an instant collapse, and reserves can be brought up within seconds. This is a genuine engineering problem for grids adding large amounts of solar and wind, which connect through power electronics and contribute no inherent inertia — a shortfall now addressed with synthetic inertia from inverters and with batteries responding in milliseconds.</p>
<p>Demand, meanwhile, is not controlled but forecast. Operators predict consumption from weather, day of week, season and habit, and schedule generation accordingly. The forecasting is remarkably good, and the classic demonstration of its difficulty is British television: the end of a popular programme sends millions of people to boil kettles simultaneously, producing a surge of over a gigawatt within minutes, which grid controllers handle by watching the broadcast and having hydroelectric plants ready.</p>

<h2 id="Merit_order_and_the_shape_of_a_day">Merit order and the shape of a day</h2>
<p>Plants are dispatched by cost, cheapest first — the merit order. Sources with near-zero marginal cost run whenever available: wind, solar, nuclear, hydro. Then gas, then whatever is most expensive.</p>
<p>This produces an economic structure worth understanding, because it explains a great deal of confusing news about energy prices. In most markets, every generator dispatched is paid the price bid by the most expensive plant needed in that period. That marginal plant is usually gas, which is why electricity prices track gas prices even in systems where gas supplies a minority of the power, and why adding cheap renewables lowers wholesale prices only when they displace the marginal plant entirely.</p>
<p>The daily shape has changed as solar has grown. Midday generation is now abundant in sunny regions and evening demand peaks after sunset, producing the so-called duck curve: a deep midday trough in net demand followed by a steep evening ramp that conventional plants must climb quickly. The problem is no longer total generation but its timing, which is why storage and demand flexibility have become the central issues rather than capacity.</p>

<h2 id="How_it_fails">How it fails</h2>
<p>Grid failures are almost always cascades rather than single events, and the mechanism is consistent. A line fails; its power redistributes onto neighbouring lines; those become overloaded and trip to protect themselves; their power redistributes in turn. The whole sequence can run in seconds, far faster than human intervention.</p>
<p>The 2003 Northeast blackout, which affected around 55 million people across the United States and Canada, began with overgrown trees contacting sagging power lines in Ohio, compounded by a software failure in the alarm system that meant operators did not know what was happening. Protective relays did their job locally and, in aggregate, disconnected a region.</p>
<p>The defence is islanding: deliberately splitting the grid into self-sufficient sections so failure is contained. Restarting afterwards is harder than it sounds, because most power stations require electricity to start — a black start depends on a small number of plants, usually hydro or diesel, that can begin from nothing and energise enough of the network to bring the others up in sequence.</p>

<h2 id="What_has_to_change">What has to change</h2>
<p>Grids were designed for a one-way flow from a few hundred large plants to millions of passive consumers. What is being built instead is bidirectional, with millions of rooftop installations exporting power, batteries both storing and supplying, and electric vehicles capable of either depending on the hour.</p>
<p>The engineering challenges are real and mostly unglamorous. Distribution networks were not designed for reverse flow. Transmission capacity is the binding constraint on connecting new generation in many countries, and building a high-voltage line takes a decade, most of it in planning and objection rather than construction. Interconnection queues in several markets now hold more proposed generation than the existing system's total capacity.</p>
<p>The largest single asset in most electricity systems is not any power station but the network itself, and its useful life is measured in decades. Which means the decisions constraining a grid in 2050 are being made — or postponed — now.</p>
`,
};
