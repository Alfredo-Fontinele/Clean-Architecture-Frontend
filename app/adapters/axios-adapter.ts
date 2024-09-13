import axios, { AxiosInstance } from "axios"
import { HttpClient, RequestHttpClient } from "../infra/http/http-client"
import { getEffectiveMethodHttp } from "../infra/utils/get-effective-method-http"

export class AxiosAdapter implements HttpClient {
  private axiosClient: AxiosInstance

  constructor() {
    this.axiosClient = axios.create()
  }

  async request<T>(payload: RequestHttpClient): Promise<T> {
    const effectiveMethod = getEffectiveMethodHttp(payload.method)

    const { data } = await this.axiosClient[effectiveMethod](payload.url)

    return data
  }
}
