import { Entity } from "../entity-abstract"

export type TodoProps = {
  userId: number
  title: string
  completed: boolean
}

export type TodoHTTPResponse = {
  id: number
} & TodoProps

export class Todo extends Entity<TodoProps> {
  constructor(props: TodoProps, id?: number) {
    super(props, id)
  }
}
