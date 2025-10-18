import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import uploadImg from "../../../assets/image-upload-icon.png";
import LoginGoogle from "../LoginGoogle/LoginGoogle";
import { Link } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const { userProfileUpdate, createAccount } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [profileImg, setProfileImg] = useState("");
  const fileInputRef = useRef(null);

  const onSubmit = (data) => {
    const userData = {
      displayName: data.name,
      photoUrl: profileImg,
    };

    createAccount(data.email, data.password)
      .then((data) => {
        // Update User profile in firebase
        userProfileUpdate(userData)
          .then((data) => {
            console.log(data);
            toast.success("Login Successfuly");
          })
          .catch((error) => {
            console.log(error);
          });
        console.log(data);
      })
      .catch((error) => {
        if(error.code === "auth/email-already-in-use"){
          toast.error("Already Used Email")
        }
        console.log(error)
      });

    // reset(); // reset form
  };

  const handlerImgUpload = () => {
    fileInputRef.current.click();
  };

  const handlerFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
  };

  const password = watch("password");

  return (
    <div className="mt-10 md:mt-0">
      <h3 className="text-2xl md:text-4xl font-bold">Create an Account</h3>
      <p className="font-medium">Register with Profast</p>
      {/* Upload Image Icon  */}
      <img
        onClick={handlerImgUpload}
        src={uploadImg}
        className="my-2 cursor-pointer"
        alt="Upload Icon"
      />

      {/* hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handlerFileChange}
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="fieldset w-xs md:w-md **:focus:outline-none **:focus:border-primary space-y-1"
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
              validate: (value) =>
                value === password || "Passwords do not match",
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
        <button className="btn btn-primary w-full text-black">Sign Up</button>
        <p className="text-base">
          Already have an account?{" "}
          <Link className="text-primary underline" to={"/Login"}>
            Login
          </Link>
        </p>
        <span className="text-center text-base">Or</span>
      </form>
      {/* Login with Goggle */}
      <LoginGoogle />
    </div>
  );
};

export default SignUp;
