import type { RewrittenArticle } from "./types";

export const inflation: RewrittenArticle = {
  slug: "inflation",
  title: "Inflation: a single number standing in for millions of different lives",
  sourceTitle: "Inflation",
  dek: "Prices rising is the symptom. What causes it is one of the least settled arguments in economics.",
  standfirst:
    "Inflation is reported as a fact about the economy — a percentage, monthly, to one decimal place. It is really a weighted average of price changes across a basket of goods that no actual household buys in those proportions, which is why the official figure so often disagrees with what people feel. Both can be right at once, and the gap between them explains a great deal of political anger.",
  readingMinutes: 7,
  html: `
<h2 id="Measuring_it_is_already_a_judgement">Measuring it is already a judgement</h2>
<p>To compute inflation you must first decide what to measure. Statistical agencies define a basket of goods and services, weight each by how much of a typical household's spending it represents, track prices, and report the change.</p>
<p>Every step involves choices. Which goods, and updated how often? Weight by whose spending — a pensioner and a young family buy very different things, and the same headline rate describes neither. When a product improves, is a higher price inflation or is it a better product? Statisticians adjust for quality, which is defensible and lowers measured inflation, and which strikes many people as a way of explaining away the price on the shelf. When beef gets expensive and shoppers switch to chicken, does the index follow them? Allowing for substitution reflects behaviour and also assumes that a household forced to trade down has not lost anything.</p>
<p>Housing is the largest single difficulty. A house is partly consumption and partly an asset, and different countries handle it differently — some use rents, some impute a rental value to owner-occupied homes, some largely exclude it. That choice alone can move the headline figure substantially, and it is why cross-country comparisons deserve suspicion.</p>
<p>None of this means the numbers are fabricated. It means a single national figure is an average over enormously varied experience, and someone whose spending is concentrated in the fastest-rising categories is not mistaken when the official rate feels wrong.</p>

<h2 id="Two_explanations,_both_partly_right">Two explanations, both partly right</h2>
<p>The monetarist account, associated with Milton Friedman, holds that inflation is always and everywhere a monetary phenomenon — too much money chasing too few goods. Its historical evidence is strong at the extremes: every hyperinflation involves a government creating money rapidly, without exception.</p>
<p>The relationship is much looser at ordinary rates. The strict version predicted high inflation after the enormous monetary expansion following 2008, and it did not arrive, because the new money largely sat in bank reserves rather than circulating. Velocity — how often money changes hands — is not stable, and a theory that assumes it is will mislead.</p>
<p>The alternative accounts focus on the real economy. <strong>Demand-pull</strong> inflation occurs when spending outruns what the economy can produce, and prices rise to ration the shortfall. <strong>Cost-push</strong> inflation comes from the supply side: an oil shock, a harvest failure, a broken supply chain raises production costs across many industries at once. The two require opposite responses, which is the practical reason the distinction matters — raising interest rates suppresses demand and does nothing about a blocked port.</p>
<p>Expectations bind it all together. If firms and workers expect prices to rise, they raise prices and demand higher wages in anticipation, and the expectation delivers the outcome. This is why central bankers spend so much effort on communication: anchoring expectations is a substantial part of the job, and credibility, once lost, is expensive to rebuild.</p>

<h2 id="Who_loses">Who loses</h2>
<p>Inflation is usually described as everyone getting poorer, which is not accurate. It is a redistribution, and it has predictable winners.</p>
<p><strong>Borrowers gain.</strong> A debt fixed in nominal terms shrinks in real terms as prices rise. The largest borrower in most economies is the government, which is why inflation is sometimes described as a tax nobody has to legislate.</p>
<p><strong>Lenders and savers lose</strong> symmetrically, as does anyone holding cash.</p>
<p><strong>People with fixed nominal incomes lose</strong> — pensioners on unindexed pensions, workers on multi-year contracts. Whether wages keep up depends heavily on bargaining power, which is why the same inflation rate is experienced very differently across the labour market.</p>
<p><strong>Holders of real assets are broadly protected.</strong> Property, equities and commodities tend to rise with the price level, so inflation typically widens the gap between those who own assets and those who do not.</p>
<p>There is also a floor problem. Persistently falling prices are worse: they raise the real burden of debt, and they encourage households to postpone purchases in the expectation of lower prices later, which reduces demand and can lower prices further. That trap is why central banks target a small positive rate — usually around two per cent — rather than zero. The target is a buffer, not an ideal.</p>

<h2 id="When_it_goes_wrong">When it goes wrong</h2>
<p>Hyperinflation is conventionally defined as prices rising more than fifty per cent a month, and it is a different phenomenon rather than more of the same. It requires a government financing itself by creating money, usually because it cannot borrow or tax — after a war, a collapse, or the loss of a major export.</p>
<p>Weimar Germany in 1923 is the standard example, with reparations obligations and occupied industrial regions, and prices doubling in days. Zimbabwe in the 2000s and Venezuela more recently followed comparable logic.</p>
<p>What makes hyperinflation self-sustaining is behavioural. Once people expect money to lose value quickly, they spend it immediately, which raises velocity, which raises prices further. The currency stops functioning as a store of value first, then as a unit of account, and finally people abandon it altogether for a foreign currency or barter. Ending it usually requires a new currency and a credible commitment to stop financing deficits by printing — the credibility being the hard part.</p>

<h2 id="The_recent_episode">The recent episode</h2>
<p>The inflation of 2021 to 2023 across most advanced economies is instructive because it did not fit any single account cleanly.</p>
<p>The supply side clearly mattered: pandemic disruption to production and shipping, then an energy shock following the invasion of Ukraine. The demand side clearly mattered too: substantial fiscal support met an economy that could not immediately expand output, and household spending shifted toward goods in ways supply chains were not configured for.</p>
<p>Central banks initially judged it transitory, a word that came to be used against them, and were slow to raise rates. The subsequent tightening was rapid, and inflation fell — though how much of the fall was caused by monetary policy and how much by supply chains simply healing is genuinely disputed, and the disagreement is not close to resolved.</p>
<p>One thing the episode demonstrated clearly is the gap between the statistic and the experience. Headline inflation fell steadily while price <em>levels</em> stayed high, and the public reaction to falling inflation was widespread anger — because a lower rate of increase is not a reduction, and nothing in the reported figure captures the fact that the previous prices are not coming back.</p>
`,
};
