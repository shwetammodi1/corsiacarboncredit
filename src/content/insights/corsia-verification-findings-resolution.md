---
title: "After the Verifier's Findings: Closing CORSIA Findings So They Stay Closed"
excerpt: "A CORSIA verification with findings is normal; the same findings returning next year is not. What each finding type demands, a worked tracker separating correction from root cause, and the findings that signal a wider problem."
date: "2026-08-30"
topic: "Airline Compliance"
tags: ["CORSIA verification findings","non-conformity","material misstatement","corrective action","root cause analysis","scope limitation","verification opinion"]
image: "/images/corsia-consultant/corsia-verification-findings.svg"
---

The draft findings arrive, and the first reaction in most compliance teams is some version of alarm. It is usually misplaced. A first verification with no findings at all is less common than one with several. The number matters much less than two other things: how each finding is classified, and whether the response fixes the reason it happened.

Where operators get into real difficulty is the second year, when last year's findings come back.

![Types of CORSIA verification finding and their consequences](/images/corsia-consultant/corsia-verification-findings.svg)

## Read the classification before anything else

Each type asks for something different. Open the one you are dealing with.

::: accordion Scope limitation: the most serious, and the least understood
This is not the verifier saying your data is wrong. It is the verifier saying it could not get the evidence it needed to reach an opinion at all. A misstatement can be corrected. A limitation can stop the report being signed, which makes it worse than a material misstatement.

Act on it at once. Pin down exactly which evidence was missing and why, then either produce it or change the process so it will exist next year. Typical causes: source records that were never kept; a system switched off without its data being exported; third-party records, such as a handling agent's dockets, that the operator never collected.
:::

::: accordion Material misstatement: an error above the threshold
Correct the figure, restate the part of the report it affects, and have the verifier re-examine it.

Do not argue materiality without a real basis. The threshold is set; the error is above it or it is not. The more useful question is how an error that large got into the report. A material misstatement nearly always points to a control that failed, not a one-off slip.
:::

::: accordion Non-conformity: practice departed from the plan
There are two legitimate responses. Choose deliberately.

**Bring practice back into line** when the plan describes what you should be doing and the team drifted. This is the usual case.

**Revise the plan** when practice changed for good reason and the plan is now stale. A plan describing a system replaced eighteen months ago should be updated, not worked around.

Leaving both as they are and hoping is not an option. The same non-conformity will be raised again, and a repeat is treated much more seriously.
:::

::: accordion Immaterial misstatement: an error below the threshold
Correct it where practical; otherwise record it and fix the cause.

Watch for clusters. Several small errors of the same kind point to a systematic problem, and together they can cross the threshold that none crosses alone.
:::

::: accordion Observation: no action required, but read it
Nothing is mandatory. Read observations closely anyway. They are often a verifier's early warning of next year's finding: a process that works but depends on one person, or documents that are fine today and will not be after a planned change.
:::

## Two lines for every finding

The habit that separates operators who improve from those who repeat is simple. For each finding, write two separate lines:

- **The correction**: what fixes this year's number.
- **The root cause fix**: what stops it happening again.

Give each its own owner and date. A correction is usually a task measured in days. A root cause fix may mean changing a contract or a system, a project measured in months. Merge them into one line and the structural work quietly never happens.

## A worked tracker

Illustrative. After its first verification, an Indian operator flying to the Gulf and South-East Asia received these findings. Here is how we helped lay out the tracker.

