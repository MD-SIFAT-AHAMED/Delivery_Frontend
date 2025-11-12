import React from "react";
import useAuth from "../Hooks/useAuth";
import useUserRole from "../Hooks/useUserRole";
import { useNavigate } from "react-router";

const RiderRouter = ({ children }) => {
  const { user, loading } = useAuth();
  const { role, roleLoading } = useUserRole();
  const navigate = useNavigate();

  if (loading || roleLoading) {
    return <span className="loading loading-spinner text-info"></span>;
  }

  if (!user || role !== "rider") {
    return navigate("/forbidden");
  }

  return children;
};

export default RiderRouter;
