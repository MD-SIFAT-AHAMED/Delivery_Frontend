import React from "react";
import useUserRole from "../Hooks/useUserRole";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router";

const AdminRouter = ({ children }) => {
  const { role, roleLoading } = useUserRole();
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  if (loading || roleLoading) {
    return <span className="loading loading-spinner text-info"></span>;
  }

  if (!user || role !== "admin") {
    return navigate("/forbidden");
  }
  return children;
};

export default AdminRouter;
