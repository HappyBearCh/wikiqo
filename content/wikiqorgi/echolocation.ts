import type { RewrittenArticle } from "./types";

export const echolocation: RewrittenArticle = {
  slug: "echolocation",
  title: "Echolocation: seeing with sound, invented independently by bats and whales",
  sourceTitle: "Animal echolocation",
  dek: "A bat closing on a moth calls two hundred times a second. Dolphins solved the same problem underwater with different organs — and some of the same genetic changes.",
  standfirst:
    "An animal that shouts and listens for the echo can build a picture of its surroundings in total darkness. Bats and toothed whales evolved this independently, in air and in water, and both have refined it to a precision that rivals vision: bats catch insects in flight, and dolphins tell apart objects that differ only in what they are made of. The discovery that they do it at all took a century and a half, because the sounds involved are pitched too high for any human to hear.",
  readingMinutes: 7,
  published: "2026-10-02",
  html: `
<h2 id="Discovery">The sense nobody could hear</h2>
<p>In the 1790s the Italian naturalist Lazzaro Spallanzani found that blinded bats flew perfectly well, avoiding obstacles and catching food. When a colleague, Louis Jurine, plugged bats' ears instead, they collided with things. The conclusion seemed to be that bats navigated by hearing, but since they appeared to fly in silence, the idea struck most contemporaries as absurd, and it was set aside.</p>
<p>It was vindicated only in the late 1930s, when Donald Griffin, then a student at Harvard, brought bats to a physicist who had built a detector for ultrasound. The bats were emitting a stream of calls well above the upper limit of human hearing. With Robert Galambos, Griffin showed that bats rely on the echoes of these calls, and in 1944 he coined the word echolocation. Spallanzani's experiments had been right for more than a hundred and forty years.</p>

<h2 id="Bats">How a bat hunts with sound</h2>
<p>Most echolocating bats produce their calls in the larynx, at frequencies typically somewhere between about twenty and over a hundred kilohertz, depending on the species. High frequencies mean short wavelengths, which reflect well from small objects like insects; the price is that they fade quickly in air, so bat sonar is a short-range sense.</p>
<p>A hunting bat changes its calls as it closes in. While searching it calls perhaps ten times a second; once it detects prey, the calls shorten and speed up; and in the final approach they merge into a rapid sequence called the feeding buzz, reaching around two hundred calls per second, updating the bat's information on the target's position with each echo.</p>
<p>Calling loudly and listening for faint echoes is a problem: the outgoing call would deafen the bat to the returning echo. Bats contract tiny muscles in the middle ear during each call, damping their own hearing for an instant and relaxing in time to catch the echo.</p>
<p>Some species extract more than distance. Horseshoe bats emit long calls at a nearly constant frequency and listen for the minute pitch changes that a fluttering insect's wings impose on the echo, letting them pick out prey against cluttered vegetation. Because their own flight shifts the echo's pitch, they lower the frequency of their calls as they fly so that returning echoes land in the narrow band their ears are most sensitive to.</p>

<h2 id="Whales">The underwater version</h2>
<p>Toothed whales — dolphins, porpoises, sperm whales and their relatives — echolocate with an entirely different apparatus. They produce clicks not in the larynx but by forcing air past structures in the nasal passages, and the sound is focused into a beam by the melon, the fatty bulge on the forehead, whose varying composition acts as an acoustic lens.</p>
<p>Echoes are received through the lower jaw. Fat-filled channels in the jaw conduct sound to the middle ear, a route proposed by Kenneth Norris in the 1960s that explains why dolphins point their jaws at objects they are investigating.</p>
<p>Sound travels well in water, so whale sonar works over far greater distances than a bat's, and dolphins can discriminate objects of the same size and shape made of different materials, apparently from differences in how the echo rings. Sperm whales produce clicks that are among the loudest sounds made by any animal, used to locate squid hundreds of metres below in water where there is no light at all.</p>

<h2 id="Convergence">The same answer, twice</h2>
<p>Bats and toothed whales are only distantly related, and their last common ancestor did not echolocate. They arrived at the same solution separately, which is a textbook case of convergent evolution.</p>
<p>The convergence reaches down to the molecular level. Prestin, a motor protein in the outer hair cells of the inner ear that sharpens sensitivity to high frequencies, shows parallel amino acid changes in echolocating bats and in toothed whales that are not seen in their non-echolocating relatives. Two studies published in 2010 reported that when the protein's sequence is used to build a family tree, echolocating bats and dolphins group together, as if the shared function had overwritten the signal of their actual ancestry for that one gene.</p>
<p>Simpler forms of echolocation have evolved several more times. Oilbirds in South America and some cave swiftlets in Asia use audible clicks to navigate in the dark caves where they roost. Some shrews and tenrecs appear to use high-pitched calls to explore their surroundings at close range. A few fruit bats, which mostly navigate by sight, echolocate with clicks made by the tongue rather than the larynx.</p>

<h2 id="Arms_race">Moths that listen back, and humans who click</h2>
<p>Where there is sonar there is countermeasure. Many moths have simple ears tuned to the frequencies bats use, and react to an approaching call by diving, looping or dropping toward the ground. The physiologist Kenneth Roeder showed in the mid-twentieth century that these ears have only a handful of sensory cells and yet encode exactly what the moth needs: whether a bat is present and roughly how close.</p>
<p>Some tiger moths go further and answer back with ultrasonic clicks of their own. In many species the clicks advertise that the moth tastes bad. In at least one, studied in Arizona, the clicks are timed to the bat's final approach and appear to disrupt its ability to judge distance — jamming, in effect — and bats attacking clicking moths miss far more often.</p>
<p>Humans can echolocate too, with practice. Some blind people navigate using tongue clicks and the echoes they produce, judging the position, size and even texture of objects around them. Brain imaging of expert echolocators has found that processing the echoes recruits regions normally devoted to vision, a striking demonstration of how the brain assigns a task to whatever machinery is available rather than to a sense fixed in advance.</p>
`,
};
