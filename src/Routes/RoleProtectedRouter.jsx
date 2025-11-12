import React from "react";
import useAuth from "../Hooks/useAuth";
import useUserRole from "../Hooks/useUserRole";
import { Navigate, useLocation } from "react-router";

const RoleProtectedRouter = ({ allowedRole = [], children }) => {
  const { user, loading } = useAuth();
  const { role, roleLoading } = useUserRole();
  const location = useLocation();

  if (roleLoading || loading) {
    return <span className="loading loading-spinner text-info"></span>;
  }

  if (!user) {
    return <Navigate to={"/login"} state={{ from: location }} />;
  }

  if (!allowedRole.includes(role)) {
    return <Navigate to={"/forbidden"} />;
  }

  return children;
};

export default RoleProtectedRouter;
