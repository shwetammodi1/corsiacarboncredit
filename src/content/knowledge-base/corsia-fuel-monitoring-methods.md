---
title: "CORSIA Fuel Use Monitoring Methods Compared"
excerpt: "The five fuel use monitoring methods plus the CERT tool for small emitters — what data each requires, where each fails in practice, and how to choose one your systems can actually sustain."
section: "Monitoring, Reporting & Verification"
order: 11
image: "/images/corsia/corsia-fuel-monitoring-methods.svg"
---

ICAO permits several ways to determine the fuel burned on a flight. They differ sharply in the data they demand, and choosing one your systems cannot sustain is the most expensive early mistake in CORSIA compliance.

![Fuel use monitoring methods compared](/images/corsia/corsia-fuel-monitoring-methods.svg)

## The Underlying Problem

You need fuel consumed **per flight**. What operators actually record is some combination of fuel uplifted into the tanks, tank quantity readings at various moments, and block times.

Each method is a different way of getting from what you record to what you need. None is inherently correct — the right one is the one your systems can feed reliably, every flight, all year.

## The Methods

| Method | Determines fuel burn from | Needs per-flight tank data | Typical data burden |
|---|---|---|---|
| Fuel Uplift | Uplift plus change in remaining fuel | Yes | Moderate |
| Block-off / Block-on | Tank quantity at block-off minus block-on | Yes | High |
| Block-on / Block-off | Tank at block-on, then next block-off, plus uplift | Yes | High |
| Fuel Allocation with Block Hour | Block hours × a determined burn rate | No | Low |
| Fuel Uplift with Density | Uplift volume converted using measured density | Yes | Moderate |
| CERT | ICAO estimation tool | No | Lowest |

### Fuel Uplift

Fuel burn is derived from the quantity uplifted before the flight, adjusted for the change in fuel remaining on board between the start of one flight and the start of the next.

**Works when** uplift dockets are reliable, consistently captured at every station, and can be matched to individual flights.

**Fails when** stations record uplift inconsistently, dockets are captured for billing rather than operations, or aircraft reposition without a matching record.

### Block-off / Block-on

Fuel burn is the difference between tank quantity at block-off and at block-on.

**Works when** aircraft systems record and retain tank quantities at those exact moments and the data is extractable.

**Fails when** the recording depends on crew action, or the data exists in the aircraft but is not systematically downloaded and stored.

### Block-on / Block-off

A variant using tank quantity at block-on, the subsequent uplift, and tank quantity at the next block-off.

**Works when** you have reliable tank readings and uplift, and the aircraft's ground time is well captured.

**Fails** in the same ways, with the added complication of linking consecutive flights correctly across overnight stops and maintenance.

### Fuel Allocation with Block Hour

Fuel burn is estimated from block hours multiplied by a determined fuel burn rate.

**Works when** per-flight tank data is genuinely unavailable and block times are reliable.

**Trade-off:** much lower data burden, but the burn rate must be determined and justified, and the method is less precise. Precision matters because it is your own emissions being estimated.

### Fuel Uplift with Density

Uplift measured by volume is converted to mass using measured or standard density.

**Works when** your suppliers provide volume rather than mass, which is common in some regions.

**Watch:** density assumptions must be documented. Using a standard density where actual density is available and materially different attracts findings.

### CERT — the ICAO CO2 Estimation and Reporting Tool

CERT estimates emissions from flight data without requiring fuel monitoring.

::: accordion Who may use CERT, and the trap in it
CERT is available to **small emitters** — operators below defined thresholds — and to fill data gaps within an otherwise monitored dataset.

The trap is growth. An operator using CERT because it sat below the threshold, and then crossing it, must move to a full monitoring method. If no fuel monitoring infrastructure was ever built, that transition happens under time pressure with no historical data to validate against.

Operators near the threshold should build monitoring capability before they need it, even while CERT remains available.
:::

## How to Choose

::: accordion Step 1 — inventory what you actually record
Not what your systems are capable of recording. What is genuinely captured, for every flight, at every station, and retained. Ask for a real extract rather than a system specification.
:::

::: accordion Step 2 — test against a sample month
Take one month of real operations and try to produce the figures each candidate method requires. Note every gap, every manual step, every station that behaves differently.

A method that needs manual intervention for 5% of flights in a test month will need it for thousands of flights a year.
:::

::: accordion Step 3 — weigh precision against sustainability
A more precise method you cannot sustain is worse than a less precise one you can. Verification tests whether you did what your plan says, not whether you chose the most elegant approach.
:::

::: accordion Step 4 — consider the fleet mix
Different aeroplane types may have very different data availability. The plan can address this, but the complexity is real and needs to be designed rather than discovered.
:::

::: accordion Step 5 — document the justification
The plan must explain why the method suits your operation. Write that justification from the test results, not from general reasoning. It is also the document that defends the choice years later.
:::

## Changing Method Later

Possible, but disruptive. It requires the monitoring plan to be revised and re-approved, and it creates a discontinuity in your data series that verification will examine.

Comparability across years matters — for your own trend analysis, for the growth factor inputs, and for explaining a step change in reported emissions that reflects a method change rather than an operational one.

The practical conclusion: **choosing correctly the first time is much cheaper than correcting later.**

## Common Mistakes

| Mistake | Consequence |
|---|---|
| Choosing on paper without testing data | Failure surfaces at verification, year unrecoverable |
| Copying another operator's method | Their systems are not your systems |
| Ignoring station-level inconsistency | Works at hub stations, fails at outstations |
| Assuming aircraft data is retained | Recorded on board is not the same as stored and extractable |
| Undocumented density assumptions | Findings on fuel volume conversion |
| Staying on CERT past the threshold | Forced transition with no monitoring history |
| Not planning for fleet changes | New type arrives, method does not fit it |

## Where to Go Next

- [The Emissions Monitoring Plan](/knowledge-base/corsia-emissions-monitoring-plan/) — where the method is declared
- [CORSIA MRV explained](/knowledge-base/corsia-mrv-explained/) — the cycle the method feeds
- [The requirement calculation](/knowledge-base/corsia-offsetting-requirement-calculation/) — what the data becomes
- [CORSIA scope and thresholds](/knowledge-base/corsia-scope-and-thresholds/) — the 10,000 tonne test

Method definitions are in Annex 16 Volume IV; CERT is published by [ICAO](https://www.icao.int/environmental-protection/CORSIA/Pages/default.aspx).

DSTechnoverse tests method choice against a real sample of your operational data before the plan is written — the step that prevents the expensive failure. [Talk to our team](/contact/).
