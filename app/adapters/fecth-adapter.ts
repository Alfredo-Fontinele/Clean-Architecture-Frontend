import { HttpClient, RequestHttpClient } from "../infra/http/http-client"

export class FetchAdapter implements HttpClient {
  async request<T>(payload: RequestHttpClient): Promise<T> {
    const response = await fetch(payload.url, {
      method: payload.method,
    })

    return await response.json()
  }
}
