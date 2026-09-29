---
title: "Fuel Supplier and Handling Agent Data for CORSIA: Getting It Right"
excerpt: "A large share of your CORSIA evidence originates outside your company. How to specify the data requirement contractually, what format to insist on, and why new station openings are where this most often fails."
date: "2026-09-01"
topic: "Airline Compliance"
tags: ["fuel supplier data","handling agent CORSIA","fuel uplift records","CORSIA data quality","CORSIA consultant India","outstation data","third party records"]
image: "/images/corsia-consultant/corsia-data-architecture.svg"
---

Verification will ask you to produce the fuel uplift docket behind a reported figure. For an outstation flight, that docket was created by someone who does not work for you, at a company you have a commercial relationship with, possibly months ago.

Whether it exists is largely determined by what you asked for before the flight, not after.

![A CORSIA data pipeline that survives verification](/images/corsia-consultant/corsia-data-architecture.svg)

## Why This Is Your Problem

The evidence originates externally; the accountability does not move. "The handler did not send it" is an explanation, not a defence — and a verifier will record a traceability finding regardless of whose fault it was.

Three practical consequences:

**Completeness depends on a third party's process.** If a handler records uplift by day rather than by flight, no amount of internal work recovers per-flight granularity.

**Format inconsistency is the norm.** Volume in some countries, mass in others; different rounding conventions; different identifiers for the same flight.

**Correction windows are short.** Chasing a six-month-old docket at a station you serve twice a month rarely succeeds. The record either exists or it does not.

## Specify It Contractually

The single most effective intervention, and it costs nothing at the point it is easiest to do.

Include in handling and fuel supply agreements:

| Requirement | Why |
|---|---|
| Per-flight uplift, not per-day | Daily totals cannot be allocated without assumption |
| Flight identifier matching your system | Otherwise reconciliation is manual |
| Date and time of uplift | Supports linking to the correct sector |
| Quantity with units stated | Volume and mass confuse without explicit units |
| Density where volume is reported | Required for the mass conversion |
| Delivery within a defined period | Monthly at minimum, so gaps surface early |
| Defined format | CSV or an agreed template beats scanned PDFs |
| Retention obligation | They keep the original for an agreed period |
| A named contact for corrections | Someone to chase, with a route |

Adding these clauses during negotiation is straightforward. Adding them to a live agreement afterwards requires a reason and a conversation.

## Volume Versus Mass

A recurring technical problem worth flagging.

CORSIA emissions are calculated from fuel **mass**. Many suppliers, particularly outside India, report **volume** — litres or gallons. Converting requires density, and density varies with temperature and fuel batch.

Three positions, in descending order of preference:

**Obtain mass directly.** Ask the supplier to report in kilograms or tonnes. Many can.

**Obtain actual density** with each uplift and convert. Defensible and requires the supplier to provide it.

**Use a standard density** where actual is unavailable. Acceptable if documented in your monitoring plan and applied consistently, but be aware that using a standard where actual was available and materially different attracts findings.

Whatever you do, **document it in the plan** rather than deciding per station.

## The New Station Problem

Where this most reliably fails.

A route launches. Operational readiness covers slots, ground handling, crew, catering and permits. Nobody communicates the CORSIA data requirement to the local handler. Three months of uplift records are missing before anyone notices, and by then the correction window has closed.

**The fix is a checklist item.** Add the CORSIA data requirement to the station opening process alongside the operational items — the requirement specified, the contact named, the first month's delivery confirmed.

The same applies to a change of handler at an existing station, which is the quieter version of the same failure.

## Ad Hoc and Charter Destinations

Where no standing agreement exists, the requirement has to be captured at the time.

Build it into the trip planning process: obtain the uplift docket before departure, photograph or scan it, and file it against the flight. A record captured at the ramp is worth more than a request emailed a month later to a company with no ongoing relationship with you.

For cargo and charter operators this is a meaningful share of the operation rather than an edge case. See [CORSIA for cargo airlines](/insights/corsia-consultant-for-cargo-airlines-india/).

## Reconcile Monthly, With Them

Internal monthly reconciliation catches your own problems. Reconciling **with the supplier** catches theirs.

A short monthly exchange — here are the flights we operated at your station, here are the dockets we received, here is the gap — surfaces a systematic problem in month two rather than in the reporting window.

