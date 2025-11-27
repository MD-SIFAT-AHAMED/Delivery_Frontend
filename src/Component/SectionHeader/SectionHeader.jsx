import React from "react";

const SectionHeader = ({
  title,
  subtitle,
  align = "center",
  Hcolor = "text-gray-800",
  SHcolor = "text-gray-600",
}) => {
  return (
    <div className={`text-${align} max-w-2xl mx-auto my-8`}>
      <h2 className={`text-2xl md:text-3xl font-bold ${Hcolor} mb-2`}>
        {title}
      </h2>
      <p className={`${SHcolor} text-base md:text-lg`}>{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
