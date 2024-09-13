"use client"

import { TodoHTTPResponse } from "@/app/core/domain/entities/todo"
import { useQuery } from "../../hooks/useQuery"
import { TodoService } from "../../services/todo-service"

export function ListTodos() {
  const { data, isLoading } = useQuery<TodoHTTPResponse[]>({
    queryFn: TodoService.findAll,
  })

  return (
    <ul>
      {isLoading && <div>Carregando...</div>}

      {!!(data && data.length) &&
        data.map((todo) => (
          <li>
            <p>Titulo: {todo.title}</p>
            <p>Id{todo.userId}</p>
          </li>
        ))}
    </ul>
  )
}
