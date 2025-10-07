import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Admin.css";

const API_URL = "https://68df8ace898434f413580d49.mockapi.io/notes";

const AdminPage: React.FC = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then((res) => {
      setTodos(res.data);
    });
  }, []);

  return (
    <div className="admin-container">
      <h1 className="admin-title">Trang quản trị</h1>
      <ul className="admin-todo-list">
        {todos.map((t: any) => (
          <li key={t.id} className="admin-todo-item">
            <div className="admin-todo-header">
              <b className="admin-todo-title">{t.title}</b>
              <span className={`admin-todo-status ${t.status}`}>{t.status}</span>
            </div>
            <div className="admin-todo-info">
              <span>Ngày tạo: {new Date(t.createdAt).toLocaleString()}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
