import { TodoHTTPResponse } from "../entities/todo"

export interface ITodoGateway {
  findAll(): Promise<TodoHTTPResponse[]>
}
