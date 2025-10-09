const useTodoStore = create((set) => ({
  todos: [],
  addTodo: (task) => set((state) => ({
    todos: [...state.todos, { id: Date.now(), task }]
  })),
  clearTodos: () => set({ todos: [] })
}))
