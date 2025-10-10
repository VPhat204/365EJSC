import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import axios from "axios";
import { useForm } from "react-hook-form";
import { User } from "../types/users";

interface FormData {
  username: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const { register, handleSubmit } = useForm<FormData>();
  const [error, setError] = useState("");

  const onSubmit = async (data: FormData) => {
    try {
      const res = await axios.get<User[]>(
        "https://68e4d2458e116898997d1209.mockapi.io/users"
      );
      const user = res.data.find(
        (u) => u.username === data.username && data.password === data.password
      );
      if (user) {
        login(user);
        if (user.role === "admin") navigate("/admin");
        else navigate("/");
      } else {
        setError("Invalid username or password");
      }
    } catch {
      setError("Error connecting to server");
    }
  };

  return (
    <form
    onSubmit={handleSubmit(onSubmit)}
    style={{
      maxWidth: "400px",
      margin: "50px auto",
      padding: "25px",
      backgroundColor: "#fff",
      borderRadius: "12px",
      boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    }}
  >
    <input
      {...register("username")}
      placeholder="Username"
      required
      style={{
        padding: "10px",
        border: "1px solid #d1d5db",
        borderRadius: "8px",
        fontSize: "1rem",
      }}
    />
    <input
      {...register("password")}
      type="password"
      placeholder="Password"
      required
      style={{
        padding: "10px",
        border: "1px solid #d1d5db",
        borderRadius: "8px",
        fontSize: "1rem",
      }}
    />
    <button
      type="submit"
      style={{
        padding: "10px",
        borderRadius: "8px",
        border: "none",
        backgroundColor: "#3b82f6",
        color: "#fff",
        fontWeight: "600",
        cursor: "pointer",
        transition: "0.2s",
      }}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#3b82f6")}
    >
      Login
    </button>
    {error && <p style={{ color: "red" }}>{error}</p>}
  </form>
  );
};

export default LoginPage;
