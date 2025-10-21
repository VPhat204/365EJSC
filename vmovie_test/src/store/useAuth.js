import { create } from "zustand";
import axios from "axios";

const BASE_URL = "https://68ef4da1b06cc802829cd64a.mockapi.io";

export const useAuth = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")) || null,

  register: async (email, password, username) => {
    const { data } = await axios.post(`${BASE_URL}/users`, { 
      email, 
      password, 
      username, 
      role: "user", 
    });
    localStorage.setItem("user", JSON.stringify(data));
    set({ user: data });
  },

  login: async (email, password) => {
    const { data } = await axios.get(`${BASE_URL}/users`);
    const foundUser = data.find((u) => u.email === email && u.password === password);
    if (!foundUser) throw new Error("Sai email hoặc mật khẩu");
    localStorage.setItem("user", JSON.stringify(foundUser));
    set({ user: foundUser });
  },

  logout: () => {
    localStorage.removeItem("user");
    set({ user: null });
  },

  updateUser: async (id, updates) => {
    const { data } = await axios.put(`${BASE_URL}/users/${id}`, updates);
    if (JSON.parse(localStorage.getItem("user"))?.id === id) {
      localStorage.setItem("user", JSON.stringify(data));
      set({ user: data });
    }
  },

  updateUsername: async (newName) => {
    set((state) => {
      if (!state.user) return {};
      const updated = { ...state.user, username: newName };
      axios.put(`${BASE_URL}/users/${state.user.id}`, updated);
      localStorage.setItem("user", JSON.stringify(updated));
      return { user: updated };
    });
  },
}));
