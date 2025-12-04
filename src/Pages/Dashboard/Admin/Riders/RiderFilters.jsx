import React from "react";

const RiderFilters = ({ filters, setFilters }) => {
  return (
    <div className="p-4 my-2 md:my-4 bg-white shadow rounded-md ">
      <select
        onChange={(e) => setFilters({ ...filters, status: e.target.value })}
        value={filters.status}
        className="select select-bordered"
      >
        <option value="">All Rider</option>
        <option value="pending">Pending Rider</option>
        <option value="approved">Active Rider</option>
        <option value="rejected">Rejected Rider</option>
      </select>
      <button
        onClick={() =>
          setFilters({
            status: "",
          })
        }
        className="bg-red-500 btn ml-2 text-white"
      >
        Reset
      </button>
    </div>
  );
};

export default RiderFilters;
