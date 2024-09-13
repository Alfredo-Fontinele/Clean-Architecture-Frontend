import { Todo, TodoHTTPResponse } from "@/app/core/domain/entities/todo"
import { HttpClient } from "../http-client"
import { TodoMapper } from "../mappers/todo-mapper"

export class TodoHttpGateway implements TodoHttpGateway {
  constructor(private httpClient: HttpClient) {}

  async findAll(): Promise<TodoHTTPResponse[]> {
    const response = await this.httpClient.request<TodoHTTPResponse[]>({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/todos",
    })

    const todos: Todo[] = response.map((todo) => new Todo(todo, todo.id))

    return todos.map(TodoMapper.toHTTP)
  }
}
