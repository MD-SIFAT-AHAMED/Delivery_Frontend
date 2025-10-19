import { useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";

const LogoutButton = ({ handleLogout }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Logout menu item */}
      <li>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600 transition"
        >
          <FaSignOutAlt className="text-red-600" />
          Logout
        </button>
      </li>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              Confirm Logout
            </h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to log out?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  handleLogout();
                  setShowModal(false);
                }}
                className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LogoutButton;
