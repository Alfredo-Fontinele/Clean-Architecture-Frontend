import { AxiosAdapter } from "./axios-adapter"
import { FetchAdapter } from "./fecth-adapter"

export const axiosAdapter = new AxiosAdapter()
export const fetchAdapter = new FetchAdapter()

export const Adapters = {
  axiosAdapter,
  fetchAdapter,
}
