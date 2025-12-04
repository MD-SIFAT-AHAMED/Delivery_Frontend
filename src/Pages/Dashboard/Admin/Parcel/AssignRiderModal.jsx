import { useEffect, useState } from "react";
import axios from "axios";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const AssignRiderModal = ({ isOpen, onClose, parcel, refetch }) => {
  const axiosInstance = useAxiosSecure();
  const [riders, setRiders] = useState([]);
  const [selectedRider, setSelectedRider] = useState("");
  const [loading, setLoading] = useState(false);

  // Load approved riders
  useEffect(() => {
    if (isOpen) {
      axiosInstance.get("/api/v1/admin/approve-rider").then((res) => {
        setRiders(res.data.data);
      });
    }
  }, [isOpen]);
  console.log(parcel.id);

  const handleAssign = async () => {
    if (!selectedRider) return toast.error("Select a rider!");

    setLoading(true);
    try {
      await axiosInstance.patch(`/api/v1/admin/assign-rider/${parcel.id}`, {
        riderId: selectedRider,
      });

      toast.success("Rider Assigned Successfully!");
      refetch();
      onClose();
    } catch (err) {
      toast.error("Failed to assign rider!", err);
    }
  };

  return (
    <div className="fixed inset-0 bg-white/90 bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md animate-fadeIn">
        <h2 className="text-xl font-bold mb-4">Assign Rider</h2>

        <p className="mb-2 text-sm text-gray-600">
          Tracking ID:{" "}
          <span className="font-semibold">{parcel.trackingId}</span>
        </p>

        <select
          className="select select-bordered w-full mb-4"
          value={selectedRider}
          onChange={(e) => setSelectedRider(e.target.value)}
        >
          <option value="">Select Rider</option>
          {riders?.map((rider) => (
            <option key={rider.id} value={rider.id}>
              {rider.name}
            </option>
          ))}
        </select>

        <div className="flex justify-end gap-3">
          <button className="btn btn-ghost" onClick={onClose}>
            Cancel
          </button>

          <button className="btn btn-primary" onClick={handleAssign}>
            Assign Rider
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignRiderModal;
