import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  // baseURL: "https://deliverybackend-production-5675.up.railway.app/",
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOutUser } = useAuth();
  axiosSecure.interceptors.request.use(
    (config) => {
      config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
    (res) => {
      return res;
    },
    (error) => {
      const status = error.response?.status;
      if (status === 400) {
        navigate("/forbidden");
      } else if (status === 401) {
        logOutUser()
          .then(() => {
            navigate("/login");
          })
          .catch(() => {});
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