It also establishes a working relationship with a named person, which is what makes the occasional urgent correction request actually get actioned.

## Retention

Your obligation to retain records does not disappear because the record was created elsewhere.

**Keep the raw docket**, not just the value transcribed into your system. When a figure is questioned, the source document is the answer.

**Store it where it survives.** A scan in an inbox is not retention. It needs to sit in a system that survives the person leaving and the mailbox being archived.

**Confirm the supplier's own retention period** in the agreement, as a backstop — but do not rely on it. Their record-keeping is not within your control.

## When the Data Simply Is Not Available

Sometimes a station cannot or will not provide per-flight records.

Two legitimate responses:

**Choose a monitoring method that does not depend on it.** A block-hour based method is less precise and may be the sustainable choice if a meaningful part of your network cannot supply uplift data. Verification tests whether you followed your approved plan, not whether you chose the most precise option available.

**Use the documented gap procedure.** Where the gap is occasional rather than structural, the fill method defined in advance in your monitoring plan applies. What is not acceptable is inventing an estimate after the gap appears.

What does not work is choosing a data-hungry method and then hoping the awkward stations improve.

## Building the Requirement Into Procurement

Fuel and handling contracts are usually negotiated by procurement or flight operations, and CORSIA requirements reach them only if someone puts them there.

**Add a standard data schedule** to your template agreements — a short annexe listing the fields, format, frequency and retention. Once written it is reused, and it removes the need for the CORSIA owner to be involved in every negotiation.

**Include it in the tender criteria.** A supplier who cannot provide per-flight uplift in a usable format is more expensive than their price suggests, because you will absorb the reconciliation cost every month.

**Give procurement a one-page brief** on why it matters. Without it, a data clause looks like an optional extra to trade away in negotiation, and it is precisely the sort of clause that gets traded.

**Review at renewal.** Contracts signed before CORSIA applied to you will not contain the requirement. Renewal is the natural moment to add it.

**Track compliance by supplier.** A simple monthly record of which stations delivered complete data and which did not identifies the problem relationships, and gives you something concrete to raise at a commercial review rather than a general complaint.

The pattern that works: the CORSIA owner writes the requirement once, procurement embeds it in the template, and the monthly reconciliation reports which suppliers are meeting it. Nobody has to remember anything.

## Frequently Asked Questions

**Can we require a handler to change their process?** You can require the output in your agreement. Whether they change their internal process is theirs; what matters is what reaches you.

**What if a handler reports by day rather than by flight?** Either negotiate per-flight reporting, or choose a monitoring method that does not require it. Allocating a daily total across flights by assumption will not survive verification.

**Is a scanned PDF acceptable?** As a retained source record, yes. As a data feed it is poor — manual transcription introduces errors and does not scale. Push for a structured format.

**Who should own the supplier relationship for this?** Whoever owns fuel procurement, with the CORSIA owner specifying the requirement. Splitting it so nobody owns the data outcome is how it fails.

**What if we discover a gap after the fact?** Apply the documented gap procedure from your monitoring plan and record it in the gap register. Do not invent a method retrospectively.

**How far back can we chase missing records?** Practically, weeks rather than months. This is why monthly reconciliation matters more than any recovery process.

**Does this apply to fuel uplifted at our own hub?** Usually less acutely, because hub processes are established and the data reaches you systematically. The problem concentrates at outstations and ad hoc destinations.

**What if the supplier reports in a different time zone?** Agree the convention in writing. A docket timestamped locally and a flight record in UTC will not link automatically, and mismatches at the day boundary are a recurring source of allocation errors.

**What is the highest-return action here?** A clause in the handling agreement and a line on the station opening checklist. Both are close to free and prevent most of the problem. See [CORSIA data systems](/insights/corsia-data-systems-and-automation/).

---

**Planning your CORSIA position?** DSTechnoverse provides [CORSIA carbon credit services](/services/) for Indian operators and project developers — scope and readiness assessment, monitoring plans, data pipelines, verification support, unit sourcing and second-phase modelling. We are based in **Indore, Madhya Pradesh** and work across India.

[Apply as a CORSIA buyer or seller](https://carboncredit.dstechnoverse.com/)

[Talk to our carbon markets team](/contact/) about your position.
