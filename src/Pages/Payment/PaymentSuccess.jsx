import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { trackingId, amount } = state || {};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-green-200 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md w-full text-center">
        <FaCheckCircle className="mx-auto h-20 w-20 text-green-500" />
        <h1 className="text-3xl font-bold mt-4 text-green-700">
          Payment Successful!
        </h1>
        <p className="mt-2 text-gray-600">Thank you for your payment.</p>

        {trackingId && (
          <p className="mt-4 text-gray-700">
            <span className="font-semibold">Tracking ID:</span> {trackingId}
          </p>
        )}
        {amount && (
          <p className="mt-2 text-gray-700">
            <span className="font-semibold">Amount Paid:</span> ৳ {amount}
          </p>
        )}

        <button
          onClick={() => navigate("/my-deliveries")}
          className="mt-6 px-6 py-3 font-semibold bg-green-500 text-white rounded-lg  hover:bg-green-600 transition-colors"
        >
          Go to My Parcel
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
