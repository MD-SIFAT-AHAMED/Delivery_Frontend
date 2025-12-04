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
import Users from "../Pages/Dashboard/Admin/Users/Users";
import RoleProtectedRouter from "../Routes/RoleProtectedRouter";
import Riders from "../Pages/Dashboard/Admin/Riders/Riders";
import SendParcel from "../Pages/SendParcel/SendParcel";
import Profile from "../Pages/Profile/Profile";
import Admin from "../Pages/Dashboard/Admin/Admin/Admin";
import Forbidden from "../Pages/Forbidden/Forbidden";
import PaymentSuccess from "../Pages/Payment/PaymentSuccess";
import PaymentCancel from "../Pages/Payment/PaymentCancel";
import PaymentFail from "../Pages/Payment/PaymentFail";
import Services from "../Pages/Home/Services/Services";
import Parcel from "../Pages/Dashboard/Admin/Parcel/Parcel";
import PaymentHistory from "../Pages/Dashboard/Admin/PaymentHistory/PaymentHistory";
import AdminDashboard from "../Pages/Dashboard/Admin/AdminDashboard/AdminDashboard";
import MyDeliveries from "../Pages/Dashboard/User/MyDeliveris/MyDeliveris";

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
        path: "/services",
        Component: Services,
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
      {
        path: "/sendparcel",
        element: (
          <PrivateRouter>
            <SendParcel />
          </PrivateRouter>
        ),
        loader: () => fetch("./services.json"),
      },
      {
        path: "/profile",
        element: (
          <PrivateRouter>
            <Profile />
          </PrivateRouter>
        ),
        loader: () => fetch("./services.json"),
      },
      {
        path: "/forbidden",
        Component: Forbidden,
      },
      {
        path: "/payment-success",
        element: (
          <PrivateRouter>
            <PaymentSuccess />
          </PrivateRouter>
        ),
      },
      {
        path: "/payment-cancel",
        element: (
          <PrivateRouter>
            <PaymentCancel />
          </PrivateRouter>
        ),
      },
      {
        path: "/payment-fail",
        element: (
          <PrivateRouter>
            <PaymentFail />
          </PrivateRouter>
        ),
      },
      {
        path: "/my-deliveries",
        element: (
          <PrivateRouter>
            <MyDeliveries />
          </PrivateRouter>
        ),
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
    path: "/dashboard/",
    element: (
      <RoleProtectedRouter allowedRole={["admin", "rider"]}>
        <DashboardLayout />
      </RoleProtectedRouter>
    ),
    children: [
      {
        index: true,
        Component: AdminDashboard,
      },
      {
        path: "users",
        Component: Users,
      },
      {
        path: "riders",
        Component: Riders,
      },
      {
        path: "payment-history",
        Component: PaymentHistory,
      },
      {
        path: "admin",
        Component: Admin,
      },
      {
        path: "parcels",
        Component: Parcel,
      },
    ],
  },
]);

export default router;
