import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";

const AssignParcle = () => {
  const axiosInstance = useAxiosSecure();
  const { email } = useAuth();
  const { data } = useQuery({
    queryKey: ["assignParcel"],
    queryFn: async () => {
      const result = await axiosInstance.get(`/api/v1/riders/assign-parcel`, {
        params: email,
      });
      return result.data;
    },
    enabled: !email,
  });
  console.log(data);
  return <div>AssignParcle</div>;
};

export default AssignParcle;
