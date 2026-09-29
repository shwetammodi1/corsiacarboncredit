---
title: "CORSIA for a New Indian Airline: Getting Compliance Right Before the First International Flight"
excerpt: "A start-up carrier has no fuel history and no CORSIA expertise, but it can specify systems and contracts to produce clean data from day one, a chance established airlines never get back. A launch timeline and the decisions that matter."
date: "2026-08-29"
topic: "Airline Compliance"
tags: ["new airline CORSIA","airline startup compliance","CORSIA setup","emissions monitoring plan","airline launch","CORSIA readiness","DGCA"]
image: "/images/corsia-consultant/corsia-first-year-roadmap.svg"
---

Most of what we do for established carriers is repair work. Their fuel systems were chosen for other purposes, their records were kept to other standards, and their monthly habits formed long before CORSIA. A large share of the cost of their compliance goes into fixing data that was never captured properly.

A new airline has none of that to fix. It can simply capture the data properly from the start. That is a real advantage, and it exists only once: during the launch, before systems are bought and contracts signed.

![Month-by-month roadmap for a first year of CORSIA compliance](/images/corsia-consultant/corsia-first-year-roadmap.svg)

## Where a new operator starts

| Working against you | Working for you |
|---|---|
| No history to test a monitoring method against | Systems can be specified to produce CORSIA-ready data from day one |
| No reconciliation practice yet | Reconciliation rules can be designed rather than retrofitted |
| Emissions unknown until the network settles | No inherited data quality problems |
| Launch priorities crowding CORSIA out | Handling and fuel contracts not yet signed |
| No internal expertise and little time to build it | No habits to unlearn |

The right-hand column is worth more than it looks.

## The launch timeline

### Before systems are chosen

This is the moment with the highest return and the shortest window. When the operations and fuel systems are being selected, put these requirements to every vendor:

- Is fuel uplift recorded **per flight**, not per day? Several monitoring methods depend on it.
- Does every record carry the **departure and arrival aerodrome**? Scope is classified by route pair.
- Is the **aircraft registration and type** on every flight? It decides the mass threshold and which methods apply.
- Are **block times** captured systematically? Block-hour methods need them.
- Is there a **flight type field** that can separate exempt flights cleanly?
- Can data be pulled by **API or scheduled extract**, so nobody exports it by hand each month?
- Will records be **kept for at least ten years**? Verification and audit reach back a long way.

Writing these into a specification costs almost nothing. Adding them to a live system three years later is a project.

### Before handling and fuel contracts are signed

Put a clause in every handling and fuel supply agreement requiring uplift data per flight, in a defined format, on a defined schedule. It is easy to include during negotiation and hard to add afterwards. See [fuel supplier and handling agent data](/insights/corsia-fuel-supplier-data-coordination/) for what the clause should cover.

### Before the first reporting year

Name an owner. In a launch team, CORSIA tends to land with whoever has capacity that week, which is the pattern that fails. The owner needs authority to require data from flight operations and finance and a working escalation route when it does not come. In a small team this can be part of one person's role, provided it is written down and the authority is real.

![Chart of who owns and who supports each CORSIA activity](/images/corsia-consultant/corsia-governance-raci.svg)

## Timing the threshold: a worked example

A new operator usually starts below 10,000 tonnes of international CO2 a year and crosses as the network grows. Even a single narrowbody flying international sectors at reasonable utilisation can approach it within a year or two.

The trap is timing. **The monitoring plan must be approved before the year it covers**, and monitoring cannot be started retrospectively. So the plan work falls in the year *before* the obligation.

Take an **illustrative** start-up, Carrier N, with projected international CO2 from its fleet and network plan of:

- Year 1: about 4,000 tonnes
- Year 2: about 9,000 tonnes
- Year 3: about 14,000 tonnes

Carrier N crosses the threshold in year 3. Its monitoring plan therefore has to be drafted, submitted and approved during year 2, while the airline is still below the line and CORSIA feels like a future problem. If the network plan accelerates, the crossing moves forward and so does the plan deadline. That is why the model should be re-run whenever the network plan changes.

