import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const USER_API = "https://68e4d2458e116898997d1209.mockapi.io/users";

const LoginPage: React.FC<{ onLogin: (username: string, role: string) => void }> = ({ onLogin }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.get(USER_API);
      const user = res.data.find((u: any) => u.username === username && u.password === password);
      if (user) {
        onLogin(user.username, user.role);
        navigate("/");
      } else {
        setError("Sai tài khoản hoặc mật khẩu!");
      }
    } catch (err) {
      console.error(err);
      setError("Không thể đăng nhập!");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Đăng nhập</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Tên đăng nhập:</label>
          <input
            type="text"
            placeholder="Nhập username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Mật khẩu:</label>
          <input
            type="password"
            placeholder="Nhập mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.submitBtn}>Đăng nhập</button>
        <p style={styles.registerLink}>
          Chưa có tài khoản? <Link to="/register" style={{ color: "#007bff", textDecoration: "underline" }}>Đăng ký ngay</Link>
        </p>
        <p>Tài khoản Admin: 
          admin
          123456
        </p>
      </form>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "30px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    marginBottom: "5px",
    display: "block",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  error: {
    color: "red",
    marginTop: "5px",
    fontSize: "12px",
    textAlign: "center",
  },
  submitBtn: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  registerLink: {
    marginTop: "15px",
    textAlign: "center",
    fontSize: "14px",
  },
};

export default LoginPage;
