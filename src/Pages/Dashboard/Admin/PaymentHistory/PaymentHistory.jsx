import React, { useState } from "react";
import DataTable from "../../../../Component/DataTable/DataTable";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import DetailsModal from "../../../../Component/DetailsModal/DetailsModal";
import LoadingSpinner from "../../../../Component/LoadingSpinner/LoadingSpinner";

const PaymentHistory = () => {
  const axiosInstance = useAxiosSecure();
  const [open, setOpen] = useState(false);
  const [detailsData, setDetailsData] = useState(null);

  const { data, isLoading } = useQuery({
    queryKey: "Payments",
    queryFn: async () => {
      const result = await axiosInstance.get("/api/v1/admin/payment-history");
      return result.data.data;
    },
    enabled: true,
  });

  if (isLoading) return <LoadingSpinner />;

  const columns = [
    { label: "ID", key: "id" },
    {
      label: "Parcel Tracking ID",
      key: "parcel_trackingId",
    },
    {
      label: "Card Type",
      key: "card_type",
    },
    { label: "Transaction ID", key: "tran_id" },

    { label: "Amount", key: "amount" },
    {
      label: "Status",
      key: "status",
      render: (value) => (
        <span
          className={`font-semibold ${
            value === "VALID" ? "text-green-500" : "text-red-500"
          }`}
        >
          {value}
        </span>
      ),
    },
    { label: "Payment Date", key: "payment_date" },

    {
      label: "Action",
      key: "action",
      render: (_, row) => (
        <button
          className="btn btn-xs btn-info text-white"
          onClick={() => {
            setDetailsData(row);
            setOpen(true);
          }}
        >
          View
        </button>
      ),
    },
  ];

  return (
    <div>
      <DataTable data={data} columns={columns} />
      {/* Details Modal */}
      {detailsData && open && (
        <DetailsModal
          data={detailsData}
          onClose={() => setOpen(false)}
          title={"Payment Details"}
        />
      )}
    </div>
  );
};

export default PaymentHistory;
