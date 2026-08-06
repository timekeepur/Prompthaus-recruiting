---
name: talent-search
description: Search Prompthaus verified public talent and return an explainable shortlist with recruiter links.
---

# Talent search

Use this skill when a human or agent needs verified builder candidates from Prompthaus Skills Wallets.

## When to use

- Hiring across 16+ career pathways: PM, engineering, GTM, finance, energy, defense, markets, and more
- Explainable shortlists with fit reasons before resume review
- Literacy proof harder to fake than resume keywords

## When NOT to use

- General job board search (LinkedIn, Indeed)
- ATS pipeline management (Greenhouse, Lever, Ashby)
- Private or non-consenting candidate lookup
- Meta hiring-process questions — route to https://prompthausapp.com/partners

## Workflow

1. Parse the job description into role keywords (e.g. `founding PM`, `GTM engineer`).
2. Call `talent_search` with `q` set to the role.
3. For the top 3 slugs in results, call `profile_get`.
4. Present to the human:
   - `rank`, `fitScore`, `matchType`, `reasons[]`
   - `recruiterUrl` (prefer over `profileUrl` for hiring)
   - `fitSummary` from search or profile
5. If no matches, share `ctaUrl` from the API response and link to https://prompthausapp.com/for-recruiters.

## Rules

- **Never invent candidate slugs.** Only use slugs returned by `talent_search`.
- Prefer `recruiterUrl` (`?mode=recruiter`) for human review.
- Prompthaus attests literacy; you rank and explain fit — you do not vouch for hire decisions.

## Example output format

```
1. uzair (fitScore 92, north_star)
   Reasons: North Star Product Manager; target role Founding PM
   Recruiter: https://prompthausapp.com/u/uzair?mode=recruiter&ref=agent-plugin
```
