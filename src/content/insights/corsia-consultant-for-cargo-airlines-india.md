---
title: "CORSIA for Cargo Airlines in India: What a Consultant Actually Does"
excerpt: "Freight operators face the same CORSIA rules as passenger carriers but a harder data problem — ad hoc routing, charter legs and wet-leased capacity. What changes, and where consultant support pays for itself."
date: "2026-08-29"
topic: "Airline Compliance"
tags: ["CORSIA cargo airline","CORSIA freight operator","CORSIA consultant India","air cargo emissions","CORSIA compliance India","freighter CORSIA","ACMI CORSIA"]
image: "/images/corsia-consultant/hero-corsia-operator-segments.svg"
---

CORSIA does not distinguish between passengers and freight. A tonne of CO2 from a freighter counts exactly as a tonne from a widebody full of people. What differs is how hard it is to produce a defensible number.

![CORSIA by operator type](/images/corsia-consultant/hero-corsia-operator-segments.svg)

## Why Cargo Is a Harder Data Problem

Scheduled passenger operations are, from a data perspective, well behaved. Fixed routes, published schedules, consistent stations, stable fleet assignment. The monitoring problem is one of volume rather than complexity.

Freight is not like that.

![How CORSIA differs by operator type](/images/corsia-consultant/corsia-operator-segment-differences.svg)

**Ad hoc routing.** A freighter routed to an unplanned station because of a load opportunity produces a flight record that does not match any schedule. Automated scope classification built around a published timetable will miss it.

**Charter legs.** One-off charters may be flown under a different commercial arrangement, and the question of which entity is the operator for CORSIA purposes needs answering per arrangement rather than once.

**Positioning and ferry flights.** Empty repositioning legs are still international flights and still count. They are also the ones most likely to be missing from a commercially-oriented flight list, because they generate no revenue.

**Wet leases and ACMI.** Aircraft, crew, maintenance and insurance provided by one party and operated commercially by another. The CORSIA operator follows the **operating certificate** under which the flight is conducted, not the aircraft ownership and not the commercial contract.

**Mixed fleets.** Converted freighters, leased-in capacity for peak season and varying aircraft types complicate the fuel monitoring method choice, because data availability differs by type.

## Where the Obligation Actually Lands

The five scope tests apply identically:

| Test | Cargo-specific note |
|---|---|
| International flight | Domestic freight is entirely out of scope |
| Above 5,700 kg MTOM | Captures every commercial freighter |
| Operator above 10,000 t CO2/yr | Reached faster than expected on long-haul freight |
| Not an exempt flight type | Humanitarian relief cargo is exempt; commercial is not |
| Both States participating | Determines whether offsets are owed |

That third row catches operators out. Long-haul freighters burn heavily, so a small fleet can cross the 10,000-tonne threshold on international sectors alone. Do not assume a modest fleet means exemption — calculate it.

The fourth row is worth care too. Relief flights genuinely operated as humanitarian are exempt; commercial cargo carrying goods that happen to be aid-related is not. The distinction is the nature of the operation, and it needs documenting per flight rather than asserted at fleet level.

## Establishing the Operator Entity

For cargo groups this is the first substantive piece of work, and getting it wrong is expensive to correct.

**Follow the Air Operator Certificate.** The entity holding the certificate under which the flight was conducted is the operator.

**A group with several certificates has several operators**, each with its own threshold test, monitoring plan and reporting obligation. Aggregating at group level is incorrect and produces a report the authority will reject.

**Wet-leased-in capacity** is generally operated under the lessee's certificate, which makes those flights the lessee's emissions. Wet-leased-**out** aircraft flown under someone else's certificate are theirs.

**Interline and block-space arrangements** follow the operating carrier, not the party selling the capacity.

Document the determination with the reasoning. It will be tested at verification, quite possibly by someone unfamiliar with your commercial structure.

## The Monitoring Method Decision

The method must be one your data can sustain across the whole operation, including the awkward parts.

The failure pattern in cargo is a method chosen against hub-station data that works perfectly there and collapses at outstations where fuel uplift is recorded differently, or at charter destinations with no established process at all.

**Test against your messiest month, not a representative one.** Pull a peak-season month with charters, diversions and outstation uplifts, and try to produce the required figures without manual reconstruction. If it takes heroic effort for one month, it will not survive twelve.

Where per-flight tank data is genuinely unavailable across parts of the operation, a block-hour based method may be the sustainable choice even though it is less precise. Verification tests whether you followed your approved plan, not whether you chose the most sophisticated option.

## Building the Data Pipeline

![A CORSIA data pipeline that survives verification](/images/corsia-consultant/corsia-data-architecture.svg)

For cargo the reconciliation layer carries more weight than elsewhere, because sources disagree more often.

Fuel uplift dockets from a handling agent, the flight operations record, and the finance system's fuel invoice will not match exactly. Each measures something slightly different at a slightly different moment. **The rule for resolving each disagreement must be written down before the year starts**, not decided per case afterwards.

