import React from "react";
import useAuth from "../Hooks/useAuth";
import useUserRole from "../Hooks/useUserRole";
import { Navigate, useLocation } from "react-router";

const RoleProtectedRouter = ({ allowedRole = [], children }) => {
  const { user, loading } = useAuth();
  const { role, roleLoading } = useUserRole();
  const location = useLocation();

  if (roleLoading || loading || !role) {
    return <span className="loading loading-spinner text-info"></span>;
  }
  const cleanRole = role.trim().toLowerCase();

  console.log("CURRENT PATH:", location.pathname);
  console.log("ROLE:", role);
  console.log("ALLOWED:", allowedRole);
  
  if (!user) {
    return <Navigate to={"/login"} state={{ from: location }} />;
  }

  if (!allowedRole.includes(role)) {
    return <Navigate to={"/forbidden"} />;
  }

  return children;
};

export default RoleProtectedRouter;
