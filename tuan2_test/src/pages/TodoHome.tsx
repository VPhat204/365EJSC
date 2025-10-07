import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";
import { Todo } from "../types/todo";
import "./TodoHome.css";

const API_URL = "https://68df8ace898434f413580d49.mockapi.io/notes";

const TodoHome: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");

  useEffect(() => {
    axios.get(API_URL).then((res) => {
      const todos: Todo[] = res.data.map((t: any) => ({
        id: t.id,
        title: t.title,
        tag: t.tag ?? "General",
        createdAt: t.createdAt ?? new Date().toISOString(),
        updatedAt: t.updatedAt ?? new Date().toISOString(),
        status: t.status === "completed" ? "completed" : "pending", 
      }));
      setTodos(todos);
    });
  }, []);

  const addTodo = async (title: string) => {
    const newTodo: Omit<Todo, "id"> = {
      title,
      status: "pending",
      tag: "General",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    const res = await axios.post(API_URL, newTodo);
    const added: Todo = {
      ...res.data,
      status: res.data.status === "completed" ? "completed" : "pending",
    };
    setTodos((prev) => [...prev, added]);
  };

  const toggleTodo = async (id: string) => {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;

    const newStatus: "completed" | "pending" =
      todo.status === "completed" ? "pending" : "completed";

    const updated: Todo = {
      ...todo,
      status: newStatus,
      updatedAt: new Date().toISOString(),
    };

    await axios.put(`${API_URL}/${id}`, updated);
    setTodos((prev) => prev.map((t) => (t.id === id ? updated : t)));
  };

  const deleteTodo = async (id: string) => {
    await axios.delete(`${API_URL}/${id}`);
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const resetTodos = async () => {
    await Promise.all(todos.map((t) => axios.delete(`${API_URL}/${t.id}`)));
    setTodos([]);
  };

  const filteredTodos = todos.filter((t) => {
    if (filter === "completed") return t.status === "completed";
    if (filter === "pending") return t.status === "pending";
    return true;
  });

  return (
    <div className="todo-container">
      <h1>📘 Todo Manager</h1>
      <TodoForm onAdd={addTodo} />

      <div className="filter-buttons">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          Tất cả
        </button>
        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => setFilter("completed")}
        >
          Hoàn thành
        </button>
        <button
          className={filter === "pending" ? "active" : ""}
          onClick={() => setFilter("pending")}
        >
          Chưa làm
        </button>
        <button className="reset" onClick={resetTodos}>
          🗑️ Xóa tất cả
        </button>
      </div>

      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </ul>

      {filteredTodos.length === 0 && (
        <p className="empty-msg">Không có công việc nào.</p>
      )}
    </div>
  );
};

export default TodoHome;
