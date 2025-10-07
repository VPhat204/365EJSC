import React from "react";
import { useForm } from "react-hook-form";

export default function BasicForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Dữ liệu form:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Họ tên:</label>
      <input {...register("username")} placeholder="Nhập họ tên" />

      <label>Email:</label>
      <input {...register("email")} placeholder="Nhập email" />

      <button type="submit">Gửi</button>
    </form>
  );
}
