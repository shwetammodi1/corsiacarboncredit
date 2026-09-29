---
title: "CORSIA for Business Aviation and NSOP Operators in India: Working Out If You Are In Scope"
excerpt: "Nearly every business jet clears CORSIA's 5,700 kg aircraft threshold, yet most charter and NSOP operators fall below the 10,000-tonne operator threshold. A worked calculation, the edge cases, and what to do on either side of the line."
date: "2026-08-29"
topic: "Airline Compliance"
tags: ["CORSIA business aviation","business jet emissions","CORSIA threshold","private jet CORSIA","charter operator CORSIA","NSOP CORSIA","CERT tool"]
image: "/images/corsia-consultant/corsia-operator-segment-differences.svg"
---

A charter operator in Mumbai with a handful of midsize jets asks us the same question most business aviation clients start with: does CORSIA apply to us at all? The honest answer is that it depends on two thresholds that point in opposite directions. The aircraft threshold catches almost every business jet. The operator threshold leaves out almost every business aviation operator. Where you stand between them is the entire question, and it has to be calculated rather than assumed.

![How CORSIA obligations differ by type of operator](/images/corsia-consultant/corsia-operator-segment-differences.svg)

## The two lines

**Aircraft: above 5,700 kg maximum certificated take-off mass.** That is a low bar. It takes in light jets upward: a Phenom 300, a Citation, a Learjet and everything bigger. Only very light aircraft and turboprops under that mass fall outside. Helicopters are not covered at all, since the scheme applies to aeroplanes.

**Operator: above 10,000 tonnes of CO2 a year from international flights.** For business aviation that is a high bar. At 3.16 kg of CO2 per kg of jet fuel, it corresponds to roughly 3,165 tonnes of fuel burnt on international sectors in a year.

## A worked threshold calculation

The operator and figures below are **illustrative**, using a round fuel burn of about one tonne per flight hour for a midsize business jet.

**This year.** Operator M holds a Non-Scheduled Operator's Permit and flies three midsize jets. Across the year they log 1,800 international flight hours in total (domestic hours are ignored).

- Fuel: 1,800 hours × 1 tonne = 1,800 tonnes
- CO2: 1,800 × 3.16 = 5,688 tonnes
- Result: well below 10,000 tonnes. No offsetting obligation.

**After growth.** Operator M adds a fourth jet and wins a contract for regular Gulf and Southeast Asia charters. International hours rise to 3,200.

- Fuel: 3,200 tonnes
- CO2: 3,200 × 3.16 = 10,112 tonnes
- Result: just above the threshold. The full obligation now applies.

Put another way, a single midsize jet at that burn rate would need about 3,000 international hours a year to cross the line on its own, which is an extremely busy aircraft. Most single-aircraft and small-fleet operators sit well below. Larger charter operators, fractional programmes and fleet managers with substantial international flying may well be above.

## Doing the determination properly

1. **Identify the operator.** In business aviation this is often the charter operator holding the NSOP, not the aircraft's owner. An owner whose aircraft is managed and chartered by someone else is generally not the CORSIA operator; the obligation follows the certificate, not the asset.
2. **List every international flight** flown under that certificate in the year.
3. **Remove aircraft at or below 5,700 kg.**
4. **Remove exempt flight types:** medical, humanitarian, firefighting and State flights.
5. **Convert fuel to CO2** at 3.16 kg per kg of jet fuel.
6. **Compare with 10,000 tonnes.**

Write the calculation down, even if the answer is comfortably below. The question comes back every year, and a growing operation can cross the line without anyone noticing.

### Edge cases that trip people up

::: accordion Air ambulance work
Flights genuinely conducted as medical flights are exempt. The exemption attaches to the flight, not the operator, so an operation that mixes medical and ordinary charter excludes only the medical sectors.
:::

::: accordion Owner-flown and commercial legs on the same aircraft
They may differ if they are flown under a different certificate or as private rather than commercial operations. Classify each flight against the certificate it was flown under and record the basis. A blanket assumption in either direction will not survive verification.
:::

::: accordion Managed and fractional structures
Each arrangement raises the question of which certificate a flight was conducted under. Resolve it arrangement by arrangement. Owners still need to understand the position, because it affects the economics of the management agreement.
:::

