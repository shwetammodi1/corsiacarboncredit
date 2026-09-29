---
title: "The First CORSIA Year for an Indian Operator: A Countdown Plan"
excerpt: "An Indian operator's first CORSIA year starts about twelve months before 1 January. A period-by-period plan from scope and DGCA approval through monthly reconciliation to verification, plus the traps to avoid."
date: "2026-08-29"
topic: "Airline Compliance"
tags: ["CORSIA first year","CORSIA compliance India","DGCA CORSIA","emissions monitoring plan","CORSIA timeline","CORSIA consultant India","annual emissions report"]
image: "/images/corsia-consultant/corsia-first-year-roadmap.svg"
---

Imagine an Indian carrier that launches its first international routes and, in June, realises its international emissions will cross the CORSIA threshold. It asks what it needs to do to start reporting this year. The uncomfortable answer is that this year's monitoring should already have been running since January, under a monitoring plan approved before January.

That timing rule shapes the whole first year. This piece lays it out as a countdown, working back from the start of the reporting year and then forward to the verified report.

![Timeline of an operator's first CORSIA year, month by month](/images/corsia-consultant/corsia-first-year-roadmap.svg)

## The rule everything hangs on

The Emissions Monitoring Plan has to be approved **before the reporting year it covers begins**. You cannot choose in June to monitor from January. So the real work of a first year happens in the year before it.

An operator in the June position above is already late for that year. The right response is to go to the DGCA openly and take advice specific to the situation. Rebuilding months of data after the fact and presenting it as monitored is the wrong one.

The first year also matters beyond itself. The monitoring method, the reconciliation rules and the allocation of ownership chosen now tend to stay for years, and changing them later is far more costly than choosing well once.

## Twelve to nine months out: decide whether and how you are in

**Settle scope.** Work out which legal entity is the operator, which flights are international, whether annual international CO2 exceeds 10,000 tonnes, and which route pairs attract offsetting under current participation. Write down the reasoning, not just the answer; someone who was not in the room will test it at verification. The detail is in [CORSIA scope and thresholds](/knowledge-base/corsia-scope-and-thresholds/).

**Test your data before choosing a method.** This is the step that heads off the most expensive first-year failure. Pick a real month, preferably an untidy one with diversions, charters and outstation uplifts, and try to produce the figures each candidate method needs, from the systems you actually have, without rebuilding anything by hand. If one month takes heroic effort, twelve will not work. Choose the method your data can support, even if a more precise one looks better on paper.

## Nine to six months out: write the plan

Draft the monitoring plan: the method, named data sources, the data flow, roles assigned to functions rather than individuals, quality controls, gap procedures set out in advance, and version control. Our [monitoring plan drafting guide](/insights/corsia-emissions-monitoring-plan-guide/) walks through each section.

## Six to three months out: get it approved

Submit to the DGCA and expect questions. A first submission seldom passes untouched, and the authority's review has its own emphases. Work backwards from 1 January when setting the submission date, so that at least one round of revision fits before the year starts. Our note on [working with the DGCA](/insights/corsia-dgca-interaction-guide/) covers what reviewers look for.

## Three months out to 1 January: build and train

### The pipeline

![Diagram of a layered fuel data pipeline built to survive verification](/images/corsia-consultant/corsia-data-architecture.svg)

Set up automated extraction where you can, written reconciliation rules for every known disagreement between sources, and an audit trail linking every reported value to a source record. The reconciliation rules are the part most often left informal and the part verifiers push hardest on.

The temptation is to run the first year by hand "just this once". Later seldom comes, and the manual process becomes permanent. A sensible split for year one:

- **Automate:** scheduled extraction from each source; validation on every load (ranges, completeness, formats) producing an exception list; scope classification by rule (international or domestic, mass threshold, exempt type, covered pair).
- **Flag for a person:** discrepancies between sources. The rule is written, but applying it to an odd case still needs judgement, and the decision must be recorded.
- **Leave to a person entirely:** excluding unusual values. A very large fuel figure might be an error or a genuinely long sector; only someone with context can say.

The aim is a pipeline that produces the report with a review step. Not one that runs unattended, and not one that needs a month of manual assembly.

### The people

A first year needs a few people who understand their part, not a committee:

| Role | Why it matters | Failure pattern |
|---|---|---|
| Named owner | Accountable for the obligation, with authority over flight operations and finance data | Can ask for data but cannot escalate when it does not come |
| Data person | Knows where fuel and flight figures come from and can explain a discrepancy | The role most often missing; verifier questions are nearly all about data provenance |
| Flight operations contact | Owns the underlying records and answers questions like "was this a positioning leg?" | Brought in only during the reporting window |
| Finance contact | Reconciles fuel invoices; later handles registry, treasury and cross-border payment for units | Left out until units have to be bought |

At a small operator these may be four part-time responsibilities held by two people. What matters is that each is named and briefed before the year starts. And train on your own data: generic CORSIA training explains the scheme but will not prepare anyone to explain why a particular figure was settled the way it was. Once the pipeline exists, walk the team through it. More on this in [CORSIA training for airline teams](/insights/corsia-training-for-airline-teams/).

## January to December: monitor, and reconcile every month

Monthly reconciliation is the single most useful habit in a first year. It surfaces problems while they can still be fixed. An outstation whose uplift dockets never reach the system is an irritation when found in February and an irreparable gap when found in December. It also turns one big year-end job into twelve small ones.

Keep an eye on anything that changes scope during the year: new routes, new aircraft types, a State joining or leaving CORSIA, a change in operating structure. Each may require a plan revision, because the plan must continue to match practice.

## January to March after: compile

If monthly reconciliation has run all year, the Annual Emissions Report is mostly assembly from a maintained dataset, not analysis from scratch. Run an [internal review](/insights/corsia-emissions-report-review-checklist/) before it leaves the building.

## February to April after: verification

![Chart of verification findings by type and what each costs to resolve](/images/corsia-consultant/corsia-verification-findings.svg)

Book the verifier early. There are few accredited bodies, everyone's demand falls in the same window, and a late booking means whoever is left, at their price. Allow three to six months for verification including findings.

Two constraints to plan for. The verifying body must be independent of anyone who advised on the report, so if an adviser wrote your plan they cannot verify it; budget for two firms. And leave time for findings to be corrected and work re-done. A material finding means correction and re-verification, so do not plan for a clean first pass.

## By the national deadline: submit and close

Submit the verified report to the DGCA by the date in national implementing law. Check the DGCA calendar for the actual date rather than assuming one shared by all States. Once ICAO publishes growth factors, the offsetting requirement becomes a firm figure and the cycle of buying and cancelling units for the compliance period begins.

Keep, from the start: every monitoring plan version with its approval date, source data, reconciliation logic, the report as submitted, verification statements and findings, and acknowledgements from the authority. Retention periods are set nationally; plan on ten years.

## First-year traps, and when they bite

- **A method picked without testing your data.** It bites at verification, when the year cannot be rerun.
- **A plan approved late.** It bites before the year starts: the year cannot be monitored properly.
- **No monthly reconciliation.** It bites at year end, in a rushed and error-prone assembly.
- **Unwritten reconciliation rules.** They bite at verification, as findings and rework.
- **A late verifier booking.** It bites in the reporting window, when you take what is left.
- **Expecting your adviser to verify.** It bites at engagement: independence rules require a second firm.
- **No internal owner.** It bites all year: data does not arrive and nobody escalates.

The method can be changed after year one with the authority's approval, but it disrupts the data series and verification will examine the break. Choosing correctly the first time is much cheaper. For whether to use outside help, see [consultant, in-house or hybrid](/insights/corsia-consultant-vs-in-house-team/).

If your first reporting year is coming up, or you are the carrier in June, [talk to us](/contact/) early. The most useful work we do for first-year operators happens well before 1 January.
