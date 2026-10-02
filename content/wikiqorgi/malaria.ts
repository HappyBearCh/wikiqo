import type { RewrittenArticle } from "./types";

export const malaria: RewrittenArticle = {
  slug: "malaria",
  title: "Malaria: a parasite that has shaped human genes, empires and medicine",
  sourceTitle: "Malaria",
  dek: "Malaria still kills around six hundred thousand people a year, most of them African children. It left its mark in our DNA, financed the search for some of medicine's great drugs, and has outlasted every attempt to eradicate it.",
  standfirst:
    "Malaria is caused not by a bacterium or a virus but by a single-celled parasite with a life cycle split between mosquitoes and humans. It has probably killed more people over human history than any other disease, and it remains one of the leading causes of death in children in sub-Saharan Africa. The fight against it produced quinine, chloroquine and artemisinin, made DDT famous and then infamous, and is now being waged with bed nets, vaccines and genetically engineered mosquitoes.",
  readingMinutes: 8,
  published: "2026-10-02",
  html: `
<h2 id="Parasite">Bad air, then a parasite, then a mosquito</h2>
<p>The name comes from the Italian <em>mal'aria</em>, bad air, reflecting the old belief that the disease rose from marshes. The marshes were relevant, but for a different reason.</p>
<p>In 1880 Alphonse Laveran, a French army doctor in Algeria, saw moving parasites in the blood of a malaria patient. In 1897 Ronald Ross, a British officer in the Indian Medical Service, showed that mosquitoes transmit malaria parasites in birds, and Italian researchers led by Giovanni Battista Grassi soon demonstrated that human malaria is transmitted by mosquitoes of the genus <em>Anopheles</em>. Both Ross and Laveran received Nobel Prizes.</p>
<p>The parasites belong to the genus <em>Plasmodium</em>, and several species infect humans. <em>Plasmodium falciparum</em>, dominant in Africa, causes most deaths. <em>Plasmodium vivax</em>, widespread in Asia and Latin America, is less often fatal but can hide in the liver and cause relapses months or years later. Only female mosquitoes, which need blood to develop their eggs, transmit the parasite.</p>

<h2 id="Genes">The disease written into our genome</h2>
<p>Malaria has exerted one of the strongest selective pressures on human populations in recent evolution, and the evidence is in our genes.</p>
<p>The clearest case is sickle cell. People who inherit one copy of the sickle haemoglobin gene are substantially protected against severe malaria; people with two copies have sickle cell disease, which without treatment is often fatal in childhood. In regions where malaria was intense, the protection for carriers outweighed the cost, so the gene became common. The geneticist J. B. S. Haldane proposed in 1949 that inherited blood disorders might persist because they protected against malaria, and in 1954 Anthony Allison provided evidence for this in the case of sickle cell in East Africa.</p>
<p>Similar stories apply to the thalassaemias and to deficiency of the enzyme G6PD. Most people of West and Central African ancestry lack a protein on red blood cells, the Duffy antigen, that <em>Plasmodium vivax</em> uses to enter them, which is why vivax malaria is rare in much of Africa.</p>

<h2 id="Drugs">From tree bark to Project 523</h2>
<p>The first effective treatment was the bark of the cinchona tree from the Andes, used by Indigenous peoples of the region and brought to Europe by Jesuit missionaries in the seventeenth century. Its active ingredient, quinine, was isolated in 1820. Historians have argued that quinine, taken as a preventive, was one of the technologies that made European colonial expansion into the African interior possible in the late nineteenth century, by cutting death rates among Europeans.</p>
<p>Chloroquine, developed in the 1930s and 1940s, was cheap, safe and effective, and became the mainstay of treatment and prevention. Resistance to it emerged in South-East Asia and South America in the late 1950s and spread to Africa by the late 1970s, with devastating effects on child mortality.</p>
<p>The drug that replaced it came from a secret Chinese military research programme. In 1967, at North Vietnam's request for help with malaria among its troops, China established Project 523 to find new antimalarials. One of its scientists, Tu Youyou, searched ancient Chinese medical texts and found, in a fourth-century work by Ge Hong, a remedy using sweet wormwood soaked in cold water. The instruction to avoid heat proved crucial: her team extracted the active compound at low temperature and obtained artemisinin. Tu Youyou received a Nobel Prize in 2015. Artemisinin-based combination therapies are now the standard treatment worldwide, and partial resistance to artemisinin, first seen in South-East Asia, has now been confirmed in several African countries.</p>

<h2 id="Eradication">The eradication that failed</h2>
<p>In 1955 the World Health Organization launched the Global Malaria Eradication Programme, relying chiefly on spraying the insecticide DDT inside homes and on chloroquine. Malaria was eliminated from Europe, the United States and several other countries, and greatly reduced in parts of Asia.</p>
<p>The programme did not succeed globally, and much of sub-Saharan Africa, where transmission was most intense, was never seriously included. Mosquitoes developed resistance to DDT, the parasite to chloroquine, funding dried up, and environmental concern over DDT grew after the publication of Rachel Carson's <em>Silent Spring</em> in 1962, though its use in agriculture rather than indoor spraying was the main target of that concern. The programme was abandoned in 1969, and in several countries malaria resurged.</p>

<h2 id="Now">Nets, vaccines and gene drives</h2>
<p>A renewed effort from around 2000 brought large gains. An analysis published in 2015 estimated that malaria control prevented hundreds of millions of cases in Africa between 2000 and 2015, and attributed most of the reduction to insecticide-treated bed nets, which protect sleepers at night when <em>Anopheles</em> mosquitoes bite. Progress has since stalled. The World Health Organization estimated around six hundred thousand malaria deaths in 2023, about three-quarters of them children under five, and around ninety-five per cent in Africa.</p>
<p>Vaccines arrived late, because a parasite with a complex life cycle is a far harder target than a virus. The first, RTS,S, was recommended by the WHO for children in 2021 and a second, R21, in 2023; both reduce malaria and deaths meaningfully, though their protection is partial.</p>
<p>The most radical approach targets the mosquito. Gene drives are genetic modifications engineered to spread through a population faster than normal inheritance would allow, and could in principle spread infertility or resistance to the parasite through a wild <em>Anopheles</em> population. Laboratory studies have shown they can collapse caged populations; releasing them into the wild raises ecological and ethical questions that are still being worked through, and no gene drive mosquito has yet been released.</p>
`,
};
