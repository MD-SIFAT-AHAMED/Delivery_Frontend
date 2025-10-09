import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Authentication/Login/Login";
import SignUp from "../Pages/Authentication/SignUp/SignUp";
import ForgotPassword from "../Pages/Authentication/ForgotPassword/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
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
]);

export default router;
