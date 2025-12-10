import React from "react";
import DataTable from "../../../../Component/DataTable/DataTable";
import { fetchAdmin } from "../../../../Api/AdminApi";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../../Component/LoadingSpinner/LoadingSpinner";

const Admin = () => {
  const axiosInstance = useAxiosSecure();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["adminList"],
    queryFn: () => fetchAdmin(axiosInstance),
  });
  if (isLoading) return <LoadingSpinner />;
  const columns = [
    { label: "#", key: "serial" },
    {
      label: "Name",
      key: "name",
    },
    {
      label: "Email",
      key: "email",
    },
    {
      label: "Role",
      key: "role",
      className: "capitalize",
    },
    {
      label: "Status",
      key: "is_active",
      render: (value) =>
        value ? (
          <span className="text-green-500 font-semibold">Active</span>
        ) : (
          <span className="text-red-500 font-semibold">Inactive</span>
        ),
    },
    {
      label: "Actions",
      key: "actions",
      headerClassName: "text-center",
      render: (_, row) => (
        <div className="flex gap-2 justify-center">
          <button className="btn btn-xs bg-sky-400 text-white">View</button>

          <button className="btn btn-xs bg-green-500 text-white">Edit</button>

          <button className="btn btn-xs bg-amber-500 text-white">
            Role Change
          </button>

          <button className="btn btn-xs bg-red-500 text-white">Delete</button>
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

export default Admin;
