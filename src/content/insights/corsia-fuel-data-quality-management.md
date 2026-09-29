---
title: "CORSIA Fuel Data Quality: The Work That Decides Your Verification"
excerpt: "How to run fuel data quality management through the compliance year — the monthly checks, the reconciliation against finance records, handling outstations and gaps, and the evidence trail a verifier will actually test."
date: "2026-08-23"
topic: "Airline Compliance"
tags: ["fuel data quality","CORSIA MRV","data management","aviation fuel data","verification readiness","CORSIA India","data gap procedure"]
image: "/images/corsia-consultant/corsia-mrv-annual-cycle.svg"
---

CORSIA compliance is a data assurance exercise wearing a climate policy label. The emissions report is arithmetic; what verification actually tests is whether the fuel data behind it was captured, controlled and evidenced through the year.

Operators who treat this as a year-end reporting task have a difficult first verification. Operators who treat it as a monthly data discipline have a straightforward one.

![The CORSIA annual MRV cycle](/images/corsia-consultant/corsia-mrv-annual-cycle.svg)

## Where Fuel Data Comes From

| Source | Typical use | Weakness |
|---|---|---|
| Fuel uplift documents | Delivery receipts at each station | Paper at outstations, delayed entry |
| Supplier invoices | Independent cross-check | Timing differences against uplift |
| Flight crew records | Block fuel figures | Transcription, rounding |
| Aircraft systems / ACARS | Automated capture | Not available on all types |
| Flight operations system | Consolidated per-sector data | Depends on upstream entry quality |
| Fuel accounting system | Reconciled figures | Only as good as its inputs |

The reported figure normally comes from a consolidated system. The evidence a verifier wants sits underneath it, at the uplift document and the invoice. **Any figure you cannot trace back to a source document is, for verification purposes, unsupported.**

## The Monthly Routine

The single most valuable habit in CORSIA compliance is a monthly check that would take a data analyst a morning:

**1. Completeness.** Every international sector flown has a fuel figure. Compare sector counts from the flight schedule and operations system against fuel records. Investigate every mismatch — a missing sector is a data gap and must be handled as one.

**2. Anomaly detection.** Fuel burn per sector, per aircraft type, against its own history. Values far outside the normal range are usually entry errors — a decimal point, a unit conversion, a duplicated uplift.

**3. Unit consistency.** Litres versus kilograms, and the density conversion applied. Unit errors are common at stations handled by third parties and are large when they occur.

**4. Duplicate detection.** The same uplift entered twice, typically when a document arrives late and is re-entered.

**5. Reconciliation against finance.** Total fuel recorded against total fuel purchased, allowing for timing and stock. Differences beyond a defined tolerance get investigated.

**6. Gap log update.** Every gap identified, the substitution applied, the approval, and the evidence — recorded as it happens rather than reconstructed later.

Six checks, monthly, documented. That routine is what a verifier means by data quality management, and its absence is what they find when it is missing.

## Reconciliation Against Finance: The Strongest Check

Fuel is purchased, invoiced and paid for. That creates an independent record of the same physical quantity you are reporting as emissions, held by a different department with different incentives.

Comparing the two is cheap and catches:

- Missing uplifts at a station whose paperwork is slow
- Duplicated entries
- Unit and density conversion errors
- Fuel drawn but not attributed to a sector
- Timing differences that look like gaps and are not

Verifiers perform this check themselves. Doing it monthly means you find the differences first, investigate them calmly, and present the reconciliation as evidence of control rather than being asked to explain a variance you had not noticed.

## Outstations: Where the Problems Live

Home base data is usually clean. Outstations, particularly those handled by third parties, are where consistency breaks:

| Problem | Mitigation |
|---|---|
| Different documentation practice | A standard uplift form specified in the handling agreement |
| Delayed submission | A submission deadline in the handling contract, monitored |
| Units recorded differently | Explicit unit and density requirements, checked on receipt |
| Paper records not retained | Scan-on-receipt into the retention system |
| Local staff turnover | Written instruction attached to the station file, not personal knowledge |
| Method applied inconsistently | The monitoring plan states one method; audit against it |

**Put the data requirements in the ground handling agreement.** It is the only durable mechanism, and it costs nothing at contract renewal. Relying on individual relationships at each station works until the individual changes.

## Handling Data Gaps Properly

A gap is any flight in scope without a valid fuel figure. Gaps happen; unmanaged gaps are the problem.

The procedure needs five elements:

1. **Definition** — what counts as a gap
2. **Detection** — the monthly completeness check
3. **Substitution** — a conservative method, defined in advance
4. **Documentation** — the gap, the substitution, the approval, the evidence
5. **Escalation** — a threshold above which the underlying cause is investigated

**Conservative means over-estimating emissions**, not selecting whichever value is convenient. If your substitution method sometimes produces higher and sometimes lower figures depending on circumstance, it is not conservative and a verifier will say so.

