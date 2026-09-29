---
title: "How CORSIA Works: The Mechanism End to End"
excerpt: "The complete mechanism in sequence — monitor fuel, report and verify, receive a growth factor, calculate the obligation, buy eligible units, cancel them, report the cancellation. What each step produces and who checks it."
section: "Foundations"
order: 3
image: "/images/corsia/corsia-compliance-cycle.svg"
---

CORSIA is a loop that runs every year and settles every three. This article follows the mechanism from a litre of fuel burned to a carbon credit cancelled in a registry, naming what each step produces and who checks it.

![The CORSIA compliance cycle](/images/corsia/corsia-compliance-cycle.svg)

## The Mechanism in One Paragraph

An operator monitors the fuel it burns on international flights and reports it annually. An accredited independent body verifies that report. The State passes the verified data to ICAO, which aggregates it across the whole sector to work out how much aviation has grown since 2019 and publishes a **growth factor**. Each operator applies that factor to its own covered emissions to get its **offsetting requirement** in tonnes. It then buys carbon credits meeting ICAO's criteria, cancels them in a registry, and reports the cancellation to its State. The obligation is discharged.

## Step 1: The Emissions Monitoring Plan

Before anything is measured, the operator submits an **Emissions Monitoring Plan** to its national authority for approval.

The plan specifies:

- Which **fuel use monitoring method** will be used, from the methods ICAO permits
- The data sources and IT systems the figures come from
- How flights are classified as in scope or out of scope
- Roles, responsibilities and internal quality controls
- How data gaps will be handled when they occur

The method choice is the consequential decision. Selecting a method your operational systems cannot actually feed is the most common and most expensive early mistake, because it surfaces at verification a year later when the reporting period is closed and the missing data cannot be recreated.

See [the Emissions Monitoring Plan](/knowledge-base/corsia-emissions-monitoring-plan/) and [fuel monitoring methods compared](/knowledge-base/corsia-fuel-monitoring-methods/).

## Step 2: Monitor Through the Year

Fuel use is tracked flight by flight, by aerodrome pair, using the approved method. Emissions are derived from fuel mass using standard conversion factors — **3.16 kg of CO2 per kg of jet fuel** for Jet-A and Jet-A1, and 3.10 for aviation gasoline.

In practice the difficulty is not the conversion. It is that fuel uplift dockets, flight operations records, aircraft systems and finance records rarely agree exactly, and reconciling them into one defensible dataset with documented rules is where most of the annual effort goes.

## Step 3: The Annual Emissions Report

For each calendar year, the operator compiles an **Annual Emissions Report** covering all international flights, with the in-scope subset identified.

## Step 4: Verification

An **accredited verification body** checks the report against the requirements of Annex 16 Volume IV. Verification is mandatory and substantive, not a formality.

Two constraints catch operators out:

- **Independence.** The body verifying your report cannot have advised on it. A consultant who wrote your monitoring plan cannot verify against it.
- **Capacity.** Accredited bodies are limited in number and demand clusters in the same window every year. Engaging late means engaging whoever remains.

![The CORSIA MRV cycle](/images/corsia/corsia-mrv-cycle.svg)

## Step 5: The State Reports to ICAO

The national authority receives the verified report and passes aggregated data to ICAO. This is what makes the sectoral calculation possible — ICAO needs the whole sector's emissions to work out how much it has grown.

## Step 6: ICAO Publishes the Growth Factor

ICAO compares total covered sector emissions for the year against the **2019 baseline** and publishes a **sectoral growth factor**: the proportion of covered emissions that must be offset.

From 2030 an **individual growth factor**, reflecting each operator's own growth, enters the calculation with progressively increasing weight.

![Sectoral and individual growth factors](/images/corsia/corsia-growth-factors.svg)

The counterintuitive consequence of a sectoral factor: **an operator whose own emissions fell can still owe offsets**, if the sector as a whole grew. Your emissions determine your share of the burden; the sector's growth determines its size.

See [baseline and growth factors](/knowledge-base/corsia-baseline-and-growth-factors/).

## Step 7: Calculate the Offsetting Requirement

