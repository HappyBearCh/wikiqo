import type { RewrittenArticle } from "./types";

export const theCensus: RewrittenArticle = {
  slug: "the-census",
  title: "The census: counting people is a political act with a body count",
  sourceTitle: "Census",
  dek: "Every category on the form is a decision about which groups exist, and the answers have been used to allocate money, seats, and in some cases victims.",
  standfirst:
    "A census looks like a neutral inventory and has never been one. Deciding who counts as a household, which boxes appear under ethnicity, whether prisoners are residents of the prison or of their home, and who is missed entirely are choices that determine the distribution of political representation and public money. States have also learned, more than once, that a good population register is exactly what a persecuting government needs.",
  readingMinutes: 7,
  html: `
<h2 id="Why_states_count">States count in order to extract</h2>
<p>The purpose was never curiosity. Early censuses existed to establish who could be taxed and who could be conscripted, and the two lists were substantially the same. This shapes the historical record in a specific way: many early counts enumerate households or adult men rather than people, because those were the taxable and drafted units, and reconstructing actual populations from them requires assumptions that vary by historian.</p>
<p>The Roman census, from which the word comes, registered citizens and their property to determine both tax liability and military class, and it was conducted by officials whose supervision of public morals gave English the word censorious.</p>
<p>The Domesday Book of 1086 is the sharpest early example: a survey of England conducted so thoroughly that a contemporary chronicler complained there was not a hide of land, nor an ox nor a cow nor a pig, that was left out. Its purpose was to determine what the Conquest had actually acquired and what it could be made to yield, and its name reflects what people thought of a record against which there was no appeal.</p>
<p>Resistance was common and reasonable, since being counted preceded being taxed or taken. The biblical account of David's census being followed by a plague is the ancient version of the same intuition.</p>

<h2 id="Apportionment">The count that determines power</h2>
<p>The American constitution requires a census every ten years and ties it directly to political representation, which makes the count itself a permanent object of political contest rather than a statistical exercise.</p>
<p>The original text contains the clearest possible demonstration that census categories are political. Enslaved people were counted as three-fifths of a person for apportionment — a compromise between southern states wanting full representation for a population they denied any rights, and northern states arguing that people held as property should not augment the political power of their owners. The fraction settled a dispute about power and has nothing to do with counting.</p>
<p>Apportionment produces a genuine mathematical problem as well. Seats are integers and populations are not, and every method of rounding has a defect that has actually occurred: one produced the Alabama paradox, where increasing the total number of seats caused a state to lose one. It has been proved that no apportionment method can satisfy all the reasonable-looking fairness conditions at once, which means the choice of method is a choice about which unfairness to accept, and different methods have been adopted at different times by whichever coalition benefited.</p>
<p>Because district boundaries are redrawn from census data, the count also feeds directly into gerrymandering, and a decision as technical as whether prisoners are counted at their prison or their home address shifts representation measurably from urban to rural districts.</p>

<h2 id="Categories">The boxes on the form</h2>
<p>Nothing exposes the constructedness of a census like its ethnic and racial classifications, which change every few decades in ways that track politics rather than populations.</p>
<p>Categories have appeared and disappeared, been split and merged, and have been assigned by enumerators before being self-reported. American censuses have at various points recorded degrees of mixed ancestry as separate categories, reclassified the same groups repeatedly, and only permitted respondents to select more than one race from 2000. Nobody's ancestry changed in 2000; the available answers did.</p>
<p>The consequences are practical. Anti-discrimination enforcement, health disparity research and resource allocation all require counting the relevant groups, so the categories are necessary. But the act of counting also stabilises the categories, gives them official reality, and creates constituencies invested in their boundaries. France takes the opposite approach and prohibits the collection of ethnic statistics on the principle that the republic recognises only citizens — which prevents official classification and makes discrimination correspondingly difficult to measure.</p>
<p>Neither position is obviously right, and the disagreement is not empirical.</p>

<h2 id="The_dark_use">What a good register enables</h2>
<p>The most uncomfortable fact about population data is that its quality is exactly what makes it dangerous.</p>
<p>The Netherlands maintained unusually comprehensive civil registration in the 1930s, including religion, administered by a competent bureaucracy for entirely benign purposes. When the country was occupied, the registers were used to locate Jewish residents, and the death rate among Dutch Jews was among the highest in Western Europe — substantially higher than in countries with poorer records. Resistance members bombed the Amsterdam registry office in 1943 specifically to destroy the files.</p>
<p>Punch-card tabulation, developed for the 1890 American census and the origin of one of the largest computing companies, was licensed to and serviced for the Nazi administration, a history documented at length and disputed as to degree of knowledge but not as to fact.</p>
<p>The Rwandan identity cards recording ethnicity, introduced under colonial administration and retained afterwards, were used at roadblocks in 1994.</p>
<p>Census confidentiality laws exist because of this history, and they have been broken. American census data on Japanese American residents was supplied to authorities during the Second World War, which the Census Bureau denied for decades and eventually acknowledged after researchers found the records.</p>
<p>The lesson drawn by statistical agencies is not that counting is wrong but that the safeguards must be legal, technical and durable, since a register outlives the government that built it and the intentions of its designers are not binding on anyone later.</p>

<h2 id="Undercount">Who gets missed</h2>
<p>A census never counts everyone, and the misses are not random — which is what makes them consequential.</p>
<p>People who move frequently, share crowded housing, distrust government, lack fixed addresses, or fear immigration enforcement are systematically harder to reach. So undercount concentrates in poorer and minority populations, and since funding formulas and representation follow the count, the communities missed lose resources in proportion to how badly they were missed. The error compounds the disadvantage that caused it.</p>
<p>Statistical adjustment could correct much of this, and the proposal has been litigated rather than debated, because correcting an undercount that falls disproportionately on particular groups has a predictable partisan direction. The American Supreme Court held that sampling could not be used for apportionment, which settled the law without addressing the accuracy problem.</p>
<p>The addition of a citizenship question to the 2020 American census was contested on exactly these grounds — that it would suppress response among immigrant households — and was ultimately blocked after the stated justification was found by the Court to be, in effect, pretextual.</p>

<h2 id="After_the_form">Whether the form has a future</h2>
<p>Several countries have stopped conducting traditional censuses. Nordic states derive population statistics from administrative registers — tax, health, education, address registration — updated continuously, which is cheaper, more current, and requires a level of routine state record-keeping that other countries find politically unacceptable.</p>
<p>Others combine a reduced census with administrative data and survey sampling. The trade-off is consistent: register-based statistics are timelier and lose the ability to ask anything the registers were not designed to record, including most questions about identity, household relationships and how people actually live.</p>
<p>The deeper shift is that far more is now known about populations than any census collects, held by companies rather than statistical agencies, gathered without consent and without any of the confidentiality law that constrains the state. The census remains the only population count that is public, methodologically documented, and answerable to anyone — which is an argument for it that its designers would not have recognised.</p>
`,
};
