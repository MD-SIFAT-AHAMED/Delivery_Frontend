import React, { useCallback, useState } from "react";
import { Link, NavLink } from "react-router";
import ProFastLogo from "../../Pages/Shared/ProFastLogo/ProFastLogo";
import { RxHamburgerMenu } from "react-icons/rx";
import useAuth from "../../Hooks/useAuth";
import {
  FaUser,
  FaTruck,
  FaSignOutAlt,
  FaTachometerAlt,
  FaBox,
  FaUserCircle,
  FaChevronDown,
} from "react-icons/fa";
import { FiGrid } from "react-icons/fi";
import LogoutButton from "../../Pages/Authentication/LogoutButton/LogoutButton";
import useClickOutside from "../../Hooks/useClickOutside";
import useUserRole from "../../Hooks/useUserRole";

const Navber = () => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const ref = useClickOutside(() => setOpen(false));
  const { role } = useUserRole();

  const links = (
    <>
      <li>
        <NavLink
          onClick={() => {
            document.getElementById("my-drawer").checked = false;
          }}
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => {
            document.getElementById("my-drawer").checked = false;
          }}
          to={"/coverage"}
        >
          Coverage
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => {
            document.getElementById("my-drawer").checked = false;
          }}
          to={"/sendparcel"}
        >
          Send A Parcel
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => {
            document.getElementById("my-drawer").checked = false;
          }}
          to={"/AboutUs"}
        >
          About Us
        </NavLink>
      </li>
      {/* Implement Todo */}
      {/* <li>
        <NavLink
          onClick={() => {
            document.getElementById("my-drawer").checked = false;
          }}
          to={"/Pricing"}
        >
          Pricing
        </NavLink>
      </li> */}
      <li>
        <NavLink
          onClick={() => {
            document.getElementById("my-drawer").checked = false;
          }}
          to={"/beARider"}
        >
          Be a Rider
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      {/* Drawer Wrapper */}
      <div className="drawer">
        {/* Hidden Checkbox */}
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        {/* Drawer Content */}
        <div className="drawer-content">
          {/* Navbar */}
          <div className="max-w-screen-2xl w-11/12 mx-auto bg-base-100 p-3 rounded-2xl">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                {/* Label linked with input */}
                <label
                  htmlFor="my-drawer"
                  className="lg:hidden me-3 cursor-pointer"
                >
                  <RxHamburgerMenu size={25} />
                </label>

                <ProFastLogo />
              </div>

              <ul className="hidden lg:flex gap-4 bg-white shadow-md border border-gray-100 rounded-full px-5 py-3 hover:shadow-md transition">
                {links}
              </ul>

              {user ? (
                <div ref={ref} className="relative ml-4">
                  {/* Trigger */}
                  <button
                    onClick={() => setOpen(!open)}
                    className="flex items-center gap-2 bg-white md:shadow-md border border-gray-100 rounded-full px-3 py-3 hover:shadow-md transition"
                  >
                    <FaUserCircle size={22} className="text-gray-700" />
                    <span className="hidden sm:inline text-sm font-medium text-gray-700">
                      <span className="font-semibold">{user?.displayName}</span>
                    </span>
                    <svg
                      className={`w-3 h-3 ml-1 transition-transform duration-200 ${
                        open ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Dropdown menu */}
                  {open && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                      <ul className="text-sm text-gray-700">
                        <li>
                          <Link
                            to="/profile"
                            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                          >
                            <FaUser className="text-gray-500" />
                            Profile
                          </Link>
                        </li>

                        {role === "admin" || role === "rider" ? (
                          <li>
                            <Link
                              to="/dashboard"
                              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                            >
                              <FiGrid className="text-gray-500" />
                              Dashboard
                            </Link>
                          </li>
                        ) : (
                          <li>
                            <Link
                              to="/my-deliveries"
                              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                            >
                              <FiGrid className="text-gray-500" />
                              My Deliveries
                            </Link>
                          </li>
                        )}

                        <li>
                          <LogoutButton />
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex gap-2">
                  <Link
                    to="/signUp"
                    className="px-4 py-2 font-semibold text-white bg-primary/90 rounded-lg shadow-md hover:bg-primary transition-colors duration-200"
                  >
                    Sign Up
                  </Link>

                  <Link
                    to="/login"
                    className="px-4 py-2 font-semibold text-primary bg-white  border rounded-lg shadow-md transition-colors duration-200"
                  >
                    Log In
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Drawer Side (Sidebar Menu) */}
        <div className="drawer-side overflow-hidden">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 space-y-2">
            <ProFastLogo />
            {links}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navber;
