import type { RewrittenArticle } from "./types";

export const insulin: RewrittenArticle = {
  slug: "insulin",
  title: "Insulin: the patent was sold for a dollar, and the price went up anyway",
  sourceTitle: "Insulin",
  dek: "A uniformly fatal disease became manageable in 1922. A century later, people ration a drug whose discoverers refused to profit from it.",
  standfirst:
    "Before 1922, a diagnosis of type 1 diabetes in a child meant death within roughly a year, and the only treatment was starvation to postpone it. The discovery of insulin is among the fastest translations from laboratory to bedside in medical history, and its discoverers sold the patent to the University of Toronto for a dollar each so that nobody could monopolise it. What happened to the price afterwards is the part worth understanding.",
  readingMinutes: 7,
  html: `
<h2 id="Before">A death sentence with one delaying tactic</h2>
<p>Type 1 diabetes destroys the pancreatic beta cells that produce insulin. Without insulin, glucose cannot enter most cells, so it accumulates in the blood while the tissues starve. The body turns to fat, producing ketones, and the resulting acidosis kills.</p>
<p>The symptoms were described in Egyptian and Greek texts — the excessive thirst, the enormous urine output, the wasting. The name refers to the flow, and the Latin <em>mellitus</em> means honeyed, because physicians diagnosed it by tasting the urine.</p>
<p>The only intervention that did anything was the starvation diet developed by Frederick Allen around 1914. Restricting intake to a few hundred calories a day reduced the glucose load and could extend life from months to a year or two. Patients were emaciated and constantly hungry, and the treatment was a way of dying slowly rather than quickly. Photographs of children on these regimes are difficult to look at.</p>
<p>That a pancreatic secretion was responsible had been suspected since 1889, when Minkowski and von Mering removed a dog's pancreas and observed that it developed diabetes. Numerous attempts to extract the substance failed, because the pancreas is full of digestive enzymes that destroy the hormone during extraction.</p>

<h2 id="Toronto">1921 and 1922</h2>
<p>Frederick Banting was a surgeon in London, Ontario with no research experience and a failing practice. Reading about a case in which a blocked pancreatic duct caused the digestive tissue to atrophy while the islets survived, he had an idea: tie off the ducts, wait for the enzyme-producing tissue to degenerate, then extract from what remained.</p>
<p>He persuaded John Macleod at the University of Toronto to give him laboratory space, dogs and an assistant for the summer. The assistant was Charles Best, a student who won the position on a coin toss with another candidate.</p>
<p>They produced an extract that lowered blood glucose in diabetic dogs. James Collip, a biochemist, then developed the purification that made it safe for humans — which was the step that mattered clinically, since early preparations caused abscesses and severe reactions.</p>
<p>Leonard Thompson, aged 14 and close to death, received the first injection in January 1922. The first attempt, with an impure preparation, produced an abscess and little effect. Collip's purified extract, given twelve days later, dropped his blood glucose to near normal. He lived another thirteen years.</p>
<p>What followed was extraordinary. Ward after ward of comatose children were injected, and the accounts describe physicians moving down the row as patients woke before they reached the end. Insulin went from laboratory extract to commercial production by Eli Lilly within about a year.</p>

<h2 id="The_patent">One dollar</h2>
<p>The discoverers patented insulin specifically to prevent anyone else from patenting it and controlling the supply, then assigned the patent to the University of Toronto for one dollar each.</p>
<p>Banting's stated position was that insulin belonged to the world and that a physician should not profit from a discovery that saved lives. The university licensed manufacturers on condition that the product be sold without excessive profit and that improvements be shared.</p>
<p>The Nobel Prize came in 1923, with unusual speed and considerable acrimony. It was awarded to Banting and Macleod. Banting was furious that Best was excluded and split his prize money with him; Macleod split his with Collip. The credit dispute was bitter and long-running, and the modern consensus is that all four were essential and that Collip in particular has been underrecognised.</p>

<h2 id="Improving">What the molecule became</h2>
<p>Early insulin was extracted from cattle and pig pancreases collected from slaughterhouses — a great many of them, since each yielded a small quantity. Animal insulin differs slightly from human insulin, which caused immune reactions in some patients.</p>
<p>Insulin has been repeatedly first in the history of biochemistry. It was the first protein to have its complete amino acid sequence determined, by Frederick Sanger in 1955, which earned him a Nobel Prize and established that proteins have defined sequences rather than variable ones. It was the first protein produced by recombinant DNA technology for medical use, in 1978, with human insulin manufactured by genetically modified bacteria reaching market in 1982 — the first such product anywhere.</p>
<p>Analogue insulins followed, engineered by altering the amino acid sequence to change how quickly the molecule disperses after injection. Rapid-acting analogues work within minutes for use at meals; long-acting ones release steadily over a day to provide background coverage. These are genuine improvements in convenience and in reducing overnight hypoglycaemia, though trials show the advantage over older human insulin in overall glucose control to be real but modest.</p>
<p>Delivery has changed as much as the molecule. Pumps deliver continuous background insulin with meal doses on demand. Continuous glucose monitors replaced fingerprick testing. Closed-loop systems combine the two, adjusting delivery automatically from sensor readings — an artificial pancreas in function if not in tissue, and the most significant practical advance in decades.</p>

<h2 id="The_price">What happened to the price</h2>
<p>A drug given away by its discoverers a century ago, whose original patents expired long ago, costs some patients in the United States hundreds of dollars a month, and rationing — deliberately using less than prescribed to make a vial last — has caused documented deaths.</p>
<p>Several mechanisms produced this, and none is a simple story of one greedy actor.</p>
<p>Insulin is a biological product, not a small molecule, which historically made generic entry difficult. Manufacturing a protein in living cells and demonstrating equivalence is far harder than copying a chemical, and the regulatory pathway for biosimilars arrived late.</p>
<p>Incremental reformulation kept new patents flowing. Each analogue, each delivery device, each formulation change carries fresh intellectual property, so the marketed product is continually replaced by a patented successor while the off-patent version is withdrawn or left unpromoted. This is often called evergreening.</p>
<p>Three manufacturers supply the great majority of the world market, and their list prices rose in close parallel over years.</p>
<p>The rebate system in American drug distribution rewards high list prices, because pharmacy benefit managers negotiate discounts from list and are compensated in proportion to them. Insured patients whose cost-sharing is calculated on list price, and uninsured patients, pay something close to the inflated figure while the net price received by manufacturers is far lower.</p>
<p>The result was a drug costing a few dollars to manufacture priced at a level that made people ration it. Public pressure, state price caps, a federal cap for Medicare recipients, and eventual voluntary reductions by manufacturers have brought prices down substantially since 2023 — after roughly two decades of increases and a number of deaths that were entirely preventable.</p>
<p>Access outside wealthy countries remains the larger problem, and the World Health Organization lists insulin as an essential medicine that a substantial fraction of people who need it cannot reliably obtain.</p>

<h2 id="Not_a_cure">What it is not</h2>
<p>Insulin is a treatment, not a cure, and the distinction is worth being precise about because it is routinely blurred.</p>
<p>A person with type 1 diabetes on insulin is doing manually, with imperfect information, what a pancreas does continuously with perfect information. Doses must be matched to food, exercise, illness, stress and sleep, and the penalty for error runs in both directions — too little produces long-term damage to eyes, kidneys, nerves and arteries; too much produces hypoglycaemia, which can cause unconsciousness and death within hours.</p>
<p>Life expectancy for people with type 1 diabetes remains measurably below the general population despite a century of refinement.</p>
<p>Beta cell replacement is the actual cure being pursued. Islet transplantation works and is limited by donor supply and by the need for lifelong immunosuppression. Stem-cell-derived beta cells have restored insulin production in early trials, which is genuinely promising, and the immune problem remains: type 1 diabetes is an autoimmune disease, so new beta cells are subject to the same attack that destroyed the originals unless they are protected or hidden.</p>
`,
};
