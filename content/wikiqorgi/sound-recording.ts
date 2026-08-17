import type { RewrittenArticle } from "./types";

export const soundRecording: RewrittenArticle = {
  slug: "sound-recording",
  title: "Sound recording: the first technology that let the dead speak",
  sourceTitle: "Sound recording and reproduction",
  dek: "Everything before 1877 is silent. There is no recording of any voice from the whole of human history until then, and then there is every voice.",
  standfirst:
    "Writing preserved what people said; nothing preserved how they said it. The break is absolute and it happens in a single decade — before it, no sound made by any person who ever lived survives, and after it, essentially all of them do. The device that did this was mechanically trivial, was invented for a purpose it turned out to be bad at, and its inventor spent years arguing that music was not what it was for.",
  readingMinutes: 7,
  html: `
<h2 id="The_mechanism">A needle and a sheet of tinfoil</h2>
<p>Sound is a pressure wave. A diaphragm placed in its path vibrates with it, and a stylus attached to the diaphragm can scratch that vibration into a moving surface. Run the stylus back along the groove and the diaphragm is driven through the same motion, pushing the air the same way. That is the entire principle, and it requires no electricity, no amplification and no understanding of acoustics beyond the observation that vibration can be traced.</p>
<p>Édouard-Léon Scott de Martinville built a device tracing sound onto soot-blackened paper in 1857, two decades earlier, and never attempted playback — his purpose was to study the shape of sound visually, as one might study a spectrum. His tracings sat in French archives until researchers scanned them in 2008 and computed the audio, which means the earliest recorded human voice was recovered a century and a half after it was recorded by a man who did not know he had recorded it.</p>
<p>Edison's phonograph of 1877 added playback, using tinfoil wrapped around a grooved cylinder. It worked immediately, which surprised even him, and made him internationally famous within months.</p>
<p>His own list of anticipated uses put dictation first, then talking books for the blind, then the teaching of elocution, then preserving the last words of dying family members. Music appears well down the list, and he maintained for years that the machine was an office instrument being misused for entertainment.</p>

<h2 id="Format_war">Cylinders, discs, and the first format war</h2>
<p>Emile Berliner's gramophone of 1887 recorded laterally onto a flat disc rather than vertically into a cylinder, and the difference decided the industry.</p>
<p>Cylinders had better sound, because the groove passes the stylus at constant speed throughout. On a disc the inner grooves move more slowly past the needle than the outer ones, so quality degrades toward the centre — an inherent defect the format never fixed.</p>
<p>Discs won on everything else. They could be pressed from a master in enormous numbers, where cylinders were difficult to duplicate. They stacked flat, shipped cheaply and stored on a shelf. And they could hold a label, which turned a recording into a branded product.</p>
<p>The pattern — the technically inferior format winning on manufacturing and distribution economics — recurs so persistently in media history that it is nearly a rule.</p>
<p>The three-to-four-minute limit of a ten-inch disc at 78 revolutions per minute then imposed itself on the music. Popular song settled into that length because that was what fitted, classical works were cut or split across sides, and the standard duration of a pop single is still, a century later, the running time of a shellac disc.</p>

<h2 id="Electrical">Microphones change what can be recorded</h2>
<p>Until 1925 recording was purely acoustic: performers crowded around a horn and played into it as loudly as they could. Quiet instruments were inaudible and were substituted — banjos replaced guitars because they were louder, and the tuba stood in for the double bass in early jazz recordings, which is why some of that music sounds as it does.</p>
<p>The singer had to project hard enough to move a diaphragm across a room, so the recorded voice of that era is a trained, loud, declamatory instrument.</p>
<p>Electrical recording replaced the horn with a microphone, an amplifier and an electromagnetic cutter. Frequency range widened dramatically, and quiet sounds became recordable.</p>
<p>The artistic consequence was crooning. A singer close to a sensitive microphone could use a conversational, intimate voice that would not carry to the back of a small room, and it would reproduce at full volume. Bing Crosby's style is not a change in taste so much as a change in equipment, and the intimacy of most subsequent popular singing depends on a device that makes whispering audible to millions.</p>

<h2 id="Tape">Tape, and the end of recording as documentation</h2>
<p>Magnetic tape was developed in Germany and encountered by Allied engineers in 1945, and it introduced the one capability discs never had: it could be cut and rejoined.</p>
<p>Before tape, a recording was a performance — a continuous take, kept or discarded whole. After tape, a recording could be assembled from fragments of many takes, and the released version need never have occurred. The best passages of a dozen attempts could be spliced into one, and the listener has no way to detect the joins.</p>
<p>Multitrack recording extended this from time to layers. Parts could be recorded separately, at different times, in different places, by musicians who never met, and combined afterwards with independent control over each. Les Paul's early experiments led to studio practice in which the record is composed in the studio rather than captured there.</p>
<p>This is the deepest change the technology made. A recording stopped being evidence that something happened and became an artefact in its own right, a construction with no original — which is why the question of what a live performance of such a record even means has been an awkward one ever since.</p>

<h2 id="Digital">Sampling, and what it does not lose</h2>
<p>Digital recording measures the waveform's amplitude many thousands of times a second and stores the numbers. The compact disc uses 44,100 samples per second at sixteen bits.</p>
<p>The number is not arbitrary. The sampling theorem shows that a sample rate above twice the highest frequency present captures the waveform completely — not approximately, completely — and human hearing tops out around 20 kHz. This is the point most often misunderstood in arguments about digital audio: the reconstructed wave is not a staircase approximation, and the smooth curve is recovered exactly, provided the input was band-limited.</p>
<p>Real objections lie elsewhere — in the quality of conversion hardware, in the filters at the band limit, and above all in what happened to the material before it was digitised. The loudness war, in which recordings were compressed to ever-higher average levels to sound louder than competitors on radio and playlists, destroyed dynamic range in a great deal of music from the 1990s onward, and no format can restore what was removed at mastering.</p>
<p>Lossy compression is a separate matter and works by discarding what psychoacoustic models predict a listener will not perceive — sounds masked by louder neighbours, frequencies at the edge of audibility. It is genuinely a loss and generally an inaudible one at reasonable bitrates.</p>
<p>The economic effect of small files was larger than the acoustic one. Recorded music detached from physical objects, distribution costs collapsed, and revenue reorganised around streaming, with the result that recordings — for a century the product, with concerts as promotion — became promotion, and concerts became the product. Which is roughly where the industry stood in 1876.</p>
`,
};
