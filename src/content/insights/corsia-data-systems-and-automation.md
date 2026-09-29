---
title: "Designing a CORSIA Emissions Data Pipeline Verifiers Can Trace"
excerpt: "The emissions sum is one multiplication; the effort goes into turning disagreeing fuel records into one figure you can defend. A layer-by-layer pipeline design, how to write reconciliation rules, and what to automate."
date: "2026-08-30"
topic: "Airline Compliance"
tags: ["CORSIA data systems","emissions data pipeline","fuel data reconciliation","CORSIA automation","audit trail","CORSIA consultant India","MRV data"]
image: "/images/corsia-consultant/corsia-data-architecture.svg"
---

A verifier sitting with your compliance team will do two things with your data. First, they pick a number from the Annual Emissions Report and ask you to show the source records behind it. Then they reverse the direction: they pick a fuel docket from, say, a Kathmandu turnaround and ask you to show where it ended up in the report.

Most operators prepare for the first test. The second is the one that catches them, because a flight that never reached the report can never be sampled from the report. A data pipeline for CORSIA exists to pass both tests without anyone having to remember anything.

## Four records, four different truths

Before designing anything, accept that your fuel sources will not agree, and that this is normal.

- **The uplift docket** shows what the bowser delivered, by the supplier's meter, at fuelling.
- **The flight operations record** shows what the crew noted, often from cockpit indications, at block times.
- **The finance system** shows what was invoiced. It may be batched, may include or leave out certain charges, and may be adjusted later.
- **Aircraft-derived data** shows tank quantity from the aircraft's own sensors, with their own tolerances.

Each measures something slightly different, at a slightly different moment, with a different instrument. A process that expects them to match will spend every month chasing ordinary variation. The verifier's question is not why they differ. It is what rule you use to settle the difference, and whether you applied it every time.

![Layered data pipeline from source systems through validation and reconciliation to reporting](/images/corsia-consultant/corsia-data-architecture.svg)

## The pipeline, layer by layer

Give each layer one job and keep them separate:

| Layer | Its single job | What goes wrong without it |
|---|---|---|
| Extraction | Scheduled, automated pulls from each source system | Manual exports miss months, introduce typing errors and depend on one person remembering |
| Raw landing | Keep exactly what arrived, untouched | You cannot show what you originally received once a value is corrected |
| Validation | Range, completeness, format and duplicate checks, producing an exception list | Problems either pass silently or vanish silently |
| Reconciliation | Apply written rules where sources disagree, logging which rule fired and on what inputs | Each month is settled differently |
| Scope classification | International or domestic, aircraft mass threshold, exempt flight type, covered route pair | Flights sorted by whoever happens to be looking |
| Calculation | Fuel mass to CO2 using the approved method and factor | Rarely the problem, if the earlier layers are right |
| Audit store | Link every reported value to its source records and the rules used | Nobody can answer the verifier's trace questions |
| Reporting | Produce the Annual Emissions Report, and later the cancellation report, from the same dataset | A separately assembled report drifts from the data |

The last row deserves emphasis. When the report is built in a spreadsheet apart from the operational data, the two drift apart, and nobody sees the drift until someone has to reconcile them against a deadline.

## Reconciliation rules: the document that usually is not there

If you write only one thing, write this. Each rule has four parts: the condition that triggers it, the source treated as authoritative, the point at which a person must review, and what gets recorded.

**Worked example (illustrative figures).** Suppose your rule says: where the uplift docket and flight operations fuel differ by more than 2%, use the docket as the metered measurement; where they differ by more than 10%, send the record for manual review; in every case, store both values, the rule applied and the result.

- A sector shows 8,000 kg on the docket and 8,250 kg in flight operations. The gap is 250 kg, about 3.1% of the docket figure.
- That is above 2% and below 10%, so the rule fires automatically and the docket figure stands.
- At 3.16 kg CO2 per kg of Jet-A1, the sector is recorded as 25,280 kg CO2, with both source values and the rule reference kept alongside.
- Had flight operations shown 9,000 kg, the 12.5% gap would have gone to a person, who records the decision and the reason.

