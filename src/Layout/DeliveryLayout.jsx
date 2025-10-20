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
} from "react-icons/fa";
import ProFastLogo from "../Pages/Shared/ProFastLogo/ProFastLogo";
import logoImg from "../assets/logo.png";

const DeliveryLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-base-100">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "w-64" : "w-16"
        } bg-base-200 transition duration-50 flex flex-col justify-between`}
      >
        {/* Logo */}
        <div className="py-[8px] border-b border-base-300 flex items-center justify-center">
          {isSidebarOpen ? (
            <ProFastLogo />
          ) : (
            <img className="w-9" src={logoImg} alt="" />
          )}
        </div>

        {/* Menu items */}
        <nav className="flex-1 px-2 py-4 space-y-2">
          <Link
            to="/"
            className="flex items-center gap-3 p-2 rounded hover:bg-base-300 transition"
          >
            <FaHome size={18} />
            {isSidebarOpen && <span>Dashboard</span>}
          </Link>

          <Link
            to="/parcels"
            className="flex items-center gap-3 p-2 rounded hover:bg-base-300 transition"
          >
            <FaBox size={18} />
            {isSidebarOpen && <span>Parcels</span>}
          </Link>

          <Link
            to="/riders"
            className="flex items-center gap-3 p-2 rounded hover:bg-base-300 transition"
          >
            <FaUser size={18} />
            {isSidebarOpen && <span>Riders</span>}
          </Link>

          <Link
            to="/settings"
            className="flex items-center gap-3 p-2 rounded hover:bg-base-300 transition"
          >
            <FaCog size={18} />
            {isSidebarOpen && <span>Settings</span>}
          </Link>
        </nav>

        {/* Logout button */}
        <div className="p-4 border-t border-base-300">
          <button
            className={`btn bg-red-500 text-white  ${
              isSidebarOpen && "w-full flex items-center justify-center"
            }  gap-2`}
          >
            <FaSignOutAlt />
            {isSidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="navbar bg-base-300 px-4">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="btn btn-ghost btn-square "
          >
            {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
          <h1 className="text-lg font-semibold ml-2">Dashboard</h1>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DeliveryLayout;
