import type { RewrittenArticle } from "./types";

export const plastics: RewrittenArticle = {
  slug: "plastics",
  title: "Plastics: materials designed not to break down, behaving as designed",
  sourceTitle: "Plastic",
  dek: "Every property that makes plastic useful is the same property that makes the waste a problem. That is not a design flaw.",
  standfirst:
    "The complaint about plastic is that it lasts forever, is hard to degrade, and does not react with anything. Those are the specifications. Plastics were engineered to be cheap, light, durable and chemically indifferent, and they succeeded completely — which is why they are in everything, and why they are still in everything long after the thing they were in stopped being useful.",
  readingMinutes: 7,
  html: `
<h2 id="Long_molecules">Long molecules</h2>
<p>A polymer is a very large molecule built by linking small repeating units into a chain, often thousands of units long. Nature makes them constantly — cellulose, proteins, DNA and rubber are all polymers — and synthetic plastics are the same principle with units chosen by a chemist.</p>
<p>Properties follow from the chain's architecture more than from its chemistry. Long chains tangle, which is where toughness comes from. Chains that pack neatly into ordered regions produce a stiffer, more opaque material; disordered chains give something softer and clearer. Chemical cross-links between chains change the behaviour categorically.</p>
<p>That last distinction is the useful one. <strong>Thermoplastics</strong> have separate chains held together only by weak attractions, so heating lets them slide past each other — they soften, can be reshaped, and resolidify. Most familiar plastics are these, and they are in principle recyclable because melting is reversible. <strong>Thermosets</strong> have chains permanently cross-linked into a single network during curing. They cannot be remelted; heat them enough and they char. Epoxies, vulcanised rubber and the resin in fibreglass are thermosets, and they are essentially unrecyclable by melting.</p>

<h2 id="The_first_ones">The first ones</h2>
<p>The earliest plastics were substitutes for scarce natural materials. Celluloid, developed in the 1860s partly in response to a prize offered for an ivory replacement for billiard balls, was made by treating cellulose chemically. It worked, and it was alarmingly flammable — early cinema film was celluloid, and projection-booth fires were a recurring catastrophe.</p>
<p>Bakelite, patented by Leo Baekeland in 1907, was the first fully synthetic plastic, made from phenol and formaldehyde with no natural polymer as a starting point. It was a hard, heat-resistant, electrically insulating thermoset, and its arrival coincided exactly with the electrification of everything — radios, telephones, switches and sockets all needed a mouldable insulator, and here it was.</p>
<p>The great expansion came mid-century, much of it under wartime pressure when natural rubber supplies were cut off, and much of it built on petroleum, which supplies the small molecules that polymerise cheaply. Polyethylene, polypropylene, PVC, polystyrene, nylon and PET all became commodity materials within a few decades.</p>

<h2 id="What_they_replaced">What they replaced</h2>
<p>The environmental account of plastics is usually one-sided, and the comparison worth making is not plastic against nothing but plastic against what would otherwise be used.</p>
<p>Plastic packaging is light, which reduces the fuel needed to move goods, and it extends food shelf life substantially — and food waste has a considerably larger climate footprint than the packaging that prevents it. Replacing plastic bottles with glass increases weight severalfold. Vehicles made lighter with polymer components use less fuel. Medical single-use plastics made sterile procedure cheap and reliable in a way reusable equipment never was.</p>
<p>None of this makes the waste problem acceptable. It does mean that substitution analyses often come out less favourably than intuition expects, and that the useful question is which applications genuinely need the material rather than whether the material is bad.</p>

<h2 id="Why_recycling_mostly_does_not_happen">Why recycling mostly does not happen</h2>
<p>Global recycling rates for plastic are low — commonly estimated below ten per cent of all plastic ever produced — and the reasons are structural rather than a matter of consumer diligence.</p>
<p><strong>Sorting.</strong> Different polymers are immiscible; melting them together produces a material with the worst properties of each. So streams must be separated by resin type, and the numbered triangle symbols exist for that purpose rather than as an indication that an item is recyclable. Multi-layer packaging, laminating several polymers to combine barrier properties, cannot be separated at all.</p>
<p><strong>Degradation.</strong> Each melt cycle shortens the chains, so recycled plastic is generally inferior to virgin material. This is downcycling: a bottle becomes fibre, fibre becomes filler, and the sequence terminates. Glass and metal do not have this problem.</p>
<p><strong>Economics.</strong> Virgin plastic made from cheap petroleum feedstock is frequently cheaper than collecting, sorting and reprocessing used material. When oil prices fall, recycled plastic becomes unsellable.</p>
<p><strong>Contamination.</strong> Food residue and mixed materials render batches worthless, and a single wrong item can downgrade a whole load.</p>
<p>The industry's promotion of recycling from the 1980s onward is now well documented as having proceeded alongside internal knowledge that it would not work at scale — which matters, because the promise shifted responsibility to consumers and forestalled regulation for decades.</p>

<h2 id="Where_it_ends_up">Where it ends up</h2>
<p>Plastic does not biodegrade in any useful sense; it fragments. Ultraviolet light and mechanical action break items into progressively smaller pieces that remain the same polymer.</p>
<p>Microplastics, below five millimetres, are now found essentially everywhere that has been checked: in Arctic ice, in deep ocean trenches, in rainfall over remote mountains, in agricultural soil at higher concentrations than in the ocean, and in human blood, lungs and placenta. Some enter as fragments; a large share comes from synthetic textile fibres shed in washing and from tyre wear.</p>
<p>The health evidence is genuinely unsettled and deserves to be reported as such. Particles are demonstrably present in human tissue; whether the concentrations cause harm is not established, and the studies making strong claims in either direction are mostly weaker than their coverage suggests. The additives are a separate and better-characterised concern — plasticisers and flame retardants that leach out have documented endocrine effects.</p>

<h2 id="What_might_change_it">What might change it</h2>
<p>Chemical recycling breaks polymers back into their constituent monomers, which can then be repolymerised into material indistinguishable from virgin. It sidesteps the degradation problem entirely and is currently energy-intensive and expensive, with several high-profile commercial failures.</p>
<p>Biodegradable plastics are less useful than the label implies. Most require industrial composting at sustained high temperature and do not break down in soil, seawater or landfill — and their presence contaminates conventional recycling streams. A few genuinely marine-degradable polymers exist and are expensive.</p>
<p>Enzymes that digest PET have been identified in bacteria found at a recycling site and subsequently engineered for higher activity. It is promising for one polymer and does not address the others.</p>
<p>The intervention with the clearest evidence is the least technological: reducing use, particularly of the single-use applications that account for a large share of production and where alternatives exist. Bans and charges on specific items have measurably reduced consumption where implemented. It is unglamorous, and it works better than anything currently proposed to deal with the material after the fact.</p>
`,
};