The operator applies the growth factor to its **covered emissions** — international flights on route pairs where both States participate — and subtracts any reduction claimed for qualifying [CORSIA Eligible Fuels](/knowledge-base/corsia-eligible-fuels/).

Requirements accumulate annually and settle per **three-year compliance period**.

See [the requirement calculation](/knowledge-base/corsia-offsetting-requirement-calculation/) for worked examples.

## Step 8: Acquire Eligible Units

The operator obtains **CORSIA Eligible Emissions Units**, which must satisfy every element of the ICAO Emissions Unit Criteria.

![What makes a unit CORSIA eligible](/images/corsia/corsia-eeu-criteria.svg)

This is where the scheme's difficulty concentrates. The market for eligible units is small, illiquid, bilateral and priced well above the general voluntary market, because most credits lack the host-State corresponding adjustment that eligibility requires.

See [CORSIA eligible emissions units](/knowledge-base/corsia-eligible-emissions-units/) and [the market](/knowledge-base/corsia-market-structure/).

## Step 9: Cancel the Units

The operator **cancels** the units in the issuing programme's registry, designating CORSIA as the purpose.

> Purchase does not discharge the obligation. Holding units does not discharge the obligation. Cancellation does, and it is irreversible.

![The life of a CORSIA unit](/images/corsia/corsia-unit-lifecycle.svg)

## Step 10: Report the Cancellation

An **Emissions Unit Cancellation Report** goes to the national authority, identifying the units by serial number, programme, vintage and cancellation reference. This closes the loop — the authority has no visibility of registry activity unless it is reported.

## The Whole Loop as a Table

| Step | Output | Checked by |
|---|---|---|
| 1. Monitoring plan | Approved EMP | National authority |
| 2. Monitor fuel | Flight-level fuel and CO2 data | Internal quality control |
| 3. Annual report | Annual Emissions Report | — |
| 4. Verification | Verification statement | Accredited verification body |
| 5. State submission | Verified data to ICAO | National authority |
| 6. Growth factor | Published sectoral factor | ICAO Council |
| 7. Calculation | Offsetting requirement in tonnes | Operator, tested at audit |
| 8. Acquisition | Units held in a registry account | Operator due diligence |
| 9. Cancellation | Cancellation record and serials | Registry |
| 10. Cancellation report | Filed report and acknowledgement | National authority |

## Timing: Why the Three-Year Period Is Shorter Than It Sounds

Compliance periods run in three-year blocks, which sounds generous. Work backwards through the actual sequence and it compresses.

Emissions for a year are reported and verified the following spring. ICAO then publishes the growth factors, which is when the obligation becomes a firm number rather than an estimate. Obligations accumulate across the three years, and the total must be cancelled and reported by the deadline after the period closes.

The gap between "we know what we owe" and "we must have cancelled" is therefore short — and it lands at the same moment for every operator in the scheme. When the whole covered sector reaches its purchasing decision in the same window, thin supply does not stay affordable.

There is also an administrative tail: registry account opening takes weeks, inter-registry transfers are not instant, and cancellation and reporting each have processing time.

::: accordion The practical implication for planning
Treat the obligation as accruing annually even though it settles per period. Estimate it each year, acquire progressively, and reserve the final period for reconciliation rather than for the bulk of the purchase. Operators who defer the whole purchase to the deadline are making a bet on supply availability that the entire sector is making simultaneously.
:::

## Where to Go Next

- [CORSIA scope and thresholds](/knowledge-base/corsia-scope-and-thresholds/) — whether you are in
- [CORSIA MRV explained](/knowledge-base/corsia-mrv-explained/) — steps 1 to 5 in detail
- [Baseline and growth factors](/knowledge-base/corsia-baseline-and-growth-factors/) — step 6
- [The requirement calculation](/knowledge-base/corsia-offsetting-requirement-calculation/) — step 7
- [Registries and cancellation](/knowledge-base/corsia-registries-and-cancellation/) — steps 9 and 10

DSTechnoverse provides [CORSIA carbon credit services](/services/) covering the whole loop, from monitoring plan through to cancellation reporting. [Talk to our team](/contact/).
