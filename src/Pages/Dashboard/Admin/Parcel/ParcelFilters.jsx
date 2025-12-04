import React, { useState } from "react";

const ParcelFilters = ({ filters, setFilters }) => {
  return (
    <div className="p-4 my-2 md:my-4 bg-white shadow rounded-md grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* Delivery Status */}
      <select
        className="select select-bordered md:w-full"
        value={filters.delivery_status}
        onChange={(e) =>
          setFilters({ ...filters, delivery_status: e.target.value })
        }
      >
        <option value="">All Status</option>
        <option value="Pending">Pending</option>
        <option value="Assigned">Assigned</option>
        <option value="Picked">Picked</option>
        <option value="In_transit">In Transit</option>
        <option value="Delivered">Delivered</option>
      </select>

      {/* Payment */}
      <select
        className="select select-bordered  md:w-full"
        value={filters.payment_status}
        onChange={(e) =>
          setFilters({ ...filters, payment_status: e.target.value })
        }
      >
        <option value="">All Payments</option>
        <option value="paid">Paid</option>
        <option value="UnPaid">Unpaid</option>
        <option value="pending">Pending</option>
      </select>

      {/* Region */}
      <select
        className="select select-bordered  md:w-full"
        value={filters.region}
        onChange={(e) => setFilters({ ...filters, region: e.target.value })}
      >
        <option value="">All Regions</option>
        <option value="Dhaka">Dhaka</option>
        <option value="Chittagong">Chittagong</option>
        <option value="Sylhet">Sylhet</option>
        <option value="Rangpur">Rangpur</option>
        <option value="Khulna">Khulna</option>
        <option value="Rajshahi">Rajshahi</option>
        <option value="Barisal">Barisal</option>
        <option value="Mymensingh">Mymensingh</option>
        {/* more */}
      </select>

      {/* Reset Button */}
      <button
        className="btn bg-red-500 text-white  w-fit"
        onClick={() =>
          setFilters({
            delivery_status: "",
            payment_status: "",
            region: "",
          })
        }
      >
        Reset
      </button>
    </div>
  );
};

export default ParcelFilters;
