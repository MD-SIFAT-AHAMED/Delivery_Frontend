import { Navigate } from "react-router";
import useUserRole from "../../../Hooks/useUserRole";

const DashboardDefault = () => {
  const { role } = useUserRole();

  if (role === "admin") {
    return <Navigate to="admin" />;
  }
  if (role === "rider") {
    return <Navigate to="rider" />;
  }

  return <Navigate to="/" />;
};

export default DashboardDefault;
