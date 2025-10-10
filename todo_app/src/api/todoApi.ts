import axios from "axios";
import { Todo } from "../types/todos";

const API_URL = "https://68e4d2458e116898997d1209.mockapi.io/todos";

export const fetchTodos = async (): Promise<Todo[]> => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createTodo = async (todo: Omit<Todo, "id">): Promise<Todo> => {
  const res = await axios.post(API_URL, todo);
  return res.data;
};

export const updateTodo = async (todo: Todo): Promise<Todo> => {
  const res = await axios.put(`${API_URL}/${todo.id}`, todo);
  return res.data;
};

export const deleteTodo = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};

