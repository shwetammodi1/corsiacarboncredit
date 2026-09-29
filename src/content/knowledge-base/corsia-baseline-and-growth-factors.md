---
title: "CORSIA Baseline and Growth Factors: Sectoral vs Individual"
excerpt: "How the 2019 baseline was set, why it changed, and how the sectoral and individual growth factors convert your emissions into an offsetting obligation — including why a shrinking airline can still owe offsets."
section: "Obligations & Calculation"
order: 6
image: "/images/corsia/corsia-growth-factors.svg"
---

The growth factor is the number that turns your emissions into an obligation. Understanding how it is derived explains several results that otherwise look wrong — most notably, why an airline that carried fewer passengers than last year can still owe offsets.

![Sectoral and individual growth factors](/images/corsia/corsia-growth-factors.svg)

## The Baseline

The baseline is the emissions level above which growth is offset.

It was originally defined in Resolution A39-3 as the **average of 2019 and 2020** international aviation CO2 emissions. The 2020 traffic collapse made that unusable: averaging a normal year with a catastrophic one would have set the reference far below any plausible future activity, inflating every subsequent obligation for reasons unconnected to climate policy.

In 2020 the ICAO Council **reset the baseline to 2019 emissions alone**.

> That change is the clearest available evidence that CORSIA's parameters respond to circumstances. A model assuming today's settings hold unchanged through 2035 is assuming something the scheme's own history contradicts.

The baseline is a **sector-wide** figure, not a per-operator one. Individual operators do not each have their own 2019 baseline in the early phases — the sector does.

## The Sectoral Growth Factor

The sectoral growth factor answers one question: **by what proportion have total covered aviation emissions grown above the 2019 baseline?**

Conceptually:

> Sectoral Growth Factor = (sector covered emissions in year Y − 2019 baseline) ÷ sector covered emissions in year Y

If the sector emitted 6% more than the baseline, the factor is roughly 6%, and every operator offsets 6% of its own covered emissions.

Two consequences follow, and both surprise people.

::: accordion An operator that shrank can still owe offsets
Your emissions determine your **share** of the burden. The sector's growth determines its **size**.

If the sector grew 8% while your own emissions fell 3%, you still offset 8% of your covered emissions. You simply offset 8% of a smaller number than last year.

This is deliberate. A pure sectoral approach spreads the cost of sector growth across all participants rather than pinning it on whoever happens to be expanding, which was the political compromise that made agreement possible.
:::

::: accordion The 2021 factor was zero
Sector emissions in 2021 remained well below the 2019 baseline, so there was no growth to offset and the sectoral growth factor was zero.

The pilot phase therefore imposed almost no cost. Operators who used it to build monitoring, data reconciliation and registry capability got a free rehearsal. Those who treated it as a paperwork exercise are learning the same lessons now, with real money attached.
:::

## The Individual Growth Factor

From 2030 the calculation shifts weight toward each operator's **own** growth relative to the baseline.

| Period | Sectoral weight | Individual weight |
|---|---|---|
| 2021-2029 | 100% | 0% |
| 2030-2032 | 85% | 15% |
| 2033-2035 | 70% | 30% |

The blended factor for an operator becomes:

> Factor = (sectoral weight × sectoral growth factor) + (individual weight × individual growth factor)

A carrier growing faster than the sector sees a blended factor above the sectoral one. A carrier growing more slowly sees one below it.

The intent is to remove the free ride a purely sectoral approach gives to fast growers. The practical effect is that **fleet and network expansion carries a CORSIA cost that rises after 2030**, and that cost belongs in the fleet planning model rather than arriving as a surprise.

For fast-growing markets — India prominently among them — this is the single most consequential design feature in the second phase. See [CORSIA in India](/knowledge-base/corsia-in-india/).

## Worked Illustration

Figures are illustrative, chosen to show the mechanics rather than predict anyone's obligation.

An operator has **320,000 tonnes** of covered emissions in a year.

| Scenario | Sectoral GF | Individual GF | Weights | Blended | Obligation |
|---|---|---|---|---|---|
| 2028, sector +6% | 6% | n/a | 100 / 0 | 6.0% | 19,200 t |
| 2031, sector +6%, operator +12% | 6% | 12% | 85 / 15 | 6.9% | 22,080 t |
| 2031, sector +6%, operator +2% | 6% | 2% | 85 / 15 | 5.4% | 17,280 t |
| 2034, sector +6%, operator +12% | 6% | 12% | 70 / 30 | 7.8% | 24,960 t |

Two observations. The individual factor moves the number materially — nearly 30% between the fast and slow grower in 2031. And the effect roughly doubles by 2034 as the weighting shifts again.

## What Feeds the Sectoral Factor

The sectoral factor is not an estimate ICAO produces independently. It is built from the verified Annual Emissions Reports that every in-scope operator submits, passed by national authorities to ICAO and aggregated.

This is why the MRV obligation applies to operators who owe no offsets: their data is needed to compute the factor that determines everyone else's obligation. See [CORSIA MRV explained](/knowledge-base/corsia-mrv-explained/).

It also explains the timing. The factor for a year cannot be published until the sector's reports are in and verified, which is why an operator's obligation is not a firm number until well after the year it relates to.

## Forecasting the Factor Before It Is Published

You cannot budget against a number that arrives late. Estimating it is both possible and necessary.

1. Use published industry traffic and fuel data to estimate sector emissions for the year.
2. Compare against the 2019 baseline to derive an approximate sectoral factor.
3. Build a **range**, not a point — low, central and high, with the assumptions stated.
4. From 2030, layer in your own growth against the weighting schedule.
5. Re-run annually as data firms up and as ICAO confirms factors.

A single number in a board paper will be treated as a forecast and will be wrong. A range with stated assumptions survives contact with reality.

## Common Errors

::: accordion Applying the factor to total emissions
The factor applies to **covered** emissions — international flights on route pairs where both States participate — not to everything the airline emits. Applying it to total emissions can overstate the obligation several times over. See [CORSIA scope and thresholds](/knowledge-base/corsia-scope-and-thresholds/).
:::

::: accordion Treating the sectoral factor as your own growth rate
It is not. It measures the sector. Your own trajectory is irrelevant until 2030 and only partially relevant thereafter.
:::

::: accordion Assuming the baseline is per-operator
In the early phases it is a sector-wide reference. Individual growth enters only from 2030, and even then it is blended rather than replacing the sectoral component.
:::

::: accordion Extrapolating a trend through 2027
Second-phase mandatory participation changes **covered emissions**, not the growth factor. The two effects are separate and multiply together. Model route coverage against your actual network rather than applying a percentage uplift to last year's obligation.
:::

## Where to Go Next

- [The offsetting requirement calculation](/knowledge-base/corsia-offsetting-requirement-calculation/) — the full arithmetic
- [CORSIA phases and timeline](/knowledge-base/corsia-phases-and-timeline/) — when the weights change
- [CORSIA MRV explained](/knowledge-base/corsia-mrv-explained/) — the data that feeds the factor
- [CORSIA scope and thresholds](/knowledge-base/corsia-scope-and-thresholds/) — what counts as covered

Growth factors are published by [ICAO](https://www.icao.int/environmental-protection/CORSIA/Pages/default.aspx).

DSTechnoverse models growth factor exposure against actual networks and fleet plans. [Talk to our carbon markets team](/contact/).
