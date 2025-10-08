import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

function InfinitePosts() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: async ({ pageParam = 1 }) => {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${pageParam}`
      );
      return res.data;
    },
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length ? allPages.length + 1 : undefined,
  });

  return (
    <div>
      <h3>Danh sách bài viết</h3>
      {data?.pages.map((page, i) => (
        <div key={i}>
          {page.map((post) => (
            <p key={post.id}>📄 {post.title}</p>
          ))}
        </div>
      ))}
      <button onClick={() => fetchNextPage()} disabled={!hasNextPage}>
        {isFetchingNextPage ? "Đang tải..." : hasNextPage ? "Tải thêm" : "Hết bài"}
      </button>
    </div>
  );
}
export default InfinitePosts