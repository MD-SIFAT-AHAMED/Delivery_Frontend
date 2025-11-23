import React from "react";
import DataTable from "../../../Component/DataTable/DataTable";
import { fetchAdmin } from "../../../Api/AdminApi";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Admin = () => {
  const axiosInstance = useAxiosSecure();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["adminList"],
    queryFn: () => fetchAdmin(axiosInstance),
  });
  console.log(data);
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
          <button className="btn btn-xs btn-info">View</button>

          <button className="btn btn-xs btn-success">Edit</button>

          <button className="btn btn-xs btn-warning">Role Change</button>

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

export default Admin;
