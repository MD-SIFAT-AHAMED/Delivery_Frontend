import { FaMoneyBillWave } from "react-icons/fa";
import { BsCreditCard2Back } from "react-icons/bs";

const PaymentSelect = ({ onCOD, onStripe }) => {
  return (
    <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-100 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Choose Payment Method
      </h2>

      <div className="space-y-4">
        {/* COD BUTTON */}
        <button
          onClick={() => onCOD()}
          className="w-full flex items-center justify-center gap-3 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl shadow-md hover:opacity-90 transition-all"
        >
          <FaMoneyBillWave size={22} />
          Cash On Delivery
        </button>

        {/* STRIPE BUTTON */}
        <button
          onClick={() => onStripe()}
          className="w-full flex items-center justify-center gap-3 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl shadow-md hover:opacity-90 transition-all"
        >
          <BsCreditCard2Back size={22} />
          Pay with Stripe
        </button>
      </div>
    </div>
  );
};

export default PaymentSelect;
