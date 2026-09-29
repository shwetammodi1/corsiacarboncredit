---
title: "CORSIA Fuel Records From Suppliers and Handling Agents: Contracts, Formats and New Stations"
excerpt: "Much of your CORSIA evidence is created by companies you do not employ. How to write the data requirement into fuel and handling contracts, settle volume against mass, cover new stations and charters, and keep third-party dockets."
date: "2026-09-01"
topic: "Airline Compliance"
tags: ["fuel supplier data","handling agent CORSIA","fuel uplift records","CORSIA data quality","CORSIA consultant India","outstation data","third party records"]
image: "/images/corsia-consultant/corsia-data-architecture.svg"
---

An Indian carrier opens a new Central Asian route in April. The launch checklist covers slots, handling, crew, catering and permits, and the first flights go smoothly. In August, the compliance team notices that the local handler has been sending one fuel total per day, in litres, with its own flight references. Four months of per-flight uplift data do not exist in any usable form, and chasing them now gets nowhere.

Nobody in that story did anything unusual. The CORSIA data requirement was simply never passed to the people who create the records. When a verifier asks for the docket behind a figure at an outstation, whether it exists depends almost entirely on what you asked for before the flight.

![Data pipeline in which third-party fuel records feed the operator's reconciliation layer](/images/corsia-consultant/corsia-data-architecture.svg)

## Someone else creates it; you answer for it

The records start outside your company, but the accountability stays with you. "The handler never sent it" explains a gap; it does not excuse one, and the verifier will raise a traceability finding either way. In practice that means three things:

- **Your completeness depends on their process.** If a handler logs uplift per day, no internal effort will give you per-flight figures. Spreading a daily total across flights by assumption will not survive verification.
- **Mixed formats are normal.** Volume in some countries, mass in others, different rounding, different identifiers for the same flight, different time zones.
- **Time runs out quickly.** A docket from six months ago at a station you serve twice a month is rarely recoverable. In practice you can chase back weeks, not months.

## Put it in the contract: a sample data annexe

The single most effective step costs nothing if it is taken at the right moment, which is when an agreement is being negotiated. Adding terms to a live contract later needs a reason and a conversation. The simplest route is a short standard annexe attached to every fuel supply and ground handling agreement. Something like:

> **Schedule: Fuel uplift data**
> 1. Uplift reported per flight, not per day.
> 2. Each record carries the operator's flight identifier as used in its systems.
> 3. Date and time of uplift, with the time convention stated (local or UTC).
> 4. Quantity with its unit stated explicitly.
> 5. Density with every uplift reported by volume.
> 6. Delivery at least monthly, in the agreed CSV or template format.
> 7. Originals retained by the supplier for the agreed period.
> 8. A named contact, and a route, for corrections.

Each line has a reason. Daily totals cannot be allocated without assumptions. Mismatched identifiers turn reconciliation into manual work. Timestamps link an uplift to the right sector. Units and density are needed to reach mass. Monthly delivery means gaps show up while they can still be chased. A structured file beats a scanned PDF as a data feed, though the PDF is still worth keeping as the source record. The retention term is a backstop, not something to rely on, because the supplier's filing is outside your control.

The time-convention line deserves a word of its own. A docket stamped in local time and a flight record in UTC will not link automatically, and mismatches around midnight are a steady source of allocation errors. Agree the convention in writing.

## Volume or mass: decide once, in the plan

CORSIA emissions are calculated from fuel mass. Many suppliers, especially outside India, report volume. Getting from one to the other needs density, and density varies with temperature and batch. The options, best first:

1. **Get mass directly.** Ask for kilograms or tonnes. Many suppliers can do it.
2. **Get actual density with each uplift** and convert. Defensible, provided the supplier supplies it.
3. **Apply a standard density** where the actual figure is not available. Acceptable if written into your monitoring plan and applied consistently. Using a standard value where the actual one was available, and materially different, attracts findings.

Whichever applies, record the choice in the monitoring plan, not station by station. For the method side, see [fuel monitoring methods compared](/knowledge-base/corsia-fuel-monitoring-methods/).

## New stations and changes of handler

The opening story is the most dependable failure in this area, and the fix is small: make CORSIA data a line on the station-opening checklist, next to the operational items.

| Before first flight | First month | Ongoing |
|---|---|---|
| Data annexe included in the handling and fuel agreements | First month's per-flight data received and checked | Station included in the monthly supplier reconciliation |
| Named contact at the handler recorded | Identifiers, units and time convention confirmed to match | Station's delivery record tracked month by month |
| Local staff given the written requirement | Any gaps chased while still recent | Requirement re-confirmed if staff or handler change |

A change of handler at an existing station is the quieter version of the same failure. Treat it as a new opening.

## Charters and one-off destinations

Where there is no standing agreement, capture the record at the time. Build it into trip planning: get the uplift docket before departure, photograph or scan it, and file it against the flight. A record captured at the ramp beats an email sent a month later to a company with no continuing relationship with you. For cargo and charter operators this is a large share of the flying, not an edge case; see [CORSIA for cargo airlines in India](/insights/corsia-consultant-for-cargo-airlines-india/).

## Reconcile with the supplier, not just internally

Your own monthly reconciliation finds your problems. A monthly exchange with each supplier finds theirs: here are the flights we operated at your station, here are the dockets we received, here is what is missing. A systematic problem surfaces in month two instead of in the reporting window. It also gives you a named person at the other end, which is what gets an urgent correction actually done. How this fits into your wider checks is covered in [fuel data quality management](/insights/corsia-fuel-data-quality-management/).

## Keep the original

Your retention duty does not lapse because someone else created the record. Keep the raw docket, not only the number typed into your system, because when a figure is challenged the source document is the answer. Store it where it will outlast the person who received it; a scan sitting in an inbox is not retention.

Hub uplifts are usually less of a worry, because processes there are established and the data reaches you routinely. The risk concentrates at outstations and one-off destinations.

## When a station cannot supply per-flight data

Sometimes a station cannot or will not provide it. Two responses are legitimate:

- **Pick a monitoring method that does not need it.** A block-hour method is less precise, but may be the sustainable choice if a meaningful part of your network cannot supply uplift data. Verification checks that you followed your approved plan, not that you chose the most precise option.
- **Use the gap procedure** for occasional gaps. The fill method set in advance in your monitoring plan applies, and the gap goes in the register. Inventing an estimate after the gap appears is not acceptable.

What fails is choosing a data-hungry method and hoping the difficult stations improve.

## Getting procurement to carry it

Fuel and handling contracts are negotiated by procurement or flight operations. CORSIA requirements reach those negotiations only if someone puts them there. What works:

- **The standard annexe in every template**, written once and reused, so the CORSIA owner need not attend every negotiation.
- **Data capability in tender criteria.** A supplier who cannot provide usable per-flight data costs more than its price suggests, because you absorb the reconciliation effort every month.
- **A one-page brief for procurement** on why the clause matters. Without it, a data clause looks like a nice-to-have and is the first thing traded away.
- **Review at renewal.** Contracts signed before CORSIA applied to you will lack the clause. Renewal is when to add it.
- **A supplier scorecard.** A monthly record of which stations delivered complete data gives you something specific to raise at a commercial review.

Ownership should sit with whoever owns fuel procurement, with the CORSIA owner specifying the requirement. Split it so that nobody owns the data outcome, and it fails. You can require the output in the agreement; how the handler changes its own internal process is up to them.

The arrangement that works: the CORSIA owner writes the requirement once, procurement puts it in the template, and the monthly reconciliation shows which suppliers are meeting it. Nobody has to remember anything. The downstream design is in [CORSIA data systems](/insights/corsia-data-systems-and-automation/).

If you are about to open a new international station or renew handling contracts, [ask us](/contact/) for a data annexe tailored to your monitoring plan. It is a small document that prevents a large gap.
