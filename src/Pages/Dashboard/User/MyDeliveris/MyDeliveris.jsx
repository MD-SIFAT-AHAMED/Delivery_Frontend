import React, { useState } from "react";
import MyDeliveryCard from "./MyDeliveryCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";
import ParcelDetailsModal from "./ParcelDetailsModal";
import DetailsModal from "../../../../Component/DetailsModal/DetailsModal";

const MyDeliveris = () => {
  const axiosInstance = useAxiosSecure();
  const [detailsModal, setDetailsModal] = useState(false);
  const [parcelData, setParcelData] = useState(null);
  const { user } = useAuth();

  const { data: deliveries } = useQuery({
    queryKey: ["deliveries"],
    queryFn: async () => {
      const res = await axiosInstance.get(`/api/v1/users/my-parcel`, {
        params: { email: user?.email },
      });
      return res.data.data;
    },
    enabled: true,
  });

  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto py-10">
      <h3 className="text-2xl font-bold my-3 text-[#03373d]">My Delivery</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {deliveries?.map((d, index) => (
          <MyDeliveryCard
            key={index}
            item={d}
            setDetailsModal={setDetailsModal}
            setParcelData={setParcelData}
          />
        ))}
      </div>

      {/* parce info Modal */}
      {parcelData && detailsModal && (
        <DetailsModal
          data={parcelData}
          onClose={() => setDetailsModal(false)}
          title={"Parcel Details"}
        />
      )}
    </div>
  );
};

export default MyDeliveris;
