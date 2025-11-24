import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FcViewDetails } from "react-icons/fc";
import { useLoaderData } from "react-router";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import ParcelSummary from "./ParcelSummary";
import PaymentSelect from "./PaymentSelect";
import FromParcel from "./FromParcel";
import calculateCost from "../../Utils/calculateCost";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [showConfirm, setShowConfirm] = useState(false);
  const [parcelData, setParcelData] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [cost, setCost] = useState(0);
  const allDistrict = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const type = watch("type");
  const senderRegion = watch("senderRegion");
  const receiverRegion = watch("receiverRegion");

  const onSubmit = (data) => {
    const calculatedCost = calculateCost(data);
    setCost(calculatedCost);
    setParcelData(data);
    console.log(parcelData, calculatedCost);
    setShowConfirm(true);
  };

  const onClose = () => {
    setShowConfirm(false);
  };

  const onConfirm = () => {
    setShowPayment(true);
    setShowConfirm(false);
  };

  // const confirmSubmit = (data) => {
  //   const deliveryData = {
  //     ...data,
  //     cost: cost,
  //     created_by: user.email,
  //     delivery_status: "Not_collected",
  //     payment_status: "UnPaid",
  //     trackingId: GenerateTrackingId(),
  //     creation_date: new Date().toISOString(),
  //   };
  //   setParcelData(deliveryData);

  //   console.log(deliveryData);
  //   // axiosSecure.post("/parcels", parcelData).then((res) => {
  //   //   if (res.data.insertedId) {
  //   //     console.log("Saving to DB:", parcelData);
  //   //     toast.success("Parcel information saved successfully!");
  //   //     // reset();
  //   //     setShowConfirm(false);
  //   //   }
  //   // });
  // };

  return (
    <div className="bg-gray-200 py-5">
      <div className="max-w-screen-2xl w-11/12 bg-base-100 rounded-2xl mx-auto ">
        {/* From parcel */}
        <FromParcel
          register={register}
          errors={errors}
          watch={watch}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          allDistrict={allDistrict}
          type={type}
          senderRegion={senderRegion}
          receiverRegion={receiverRegion}
        />

        {/* Review Details modal*/}
        {showConfirm && (
          <div className="fixed bg-white/90 inset-0  bg-opacity-30 flex justify-center items-center z-50">
            <ParcelSummary
              parcel={parcelData}
              onClose={onClose}
              onConfirm={onConfirm}
              cost={cost}
            />
          </div>
        )}

        {/* Payment modal */}
        {showPayment && (
          <div className="fixed bg-white inset-0  bg-opacity-30 flex justify-center items-center z-50">
            <PaymentSelect />
          </div>
        )}
      </div>
    </div>
  );
};

export default SendParcel;
