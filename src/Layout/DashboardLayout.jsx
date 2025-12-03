import React, { useState } from "react";
import { Link, Outlet } from "react-router";
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

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex w-full bg-base-100">
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
        <div className="py-[8px] border-b border-base-300 flex items-center justify-center">
          {isSidebarOpen ? (
            <ProFastLogo />
          ) : (
            <img className="w-9" src={logoImg} alt="" />
          )}
        </div>

        {/* Menu */}
        <nav className="flex-1 px-2 py-4 space-y-2 overflow-y-auto">
          <Link
            to="/"
            className="flex items-center gap-3 p-2 rounded hover:bg-base-300 transition"
          >
            <FaHome size={18} /> {isSidebarOpen && <span>Dashboard</span>}
          </Link>

          <Link
            to="parcels"
            className="flex items-center gap-3 p-2 rounded hover:bg-base-300 transition"
          >
            <FaBox size={18} /> {isSidebarOpen && <span>Parcels</span>}
          </Link>

          <Link
            to="riders"
            className="flex items-center gap-3 p-2 rounded hover:bg-base-300 transition"
          >
            <FaMotorcycle size={18} /> {isSidebarOpen && <span>Riders</span>}
          </Link>

          <Link
            to="payment-history"
            className="flex items-center gap-3 p-2 rounded hover:bg-base-300 transition"
          >
            <FaMoneyCheckAlt size={18} />{" "}
            {isSidebarOpen && <span>Payment History</span>}
          </Link>

          <Link
            to="users"
            className="flex items-center gap-3 p-2 rounded hover:bg-base-300 transition"
          >
            <FaUser size={18} /> {isSidebarOpen && <span>Users</span>}
          </Link>

          <Link
            to="admin"
            className="flex items-center gap-3 p-2 rounded hover:bg-base-300 transition"
          >
            <RiAdminFill size={18} /> {isSidebarOpen && <span>Make Admin</span>}
          </Link>

          <Link
            to="/settings"
            className="flex items-center gap-3 p-2 rounded hover:bg-base-300 transition"
          >
            <FaCog size={18} /> {isSidebarOpen && <span>Settings</span>}
          </Link>
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
        <header className="navbar bg-base-200 px-4 fixed top-0 z-10">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="btn btn-ghost btn-square"
          >
            {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
          <h1 className="text-lg font-semibold ml-2">Dashboard</h1>
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
