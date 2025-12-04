import React from "react";
import { HiUserCircle } from "react-icons/hi";

const AdminWelcome = ({ name }) => {
  const today = new Date();
  const hours = today.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const date = today.toLocaleString("en-US", { dateStyle: "medium" });

  return (
    <div
      className="flex items-center gap-3 bg-gradient-to-r 
      from-blue-400 to-indigo-800 px-4 py-2 rounded-lg 
       text-white hover:shadow-lg transition-all"
    >
      {/* Icon */}
      <div className="bg-white/20 p-2 rounded-full flex items-center justify-center shadow-inner">
        <HiUserCircle size={22} className="text-white" />
      </div>

      {/* Text */}
      <div className="flex flex-col leading-tight">
        <span className="text-[11px] opacity-90">Welcome Back</span>
        <span className="font-semibold text-sm">{name}</span>

        {/* Optional Time */}
        <span className="text-[10px] opacity-80 mt-[2px]">
          {date} • {hours}
        </span>
      </div>
    </div>
  );
};

export default AdminWelcome;
