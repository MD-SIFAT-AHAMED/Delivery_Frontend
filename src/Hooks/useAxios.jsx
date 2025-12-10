import axios from "axios";
import React from "react";

const axiosInstance = axios.create({
  // baseURL: "https://deliverybackend-production-5675.up.railway.app",
  baseURL: "http://localhost:5000",
});
const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
