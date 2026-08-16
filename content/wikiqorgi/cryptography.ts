import type { RewrittenArticle } from "./types";

export const cryptography: RewrittenArticle = {
  slug: "cryptography",
  title: "Cryptography: security built on problems nobody can prove are hard",
  sourceTitle: "Cryptography",
  dek: "Most of the world's secrecy rests on the assumption that factoring large numbers is difficult. No one has proved it.",
  standfirst:
    "The uncomfortable foundation of modern cryptography is that almost none of it is proven secure. It rests on mathematical problems that have resisted attack for decades and are widely believed to be hard — believed, not demonstrated. The entire edifice of online commerce is an enormous bet on the continued failure of clever people.",
  readingMinutes: 8,
  html: `
<h2 id="Two_thousand_years_of_the_same_mistake">Two thousand years of the same mistake</h2>
<p>Classical cryptography was a long sequence of schemes that felt secure to their inventors and were not. The Caesar shift, substitution ciphers, the Vigenère cipher advertised for three centuries as <em>le chiffre indéchiffrable</em> — each fell, and usually to the same insight: natural language is statistically lopsided. Letters, pairs and words appear at characteristic frequencies, and any cipher that preserves those patterns leaks its plaintext to anyone patient enough to count.</p>
<p>Frequency analysis was described by the Arab polymath al-Kindi in the ninth century, which means substitution ciphers were already broken a thousand years before they stopped being used. The recurring error was not mathematical incompetence but a failure of imagination about the attacker — designers tested their systems against themselves.</p>
<p>Kerckhoffs stated the correction in 1883, and it remains the field's governing principle: a system must stay secure even if everything about it except the key is public knowledge. Security through obscurity is not security, it is a delay. Every modern algorithm of consequence is published, scrutinised for years, and standardised in the open, precisely because a design nobody has tried to break is a design nobody has evidence for.</p>

<h2 id="The_one_unbreakable_scheme,_and_why_nobody_uses_it">The one unbreakable scheme, and why nobody uses it</h2>
<p>Exactly one cipher is provably secure. The one-time pad combines the message with a random key as long as the message, used once and then destroyed. Claude Shannon proved in 1949 that it leaks nothing whatsoever: every possible plaintext of the right length remains equally consistent with the ciphertext, so an attacker with unlimited computing power learns precisely nothing.</p>
<p>It is also nearly useless. The key must be as long as everything you will ever send, truly random, delivered securely in advance, and never reused — and if you have a secure channel for delivering a key that long, you could have sent the message down it. Reuse destroys it completely, as the Soviet Union discovered when duplicated pad pages let American analysts read intercepted traffic for years. Perfect secrecy exists; it just costs more than the secret.</p>

<h2 id="The_key_distribution_deadlock">The key distribution deadlock</h2>
<p>Until the 1970s all cryptography was symmetric: the same key locks and unlocks, so both parties must already share it. That is workable for embassies with diplomatic bags and hopeless for anything else. Two strangers cannot establish a secret over a channel someone is listening to — or so everyone assumed, because it sounds like a logical impossibility.</p>
<p>It is not. In 1976 Whitfield Diffie and Martin Hellman published a method by which two parties exchanging public messages can arrive at a shared secret that an eavesdropper who saw every message cannot compute. The trick uses one-way functions — operations easy to perform and hard to reverse. Multiplying two large primes takes microseconds; recovering them from the product is, as far as anyone knows, infeasible.</p>
<p>Public-key cryptography followed: two mathematically linked keys, one published freely and one kept private. Anything encrypted with the public key can only be opened with the private one. RSA, published in 1977, made this practical and its security rests on the difficulty of factoring. Elliptic-curve systems, now more common, rest on a related problem and achieve equivalent strength with much shorter keys, which is why they dominate on phones and embedded hardware.</p>
<p>British government cryptographers had discovered essentially the same ideas several years earlier and classified them. They received credit in 1997, having missed the entire commercial and academic revolution their work would have started.</p>

<h2 id="What_actually_protects_a_web_page">What actually protects a web page</h2>
<p>Real systems use public-key cryptography sparingly, because it is slow. A TLS connection — the padlock in the address bar — uses it only for the opening negotiation, to authenticate the server and agree on a temporary symmetric key. Everything after that is encrypted with the fast symmetric cipher, almost always AES.</p>
<p>Two components do the quiet work. <strong>Hash functions</strong> reduce any input to a fixed-length fingerprint that is impractical to reverse and impractical to collide deliberately; they underpin signatures, integrity checks and password storage. <strong>Digital signatures</strong> invert public-key encryption — sign with the private key, verify with the public one — proving both origin and that nothing was altered.</p>
<p>Authentication turns out to be the harder half. Encryption to an unverified party is encryption to whoever intercepted the connection, so the certificate system exists to vouch for who holds which public key. It is the weakest link in practice: its security depends on a large number of certificate authorities, any one of which can vouch for anything, and several have been compromised or have simply misissued.</p>

<h2 id="Where_the_breaks_come_from">Where the breaks come from</h2>
<p>Cryptography fails at its joints far more often than at its mathematics. AES has stood unbroken for over two decades. Meanwhile systems using it fall to implementation bugs, poor random number generation, reused values that must never repeat, and keys left where they can be read.</p>
<p>Side-channel attacks are the elegant version of this: rather than attacking the algorithm, measure the machine running it. How long an operation takes, how much power it draws, what electromagnetic noise it emits, what it leaves in the processor cache — all can leak key material from a mathematically flawless implementation. Constant-time programming, which forces every operation to take the same duration regardless of the data, exists solely to close this door, and getting it right is difficult enough that compilers sometimes helpfully optimise the protection away.</p>
<p>The most reliable attack remains the one requiring no mathematics at all. Phishing, coercion, bribery and stolen laptops defeat encryption by going around it, and the industry's oldest joke — that attackers do not break the cipher, they break the person holding the key — has not needed updating.</p>

<h2 id="The_deadline_already_running">The deadline already running</h2>
<p>Peter Shor showed in 1994 that a sufficiently large quantum computer could factor integers and solve the related elliptic-curve problem efficiently. That breaks RSA and every elliptic-curve system in use — not weakens, breaks. Symmetric ciphers and hashes fare better, losing roughly half their effective key length, which doubling the key size restores.</p>
<p>No such machine exists, and building one remains a formidable engineering problem. The deadline is nonetheless live, for a reason that catches people out: an adversary can record encrypted traffic today and decrypt it whenever the capability arrives. Anything that must stay secret for twenty years is already exposed.</p>
<p>Post-quantum algorithms, built on lattice problems believed hard for quantum machines as well as classical ones, were standardised in 2024, and migration has begun. It will take a decade or more, because cryptography is embedded in hardware, protocols, certificates and devices that nobody can update. And the new schemes come with the same caveat as the old: they are believed secure. Nobody has proved it.</p>
`,
};