## Below the line

There is no offsetting obligation. Whether any reporting duty applies depends on how India has implemented the scheme, so confirm it with the [DGCA](https://www.dgca.gov.in/) rather than assuming either way.

Three things are still worth doing:

- **Recalculate every year.** One more aircraft or a shift towards international charter can tip you over, as Operator M found. Crossing the threshold with no monitoring capability in place is the uncomfortable position.
- **Keep fuel records flight by flight.** If you do cross, the first monitoring year is much easier with usable history. Data cannot be gathered after the event.
- **Expect questions from elsewhere.** Customers, financiers and regulators are asking about business aviation emissions independently of CORSIA, and the same records answer them.

## Above the line

The full obligation applies, and business aviation is organised very differently from a scheduled airline. Flight records are less systematic: scheduling software plus handling agent paperwork rather than an integrated operations system, with the fuel record often a receipt from an FBO rather than a data feed. Routing is unpredictable by nature, so scope cannot be classified from a published timetable. And FBO uplift records abroad vary a great deal in format and reliability from one country to the next.

### Picking a monitoring method

![A CORSIA data pipeline designed to survive verification](/images/corsia-consultant/corsia-data-architecture.svg)

Choose a method that works at your least organised station, not your best. For most business aviation operators that points to the **fuel uplift** method, because an uplift receipt exists for every fuelling even where systems are thin. Methods relying on tank readings at block times need aircraft data capture that many operations do not have systematically.

Test before deciding. Take a genuinely untidy month (several countries, several FBOs, a diversion) and try to produce the figures the method requires. The result chooses the method, not the other way round. The options are compared in [fuel use monitoring methods](/knowledge-base/corsia-fuel-monitoring-methods/).

Small emitters can use the **CERT** tool under defined conditions. An operator near the threshold should check eligibility and plan the move to full monitoring in case growth takes it beyond the point where CERT may be used.

## The fixed-cost problem

For a business aviation operator above the threshold, the main commercial issue is that CORSIA's fixed costs do not shrink with the operation. A monitoring plan takes about as much work for three aircraft as for thirty. Verification has a floor price however few flights are sampled. Opening a registry account is the same process either way. Spread over a small emissions base, those costs make each tonne far more expensive to administer than at a scheduled carrier.

What helps:

- **A simple monitoring approach.** A less precise method that your FBO receipts can feed without manual work is cheaper every year and no less compliant. Precision your data cannot support buys nothing.
- **Automating the part that repeats.** A one-off investment in repeatable extraction and reconciliation pays back faster at small scale, because the alternative is the same manual work each year with no economies.
- **Buying advice in the right shape.** A bounded assessment and build, followed by running the annual cycle yourselves, costs far less than an open-ended retainer. See [consultant engagement models](/insights/corsia-consultant-engagement-models/).

Deferral does not help. The fixed costs arrive whenever you start; delay only shortens the timeline and narrows your choice of method and verifier.

## Where outside help is worth paying for

The threshold determination itself, particularly when the answer is close: a bounded job with a clear output that prevents both needless compliance spend and unnoticed non-compliance. Operator entity analysis for managed and fractional structures. Method selection tested against real FBO records. And the first monitoring plan, where errors compound and surface at verification.

What does not need outsourcing: routine annual data collection once a process exists, and understanding your own flight records. For how fees are built up at this scale, see [CORSIA consultant fees in India](/insights/corsia-consultant-cost-and-fees-india/).

## Beyond CORSIA

Even operators well below the threshold are being asked the questions CORSIA raises. Aircraft financiers and lessors ask about emissions exposure in credit assessments. Corporate charter clients with their own reporting ask for per-flight figures for their scope 3 accounting, and an operator who can provide a credible number has an edge. Insurers and finance counterparties are beginning to ask for environmental disclosure. A documented scope determination and a flight-level fuel record answer all of these in a paragraph. For the client's side of that conversation, see [offsetting corporate business travel](/insights/offsetting-corporate-business-travel/).

If you would like your threshold position checked, send us a year of international flight hours by aircraft and we will work through it with you. [Contact the desk](/contact/), or try a rough figure first on our [calculator](/calculator/).
