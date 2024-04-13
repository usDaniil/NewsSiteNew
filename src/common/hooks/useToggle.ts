import { useReducer } from 'react'

type UseToggle = (initial?: boolean) => [open: boolean, toggle: () => void]

export const useToggle: UseToggle = (initial = false) => {
  return useReducer((open) => !open, initial)
}
