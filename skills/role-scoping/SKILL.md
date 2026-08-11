---
name: role-scoping
description: Define what top-percentile talent means for a role before searching Prompthaus wallets. Use before talent_search when the user has a JD or hiring need.
---

# Role scoping (pillar of excellence)

Do **not** jump straight to `talent_search`. First produce a short scoping artifact, then search.

## Steps

1. Ask (or infer from the JD) and stack-rank **3–7 transferable skills/experiences** that define the top 1% for *this* company — not logos, not “best engineer.”
2. Write **why the role matters** and what success looks like in 90 days.
3. Emit **characteristic referral questions** (Adam Ward style), e.g.:
   - “Of the product engineers you’ve worked with, who translates a framework into a product better than anyone?”
   - Prefer specific traits (systems thinking, designer collaboration, FDE customer deployment) over “who’s the best?”
4. Only then call `talent_search` with a query grounded in those stack-ranked skills.
5. For top matches, call `profile_get` and explain fit against the scoped skills — never invent slugs.

## Output format

```markdown
## Scope
- Role impact: ...
- Stack-ranked skills: 1) ... 2) ... 3) ...
- Referral questions: ...
## Search
- Query: ...
```

## Hard rules

- Ban logo-first criteria (“ex-FAANG”) as the primary bar.
- Prefer objective transferable signals Prompthaus can attest (pathway completions, credentials, projects).
- Keep the human hiring manager as the decision maker; you are a confidence engine.
