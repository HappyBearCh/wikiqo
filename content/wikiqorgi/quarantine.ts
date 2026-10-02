import type { RewrittenArticle } from "./types";

export const quarantine: RewrittenArticle = {
  slug: "quarantine",
  title: "Quarantine: forty days, and the question of who pays for everyone else's safety",
  sourceTitle: "Quarantine",
  dek: "The word comes from the forty days ships waited off Venice. Whether quarantine works depends on one property of a disease, and who bears its cost has always been a political choice.",
  standfirst:
    "Quarantine is the oldest public health measure that actually worked before anyone understood infection. Its principle is simple: separate people who may have been exposed until it is clear whether they are sick. Its effectiveness varies enormously from disease to disease, for a reason that was only formalised in this century. And because it restricts the liberty of people who are, by definition, not known to be ill, it has always been entangled with power, trade and prejudice.",
  readingMinutes: 7,
  published: "2026-10-02",
  html: `
<h2 id="Origins">Thirty days, then forty</h2>
<p>In 1377, during recurrences of plague, the city of Ragusa — modern Dubrovnik — required travellers from infected areas to spend thirty days on a nearby island before entering the city. Venice and other Mediterranean ports adopted similar rules and lengthened the period to forty days, <em>quaranta giorni</em> in Italian, from which the word comes. Why forty is not certain; it may reflect religious symbolism as much as observation.</p>
<p>Venice built a permanent quarantine station on an island in its lagoon in 1423, and later another; these lazarettos held ships, crews, passengers and cargoes for the required period. Ports issued bills of health certifying where a ship had been and whether disease was present there, and a ship arriving without a clean bill could be held.</p>
<p>Quarantine is distinct from isolation, though the words are often used interchangeably. Isolation separates people known to be sick. Quarantine separates people who may have been exposed but are not known to be sick, which is what makes it both useful and contentious.</p>

<h2 id="When_it_works">The property that decides whether it works</h2>
<p>Quarantine works well against some diseases and poorly against others, and the difference was set out formally in a 2004 analysis by Christophe Fraser and colleagues. The key quantity is how much transmission happens before a person shows symptoms.</p>
<p>If people become infectious only after they are visibly ill, then isolating the sick, and quarantining their contacts until they either develop symptoms or pass the incubation period, can stop an outbreak. Smallpox and the 2003 SARS outbreak were diseases of this kind: SARS was brought under control worldwide within months through isolation, contact tracing and quarantine, without a vaccine or treatment.</p>
<p>If a large share of transmission occurs before symptoms, or from people who never become noticeably ill, the same measures can only slow spread rather than stop it, because by the time a case is identified, it has already passed the infection on. Influenza is like this, and so was COVID-19. For such diseases, quarantine of known contacts must be combined with broader measures — or accepted as a way of buying time rather than of ending the outbreak.</p>
<p>The length of quarantine is set by the incubation period: long enough that someone who was infected would almost certainly have developed symptoms by the end. Forty days was far more than plague required, and the excess was a cost borne by everyone detained.</p>

<h2 id="Trade">Disease and commerce</h2>
<p>Quarantine has always collided with trade. Holding ships and cargoes for weeks was expensive, and merchants, ports and governments had every incentive to declare a clean bill of health. In the nineteenth century, as cholera spread along steamship and railway routes, European powers convened the first International Sanitary Conference in Paris in 1851 to try to agree common rules. Agreement took decades, partly because scientific understanding of how cholera spread was disputed and partly because commercial interests resisted measures that slowed shipping through Suez and the Mediterranean.</p>
<p>The modern successor to those conferences is the International Health Regulations, revised in 2005, which require countries to report certain outbreaks to the World Health Organization and discourage measures that restrict travel and trade more than necessary. The tension is built in: a country that reports an outbreak honestly may face travel bans as a result, which gives it a reason not to.</p>

<h2 id="Abuses">Who gets quarantined</h2>
<p>Because quarantine restricts the liberty of people who may never be ill, decisions about whom to quarantine have often followed lines of prejudice rather than risk.</p>
<p>When plague appeared in San Francisco in 1900, the city quarantined Chinatown, roping off the district and its Chinese residents while white-owned businesses inside the cordon were exempted. A federal court struck the quarantine down that year, finding it discriminatory and unjustified by the medical facts.</p>
<p>Mary Mallon, an Irish-born cook in New York, was identified in 1907 as a healthy carrier of typhoid — infected, shedding bacteria and infecting others, but never ill herself. She was confined on an island in the East River, released on condition she stop working as a cook, found again cooking under another name after a new outbreak, and confined a second time, in total for about twenty-six years until her death. Many other healthy carriers were identified in the same period and were not held so long. Her case is still taught as a dilemma about how far a state may go against a person who has done nothing deliberately wrong.</p>

<h2 id="Voluntary">Voluntary sacrifice</h2>
<p>Not all quarantines have been imposed from outside. In 1665 plague reached the English village of Eyam in Derbyshire, reportedly through cloth sent from London. Led by their rector, William Mompesson, and the previous rector, Thomas Stanley, the villagers agreed to seal themselves off to prevent the disease spreading to surrounding towns, with food left at the parish boundary in exchange for money left in vinegar-filled holes.</p>
<p>The death toll in the village was heavy, and historians debate exactly how many died and whether the cordon raised mortality inside it while protecting neighbours. The story endures because it is an unusually clear case of what every quarantine involves: a small group bearing a heavy cost so that a larger one is protected. Most quarantines have made that trade without asking the people inside; Eyam is remembered because its people chose it.</p>
`,
};
