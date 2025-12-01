import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchUsers, deleteUser, fetchUserInfo } from "../../../../Api/UserApi";
import { FaEye, FaEdit, FaTrash, FaUserShield } from "react-icons/fa";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import DataTable from "../../../../Component/DataTable/DataTable";
import DetailsModal from "../../../../Component/DetailsModal/DetailsModal";
import ConfirmDeleteModal from "../../../../Component/ConfirmDeleteModal/ConfirmDeleteModal";
import toast from "react-hot-toast";

const Users = () => {
  const queryClient = useQueryClient();
  const axiosInstance = useAxiosSecure();
  const [search, setSearch] = useState("");
  const [selectEamail, setSelcectEmail] = useState(null);
  const [open, setOpen] = useState(false);
  const [openConfrim, setOpenConfrim] = useState(false);
  const [deleteEmail, setDeleteEmail] = useState(null);

  // Fetch users
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: () => fetchUsers(axiosInstance, search),
    enabled: true,
  });

  // Fetch user info
  const { data: userInfo } = useQuery({
    queryKey: ["userInfo", selectEamail],
    queryFn: () => fetchUserInfo(axiosInstance, selectEamail),
    enabled: !!selectEamail,
  });

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: (deleteEmail) =>
      axiosInstance.delete(
        `/api/v1/admin/delete-user?userEmail=${deleteEmail}`
      ),
    onSuccess: () => {
      toast.success("User Delete Successfully");
      //user and userInfo reload
      queryClient.invalidateQueries("userInfo");
      queryClient.invalidateQueries("users");
    },
    onError: (err) => {
      toast.error("Failed to delete User", err);
    },
  });

  const searchUser = async () => {
    await refetch();
  };

  // User Detail view
  const handlerViewDetails = (userEmail) => {
    setSelcectEmail(userEmail);
    setOpen(true);
  };

  // Confrim delete
  const handlerConfrimDelete = () => {
    deleteMutation.mutate(deleteEmail);
    setOpenConfrim(false);
  };

  const handlerDelete = (userEmail) => {
    setDeleteEmail(userEmail);
    setOpenConfrim(true);
  };

  if (isLoading)
    return <span className="loading loading-spinner text-info"></span>;

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
            onClick={() => handlerViewDetails(row?.email)}
            className="btn btn-xs btn-info"
          >
            View
          </button>

          {/* <button className="btn btn-xs btn-warning">Edit</button>

          <button className="btn btn-xs btn-success">Change Role</button> */}

          <button
            className="btn btn-xs btn-error"
            onClick={() => handlerDelete(row?.email)}
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
      {/* user details view */}
      <DetailsModal
        onClose={() => setOpen(false)}
        open={open}
        data={userInfo || []}
        title={"User Details"}
      />
      {/* Delete confrim modal */}
      <ConfirmDeleteModal
        onConfirm={handlerConfrimDelete}
        onCancel={() => setOpenConfrim(false)}
        open={openConfrim}
      />
    </div>
  );
};

export default Users;
