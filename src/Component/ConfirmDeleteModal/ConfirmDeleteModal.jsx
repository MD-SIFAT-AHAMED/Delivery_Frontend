import React from "react";

const ConfirmDeleteModal = ({
  open,
  title,
  message,
  onConfirm,
  onCancel,
  loading,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-white/90 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        {/* Header */}
        <h2 className="text-xl font-semibold mb-4">
          {title || "Confirm Delete"}
        </h2>

        {/* Message */}
        <p className="mb-6 text-gray-700">
          {message || "Are you sure you want to delete ?"}
        </p>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
            disabled={loading}
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
