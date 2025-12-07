import React, { useState } from "react";

const Settings = () => {
  const [form, setForm] = useState({
    siteName: "Delivery Web",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Settings Saved", form);

    // axios.post("/api/v1/admin/settings", form)
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-3">Admin Settings</h2>

      <div className="bg-base-200 p-5 rounded shadow">
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="font-medium">Site Name</label>
            <input
              type="text"
              name="siteName"
              className="input input-bordered w-full"
              value={form.siteName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="font-medium">Contact Email</label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="font-medium">Phone</label>
            <input
              type="text"
              name="phone"
              className="input input-bordered w-full"
              onChange={handleChange}
            />
          </div>

          <button className="btn btn-primary text-gray-700">
            Save Settings
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
