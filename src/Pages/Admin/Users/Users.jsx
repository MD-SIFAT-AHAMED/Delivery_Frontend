import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchUsers, deleteUser } from "../../../Api/UserApi";
import { FaEye, FaEdit, FaTrash, FaUserShield } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import DataTable from "../../../Component/DataTable/DataTable";

const Users = () => {
  const queryClient = useQueryClient();
  const axiosInstance = useAxiosSecure();
  const [search, setSearch] = useState("");

  // Fetch users
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: () => fetchUsers(axiosInstance, search),
    enabled: true,
  });
  console.log(data);

  const searchUser = async () => {
    await refetch();
    console.log("hekk");
  };

  // Delete user mutation
  //   const deleteMutation = useMutation(deleteUser(axiosInstance, ), {
  //     onSuccess: () => queryClient.invalidateQueries(["users"]),
  //   });

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      deleteMutation.mutate(id);
    }
  };

  if (isLoading)
    return <span className="loading loading-spinner text-info"></span>;

  const columns = [
    { label: "#", key: "serial" },

    { label: "Name", key: "name", className: "font-medium" },

    { label: "Email", key: "email" },

    { label: "Address", key: "address" },

    {
      label: "Role",
      key: "role",
      render: (value) => (
        <span className="badge badge-outline capitalize">{value}</span>
      ),
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
      label: "Created",
      key: "create_at",
      render: (value) => new Date(value).toLocaleDateString(),
    },

    {
      label: "Updated",
      key: "update_at",
      render: (value) => new Date(value).toLocaleDateString(),
    },

    {
      label: "Actions",
      key: "actions",
      headerClassName: "text-center",
      render: (_, row) => (
        <div className="flex gap-2 justify-center">
          <button className="btn btn-xs btn-info">
            <FaEye />
          </button>

          <button className="btn btn-xs btn-warning">
            <FaEdit />
          </button>

          <button className="btn btn-xs btn-success">
            <FaUserShield />
          </button>

          <button
            className="btn btn-xs btn-error"
            onClick={() => handleDelete(row.id)}
          >
            <FaTrash />
          </button>
        </div>
      ),
    },
  ];
  console.log(search);
  return (
    <div>
      <div className="flex gap-2 items-center lg:justify-center py-3 ">
        <input
          className="bg-base-200 focus:outline-primary text-center rounded-2xl px-3 lg:px-30  py-2 "
          placeholder="Enter username or email"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <p
          onClick={searchUser}
          className="bg-primary cursor-pointer px-5 py-2 rounded-xl"
        >
          Search
        </p>
      </div>
      <div>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Users;
