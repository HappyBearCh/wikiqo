import type { RewrittenArticle } from "./types";

export const gameTheory: RewrittenArticle = {
  slug: "game-theory",
  title: "Game theory: what happens when everyone is reasoning about everyone else",
  sourceTitle: "Game theory",
  dek: "Its central finding is that individually rational choices can reliably produce an outcome everyone involved would rather avoid.",
  standfirst:
    "Ordinary decision theory asks what to do given the odds. Game theory asks what to do when the odds depend on what someone else decides, and they are simultaneously working out what to do about you. The recursion has no natural stopping point, and the discipline's most durable result is that when it stops, it often stops somewhere nobody wanted — not through error, but through each participant reasoning correctly.",
  readingMinutes: 8,
  html: `
<h2 id="Nash">The equilibrium concept</h2>
<p>The central solution concept is due to John Nash in 1950. A set of strategies is an equilibrium if no player can do better by changing their own strategy while everyone else keeps theirs unchanged.</p>
<p>It is a stability condition, not a claim about optimality. An equilibrium is a place where nobody has a unilateral reason to move. It may be terrible for everyone, and there may be several, with no indication of which will occur.</p>
<p>Nash proved that every finite game has at least one such equilibrium, provided players may use mixed strategies — randomising over their options with particular probabilities. That last provision is not a technicality. In games like matching pennies, or a penalty kick, any predictable strategy is exploitable, so the equilibrium requires genuine randomisation. Studies of professional footballers taking penalties find kick direction distributions strikingly close to the theoretical mixture, which is one of the better empirical confirmations the field has.</p>
<p>The theorem is an existence proof and offers no guidance on which equilibrium is reached when there are several, which is where most of the interesting work since has gone.</p>

<h2 id="Prisoners_dilemma">The dilemma that keeps recurring</h2>
<p>Two people are held separately. Each may stay silent or inform on the other. If both stay silent, both receive a light sentence. If one informs and the other stays silent, the informer goes free and the silent one receives a heavy sentence. If both inform, both receive a moderate sentence.</p>
<p>Examine one player's reasoning. If the other stays silent, informing is better. If the other informs, informing is better. Informing is better regardless — it is a dominant strategy — so both inform, and both do worse than if both had stayed silent.</p>
<p>Nothing here is a mistake. Each reasons correctly and the result is worse for both. This is why the structure matters so much more than the story.</p>
<p>It recurs constantly. Two firms advertising heavily, where neither gains share and both bear the cost. Arms races. Overfishing a shared stock. Emissions, where every country's unilateral abatement is costly and the benefit is shared. Doping in sport. Each has the same shape: individually rational, collectively ruinous.</p>
<p>Repetition changes it. Played once, defection is unambiguous. Played repeatedly against the same person with no known end, cooperation can be sustained because defection today is punished tomorrow. Robert Axelrod's tournaments in the early 1980s found that the winning strategy was tit-for-tat — cooperate first, then copy whatever the other player did last time. Its properties are worth stating: it is never the first to defect, it retaliates immediately, it forgives at once when the other returns to cooperating, and it is simple enough that its behaviour is legible to opponents.</p>
<p>The catch is the known end. If the last round is known, defection is rational there, which makes defection rational in the round before, and the reasoning unravels all the way back. Cooperation in repeated games depends on not knowing when the game stops, which is a striking result about the value of an indefinite horizon.</p>

<h2 id="Other_games">The other structures that matter</h2>
<p><strong>Chicken</strong> has two players heading toward collision, where swerving loses face and neither swerving is catastrophic. Unlike the prisoner's dilemma there is no dominant strategy — you want to do the opposite of whatever the other does — and it has two asymmetric equilibria. The strategic implication is perverse: visibly removing your own ability to swerve wins. Throwing the steering wheel out of the window is a winning move, and this logic underlies a great deal of brinkmanship and deterrence doctrine.</p>
<p><strong>The stag hunt</strong> has two hunters who can cooperate to take a stag, feeding both well, or individually take a hare, feeding one poorly. Cooperating is better for everyone if both do it, so this is not a dilemma of incentives — it is a problem of trust. Both cooperating and both defecting are equilibria, and which occurs depends on what each believes the other will do. Many problems described as prisoner's dilemmas are actually stag hunts, which matters enormously, because a trust problem is solvable by communication and reputation while an incentive problem is not.</p>
<p><strong>Coordination games</strong>, where players simply need to match — which side of the road, which standard, which meeting point — have multiple equilibria and no conflict of interest. Thomas Schelling's insight was that people converge on focal points, options that stand out for reasons outside the game's formal structure. Asked to meet a stranger in New York on a given day with no communication, a striking proportion of his subjects named the same place and the same time.</p>

<h2 id="Deterrence">The application that shaped policy</h2>
<p>Nuclear strategy was game theory's most consequential application, and Schelling's work — for which he shared the 2005 Nobel in economics — supplied its vocabulary.</p>
<p>Deterrence requires a threat that is credible, and the problem is that carrying out massive retaliation after an attack serves no purpose. Threatening something you would not rationally do is not obviously believable.</p>
<p>Schelling's answers were counterintuitive and were adopted. Removing your own ability to back down strengthens your position, so automatic responses and delegated launch authority make threats more credible than reserved discretion. Second-strike capability — the ability to retaliate after absorbing an attack — is stabilising, because it removes any advantage from striking first, whereas a vulnerable arsenal creates pressure to use it early. And defensive systems can be destabilising, because a state that believes it can survive retaliation becomes more attackable in the calculations of others.</p>
<p>These conclusions run against intuition in every case, and they shaped arms control treaties that limited defensive systems deliberately.</p>
<p>The moral discomfort is real and was noted at the time. Reasoning coolly about the structure of mutual annihilation is exactly what the situation required and exactly what made its practitioners easy to caricature.</p>

<h2 id="Limits">Where the model fails</h2>
<p>Game theory assumes players who are rational, who know the payoffs, and who know that everyone else is rational — and that everyone knows that, indefinitely. Real people fail all of these.</p>
<p>The ultimatum game is the cleanest demonstration. One player divides a sum and the other either accepts, in which case the division stands, or rejects, in which case both get nothing. Theory says any positive offer should be accepted, since something beats nothing, so the proposer should offer the minimum. In practice low offers are routinely rejected, offers cluster well above the minimum, and the pattern varies across cultures in ways that track local norms of exchange.</p>
<p>People punish unfairness at their own expense. This is irrational within the model and entirely sensible outside it, since a reputation for rejecting bad offers improves the offers you receive.</p>
<p>Behavioural game theory has absorbed much of this by modelling bounded rationality, limited reasoning depth, and preferences that include fairness. The beauty-contest game — everyone picks a number and whoever is closest to two-thirds of the average wins — shows the reasoning depth problem directly: the equilibrium is zero, and actual play clusters around numbers implying most people reason one or two steps and stop.</p>
<p>The most defensible view is that game theory is a tool for finding the structure of a situation rather than for predicting behaviour. Identifying that a problem is a prisoner's dilemma rather than a stag hunt tells you whether to reach for enforcement or for communication, and that is worth a great deal even when the equations do not describe what anybody actually does.</p>
`,
};
