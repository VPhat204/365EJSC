const useStore = create((set, get) => ({
  count: 0,
  double: () => get().count * 2, 
  increaseIfEven: () => {
    const current = get().count
    if (current % 2 === 0) set({ count: current + 1 })
  },
}))
