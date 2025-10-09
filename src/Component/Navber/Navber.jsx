import React from "react";
import { Link, NavLink } from "react-router";
import ProFastLogo from "../../Pages/Shared/ProFastLogo/ProFastLogo";
import { RxHamburgerMenu } from "react-icons/rx";

const Navber = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/Services"}>Services</NavLink>
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

              <div className="flex gap-2">
                <Link
                  to={"/signUp"}
                  className="bg-primary text-gray-800 font-medium px-3 py-2 rounded-xl"
                >
                  Sign Up
                </Link>
                <p className="bg-primary text-gray-800 px-3 py-2 rounded-xl font-medium">
                  Log In
                </p>
              </div>
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
