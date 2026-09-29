---
title: "Calculating a CORSIA Offsetting Requirement Before ICAO Does"
excerpt: "Covered emissions, the growth factor and the eligible fuels deduction: how the CORSIA offsetting number is built, how to forecast it as a range, and the filtering errors that inflate or hide it."
date: "2026-08-21"
topic: "CORSIA Fundamentals"
tags: ["CORSIA offsetting requirement","CORSIA calculation","sectoral growth factor","individual growth factor","CORSIA eligible fuels","aviation emissions calculation","CORSIA compliance period"]
image: "/images/corsia/corsia-compliance-cycle.svg"
---

Sooner or later the finance team asks the CORSIA lead a simple question: how many units will we need, and what will they cost? "We'll know when ICAO publishes the factors" is an honest answer and a poor one. By the time the official figure arrives, every other operator is shopping in the same window and the chance to buy gradually has gone.

So the number has to be modelled well before it is confirmed. This article builds it up one term at a time, then shows how to turn it into a forecast you can budget against.

![Diagram of the CORSIA compliance cycle from monitoring to cancellation](/images/corsia/corsia-compliance-cycle.svg)

## The formula, before the detail

For each year:

> **Requirement = covered emissions × growth factor − CORSIA Eligible Fuels reduction**

Three terms, each of which hides more than it shows. We will take them in the order that has the biggest effect on the answer.

## Covered emissions: most of the answer sits here

The figure you start from is not your total CO2. It is what remains after several filters, and each one can remove a large slice.

| Filter | What drops out |
|---|---|
| International only | Every domestic flight. For an Indian carrier with a big domestic network, this can be most of the total |
| Aircraft size | Aeroplanes with a maximum certificated take-off mass of 5,700 kg or less |
| Excluded flight types | Humanitarian, medical and firefighting flights; State aircraft, including military |
| Route pairs | Any route where the origin State or the destination State is not participating that year. These are still monitored and reported, but owe nothing |
| Operator entity | Emissions belonging to a different legal entity in the group |

The route-pair filter causes the most trouble in forecasts, because participation changes. A route that is free this year may carry an obligation next year, and the mandatory second phase from 2027 widens coverage considerably. [CORSIA scope and thresholds](/knowledge-base/corsia-scope-and-thresholds/) covers the rules in full.

The entity filter is quieter but costly to get wrong. Wet leases, code shares, franchise arrangements and groups holding several operating certificates all raise the question of which company is the operator. Put emissions in the wrong entity and the correction is not a quick one.

## The growth factor: a number you do not control

The growth factor turns covered emissions into an obligation. It reflects how far aviation has grown compared with the baseline.

**Baseline.** International aviation CO2 in 2019. The original design used the average of 2019 and 2020, but 2020 traffic collapsed with the pandemic, which would have set the line artificially low and inflated every obligation. The ICAO Council reset it to 2019 alone.

**Sectoral factor.** In the early phases, obligations are worked out entirely from growth across all covered aviation. Your own trajectory does not enter into it. The consequence surprises people: **an operator whose emissions fell can still owe offsets** if the sector as a whole grew. Your emissions decide your share; the sector decides how big the bill is.

The 2021 sectoral factor was zero, because sector emissions that year were still below 2019. It turned positive as traffic came back.

**Individual factor.** From 2030 the weighting moves progressively towards each operator's own growth against the baseline. An airline expanding faster than the sector then carries more of its own growth. For carriers with large fleet orders, this links today's aircraft deliveries to a future CORSIA cost, and that link belongs in the fleet plan. [Baseline and growth factors](/knowledge-base/corsia-baseline-and-growth-factors/) explains the weighting.

## The eligible fuels deduction: paperwork, not chemistry

Qualifying sustainable aviation fuel and lower-carbon aviation fuel reduce the requirement by their lifecycle saving against conventional jet fuel. The conditions are administrative:

1. The fuel meets the CORSIA sustainability criteria.
2. It is certified under an approved sustainability certification scheme.
3. Chain of custody is documented from production to uplift.

