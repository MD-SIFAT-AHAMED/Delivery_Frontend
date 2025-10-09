import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import uploadImg from "../../../assets/image-upload-icon.png";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset(); // reset form
  };

  return (
    <div className="mt-10 md:mt-0">
      <h3 className="text-2xl md:text-4xl font-bold">Create an Account</h3>
      <p className="font-medium">Register with Profast</p>
      <img src={uploadImg} className="my-2" alt="Upload Icon" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="fieldset w-xs md:w-md **:focus:outline-none **:focus:border-primary space-y-3"
      >
        {/* Name */}
        <div>
          <label className="label">Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="input input-bordered w-full"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="label">Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="input input-bordered w-full"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="relative">
          <label className="label">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="input input-bordered w-full pr-10"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Minimum 6 characters" },
            })}
          />
          <span
            className="absolute right-3 top-8 z-1 cursor-pointer text-gray-600"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash size={15} /> : <FaEye size={15} />}
          </span>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <label className="label">Confirm Password</label>
          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm Password"
            className="input input-bordered w-full pr-10"
            {...register("confirmPassword", {
              required: "Please confirm password",
            })}
          />
          <span
            className="absolute right-3 z-1 top-8 cursor-pointer text-gray-600"
            onClick={() => setShowConfirm(!showConfirm)}
          >
            {showConfirm ? <FaEyeSlash size={15} /> : <FaEye size={15} />}
          </span>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button className="btn btn-primary w-full text-black mt-4">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
