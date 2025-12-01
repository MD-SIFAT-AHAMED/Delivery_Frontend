import React, { useState } from "react";
import DataTable from "../../../../Component/DataTable/DataTable";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchParcelInfo, fetchParcels } from "../../../../Api/AdminApi";
import DetailsModal from "../../../../Component/DetailsModal/DetailsModal";
import ConfirmDeleteModal from "../../../../Component/ConfirmDeleteModal/ConfirmDeleteModal";
import toast from "react-hot-toast";

const Parcel = () => {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selecctTrackingId, setSelectTrackingId] = useState(null);
  const [deleteTrakingId, setDeleteTrakingId] = useState(null);

  // Fetch parcels
  const axiosInstance = useAxiosSecure();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["parcels"],
    queryFn: () => fetchParcels(axiosInstance),
  });

  // Fetch parce info
  const { data: parcelInfo } = useQuery({
    queryKey: ["parelInfo"],
    queryFn: () => fetchParcelInfo(axiosInstance, selecctTrackingId),
    enabled: !!selecctTrackingId,
  });

  // Delete parcel
  const deleteMutaion = useMutation({
    mutationFn: () =>
      axiosInstance.delete(
        `/api/v1/admin/delete-parcel?trakingId=${deleteTrakingId}`
      ),
    onSuccess: () => {
      toast.success("Parcel Delete Successfully");
      // parcels and parcel info reload
      queryClient.invalidateQueries("parcels");
      queryClient.invalidateQueries("parelInfo");
    },
    onError: (err) => {
      toast.error("Failed to Delete Parcel", err);
    },
  });

  const handlerParcelDetails = (trackingId) => {
    setSelectTrackingId(trackingId);
    setOpen(true);
  };

  const handlerDeleteParcelConfrim = () => {
    deleteMutaion.mutate();
    setOpenModal(false);
  };

  const handlerDeleteParcel = (trakingId) => {
    setDeleteTrakingId(trakingId);
    setOpenModal(true);
  };

  const columns = [
    { label: "#", key: "serial" },

    { label: "Tracking ID", key: "trackingId", className: "font-medium" },

    { label: "Title", key: "title" },

    { label: "Type", key: "type" },

    { label: "Region", key: "senderRegion" },

    {
      label: "Delivery Status",
      key: "delivery_status",
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

    {
      label: "Payment",
      key: "payment_status",
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

    {
      label: "Created",
      key: "created_at",
      render: (_, row) =>
        row.created_at ? new Date(row.created_at).toLocaleDateString() : "N/A",
    },

    {
      label: "Actions",
      key: "actions",
      headerClassName: "text-center",
      render: (_, row) => (
        <div className="flex gap-2 justify-center">
          <button
            onClick={() => handlerParcelDetails(row?.trackingId)}
            className="btn btn-xs btn-info"
          >
            View
          </button>
          <button className="btn btn-xs btn-warning">Edit</button>
          <button className="btn btn-xs bg-amber-500">Assign Rider</button>
          <button className="btn btn-xs btn-success">Status</button>
          <button
            onClick={() => handlerDeleteParcel(row?.trackingId)}
            className="btn btn-xs btn-error"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <DataTable columns={columns} data={data} />
      {/* parce info Modal */}
      <DetailsModal
        data={parcelInfo || []}
        onClose={() => setOpen(false)}
        title={"Parcel Details"}
        open={open}
      />
      {/* Confrim Delete modal */}
      <ConfirmDeleteModal
        open={openModal}
        title={"Delete Parcel"}
        onConfirm={handlerDeleteParcelConfrim}
        onCancel={() => setOpenModal(false)}
      />
    </div>
  );
};

export default Parcel;
