---
title: "CORSIA Offsetting Requirement: How the Calculation Works"
excerpt: "The full calculation with worked examples — filtering to covered emissions, applying the growth factor, subtracting the CORSIA Eligible Fuels reduction, and building a forecast before ICAO confirms the numbers."
section: "Obligations & Calculation"
order: 7
image: "/images/corsia/corsia-compliance-cycle.svg"
---

An operator that waits for ICAO to hand it a number has already lost its options. By the time the figure is confirmed, the compliance period is closing and the whole sector is buying in the same window. Modelling the requirement in advance is what makes a purchasing strategy possible.

![The CORSIA compliance cycle](/images/corsia/corsia-compliance-cycle.svg)

## The Formula

> **Offsetting requirement = (covered emissions × applicable growth factor) − CORSIA Eligible Fuels reduction**

Each of the three terms carries more complexity than it looks.

## Term 1: Covered Emissions

Filtering happens in stages, and each stage removes tonnes.

| Filter | Effect |
|---|---|
| International flights only | Domestic emissions removed entirely |
| Aeroplanes above 5,700 kg MTOM | Lighter aeroplanes and all rotorcraft removed |
| Exclude exempt flight types | Humanitarian, medical, firefighting, State aircraft |
| Covered route pairs only | Both origin and destination States must participate |
| Correct operator entity | Wet leases, code shares and group certificates allocated properly |

Emissions are derived from fuel mass:

| Fuel | Factor |
|---|---|
| Jet-A and Jet-A1 | 3.16 kg CO2 per kg fuel |
| Jet-B | 3.10 kg CO2 per kg fuel |
| Aviation gasoline (AvGas) | 3.10 kg CO2 per kg fuel |

The route-pair filter is where forecasts most often go wrong, because State participation changes — and changes structurally in 2027. See [CORSIA scope and thresholds](/knowledge-base/corsia-scope-and-thresholds/).

## Term 2: The Growth Factor

Sectoral only through 2029, then blended with individual growth from 2030. Covered in full in [baseline and growth factors](/knowledge-base/corsia-baseline-and-growth-factors/).

## Term 3: The CORSIA Eligible Fuels Reduction

Qualifying sustainable aviation fuel and lower carbon aviation fuel reduce the requirement directly, reflecting the lifecycle saving against conventional jet fuel.

The claim requires all three of:

- The fuel meets the **CORSIA Eligible Fuels sustainability criteria**
- It is certified under an **approved Sustainability Certification Scheme**
- The **chain of custody** is documented from production through to uplift

Burning qualifying fuel without the certification and documentation produces an environmental benefit and no CORSIA claim. See [CORSIA Eligible Fuels](/knowledge-base/corsia-eligible-fuels/).

## Worked Example

Illustrative figures, chosen to show the mechanics.

An operator reports **900,000 tonnes** of CO2 across all flights in a year.

| Step | Tonnes | Note |
|---|---|---|
| Total emissions, all flights | 900,000 | Starting point |
| Less domestic | −400,000 | Outside CORSIA entirely |
| International subtotal | 500,000 | |
| Less non-covered route pairs | −180,000 | Far-end State not participating |
| **Covered emissions** | **320,000** | The base the factor applies to |
| × sectoral growth factor 6% | 19,200 | Gross obligation |
| Less CEF reduction | −1,200 | Certified lifecycle saving |
| **Net obligation** | **18,000 t** | For that year |

Three things this example shows:

**The covered-emissions filter does most of the work.** Total emissions were 900,000 tonnes; the figure driving the obligation was 320,000. An operator budgeting from total emissions overstates by nearly threefold.

**Small factor changes move large numbers.** Moving the growth factor from 6% to 9% adds 9,600 tonnes — a 50% increase in the obligation from a three-point move in a variable the operator does not control.

**Second-phase coverage is the step change.** If mandatory participation from 2027 brings the previously uncovered 180,000 tonnes into scope, covered emissions rise to 500,000 and the same 6% factor yields 30,000 tonnes rather than 19,200. That is why generic percentage uplifts fail and network-level modelling is necessary.

## Accumulating Across a Compliance Period

Requirements are calculated annually and settled per **three-year compliance period**.

| Year | Covered emissions | Factor | Annual obligation |
|---|---|---|---|
| 2024 | 300,000 | 5.0% | 15,000 t |
| 2025 | 320,000 | 6.0% | 19,200 t |
| 2026 | 340,000 | 6.5% | 22,100 t |
| **Period total** | | | **56,300 t** |

The full 56,300 tonnes must be cancelled and reported by the deadline following the period's close.

**There is no carry-forward.** Cancelling more than you owe does not build a balance against a future period — the surplus is simply spent. Precision in this calculation therefore has direct financial value.

## Building a Forecast

::: accordion Step 1 — establish a live covered-emissions base
From your verified reporting, isolate international flights on covered route pairs. Maintain this as a running figure through the year rather than reconstructing it each spring. Operators who rebuild it annually spend the same effort repeatedly and introduce inconsistency between years.
:::

::: accordion Step 2 — model route coverage scenarios
Run two scenarios against your actual network: current participation, and second-phase mandatory participation from 2027. The delta between them is frequently the largest single number in the whole forecast, and it is entirely specific to where you fly.
:::

::: accordion Step 3 — estimate the growth factor as a range
Published industry traffic and emissions data supports a reasonable estimate ahead of ICAO confirmation. Produce low, central and high cases with the assumptions written down.
:::

::: accordion Step 4 — layer in individual growth from 2030
Using your own fleet and network plans against the weighting schedule. This connects growth decisions to their CORSIA cost while those decisions are still being made.
:::

::: accordion Step 5 — model the fuels reduction realistically
Base it on fuel you can actually obtain with certification and chain of custody you can actually produce — not on a sustainability target. An aspirational SAF assumption understates the obligation and the budget.
:::

::: accordion Step 6 — re-run annually
Participation changes, factors are confirmed, your network changes, and the ICAO Council periodically adjusts parameters. A forecast built once and left alone will drift.
:::

## Documenting the Calculation

Whatever you calculate will be examined — by a verifier, possibly an auditor, quite likely someone who was not present when the decisions were made. It must be reproducible from your records alone.

Retain: the covered-emissions derivation with its route filtering logic, the **participation list captured as at the date relied on**, the growth factors applied and their source, the fuels claim with supporting certification, and the resulting figure.

Capture rather than link. The published participation list changes, and a URL is not evidence of what it said on the day.

## Common Errors

| Error | Consequence |
|---|---|
| Using total instead of covered emissions | Obligation overstated, often by multiples |
| Assuming current participation persists | Understates the 2027 step change |
| Applying a generic uplift for the second phase | Wrong for almost every network |
| Treating the sectoral factor as your growth | Misreads a shrinking year as zero obligation |
| Assuming SAF claims will be available | Overstates the reduction, understates the budget |
| Reporting under the wrong group entity | Misallocated emissions, painful to correct |

## Where to Go Next

- [Baseline and growth factors](/knowledge-base/corsia-baseline-and-growth-factors/) — term 2 in detail
- [CORSIA Eligible Fuels](/knowledge-base/corsia-eligible-fuels/) — term 3 in detail
- [Compliance periods and deadlines](/knowledge-base/corsia-compliance-periods-and-deadlines/) — when it settles
- [CORSIA credit pricing](/knowledge-base/corsia-credit-pricing/) — turning tonnes into a budget

DSTechnoverse builds documented, reproducible requirement models for operators. [Talk to our carbon markets team](/contact/) or [apply as a CORSIA buyer or seller](https://carboncredit.dstechnoverse.com/).
