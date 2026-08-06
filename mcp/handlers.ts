import { createClientConfig, prompthausFetch, type PrompthausClientConfig } from "./config"

export type TalentSearchArgs = {
  q: string
  pathway?: string
  limit?: number
}

export type ProfileGetArgs = {
  slug: string
}

export async function handleTalentSearch(
  args: TalentSearchArgs,
  configOverrides?: Partial<PrompthausClientConfig>,
): Promise<{ content: Array<{ type: "text"; text: string }>; isError?: boolean }> {
  const config = createClientConfig(configOverrides)
  const params = new URLSearchParams()
  params.set("q", args.q)
  if (args.pathway) params.set("pathway", args.pathway)
  if (args.limit != null) params.set("limit", String(args.limit))

  const response = await prompthausFetch(config, `/api/talent/search?${params.toString()}`)

  if (!response.ok) {
    const body = await response.text()
    return {
      isError: true,
      content: [
        {
          type: "text",
          text: `Talent search failed (${response.status}): ${body}`,
        },
      ],
    }
  }

  const data = await response.json()
  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(data, null, 2),
      },
    ],
  }
}

export async function handleProfileGet(
  args: ProfileGetArgs,
  configOverrides?: Partial<PrompthausClientConfig>,
): Promise<{ content: Array<{ type: "text"; text: string }>; isError?: boolean }> {
  const config = createClientConfig(configOverrides)
  const slug = args.slug.trim().toLowerCase()
  const response = await prompthausFetch(config, `/api/profiles/${encodeURIComponent(slug)}`)

  if (!response.ok) {
    const body = await response.text()
    return {
      isError: true,
      content: [
        {
          type: "text",
          text: `Profile fetch failed (${response.status}): ${body}`,
        },
      ],
    }
  }

  const data = await response.json()
  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(data, null, 2),
      },
    ],
  }
}
