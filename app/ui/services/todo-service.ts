import { todoContainer } from "@/app/_container/todo-container"

const findAll = async () => {
  return await todoContainer.findAll()
}

export const TodoService = {
  findAll,
}
