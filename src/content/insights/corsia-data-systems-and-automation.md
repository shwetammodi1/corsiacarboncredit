---
title: "CORSIA Data Systems: Building a Pipeline That Survives Verification"
excerpt: "Most CORSIA effort is spent reconciling fuel and flight data that disagrees. How to design a pipeline with documented rules, a real audit trail and the right split between automation and human judgement."
date: "2026-08-30"
topic: "Airline Compliance"
tags: ["CORSIA data systems","emissions data pipeline","fuel data reconciliation","CORSIA automation","audit trail","CORSIA consultant India","MRV data"]
image: "/images/corsia-consultant/corsia-data-architecture.svg"
---

Ask any operator who has been through a CORSIA verification where the time went, and the answer is reconciliation. Not the emissions arithmetic, which is a multiplication. The work is in getting three systems that disagree about how much fuel went into an aircraft to produce one defensible number.

![A CORSIA data pipeline that survives verification](/images/corsia-consultant/corsia-data-architecture.svg)

## Why the Sources Disagree

This surprises people new to it, and it is worth being clear that disagreement is normal rather than a symptom of a broken process.

**The fuel uplift docket** records what the bowser delivered, measured by the supplier's meter, at the moment of fuelling.

**The flight operations record** captures what the crew recorded, often from cockpit indications, at block times.

**The finance system** holds what was invoiced, which may be batched, may include or exclude certain charges, and may be adjusted after the fact.

**Aircraft-derived data** measures tank quantity by its own sensors with their own tolerances.

Each is measuring a slightly different thing at a slightly different moment with a different instrument. They will not agree exactly, and a process that assumes they should is a process that will spend every month investigating normal variation.

The question verification asks is not "why do they differ" but **"what is your rule for resolving the difference, and did you apply it consistently"**.

## The Layered Design

A pipeline that holds up has distinct layers, each with one job.

**Source extraction.** Scheduled pulls from each system. Automated rather than manual export — manual export is where missed months and transcription errors originate, and it makes the process dependent on one person remembering.

**Raw landing.** Store what arrived, unmodified. Never edit at source. If a value later proves wrong, you need to be able to show what was originally received.

**Validation.** Range checks, completeness counts, format checks, duplicate detection. Output an exception list rather than silently passing or silently dropping.

**Reconciliation.** Apply the documented rules where sources disagree. Record which rule fired and what the inputs were.

**Scope classification.** International or domestic, aircraft mass threshold, exempt flight type, covered route pair. Rule-based decisions applied identically every time.

**Calculation.** Fuel mass to CO2 by the approved factor and method.

**Audit store.** Every reported value traceable to the source records that produced it, with the rules applied recorded alongside.

**Reporting.** The Annual Emissions Report and, later, the cancellation report, generated from the same dataset rather than assembled separately.

That last point matters more than it looks. Where the report is assembled separately from the operational data, the two drift, and the drift is invisible until someone reconciles them under time pressure.

## Writing the Reconciliation Rules

This is the single highest-value document in a CORSIA data process, and it is usually the one that does not exist.

A rule needs four parts:

| Part | Example |
|---|---|
| The condition | Uplift docket and flight ops fuel differ by more than 2% |
| The authoritative source | Uplift docket, as the metered measurement |
| The threshold for escalation | Difference above 10% routes to manual review |
| What is recorded | Both values, the rule applied, the resulting figure |

Write one for every discrepancy type you actually encounter. Six to ten rules typically covers the great majority of cases, and the residue goes to review.

The test of a good rule set: **a new analyst, given the raw data and the rules, produces the same reported figure as the person who normally does it.** If they do not, the rules are incomplete and the real logic is in someone's head.

## What to Automate and What Not To

**Automate fully:** extraction, validation checks, scope classification, the emissions calculation, exception list generation, and the audit trail. These are rule-based and benefit from being applied identically every time.

**Automate the flag, not the decision:** discrepancies above the escalation threshold, unusual values, stuck readings, cross-source failures. The system identifies them; a person decides.

**Do not automate:** exclusion of unusual values, judgement about whether a large fuel figure is an error or a genuine long sector, and anything requiring knowledge of what was happening operationally that day.

The failure mode at each extreme is instructive. Too little automation and the process is manual, slow, inconsistent between months, and dependent on individuals. Too much and genuine data is silently removed by a rule nobody remembers writing — which is worse, because it is invisible.

## The Audit Trail

Verification will pick a reported figure and ask you to show where it came from. Then it will pick a source record and ask you to show it reached the report.

