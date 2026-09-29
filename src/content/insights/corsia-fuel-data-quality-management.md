---
title: "Managing CORSIA Fuel Data Quality Month by Month"
excerpt: "Verification tests whether your fuel figures were captured, checked and evidenced through the year. The six monthly checks, what they catch in practice, finance reconciliation, outstation control, gap logs and a quarterly trace test."
date: "2026-08-23"
topic: "Airline Compliance"
tags: ["fuel data quality","CORSIA MRV","data management","aviation fuel data","verification readiness","CORSIA India","data gap procedure"]
image: "/images/corsia-consultant/corsia-mrv-annual-cycle.svg"
---

On the first working Monday of each month, someone at a well-run CORSIA operator spends a morning on last month's fuel data. Nothing dramatic happens. A decimal point is moved back, a docket entered twice is removed, a station that recorded litres instead of kilograms gets a phone call. By the time the verifier arrives, those fixes are months old and documented.

That quiet morning is most of what fuel data quality management means. Under CORSIA, turning fuel into CO2 is simple arithmetic. What the verifier actually examines is whether the fuel figures behind it were captured, controlled and evidenced throughout the year. Operators who leave it to year end have a hard first verification; those who do it monthly have an uneventful one.

![Annual CORSIA cycle showing monthly data checks feeding the yearly report](/images/corsia-consultant/corsia-mrv-annual-cycle.svg)

## Where the figures come from, and where they go wrong

Fuel data for a single sector can live in half a dozen places:

- **Uplift documents**, the delivery receipts at each station. Often paper at outstations, and entered late.
- **Supplier invoices**, a useful independent check, with timing differences against the uplift.
- **Crew records** of block fuel, prone to transcription and rounding.
- **Aircraft systems or ACARS**, which capture automatically but are not available on every type.
- **The flight operations system**, which consolidates per sector but is only as good as the entries feeding it.
- **The fuel accounting system**, which reconciles figures but again depends on its inputs.

Your reported figure normally comes from a consolidated system. The evidence a verifier wants sits underneath it, at the uplift document and the invoice. A figure you cannot trace back to a source document counts as unsupported, however plausible it looks.

## The monthly morning: six checks

| Check | How to run it | What it usually finds |
|---|---|---|
| Completeness | Compare international sector counts from the schedule and operations system with sectors that have fuel figures | A missing sector, which is a data gap and must be treated as one |
| Anomalies | Compare fuel burn per sector and aircraft type against its own history | Entry errors: a slipped decimal, a unit mix-up, a doubled uplift |
| Units | Confirm litres or kilograms and the density applied | Conversion errors, most often at third-party-handled stations, and large when they happen |
| Duplicates | Look for the same uplift entered twice | A late document re-entered after the original was keyed |
| Finance | Tie total fuel recorded to total fuel purchased, allowing for timing and stock | Differences beyond your tolerance, to be investigated |
| Gap log | Record each gap, the substitution, who approved it and the evidence | Keeps the log current instead of rebuilt in December |

Six checks, every month, with the results kept. That is what a verifier means by data quality management, and its absence is exactly what they notice.

### Why the unit check earns its place

**Worked example (illustrative figures).** A handled outstation records an uplift of 10,000 litres, and the entry lands in a kilogram field unconverted. Using an illustrative density of 0.8 kg per litre, the true mass is 8,000 kg. The system now overstates fuel by 2,000 kg, which at 3.16 kg CO2 per kg of Jet-A1 is 6,320 kg of CO2 that never existed. One such error per week at one station adds up across a year, and the anomaly and unit checks are what catch it in the month it happens. The density basis you actually use must be documented; this figure is for illustration only.

## Finance: the check that comes free

Fuel is bought, invoiced and paid for, so the finance department already holds an independent record of the same physical quantity you report as emissions, kept by people with different incentives. Comparing the two costs little and catches:

