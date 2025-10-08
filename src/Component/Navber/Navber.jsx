import React, { useState } from "react";
import { NavLink } from "react-router";
import ProFastLogo from "../../Pages/Shared/ProFastLogo/ProFastLogo";

const Navber = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const links = (
    <>
      <li>Services</li>
      <li>
        <NavLink to={"/coverage"}>Coverage</NavLink>
      </li>
      <li>
        <NavLink to={"/sendparcel"}>Send A Parcel</NavLink>
      </li>
      <li>About Us</li>
      <li>Pricing</li>
      <li>
        <NavLink to={"/beARider"}>Be a Rider</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-gray-300">
      <div className="max-w-screen-2xl w-11/12 mx-auto bg-base-100">
        <div className="flex justify-between items-center">
          <div>
            <ProFastLogo />
          </div>
          <ul className="flex gap-2">{links}</ul>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
