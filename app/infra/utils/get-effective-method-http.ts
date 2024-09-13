import {
  MethodHttpClient,
  MethodHttpClientLowerCase,
} from "../http/http-client"

export const getEffectiveMethodHttp = (
  method: MethodHttpClient
): MethodHttpClientLowerCase => {
  const OPTIONS_METHOD: Record<MethodHttpClient, MethodHttpClientLowerCase> = {
    GET: "get",
    POST: "post",
    PUT: "put",
    PATCH: "patch",
    DELETE: "delete",
  }
  return OPTIONS_METHOD[method]
}
