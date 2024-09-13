import { Adapters } from "../adapters/_index"
import { TodoHttpGateway } from "../infra/http/gateways/todo-http-gateway"

export const todoContainer = new TodoHttpGateway(Adapters.axiosAdapter)
