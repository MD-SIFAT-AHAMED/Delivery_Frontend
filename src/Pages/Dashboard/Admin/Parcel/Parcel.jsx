import React from "react";
import DataTable from "../../../../Component/DataTable/DataTable";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { fetchParcels } from "../../../../Api/AdminApi";

const Parcel = () => {
  const axiosInstance = useAxiosSecure();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["parcels"],
    queryFn: () => fetchParcels(axiosInstance),
  });

  const columns = [
  { label: "#", key: "serial" },

  { label: "Tracking ID", key: "trackingId", className: "font-medium" },

  { label: "Title", key: "title" },

  { label: "Type", key: "type" },

  { label: "Region", key: "senderRegion" },

  { label: "Delivery Status", key: "delivery_status",
    render: (value) => (
      <span
        className={`font-semibold ${
          value === "Delivered"
            ? "text-green-600"
            : value === "Not_collected"
            ? "text-red-500"
            : "text-yellow-600"
        }`}
      >
        {value.replace("_", " ")}
      </span>
    ),
  },

  { label: "Payment", key: "payment_status",
    render: (value) => (
      <span
        className={`font-semibold ${
          value === "Paid" ? "text-green-500" : "text-red-500"
        }`}
      >
        {value}
      </span>
    ),
  },

  { label: "Created", key: "created_at",
    render: (_, row) =>
      row.created_at ? new Date(row.created_at).toLocaleDateString() : "N/A",
  },

  {
    label: "Actions",
    key: "actions",
    headerClassName: "text-center",
    render: (_, row) => (
      <div className="flex gap-2 justify-center">
        <button className="btn btn-xs btn-info">View</button>
        <button className="btn btn-xs btn-warning">Edit</button>
        <button className="btn btn-xs bg-amber-500">Assign Rider</button>
        <button className="btn btn-xs btn-success">Status</button>
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

export default Parcel;
