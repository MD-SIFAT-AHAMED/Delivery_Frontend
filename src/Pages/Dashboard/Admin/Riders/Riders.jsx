import React, { useState } from "react";
import DataTable from "../../../../Component/DataTable/DataTable";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchRider } from "../../../../Api/RiderApi";
import DetailsModal from "../../../../Component/DetailsModal/DetailsModal";
import toast from "react-hot-toast";
import RiderDeleteModal from "./RiderDeleteModal";
import RiderFilters from "./RiderFilters";

const Riders = () => {
  const axiosInstance = useAxiosSecure();
  const queryClient = useQueryClient();
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteData, setDeleteData] = useState(null);
  const [riderData, setRiderData] = useState(null);
  const [detailsModal, setDetailsModal] = useState(null);
  const [filters, setFilters] = useState({
    status: "",
  });
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["riders", filters],
    queryFn: () => fetchRider(axiosInstance, filters),
  });

  // Approve mutaion function
  const approveMutation = useMutation({
    mutationFn: (userEmail) =>
      axiosInstance.put("/api/v1/admin/approve-riderAppilcation", {
        userEmail,
      }),
    onSuccess: () => {
      toast.success("Rider approved successfully");
      //  riders and info reload
      queryClient.invalidateQueries(["riders"]);
    },
    onError: () => {
      toast.error("Failed to approve rider");
    },
  });

  // Reject mutaion function
  const rejectMutation = useMutation({
    mutationFn: (userEmail) =>
      axiosInstance.put("/api/v1/admin/reject-riderAppilcation", {
        userEmail,
      }),
    onSuccess: () => {
      toast.success("Rider reject successfully");
      //  riders reload
      queryClient.invalidateQueries(["riders"]);
    },
    onError: () => {
      toast.error("Failed to reject rider");
    },
  });

  const handlerRiderApprove = (userEmail) => {
    approveMutation.mutate(userEmail);
  };

  const handlerRiderReject = (userEmail) => {
    rejectMutation.mutate(userEmail);
  };

  const columns = [
    { label: "#", key: "serial" },

    { label: "Name", key: "name", className: "font-medium" },

    { label: "Email", key: "email" },

    { label: "Region", key: "region" },

    {
      label: "Status",
      key: "status",
      render: (value) =>
        value === "approved" ? (
          <span className="text-green-500 font-semibold">Approved</span>
        ) : value === "rejected" ? (
          <span className="text-red-500 font-semibold">Rejected</span>
        ) : (
          <span className="text-yellow-600 font-semibold capitalize">
            {value}
          </span>
        ),
    },

    {
      label: "Applied Date",
      key: "applied_date",
      render: (_, row) => new Date(row.applied_date).toLocaleDateString(),
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
              setRiderData(row);
            }}
            className="btn btn-xs text-white bg-sky-500"
          >
            View
          </button>

          <button
            onClick={() => handlerRiderApprove(row?.email)}
            className="btn btn-xs text-white bg-green-500"
          >
            Approve
          </button>

          <button
            onClick={() => handlerRiderReject(row?.email)}
            className="btn btn-xs text-white bg-red-500"
          >
            Reject
          </button>

          <button
            onClick={() => {
              setDeleteData(row);
              setDeleteModal(true);
            }}
            className="btn btn-xs text-white bg-red-500"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      {/* Filter */}
      <RiderFilters setFilters={setFilters} filters={filters} />

      {/*Rider Table */}
      <DataTable columns={columns} data={data} />

      {/* Rider Details Modal */}
      {riderData && detailsModal && (
        <DetailsModal
          data={riderData}
          onClose={() => setDetailsModal(false)}
          title={"Parcel Details"}
        />
      )}

      {/* Confrim Delete modal */}
      {deleteModal && deleteData && (
        <RiderDeleteModal
          title={"Delete Parcel"}
          data={deleteData}
          queryClient={queryClient}
          onCancel={() => setDeleteModal(false)}
        />
      )}
    </div>
  );
};

export default Riders;
