import React from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo } from "../api/todoApi";
import { Todo } from "../types/todos";
import { useAuthStore } from "../store/authStore";

interface FormData {
  title: string;
}

const TodoForm: React.FC = () => {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset } = useForm<FormData>();
  const currentUser = useAuthStore((state) => state.user);

  const mutation = useMutation({
    mutationFn: (newTodo: Omit<Todo, "id">) => createTodo(newTodo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      reset();
    },
  });

  const onSubmit = (data: FormData) => {
    if (!currentUser) return;
    mutation.mutate({
      title: data.title,
      completed: false,
      userId: currentUser.id,
    });
  };

  return (
    <form
    onSubmit={handleSubmit(onSubmit)}
    style={{
      display: "flex",
      gap: "12px",
      marginBottom: "20px",
      flexWrap: "wrap",
    }}
  >
    <input
      {...register("title")}
      placeholder="New todo"
      required
      style={{
        flex: "1",
        padding: "10px",
        border: "1px solid #d1d5db",
        borderRadius: "8px",
        fontSize: "1rem",
      }}
    />
    <button
      type="submit"
      style={{
        padding: "10px 16px",
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
      Add
    </button>
  </form>
  );
};

export default TodoForm;