Keep a **gap log** for the year: date, flight, reason, method applied, approver, evidence reference. Present it proactively at verification. An operator who shows a controlled gap log with a stable, low gap rate demonstrates control. An operator whose gaps emerge during sampling demonstrates the opposite.

## Retention and Evidence

Records must be retained for the prescribed period, and retention means retrievable — not "somewhere in an archive".

Practical structure:

| Layer | Contents |
|---|---|
| Reported figures | The emissions report as submitted, with the calculation file |
| Consolidated data | Per-flight records supporting the report |
| Source documents | Uplift documents, invoices, crew records |
| Control evidence | Monthly check outputs, reconciliations, sign-offs |
| Gap log | Every gap and its treatment |
| Plan and versions | The monitoring plan and its change history |
| Correspondence | Authority queries and responses |

Organise this by compliance year from the start. Assembling it retrospectively, under deadline, is where first-cycle stress comes from.

## Preparing for Verification

![How a CORSIA verification actually runs](/images/corsia-consultant/corsia-verification-steps.svg)

A verifier will trace a sample of reported figures back to source. To make that fast:

- Build an **evidence pack** organised the way the verifier works — by sample, not by system
- Include the **worked example** from your monitoring plan
- Have the **reconciliations** ready as a set, not reproduced on request
- Present the **gap log** at the start, unprompted
- Nominate **one point of contact** who can retrieve any document within the day

Operators who do this find verification takes less time and produces fewer findings — not because the verifier is satisfied more easily, but because the questions that would otherwise become findings get answered with evidence immediately.

See [choosing a CORSIA verification body](/insights/corsia-verification-body-selection-india/) for the appointment side, and [the emissions monitoring plan guide](/insights/corsia-emissions-monitoring-plan-guide/) for the document that governs all of this.

## Worked Example: Tracing One Flight

The test that predicts your verification result. Pick a flight at random from last year and follow it:

| Step | What you should be able to produce | Time it should take |
|---|---|---|
| 1. Identify the sector | Flight number, date, aircraft registration, route | Minutes |
| 2. Confirm it is in scope | International, aircraft above the mass threshold, not exempt | Minutes |
| 3. Retrieve the reported fuel figure | From the consolidated system | Minutes |
| 4. Retrieve the source document | The uplift document or crew record behind it | **Under a day** |
| 5. Check the conversion | Units and density applied, if any | Minutes |
| 6. Find the monthly check | Evidence the completeness and anomaly checks covered this period | Minutes |
| 7. Find the reconciliation | The month's fuel purchase reconciliation | Minutes |

If every step completes within a day, verification will be straightforward. If step 4 requires emailing a station and waiting, that is precisely what will happen during fieldwork — except with a verifier waiting and a deadline approaching.

Run this exercise quarterly on three or four random flights, including at least one from a third-party-handled outstation. It costs an hour, it tests the whole chain rather than any single control, and it finds the retrieval problems that no completeness check will surface.

## Frequently Asked Questions

**What is fuel data quality management under CORSIA?** The set of controls — completeness checks, anomaly detection, reconciliation, gap handling and evidence retention — that ensures reported fuel burn is accurate and traceable.

**What checks should run monthly?** Completeness against sectors flown, anomaly detection, unit consistency, duplicate detection, reconciliation against finance records, and gap log maintenance.

**Why reconcile against finance records?** Fuel purchase data is an independent record of the same physical quantity. It is the strongest available cross-check and the one verifiers perform themselves.

**What is a data gap?** Any flight in scope without a valid fuel figure. Gaps must be detected, substituted conservatively by a pre-defined method, documented and approved.

**What does conservative substitution mean?** A method that errs towards over-estimating emissions, applied consistently regardless of whether it favours the operator in a given case.

**How do we control outstation data?** Put documentation standards, units and submission deadlines into the ground handling agreement, and audit against the monitoring plan.

**How long must records be retained?** For the prescribed retention period — and retained means retrievable within a reasonable time, organised by compliance year.

**What will the verifier sample?** A risk-based selection of reported figures, traced back to source documents, plus the evidence that your controls actually operated.

**What is the most common data problem?** Missing or late outstation records, followed by unit and density conversion errors.

**How much time does this take?** Roughly a morning a month for the routine checks, which is far less than the time consumed by remediating findings after verification.

---

**Running your first CORSIA compliance cycle?** DSTechnoverse supports Indian aircraft operators with applicability assessment, emissions monitoring plans, fuel data quality management and verification readiness — and hands the annual cycle back to your team. We are based in **Indore, Madhya Pradesh** and work with clients across India. See our [CORSIA carbon credit services](/services/), our carbon credit portal at [carboncredit.dstechnoverse.com](https://carboncredit.dstechnoverse.com/), or [talk to our team](/contact/) about your reporting year.

*This article is general information, not legal or regulatory advice. CORSIA rules, thresholds and participating-state lists change — verify the current position with ICAO and the DGCA before acting.*
