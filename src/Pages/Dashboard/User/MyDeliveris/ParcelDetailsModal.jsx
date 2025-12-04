import { FiX } from "react-icons/fi";

const ParcelDetailsModal = ({ parcel, onClose }) => {
  if (!parcel) return null;

  const entries = Object.entries(parcel);

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-11/12 max-w-lg p-6 animate-fadeIn">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Parcel Details</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Details */}
        <div className="space-y-2 max-h-[70vh] overflow-y-auto">
          {entries.map(([key, value]) => (
            <div
              key={key}
              className="flex justify-between border-b border-gray-200 py-1"
            >
              <span className="font-medium capitalize">
                {key.replace(/_/g, " ")}:
              </span>
              <span className="text-gray-700">
                {value instanceof Date
                  ? value.toLocaleDateString()
                  : value?.toString()}
              </span>
            </div>
          ))}
        </div>

        {/* Close button */}
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="btn btn-sm btn-ghost hover:bg-gray-100"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParcelDetailsModal;
