import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import LoginGoogle from "../LoginGoogle/LoginGoogle";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const { loginEmailWithPass } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    loginEmailWithPass(data.email, data.password)
      .then(() => {
      toast.success("Login Successfully");p
        navigate(location.state?.from || "/");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-credential") {
          toast.error("Invalid Credential");
        }
      });

    reset(); // reset form
  };

  return (
    <div className="mt-10 md:mt-0">
      <h3 className="text-2xl md:text-4xl font-bold">Welcome Back</h3>
      <p className="font-medium mb-4">Login with Profast</p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="fieldset w-xs md:w-md **:focus:outline-none **:focus:border-primary space-y-1"
      >
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
          <Link to={"/fotgotPassword"} className="underline text-gray-600">
            Fotgot Password
          </Link>
        </div>
        {/* Submit Button */}
        <button className="btn btn-primary w-full text-black">Log In</button>
        <p className="text-base">
          Don't have an account?{" "}
          <Link className="text-primary underline" to={"/signUp"}>
            SignUp
          </Link>
        </p>
        <span className="text-center text-base">Or</span>
      </form>
      {/* Google Login Button */}
      <LoginGoogle />
    </div>
  );
};

export default Login;
