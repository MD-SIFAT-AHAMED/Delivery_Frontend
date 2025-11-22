import React from "react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaIdCard, } from "react-icons/fa";

const Profile = () => {
    const user = {
  name: "Tajila Islam",
  email: "tajila@gmail.com",
  role: "rider",
  contact: "01316132",
  region: "Dhaka",
  nid: "2402794941",
  license: "01252dsf",
  status: "pending",
  age: 25,
  profilePic: "",
};
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Profile Picture */}
        <div className="flex flex-col items-center md:items-start">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary">
            <img
              src={user?.profilePic || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="mt-4 text-xl font-bold">{user?.name}</h2>
          <p className="text-gray-500 capitalize">{user?.role}</p>
        </div>

        {/* User Details */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-primary" />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-primary" />
            <span>{user?.contact || "-"}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-primary" />
            <span>{user?.region || "-"}</span>
          </div>

          {/* Rider-specific fields */}
          {user?.role === "rider" && (
            <>
              <div className="flex items-center gap-2">
                <FaIdCard className="text-primary" />
                <span>{user?.nid || "-"}</span>
              </div>
              <div className="flex items-center gap-2">
                {/* <FaLicense className="text-primary" /> */}
                <span>{user?.license || "-"}</span>
              </div>
            </>
          )}

          {/* Age / Status */}
          {user?.role === "rider" && (
            <div className="flex items-center gap-2">
              <FaUser className="text-primary" />
              <span>Age: {user?.age || "-"}</span>
            </div>
          )}

          <div className="flex items-center gap-2">
            <span className="font-semibold">Status:</span>
            <span className={user?.status === "active" ? "text-green-500" : "text-red-500"}>
              {user?.status || "-"}
            </span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6 flex gap-4">
        <button className="btn btn-primary">Edit Profile</button>
        <button className="btn btn-outline">Change Password</button>
      </div>
    </div>
  );
};

export default Profile
