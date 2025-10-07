import React from "react";
import { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  const statusColor =
    todo.status === "completed"
      ? "#4CAF50"
      : "#FFC107";

  const statusLabel =
    todo.status === "completed" ? "Completed" : "Pending";

  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#f9f9f9",
        marginBottom: "10px",
        padding: "10px 14px",
        borderRadius: "8px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <input
          type="checkbox"
          checked={todo.status === "completed"}
          onChange={() => onToggle(todo.id)}
        />
        <div>
          <span
            style={{
              textDecoration:
                todo.status === "completed" ? "line-through" : "none",
              fontWeight: 500,
            }}
          >
            {todo.title}
          </span>
          <div style={{ fontSize: "0.8em", color: "#888" }}>
            {new Date(todo.createdAt).toLocaleString()}
          </div>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span
          style={{
            background: statusColor,
            color: "#fff",
            padding: "4px 8px",
            borderRadius: "6px",
            fontSize: "0.75em",
          }}
        >
          {statusLabel}
        </span>
        <button
          onClick={() => onDelete(todo.id)}
          style={{
            border: "none",
            background: "transparent",
            cursor: "pointer",
            fontSize: "1.2em",
          }}
        >
          ❌
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
