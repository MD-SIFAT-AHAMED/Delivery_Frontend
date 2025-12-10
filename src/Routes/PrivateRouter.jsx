import React from "react";
import useAuth from "../Hooks/useAuth";
import { useLocation } from "react-router";
import { Navigate } from "react-router";
import LoadingSpinner from "../Component/LoadingSpinner/LoadingSpinner";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <LoadingSpinner />;

  if (!user) {
    return <Navigate to={"/login"} state={{ from: location.pathname }} />;
  }
  return children;
};

export default PrivateRouter;
