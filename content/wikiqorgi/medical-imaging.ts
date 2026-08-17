import type { RewrittenArticle } from "./types";

export const medicalImaging: RewrittenArticle = {
  slug: "medical-imaging",
  title: "Medical imaging: seeing inside a living body, and finding things better left alone",
  sourceTitle: "Medical imaging",
  dek: "Röntgen photographed his wife's hand in 1895 and she said she had seen her death. The modern problem is the opposite — finding disease that would never have caused harm.",
  standfirst:
    "For all of medical history before 1895, the interior of a living body could be examined only by opening it. Within a year of Röntgen's discovery, X-ray machines were in hospitals worldwide, and the sequence of technologies that followed — computed tomography, ultrasound, magnetic resonance, functional scanning — each solved a limitation of the last. The unanticipated consequence is that imaging now finds abnormalities faster than medicine can determine which of them matter.",
  readingMinutes: 8,
  html: `
<h2 id="Rontgen">An accident in a darkened laboratory</h2>
<p>Wilhelm Röntgen was working with a Crookes tube in November 1895 when he noticed a screen coated in barium platinocyanide glowing across the room — although the tube was wrapped in black cardboard and no light could escape it.</p>
<p>Something was passing through the cardboard. He spent weeks establishing its properties, found it passed through wood, cloth and flesh but was stopped by denser material, and called it X for unknown.</p>
<p>The image of his wife Bertha's hand, showing the bones and her wedding ring, was made in December. Her reported reaction — that she had seen her death — is the first recorded response to seeing one's own skeleton, and it is a reasonable one.</p>
<p>Diffusion was astonishingly fast. The paper was published at the end of December 1895; within months X-ray equipment was being used clinically across Europe and America, and within a year it was being used on battlefields. There was no regulatory approval, no trial, and no patent — Röntgen refused to take one out, holding that the discovery belonged to humanity. He received the first Nobel Prize in Physics in 1901 and donated the money.</p>
<p>The harm took longer to recognise. Radiation burns appeared early and were attributed to other causes. Many pioneers developed cancers and required amputations; a monument in Hamburg lists the radiologists and technicians who died of their work. Shoe-fitting fluoroscopes remained in shops into the 1950s, letting children watch their own foot bones wiggle at considerable dose.</p>

<h2 id="CT">The problem with a flat picture</h2>
<p>A radiograph projects a three-dimensional body onto a two-dimensional plate, so everything along the beam's path is superimposed. Dense structures obscure what lies behind them, and soft tissues, being similar in density, are barely distinguishable at all. The brain, in particular, was effectively invisible.</p>
<p>Computed tomography solved this by taking many projections from different angles and reconstructing a cross-section mathematically. The underlying transform had been described by Johann Radon in 1917, decades before any machine could apply it.</p>
<p>Godfrey Hounsfield built the first working scanner at EMI — funded, according to the durable story, partly by the company's revenue from the Beatles — and the first patient was scanned in 1971. Allan Cormack had independently developed the theory. They shared the Nobel Prize in 1979.</p>
<p>The first scans took hours to acquire and days to reconstruct, and produced an 80 by 80 image. Modern scanners acquire a whole body in seconds.</p>
<p>CT's cost is radiation dose, and it is not trivial. A single abdominal CT delivers something on the order of a few hundred chest radiographs' worth. CT accounts for a small minority of imaging examinations and the majority of medical radiation exposure, and the population-level cancer risk from this is a genuine and actively studied concern — particularly in children, who are both more radiosensitive and have more years for a cancer to develop.</p>

<h2 id="Ultrasound">Sound, from submarine detection</h2>
<p>Ultrasound emerged from sonar. A transducer emits high-frequency sound pulses and listens for echoes returning from boundaries between tissues of different acoustic properties; the time delay gives depth, and the intensity gives the image.</p>
<p>Its advantages are specific and large. It uses no ionising radiation, which is why it is the imaging of choice in pregnancy. It is real-time, so motion can be watched directly — a beating heart, a moving fetus, a needle advancing toward a target. The equipment is comparatively cheap and can be brought to the patient, including in ambulances and in settings with no radiology department at all.</p>
<p>Doppler ultrasound measures the frequency shift from moving blood, giving flow direction and velocity without any injection, which made non-invasive assessment of the heart and vessels routine.</p>
<p>Its limitations are equally specific. Sound does not travel usefully through bone or gas, so the adult brain, the lungs and gas-filled bowel are largely inaccessible. And image quality depends heavily on the operator, since the person holding the probe is choosing the view — which makes ultrasound the least reproducible of the major modalities and the hardest to audit.</p>

<h2 id="MRI">Magnetic resonance</h2>
<p>MRI exploits the fact that hydrogen nuclei — abundant in water and fat, and therefore everywhere in the body — behave like tiny magnets. Placed in a strong magnetic field they align, a radio pulse knocks them out of alignment, and as they realign they emit a signal. The rate of realignment differs between tissues, and that difference is the contrast.</p>
<p>Gradient fields make the resonant frequency depend on position, so the signal can be located. Paul Lauterbur and Peter Mansfield developed the imaging methods and shared the 2003 Nobel Prize in Medicine.</p>
<p>The result is far better soft-tissue contrast than CT, with no ionising radiation, and the ability to weight images to emphasise different tissue properties — which is why brain, spinal cord, joint and soft-tissue imaging is dominated by MRI.</p>
<p>The costs are practical rather than biological. Scans take minutes rather than seconds, requiring the patient to stay still, which is difficult for children, for people in pain, and for anyone claustrophobic in a narrow bore. The machines are expensive to buy and to run, requiring liquid helium and heavy shielding. And the magnet is always on, which makes ferromagnetic objects genuinely dangerous — there have been deaths from oxygen cylinders and other items pulled into the bore.</p>
<p>Functional MRI, detecting changes in blood oxygenation as a proxy for neural activity, opened cognitive neuroscience as an experimental field. It also has well-known limits that are often glossed over: it measures blood flow rather than neural firing, at a resolution of millimetres and seconds, and the statistical analysis of the resulting data has had its own reproducibility problems — memorably illustrated by a study that found apparent brain activity in a dead salmon when the multiple-comparisons correction was omitted.</p>

<h2 id="Overdiagnosis">The problem success created</h2>
<p>Imaging now finds abnormalities at a rate that outstrips the ability to say which matter, and this has become one of the more serious unresolved issues in medicine.</p>
<p>Overdiagnosis means detecting a real abnormality that would never have caused symptoms or death. It is not a false positive — the finding is genuine — and it is harmful because it leads to treatment with real risks for a condition that posed none.</p>
<p>The clearest documented case is thyroid cancer in South Korea, where widespread ultrasound screening from the late 1990s increased diagnoses roughly fifteen-fold. Most patients had their thyroid removed, committing them to lifelong hormone replacement, with surgical complications in a proportion. Mortality from thyroid cancer did not change at all. The cancers were real and almost none of them were ever going to matter.</p>
<p>Autopsy studies find that a substantial fraction of adults dying of unrelated causes carry undetected thyroid or prostate cancers. These are common and mostly indolent, and finding them is not obviously a benefit.</p>
<p>Incidental findings — abnormalities discovered on a scan performed for an unrelated reason — occur in a large proportion of studies and generate follow-up imaging, biopsies and anxiety, most of which resolves in nothing.</p>
<p>The trade-off is genuine and is not an argument against imaging. Screening programmes that reduce mortality clearly exist; the difficulty is that the same sensitivity that catches lethal disease early also catches disease that would never have declared itself, and no imaging technique distinguishes them. That distinction is a biological question about tumour behaviour, and improving the camera does not answer it.</p>
`,
};
