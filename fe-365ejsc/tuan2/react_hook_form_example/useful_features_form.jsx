import React from "react";
import { useForm } from "react-hook-form";

export default function UsefulFeaturesForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Gửi dữ liệu:", data);
    reset(); // reset form sau khi gửi
  };

  const name = watch("name");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Họ tên:</label>
      <input {...register("name")} placeholder="Nhập họ tên" />
      <p>Tên hiện tại: {name}</p>

      <button type="button" onClick={() => setValue("name", "Nguyễn Văn A")}>
        Điền tự động
      </button>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Đang gửi..." : "Gửi form"}
      </button>
    </form>
  );
}
