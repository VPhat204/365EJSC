const unsub = useStore.subscribe((state) => {
  console.log("Giá trị count hiện tại:", state.count)
})

unsub()
