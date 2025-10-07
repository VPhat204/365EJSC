import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email("Email không hợp lệ").required("Bắt buộc nhập"),
  password: yup.string().min(6, "Tối thiểu 6 ký tự").required(),
});

export default function YupValidationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}

      <input {...register("password")} placeholder="Mật khẩu" type="password" />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit">Đăng nhập</button>
    </form>
  );
}