Miss any of these and the fuel may still be better for the climate, but it earns nothing against the requirement. [How SAF reduces your offsetting requirement](/knowledge-base/saf-and-corsia-offsetting-reduction/) goes through the claim.

## Periods, not years

The calculation is annual. Settlement is not. Obligations build up across a three-year compliance period, and the 2024–2026 period is settled as one block: units are cancelled and reported by the deadline after the period closes.

That gives you freedom to spread purchases across the period, which helps with cash and price risk. It also means every operator faces the same deadline, and in a market where eligible supply is tight, arriving at that deadline without units is expensive.

There is no carry-forward. Cancelling more than you owe does not create a credit for the next period. A precise calculation saves real money.

## A worked example: two scenarios for one airline

All figures here are illustrative and do not describe any real operator.

A carrier based in Hyderabad emits 1,200,000 tonnes of CO2 in a year.

| Step | Current participation | If far-end States join |
|---|---|---|
| Total emissions | 1,200,000 t | 1,200,000 t |
| Less domestic | −700,000 t | −700,000 t |
| International | 500,000 t | 500,000 t |
| Less routes to non-participating States | −150,000 t | 0 t |
| Covered emissions | 350,000 t | 500,000 t |
| × growth factor (illustrative 5%) | 17,500 t | 25,000 t |
| Less certified eligible fuel saving | −500 t | −500 t |
| **Net requirement** | **17,000 t** | **24,500 t** |

Three things stand out.

- **Filtering did the heavy lifting.** A budget built on total emissions would have started from a number more than three times too big.
- **Small factor, large base.** If the factor moved from 5% to 7%, the current-participation requirement would rise from 17,000 to 24,000 tonnes (350,000 × 0.07 = 24,500, less 500). A two-point change you have no say in adds about 40%.
- **Coverage is network-specific.** The second column is not a generic uplift. It depends on which of *your* destinations join. A carrier flying mostly to States already in the scheme sees little change; one with heavy traffic to States outside it sees a jump.

## Turning it into a forecast

A forecast worth budgeting against usually follows this order:

1. Keep the covered emissions base as a live figure through the year, drawn from verified reporting, not rebuilt each spring.
2. Run two coverage cases on your actual network: participation as it stands, and a second-phase case with mandatory participation from 2027. The gap between them is often the largest number in the model.
3. Estimate the sectoral factor from published traffic and emissions data. Use a range.
4. From 2030, add individual growth using your own fleet and network plan and the weighting schedule.
5. Model the fuels deduction from fuel you can actually buy and document, not from a target.
6. Present low, central and high cases, with the assumptions written next to them. A single figure gets treated as a promise.
7. Rerun it every year. Participation shifts, factors get confirmed, networks change, and the Council adjusts parameters from time to time.

## Mistakes that distort the number

- Budgeting from total emissions instead of covered emissions.
- Assuming this year's participation list will hold. It has changed before, and changes structurally in 2027.
- Applying a flat percentage for the second phase instead of modelling your routes.
- Reporting under the wrong entity in a group structure.
- Counting SAF you cannot certify.
- Reading the sectoral factor as a measure of your own growth.

## Keep a trail someone else can follow

A verifier, an auditor or a successor will one day need to reproduce your figure from the file alone. Keep the covered emissions workings with their route logic, the participation list as it stood on the date you relied on it, the factors used and where they came from, the fuels claim and its certificates, and the final result. Save a copy of the participation list itself; a link to a page that has since been updated proves nothing.

::: accordion Can we owe offsets if our emissions went down?
Yes. While the sectoral factor applies, the obligation reflects the sector's growth applied to your emissions, not your own trend.
:::

::: accordion How reliable is a forecast before the factors are confirmed?
Good on the emissions base, much weaker on the factor. That is why the output should be a range.
:::

::: accordion Who is accountable for the figure?
The operator. An adviser can prepare it and a verifier will test the emissions behind it, but sign-off stays with you.
:::

If you would like a first cut at your own range, try the [CORSIA calculator](/calculator/) with your network data, then bring the result to our desk for a proper model.
