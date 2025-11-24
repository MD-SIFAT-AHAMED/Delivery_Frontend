const ParcelSummary = ({ parcel, onConfirm, onClose, cost }) => {
  return (
    <div className="relative w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
      {/* Close Button */}
      <button
        onClick={() => onClose()}
        className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
      >
        ✕
      </button>

      <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
        Review Parcel Details
      </h2>

      <div className="space-y-3 text-gray-700">
        <p>
          <strong>Sender:</strong> {parcel.senderName} ({parcel.senderContact})
        </p>

        <p>
          <strong>Receiver:</strong> {parcel.receiverName} (
          {parcel.receiverContact})
        </p>

        <p>
          <strong>From:</strong> {parcel.senderRegion}({parcel.senderCenter}) → {parcel.receiverRegion} ({parcel.receiverCenter})
        </p>

        <p>
          <strong>Type:</strong> {parcel.type}
        </p>

        <p>
          <strong>Weight:</strong> {parcel.weight} KG
        </p>

        <p>
          <strong>Cost:</strong> {cost} BDT
        </p>
      </div>

      <button
        onClick={()=>onConfirm()}
        className="mt-6 w-full bg-primary hover:bg-primary/90 text-gray-900 font-mono  py-3 rounded-xltransition"
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default ParcelSummary;