Both directions must work. The second is the one that catches completeness problems, because a flight missing from the report will never be sampled from the report.

Practically, this means storing per reported value: the source records used, the rules applied, any manual decision with its reason and who made it, and a timestamp. It sounds heavy and is not — it is a few extra columns and a decision log.

The alternative is reconstructing the reasoning from memory two years later, which does not work.

## Monthly Rather Than Annual

The operational habit that matters most.

Running the pipeline monthly surfaces problems while they are fixable. An outstation whose dockets never reach the system is a nuisance in February and a permanent data gap in December. A misconfigured extraction is a two-hour fix if caught early and a year of missing records if not.

It also spreads effort. Twelve routine exercises are far easier to resource than one large reconstruction under deadline pressure, and the quality is better because nobody is rushing.

## Tooling: Proportionate to Scale

**A small operator** can run this on scheduled spreadsheet imports with documented rules and a decision log. It is not elegant and it works, provided the rules are written down and the raw files are retained.

**A mid-sized operator** benefits from a database with scripted transformations. The gain is repeatability and the audit trail, not sophistication.

**A large operator** will want a proper data platform, but the design principles are identical. Scale changes the tooling, not the structure.

Resist buying a compliance platform before the rules are written. A tool cannot resolve a discrepancy you have not decided how to resolve — it will simply implement whatever it defaults to, and you will own that default without having chosen it.

## Integrating With Other Reporting

Most operators of any size report emissions in more than one place, and the same underlying data feeds all of them.

**CORSIA** needs international flights on covered route pairs, under an approved monitoring method, with its own scope rules.

**EU ETS or UK ETS**, where applicable, needs a different geographic scope, a separate monitoring plan approved by a different authority, and verification under a different accreditation framework.

**Corporate sustainability reporting** needs total operational emissions, usually including domestic, and often on a financial-year rather than calendar-year basis.

**Customer requests** — corporate charter clients and freight forwarders reporting their own scope 3 — need per-flight or per-shipment figures.

Four outputs, one dataset. The efficient design is a single authoritative emissions layer with scheme-specific filtering applied downstream, so every report derives from the same numbers.

The inefficient and common alternative is four separate exercises, each reconciling the source data independently. Beyond the wasted effort, it produces figures that occasionally disagree — and a discrepancy between your own reports is exactly what a verifier or an auditor will ask about first.

Build the shared layer once. It is usually the highest-return piece of work available to a multi-scheme operator, and it tends to go unowned because it sits between functions rather than inside one.

## Common Failures

| Failure | Consequence |
|---|---|
| Manual export from source systems | Missed months, transcription errors, key-person risk |
| Editing at source | Cannot show what was originally received |
| Undocumented reconciliation | Findings at verification; inconsistent months |
| No exception list | Problems pass silently |
| Report assembled separately from the data | Two versions that drift |
| Annual rather than monthly running | Problems found when unfixable |
| Over-automated exclusions | Real data removed invisibly |
| No decision log | Reasoning irrecoverable |

## Frequently Asked Questions

**How much does a CORSIA data pipeline cost to build?** It depends far more on how many source systems and how bad their agreement is than on emissions volume. A single-source operator is straightforward; four systems with no reconciliation history is a project.

**Can we use our existing fuel management system?** Usually as a source, rarely as the whole pipeline. Fuel systems are built for cost control, not for emissions reporting scope rules and audit trails.

**Do we need to automate at all?** No, but you do need documented rules, a decision log and a retained raw record. Automation makes those cheaper to sustain, it does not replace them.

**Who should own the pipeline?** Someone who understands both the data and the operation. A purely technical owner will implement rules that make no operational sense; a purely operational owner will not maintain the audit trail.

**What if our sources disagree by a lot?** Investigate the cause before writing a rule. A consistent 15% gap is a measurement or process problem, not something to paper over with a resolution rule.

**How long should we retain the data?** Plan for ten years. Verification and audit reach back further than people expect, and retention periods are set nationally.

**What is the first thing to build?** The reconciliation rules, before any tooling. Everything else implements them. See [the CORSIA gap analysis](/insights/corsia-gap-analysis-service/).

---

**Need CORSIA compliance that survives verification?** DSTechnoverse builds monitoring plans, data pipelines and reporting processes for Indian operators, and supports project developers through eligibility and placement. See our [CORSIA carbon credit services](/services/). We are based in **Indore, Madhya Pradesh** and work across India.

[Apply as a CORSIA buyer or seller](https://carboncredit.dstechnoverse.com/)

[Talk to our carbon markets team](/contact/) about your position.