Allow generous time for DGCA review. A new operator has no track record with the authority, and approval is not immediate. Whether any reporting applies below the threshold depends on national implementation, so confirm with the [DGCA](https://www.dgca.gov.in/).

## Choosing a method with no history

Normally a monitoring method is chosen by testing it against past data. A new airline has none. There are two ways round this.

**Test on the first months of live flying.** Hold the final decision until real records exist and try the candidate methods against them. The plan timetable has to allow for it.

**Specify the systems to suit the method.** Decide which method you want and require your systems to produce what it needs. Only a new operator can do this, and where available it is the stronger option. Most established carriers would choose differently if they could specify their systems again. The methods are compared in [fuel use monitoring methods](/knowledge-base/corsia-fuel-monitoring-methods/).

## The first year, in sequence

1. Scope and threshold assessment: which legal entity holds the certificate, which flights are international, projected annual CO2.
2. Data readiness review on a real month once flying starts.
3. Draft the monitoring plan: method, sources, roles, quality controls, data gap procedure.
4. Submit to the DGCA and allow for questions and revision.
5. Build the pipeline: automated extraction, written reconciliation rules, an audit trail.
6. Reconcile monthly. In a new operation this is where problems appear, and month two is a far better time to find them than month twelve.
7. Compile the report from a maintained dataset and have it verified, rather than reconstructing the year at the end.

## Putting it in the launch budget

Every line in a launch budget is contested, so the CORSIA line needs a clear case.

- **Year one is about the build, not units.** The monitoring plan, the pipeline and the first verification are the main costs. Early offsetting obligations are usually small, because covered emissions are small and the growth factor applies to a small base.
- **The build is mostly one-off.** A pipeline specified properly at launch needs maintenance, not replacement.
- **Verification is the annual floor.** It happens every year and does not shrink much with size.
- **Unit cost grows with the network**, with steps in 2027 and from 2030. Model it from the fleet plan rather than projecting year one forward.

The argument that usually lands: a modest build now avoids a far larger retrofit later, and the retrofit cannot fully succeed anyway, because past data cannot be recreated.

## Network and fleet choices have a CORSIA price

For a growing airline, commercial decisions and CORSIA exposure are directly linked. Better to see that while decisions are still open.

- **Route choice sets coverage.** A route between two participating States creates an obligation from its first day. The same aircraft flying to a non-participating State does not, for now, but may from 2027 when participation becomes mandatory for States above the activity thresholds. Two network plans with identical block hours can carry very different obligations.
- **Growth rate matters from 2030.** The individual growth factor is weighted 15% from 2030 and 30% from 2033. A new airline is, by definition, growing fast from a small base, so this is not marginal.
- **Fleet choice changes the base.** The obligation is a share of covered emissions, so anything that cuts fuel burn cuts it proportionally.
- **SAF depends on stations.** Where eligible fuel can be uplifted with proper certification, it reduces the requirement directly, so station choice affects whether that lever exists.

None of this should drive network strategy alone. It should appear in the model rather than surfacing later as an unexplained cost. A fleet plan with a CORSIA column is simply a better fleet plan. The 2027 effect is covered in [second-phase readiness for Indian operators](/insights/corsia-second-phase-readiness-india-2027/).

## Common launch-stage mistakes

- Treating CORSIA as a problem for after the airline is established, and missing the system selection window.
- Signing handling agreements with no data clause.
- Noticing the threshold crossing in the year it happens, too late to have a plan approved.
- Outsourcing understanding along with the work, so nobody internal can explain the figures at the first verification.

## Where outside help fits

Advice pays most at four points: input to the system specification before selection (highest return, shortest window); threshold and timing modelling so the plan work lands in the right year; the first monitoring plan and DGCA engagement, where a new operator has no established relationship; and pipeline design with reconciliation rules written from the start. Keep ownership and understanding of your own data in-house. The broader trade-off is in [consultant, in-house or hybrid](/insights/corsia-consultant-vs-in-house-team/).

If you are launching an airline, or planning your first international routes, talk to us before the systems are chosen rather than after. [Contact the desk](/contact/) and we will start with the specification.
