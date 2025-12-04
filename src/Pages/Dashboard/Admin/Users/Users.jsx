import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchUsers, } from "../../../../Api/UserApi";
import { FaEye, FaEdit, FaTrash, FaUserShield } from "react-icons/fa";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import DataTable from "../../../../Component/DataTable/DataTable";
import DetailsModal from "../../../../Component/DetailsModal/DetailsModal";
import toast from "react-hot-toast";
import UserDeleteModal from "./UserDeleteModal";

const Users = () => {
  const queryClient = useQueryClient();
  const axiosInstance = useAxiosSecure();
  const [search, setSearch] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteData, setDeleteData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [detailsModal, setDetailsModal] = useState(null);

  // Fetch users
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: () => fetchUsers(axiosInstance, search),
    enabled: true,
  });

  const searchUser = async () => {
    await refetch();
  };

  const columns = [
    { label: "#", key: "serial" },

    { label: "Name", key: "name", className: "font-medium" },

    { label: "Email", key: "email" },

    {
      label: "Role",
      key: "role",
      render: (value) => <span className="capitalize">{value}</span>,
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
      label: "Actions",
      key: "actions",
      headerClassName: "text-center",
      render: (_, row) => (
        <div className="flex gap-2 justify-center">
          <button
            onClick={() => {
              setDetailsModal(true);
              setUserData(row);
            }}
            className="btn btn-xs text-white bg-sky-500"
          >
            View
          </button>

          {/* <button className="btn btn-xs btn-warning">Edit</button>

          <button className="btn btn-xs btn-success">Change Role</button> */}

          <button
            className="btn btn-xs text-white bg-red-500"
            onClick={() => {
              setDeleteData(row);
              setDeleteModal(true);
            }}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

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

      {/* user details view Modal */}
      {userData && detailsModal && (
        <DetailsModal
          data={userData}
          onClose={() => setDetailsModal(false)}
          title={"User Details"}
        />
      )}

      {/* Confrim Delete modal */}
      {deleteModal && deleteData && (
        <UserDeleteModal
          title={"Delete User"}
          data={deleteData}
          queryClient={queryClient}
          onCancel={() => setDeleteModal(false)}
        />
      )}
    </div>
  );
};

export default Users;
