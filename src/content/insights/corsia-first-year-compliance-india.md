---
title: "Your First Year of CORSIA Compliance in India: A Month-by-Month Guide"
excerpt: "What actually has to happen, and when, in an Indian operator first CORSIA year — from scope determination through DGCA approval and monthly reconciliation to verification, with the deadlines that bind."
date: "2026-08-29"
topic: "Airline Compliance"
tags: ["CORSIA first year","CORSIA compliance India","DGCA CORSIA","emissions monitoring plan","CORSIA timeline","CORSIA consultant India","annual emissions report"]
image: "/images/corsia-consultant/corsia-first-year-roadmap.svg"
---

The first CORSIA year is the one that sets the pattern. Decisions made in it — the monitoring method, the reconciliation rules, who owns what — persist for years, and correcting them later is far more expensive than getting them right once.

![A CORSIA first year, month by month](/images/corsia-consultant/corsia-first-year-roadmap.svg)

## The Critical Timing Fact

**The Emissions Monitoring Plan must be approved before the reporting year it covers begins.**

This single constraint drives the whole schedule. You cannot decide in June that you will monitor this year — the monitoring must have been running from January under an approved plan.

Which means the substantive work happens in the year **before** the first reporting year. Operators who discover CORSIA applies to them in the middle of a year are already late for that year, and the honest response is to engage the authority rather than to reconstruct data retrospectively.

## Before the Reporting Year

### Scope and threshold determination

Establish which legal entity is the operator, which flights are international, whether you exceed 10,000 tonnes of annual international CO2, and which route pairs generate offsetting obligations under current participation.

Document the reasoning, not just the conclusion. It will be tested at verification by someone who was not present.

### Data readiness review

The step that prevents the most expensive failure in CORSIA.

Take a **real sample month** — ideally a messy one with diversions, charters and outstation uplifts — and attempt to produce the figures each candidate monitoring method requires, from the systems you actually have, without manual reconstruction.

If it takes heroic effort for one month, it will not survive twelve. Choose a method your data supports, even if a more precise one exists on paper.

### Draft the monitoring plan

Method, data sources named specifically, data flow, roles as functions rather than individuals, quality controls, gap procedures defined in advance, and version control.

See [the CORSIA emissions monitoring plan guide](/insights/corsia-emissions-monitoring-plan-guide/) for what it must contain.

### Submit to DGCA

Allow real time for review, questions and revision. Approval practice has its own emphases and a first submission rarely passes untouched.

Submit with room to revise. The revision cycle has to fit inside the year that remains, which means working back from the year start rather than forward from today.

## During the Reporting Year

### Build the pipeline properly

![A CORSIA data pipeline that survives verification](/images/corsia-consultant/corsia-data-architecture.svg)

Automated extraction where possible. Documented reconciliation rules for every known discrepancy between sources. An audit trail linking every reported value back to a source record.

The reconciliation rules are the part most often left informal, and they are the part verification probes hardest. "That is what we have always done" does not survive the question "why was this discrepancy resolved that way".

### Reconcile monthly, not annually

This is the single most valuable operational habit in a first year.

Monthly reconciliation surfaces problems while there is time to fix them. An outstation whose uplift dockets never reach the system is a nuisance discovered in February and a data gap discovered in December.

It also spreads the effort. Twelve manageable exercises beat one large one under deadline pressure.

### Watch for scope changes

New routes, new aircraft types, a State joining or leaving CORSIA, a change in your operating structure. Each may require a monitoring plan revision, and the plan must match practice.

## After the Reporting Year

### Compile the Annual Emissions Report

From a maintained dataset rather than a reconstruction. If monthly reconciliation has been running, this is largely assembly rather than analysis.

### Verification

![Verification findings and what they cost](/images/corsia-consultant/corsia-verification-findings.svg)

Engage the verifier **early**. Accredited bodies are limited in number, demand clusters in the same window for everyone, and a late engagement means whoever is left.

Two constraints to plan around. The body verifying cannot have advised on the report, so if a consultant wrote your plan they cannot verify it — budget for two suppliers. And build time into the schedule for findings to be resolved and work re-performed, rather than assuming a clean first pass.

### Submit and close

Verified report to DGCA. Then, once ICAO publishes growth factors, the offsetting requirement becomes a firm figure, and the acquisition and cancellation cycle begins for the compliance period.

## What to Automate in Year One

The temptation in a first year is to run everything manually "just this once" and automate later. Later rarely arrives, and the manual process becomes the process.

**Automate the extraction.** A scheduled pull from each source system, rather than someone exporting a spreadsheet monthly. Manual export is where transcription errors and missed months originate.

**Automate the validation.** Range checks, completeness counts and format checks run on every load, producing an exception list rather than a silent pass.

