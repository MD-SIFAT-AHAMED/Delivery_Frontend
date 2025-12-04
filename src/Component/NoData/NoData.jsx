import React from "react";

const NoData = ({ message = "No Data Available", className = "" }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center py-10 text-center text-gray-400 ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 17v-2a4 4 0 014-4h2a4 4 0 014 4v2M9 17h6M12 3v4m0 0L8 7m4-4l4 4"
        />
      </svg>
      <p className="text-lg font-medium">{message}</p>
    </div>
  );
};

export default NoData;
