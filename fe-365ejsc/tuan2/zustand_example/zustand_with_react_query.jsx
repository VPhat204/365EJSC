import React from "react";
import { create } from "zustand";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import axios from "axios";

const useUserStore = create((set) => ({
  users: [],
  setUsers: (data) => set({ users: data }),
}));

function FetchUsers() {
  const { setUsers } = useUserStore();
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      return res.data;
    },
    onSuccess: (data) => setUsers(data), 
  });

  if (isLoading) return <p>Đang tải...</p>;

  return (
    <div>
      <h3>Danh sách người dùng</h3>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

function UserListFromStore() {
  const { users } = useUserStore();
  return (
    <div>
      <h3>Dữ liệu từ Zustand Store</h3>
      <ul>
        {users.length > 0 ? users.map((u) => <li key={u.id}>{u.name}</li>) : <li>Chưa có dữ liệu</li>}
      </ul>
    </div>
  );
}

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h2>Zustand + TanStack Query Integration</h2>
      <FetchUsers />
      <UserListFromStore />
    </QueryClientProvider>
  );
}
