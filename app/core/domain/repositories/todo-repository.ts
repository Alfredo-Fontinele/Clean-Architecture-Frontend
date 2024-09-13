import { Todo } from "../entities/todo"

export interface ITodoRepository {
  findAll(): Promise<Todo[]>
}
