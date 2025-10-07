export interface Todo {
  id: string;
  title: string;
  status: "pending" | "completed";
  tag: string;
  createdAt: string;
  updatedAt: string;
}
