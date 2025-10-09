import React from "react";
import ProFastLogo from "../Pages/Shared/ProFastLogo/ProFastLogo";
import authImage from "../assets/authImage.png";
import { Outlet } from "react-router";
const AuthLayout = () => {
  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto ">
      <ProFastLogo />
      <div className="flex flex-col md:flex-row min-h-screen gap-2 justify-center items-center">
        <div>
          <Outlet />
        </div>
        <div className="bg-primary/10 flex place-items-center min-h-screen">
          <img src={authImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
