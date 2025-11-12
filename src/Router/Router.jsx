import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import DashboardLayout from "../Layout/DashboardLayout";
import Home from "../Pages/Home/Home/Home";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Authentication/Login/Login";
import SignUp from "../Pages/Authentication/SignUp/SignUp";
import ForgotPassword from "../Pages/Authentication/ForgotPassword/ForgotPassword";
import PrivateRouter from "../Routes/PrivateRouter";
import AboutUs from "../Pages/AboutUs/AboutUs";
import CoverAge from "../Pages/CoverAge/CoverAge";
import BeARider from "../Pages/BeARider/BeARider";
import Users from "../Pages/Admin/Users/Users";
import RoleProtectedRouter from "../Routes/RoleProtectedRouter";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/AboutUs",
        Component: AboutUs,
      },
      {
        path: "/coverage",
        Component: CoverAge,
        loader: () => fetch("./services.json"),
      },
      {
        path: "/beARider",
        element: (
          <PrivateRouter>
            <BeARider />
          </PrivateRouter>
        ),
        loader: () => fetch("./services.json"),
      },
    ],
  },
  // AuthLayout
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/signUp",
        Component: SignUp,
      },
      {
        path: "/fotgotPassword",
        Component: ForgotPassword,
      },
    ],
  },
  //Dashboard Layout
  {
    path: "/dashboard",
    element: (
      <RoleProtectedRouter allowedRole={["admin", "rider"]}>
        <DashboardLayout />
      </RoleProtectedRouter>
    ),
  },
]);

export default router;
