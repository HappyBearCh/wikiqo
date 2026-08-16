import type { RewrittenArticle } from "./types";

export const insurance: RewrittenArticle = {
  slug: "insurance",
  title: "Insurance: selling certainty by pooling other people's disasters",
  sourceTitle: "Insurance",
  dek: "A bet that both parties expect to lose, structured so that both are better off for making it.",
  standfirst:
    "Insurance looks like gambling and is close to its opposite. A gambler accepts a worse expected outcome in exchange for variance; an insurance buyer accepts a worse expected outcome in exchange for less of it. You pay more than your losses will average, on purpose, because the average is not what would ruin you — the tail is.",
  readingMinutes: 7,
  html: `
<h2 id="Why_paying_too_much_is_rational">Why paying too much is rational</h2>
<p>Every insurance policy is priced above the expected loss. It has to be: the premiums must cover claims, administration and profit. So the average buyer, over a lifetime, pays out more than they receive. Buying it is nonetheless correct for most people, and the reason is that money is not linear in its usefulness.</p>
<p>Losing your house costs far more than a hundred times what losing one per cent of your house's value would cost, because the loss is not proportional to your ability to absorb it. The first thousand pounds you lose is inconvenient; the two-hundred-thousandth is catastrophic. Economists call this diminishing marginal utility, and it means a certain small loss can be genuinely preferable to a small chance of a huge one, even at unfavourable odds.</p>
<p>The mechanism that makes this work for the insurer is the law of large numbers. Any individual's loss is wildly unpredictable. The aggregate loss across a hundred thousand similar policies is predictable to within a few per cent. The insurer is not smarter about your risk than you are; it simply holds enough independent risks that the variance largely cancels.</p>
<p>That word — independent — is the whole business. It is also where the business fails.</p>

<h2 id="Ancient_versions">Ancient versions</h2>
<p>The oldest recognisable insurance is maritime. Babylonian bottomry contracts, recorded in the Code of Hammurabi, lent money against a ship's cargo on terms that cancelled the debt if the ship sank — a loan and a policy in one instrument, with the interest rate containing the premium.</p>
<p>Chinese merchants took a different and elegant approach to the same problem, distributing each trader's goods across many vessels so no single wreck ruined anyone. That is diversification rather than insurance, and it achieves much the same end without a counterparty.</p>
<p>Roman burial societies collected regular contributions and paid funeral costs, which is recognisably a mutual insurer. Medieval guilds did comparable work for members' families.</p>
<p>The modern industry's origin is usually dated to Edward Lloyd's coffee house in London in the 1680s, where shipowners and men with capital met. An individual would write his name under a description of the voyage, accepting a share of the risk for a share of the premium — literally underwriting. Lloyd's still operates on that syndicate structure.</p>

<h2 id="The_two_problems_that_never_go_away">The two problems that never go away</h2>
<p>Insurance has two structural difficulties, both arising from the fact that the buyer knows more than the seller.</p>
<p><strong>Adverse selection</strong> occurs before the policy is written. People likely to claim are the keenest to buy. If an insurer prices at the population average, it attracts the worse-than-average risks, which raises its costs, which forces higher prices, which drives away the better risks — a spiral that can destroy a market entirely. Every screening question, medical examination and postcode adjustment exists to counter it, and the mandatory purchase requirements in health and motor insurance are a policy response to the same problem.</p>
<p><strong>Moral hazard</strong> occurs after. Being insured reduces the cost of the loss and therefore, at the margin, the incentive to prevent it. This rarely means deliberate fraud; more often it is a slight relaxation of care. Deductibles, co-payments and no-claims discounts exist to keep the insured with some skin in the game.</p>
<p>Both problems have the same shape and no complete solution. They are managed, priced for, and lived with.</p>

<h2 id="When_the_risks_are_not_independent">When the risks are not independent</h2>
<p>The pooling logic requires losses to be roughly uncorrelated. Insure a hundred thousand houses against fire and you can predict the annual total, because houses burn independently.</p>
<p>Correlated risks break this completely. An earthquake, a hurricane or a flood damages every insured property in the region at once, so the pool provides no offsetting — the insurer faces one enormous claim instead of many small ones. Hence the standard exclusions, the separate flood and earthquake products with their own pricing, and reinsurance, which is insurance for insurers and spreads regional catastrophes across a global pool.</p>
<p>Where even that fails, the state usually ends up as insurer of last resort, because the alternative is that whole categories of property become uninsurable and therefore unmortgageable. This is now an active problem rather than a theoretical one: insurers have been withdrawing from wildfire-exposed parts of California and flood-exposed coastal regions, and the pricing signal they are sending — that certain places are becoming too risky to insure at any acceptable price — is arriving faster than the policy response.</p>

<h2 id="Life_insurance_is_a_different_animal">Life insurance is a different animal</h2>
<p>Life insurance runs on more solid ground, because mortality is the best-characterised risk there is. Life tables, pioneered by Edmond Halley using parish records from Breslau in 1693, let an insurer price with confidence what an individual cannot predict at all.</p>
<p>The product also inverts the usual arrangement. Most insurance covers an event you hope avoids you; life insurance covers a certainty, and the uncertainty is only in the timing. What is really being insured is dying <em>early</em> — before dependants can support themselves. Annuities insure the opposite risk, of living longer than your savings, and the two products hedge each other on an insurer's books rather neatly.</p>

<h2 id="What_it_makes_possible">What it makes possible</h2>
<p>The industry's real economic function is not compensation but permission. Activities with a small chance of catastrophic loss will not be undertaken by anyone who would be destroyed by that loss, however good the expected return.</p>
<p>Long-distance trade required marine insurance before it could be financed at scale. Nobody would build a factory, operate an airline, practise surgery or develop a drug if a single adverse event meant personal ruin. Mortgage lending depends on the property being insured. Insurance transfers tail risk from those who cannot bear it to institutions structured to, and in doing so it enables risk-taking rather than merely cushioning it.</p>
<p>Insurers also function as a quiet regulatory force, because they price behaviour. Fire insurance rates drove the adoption of sprinklers and building codes; motor premiums reward safety features; industrial insurers inspect and impose conditions. A company that will not insure something at any price has made a technical assessment that carries more weight than most warnings — which is worth remembering when reading about which coastlines are becoming uninsurable.</p>
`,
};
