import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
// import Users from "../pages/admin/Users";
import NotFound from "../pages/NotFound";

import ProtectedRoute from "./ProtectedRoutes";
import AdminRoute from "./AdminRoutes";

const AppRoutes = () => {
  const token = localStorage.getItem("authToken");

  return (
    <BrowserRouter>
      <Routes>
        {/* Root Route */}
        <Route
          path="/"
          element={
            token ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* Admin Routes */}
        <Route element={<AdminRoute />}>
          {/* <Route path="/admin/users" element={<Users />} /> */}
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
