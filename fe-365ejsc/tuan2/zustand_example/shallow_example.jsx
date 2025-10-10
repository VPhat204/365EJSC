import React from "react";
import { create } from "zustand";
import { shallow } from "zustand/shallow";

const useUserStore = create((set) => ({
  name: "Phát",
  age: 22,
  setName: (newName) => set({ name: newName }),
  increaseAge: () => set((state) => ({ age: state.age + 1 })),
}));

function UserInfo() {
  const { name, age, increaseAge } = useUserStore(
    (state) => ({ name: state.name, age: state.age, increaseAge: state.increaseAge }),
    shallow 
  );

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>👤 Thông tin người dùng</h2>
      <p>Tên: {name}</p>
      <p>Tuổi: {age}</p>
      <button onClick={increaseAge}>Tăng tuổi</button>
    </div>
  );
}

const logUser = () => {
  const state = useUserStore.getState();
  console.log("📦 Dữ liệu trong store:", state);
};

export default function App() {
  return (
    <div>
      <UserInfo />
      <button onClick={logUser}>Xem dữ liệu trong console</button>
    </div>
  );
}
