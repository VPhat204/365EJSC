import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

const useGameStore = create(
  subscribeWithSelector((set) => ({
    score: 0,
    level: 1,
    increaseScore: () => set((state) => ({ score: state.score + 10 })),
  }))
)

useGameStore.subscribe(
  (state) => state.score,
  (score) => console.log("Điểm mới:", score)
)
