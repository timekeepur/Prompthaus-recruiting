# Prompthaus Recruiting

[![Agent Plugins](https://img.shields.io/badge/Agent%20Plugins-1.0.0-blue)](https://agent-plugins.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Portable [Agent Plugins](https://agent-plugins.org) package for verified talent search over Prompthaus Skills Wallets.

**Search quiz-backed candidates across 16+ career pathways** — ranked by North Star fit, literacy credentials, and career evidence. Returns recruiter links, not resume keyword gaming.

## Pathway coverage

Natural-language search resolves roles across Prompthaus career pathways, including:

| Cluster | Pathways |
|---------|----------|
| Software & AI | Software Engineer, AI Engineer, Forward Deployed Engineer, Prompt Engineer, Frontend Engineer, AI Code Reviewer, AI QA Specialist |
| Product & GTM | Product Manager, GTM Growth Engineer, GTM Strategy & Operations |
| Industry & ops | Automotive Software Engineer, Defense Manufacturing Technician, Energy Operations Engineer |
| Finance & markets | Finance Analyst, Market Operations Analyst, Trade Surveillance Analyst |

Full pathway list: [prompthausapp.com/pathways](https://prompthausapp.com/pathways)

## Install in Cursor

1. Clone this repo or install from the [Cursor Marketplace](https://cursor.com/marketplace) (search **Prompthaus**).
2. In Cursor: **Customize** → **Add Agent Plugin** → select this directory.
3. Optional: set `PROMPTHAUS_API_KEY` in plugin env for higher rate limits.

No `npm install` required — the MCP server ships as a bundled `mcp/server.mjs`.

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
| `PROMPTHAUS_API_KEY` | No | Client-managed; higher rate limits |

## ChatGPT users

This plugin targets Agent Plugins clients (Cursor, VS Code, Copilot, etc.). For ChatGPT, use a **Custom GPT with Actions** — see [talent.md](https://prompthausapp.com/talent.md#chatgpt-custom-gpt-setup).

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

MIT — see [LICENSE](LICENSE).
