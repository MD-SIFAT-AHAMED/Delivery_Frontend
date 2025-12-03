import React from "react";

const DetailsModal = ({ title, onClose, data }) => {
  return (
    <div className="fixed inset-0 bg-white/80 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg  max-w-lg w-2xl shadow-2xl">
        {/* header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl text-[#03373d] font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 font-bold text-xl hover:text-red-500"
          >
            X
          </button>
        </div>
        {/*Content */}
        <div className="p-3 h-70 overflow-auto bg-gray-100 rounded-xl">
          {Object.entries(data)?.map(([key, value]) => (
            <div key={key} className="flex justify-between pb-2">
              <span className="font-medium capitalize">
                {key.replace("_", " ")}
              </span>
              <span className="text-right">{value}</span>
            </div>
          ))}
        </div>

        {/* footer */}
        <div className="mt-4 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-primary rounded hover:bg-primary/40"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
