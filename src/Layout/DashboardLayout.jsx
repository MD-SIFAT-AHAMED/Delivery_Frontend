import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaCog,
  FaBox,
  FaSignOutAlt,
  FaMotorcycle,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import ProFastLogo from "../Pages/Shared/ProFastLogo/ProFastLogo";
import logoImg from "../assets/logo.png";
import Users from "../Pages/Dashboard/Admin/Users/Users";
import AdminWelcome from "../Pages/Dashboard/AdminWelcome/AdminWelcome";
import useAuth from "../Hooks/useAuth";
import useUserRole from "../Hooks/useUserRole";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user } = useAuth();
  const { role, roleLoading } = useUserRole();

  return (
    <div className="flex w-full min-w-screen bg-base-100">
      {/* Sidebar */}
      <aside
        className={`
      ${isSidebarOpen ? "w-64" : "w-16"} 
      bg-base-200 h-screen fixed left-0 top-0 
      z-20 transition-all duration-200
      flex flex-col justify-between
    `}
      >
        {/* Logo */}
        <div className="py-[7px] md:py-[15px]  flex items-center justify-center">
          {isSidebarOpen ? (
            <ProFastLogo />
          ) : (
            <img className="w-9" src={logoImg} alt="" />
          )}
        </div>
        <nav className="flex-1 px-2 py-4 space-y-2 overflow-y-auto">
          {!roleLoading && role === "admin" && (
            <>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `flex items-center gap-3 p-2 rounded transition ${
                    isActive ? " " : "hover:bg-base-300"
                  }`
                }
              >
                <FaHome size={18} /> {isSidebarOpen && <span>Dashboard</span>}
              </NavLink>

              <NavLink
                to="parcels"
                className={({ isActive }) =>
                  `flex items-center gap-3 p-2 rounded transition ${
                    isActive ? "bg-primary" : "hover:bg-base-300"
                  }`
                }
              >
                <FaBox size={18} /> {isSidebarOpen && <span>Parcels</span>}
              </NavLink>

              <NavLink
                to="riders"
                className={({ isActive }) =>
                  `flex items-center gap-3 p-2 rounded transition ${
                    isActive ? "bg-primary " : "hover:bg-base-300"
                  }`
                }
              >
                <FaMotorcycle size={18} />{" "}
                {isSidebarOpen && <span>Riders</span>}
              </NavLink>

              <NavLink
                to="payment-history"
                className={({ isActive }) =>
                  `flex items-center gap-3 p-2 rounded transition ${
                    isActive ? "bg-primary " : "hover:bg-base-300"
                  }`
                }
              >
                <FaMoneyCheckAlt size={18} />{" "}
                {isSidebarOpen && <span>Payment History</span>}
              </NavLink>

              <NavLink
                to="users"
                className={({ isActive }) =>
                  `flex items-center gap-3 p-2 rounded transition ${
                    isActive ? "bg-primary " : "hover:bg-base-300"
                  }`
                }
              >
                <FaUser size={18} /> {isSidebarOpen && <span>Users</span>}
              </NavLink>

              <NavLink
                to="/settings"
                className={({ isActive }) =>
                  `flex items-center gap-3 p-2 rounded transition ${
                    isActive ? "bg-primary " : "hover:bg-base-300"
                  }`
                }
              >
                <FaCog size={18} /> {isSidebarOpen && <span>Settings</span>}
              </NavLink>
            </>
          )}
          {!roleLoading && role === "rider" && (
            <>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `flex items-center gap-3 p-2 rounded transition ${
                    isActive ? " " : "hover:bg-base-300"
                  }`
                }
              >
                <FaHome size={18} /> {isSidebarOpen && <span>Dashboard</span>}
              </NavLink>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `flex items-center gap-3 p-2 rounded transition ${
                    isActive ? " " : "hover:bg-base-300"
                  }`
                }
              >
                <FaBox size={18} /> {isSidebarOpen && <span>My Parcel</span>}
              </NavLink>
            </>
          )}
        </nav>

        <div className="p-4 border-t border-base-300">
          <button
            className={`btn bg-red-500 text-white gap-2 ${
              isSidebarOpen && "w-full flex items-center justify-center"
            }`}
          >
            <FaSignOutAlt /> {isSidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Area */}
      <div
        className={`
      flex-1 flex flex-col transition-all duration-200
      ${isSidebarOpen ? "ml-64" : "ml-16"}
    `}
      >
        {/* Header */}
        <header className="navbar flex justify-between gap-5 bg-base-200 px-4 fixed top-0 z-10">
          <div className="flex items-center">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="btn btn-ghost btn-square"
            >
              {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
            <h1 className="text-lg md:text-2xl font-semibold ml-2">
              Dashboard
            </h1>
          </div>
          <div className="hidden md:flex relative right-20">
            <AdminWelcome name={user?.displayName} />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 overflow-auto pt-18">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
