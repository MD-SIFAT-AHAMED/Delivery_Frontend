import React from "react";
import useAuth from "../Hooks/useAuth";
import useUserRole from "../Hooks/useUserRole";
import { Navigate, useLocation } from "react-router";
import LoadingSpinner from "../Component/LoadingSpinner/LoadingSpinner";

const RoleProtectedRouter = ({ allowedRole = [], children }) => {
  const { user, loading } = useAuth();
  const { role, roleLoading } = useUserRole();
  const location = useLocation();

  if (roleLoading || loading || !role) {
    return <LoadingSpinner/>
  }
  const cleanRole = role.trim().toLowerCase();

  
  if (!user) {
    return <Navigate to={"/login"} state={{ from: location }} />;
  }

  if (!allowedRole.includes(role)) {
    return <Navigate to={"/forbidden"} />;
  }

  return children;
};

export default RoleProtectedRouter;
