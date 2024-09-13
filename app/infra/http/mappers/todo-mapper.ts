import { Todo } from "@/app/core/domain/entities/todo"

export class TodoMapper {
  static toHTTP(todo: Todo) {
    return {
      id: todo.id,
      completed: todo.props.completed,
      title: todo.props.title,
      userId: todo.props.userId,
    }
  }
}
