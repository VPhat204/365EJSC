import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchTodos, updateTodo, deleteTodo } from "../api/todoApi";
import { Todo } from "../types/todos";
import { useAuthStore } from "../store/authStore";

const TodoList: React.FC = () => {
  const queryClient = useQueryClient();
  const currentUser = useAuthStore((state) => state.user);
  const [editId, setEditId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");

  const { data: todos, isLoading } = useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  const updateMutation = useMutation({
    mutationFn: updateTodo,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });

  if (isLoading) return <div>Loading...</div>;

  const userTodos = todos?.filter((t) => t.userId === currentUser?.id);

  const handleEdit = (todo: Todo) => {
    setEditId(todo.id);
    setEditTitle(todo.title);
  };

  const handleSave = (todo: Todo) => {
    updateMutation.mutate({ ...todo, title: editTitle });
    setEditId(null);
    setEditTitle("");
  };

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {userTodos?.map((todo) => (
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
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() =>
              updateMutation.mutate({ ...todo, completed: !todo.completed })
            }
          />

          {editId === todo.id ? (
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              style={{
                flex: 1,
                marginLeft: "10px",
                padding: "6px 8px",
                borderRadius: "6px",
                border: "1px solid #d1d5db",
              }}
            />
          ) : (
            <span style={{ flex: 1, marginLeft: "10px", wordBreak: "break-word" }}>
              {todo.title}
            </span>
          )}

          <div style={{ display: "flex", gap: "6px", marginTop: "5px" }}>
            {editId === todo.id ? (
              <button
                onClick={() => handleSave(todo)}
                style={{
                  padding: "6px 12px",
                  borderRadius: "6px",
                  border: "none",
                  fontWeight: "bold",
                  cursor: "pointer",
                  backgroundColor: "#3b82f6",
                  color: "#fff",
                }}
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => handleEdit(todo)}
                style={{
                  padding: "6px 12px",
                  borderRadius: "6px",
                  border: "none",
                  fontWeight: "bold",
                  cursor: "pointer",
                  backgroundColor: "#f59e0b",
                  color: "#fff",
                }}
              >
                Edit
              </button>
            )}

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
              }}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
