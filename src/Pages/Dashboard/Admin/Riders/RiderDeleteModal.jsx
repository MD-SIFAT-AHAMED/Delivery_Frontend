import React from "react";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const RiderDeleteModal = ({ queryClient, data, title, message, onCancel }) => {
  const axiosInstance = useAxiosSecure();
  // Delete parcel
  const deleteMutaion = useMutation({
    mutationFn: async (email) => {
      console.log(email)
      const data = await axiosInstance.delete(
        `/api/v1/admin/delete-riderAppilcation?userEmail=${email}`
      );
      return data;
    },
    onSuccess: () => {
      toast.success("Rider Delete Successfully");
      // parcels reload
      queryClient.invalidateQueries(["riders"]);
      onCancel();
    },
    onError: (err) => {
      toast.error("Failed to Delete", err);
      onCancel();
    },
  });

  const handlerDeleteParcelConfrim = () => {
    deleteMutaion.mutate(data.email);
  };

  return (
    <div className="fixed inset-0 bg-white/90 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        {/* Header */}
        <h2 className="text-xl font-semibold mb-4">
          {title || "Confirm Delete"}
        </h2>

        {/* Message */}
        <p className="mb-6 text-gray-700">
          {message || "Are you sure you want to delete ?"}
        </p>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
          >
            Cancel
          </button>

          <button
            onClick={handlerDeleteParcelConfrim}
            className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default RiderDeleteModal;
