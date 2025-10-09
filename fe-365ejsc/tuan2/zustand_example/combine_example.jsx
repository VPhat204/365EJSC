import { create } from 'zustand'
import { combine } from 'zustand/middleware'

const useUserStore = create(
  combine(
    { name: '', age: 0 },
    (set) => ({
      setName: (name) => set({ name }),
      setAge: (age) => set({ age }),
    })
  )
)
