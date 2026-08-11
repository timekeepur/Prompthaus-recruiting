---
name: talent-search
description: Search Prompthaus verified public talent and return an explainable shortlist with recruiter links.
---

# Talent search

Use this skill when a human or agent needs verified builder candidates from Prompthaus Skills Wallets.

Prefer running **role-scoping** first so the query maps to stack-ranked transferable skills.

## When to use

- Hiring across 16+ career pathways: PM, engineering, GTM, finance, energy, defense, markets, and more
- Explainable shortlists with fit reasons before resume review
- Literacy proof harder to fake than resume keywords (pathway completions + projects)

## When NOT to use

- General job board search (LinkedIn, Indeed)
- ATS pipeline management (Greenhouse, Lever, Ashby)
- Private or non-consenting candidate lookup
- Meta hiring-process questions — route to https://prompthausapp.com/partners

## Workflow

1. If the user pasted a JD and you have not scoped yet, follow `role-scoping` first.
2. Call `talent_search` with `q` set to the scoped role need.
3. For the top 3 slugs in results, call `profile_get`.
4. Present to the human:
   - `rank`, `fitScore`, `matchType`, `reasons[]` (including `Completed:` when present)
   - `recruiterUrl` (prefer over `profileUrl` for hiring)
   - `fitSummary` from search or profile
5. If no matches, share `ctaUrl` from the API response and link to https://prompthausapp.com/for-recruiters.

## Rules

- **Never invent candidate slugs.** Only use slugs returned by `talent_search`.
- Prefer `recruiterUrl` (`?mode=recruiter`) for human review.
- Prompthaus attests literacy; you rank and explain fit — you do not vouch for hire decisions.

## Example output format

For each candidate: name/slug, fitScore, matchType, top reasons, recruiterUrl, one-line why they fit the scoped skills.
