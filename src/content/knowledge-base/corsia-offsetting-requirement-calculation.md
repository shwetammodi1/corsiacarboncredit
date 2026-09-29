---
title: "Calculating the CORSIA Offsetting Requirement, Step by Step"
excerpt: "Covered emissions times the growth factor, less any eligible-fuel reduction: a worked calculation for one year and a full compliance period, how to forecast it before ICAO confirms the factor, and the records a verifier will want."
section: "Obligations & Calculation"
order: 7
image: "/images/corsia/corsia-compliance-cycle.svg"
---

The CORSIA obligation is one line of arithmetic. Nearly every error we find in client models comes from what was fed into that line, not from the multiplication. This page works through the calculation with an example, then shows how to forecast it early enough to buy units on your own timetable rather than the market's.

![Diagram of the CORSIA compliance cycle](/images/corsia/corsia-compliance-cycle.svg)

## The equation

> **Offsetting requirement = covered emissions × growth factor − CORSIA Eligible Fuels reduction**

Three terms. The first is where most of the judgement lies.

## One year, worked through

The figures below are illustrative, for an imaginary Indian carrier with a large domestic network and a growing international one.

1. **Start with everything.** Verified CO2 across all flights: **600,000 t**.
2. **Remove domestic flying.** CORSIA does not cover it. Less 250,000 t, leaving **350,000 t** international.
3. **Remove routes where the far-end State does not participate.** Less 90,000 t. Covered emissions: **260,000 t**.
4. **Apply the growth factor.** At an illustrative 7%: 260,000 × 7% = **18,200 t** gross.
5. **Deduct the eligible-fuel claim.** A certified lifecycle saving of 700 t leaves **17,500 t** owed for the year.

What that shows:

- **Filtering matters more than the factor.** The carrier emitted 600,000 t but was charged on 260,000 t. A budget built on total emissions would be about 2.3 times too high.
- **The factor is a lever you do not hold.** If it were 10% instead of 7%, the gross figure rises by 260,000 × 3% = 7,800 t, roughly 43% more, with nothing changed at the airline.
- **2027 can move the base.** If compulsory second-phase participation brings the 90,000 t of uncovered routes into scope, covered emissions become 350,000 t and the same 7% gives 24,500 t gross instead of 18,200 t.

## Term one in detail: covered emissions

Covered emissions are what remains after these filters:

- international flights only;
- aeroplanes above 5,700 kg maximum certificated take-off mass (lighter aeroplanes and all rotorcraft drop out);
- humanitarian, medical, firefighting and State aircraft flights taken out;
- only route pairs where both States participate that year;
- flights assigned to the correct operating entity, taking account of wet leases, code shares and multiple certificates within a group.

CO2 comes from fuel mass using fixed factors:

| Fuel | kg CO2 per kg of fuel |
|---|---|
| Jet-A, Jet-A1 | 3.16 |
| Jet-B | 3.10 |
| AvGas | 3.10 |

The route-pair filter causes the most forecasting errors because participation changes, and changes sharply in 2027. The filters are set out in full in [scope and thresholds](/knowledge-base/corsia-scope-and-thresholds/).

## Term two: the growth factor

Until 2029 it is the sectoral factor alone. From 2030 it blends sectoral and individual growth on a rising schedule. See [baseline and growth factors](/knowledge-base/corsia-baseline-and-growth-factors/) for the derivation and the weights.

## Term three: the eligible-fuel reduction

Qualifying sustainable aviation fuel and lower carbon aviation fuel cut the requirement directly, in line with their lifecycle saving against conventional jet fuel. A claim needs all three of these:

- the fuel meets the **CORSIA Eligible Fuels sustainability criteria**;
- it holds certification from an **approved Sustainability Certification Scheme**;
- a documented **chain of custody** runs from production to uplift.

Without the paperwork, the fuel still helps the climate but reduces nothing under CORSIA. Details are in [CORSIA Eligible Fuels](/knowledge-base/corsia-eligible-fuels/).

## A full compliance period

Obligations are worked out each year and settled once per **three-year compliance period**. Continuing the illustrative carrier:

| Year | Covered emissions (t) | Growth factor | Obligation (t) |
|---|---|---|---|
| 2024 | 240,000 | 4.0% | 9,600 |
| 2025 | 260,000 | 7.0% | 18,200 |
| 2026 | 275,000 | 7.5% | 20,625 |
| **Period** | | | **48,425** |

(Fuel deductions are left out of this table for simplicity.) All 48,425 t must be cancelled and reported by the deadline after the period closes.

Over-cancelling earns nothing. **There is no carry-forward**, so any surplus cancelled is simply gone. An accurate calculation is worth real money for that reason alone.

## Forecasting before ICAO publishes

Waiting for the confirmed figure means buying late, alongside everyone else. A usable forecast is built in six moves:

1. **Keep covered emissions as a running number** during the year, drawn from your monitoring data, instead of rebuilding it each spring.
2. **Run two coverage scenarios** on your real network: participation as it stands, and compulsory second-phase participation from 2027. The gap between them is often the largest number in the model.
3. **Estimate the growth factor as a range** (low, central, high) from published industry traffic and emissions data, with assumptions stated.
4. **Add individual growth from 2030** using your fleet and network plans, so expansion decisions show their CORSIA cost while they are still being made.
5. **Base the fuel deduction on fuel you can actually buy** with certification and chain of custody you can actually produce. A sustainability target is not a supply contract.
6. **Rerun it every year.** Participation shifts, factors are confirmed, networks change and the ICAO Council revises parameters from time to time.

## The file a verifier will ask for

Someone will check this calculation, possibly years later and possibly without anyone from the original team in the room. It must be reproducible from records alone. Keep:

- how covered emissions were derived, with the route-filtering logic;
- **a saved copy of the participation list as at the date you relied on it** (the online list changes, so a link proves nothing about what it said then);
- the growth factors used and where they came from;
- the eligible-fuel claim and its certificates;
- the final figure.

## Mistakes and what they cost

- **Total instead of covered emissions:** the obligation is overstated, often by a multiple.
- **Assuming today's participation holds:** the 2027 step is missed.
- **A flat percentage uplift for the second phase:** wrong for nearly every network.
- **Reading the sectoral factor as your own growth:** a year of falling emissions gets mistaken for a zero obligation.
- **Counting on SAF claims that are not secured:** the deduction is overstated and the budget comes up short.
- **Reporting under the wrong group entity:** emissions land in the wrong place and are slow to correct.

For Indian carriers the domestic filter is usually the biggest single adjustment, so check that step first in any model you inherit. When the tonnage is settled, the next question is cost, covered in [CORSIA credit pricing](/knowledge-base/corsia-credit-pricing/).

Our [CORSIA calculator](/calculator/) gives a first estimate from your own figures. For a documented model you can hand to a verifier, [speak to the desk](/contact/).
