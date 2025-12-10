import Lottie from "lottie-react";
import loading from "../../assets/lotties/Loading Dots.json";
import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Lottie animationData={loading} className={`w-50`} />
    </div>
  );
};

export default LoadingSpinner;
