import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchUsers, deleteUser } from "../../../Api/UserApi";
import { FaEye, FaEdit, FaTrash, FaUserShield } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Users = () => {
  const queryClient = useQueryClient();
  const axiosInstance = useAxiosSecure();

  // Fetch users
  const { data: users = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: () => fetchUsers(axiosInstance),
  });
  console.log(users);

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

  return (
    <div className="shadow-lg min-w-screen rounded-lg">
      <table className="table w-full min-w-max">
        <thead className="bg-base-200">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Role</th>
            <th>Status</th>
            <th>Created</th>
            <th>Updated</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, idx) => (
            <tr key={user.id}>
              <td>{idx + 1}</td>
              <td className="font-medium">{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>
                <span className="badge badge-outline capitalize">{user.role}</span>
              </td>
              <td>
                {user.is_active ? (
                  <span className="text-green-500 font-semibold">Active</span>
                ) : (
                  <span className="text-red-500 font-semibold">Inactive</span>
                )}
              </td>
              <td>{new Date(user.create_at).toLocaleDateString()}</td>
              <td>{new Date(user.update_at).toLocaleDateString()}</td>
              <td className="flex gap-2 justify-center">
                <button className="btn btn-xs btn-info" title="View">
                  <FaEye />
                </button>
                <button className="btn btn-xs btn-warning" title="Edit">
                  <FaEdit />
                </button>
                <button className="btn btn-xs btn-success" title="Change Role">
                  <FaUserShield />
                </button>
                <button
                  className="btn btn-xs btn-error"
                  onClick={() => handleDelete(user.id)}
                  title="Delete"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