**Automate the scope classification.** International or domestic, aircraft above the mass threshold, exempt flight type, covered route pair. These are rule-based decisions that should be applied identically every time, not judged case by case.

**Do not automate the discrepancy resolution.** Flag it, route it to a person, record the decision. The rules are documented; applying them to an unusual case still needs judgement.

**Do not automate the exclusion of unusual values.** A large fuel figure may be an error or a genuine long sector. Only a person with context can tell.

The output of a well-built first year is a pipeline that produces the report with a review step, not one that produces it unattended and not one that requires a month of manual assembly.

## An Indicative Schedule

Working relative to a January-to-December reporting year:

| Period | Activity |
|---|---|
| 12–9 months before | Scope determination, data readiness review |
| 9–6 months before | Draft monitoring plan |
| 6–3 months before | DGCA submission, questions, revision |
| 3–0 months before | Build pipeline, test extraction, train the team |
| Jan–Dec | Monitor; reconcile monthly |
| Jan–Mar after | Compile Annual Emissions Report |
| Feb–Apr after | Verification and findings resolution |
| By the national deadline | Submit verified report |

Exact submission dates are set in national implementing law. Check the DGCA calendar rather than assuming a date common to all States.

## Building the Internal Team

A first year needs a small number of people who genuinely understand their part, not a large committee.

**A named owner.** Accountable for the obligation, with authority to require data from flight operations and finance. This must be a real reporting line, not a coordination role — the failure pattern is an owner who can ask for data but cannot escalate when it does not arrive.

**A data person.** Someone who understands where the fuel and flight figures come from and can explain a discrepancy. This is the role most often missing, and its absence is what makes verification painful. A verifier's questions are almost entirely about data provenance.

**A flight operations contact.** Because the underlying records are theirs, and because scope classification questions — was this a positioning leg, which certificate covered this charter — can only be answered there.

**A finance contact.** For fuel invoicing reconciliation, and later for registry, treasury and cross-border payment on unit purchases.

For a small operator these may be four part-time responsibilities rather than four people. What matters is that each is named and each understands what is expected of them before the reporting year starts, rather than being drafted in during the reporting window.

**Train on your own data.** Generic CORSIA training explains the scheme; it does not prepare anyone to answer a verifier's question about why a particular figure was resolved a particular way. Walk the team through your actual pipeline once it exists.

## What Goes Wrong in a First Year

| Failure | When it surfaces | Cost |
|---|---|---|
| Method chosen without testing data | At verification | Year unrecoverable |
| Monitoring plan approved late | Before the year starts | Year cannot be monitored properly |
| No monthly reconciliation | At year end | Rushed, error-prone assembly |
| Reconciliation rules undocumented | At verification | Findings, re-work |
| Verifier engaged late | Reporting window | Whoever is available, at their price |
| Consultant expected to verify | At engagement | Independence conflict, two suppliers needed |
| Nobody owns it internally | Throughout | Data does not arrive, nobody escalates |

## Frequently Asked Questions

**When must the monitoring plan be approved?** Before the reporting year it covers begins. This is the constraint that drives the whole timeline.

**We only just realised CORSIA applies to us mid-year. What now?** Engage DGCA and get advice specific to your situation rather than reconstructing data. Being late is better handled openly than papered over.

**Can our consultant also verify the report?** No. Verification requires independence from anyone who advised on it. Plan for two suppliers.

**How long does verification take?** Allow three to six months including findings resolution, and engage the verifier well ahead of the window.

**What if a finding is material?** It must be corrected and the report re-verified. Build schedule contingency for this rather than assuming a clean pass.

**Do we need a consultant for the first year?** For the monitoring plan and data readiness review, external help usually pays for itself. Routine collection afterwards can be internal. See [consultant versus in-house](/insights/corsia-consultant-vs-in-house-team/).

**Can we change the monitoring method after the first year?** Yes, with authority approval, but it is disruptive and creates a discontinuity in the data series that verification will examine. Choosing correctly first is much cheaper.

**What records must we keep, and for how long?** Monitoring plan versions with approval dates, source data, reconciliation logic, the report as submitted, verification statements and findings, and authority acknowledgements. Retention periods are set nationally; plan for ten years.

**What is the most valuable habit to establish?** Monthly reconciliation. It converts a year-end crisis into twelve manageable tasks and surfaces problems while they are fixable.

---

**Working out what CORSIA means for your operation?** DSTechnoverse provides [CORSIA carbon credit services](/services/) for Indian operators and project developers — scope assessment, monitoring plans, data pipelines, verification support and unit sourcing. We are based in **Indore, Madhya Pradesh** and work across India.

[Apply as a CORSIA buyer or seller](https://carboncredit.dstechnoverse.com/)

[Talk to our carbon markets team](/contact/) about your position.
