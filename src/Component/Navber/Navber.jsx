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
import LogoutButton from "../../Pages/Authentication/LogoutButton/LogoutButton";
import useClickOutside from "../../Hooks/useClickOutside";
import useUserRole from "../../Hooks/useUserRole";

const Navber = () => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const ref = useClickOutside(() => setOpen(false));
  const {role} = useUserRole()
  console.log(role)

  const links = (
    <>
      <li>
        <NavLink to={"/services"}>Services</NavLink>
      </li>
      <li>
        <NavLink to={"/coverage"}>Coverage</NavLink>
      </li>
      <li>
        <NavLink to={"/sendparcel"}>Send A Parcel</NavLink>
      </li>
      <li>
        <NavLink to={"/AboutUs"}>About Us</NavLink>
      </li>
      <li>
        <NavLink to={"/Pricing"}>Pricing</NavLink>
      </li>
      <li>
        <NavLink to={"/beARider"}>Be a Rider</NavLink>
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

              <ul className="hidden lg:flex gap-4">{links}</ul>

              {user ? (
                <div ref={ref} className="relative ">
                  <p
                    onClick={() => setOpen(!open)}
                    className="flex items-center gap-2 text-sm border px-3 py-2 rounded text-gray-700 font-medium cursor-pointer transition"
                  >
                    <FaUserCircle className="text-lg" />
                    <span className="italic">
                      Welcome,{" "}
                      <span className="font-semibold">{user?.displayName}</span>
                    </span>
                    <FaChevronDown className="text-xs opacity-80" />
                  </p>

                  {/* Dropdown menu */}

                  {open && (
                    <div className="absolute  z-10 right-0 mt-2 w-44 bg-white shadow-md rounded-md group-hover:opacity-100 transition-opacity duration-200">
                      <ul className="text-sm text-gray-700">
                        {/* Profile */}
                        <li>
                          <Link
                            to="/profile"
                            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                          >
                            <FaUser className="text-gray-500" />
                            Profile
                          </Link>
                        </li>

                        {/* Conditional dashboard or my deliveries */}
                        {user?.role === "admin" || user?.role === "rider" ? (
                          <li>
                            <Link
                              to="/dashboard"
                              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                            >
                              <FaTachometerAlt className="text-gray-500" />
                              Dashboard
                            </Link>
                          </li>
                        ) : (
                          <li>
                            <Link
                              // to="/my-deliveries"
                              to="/dashboard"
                              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                            >
                              <FaBox className="text-gray-500" />
                              My Deliveries
                            </Link>
                          </li>
                        )}

                        {/* Logout */}
                        <LogoutButton />
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex gap-2">
                  <Link
                    to={"/signUp"}
                    className="bg-primary text-gray-800 font-medium px-3 py-2 rounded-xl"
                  >
                    Sign Up
                  </Link>
                  <Link
                    to={"/login"}
                    className="bg-primary text-gray-800 px-3 py-2 rounded-xl font-medium"
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
            {links}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navber;
