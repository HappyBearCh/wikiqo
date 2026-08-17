import type { RewrittenArticle } from "./types";

export const bureaucracy: RewrittenArticle = {
  slug: "bureaucracy",
  title: "Bureaucracy: an anti-corruption technology that everyone hates",
  sourceTitle: "Bureaucracy",
  dek: "Rules applied impersonally, records kept in writing, and appointment by examination. Every irritating feature is there to stop something worse.",
  standfirst:
    "Bureaucracy is a term of abuse and was originally a description of an achievement. The features people object to — the forms, the rules, the refusal to make exceptions, the insistence on documentation — are the mechanism by which decisions stop depending on who your family is. Weber's analysis remains the best account of why it beat the alternatives, and also of why he expected it to become a cage.",
  readingMinutes: 7,
  html: `
<h2 id="What_it_replaced">Patrimonial administration</h2>
<p>Before bureaucratic administration, offices were held as personal property or personal favours. Positions were inherited, purchased outright, or granted by a ruler to a client. The officeholder's income came substantially from fees charged to the public, and the distinction between the office's money and the holder's own was frequently not drawn at all.</p>
<p>Under such a system, what happens to your case depends on who you are and who you know. There is no expectation of consistency between cases, no record that would let anyone check, and no route of appeal that is not another personal relationship.</p>
<p>The sale of offices was normal — in France before the Revolution it was a substantial source of crown revenue, and the purchaser reasonably regarded the office as an investment to be recouped. Army commissions in Britain were purchased into the 1870s.</p>
<p>This is the baseline against which bureaucracy should be judged, and it is why complaints that a bureaucrat would not make an exception are complaints about the system working. The inability to make an exception for you is the same property as the inability to make an exception against you.</p>

<h2 id="Weber">Weber's account</h2>
<p>Max Weber set out the ideal type in the early twentieth century, and his list of features is a list of solutions to specific failures.</p>
<p><strong>Jurisdictional areas fixed by rules.</strong> Who decides what is settled in advance, so cases cannot be routed to a sympathetic official.</p>
<p><strong>Hierarchy with defined appeal.</strong> A decision can be reviewed by someone specified, not by whoever can be lobbied.</p>
<p><strong>Written records.</strong> Decisions and their reasons exist independently of memory, which permits consistency, audit and challenge. Weber treated the file as the foundation of the whole apparatus.</p>
<p><strong>Appointment by qualification.</strong> Positions go to those who demonstrate competence by examination or credential, not to relatives.</p>
<p><strong>Full-time salaried career.</strong> Officials are paid enough to live on and have a career path, which removes the incentive to extract fees and gives them something to lose.</p>
<p><strong>Separation of office from person.</strong> The official does not own the position, cannot sell it, and cannot bequeath it. The resources of the office are not personal property.</p>
<p><strong>Impersonal application of rules.</strong> Cases are decided on their category, without regard to the individual — which Weber described, in a phrase that captures both the virtue and the coldness, as proceeding without hatred or passion, and equally without affection or enthusiasm.</p>
<p>Weber's claim was that this arrangement is technically superior to every alternative in precision, speed, consistency and cost, in the way a machine is superior to non-mechanical production. It is not a compliment about pleasantness.</p>

<h2 id="Examinations">China got there first</h2>
<p>The examination system for selecting officials operated in China, with interruptions, from the seventh century to 1905 — well over a thousand years, and predating anything comparable in Europe by roughly a millennium.</p>
<p>Candidates sat gruelling examinations, largely on the Confucian classics, in sealed cells over several days. Papers were recopied by clerks before marking so that handwriting could not identify the candidate — an anonymisation procedure that Western institutions took a very long time to adopt.</p>
<p>The system's meritocratic reach should not be overstated. Preparing for the examinations required years of leisure and tutoring, so successful candidates came overwhelmingly from families with means. But the principle that office should follow demonstrated attainment rather than birth was established and operative, and there are documented cases of men from modest backgrounds rising through it.</p>
<p>European observers noticed. Reports from Jesuit missionaries circulated among Enlightenment writers, and when Britain reformed its own civil service after the Northcote–Trevelyan report of 1854 — replacing patronage with competitive examination — the Chinese precedent was explicitly cited in the debates. The reform was driven partly by the administrative failures of the Crimean War, which is the usual pattern: bureaucratic reform follows visible catastrophe.</p>

<h2 id="Pathologies">The failure modes are real</h2>
<p>The critique is not merely that bureaucracy is annoying. It has characteristic failure modes that follow from its own logic.</p>
<p><strong>Goal displacement.</strong> Robert Merton's observation that officials trained to follow rules come to treat compliance as the objective rather than the purpose the rules serve. The form is completed correctly and the person is not helped.</p>
<p><strong>Rules multiply and do not retire.</strong> Each new rule addresses a genuine past failure, nobody is rewarded for removing one, and the accumulated stack eventually makes ordinary action difficult. The individual rules are each defensible; the aggregate is not.</p>
<p><strong>Accountability without responsibility.</strong> Distributing a decision across a hierarchy means no one person made it, which is protective for the institution and impenetrable for anyone seeking redress. Hannah Arendt's rule by Nobody names this precisely.</p>
<p><strong>Measurement corrupts.</strong> Once a metric becomes a target, effort shifts to the metric. Hospitals meeting waiting-time targets by reclassifying patients, and police forces improving clearance rates by adjusting how offences are recorded, are not anomalies but the predictable result.</p>
<p><strong>Information loss upward.</strong> Each layer summarises for the next, and bad news attenuates as it climbs, which is why senior officials are frequently the last to learn of failures their organisation has known about for months.</p>
<p>David Graeber's contribution was to point out that the burden increasingly falls on the public rather than the officials — that the paperwork required to obtain a service, contest a charge or claim a benefit is work transferred to the citizen, and that this is frequently not incidental but functions to reduce uptake.</p>

<h2 id="Private">It is not only a government thing</h2>
<p>Bureaucracy is popularly associated with the state, and large private organisations are at least as bureaucratic, for the same structural reasons.</p>
<p>Any organisation too large for one person to observe needs written procedures, hierarchical review, standardised records and impersonal rules. A multinational corporation has compliance departments, approval chains, procurement rules and internal audit because the alternative is that ten thousand people improvise.</p>
<p>Weber's point was about scale and complexity, not about ownership. The paperwork required by an insurance company or a bank is not obviously lighter than that required by a tax authority, and the appeal routes are frequently worse, since a citizen has more legal recourse against a government than a customer has against a company.</p>
<p>The distinctive modern development is algorithmic administration — rules applied by software, at scale, with no official in the loop. This intensifies every virtue and every pathology. Consistency becomes near-perfect and so does the inability to accommodate an unanticipated case. The rule is now in code, which makes it harder to inspect than a written regulation, and the appeal route often leads back to the same system that made the decision. The Dutch childcare benefits scandal, in which an automated fraud-detection system wrongly accused tens of thousands of families and eventually brought down the government, is the clearest available illustration of Weber's machine running without anyone able to stop it.</p>
`,
};
