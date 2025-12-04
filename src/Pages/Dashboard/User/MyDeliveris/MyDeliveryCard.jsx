import { FiPackage, FiMapPin, FiClock } from "react-icons/fi";

const MyDeliveryCard = ({ setDetailsModal, setParcelData, item, onView }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-100 hover:shadow-lg transition flex flex-col justify-between h-full">
      <div>
        {/* Header */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold text-lg flex items-center gap-2">
            <FiPackage className="text-blue-600" />
            {item.title}
          </h2>

          <span
            className={`px-2 py-1 text-xs rounded-md font-semibold 
              ${
                item.delivery_status === "Delivered"
                  ? "bg-green-100 text-green-600"
                  : item.delivery_status === "Pending"
                  ? "bg-yellow-100 text-yellow-600"
                  : "bg-blue-100 text-blue-600"
              }`}
          >
            {item.delivery_status}
          </span>
        </div>

        {/* Tracking ID */}
        <p className="text-sm text-gray-600 mb-2">
          <span className="font-medium">Tracking:</span> {item.trackingId}
        </p>

        {/* Receiver Info */}
        <div className="flex items-center gap-2 text-sm text-gray-700 mb-3">
          <FiMapPin className="text-rose-500" />
          <span>
            {item.receiverName} — {item.receiverRegion}
          </span>
        </div>

        {/* Cost + Payment */}
        <div className="flex justify-between text-sm mb-3">
          <p>
            <span className="font-medium">Cost:</span> {item.cost} ৳
          </p>
          <p
            className={`font-semibold 
              ${
                item.payment_status === "paid"
                  ? "text-green-600"
                  : "text-red-500"
              }`}
          >
            {item.payment_status.toUpperCase()}
          </p>
        </div>

        {/* Date */}
        <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
          <FiClock />
          {new Date(item.created_at).toLocaleDateString()}
        </div>
      </div>

      {/* Button */}

      <button
        onClick={() => {
          setDetailsModal(true), setParcelData(item);
        }}
        className="btn btn-sm bg-primary text-[#03373d] hover:bg-primary/90 w-full mt-2"
      >
        View Details
      </button>
    </div>
  );
};

export default MyDeliveryCard;
