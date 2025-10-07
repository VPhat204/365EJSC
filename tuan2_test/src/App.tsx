import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TodoHome from "./pages/TodoHome";
import AdminPage from "./pages/AdminPage";
import Header from "./components/HeaderComponent";

const App: React.FC = () => {
  const [username, setUsername] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedRole = localStorage.getItem("role");
    if (storedUsername) setUsername(storedUsername);
    if (storedRole) setRole(storedRole);
  }, []);

  const handleLogin = (u: string, r: string) => {
    setUsername(u);
    setRole(r);
    localStorage.setItem("username", u);
    localStorage.setItem("role", r);
  };

  const handleLogout = () => {
    setUsername(null);
    setRole(null);
    localStorage.removeItem("username");
    localStorage.removeItem("role");
  };

  return (
    <>
      <Header username={username} onLogout={handleLogout} />
      <Routes>
        <Route 
          path="/login" 
          element={<LoginPage onLogin={handleLogin} />} 
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={role === "admin" ? <AdminPage /> : <TodoHome />} />
      </Routes>
    </>
  );
};

export default App;
