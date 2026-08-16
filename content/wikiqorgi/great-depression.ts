import type { RewrittenArticle } from "./types";

export const greatDepression: RewrittenArticle = {
  slug: "great-depression",
  title: "The Great Depression: a crash that need not have become a decade",
  sourceTitle: "Great Depression",
  dek: "Stock markets fall regularly. What turned this one into ten years of mass unemployment was the response.",
  standfirst:
    "The 1929 crash is remembered as the cause, and it was closer to a trigger. Markets had fallen before without producing a decade of destitution. What made this different was a sequence of policy decisions — monetary, fiscal and trade — each defensible by the orthodoxy of the time, and each of which made things worse.",
  readingMinutes: 8,
  html: `
<h2 id="Before_the_crash">Before the crash</h2>
<p>The American economy of the 1920s was genuinely productive — electrification, mass-produced cars, radio — and also carried strains that the boom concealed.</p>
<p>Agriculture had been depressed for most of the decade, as wartime demand vanished and mechanisation raised output into falling prices. Income inequality was high, so a large share of purchasing power sat with people who could not spend much more. Consumer durables had been sold increasingly on instalment credit, pulling future demand into the present. And stock speculation had been financed on margin, with buyers putting down a fraction of the purchase price and borrowing the rest, which magnifies gains and losses identically.</p>
<p>The market peaked in September 1929 and broke in late October. Margin calls forced selling, which lowered prices, which forced more selling. By 1932 the index had lost about ninety per cent of its value.</p>
<p>Only a small minority of American households owned shares directly, which is why the crash alone does not explain what followed. The transmission ran through the banks.</p>

<h2 id="The_banking_collapse">The banking collapse</h2>
<p>The United States had thousands of small, undiversified, unbranched banks — a structure created by regulation restricting interstate banking — and no deposit insurance. A bank whose local economy failed had nothing to fall back on.</p>
<p>Bank runs followed the logic they always follow. A bank lends out most of its deposits, so it cannot repay all depositors at once. If depositors believe it may fail, withdrawing is individually rational whether or not the belief is true, and the withdrawal makes it true. Roughly a third of American banks failed between 1930 and 1933.</p>
<p>The consequences went beyond lost savings. Each failure destroyed the local knowledge of who was creditworthy, so lending did not resume when conditions stabilised. And because bank deposits are most of the money supply, mass failures shrank the quantity of money in circulation by about a third.</p>
<p>The Federal Reserve, created in 1913 precisely to prevent this, did not act. Milton Friedman and Anna Schwartz's analysis, which reshaped the field's understanding, is that this was the decisive error — a central bank that allowed the money supply to contract by a third during a downturn converted a recession into a catastrophe. Ben Bernanke, later chair of the Fed, acknowledged as much directly at Friedman's ninetieth birthday: you're right, we did it, we're very sorry, and thanks to you we won't do it again.</p>

<h2 id="Three_more_ways_to_make_it_worse">Three more ways to make it worse</h2>
<p><strong>The gold standard.</strong> Currencies fixed to gold meant that defending the peg required raising interest rates during a downturn to stop gold leaving the country — the exact opposite of what the economy needed. It also transmitted contraction internationally, since one country's tightening drained reserves from others. The clearest evidence of its role is the recovery pattern: countries that left gold earlier recovered earlier, almost without exception. Britain left in 1931 and began recovering; France held on until 1936 and did not.</p>
<p><strong>Tariffs.</strong> The Smoot–Hawley Act of 1930 raised American tariffs sharply, over a petition signed by more than a thousand economists. Trading partners retaliated, and world trade fell by roughly two-thirds over the following years. Economists debate how much this contributed to the depth of the Depression — trade was a smaller share of the American economy then — but as a demonstration of a country making a collective problem worse by acting individually it is unimprovable.</p>
<p><strong>Balanced budgets.</strong> The orthodox response to falling revenue was to cut spending, which reduced demand further. Herbert Hoover, whose name became a byword for inaction, in fact intervened more than his predecessors would have, but within a framework that treated the budget as the thing requiring rescue.</p>

<h2 id="What_it_looked_like">What it looked like</h2>
<p>American unemployment reached roughly a quarter of the workforce, and higher in industrial cities. Germany's figure was comparable. There was no unemployment insurance in the United States, no federal relief system, and no old-age pension.</p>
<p>The Dust Bowl compounded it. Drought met farmland that had been ploughed up during the wartime wheat boom, stripping the grass that held the soil, and the topsoil left in storms that darkened skies as far as the eastern seaboard. Hundreds of thousands of people abandoned farms in Oklahoma, Texas and Arkansas.</p>
<p>The political consequences were the most serious. Germany's unemployment and the memory of the 1923 hyperinflation together destroyed the Weimar Republic's remaining support; the Nazi share of the vote rose in step with the jobless figures. This is the strongest argument against treating depressions as unfortunate but survivable economic events.</p>

<h2 id="What_ended_it">What ended it</h2>
<p>The New Deal changed the American state permanently — deposit insurance, securities regulation, social security, public employment programmes, the right to unionise. It relieved suffering and rebuilt institutions, and its record on ending the Depression itself is more mixed than its reputation suggests. Recovery from 1933 was real but incomplete, and a sharp relapse in 1937, when spending was cut and monetary policy tightened prematurely, pushed unemployment back up — an accidental experiment supporting the argument that the earlier stimulus had been working.</p>
<p>What ended it was rearmament and war: government spending at a scale nobody would have contemplated for its own sake, which eliminated unemployment within a few years. That is not an argument for war. It is an argument about the magnitude of intervention the situation required, and about how far short of it peacetime politics was willing to go.</p>

<h2 id="What_was_learned">What was learned</h2>
<p>Keynes's <em>General Theory</em>, published in 1936, provided the framework that made sense of the episode: economies can settle at an equilibrium with persistent high unemployment, because when everyone cuts spending simultaneously the shortfall in demand is self-sustaining, and the government is the only actor able to spend when nobody else will.</p>
<p>The institutional legacy is what mattered in practice. Deposit insurance has largely eliminated classical bank runs. Central banks accept a responsibility to act as lender of last resort. Automatic stabilisers — unemployment benefits, progressive taxation — put money into a contracting economy without requiring a political decision. The Bretton Woods institutions were built to prevent the beggar-thy-neighbour dynamics of the 1930s.</p>
<p>The 2008 crisis is the clearest test of whether the lessons held. Central banks flooded the system with liquidity, governments guaranteed deposits and recapitalised banks, and the tariff wars did not happen. The result was a severe recession rather than a decade-long collapse. Whether the subsequent turn to austerity in several countries repeated a version of the 1937 mistake is still argued — but the acute phase was handled by people who had explicitly studied what went wrong the first time, and it shows.</p>
`,
};
