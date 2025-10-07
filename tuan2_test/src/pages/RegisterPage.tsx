import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

const USER_API = "https://68e4d2458e116898997d1209.mockapi.io/users";

interface RegisterForm {
  username: string;
  password: string;
  confirmPassword: string;
}

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<RegisterForm>();

  const onSubmit = async (data: RegisterForm) => {
    try {
      const res = await axios.get(USER_API);
      const existingUser = res.data.find((u: any) => u.username === data.username);
      if (existingUser) {
        alert("Tên đăng nhập đã tồn tại!");
        return;
      }

      await axios.post(USER_API, { username: data.username, password: data.password, role: "user" });
      alert("Đăng ký thành công! Chuyển sang trang đăng nhập...");
      reset();
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Đăng ký thất bại!");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Đăng ký tài khoản</h2>
      <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Tên đăng nhập:</label>
          <input {...register("username", { required: "Vui lòng nhập tên đăng nhập" })} placeholder="Nhập username" style={styles.input} />
          {errors.username && <p style={styles.error}>{errors.username.message}</p>}
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Mật khẩu:</label>
          <input type="password" {...register("password", { required: "Vui lòng nhập mật khẩu", minLength: { value: 6, message: "Mật khẩu phải ít nhất 6 ký tự" } })} placeholder="Nhập mật khẩu" style={styles.input} />
          {errors.password && <p style={styles.error}>{errors.password.message}</p>}
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Xác nhận mật khẩu:</label>
          <input type="password" {...register("confirmPassword", { required: "Vui lòng xác nhận mật khẩu", validate: (val) => val === watch("password") || "Mật khẩu không khớp" })} placeholder="Nhập lại mật khẩu" style={styles.input} />
          {errors.confirmPassword && <p style={styles.error}>{errors.confirmPassword.message}</p>}
        </div>
        <button type="submit" style={styles.submitBtn}>Đăng ký</button>
        <p style={styles.loginLink}>Bạn đã có tài khoản? <Link to="/login" style={{ color: "#007bff", textDecoration: "underline" }}>Đăng nhập ngay</Link></p>
      </form>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: { maxWidth: "400px", margin: "50px auto", padding: "30px", border: "1px solid #ddd", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", backgroundColor: "#fff" },
  title: { textAlign: "center", marginBottom: "20px", color: "#333" },
  form: { display: "flex", flexDirection: "column" },
  inputGroup: { marginBottom: "15px" },
  label: { marginBottom: "5px", display: "block", color: "#555" },
  input: { width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc", fontSize: "14px" },
  error: { color: "red", marginTop: "5px", fontSize: "12px" },
  submitBtn: { padding: "10px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px" },
  loginLink: { marginTop: "15px", textAlign: "center", fontSize: "14px" },
};

export default RegisterPage;
