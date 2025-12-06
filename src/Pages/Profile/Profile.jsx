import React from "react";
import { FaEnvelope, FaUserShield } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useUserRole from "../../Hooks/useUserRole";

const Profile = () => {
  const { user } = useAuth();
  const { role } = useUserRole();

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-xl rounded-xl mt-10">

      {/* Header */}
      <h2 className="text-2xl font-semibold mb-8 text-gray-800">My Profile</h2>

      <div className="flex flex-col items-center text-center">

        {/* Profile Picture */}
        <div className="w-36 h-36 rounded-full overflow-hidden shadow-lg border">
          <img
            src={user?.photoURL || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name */}
        <h3 className="mt-4 text-2xl font-bold text-gray-900">
          {user?.displayName || "Unnamed User"}
        </h3>

        {/* Role */}
        <p className="flex items-center gap-2 text-gray-500 capitalize mt-1">
          <FaUserShield className="text-primary" />
          {role || "User"}
        </p>

        {/* Email */}
        <div className="mt-4 flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-lg shadow  w-full max-w-sm justify-center">
          <FaEnvelope className="text-primary text-lg" />
          <div className="text-left">
            <p className="text-sm text-gray-600">Email</p>
            <p className="font-semibold text-gray-800">{user?.email}</p>
          </div>
        </div>

      </div>

      {/* Actions */}
      <div className="mt-8 flex justify-center gap-4">
        {/* <button className="btn bg-primary text-white px-6">Edit Profile</button> */}
        <button className="btn bg-primary text-gray-700 px-6">Change Password</button>
      </div>

    </div>
  );
};

export default Profile;
