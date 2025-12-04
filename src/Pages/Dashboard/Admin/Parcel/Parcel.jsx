import React, { useState } from "react";
import DataTable from "../../../../Component/DataTable/DataTable";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import DetailsModal from "../../../../Component/DetailsModal/DetailsModal";
import ConfirmDeleteModal from "../../../../Component/ConfirmDeleteModal/ConfirmDeleteModal";
import toast from "react-hot-toast";
import ParcelStatusModal from "./ParcelStatusModal";
import { fetchParcels } from "../../../../Api/AdminApi";
import AssignRiderModal from "./AssignRiderModal";
import ParcelFilters from "./ParcelFilters";
import NoData from "../../../../Component/NoData/NoData";

const Parcel = () => {
  const queryClient = useQueryClient();
  const [statusData, setStatusData] = useState(null);
  const [isStatusModal, setIsStatusModal] = useState(false);
  const [parcelData, setParcelData] = useState(null);
  const [detailsModal, setDetailsModal] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteData, setDeleteData] = useState(null);
  const [assignModal, setAssignModal] = useState(false);
  const [selectedParcel, setSelectedParcel] = useState(null);
  const [filters, setFilters] = useState({
    delivery_status: "",
    payment_status: "",
    region: "",
  });

  // Fetch parcels
  const axiosInstance = useAxiosSecure();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["parcels", filters],
    queryFn: () => fetchParcels(axiosInstance, filters),
  });

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
            onClick={() => {
              setDetailsModal(true);
              setParcelData(row);
            }}
            className="btn btn-xs text-white bg-sky-600"
          >
            View
          </button>

          {/* <button className="btn btn-xs btn-warning">Edit</button> */}

          <button
            onClick={() => {
              setSelectedParcel(row);
              setAssignModal(true);
            }}
            className="btn btn-xs text-white bg-amber-500"
          >
            Assign Rider
          </button>
          <button
            onClick={() => {
              setIsStatusModal(true);
              setStatusData(row);
            }}
            className="btn btn-xs text-white bg-green-500"
          >
            Status
          </button>
          <button
            onClick={() => {
              setDeleteData(row);
              setDeleteModal(true);
            }}
            className="btn btn-xs text-white bg-red-600"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      {/* Filter option */}
      <ParcelFilters setFilters={setFilters} filters={filters} />

      {/* Parcle Table */}
      <DataTable columns={columns} data={data} />

      {/* parce info Modal */}
      {parcelData && detailsModal && (
        <DetailsModal
          data={parcelData}
          onClose={() => setDetailsModal(false)}
          title={"Parcel Details"}
        />
      )}

      {/* Confrim Delete modal */}
      {deleteModal && deleteData && (
        <ConfirmDeleteModal
          title={"Delete Parcel"}
          data={deleteData}
          queryClient={queryClient}
          onCancel={() => setDeleteModal(false)}
        />
      )}

      {/* Status modal */}
      {isStatusModal && statusData && (
        <ParcelStatusModal
          parcel={statusData}
          onClose={() => setIsStatusModal(false)}
          queryClient={queryClient}
        />
      )}
      {/* AssignRider modal */}
      {assignModal && selectedParcel && (
        <AssignRiderModal
          isOpen={assignModal}
          onClose={() => setAssignModal(false)}
          parcel={selectedParcel}
          refetch={refetch}
        />
      )}

    </div>
  );
};

export default Parcel;
