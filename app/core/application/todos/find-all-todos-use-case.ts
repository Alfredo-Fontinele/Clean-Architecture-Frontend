import { Todo } from "../../domain/entities/todo"
import { ITodoRepository } from "../../domain/repositories/todo-repository"

export class FindAllTodosUseCase {
  constructor(private todoRepository: ITodoRepository) {}

  async execute(): Promise<Todo[]> {
    return await this.todoRepository.findAll()
  }
}
