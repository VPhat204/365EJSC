import React from "react";
import { useForm } from "react-hook-form";

interface TodoFormProps {
  onAdd: (title: string) => void;
}

interface FormValues {
  title: string;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    onAdd(data.title);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("title", { required: "Vui lòng nhập công việc" })}
        placeholder="Nhập việc cần làm..."
      />
      {errors.title && <p style={{ color: "red" }}>{errors.title.message}</p>}
      <button type="submit">Thêm</button>
    </form>
  );
};

export default TodoForm;