| Ref | Finding and severity | Correction (owner, when) | Root cause fix (owner, when) | Evidence the fix is in place | Checked before next cycle |
|---|---|---|---|---|---|
| F1 | Fuel for three flights not traceable to source. Immaterial misstatement | Obtain dockets, confirm figures (fuel analyst, 2 weeks) | Handling agent at one outstation sends no dockets for ad hoc sectors; add a docket clause to the handling agreement (ground ops, 3 months) | Signed agreement amendment; first three months of dockets received | |
| F2 | Two positioning flights missing from the report. Non-conformity | Add flights, restate (compliance lead, 1 week) | Flight list built from the commercial schedule; switch the source to operational movement records (IT and flight ops, 2 months) | Revised extract logic; monthly completeness check showing zero gaps | |
| F3 | Gap-filling method used differs from the plan. Non-conformity | Re-apply the plan's method to affected flights (fuel analyst, 1 week) | New method is better; revise the plan and resubmit (compliance lead, 6 weeks) | Accepted plan revision with date | |
| O1 | Reconciliation understood by one analyst only. Observation | None required | Write down the rules; train a second analyst (compliance lead, 2 months) | Written rules; second analyst traces a figure unaided | |

The last column is empty on purpose. It is the one teams leave out, and it is the one that stops repeats. A finding marked closed in April, never looked at again, and raised the following February was never closed. It was only recorded as closed.

About three months before the next verification, take each line and test whether the fix is still working. Fixes decay: a manual step lapses when someone changes job, a rule gets skipped under deadline pressure, a system update reverts a setting.

Report progress to whoever owns the CORSIA obligation, not only to the project team. Findings that live with a data analyst, invisible to anyone senior, are the ones that come back. See [board reporting and governance](/insights/corsia-board-reporting-and-governance/).

## Why repeats are so damaging

When a finding is raised, reported as closed, and raised again, the verifier draws one of two conclusions: the fix was cosmetic, or the organisation cannot keep a fix in place. Either one casts doubt on everything else in the report, because it undermines confidence in the control environment as a whole. That is how a technical issue becomes a credibility problem, with the verifier and potentially with the authority.

## Findings that are really about something bigger

Some findings are symptoms. Ask of each one: is this a one-off or an example of a pattern?

- **Several unrelated traceability findings** mean the audit trail is weak generally, not that a few records went astray.
- **A completeness finding** usually means the flight list comes from a commercial source rather than an operational one. It will keep missing positioning legs and ad hoc sectors, however carefully this year's gap is patched. F2 above is the classic case.
- **Repeated reconciliation findings** point to rules that are missing or ignored: a governance problem more than a data one.
- **A plan conformity finding** raises the question of what else has drifted. If one area moved without anyone noticing, the plan has probably not been checked against practice for a while.
- **A finding traced to one person's absence** is key-person risk under another name.

Treat a pattern as a one-off and you will be back here next year.

## Dealing with the verifier

- **Understand the finding before answering.** Ask for the specific evidence and reasoning. A finding that looks wrong has often been misread.
- **Accept a valid finding.** Disputing one costs credibility for later years, and verifiers record disputes.
- **Challenge with evidence** when a finding rests on a misunderstanding of your operation. Verifiers will reconsider a documented position, and will withdraw a finding that turns out to be factually wrong.
- **Respond quickly and fully.** Partial answers drag the process out and eat your schedule margin.
- **Keep all the correspondence.** It is part of the record supporting closure.

If you and the verifier still disagree on something substantive, there are escalation routes through the verifier's own process and its accreditation body. Use them sparingly.

## Build the margin in advance

Plan on findings. If verification ends the week before the national deadline, there is no room to correct and re-verify a material issue. Aim to finish four to six weeks ahead. The margin is seldom wasted, and when it is needed it is the difference between a technical problem and a compliance failure. Response timetables are set by the verifier's process and your submission date, so agree them when you appoint the verifier, not in the middle of fieldwork. Our [guide to choosing a verification body](/insights/corsia-verification-body-selection-india/) covers that appointment.

## Short answers

**Does a finding make us non-compliant?** Not in itself. Findings corrected before the opinion is issued are part of a normal verification. Unresolved material issues are different.

**How do we get fewer next year?** Fix root causes, check last year's closures held, and rehearse beforehand. See [running your own audit first](/insights/corsia-internal-audit-preparation/).

If you have a findings list in front of you now, [share it with the desk](/contact/). We will help you separate the corrections from the root causes and flag any finding that looks like part of a pattern.
