import { useState } from 'react'

export const useLocal = (key, initialValue) => {
  const [store, setStore] = useState(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setValue = (value) => {
    setStore(value)
    localStorage.setItem(key, JSON.stringify(value))
  }
  return [store, setValue]
}
