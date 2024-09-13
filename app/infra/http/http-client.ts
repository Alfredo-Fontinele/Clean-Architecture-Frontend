export type MethodHttpClientLowerCase = "post" | "get" | "patch" | "put" | "delete"; // prettier-ignore

export type MethodHttpClient = "POST" | "GET" | "PATCH" | "PUT" | "DELETE"

export type RequestHttpClient = {
  method: MethodHttpClient
  url: string
}

export type HttpClient = {
  request<T>(payload: RequestHttpClient): Promise<T>
}
