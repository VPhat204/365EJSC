import React, { JSX } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

interface Props {
  children: JSX.Element;
  role?: "admin" | "user";
}

const ProtectedRoute: React.FC<Props> = ({ children, role }) => {
  const { user } = useAuthStore();
  if (!user) return <Navigate to="/login" />;
  if (role && user.role !== role) return <Navigate to="/" />;
  return children;
};

export default ProtectedRoute;
