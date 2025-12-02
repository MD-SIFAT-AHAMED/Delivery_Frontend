import React, { useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const statusOptions = [
  "Pending",
  "Assigned",
  "Picked",
  "In_transit",
  "Delivered",
  "Cancelled",
];

const ParcelStatusModal = ({ parcel, onClose, queryClient }) => {
    
  const axiosInstance = useAxiosSecure();
  const [status, setStatus] = useState(parcel.delivery_status);

  const mutation = useMutation({
    mutationFn: async (newStatus) => {
      const { data } = await axiosInstance.patch(
        `/api/v1/admin/update-status/${parcel.id}`,
        { delivery_status: newStatus }
      );
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["parcels"]);
      toast.success("Status Update Successfully");
      onClose();
    },
    onError: (err) => {
      toast.error("Failed to Status Update");
      onClose();
    },
  });

  const handleSave = () => {
    mutation.mutate(status);
  };

  return (
    <div className="fixed inset-0 bg-white/80 bg-opacity-30 flex items-center  justify-center z-50">
      <div className="bg-white shadow-2xl rounded-xl p-6 w-96 space-y-4">
        <h3 className="text-lg font-bold text-[#03373d]">
          Update Parcel Status
        </h3>
        <p>
          <span className="font-semibold">Tracking ID:</span>
          {parcel.trackingId}
        </p>
        <select
          className="w-full border border-gray-300 rounded px-3 py-2"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          {statusOptions.map((option) => (
            <option key={option} value={option}>
              {option.replace("_", " ")}
            </option>
          ))}
        </select>
        <div className="flex justify-end gap-2">
          <button className="btn btn-sm btn-outline" onClick={onClose}>
            Cancel
          </button>
          <button
            className="btn btn-sm btn-primary text-black"
            onClick={handleSave}
            disabled={mutation.isLoading}
          >
            {mutation.isLoading ? "Updating..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParcelStatusModal;
