# Prompthaus Recruiting

[![Agent Plugins](https://img.shields.io/badge/Agent%20Plugins-1.0.0-blue)](https://agent-plugins.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

[![Add MCP to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en/install-mcp?name=prompthaus-talent&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsImdpdGh1Yjp0aW1la2VlcHVyL1Byb21wdGhhdXMtcmVjcnVpdGluZyJdLCJlbnYiOnsiUFJPTVBUSEFVU19BUElfQkFTRSI6Imh0dHBzOi8vcHJvbXB0aGF1c2FwcC5jb20ifX0%3D)

Portable [Agent Plugins](https://agent-plugins.org) package for verified talent search over Prompthaus Skills Wallets.

Measurable AI skills pay up to 62% more when people can prove them (PwC 2026 Global AI Jobs Barometer). **Search quiz-backed Skills Wallets across 16+ career pathways**, ranked by North Star fit, **pathway completions**, literacy credentials, career evidence, and projects. Every match includes a recruiter link for human review.

## Skills

| Skill | When |
|-------|------|
| `role-scoping` | Before search — stack-rank skills and characteristic questions |
| `talent-search` | After scoping — search + top profile pulls |
| `recruiter-fit` | Fit report for a role |

## Pathway coverage

Natural-language search resolves roles across Prompthaus career pathways, including:

| Cluster | Pathways |
|---------|----------|
| Software & AI | Software Engineer, AI Engineer, Forward Deployed Engineer, Prompt Engineer, Frontend Engineer, AI Code Reviewer, AI QA Specialist |
| Product & GTM | Product Manager, GTM Growth Engineer, GTM Strategy & Operations |
| Industry & ops | Automotive Software Engineer, Defense Manufacturing Technician, Energy Operations Engineer |
| Finance & markets | Finance Analyst, Market Operations Analyst, Trade Surveillance Analyst |
| Life sciences | Computational Genomics Scientist, Biomedical AI Engineer |

Full pathway list: [prompthausapp.com/pathways](https://prompthausapp.com/pathways)

## Install in Cursor

### One-click MCP (tools only)

Click **Add MCP to Cursor** above. Cursor installs `talent_search` and `profile_get` via `npx` from this repo. No API keys required for light use.

Requires [Cursor](https://cursor.com/) installed. If the button does nothing, open Cursor once so the URL handler registers, then retry.

### Full Agent Plugin (tools + skills)

1. Clone this repo or install from the [Cursor Marketplace](https://cursor.com/marketplace) (search **Prompthaus**).
2. In Cursor: **Customize** → **Add Agent Plugin** → select this directory.
3. Optional: set `PROMPTHAUS_API_KEY` in plugin env for **identified** tier (higher rate limits + full fitSummary). Invalid keys return `401` — they are not silently treated as anonymous.
4. Partner keys (issued by Prompthaus) unlock the highest limits and completion statement details on `profile_get`.

Dictionary / learn term pages stay public and are not part of this MCP.

No `npm install` required. The MCP server ships as a bundled `mcp/server.mjs`.

## Ask naturally

```
Search Prompthaus for candidates for this role:

[paste job description]
```

Example queries:

- founding PM at an AI startup
- forward deployed engineer
- trade surveillance analyst
- energy operations engineer
- GTM growth engineer
- biomedical AI engineer
- computational genomics scientist

The agent calls `talent_search`, then `profile_get` for top slugs, and returns `recruiterUrl` + `fitSummary`.

## MCP tools

| Tool | REST equivalent |
|------|-----------------|
| `talent_search` | `GET /api/talent/search?q=&pathway=&limit=` |
| `profile_get` | `GET /api/profiles/{slug}` |

## Environment variables

| Variable | Required | Default |
|----------|----------|---------|
| `PROMPTHAUS_API_BASE` | No | `https://prompthausapp.com` |
| `PROMPTHAUS_API_KEY` | No | Per-integrator or legacy shared key; identified/partner tiers |

## ChatGPT users

This plugin targets Agent Plugins clients (Cursor, VS Code, Copilot, etc.). For ChatGPT, use a **Custom GPT with Actions**. See [talent.md](https://prompthausapp.com/talent.md#chatgpt-custom-gpt-setup).

## Develop

```bash
npm install
npm run build   # bundles mcp/server.mjs
```

## Links

- [For recruiters](https://prompthausapp.com/for-recruiters)
- [Agents API docs](https://prompthausapp.com/agents)
- [talent.md](https://prompthausapp.com/talent.md)
- [OpenAPI](https://prompthausapp.com/api/openapi)

## License

MIT. See [LICENSE](LICENSE).
