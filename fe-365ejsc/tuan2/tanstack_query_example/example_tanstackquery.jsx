// Ví dụ minh họa cache / stale / refetchOnWindowFocus

useQuery({
  queryKey: ["users"],
  queryFn: fetchUsers,
  staleTime: 10000,              // 10s mới coi là stale
  cacheTime: 60000,              // giữ cache 1 phút
  refetchOnWindowFocus: true,    // quay lại tab => tự refetch nếu stale
  retry: 1,                      // thử lại 1 lần khi lỗi
});