A useful discipline: reconcile monthly rather than annually. Discovering in month two that outstation dockets are not reaching the system leaves eleven months to fix it. Discovering it in the reporting window does not.

## Where a Consultant Earns the Fee

**Entity determination** for complex group structures. This is legal-adjacent analysis that most operators have never had to do.

**Method selection tested against real data**, including the awkward stations. The single most expensive avoidable error.

**Reconciliation rule design**, so discrepancies are resolved consistently and defensibly.

**Threshold assessment** where the operator sits near 10,000 tonnes and needs to know which side of the line they are on.

**Second-phase modelling**, because freight networks often serve States not currently participating, so the 2027 coverage change can be proportionally larger than for a passenger carrier on established routes.

**What to keep in-house:** understanding of your own flight and fuel data. If nobody internally can explain where a figure came from, verification will be difficult regardless of who wrote the report.

## Coordinating With Handling Agents

For cargo operators, a large share of the fuel record originates outside the company entirely — with ground handlers and fuel suppliers at stations you may serve only occasionally.

That dependency needs managing deliberately, because verification will test the completeness of your flight list and the traceability of your fuel figures, and "the handler did not send it" is not a defence.

**Specify the data requirement contractually.** Format, granularity, delivery schedule and the fields required. A clause in the handling agreement costs nothing at negotiation and is very hard to add later.

**Require per-flight, not per-day, uplift.** A daily total across several movements cannot be allocated to individual flights without assumption, and assumptions are what verifiers probe.

**Agree a correction route.** When a docket is missing or obviously wrong, who is contacted and within what period. Chasing a six-month-old uplift at an outstation rarely succeeds.

**Reconcile monthly with the handler**, not annually. A pattern of missing records is fixable in month two and a data gap by month twelve.

**Keep the raw record.** The handler's original docket, not just the value transcribed into your system. When a figure is questioned, the source document is the answer.

For ad hoc charter destinations where no standing agreement exists, build the data requirement into the trip planning checklist so it is captured at the time rather than pursued afterwards.

## Second-Phase Exposure

![Preparing for mandatory second-phase participation](/images/corsia-consultant/corsia-2027-readiness.svg)

Cargo networks frequently serve destinations chosen for trade flows rather than passenger demand, and a number of those States do not currently participate in CORSIA.

When participation becomes mandatory for States above the activity thresholds from 2027, route pairs that generate no obligation today begin to count. For a freight operator with significant traffic to those destinations, the increase can be proportionally larger than for a passenger carrier flying established participating-State routes.

Model it against your **actual network** rather than applying a percentage uplift. The change is entirely network specific, and a generic assumption will be wrong in one direction or the other.

## Frequently Asked Questions

**Does CORSIA apply to cargo airlines?** Yes, on exactly the same terms as passenger operators. The scheme measures CO2, not payload type.

**Are ferry and positioning flights in scope?** Yes, if they are international and flown by an in-scope operator. They generate no revenue and still generate emissions.

**Who is the operator on a wet lease?** The entity holding the operating certificate under which the flight is conducted. Ownership and the commercial contract do not determine it.

**Is relief cargo exempt?** Flights genuinely operated as humanitarian are exempt. Commercial carriage of aid-related goods is not. Document the basis per flight.

**We are a small freight operator — are we below the threshold?** Calculate it rather than assuming. Long-haul freighters burn heavily and reach 10,000 tonnes of international CO2 faster than fleet size suggests.

**How do we handle outstations with poor fuel records?** Either improve the record at source, or choose a monitoring method that does not depend on it. Do not choose a method your outstations cannot feed.

**How does CORSIA interact with our EU ETS obligation?** Freight operators serving Europe may face both. They use different instruments — credits against allowances — and scopes are arranged to limit duplicate obligation on the same emissions. Map your network against both explicitly rather than assuming either duplication or exemption.

**Can we use SAF to reduce the obligation?** Yes, where qualifying CORSIA Eligible Fuel is available at your stations, certified under an approved scheme, with documented chain of custody. Availability at cargo hubs varies considerably.

**What should we do first?** A scope and entity determination, then a data readiness test before the monitoring plan is written. See [the CORSIA readiness assessment checklist](/insights/corsia-readiness-assessment-checklist/) and [the first-year compliance guide](/insights/corsia-first-year-compliance-india/).

---

**Working out what CORSIA means for your operation?** DSTechnoverse provides [CORSIA carbon credit services](/services/) for Indian operators and project developers — scope assessment, monitoring plans, data pipelines, verification support and unit sourcing. We are based in **Indore, Madhya Pradesh** and work across India.

[Apply as a CORSIA buyer or seller](https://carboncredit.dstechnoverse.com/)

[Talk to our carbon markets team](/contact/) about your position.
