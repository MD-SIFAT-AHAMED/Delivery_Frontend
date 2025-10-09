import React from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../Hooks/useAuth";

const LoginGoogle = () => {
  const { loginWithGoogle } = useAuth();

  const handlerLoginWithGoogle = () => {
    loginWithGoogle()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {});
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
          <span className="font-medium text-gray-700">
            Continue with Google
          </span>
        </button>
      </div>
    </div>
  );
};

export default LoginGoogle;
