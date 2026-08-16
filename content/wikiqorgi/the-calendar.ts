import type { RewrittenArticle } from "./types";

export const theCalendar: RewrittenArticle = {
  slug: "the-calendar",
  title: "The calendar: a thousand years of arithmetic to fix a rounding error",
  sourceTitle: "Calendar",
  dek: "The year is not a whole number of days, the month is not a fraction of the year, and every calendar in history is a compromise about which to betray.",
  standfirst:
    "Calendars look like conventions and are really engineering. The Earth takes about 365.2422 days to orbit the Sun, and the Moon takes about 29.53 days to cycle its phases. Neither divides evenly into anything, and no arrangement can honour the day, the month and the year simultaneously. Every calendar ever built is a decision about which of the three to sacrifice.",
  readingMinutes: 7,
  html: `
<h2 id="Three_clocks_that_do_not_agree">Three clocks that do not agree</h2>
<p>Three natural cycles are available. The day is the Earth's rotation. The month is the Moon's phase cycle, about 29.53 days. The year is the orbit, about 365.2422 days.</p>
<p>Twelve lunar months come to roughly 354 days, eleven short of a solar year. So a purely lunar calendar drifts against the seasons by eleven days annually, and its months migrate through the whole year in about 33 years. The Islamic calendar is lunar and accepts this deliberately: Ramadan moves through the seasons, which is a feature of a calendar designed for religious observance rather than agriculture.</p>
<p>A purely solar calendar keeps the seasons and abandons any relationship between months and the Moon — which is what ours does, and why the word month has become detached from what it names.</p>
<p>Lunisolar calendars try to keep both by inserting an occasional extra month. The Hebrew calendar adds one in seven years out of nineteen, following a cycle the Babylonians identified: 19 solar years is almost exactly 235 lunar months, to within about two hours. The Chinese calendar uses a comparable arrangement. These are the most sophisticated of the three approaches and the most complicated to compute.</p>

<h2 id="The_Roman_mess">The Roman mess</h2>
<p>The early Roman calendar was a lunisolar system requiring an extra month inserted at the discretion of the pontifices — priests who were also politicians, and who could extend a year in which their allies held office or shorten one in which their opponents did. By the first century BC the calendar had drifted so far that it was months out of step with the seasons.</p>
<p>Julius Caesar, advised by the Alexandrian astronomer Sosigenes, abandoned the lunar element entirely in 46 BC. The Julian calendar fixed the year at 365 days with a leap day every fourth year, giving an average of 365.25 days. To realign it with the seasons, the transitional year was extended to 445 days — the last year of confusion.</p>
<p>The fossils of the older system are still in the names. September, October, November and December mean seventh, eighth, ninth and tenth, and sit in the ninth through twelfth positions, because the year once began in March. July and August were renamed for Julius and Augustus. February is short because it was the last month of the old year and absorbed the leftovers.</p>

<h2 id="Eleven_minutes_a_year">Eleven minutes a year</h2>
<p>The Julian year of 365.25 days is too long by about 11 minutes. That is a small error and it accumulates: roughly one day every 128 years, three days every four centuries.</p>
<p>By the sixteenth century the discrepancy had reached ten days, and it mattered institutionally because the date of Easter is calculated from the spring equinox, which was drifting away from its assigned date of 21 March. A calendar used to schedule the central festival of Christianity was visibly wrong.</p>
<p>The reform promulgated by Pope Gregory XIII in 1582 made two changes. It dropped ten days — 4 October was followed directly by 15 October — and it refined the leap rule: a leap year every four years, except centuries, except centuries divisible by 400. So 1700, 1800 and 1900 were not leap years; 1600 and 2000 were.</p>
<p>The resulting average of 365.2425 days is off by about 26 seconds a year, accumulating to one day in roughly 3,300 years. That is good enough that no further correction has been agreed, and the question of what to do about it has been comfortably deferred.</p>

<h2 id="A_reform_nobody_wanted_to_accept">A reform nobody wanted to accept</h2>
<p>Adoption was slow, and the delay was almost entirely religious. Catholic countries switched immediately. Protestant states declined to accept a papal decree and held out for over a century; Orthodox countries longer still.</p>
<p>Britain and its colonies changed in 1752, by which point eleven days had to be dropped. The popular story of riots demanding "give us our eleven days" appears to be largely a misreading of an election satire by Hogarth, though there was genuine grievance over rent and wages for a shortened month. The change also moved the start of the legal year from 25 March to 1 January, which is why the British tax year still begins on 6 April — 25 March plus the accumulated adjustment.</p>
<p>Russia switched in 1918, which is why the October Revolution took place in November. Greece held out until 1923. Several Orthodox churches still compute their calendar on the Julian reckoning, which is why Orthodox Christmas falls on 7 January.</p>
<p>The transition leaves a genuine trap for anyone reading historical records: a date in a seventeenth-century English document and one in a French document of the same week are ten days apart, and both are correct within their own system.</p>

<h2 id="The_week_has_no_astronomy_in_it">The week has no astronomy in it</h2>
<p>The week is the one unit corresponding to nothing in the sky. Seven days divides neither the month nor the year, which is why the same date falls on different weekdays in different years and why the calendar cannot be made to repeat.</p>
<p>Its origins are Babylonian, associated with the seven visible moving bodies — Sun, Moon, and the five naked-eye planets — and the naming survives intact across languages: Saturday for Saturn, Sunday and Monday obviously, and Tuesday through Friday carrying Germanic gods substituted for their Roman counterparts, which is why French <em>mardi</em> (Mars) and English Tuesday (Tiw) name the same planet through different pantheons.</p>
<p>Attempts to rationalise it have consistently failed. The French Republican calendar imposed ten-day weeks and renamed everything; it lasted twelve years and was resented mainly because it reduced rest days from one in seven to one in ten. The Soviet Union tried five- and six-day weeks in the 1930s, staggering the workforce so factories never stopped, and abandoned it because families could not arrange to be free at the same time. Proposals for a perpetual calendar in which dates always fall on the same weekday require an intercalary day belonging to no week, which breaks the seven-day cycle — and the religious objection to that has defeated every such scheme.</p>

<h2 id="Leap_seconds_and_the_next_argument">Leap seconds and the next argument</h2>
<p>The problem has not gone away, it has moved to a finer scale. Since 1967 the second has been defined by atomic transitions rather than by the Earth's rotation, and the Earth is not a reliable clock — tidal friction slows it gradually, while shifts in the planet's interior and mass distribution alter it irregularly.</p>
<p>Leap seconds have been inserted to keep atomic time aligned with the Earth's actual rotation, 27 of them since 1972. They are also a serious nuisance for computing systems, which mostly assume every minute has 60 seconds, and several notable outages have been traced to them.</p>
<p>In 2022 the international body responsible voted to abandon leap seconds by 2035, letting atomic time and solar time drift apart and dealing with the accumulation later. The Earth has recently been rotating slightly faster than expected, which raises the previously unheard-of prospect of a negative leap second — removing a second rather than adding one — an operation no software has ever been tested against.</p>
<p>Which is the whole history in miniature: an irrational ratio, a workable approximation, and a correction deferred to whoever is around when it becomes urgent.</p>
`,
};
