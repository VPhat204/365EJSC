import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

function AddTodo() {
  const [title, setTitle] = useState("");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newTodo) =>
      await axios.post("https://jsonplaceholder.typicode.com/todos", newTodo),
    onSuccess: () => {
      // làm mới dữ liệu sau khi thêm thành công
      queryClient.invalidateQueries(["todos"]);
    },
  });

  return (
    <div>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nhập todo..."
      />
      <button
        onClick={() =>
          mutation.mutate({ title, completed: false })
        }
      >
        {mutation.isLoading ? "Đang thêm..." : "Thêm"}
      </button>
    </div>
  );
}
