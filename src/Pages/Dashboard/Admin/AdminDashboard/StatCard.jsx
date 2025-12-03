import React from "react";

const StatCard = ({ title, value, icon: Icon, color }) => {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-5 flex items-center h-28 
      border border-gray-100 gap-4 hover:shadow-xl hover:scale-[1.02] 
      transition-all duration-300">

      <div
        className={`p-4 rounded-xl text-white bg-gradient-to-br ${color}
        flex items-center justify-center shadow-md`}
      >
        <Icon size={28} />
      </div>

      <div className="flex flex-col">
        <p className="text-gray-500 text-xs uppercase tracking-wide">{title}</p>
        <h2 className="text-3xl font-bold text-gray-900 leading-tight">{value}</h2>
      </div>
    </div>
  );
};

export default StatCard;
