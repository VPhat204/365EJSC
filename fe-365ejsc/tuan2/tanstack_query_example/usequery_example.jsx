import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function Todos() {
  const { data, isLoading, isError, refetch, isFetching } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5");
      return res.data;
    },
  });

  if (isLoading) return <p>Đang tải...</p>;
  if (isError) return <p>Lỗi tải dữ liệu</p>;

  return (
    <div>
      <h3>Danh sách Todo</h3>
      {isFetching && <p>🔄 Đang cập nhật...</p>}
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <button onClick={() => refetch()}>Refetch</button>
    </div>
  );
}
