import React from "react";
import { Todo } from "../types/todo";
import "./TodoItem.css";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <li className="todo-item">
      <div className="todo-left">
        <input
          type="checkbox"
          checked={todo.status === "completed"}
          onChange={() => onToggle(todo.id)}
        />
        <div>
          <span
            className={`todo-title ${todo.status === "completed" ? "completed" : ""}`}
          >
            {todo.title}
          </span>
        </div>
      </div>

      <div className="todo-right">
        <span className={`todo-status ${todo.status}`}>
          {todo.status === "completed" ? "Completed" : "Pending"}
        </span>
        <button
          onClick={() => onDelete(todo.id)}
          className="todo-delete-btn"
        >
          ❌
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
