export type PrompthausClientConfig = {
  apiBase: string
  apiKey?: string
  fetchFn: typeof fetch
}

export function createClientConfig(overrides?: Partial<PrompthausClientConfig>): PrompthausClientConfig {
  const apiBase = (overrides?.apiBase ?? process.env.PROMPTHAUS_API_BASE ?? "https://prompthausapp.com").replace(
    /\/$/,
    "",
  )
  const apiKey = overrides?.apiKey ?? process.env.PROMPTHAUS_API_KEY

  return {
    apiBase,
    apiKey,
    fetchFn: overrides?.fetchFn ?? fetch,
  }
}

function buildHeaders(config: PrompthausClientConfig): HeadersInit {
  const headers: Record<string, string> = {
    Accept: "application/json",
  }
  if (config.apiKey) {
    headers["X-API-Key"] = config.apiKey
  }
  return headers
}

export async function prompthausFetch(
  config: PrompthausClientConfig,
  path: string,
): Promise<Response> {
  const url = `${config.apiBase}${path}`
  return config.fetchFn(url, { headers: buildHeaders(config) })
}
