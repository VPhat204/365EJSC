import React from "react";
import { useForm } from "react-hook-form";

export default function ValidationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email:</label>
        <input
          {...register("email", {
            required: "Vui lòng nhập email",
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              message: "Email không hợp lệ",
            },
          })}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      </div>

      <div>
        <label>Mật khẩu:</label>
        <input
          type="password"
          {...register("password", {
            required: "Vui lòng nhập mật khẩu",
            minLength: { value: 6, message: "Ít nhất 6 ký tự" },
          })}
        />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}
      </div>

      <button type="submit">Đăng nhập</button>
    </form>
  );
}
