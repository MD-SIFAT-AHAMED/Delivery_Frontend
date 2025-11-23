import React from "react";
import DataTable from "../../../Component/DataTable/DataTable";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { fetchRider } from "../../../Api/RiderApi";

const Riders = () => {
  const axiosInstance = useAxiosSecure();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["riders"],
    queryFn: () => fetchRider(axiosInstance),
  });
  console.log(data);

  const columns = [
    { label: "#", key: "serial" },

    { label: "Name", key: "name", className: "font-medium" },

    { label: "Email", key: "email" },

    { label: "Region", key: "region" },

    {
      label: "Status",
      key: "status",
      render: (value) =>
        value === "approved" ? (
          <span className="text-green-500 font-semibold">Approved</span>
        ) : value === "rejected" ? (
          <span className="text-red-500 font-semibold">Rejected</span>
        ) : (
          <span className="text-yellow-600 font-semibold capitalize">
            {value}
          </span>
        ),
    },

    {
      label: "Applied Date",
      key: "applied_date",
       render: (_, row) => new Date(row.applied_date).toLocaleDateString(),
    },

    {
      label: "Actions",
      key: "actions",
      headerClassName: "text-center",
      render: (_, row) => (
        <div className="flex gap-2 justify-center">
          <button className="btn btn-xs btn-info">View</button>

          <button className="btn btn-xs btn-success">Approve</button>

          <button className="btn btn-xs btn-warning">Reject</button>

          <button className="btn btn-xs btn-error">Delete</button>
        </div>
      ),
    },
    
  ];

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Riders;
