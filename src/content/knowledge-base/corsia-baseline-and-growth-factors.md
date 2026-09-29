---
title: "CORSIA Baseline and Growth Factors: How the Sectoral and Individual Factors Work"
excerpt: "The 2019 baseline and the growth factor together decide what share of your covered emissions must be offset. How the sectoral factor is derived, how the individual factor is blended in from 2030, and how to forecast both."
section: "Obligations & Calculation"
order: 6
image: "/images/corsia/corsia-growth-factors.svg"
---

A finance director at an airline that flew less this year than last is often surprised to find the CORSIA obligation has still gone up. The explanation lies in two numbers the airline does not control: the sector's 2019 baseline and the growth factor ICAO derives from it. Once those are understood, most of the results that look wrong turn out to be the scheme working as designed.

![Chart comparing sectoral and individual growth factors](/images/corsia/corsia-growth-factors.svg)

## Two inputs, one percentage

The mechanism reduces to a percentage applied to an operator's covered emissions. Two inputs set that percentage:

- **The baseline:** the emissions level above which the sector's growth is offset.
- **The growth factor:** how far the sector (and, from 2030, the operator) has moved above that level, expressed as a share of current emissions.

The baseline is a single **sector-wide** figure. In the early phases no operator has a baseline of its own; the sector does.

## How the baseline came to be 2019

Resolution A39-3 first defined the baseline as the **mean of 2019 and 2020** international aviation CO2. When the pandemic cut 2020 traffic, that mean would have pulled the reference far below any plausible future level of flying, and every later obligation would have been inflated for reasons that had nothing to do with climate policy. In 2020 the ICAO Council **replaced it with 2019 emissions alone**.

We point clients to that episode whenever a forecast assumes today's parameters will hold to 2035. They have been changed once already.

## Deriving the sectoral factor

The sectoral growth factor measures how much of the sector's covered emissions in a year sits above the baseline:

> Sectoral growth factor = (sector covered emissions in year Y − 2019 baseline) ÷ sector covered emissions in year Y

Note the denominator is the current year, not the baseline. **Illustrative numbers:** if the baseline is 100 units and the sector emits 108 in year Y, the factor is 8 ÷ 108, about 7.4%, not 8%. At small growth rates the difference is minor, but it matters when you are checking a published figure against your own estimate.

Every operator then offsets that percentage of its own covered emissions.

### Why a shrinking operator can still owe

The sector's growth sets the **size** of the burden; your emissions set your **share** of it. If the sector's factor is 8% and your own emissions fell 3%, you still offset 8%, only of a smaller total. That was intentional. Spreading sector growth across everyone, instead of charging whoever happened to be expanding, was the compromise that got the scheme agreed.

### Why 2021 cost almost nothing

Sector emissions in 2021 were still well below 2019, so there was no growth and the **2021 sectoral factor was zero**. Operators that used the pilot to build their data and registry processes had a free rehearsal. Those that did not are now learning with money on the line.

## Why the factor arrives late

ICAO does not estimate the sectoral factor independently. It builds it from every in-scope operator's verified Annual Emissions Report, passed up by national authorities and aggregated. Two things follow:

- Operators that owe nothing still have to report, because their data feeds the factor everyone else pays on. The reporting chain is set out in [CORSIA MRV explained](/knowledge-base/corsia-mrv-explained/).
- The factor for a year cannot be published until the whole sector has reported and been verified, so an operator's obligation only becomes firm well after the year it relates to.

## From 2030: blending in individual growth

In the second phase, each operator's own growth against the baseline enters the calculation with increasing weight:

| Years | Sectoral weight | Individual weight |
|---|---|---|
| 2021–2029 | 100% | 0% |
| 2030–2032 | 85% | 15% |
| 2033–2035 | 70% | 30% |

> Blended factor = (sectoral weight × sectoral factor) + (individual weight × individual factor)

An operator growing faster than the sector gets a blended factor above the sectoral one, and a slower grower gets one below it. The aim is to end the free ride that a purely sectoral method gives fast growers. The effect is that network and fleet expansion carries a CORSIA cost that climbs after 2030.

This is the second-phase feature with the biggest consequences for fast-growing markets, and India is one of the most prominent. See [CORSIA in India](/knowledge-base/corsia-in-india/).

## Worked example: two operators, same sector

All figures are illustrative. Assume the sectoral factor is 5% throughout, and each operator has 150,000 tonnes of covered emissions. Operator A's individual factor is 15%; Operator B's is 1%.

**Up to 2029**, both offset 5%: 150,000 × 5% = **7,500 t** each.

**2030–2032:**
- A: 0.85 × 5% + 0.15 × 15% = 4.25% + 2.25% = 6.5%, so **9,750 t**.
- B: 0.85 × 5% + 0.15 × 1% = 4.25% + 0.15% = 4.4%, so **6,600 t**.

**2033–2035:**
- A: 0.70 × 5% + 0.30 × 15% = 3.5% + 4.5% = 8.0%, so **12,000 t**.
- B: 0.70 × 5% + 0.30 × 1% = 3.5% + 0.3% = 3.8%, so **5,700 t**.

Same sector, same covered emissions. By the last compliance period the fast grower owes more than twice what the slow grower does, and the gap opens in two steps as the weighting shifts.

## Building your own forecast

The factor comes too late to budget against, so it has to be estimated:

1. Estimate sector emissions for the year from published industry traffic and fuel data.
2. Compare that with the 2019 baseline to get an approximate sectoral factor.
3. Express it as a **low, central and high** range, with assumptions written down.
4. From 2030, add your own growth using the weighting schedule above.
5. Rerun it each year as data firms up and ICAO confirms the factors.

A single figure in a board paper will be read as a promise and will be wrong. A range with its assumptions attached holds up.

## Errors we correct most often

| Error | What is actually the case |
|---|---|
| Applying the factor to everything the airline emits | It applies to **covered** emissions only: international flights on route pairs where both States participate. Using total emissions can overstate the obligation several times. See [scope and thresholds](/knowledge-base/corsia-scope-and-thresholds/). |
| Reading the sectoral factor as the airline's own growth | It describes the sector. Your trajectory is irrelevant before 2030 and only partly relevant after. |
| Assuming each operator has its own baseline | In the early phases the baseline is sector-wide. Individual growth only enters from 2030, and then as a blend. |
| Projecting last year's obligation forward into 2027 with a percentage uplift | Compulsory second-phase participation changes **covered emissions**, which is separate from the growth factor. The two effects multiply, so route coverage has to be modelled on the actual network. |

The full sequence from factor to tonnes owed, including fuel deductions, is in [the offsetting requirement calculation](/knowledge-base/corsia-offsetting-requirement-calculation/). Published factors are available from [ICAO](https://www.icao.int/environmental-protection/CORSIA/Pages/default.aspx).

If you want a factor range built around your own fleet plan and route network rather than sector averages, [send us the details](/contact/) and we will set one up with you.
