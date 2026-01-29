import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

interface TokenData {
  role: string;
}

const AdminRoute = () => {
  const token = localStorage.getItem("authToken");

  if (!token) return <Navigate to="/login" replace />;

  try {
    const decoded = jwtDecode<TokenData>(token);

    if (decoded.role !== "admin") {
      return <Navigate to="/dashboard" replace />;
    }

    return <Outlet />;

  } catch {
    return <Navigate to="/login" replace />;
  }
};

export default AdminRoute;
