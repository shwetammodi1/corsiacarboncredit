---
title: "The CORSIA Emissions Monitoring Plan: What It Must Contain"
excerpt: "The EMP is the document everything else depends on. What it must specify, how national authorities assess it, when it must be revised, and the method-selection mistake that surfaces a year later when it cannot be fixed."
section: "Monitoring, Reporting & Verification"
order: 10
image: "/images/corsia/corsia-mrv-cycle.svg"
---

The Emissions Monitoring Plan is the document everything else rests on. A defective plan is not a paperwork problem — it produces a year of data that cannot be verified, discovered at a point when the year is closed and the missing information cannot be recreated.

![The CORSIA MRV cycle](/images/corsia/corsia-mrv-cycle.svg)

## What the EMP Is

The EMP is a formal document submitted to your national authority describing exactly how you will monitor and report CO2 emissions from international flights. It must be **approved before monitoring begins**, and monitoring must then follow it.

It is a controlled document. Changing how you monitor without updating and re-approving the plan creates a mismatch between what you said you would do and what you did — which is precisely what verification tests.

## What It Must Contain

| Section | What it specifies |
|---|---|
| Operator identification | Legal entity, Air Operator Certificate, ICAO designator, State |
| Fleet | Aeroplane types, registrations, MTOM, ownership and lease status |
| Scope | How flights are classified international/domestic, in/out of scope |
| Monitoring method | Which fuel use method, and why it suits your data |
| Data sources | The specific systems and documents each figure comes from |
| Data flow | How data moves from source to report, including any transformations |
| Roles | Who is responsible for each step, with named functions |
| Quality control | Checks, reconciliation rules, review and sign-off |
| Data gaps | The procedure for filling gaps, defined in advance |
| CORSIA Eligible Fuels | If claimed, how the fuel and chain of custody are evidenced |
| Version control | Revision history and approval status |

## The Method Choice Is the Critical Decision

ICAO permits several fuel use monitoring methods. They are not equivalent in what they demand of your systems.

::: accordion The failure mode, stated plainly
A method is selected because it appears simplest, or because another operator uses it, or because it looked defensible in a proposal. The plan is approved. Monitoring runs for a year.

At verification, it emerges that the required data was never captured at the necessary granularity — the tank readings were not recorded at block times, or the uplift dockets do not reconcile to the flight list, or the system that was supposed to hold the figures does not retain them.

The reporting year is closed. The data cannot be recreated. The options at that point are all bad.
:::

::: accordion How to avoid it — test before you choose
Pull a sample month of real data before selecting. Try to produce the figures the method demands, from the systems you actually have, without manual reconstruction.

If you cannot do it for one month with the pressure off, you will not do it for twelve months under a deadline. Choose a method your data supports, even if it is less elegant.
:::

Full comparison in [fuel monitoring methods compared](/knowledge-base/corsia-fuel-monitoring-methods/).

## How Authorities Assess the Plan

National authorities review for completeness, internal consistency and plausibility. Typical areas of challenge:

- **Method justification.** Why this method, given your fleet and systems?
- **Data source specificity.** "Our fuel system" is not a data source. Name it.
- **Scope logic.** How exactly is a flight classified? Can it be applied consistently?
- **Gap procedures.** Defined in advance, or left to be decided later?
- **Roles.** Named functions with real authority, or a diagram?
- **Fleet completeness.** Does the aeroplane list match the operating certificate?

Approval practice varies by authority. Familiarity with the specific regulator's expectations has real value, which is one of the few genuinely local aspects of CORSIA work.

## When the Plan Must Be Revised

The EMP is not written once. It must be updated and re-approved when:

- A new aeroplane type joins the fleet
- The monitoring method changes
- A source system is replaced or materially reconfigured
- The operator's scope changes — new international routes, threshold crossing
- Errors or verification findings reveal the plan does not match practice
- Organisational change moves responsibility for a step

::: accordion The version-control trap
Verification tests your reporting against the plan **that was in force during the reporting period**. If the plan was revised mid-year, both versions matter, and you need to be able to show which applied when.

Operators who keep only the current version, overwriting as they go, cannot answer that question. Keep every version with its approval date.
:::

## Practical Advice

**Write it against reality, not aspiration.** A plan describing an idealised process you do not actually follow guarantees verification findings. Describe what you will genuinely do.

**Make the data flow explicit.** The most useful part of a good EMP is a clear statement of which system is authoritative for each field, and what happens when two disagree. This is also the part most often left vague.

**Define gap procedures before you need them.** A documented estimation method applied consistently is defensible. An ad hoc estimate invented after a gap appears is not.

**Name functions, not people.** Individuals leave. "Head of Flight Operations" survives turnover in a way that a personal name does not.

**Keep it maintainable.** A plan requiring heroic manual effort each year will degrade. One built around what your systems produce automatically will hold up.

## A Review Checklist

Before submitting, work through these:

1. Does every aeroplane on the operating certificate appear in the fleet list?
2. Is the classification logic for in-scope flights written so a new employee could apply it identically?
3. For each reported figure, is exactly one system named as authoritative?
4. Have you tested the chosen method against a real sample month?
5. Is the reconciliation rule for each known discrepancy written down?
6. Is the data gap procedure specific enough to apply without further judgement?
7. Are roles named as functions rather than individuals?
8. Is there a version history, and does it record approval dates?
9. If you claim CORSIA Eligible Fuels, is the chain-of-custody evidence path specified?
10. Could a verifier follow the document from source data to reported figure without asking you anything?

## Where to Go Next

- [Fuel monitoring methods compared](/knowledge-base/corsia-fuel-monitoring-methods/) — the method decision
- [CORSIA MRV explained](/knowledge-base/corsia-mrv-explained/) — the cycle the EMP starts
- [CORSIA scope and thresholds](/knowledge-base/corsia-scope-and-thresholds/) — defining the scope section
- [CORSIA in India](/knowledge-base/corsia-in-india/) — DGCA as approving authority

Requirements are set out in Annex 16 Volume IV, published by [ICAO](https://www.icao.int/environmental-protection/CORSIA/Pages/default.aspx).

DSTechnoverse develops and reviews Emissions Monitoring Plans, testing method choice against your actual data before submission. [Talk to our team](/contact/).
