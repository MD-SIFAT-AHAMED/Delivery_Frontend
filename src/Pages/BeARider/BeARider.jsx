import React from "react";
import { useForm } from "react-hook-form";
import riderImg from "../../assets/agent-pending.png";
import { useLoaderData } from "react-router";
import useAuth from "../../Hooks/useAuth";

const BeARider = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Rider Form Data:", data);
    reset();
  };

  const serviceData = useLoaderData();
  const allRegion = [...new Set(serviceData.map((d) => d.region))];
  const { user } = useAuth();

  return (
    <section className="max-w-screen-2xl w-11/12 mx-auto px-6 py-12">
      {/* Header Section */}
      <div className="text-left mb-6">
        <h1 className="text-4xl font-bold text-[#03373D]">Be a Rider</h1>
        <p className="mt-3 text-gray-600 text-lg max-w-2xl">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>

      {/* Divider */}
      <hr className="border-t-2 border-gray-200 my-8" />

      {/* Sub Header */}
      <h2 className="text-2xl font-semibold text-[#03373D] mb-8">
        Tell us about yourself
      </h2>

      {/* Form and Image Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white **:focus:border-primary **:focus:outline-none rounded-xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700 ">
                Name
              </label>
              <input
                {...register("name", { required: true })}
                placeholder="Your full name"
                value={user?.displayName}
                readOnly
                className="w-full border border-gray-400 rounded-lg px-4 py-2  "
              />
              {errors.name && (
                <p className="text-red-500 text-sm">Name is required</p>
              )}
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Age
              </label>
              <input
                type="number"
                {...register("age", { required: true, min: 18 })}
                placeholder="18+"
                className="w-full border border-gray-400 rounded-lg px-4 py-2 "
              />
              {errors.age && (
                <p className="text-red-500 text-sm">Valid age required</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Email
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="example@email.com"
                Value={user?.email}
                readOnly
                className="w-full border border-gray-400 rounded-lg px-4 py-2 "
              />
              {errors.email && (
                <p className="text-red-500 text-sm">Email is required</p>
              )}
            </div>

            {/* NID */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                NID No
              </label>
              <input
                {...register("nid", { required: true })}
                placeholder="National ID number"
                className="w-full border border-gray-400 rounded-lg px-4 py-2 "
              />
              {errors.nid && (
                <p className="text-red-500 text-sm">NID is required</p>
              )}
            </div>

            {/* Driving License */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Driving License
              </label>
              <input
                {...register("license", { required: true })}
                placeholder="License number"
                className="w-full border border-gray-400 rounded-lg px-4 py-2"
              />
              {errors.license && (
                <p className="text-red-500 text-sm">License required</p>
              )}
            </div>

            {/* Contact */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Contact
              </label>
              <input
                {...register("contact", { required: true })}
                placeholder="+8801XXXXXXXXX"
                className="w-full border border-gray-400 rounded-lg px-4 py-2 "
              />
              {errors.contact && (
                <p className="text-red-500 text-sm">Contact required</p>
              )}
            </div>
          </div>

          {/* Region */}
          <div className="mt-6">
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Select Region
            </label>
            <select
              className="select select-bordered w-full !outline-none focus:!border-primary 
            "
              {...register("region", { required: true })}
            >
              <option value="">Select Region</option>
              {allRegion.map((region, i) => (
                <option key={i} value={region}>
                  {region}
                </option>
              ))}
            </select>
            {errors.region && (
              <p className="text-red-500 text-sm">Region required</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-primary/85 hover:bg-primary text-[#03373D] font-semibold py-2 rounded-lg shadow-md transition"
            >
              Submit Application
            </button>
          </div>
        </form>

        {/* Image */}
        <div className="hidden md:flex justify-center">
          <img
            src={riderImg}
            alt="Rider illustration"
            className="w-96 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default BeARider;
