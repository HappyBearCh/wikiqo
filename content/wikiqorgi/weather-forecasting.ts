import type { RewrittenArticle } from "./types";

export const weatherForecasting: RewrittenArticle = {
  slug: "weather-forecasting",
  title: "Weather forecasting: a solved equation that cannot be solved",
  sourceTitle: "Weather forecasting",
  dek: "The physics has been known since 1904. The problem is that the atmosphere amplifies any error in knowing where it started.",
  standfirst:
    "Forecasting is not guesswork dressed up in graphics. The equations governing the atmosphere are known, complete, and deterministic, and have been for over a century. What limits a forecast is not ignorance of the physics but the impossibility of measuring the starting state precisely enough — and the discovery, made by accident on a rounding error, that this limit is absolute rather than technological.",
  readingMinutes: 8,
  html: `
<h2 id="The_equations">The physics was never the problem</h2>
<p>Vilhelm Bjerknes set out the programme in 1904: the atmosphere obeys the laws of fluid dynamics and thermodynamics, those laws are known, so given the current state of the atmosphere and enough calculation, the future state follows. Weather prediction is an initial-value problem in physics, not a branch of augury.</p>
<p>The equations are the Navier–Stokes equations for a rotating fluid, plus conservation of mass and energy, plus the thermodynamics of water changing phase. Nothing in them is mysterious.</p>
<p>Lewis Fry Richardson tried to actually do it. Working partly as an ambulance driver in the First World War, he spent six weeks hand-computing a six-hour forecast for a single day in 1910, using observations already recorded. The answer he got was a pressure change of 145 millibars, which is not merely wrong but impossible — no such pressure change has ever occurred anywhere.</p>
<p>The failure was instructive rather than fatal. His method was sound; the initial data contained small inconsistencies that generated spurious high-speed waves, swamping the real signal. The fix, understood decades later, is to filter those modes out before integrating. Richardson also estimated what a real forecasting operation would require: a hall containing 64,000 human computers, coordinated by a conductor with coloured signal lights. He was off by a factor of several, and the concept — massive parallel computation — was exactly right.</p>

<h2 id="Lorenz">The accident that set the limit</h2>
<p>Edward Lorenz was running a simplified atmospheric model on a primitive computer in 1961 and wanted to repeat part of a run. Rather than start over, he typed in the numbers from a printout partway through.</p>
<p>The new run diverged completely from the original. He assumed a hardware fault, and the actual cause was that the printout showed three decimal places where the machine held six. A difference of one part in a thousand — far smaller than any measurement error in real meteorology — produced an entirely different weather pattern within simulated weeks.</p>
<p>This is sensitive dependence on initial conditions, and Lorenz's paper title gave it the popular name: whether the flap of a butterfly's wings in Brazil sets off a tornado in Texas.</p>
<p>The consequence is not that forecasting is futile. It is that forecast error grows exponentially rather than linearly, so halving the initial error does not double the useful forecast range — it extends it by a fixed increment. Doubling your observing network buys days, not multiples.</p>
<p>Current estimates put the theoretical predictability limit for day-to-day weather at somewhere around two weeks. That ceiling is a property of the atmosphere itself. No computer, no satellite network and no improvement in physics moves it, because the information needed is destroyed by the dynamics faster than it can be gathered.</p>

<h2 id="How_it_works_now">What a modern forecast actually is</h2>
<p>The globe is divided into a three-dimensional grid, currently with horizontal spacing of a few kilometres in the best global models and under a kilometre in regional ones, stacked through perhaps a hundred vertical levels. The equations are integrated forward in small time steps.</p>
<p>Anything smaller than a grid cell cannot be represented directly and has to be <em>parameterised</em> — approximated by a rule relating it to the resolved variables. Individual clouds, turbulence, and convection all fall below the grid scale, and these parameterisations are where most of the remaining model error lives. They are the least satisfying part of the enterprise and the hardest to improve, because they are empirical fits standing in for physics the model cannot afford to compute.</p>
<p>Data assimilation is the step nobody outside the field has heard of and is arguably the most important. Observations arrive irregularly — from satellites, weather balloons, aircraft, buoys, surface stations — and are far too sparse to specify the state of every grid cell. So the model's own short forecast is used as a first guess, and observations nudge it, weighted by how reliable each is. The analysis that starts each forecast is therefore mostly model output corrected by data, not data alone.</p>
<p>Satellite radiances dominate the observation count by a wide margin, and their assimilation from the late 1990s onward is the single largest reason forecasts in the southern hemisphere caught up with the northern, where surface observations had always been dense.</p>

<h2 id="Ensembles">Forecasting the uncertainty instead</h2>
<p>Since the initial state cannot be known exactly, running one forecast from one best guess throws away the most useful information available: how much that guess matters.</p>
<p>Ensemble forecasting runs the model many times — typically dozens of times — from slightly different starting states and with slightly perturbed model physics. Where the members stay close together, the atmosphere is in a predictable regime and confidence is high. Where they diverge rapidly, it is not.</p>
<p>This is where probability of precipitation comes from, and it is routinely misread. A 30 per cent chance of rain does not mean light rain, or rain over 30 per cent of the area. It means that in a set of forecasts of this kind, rain occurred at a given point about three times in ten.</p>
<p>The right test of a probabilistic forecast is calibration: over a long run, does it rain on about 30 per cent of the days a forecaster says 30 per cent? Major forecasting agencies are measurably well calibrated on this, which is a genuinely impressive result and one almost nobody credits them with, because a single 30 per cent day that turns out wet feels like a failure rather than a sample of one.</p>

<h2 id="How_good">How much better it has actually got</h2>
<p>Forecast skill has improved steadily and undramatically for decades, and the cumulative effect is large.</p>
<p>The standard measure is how far ahead a forecast retains useful skill. A five-day forecast today is about as accurate as a three-day forecast was in 1980, and a three-day forecast today is roughly as good as a one-day forecast then. Skill has advanced by roughly a day per decade — a pace so consistent it has been described as gaining one day every ten years.</p>
<p>Hurricane track forecasting has improved most of all. Average track errors have fallen by roughly two thirds over three decades, which is why evacuation zones can be drawn narrowly enough that people comply with them.</p>
<p>Intensity forecasting has improved far less, because storm strength depends on processes inside the eyewall that occur below the grid scale, and rapid intensification remains the hardest operational problem in the field.</p>
<p>The improvement is not from any single breakthrough. It is satellites, more computing power, better assimilation, finer grids and better parameterisation, each contributing a fraction, compounding over forty years.</p>

<h2 id="Machine_learning">The recent disruption</h2>
<p>Since around 2022, machine-learning models trained on decades of reanalysis data have begun matching and in places beating the leading physics-based systems on standard scores, at a tiny fraction of the computational cost — producing a ten-day forecast in under a minute on modest hardware, against hours on a supercomputer.</p>
<p>They do not solve the equations. They learn the mapping from one atmospheric state to the next from historical data, which raises the obvious question of what happens in conditions outside the training distribution — precisely the extreme events forecasts matter most for.</p>
<p>They also depend entirely on the physics-based systems they compete with, because they are trained on reanalysis datasets produced by those models and are initialised from operational analyses. A machine-learning forecast is not an independent alternative; it is a fast emulator sitting on top of the conventional infrastructure.</p>
<p>The current consensus among operational centres is that these are a genuine advance and a complement rather than a replacement, and several have put hybrid systems into production. What has not changed is the Lorenz limit, which applies to any method whatsoever, learned or computed.</p>

<h2 id="Why_it_matters">The unglamorous payoff</h2>
<p>Weather forecasting is among the highest-return public investments that exists, and almost none of its value is in knowing whether to take an umbrella.</p>
<p>Aviation routes around convection and turbulence. Shipping avoids heavy seas. Agriculture times planting, spraying and harvest. Electricity grids schedule generation, and increasingly forecast wind and solar output directly. Construction, retail and insurance all plan against it.</p>
<p>The clearest case is severe weather warning. Tornado warning lead times in the United States have risen from essentially zero before the 1950s to averaging over a dozen minutes, and deaths per event have fallen accordingly. Cyclone deaths in Bangladesh fell from hundreds of thousands in 1970 to a few thousand and then to dozens, through a combination of forecasting, warning dissemination and shelters — one of the largest reductions in disaster mortality anywhere, achieved mostly by telling people in time.</p>
`,
};
