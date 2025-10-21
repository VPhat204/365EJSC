import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../store/useAuth";

const AdminRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;

  if (user.role !== "admin") {
    return <p style={{ textAlign: "center", marginTop: "100px" }}>
      🚫 Bạn không có quyền truy cập trang này
    </p>;
  }

  return children;
};

export default AdminRoute;
