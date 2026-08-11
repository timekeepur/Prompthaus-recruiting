import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js"
import { z } from "zod"
import { handleProfileGet, handleTalentSearch } from "./handlers"

const server = new McpServer({
  name: "prompthaus-talent",
  version: "1.0.0",
})

server.tool(
  "talent_search",
  "Search Prompthaus verified public talent by role or pathway across 18 career pathways (PM, engineering, GTM, finance, energy, defense, markets, life sciences / genomics / biomedical AI, and more). Returns ranked slugs with recruiterUrl and fitSummary. Never invent slugs; only use slugs from this response.",
  {
    q: z
      .string()
      .min(1)
      .describe(
        "Role need from job description (e.g. founding PM, forward deployed engineer, trade surveillance analyst, energy operations)",
      ),
    pathway: z
      .string()
      .optional()
      .describe(
        "Optional explicit pathway ID (e.g. product-manager, ai-engineer, gtm-growth-engineer, finance-analyst)",
      ),
    limit: z.number().int().min(1).max(25).optional().describe("Max results (default 10)"),
  },
  async (args) => handleTalentSearch(args),
)

server.tool(
  "profile_get",
  "Fetch a public Prompthaus literacy record and career evidence by slug. Use recruiterUrl from search results for hiring review.",
  {
    slug: z
      .string()
      .min(1)
      .describe("Candidate slug from talent_search results only — never invent slugs"),
  },
  async (args) => handleProfileGet(args),
)

async function main() {
  const transport = new StdioServerTransport()
  await server.connect(transport)
}

main().catch((error: unknown) => {
  console.error(error)
  process.exit(1)
})
