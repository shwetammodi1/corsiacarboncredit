---
title: "CORSIA Methodology for Calculating Actual Life Cycle Emissions Values"
excerpt: "How CORSIA measures the full life cycle emissions of sustainable aviation fuel, how actual values are calculated and verified, and how they differ from ICAO default values."
date: "2026-11-13"
topic: "Airline Compliance"
tags: ["CORSIA", "sustainable aviation fuel", "life cycle assessment", "CORSIA eligible fuels", "carbon intensity"]
image: "/media/corsia-actual-life-cycle-emissions-values.png"
metaTitle: "CORSIA Actual Life Cycle Emissions Values: SAF Methodology"
metaDescription: "How the CORSIA methodology calculates actual life cycle emissions values for SAF: stages, ILUC, credits, actual vs default values and how they are verified."
---

The **CORSIA Methodology for Calculating Actual Life Cycle Emissions Values** is the ICAO document that explains how a fuel producer can work out the real, measured greenhouse gas intensity of a sustainable aviation fuel (SAF). The calculation covers every stage of the fuel's life, from feedstock to combustion in an aircraft engine, instead of using ICAO's standard default figure. For more guides on CORSIA and aviation emissions, explore [CORSIA Carbon Credits](https://corsiacarboncredit.in/).

The result is expressed in grams of CO₂ equivalent per megajoule of fuel (gCO₂e/MJ). It decides whether a fuel qualifies as a CORSIA eligible fuel and how much it can reduce an airline's offsetting requirement.

This guide explains what actual values are and how they are built and checked. It is written for airline fuel and sustainability teams, SAF producers and consultants. The rules summarised here come from ICAO's methodology and from how ICAO-approved certification schemes apply it. The current ICAO edition is dated November 2025, and it should be the reference for any real calculation.

## What Are Actual Life Cycle Emissions Values Under CORSIA?

A **life cycle emissions value** measures all the greenhouse gases linked to producing, transporting and burning one megajoule of aviation fuel. Under CORSIA this value is written as **LSf**, the life cycle emissions factor of a CORSIA eligible fuel, in gCO₂e/MJ on a lower heating value (LHV) basis.

An **actual** life cycle emissions value is calculated from a specific producer's own supply chain data. A **default** value is a standard figure that ICAO publishes for a given feedstock and conversion pathway.

Life cycle emissions are not the same as aircraft exhaust emissions. A SAF made from used cooking oil releases CO₂ when burned, much like fossil jet fuel. However, that carbon was recently absorbed from the atmosphere, so CORSIA counts only non-biogenic CO₂ at the combustion stage. The climate benefit comes from comparing the whole life cycle with fossil fuel.

CORSIA compares each fuel against fixed baselines: **89 gCO₂e/MJ for jet fuel** and **95 gCO₂e/MJ for aviation gasoline (AvGas)**. A CORSIA eligible fuel must achieve **at least a 10% reduction** against that baseline on a life cycle basis, and it must also meet CORSIA's other sustainability criteria.

## How Does the CORSIA Life Cycle Assessment Methodology Work?

The CORSIA life cycle assessment methodology builds the total value from three parts:

> **LSf = Core LCA value + ILUC value − emission credits (where applicable)**

- **Core LCA value.** The emissions from the supply chain itself. It is calculated with an attributional, process-based approach, which means adding up the emissions of each actual process step. This is the part a producer can calculate as an **actual** value.
- **ILUC value.** Induced land use change: emissions caused indirectly when growing a fuel crop pushes other farming onto new land. ICAO estimates these with economic models, so producers use ICAO's **default ILUC values** rather than their own.
- **Emission credits.** For fuels made from municipal solid waste (MSW), a landfill emissions credit (LEC) and a recycling emissions credit (REC) may be subtracted under specific rules.

### Life cycle stages included in the core LCA

The system boundary covers the full supply chain of fuel production and use:

1. Feedstock production at source, such as crop cultivation
2. Conditioning at source: harvesting, collection and recovery
3. Feedstock processing and extraction
4. Feedstock transportation to processing and fuel production sites
5. Feedstock-to-fuel conversion
6. Fuel transportation and distribution
7. Fuel combustion in an aircraft engine

For stages 1 to 6, methane (CH₄), nitrous oxide (N₂O) and non-biogenic CO₂ are counted and converted to CO₂e using 100-year global warming potentials. For stage 7, only non-biogenic CO₂ is counted.

Ongoing operational emissions are included, together with inputs such as chemicals, electricity and natural gas. One-time emissions from building plants or manufacturing equipment are excluded.

### Boundaries are not identical for every pathway

The same framework applies to every fuel, but what goes into each stage differs:

- **Wastes, residues and by-products**, such as used cooking oil or forestry residues, are treated as having zero emissions at the production step. Emissions from collection onwards (stages 2 to 7) are still counted, and these feedstocks receive an ILUC value of zero.
- **Crop-based feedstocks** carry cultivation emissions and a default ILUC value. The ILUC value can be zero if certified low land use change risk practices apply, such as yield increases or use of unused or degraded land.
- **Land converted after 1 January 2008** needs a direct land use change (DLUC) calculation. If the DLUC value is higher than the default ILUC value, it replaces the ILUC value.
- **Lower carbon aviation fuels (LCAF)**, which are fossil-based, have their own chapter in the ICAO methodology.

## How Are Actual Life Cycle Emissions Values Calculated?

A producer calculating an actual core LCA value generally works through these steps.

1. **Identify the feedstock and pathway.** Confirm the feedstock's category (main product, by-product, residue or waste) and the conversion process. These decide which stages and ILUC treatment apply.
2. **Collect primary activity data.** Gather measured inputs and outputs from the producer's own operations for each stage: yields, fertiliser use, fuel and power consumption, and process inputs.
3. **Quantify energy use in production.** Record electricity, heat, hydrogen and natural gas used to convert feedstock into fuel.
4. **Add transport emissions.** Account for distances, transport modes and loads for feedstock and finished fuel.
5. **Include processing and conversion emissions**, including direct process emissions and emissions from chemicals and catalysts.
6. **Apply documented emission factors** to each energy and material input, and record the source of every factor.
7. **Allocate between co-products.** When a plant also makes renewable diesel, naphtha, electricity or other products, emissions are shared out by **energy content (LHV)**. No emissions are allocated to wastes, residues and by-products of the fuel's own supply chain.
8. **Calculate and report the result.** Express the core LCA value in gCO₂e/MJ, then add the applicable ILUC (or DLUC) value and subtract any approved credits to get LSf.

Under certification scheme rules that apply the ICAO methodology, LSf cannot fall below zero after landfill or recycling credits are subtracted.

### Illustrative example (hypothetical figures)

These figures are invented to show the arithmetic and are not ICAO values. Suppose a waste-based SAF has a calculated actual core LCA value of 30 gCO₂e/MJ. Its ILUC value is zero because the feedstock is a waste.

- LSf = 30 + 0 = 30 gCO₂e/MJ
- Life cycle saving against the jet fuel baseline = (89 − 30) ÷ 89 ≈ **66%**

That is above the 10% minimum, so this criterion would be met. The fuel would still need to meet CORSIA's other sustainability criteria and be certified. When an airline claims the fuel, the emissions reduction it can deduct depends on the mass of fuel claimed, ICAO's fuel conversion factor and the ratio LSf ÷ 89. The lower the LSf, the larger the reduction.

## Actual vs Default Life Cycle Emissions Values Under CORSIA

ICAO publishes default values in its document *CORSIA Default Life Cycle Emissions Values for CORSIA Eligible Fuels*. A default must match the fuel's feedstock, conversion process, ILUC region (where relevant) and pathway specifications.

An actual core LCA value can be used when a producer can show **lower** core emissions than the default, or when its pathway **has no default value**.

| Factor | Actual life cycle emissions value | Default life cycle emissions value |
|---|---|---|
| Source | Calculated from the producer's own supply chain | Published by ICAO for a pathway |
| What it covers | Core LCA only; ILUC still uses ICAO defaults or zero where allowed | Core LCA and ILUC values listed per pathway |
| Data needed | Detailed primary data for every stage | Evidence that the fuel matches the pathway |
| Effort and cost | High: modelling, technical report, audit | Lower: matching and documentation |
| When used | Producer can show lower emissions, or no default exists | Standard pathway with an existing default |
| Typical outcome | Rewards efficient, low-carbon operations | Conservative figure for the average pathway |

Results differ between pathways because feedstocks, processing energy, hydrogen sources, transport distances and co-product mixes all vary. Two plants using the same technology can produce different actual values.

## Data, Documentation and Verification Requirements

An actual value is only as good as its evidence. Producers typically need:

- **Feedstock origin and traceability.** Proof of where the feedstock came from and how it is classified, especially for waste and residue claims.
- **Production and energy records.** Metered energy use, process inputs and output quantities for all products and co-products.
- **Transport information.** Routes, modes, distances and load data for feedstock and fuel.
- **Pathway documentation.** A description of the conversion technology and its system boundary.
- **Data quality and consistency.** Recent, representative data, with documented emission factors and assumptions that another person could reproduce.

Under ICAO-approved Sustainability Certification Schemes (SCS), such as ISCC, the producer documents this in a technical report. The report sets out emissions by stage and gas, inventory data, emission factors and their sources, feedstock characteristics, and product quantities. An accredited certification body audits it, and information on emissions passes along the chain of custody.

The airline that claims the fuel then reports it to its State, with documentation on the fuel's sustainability and LSf. Exact certification and verification procedures are set by ICAO's rules and by each approved scheme, so check the current versions before starting a calculation.

## Why Accurate Life Cycle Emissions Calculations Matter for CORSIA Compliance

Accurate calculations affect both eligibility and value:

- **Eligibility.** A fuel that does not meet the 10% life cycle reduction cannot count as a CORSIA eligible fuel. Not every SAF pathway or batch qualifies automatically.
- **Size of the claim.** A lower, well-evidenced LSf gives a bigger reduction in the airline's offsetting requirement and reduces the number of emissions units it must cancel. Our guide to the [CORSIA Carbon Offsetting and Reduction Scheme](/blog/corsia-carbon-offsetting-and-reduction-scheme/) explains how that requirement is set.
- **Audit risk.** A claim based on weak data can be rejected, leaving the airline short on compliance.
- **Market trust.** Transparent methods and records protect against double claiming and keep SAF claims credible.

For most airlines, SAF reduces the offsetting requirement but does not remove it. Any remaining requirement is met with [CORSIA-eligible emissions units](/knowledge-base/corsia-eligible-units-checklist/). Our explainer on [CORSIA compliance for airlines](/knowledge-base/corsia-explained-for-airlines/) shows how fuel claims and unit cancellations fit together. The [CORSIA compliance calendar](/knowledge-base/corsia-compliance-calendar/) shows where each task falls in the year.

## Frequently Asked Questions

::: accordion What are actual life cycle emissions values under CORSIA?
They are life cycle greenhouse gas intensities, in gCO₂e/MJ, calculated from a fuel producer's own supply chain data using ICAO's methodology, instead of ICAO's published default values.
:::

::: accordion How does CORSIA calculate life cycle emissions for Sustainable Aviation Fuel?
It adds a core LCA value covering seven stages from feedstock production to combustion, plus an induced land use change (ILUC) value. For municipal solid waste fuels, approved landfill or recycling credits are then subtracted. The result, LSf, is compared with the 89 gCO₂e/MJ jet fuel baseline.
:::

::: accordion What is the difference between actual and default life cycle emissions values?
Default values are standard figures that ICAO publishes for each pathway. Actual values are calculated from the producer's own data and can be used when they show lower core emissions or when no default exists. ILUC always comes from ICAO's values, or is zero where the rules allow.
:::

::: accordion Which emissions are included in the CORSIA life cycle assessment?
CH₄, N₂O and non-biogenic CO₂ from feedstock production, collection, processing, transport, fuel conversion and distribution, plus non-biogenic CO₂ from combustion. One-time construction emissions are excluded.
:::

::: accordion Why is feedstock traceability important in CORSIA calculations?
The feedstock's classification decides whether production-stage emissions and ILUC apply. Wastes and residues receive zero for both, so auditors need proof of origin to prevent false claims and double counting.
:::

::: accordion How do actual life cycle emissions values affect CORSIA SAF eligibility?
A fuel must show at least 10% lower life cycle emissions than the fossil baseline and meet the other CORSIA sustainability criteria. A lower verified LSf also increases the emissions reduction an airline can claim.
:::

## Key Takeaways

The CORSIA Methodology for Calculating Actual Life Cycle Emissions Values lets SAF producers prove the real carbon performance of their supply chains instead of relying on conservative defaults. The method is precise: seven life cycle stages, energy-based allocation, ICAO-set land use change values and strict rules on credits. Every figure has to be supported by traceable, audited data.

For airlines, that evidence turns fuel purchases into recognised CORSIA reductions. For producers, it rewards cleaner operations. To learn more about how fuel claims and emissions units work together, explore the CORSIA compliance and carbon credit resources at [CORSIA Carbon Credit](/).

### Sources

- [ICAO – CORSIA Methodology for Calculating Actual Life Cycle Emissions Values (November 2025)](https://www.icao.int/sites/default/files/environmental-protection/CORSIA/Documents/CORSIA%20Eligible%20Fuels/ICAO-document-07-Methodology-for-Actual-Life-Cycle-Emissions-November-2025.pdf)
- [ICAO – CORSIA Supporting Document: CORSIA Eligible Fuels, Life Cycle Assessment Methodology](https://www.icao.int/sites/default/files/environmental-protection/CORSIA/Documents/CORSIA%20Eligible%20Fuels/CORSIA_Supporting_Document_CORSIA-Eligible-Fuels_LCA_Methodology_V8.pdf)
- [ICAO ACT-SAF Series 10 – ICAO methodologies for core LCA](https://www.icao.int/sites/default/files/environmental-protection/Documents/ACT-SAF/ACT-SAF-Series-10-ICAO-methodologies-for-Core-LCA.pdf)
- [ICAO ACT-SAF Series 20 – Updated CORSIA default LCA values](https://www.icao.int/sites/default/files/environmental-protection/Documents/ACT-SAF/ACT-SAF-series-20-Updated-CORSIA-default-LCA-values.pdf)
- [ICAO – Lower carbon aviation fuels](https://www.icao.int/lower-carbon-aviation-fuels)
- [ISCC – ISCC CORSIA 205 Life Cycle Emissions, Version 2.0](https://www.iscc-system.org/wp-content/uploads/2023/12/ISCC_CORSIA_205_Life_Cycle_Emissions_2.0.pdf)
