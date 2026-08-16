import type { RewrittenArticle } from "./types";

export const theInternet: RewrittenArticle = {
  slug: "the-internet",
  title: "The internet: a network built on the assumption that it would break",
  sourceTitle: "Internet",
  dek: "Its founding design decision was to make the network stupid and the edges clever — which is why it outlasted every rival.",
  standfirst:
    "The internet was not designed to be fast, secure, or commercially useful. It was designed to be indifferent to its own components failing, and to make no assumptions about what would be sent over it. Both choices looked like weaknesses to the telecommunications engineers of the day. They are the reason a network sketched for a few dozen research computers scaled to the planet.",
  readingMinutes: 8,
  html: `
<h2 id="Cutting_the_message_into_pieces">Cutting the message into pieces</h2>
<p>The telephone system worked by circuit switching: placing a call opened a dedicated physical path held for the duration, whether or not anyone was speaking. It was reliable, it was well understood, and it was catastrophically wasteful for computers, which communicate in short bursts separated by long silences.</p>
<p>Packet switching, developed independently by Paul Baran in the United States and Donald Davies in Britain, inverted the arrangement. Chop each message into small labelled packets, send them onto a shared network, let each one find its own way, and reassemble at the far end. No path is reserved. Packets from thousands of conversations interleave on the same wires, and if a link fails the next packet simply goes another way.</p>
<p>Baran's motivation was survivability — his work at RAND concerned communications that could function after substantial destruction, which is the germ of truth in the persistent claim that the internet was built to survive nuclear war. The ARPANET that followed in 1969 was funded by a defence agency but built by researchers who mostly wanted their expensive computers to talk to each other.</p>

<h2 id="The_protocol_that_assumes_nothing">The protocol that assumes nothing</h2>
<p>The decisive work came in the 1970s, when Vint Cerf and Bob Kahn faced a harder problem than connecting computers: connecting <em>networks</em>, which already existed in incompatible varieties — packet radio, satellite links, the ARPANET itself.</p>
<p>Their answer was to stop trying to make the networks agree. TCP/IP asks almost nothing of the underlying medium: deliver a packet toward this address, most of the time, and feel free to drop it. Reliability is handled at the endpoints, where the receiving machine notices gaps and asks for retransmission. The network's job is to try, not to guarantee.</p>
<p>This is the end-to-end principle, and it is the internet's central design commitment. Intelligence lives at the edges; the middle is deliberately dumb. Telecoms engineers found this close to offensive — their networks were sophisticated systems with billing, quality guarantees and administrative control built into the core.</p>
<p>But a dumb network is one that does not need permission to carry something new. Nobody had to upgrade the internet to add the web, or video calling, or file sharing, or streaming, because the network has no opinion about what is in the packets. Every competing system with intelligence in the middle had to be modified for each new use, and each modification required whoever owned the middle to agree. That is the whole competition, and it was over before most people noticed it had started.</p>

<h2 id="Addresses_and_names">Addresses and names</h2>
<p>Every device gets an IP address, and routing works by a chain of local decisions: each router examines the destination, consults a table of which neighbour lies toward that part of the network, and forwards. No router knows the full path. The route emerges from thousands of independent hops, and can differ for consecutive packets of the same message.</p>
<p>Because addresses are numbers, the Domain Name System exists to translate names people can remember. DNS is a distributed hierarchy — ask a resolver, which asks servers responsible for progressively narrower parts of the name — and it is one of the few genuinely centralised points in an otherwise decentralised design, which makes it a recurring target for both attackers and censors.</p>
<p>The original address space allowed about 4.3 billion addresses, a number that seemed extravagant in 1981 and ran out in the 2010s. The replacement, IPv6, provides an absurd abundance — enough to assign addresses to every atom on the Earth's surface many times over — and adoption has taken decades, because upgrading a protocol that everything depends on and nobody owns is the hardest kind of change to coordinate. Stopgaps, chiefly network address translation, let many devices share one public address and in doing so quietly compromised the end-to-end principle.</p>

<h2 id="The_web_is_not_the_internet">The web is not the internet</h2>
<p>The two are routinely confused, and the distinction is worth keeping. The internet is the network. The web is one application running on top of it, invented in 1989 by Tim Berners-Lee at CERN to help physicists share documents. Email, file transfer and messaging predate it and are not part of it.</p>
<p>The web needed three pieces: a way to name documents (URLs), a way to request them (HTTP), and a format that could link to others (HTML). Its distinguishing feature was that links were one-directional and permitted to break. Earlier hypertext systems maintained link integrity, which required a central registry and meant the system could not span organisations that did not cooperate. Berners-Lee's willingness to accept broken links is what let the web grow without anyone's permission.</p>
<p>CERN placed the whole thing in the public domain in 1993. Had it been licensed, the history would be unrecognisable.</p>

<h2 id="What_the_design_did_not_anticipate">What the design did not anticipate</h2>
<p>The original network connected a small number of institutions whose users were identifiable and broadly trustworthy, and the protocols reflect that.</p>
<p>There is no authentication in the basic addressing, so packets can claim to come from anywhere. Email was specified with no way to verify a sender, which is the root of spam and phishing — every countermeasure since has been a layer bolted on top. Traffic was unencrypted by default for decades; the shift to encryption by default across the web is recent, driven by disclosures about mass surveillance and by browsers eventually refusing to treat plain HTTP as normal.</p>
<p>Denial-of-service attacks exploit the same openness: a network that accepts traffic from anyone accepts too much traffic from anyone. And routing runs largely on trust between networks, so a misconfigured or malicious announcement can pull a country's traffic through the wrong continent, which has happened both by accident and otherwise.</p>

<h2 id="Recentralisation">Recentralisation</h2>
<p>The deeper irony is structural. A network designed with no centre now runs, in practice, through a handful of chokepoints. Most of the world's websites sit on a few cloud providers; a small number of content delivery networks front an enormous share of traffic; a few companies mediate most search, social distribution and mobile software. When one large provider fails, a substantial fraction of the web goes down with it — which the protocols were specifically designed to prevent, and which they cannot prevent when the redundancy exists only at the layer nobody uses.</p>
<p>This is not a flaw in TCP/IP. It is economics operating on top of it: scale is cheap, coordination is expensive, and users pick convenience. The technical decentralisation survives intact and increasingly describes a network whose actual behaviour it no longer determines — which may be the most instructive thing about the whole system, since it suggests that architecture constrains what is possible without deciding what happens.</p>
`,
};