Write a rule for every kind of discrepancy you actually meet. Six to ten usually covers most cases; the rest go to review.

How to know the rules are complete: give a new analyst the raw data and the rule set. If they arrive at the same reported figure as your usual preparer, the rules are complete. If not, part of the real logic is still in someone's head.

One caution. If two sources are consistently 15% apart, do not write a rule to paper over it. Find the cause first; a steady gap that size points to a measurement or process fault.

## Where the machine decides and where a person does

**Let the system do it:** extraction, validation checks, scope classification, the CO2 calculation, the exception list and the audit trail. These are rules, and rules are best applied identically.

**Let the system raise a flag, and a person decide:** gaps above the review threshold, odd values, readings that do not change, records that fail cross-checks.

**Keep it human:** excluding unusual values, judging whether a large fuel figure is an error or a genuinely long sector, and anything that needs knowledge of what happened operationally that day.

Too little automation gives you a slow, person-dependent process that differs month to month. Too much gives you something worse: real data quietly removed by a rule nobody remembers writing.

## The audit trail in practice

For each reported value, store the source records used, the rules applied, any manual decision with its reason, who made it, and when. That is a few extra columns and a decision log, not a large system. The alternative is trying to reconstruct your reasoning from memory two years later, which fails.

Plan to keep the data for ten years. Verification and audit look further back than people expect, and retention periods are set nationally.

## Run it monthly

The single habit that most improves a CORSIA dataset is running the pipeline every month rather than once a year. An outstation whose dockets never reach the system is a nuisance in February and a permanent gap by December. A misconfigured extraction is a two-hour fix in the first month and a year of lost records if found at year end. Twelve routine runs are also easier to staff than one big rebuild under pressure, and the quality is better because nobody is rushing.

## Tooling to match your size

- **Small operator:** scheduled spreadsheet imports, written rules, a decision log and retained raw files. Not elegant; perfectly adequate.
- **Mid-sized operator:** a database with scripted transformations. The gain is repeatability and traceability, not sophistication.
- **Large operator:** a full data platform. The layers stay the same; only the tools change.

Whatever your size, write the rules before you buy a compliance product. Software cannot settle a discrepancy you have not decided how to settle. It will apply its own default, and you will own that choice without having made it. Your existing fuel management system will usually serve as a source, but rarely as the whole pipeline, since it was built for cost control rather than scope rules and audit trails.

## One dataset, several reports

Most operators of any size report emissions to more than one audience from the same underlying data:

- **CORSIA:** international flights, covered route pairs, the approved monitoring method, its own scope rules.
- **EU ETS or UK ETS, where they apply:** a different geographic scope, a separate monitoring plan approved by another authority, verification under a different accreditation framework.
- **Corporate sustainability reporting:** total operational emissions, usually domestic included, often on a financial year rather than a calendar year.
- **Customers:** charter clients and freight forwarders who need per-flight or per-shipment figures for their own scope 3.

Build one authoritative emissions layer and filter it per scheme downstream. The common alternative, four teams each reconciling the raw data separately, wastes effort and produces reports that occasionally disagree with one another. A mismatch between your own reports is exactly what a verifier or auditor asks about first. The shared layer tends to go unowned because it sits between departments, so assign it explicitly.

## Common mistakes

Exporting by hand. Correcting values at source. Reconciling by feel rather than by written rule. Having no exception list. Assembling the report outside the dataset. Running the process once a year. Automating exclusions. Keeping no decision log. Each of these shows up eventually as either a verification finding or a figure nobody can explain.

Ownership matters as much as design. The pipeline needs an owner who understands both the data and the operation: a purely technical owner writes rules that make no operational sense, and a purely operational one lets the audit trail lapse.

Related reading: [fuel data quality management](/insights/corsia-fuel-data-quality-management/), [what verifiers actually test](/insights/corsia-internal-audit-preparation/) and [fuel monitoring methods compared](/knowledge-base/corsia-fuel-monitoring-methods/).

If your fuel sources disagree and nobody has written down why, that is where we would start. Have a look at our [CORSIA services](/services/) and tell us which systems you are pulling from.
