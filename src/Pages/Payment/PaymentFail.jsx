import React from "react";
import { useLocation, useNavigate } from "react-router";
import { XCircleIcon } from "@heroicons/react/24/solid";

const PaymentFail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Query params theke trackingId pawa
  const query = new URLSearchParams(location.search);
  const trackingId = query.get("trackingId");

  const handleRetry = () => {
    // Retry korar jonno, example: redirect to payment page
    navigate(`/payment?trackingId=${trackingId}`);
  };

  const handleSupport = () => {
    // Contact support page or mailto link
    window.location.href = "mailto:support@yourcompany.com";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-8 text-center">
        <XCircleIcon className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-red-600 mb-2">Payment Failed</h1>
        <p className="text-gray-700 mb-4">
          Oops! Your payment could not be processed.
        </p>
        {trackingId && (
          <p className="text-gray-500 mb-4">
            Tracking ID: <span className="font-mono">{trackingId}</span>
          </p>
        )}
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={handleRetry}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Retry Payment
          </button>
          <button
            onClick={handleSupport}
            className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentFail;