- uplifts missing at a station with slow paperwork
- entries made twice
- unit and density conversion errors
- fuel drawn but never attributed to a sector
- timing differences that look like gaps but are not

Verifiers run this comparison themselves. If you run it monthly, you find the differences first, look into them without pressure, and can present the reconciliation as evidence of control rather than being asked to explain a variance you had missed.

## Outstations: fix it in the contract

Home-base data is usually clean. The trouble sits at outstations, especially those run by handling agents: different paperwork habits, late submissions, units recorded inconsistently, paper that is not kept, staff who change, and a method applied differently from the plan.

Relationships with individual station staff work until the individual moves on. The durable fix is the ground handling agreement. Write into it a standard uplift form, a submission deadline, explicit unit and density requirements, and scan-on-receipt into your retention system. Keep a written instruction on the station file rather than relying on someone's memory, and audit each station against the one method your monitoring plan states. Adding these clauses at renewal costs nothing. Our guide to [fuel supplier and handling agent data](/insights/corsia-fuel-supplier-data-coordination/) goes into the contract terms.

## Gaps: have a procedure, keep a log

A gap is any in-scope flight without a valid fuel figure. Gaps will happen. Unmanaged gaps are the problem. The procedure needs five parts: a definition of what counts as a gap; detection through the monthly completeness check; a conservative substitution method set in advance; documentation of the gap, the substitution, the approval and the evidence; and a threshold above which the underlying cause gets investigated.

Conservative means leaning towards over-stating emissions, not picking whichever value suits. A method that sometimes gives higher and sometimes lower figures depending on circumstances is not conservative, and a verifier will say so.

Keep the gap log through the year with date, flight, reason, method, approver and evidence reference, and hand it to the verifier at the start without being asked. A stable, low gap rate shown up front demonstrates control. Gaps that surface during sampling suggest the opposite.

## Keeping evidence retrievable

Records must be kept for the prescribed period, and kept means you can find them, not that they are somewhere in an archive. Organise by compliance year from day one, in layers:

1. the report as submitted, with its calculation file
2. per-flight consolidated data behind it
3. source documents: uplift dockets, invoices, crew records
4. control evidence: monthly check outputs, reconciliations, sign-offs
5. the gap log
6. the monitoring plan and its version history
7. correspondence with the authority

Building this structure after the year ends, against a deadline, is where most first-cycle stress comes from.

## A quarterly trace test

Every quarter, pick three or four flights at random, at least one from a handled outstation, and follow each through:

1. Identify it: flight number, date, registration, route. Minutes.
2. Confirm it is in scope: international, above the mass threshold, not exempt. Minutes.
3. Pull the reported fuel figure from the consolidated system. Minutes.
4. Pull the source document behind it. This should take **less than a day**.
5. Check any unit or density conversion. Minutes.
6. Find the monthly check that covered that period. Minutes.
7. Find that month's purchase reconciliation. Minutes.

If every step finishes within a day, verification will go smoothly. If step 4 means emailing a station and waiting, that is exactly what will happen during fieldwork, only with a verifier waiting and a deadline close. The test takes an hour and exercises the whole chain rather than one control, so it finds retrieval problems that completeness checks never will.

## Making verification quick

A verifier traces a sample of reported figures to source. Help them by organising the evidence pack the way they work, by sample rather than by system; including the worked example from your monitoring plan; having the reconciliations ready as a set; presenting the gap log first; and naming one person who can retrieve any document within the day. This does not make the verifier easier to satisfy. It means questions that would have become findings are answered with evidence on the spot.

The commonest problems we see, in order, are missing or late outstation records, then unit and density conversion errors. Both are caught by the monthly morning. For the verification side, read [choosing a verification body](/insights/corsia-verification-body-selection-india/) and [what verifiers actually test](/insights/corsia-internal-audit-preparation/).

If your finance and operations fuel totals do not agree and nobody is sure why, [get in touch](/contact/). Setting up the monthly routine is usually a short piece of work, and it pays back at the first verification.
