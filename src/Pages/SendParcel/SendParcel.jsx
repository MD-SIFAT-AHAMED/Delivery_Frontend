import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FcViewDetails } from "react-icons/fc";
import { useLoaderData, useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import ParcelSummary from "./ParcelSummary";
import PaymentSelect from "./PaymentSelect";
import FromParcel from "./FromParcel";
import calculateCost from "../../Utils/calculateCost";
import { PostParcelInfo } from "../../Api/UserApi";

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
  const axiosInstance = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();

  const type = watch("type");
  const senderRegion = watch("senderRegion");
  const receiverRegion = watch("receiverRegion");

  const onSubmit = (data) => {
    const calculatedCost = calculateCost(data);
    setCost(calculatedCost);
    setParcelData(data);
    setShowConfirm(true);
  };

  const onClose = () => {
    setShowConfirm(false);
  };

  const onConfirm = () => {
    setShowPayment(true);
    setShowConfirm(false);
  };

  // SSL payment
  const OnSSL = async (parcelInfo) => {
    console.log(parcelInfo);
    try {
      const deliveryData = {
        ...parcelInfo,
        weight: parcelData?.weight ? parseFloat(parcelData.weight) : null,
        // cost: parseFloat(cost),
        delivery_status: "Pending",
        payment_status: "pending",
        created_by: user.email,
      };
      // console.log(parcelData);

      // Call API to save parcel and get trackingId
      const trackingId = await PostParcelInfo(axiosInstance, deliveryData);

      // Initiate SSL payment
      const res = await axiosInstance.post(
        "/api/v1/payment/create-ssl-payment",
        {
          ...deliveryData,
          trackingId,
        }
      );
      console.log(res.data?.GatewayPageURL);
      if (res.data?.GatewayPageURL) {
        window.location.replace(res.data.GatewayPageURL);

        setShowPayment(false);
      }
    } catch (err) {
      console.error("Parcel/payment error:", err);
      toast.error("Failed to complete parcel/payment process");
    }
  };

  // Cash on Delivery
  const onCOD = async (parcelInfo) => {
    try {
      const deliveryData = {
        ...parcelInfo,
        weight: parcelData?.weight ? parseFloat(parcelData.weight) : null,
        delivery_status: "Pending",
        payment_status: "UnPaid",
        created_by: user.email,
      };
      // Call API to save parcel and get trackingId
      const trackingId = await PostParcelInfo(axiosInstance, deliveryData);
      if (trackingId) {
        setShowPayment(false);
        toast.success("Your parcel request has been submitted successfully");
        navigate("/my-deliveries");
      }
    } catch (error) {
      toast.error("Failed to complete parcel");
    }
  };

  return (
    <div className="bg-gray-100 py-5">
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
            <PaymentSelect
              parcelData={parcelData}
              cost={cost}
              onCOD={onCOD}
              OnSSL={OnSSL}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SendParcel;
