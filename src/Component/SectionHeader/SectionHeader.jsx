import React from "react";

const SectionHeader = ({ title, subtitle ,align="center"}) => {
  return (
    <div className={`text-${align} max-w-2xl mx-auto my-8`}>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
        {title}
      </h2>
      <p className="text-gray-600 text-base md:text-lg">{subtitle}</p>
      <div
        className={`mt-3 h-1 w-50 ${
          align === "center" ? "mx-auto" : ""
        } bg-gray-900 rounded`}
      ></div>
    </div>
  );
};

export default SectionHeader;
