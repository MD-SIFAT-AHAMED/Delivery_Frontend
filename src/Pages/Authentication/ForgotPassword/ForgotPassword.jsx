import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {};
  return (
    <div className="mt-10 md:mt-0">
      <h3 className="text-2xl md:text-4xl font-bold">Forgot Password</h3>
      <p className="font-medium mb-4">
        Enter your email address and we’ll send you a reset link.
      </p>

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
          <button className="btn btn-primary w-full my-2 text-black">
            Send
          </button>
          <p className="text-sm">
            Remember your password?{" "}
            <Link className="underline text-primary" to={"/login"}>
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
