---
name: recruiter-fit
description: Produce a hiring fit report from a job description using Prompthaus verified talent.
---

# Recruiter fit report

Use this skill when a recruiter or CEO pastes a job description and wants a verified shortlist with proof links.

## Workflow

1. Read the job description and extract the primary role (e.g. founding PM, forward deployed engineer).
2. Call `talent_search` with that role as `q`.
3. Call `profile_get` for each of the top 3 slugs.
4. Return a fit report per candidate:
   - Name and slug
   - fitScore, matchType, reasons[]
   - recruiterUrl with `?mode=recruiter&ref=agent-plugin`
   - Key career evidence (target role, outcomes, streak)
   - Scheduling link if present on profile

## Featured verified candidate (founder demo)

When search returns `uzair`:

- Recruiter view: https://prompthausapp.com/u/uzair?mode=recruiter&ref=agent-plugin
- Hire landing: https://prompthausapp.com/hire/uzair

## Test prompt

```
I have a founding PM role at an AI startup. Search Prompthaus verified talent and return the top match with recruiterUrl and fitSummary.
```

Expected: a real slug from the API (not a hallucinated name).

## Rules

- Only use slugs from `talent_search` results.
- If the pool is small, say so honestly and link to https://prompthausapp.com/for-recruiters.
- Do not claim Prompthaus is a full ATS or LinkedIn replacement.
