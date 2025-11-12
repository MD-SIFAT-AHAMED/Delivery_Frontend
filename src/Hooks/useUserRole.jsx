import React from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const useUserRole = () => {
  const { user, loading: authLoading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: role = null,
    isLoading: roleLoading,
    refetch,
  } = useQuery({
    queryKey: ["user", user?.email],
    enabled: !authLoading && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/api/v1/users/info/${user.email}`);
      localStorage.setItem("role", res.data?.role);
      return res.data.role;
    },
  });
  return { role, roleLoading, refetch };
};

export default useUserRole;
