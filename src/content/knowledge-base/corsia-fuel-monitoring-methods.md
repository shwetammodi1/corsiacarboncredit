---
title: "CORSIA Fuel Monitoring Methods: Five Methods and CERT Side by Side"
excerpt: "ICAO lets operators work out fuel burn five ways, with the CERT estimation tool for small emitters and data gaps. The records each method depends on, where each breaks down, and how to pick one your operation can sustain."
section: "Monitoring, Reporting & Verification"
order: 11
image: "/images/corsia/corsia-fuel-monitoring-methods.svg"
---

CORSIA needs one number per flight: the fuel it consumed. No airline records that number directly. What it has are fuel uplift dockets from suppliers, readings of fuel in the tanks at certain moments, and block times. Each ICAO method is a recipe for turning some combination of those records into fuel burn. The right recipe is simply the one whose ingredients your operation captures on every flight, at every station, all year.

![Comparison chart of CORSIA fuel use monitoring methods](/images/corsia/corsia-fuel-monitoring-methods.svg)

## The options in one table

| Method | Fuel burn is worked out from | Tank readings needed per flight | Data effort |
|---|---|---|---|
| Fuel Uplift | Fuel uplifted, adjusted for the change in fuel remaining on board | Yes | Moderate |
| Block-off / Block-on | Tank quantity at block-off less tank quantity at block-on | Yes | High |
| Block-on / Block-off | Tank at block-on, the following uplift, and tank at the next block-off | Yes | High |
| Fuel Allocation with Block Hour | Block hours multiplied by a determined burn rate | No | Low |
| Fuel Uplift with Density | Uplift volume converted to mass using density | Yes | Moderate |
| CERT (ICAO CO2 Estimation and Reporting Tool) | ICAO's estimation from flight data | No | Lowest |

## A quick calculation, to fix the idea

Using Block-off / Block-on, with illustrative readings: the tanks show 12,400 kg at block-off and 3,100 kg at block-on. Fuel burnt is 12,400 − 3,100 = 9,300 kg. At 3.16 kg CO2 per kg of Jet-A1, the flight emitted 9,300 × 3.16 = 29,388 kg, about 29.4 tonnes of CO2.

The arithmetic is the same under every method. What differs is where the two fuel figures come from and how reliably they turn up for every flight.

## Method by method

**Fuel Uplift.** Burn is the fuel loaded before the flight, corrected for the difference in fuel on board from one flight's start to the next.
- *Suits:* operators whose uplift dockets are captured consistently at every station and can be tied to individual flights.
- *Breaks down:* when stations record uplift in different ways, when dockets exist for billing rather than operations, or when an aircraft repositions without a matching record.

**Block-off / Block-on.** Burn is the tank reading at block-off less the reading at block-on.
- *Suits:* fleets whose aircraft systems record tank quantity at those moments and keep it in a form that can be extracted.
- *Breaks down:* when the reading depends on the crew writing it down, or when the data sits on the aircraft but is never routinely downloaded and stored.

**Block-on / Block-off.** Uses the tank reading at block-on, the next uplift, and the reading at the following block-off.
- *Suits:* operators with dependable tank and uplift records and well-captured ground time.
- *Breaks down:* for the same reasons as above, plus the difficulty of chaining consecutive flights correctly across night stops and maintenance visits.

**Fuel Allocation with Block Hour.** Burn is block hours times a fuel burn rate the operator determines.
- *Suits:* operators without real per-flight tank data but with reliable block times.
- *Trade-off:* far less data work, but the burn rate has to be set and justified, and the result is less precise. That imprecision is in your own reported emissions.

**Fuel Uplift with Density.** Uplift delivered by volume is turned into mass using measured or standard density.
- *Suits:* operators whose suppliers invoice in volume, which is common in some regions.
- *Watch:* document the density approach. Using a standard density where the actual density is known and differs materially invites findings.

## CERT: useful, with a catch

CERT estimates emissions from flight data without fuel monitoring. It may be used by **small emitters** below defined thresholds, and to fill gaps in an otherwise monitored dataset.

The catch is growth. An operator that relies on CERT while below the threshold and then crosses it has to move to a full monitoring method. If it never built any fuel monitoring, it makes that move in a hurry and with no history to check against. For operators approaching the [10,000 tonne threshold](/knowledge-base/corsia-scope-and-thresholds/), including growing Indian charter and business aviation operators, the sensible course is to start capturing fuel data before CERT stops being an option.

## Choosing: five questions

1. **What do we genuinely capture today?** Not what the system could capture. Ask for an actual data extract, not a specification.
2. **Which stations behave differently?** A method that works at the hub can fail at outstations where handling agents record fuel their own way.
3. **Does every aeroplane type provide the same data?** Mixed fleets often differ. The plan can handle this, but it has to be designed in.
4. **Would we rather be precise or consistent?** A precise method you cannot keep up is worse than a plainer one you can. Verification asks whether you followed your plan, not whether your method was elegant.
5. **Can we justify the choice in writing, from evidence?** The plan must explain why the method fits. That explanation will be read again years later, so base it on trial results rather than general argument.

On the trial itself: a method that needs manual fixes on 5% of flights in a trial month will need them on thousands of flights over a year. The way the choice is recorded is covered in [the Emissions Monitoring Plan](/knowledge-base/corsia-emissions-monitoring-plan/).

## Switching methods later

It can be done, but it costs. The monitoring plan has to be revised and re-approved, and the change creates a break in your data series that verifiers will examine. A step change in reported emissions caused by a method switch, rather than by operations, has to be explained, and the break also affects your own trend analysis and the data that feeds the sector's growth factor. Getting it right at the start is far cheaper.

## Symptoms and their causes

- **Verification fails on a closed year:** the method was chosen on paper and never tried on real data.
- **"It works for them" but not for you:** the method was copied from another operator with different systems.
- **Hub data clean, outstation data patchy:** station-level recording differences were not checked.
- **Tank readings missing for whole months:** data recorded on board was assumed to be stored and retrievable.
- **Findings on fuel mass:** density assumptions were not documented.
- **A rushed method change after growth:** CERT was kept after the threshold came into view.
- **A new aircraft type that does not fit:** fleet plans were not considered at method selection.

Method definitions are in Annex 16, Volume IV, and CERT is published by [ICAO](https://www.icao.int/environmental-protection/CORSIA/Pages/default.aspx). How the method's output moves through reporting and verification is in [CORSIA MRV explained](/knowledge-base/corsia-mrv-explained/).

If you are choosing a method, or suspect the one you have is not holding up, send us a month of fuel records and we will tell you what it supports. [Contact the desk](/contact/).
