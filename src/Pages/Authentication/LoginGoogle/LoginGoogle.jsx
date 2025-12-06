import React from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../Hooks/useAuth";
import useAxios from "../../../Hooks/useAxios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const LoginGoogle = () => {
  const { loginWithGoogle } = useAuth();
  const axiosInstacne = useAxios();
  const navigate = useNavigate();

  const handlerLoginWithGoogle = () => {
    loginWithGoogle()
      .then(async (result) => {
        const user = result.user;
        // Update userInfo in the database
        const userInfo = {
          name: user.displayName,
          email: user.email,
          is_active: true,
          role: "user", // Default role user
        };
        console.log(userInfo);

        const userRes = await axiosInstacne.post(
          "/api/v1/users/create-user",
          userInfo
        );
        toast.success("Login Successfuly");
        navigate(location.state?.from || "/");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };
  return (
    <div>
      <div className="mt-2">
        <button
          onClick={handlerLoginWithGoogle}
          type="button"
          className="flex btn items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 w-full hover:bg-gray-100 transition"
        >
          <FcGoogle className="text-lg" />
          <span className="text-gray-700">
            Continue with Google
          </span>
        </button>
      </div>
    </div>
  );
};

export default LoginGoogle;
