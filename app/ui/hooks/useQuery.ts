"use client"

import { useEffect, useState } from "react"

type UseQueryProps<T> = {
  queryFn: () => Promise<T>
}

type UseQueryResponse<T> = {
  data: T | null
  isLoading: boolean
  error: string
}

export function useQuery<T>({
  queryFn,
}: UseQueryProps<T>): UseQueryResponse<T> {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<string>("")

  useEffect(() => {
    ;(async () => {
      try {
        const result = await queryFn()
        setData(result)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [queryFn])

  return {
    data,
    isLoading,
    error,
  }
}
