import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { fetchTodos, deleteTodo } from "../api/todoApi";
import { Todo } from "../types/todos";
import { User } from "../types/users";
import { useAuthStore } from "../store/authStore";

const AdminPage: React.FC = () => {
  const queryClient = useQueryClient();
  const logout = useAuthStore((state) => state.logout);

  const { data: todos, isLoading } = useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  const { data: users } = useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get<User[]>(
        "https://68e4d2458e116898997d1209.mockapi.io/users"
      );
      return res.data;
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });

  if (isLoading) return <div>Loading todos...</div>;

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
        <h1 style={{ fontSize: "2rem" }}>Admin Panel - All Todos</h1>
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
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#dc2626")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#ef4444")
          }
        >
          Logout
        </button>
      </header>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos?.map((todo) => {
          const user = users?.find((u) => u.id === todo.userId);
          return (
            <li
              key={todo.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 12px",
                marginBottom: "10px",
                borderRadius: "8px",
                backgroundColor: "#f9fafb",
                border: "1px solid #e5e7eb",
                flexWrap: "wrap",
              }}
            >
              <input type="checkbox" checked={todo.completed} disabled />
              <span
                style={{
                  flex: 1,
                  marginLeft: "10px",
                  wordBreak: "break-word",
                }}
              >
                {todo.title} (User: {user?.username || "Unknown"})
              </span>
              <button
                onClick={() => deleteMutation.mutate(todo.id)}
                style={{
                  padding: "6px 12px",
                  borderRadius: "6px",
                  border: "none",
                  fontWeight: "bold",
                  cursor: "pointer",
                  backgroundColor: "#ef4444",
                  color: "#fff",
                  marginTop: "5px",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#dc2626")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#ef4444")
                }
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AdminPage;
