import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const useCounterStore = create(
  devtools((set) => ({
    count: 0,
    increase: () => set((state) => ({ count: state.count + 1 })),
  }))
)
export default useCounterStore