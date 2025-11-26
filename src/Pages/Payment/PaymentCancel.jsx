
import React from "react";
import { FiXCircle } from "react-icons/fi";
import { Link } from "react-router";

const PaymentCancel = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        <FiXCircle className="text-red-500 mx-auto text-6xl mb-4" />
        <h1 className="text-2xl font-bold mb-2">Payment Cancelled</h1>
        <p className="text-gray-600 mb-6">
          Your payment could not be processed. Please try again or contact
          support if the issue persists.
        </p>
        <Link
          to="/checkout"
          className="inline-block px-6 py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors"
        >
          Go Back to Checkout
        </Link>
      </div>
    </div>
  );
};

export default PaymentCancel;
