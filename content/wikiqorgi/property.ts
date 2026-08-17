import type { RewrittenArticle } from "./types";

export const property: RewrittenArticle = {
  slug: "property",
  title: "Property: not a thing you own but a bundle of rights against everyone else",
  sourceTitle: "Property",
  dek: "Owning land does not describe a relationship between you and the land. It describes a relationship between you and every other person.",
  standfirst:
    "The intuitive picture of property is a person and an object, joined by ownership. Lawyers abandoned that picture more than a century ago, because it explains nothing about the cases that matter. Property is better understood as a bundle of separable rights — to use, to exclude, to transfer, to destroy — held against other people, and almost every interesting dispute is about which strands of the bundle someone actually holds.",
  readingMinutes: 8,
  html: `
<h2 id="The_bundle">The bundle</h2>
<p>Consider what you own when you own a house. You may live in it, but not run a foundry in it. You may sell it, but you may not sell it with a covenant forbidding certain buyers. You may not build upward past a certain height, and if the state wants the land for a road it can take it and pay you. Your neighbour may have a right of way across the garden that you cannot revoke. A bank may hold a claim that outranks yours if you stop paying.</p>
<p>None of this fits a picture in which you and the house are joined by a single relation called ownership. It fits very well a picture in which you hold a set of distinct entitlements — to use, to exclude others, to transfer, to take income, to modify — each of which can be limited, sold, split off, or held by someone else entirely.</p>
<p>Wesley Hohfeld formalised the point in 1913 by observing that every right is a relation between two persons, not between a person and a thing. Your right to exclude is meaningless without other people to exclude. Property law is a branch of the law of obligations between people that happens to be organised around objects.</p>
<p>This is not lawyers' pedantry. It is the only framework in which a lease, a mortgage, an easement, a licence, a trust, and a mineral right are all recognisably the same kind of thing rather than five unrelated inventions.</p>

<h2 id="Exclusion_is_the_core">Exclusion is the core strand</h2>
<p>If one strand has to be picked as central, it is the right to exclude. A right to use something that everyone else may also use at will is barely property at all, and the law will enforce an owner's power to keep others out even when their entry costs the owner nothing.</p>
<p>That last point is where the moral content becomes visible. Courts have generally held that an owner may exclude a trespasser who does no damage and takes nothing, because the right is to exclude rather than to be protected from harm. The main exception is necessity: a boat may tie up at a private dock during a storm, though the owner is entitled to compensation for damage. The dock owner cannot refuse; the boat owner must pay. That pairing is the clearest statement anywhere in the law of what property is and where it stops.</p>

<h2 id="Where_it_comes_from">Where the entitlement is supposed to come from</h2>
<p>Every justification for private property has a weak point, and it is worth knowing where each one breaks.</p>
<p><strong>First occupancy</strong> — it is mine because I got there first — is the oldest and the least defensible. It explains nothing about why arriving early should generate a permanent claim binding on people not yet born, and applied to land it validates whatever conquest happened to occur.</p>
<p><strong>Labour</strong>, in Locke's version, holds that mixing your work with an unowned thing makes it yours. This has genuine intuitive force for the crop you planted, and rather less for the continent you fenced. Locke attached a condition — that enough and as good be left for others — which he then argued was satisfied because money and improvement made everyone better off. Whether that condition can be met on a finite planet is the whole argument, and it is why the proviso is quoted far more often than the escape from it.</p>
<p><strong>Utility</strong> is the modern working justification: property rights are worth having because they cause resources to be looked after and improved. This is empirically strong and normatively thin. It justifies whatever allocation happens to produce good outcomes, which means it can as easily justify redistribution, and it gives no particular person a claim to any particular thing.</p>
<p><strong>Personality</strong> theories, from Hegel, hold that some property is bound up with being a self — your home, your tools, your writing — in a way that a portfolio of shares is not. This explains why the law does in fact protect a family home more fiercely than an investment, which the other theories struggle with.</p>

<h2 id="Commons">The commons, and the argument about it</h2>
<p>Garrett Hardin's 1968 essay described a pasture open to all, on which each herder gains fully from adding an animal while the cost of overgrazing is shared. Each acts rationally, the pasture is destroyed, and the conclusion drawn was that shared resources require either private ownership or state control.</p>
<p>It became one of the most cited pieces of social science of the century, and the central claim is substantially wrong.</p>
<p>Elinor Ostrom spent decades documenting actual commons — Swiss alpine pastures managed collectively for centuries, Japanese village forests, Spanish irrigation systems, inshore fisheries — that were neither privatised nor state-run and were not destroyed. She identified the conditions under which self-governance works: clear boundaries, rules matched to local conditions, participation by users in making those rules, monitoring by the users themselves, graduated sanctions, and cheap conflict resolution. She won the Nobel in economics for it in 2009.</p>
<p>What Hardin actually described was an open-access resource with no governance, which is a specific failure case rather than the general fate of shared property. The distinction matters because his framing was used for decades to justify enclosing commons that were functioning perfectly well, and to dismiss the communities managing them.</p>

<h2 id="Intellectual_property">The awkward case of intangibles</h2>
<p>Property law developed around objects that only one person can use at a time. Information is not like that: my knowing something does not prevent you knowing it, and copying costs nothing.</p>
<p>So intellectual property cannot be justified the way land is. Its entire case is instrumental — a temporary monopoly is granted to induce creation that would otherwise not be funded — and it follows that the term and scope should be set at whatever produces the most creation, not at whatever feels like ownership.</p>
<p>By that standard the system has drifted a long way. Copyright in the first English statute of 1710 ran fourteen years, renewable once. It now runs for the author's life plus seventy in most jurisdictions, extended repeatedly and retroactively — and a retroactive extension cannot possibly incentivise work already completed, which means it fails the only justification the institution has. Patents are the more defensible half, with a term of twenty years, though the boundary of what may be patented has expanded into territory that is difficult to describe as invention.</p>
<p>The word "property" is doing quiet work here. Calling copyright infringement theft imports intuitions from a domain where taking deprives the owner, which is precisely the feature information lacks.</p>

<h2 id="Registration">Who says it is yours</h2>
<p>A property right is only worth what the recording system behind it is worth, and this is where the theory meets administration.</p>
<p>Systems of title registration — where the state maintains a register that is conclusive as to ownership — make land transferable cheaply and make it usable as collateral. Systems where ownership rests on a chain of private deeds require every transaction to be re-investigated, which is expensive and is why title insurance exists as an industry in some countries and is unheard of in others.</p>
<p>Hernando de Soto argued that the absence of reliable registration is a major cause of poverty: assets held informally cannot be mortgaged, so capital that exists cannot be mobilised. The prescription — mass titling programmes — has produced mixed results, and the reason is instructive. Formal title only helps if the surrounding institutions work, and where they do not, titling has sometimes accelerated the transfer of land from occupants to better-connected buyers. The register is not neutral machinery; it records the outcome of whatever power arrangement produced it, and formalising an unjust distribution makes it harder to revisit rather than easier.</p>
`,
};
