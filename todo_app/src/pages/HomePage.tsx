import React from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { useAuthStore } from "../store/authStore";

const HomePage: React.FC = () => {
  const logout = useAuthStore((state) => state.logout);

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "20px auto",
        padding: "25px",
        backgroundColor: "#fff",
        borderRadius: "12px",
        boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h1 style={{ fontSize: "2rem", marginBottom: "16px" }}>User Dashboard</h1>
        <button
          onClick={logout}
          style={{
            padding: "8px 16px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#ef4444",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </header>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default HomePage;
