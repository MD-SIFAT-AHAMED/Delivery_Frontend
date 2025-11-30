import React, { useState } from "react";
import DataTable from "../../../../Component/DataTable/DataTable";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchRider } from "../../../../Api/RiderApi";
import DetailsModal from "../../../../Component/DetailsModal/DetailsModal";
import { fetchRiderInfo } from "../../../../Api/AdminApi";
import toast from "react-hot-toast";

const Riders = () => {
  const axiosInstance = useAxiosSecure();
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState(null);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["riders"],
    queryFn: () => fetchRider(axiosInstance),
  });

  const { data: riderInfo } = useQuery({
    queryKey: ["riderInfo", selectedEmail],
    queryFn: () => fetchRiderInfo(axiosInstance, selectedEmail),
    enabled: !!selectedEmail,
  });

  const approveMutation = useMutation({
    mutationFn: (userEmail) =>
      axiosInstance.put("/api/v1/admin/approve-riderAppilcation", {
        userEmail,
      }),
    onSuccess: () => {
      toast.success("Rider approved successfully");
      //  riders and info reload
      queryClient.invalidateQueries(["riders"]);
      queryClient.invalidateQueries(["riderInfo"]);
    },
    onError: () => {
      toast.error("Failed to approve rider");
    },
  });

  //Details view handler
  const handlerViewDeatils = (userEmail) => {
    setSelectedEmail(userEmail);
    setOpen(true);
  };

  const handlerRiderApprove = (userEmail) => {
    approveMutation.mutate(userEmail);
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
            onClick={() => handlerViewDeatils(row?.email)}
            className="btn btn-xs btn-info"
          >
            View
          </button>

          <button
            onClick={() => handlerRiderApprove(row?.email)}
            className="btn btn-xs btn-success"
          >
            Approve
          </button>

          <button className="btn btn-xs btn-warning">Reject</button>

          <button className="btn btn-xs btn-error">Delete</button>
        </div>
      ),
    },
  ];

  return (
    <div>
      {/* Table */}
      <DataTable columns={columns} data={data} />
      {/* Details Modal */}
      <DetailsModal
        open={open}
        title={"Rider Application Details"}
        data={riderInfo?.[0] || []}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default Riders;
