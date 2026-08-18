import type { RewrittenArticle } from "./types";

export const thePassport: RewrittenArticle = {
  slug: "the-passport",
  title: "The passport: a wartime emergency measure that never ended",
  sourceTitle: "Passport",
  dek: "Before 1914 most people crossed most borders without documents. The system that replaced that was introduced as temporary.",
  standfirst:
    "For most of the nineteenth century, travelling between European states required no papers, and attempts to impose them were abandoned as commercially damaging and administratively absurd. The modern passport regime dates from the First World War, was explicitly a security measure for the duration, and was retained afterwards because states discovered they liked knowing who was entering. It is now the single largest determinant of a person's freedom of movement, and it is allocated at birth.",
  readingMinutes: 7,
  html: `
<h2 id="Before">The century without papers</h2>
<p>The word derives from permission to pass through a port or a gate, and documents of safe conduct are ancient — there is a reference in the Book of Nehemiah to letters requesting safe passage.</p>
<p>What is easy to forget is that the nineteenth century largely abolished them. France dropped passport requirements in 1861, and most of Europe followed. The reasoning was economic: growing railway traffic made document checks impractical, and states wanted the trade and labour mobility.</p>
<p>By the 1890s a person could travel across most of Europe without showing anything to anyone. Contemporary accounts treat this as unremarkable. Stefan Zweig, writing after the fact, described a world in which one went where one wished and stayed as long as one pleased, with no permit required, and remembered the frontier as a symbolic line one crossed with the indifference one crosses a meridian.</p>
<p>Russia and the Ottoman Empire retained internal and external controls, and were regarded by Western Europeans as backward for it.</p>
<p>Notably, this open period coincided with the largest transatlantic migration in history. Tens of millions moved to the Americas, and while arrival was regulated — with health inspections and exclusions, and with explicitly racial bars such as the Chinese Exclusion Act — departure generally was not, and no document established a right to travel.</p>

<h2 id="The_war">1914, and the emergency that stayed</h2>
<p>The First World War ended it within months. States needed to identify enemy nationals, control the movement of people with useful skills, and prevent spying. Britain's Aliens Restriction Act was passed the day after war was declared, and the British Nationality and Status of Aliens Act of 1914 established the modern document.</p>
<p>These were presented as wartime measures. They were not withdrawn.</p>
<p>The reason is that governments found the apparatus useful for peacetime purposes — conscription records, taxation, labour market control, and the new business of restricting immigration by nationality rather than by individual characteristics.</p>
<p>Standardisation followed at a League of Nations conference in 1920, which fixed the booklet format, the dimensions, the number of pages and the arrangement of information, largely as they remain. The familiar object is a product of an international committee.</p>
<p>The Nansen passport, created in 1922 for stateless refugees — initially Russians stripped of citizenship after the revolution — was the first attempt to solve the problem the system had created. Fridtjof Nansen received the Nobel Peace Prize for it. It was recognised by over fifty states and issued to hundreds of thousands, including Stravinsky, Chagall and Rachmaninoff, and it established the principle that a person without a state still requires travel documents.</p>

<h2 id="Inequality">The most consequential document you are assigned</h2>
<p>Passports are formally equal objects and function unequally to an extreme degree.</p>
<p>Indices ranking passports by the number of destinations accessible without a prior visa show a range from around 190 destinations at the top to under 30 at the bottom. The difference is not earned, negotiated or applied for. It is determined by birthplace.</p>
<p>The practical effect is that identical journeys — a conference, a family visit, a holiday — are a matter of buying a ticket for some people and a months-long application with fees, interviews, bank statements, sponsorship letters and a substantial refusal rate for others. Refusals frequently come with no reason given and no appeal.</p>
<p>Visa regimes are also reciprocal in form and asymmetric in practice: wealthy states impose requirements on poorer ones, poorer states impose them back, and the burden falls overwhelmingly on citizens of the poorer state because that is where the travel demand runs.</p>
<p>Economists have described this as a birthright lottery that is the largest single determinant of lifetime income, larger than education or effort. Whatever one concludes about what should follow, the empirical claim is well supported: where you were born predicts your income better than anything else about you.</p>
<p>Citizenship by investment programmes make the logic explicit. Several states sell passports for sums between roughly a hundred thousand and a few million, and the market prices the difference in mobility directly.</p>

<h2 id="Technology">What is in the book now</h2>
<p>The modern passport is a security document with an unusual threat model: it must be verifiable by a stranger in a booth in a country the issuer does not control.</p>
<p>Physical security features accumulated over decades — watermarks, intaglio printing, ultraviolet ink, holograms, laser-engraved polycarbonate data pages, and machine-readable zones with check digits.</p>
<p>Biometric passports, standard since the 2000s, add a contactless chip holding the data page and a facial image, digitally signed by the issuing state. Automated gates compare a live image against the stored one.</p>
<p>The chip has attracted sustained criticism from security researchers. Early implementations were cloneable, the access key was derived from data printed on the page itself and had limited entropy, and remote readability raised the possibility of identifying a passport holder's nationality without their knowledge. Later revisions addressed much of this.</p>
<p>Facial recognition at borders has expanded rapidly and raises the accuracy questions the technology raises everywhere, with documented differences in error rates across demographic groups — a false non-match at a border is not a minor inconvenience.</p>
<p>The deeper shift is that the document is becoming secondary. The decision about whether a person may travel is increasingly made before departure, through advance passenger information, electronic travel authorisations and airline carrier liability — which pushes immigration enforcement onto commercial airlines at the point of boarding, thousands of kilometres from any border.</p>

<h2 id="Exceptions">Where it does not apply</h2>
<p>The Schengen Area abolished routine internal border checks among most European states from 1995, restoring for its members something close to the pre-1914 situation — and doing so by strengthening the external frontier considerably, which is the trade the arrangement rests on.</p>
<p>Other free movement zones exist with varying depth, including arrangements in East and West Africa, South America and between Australia and New Zealand.</p>
<p>Several small categories of person travel outside the ordinary system: heads of state, holders of certain religious documents, and a handful of individuals granted personal exemptions.</p>
<p>The most persistent question the system cannot answer is what to do about people it does not cover. A stateless person — of whom there are millions, produced by state dissolution, discriminatory nationality laws, and gaps between systems of descent and birthplace — has no state obliged to admit them and therefore, in a system where every territory belongs to some state, nowhere they may lawfully be. Hannah Arendt's formulation, that the fundamental deprivation is not of a particular right but of a place in the world where opinions are significant and actions effective, was written about exactly this and has not been superseded.</p>
`,
};
