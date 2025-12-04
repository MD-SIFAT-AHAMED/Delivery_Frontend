export const fetchRider = async (axiosInstance, filters) => {
  const result = await axiosInstance.get("/api/v1/admin/rider-application", {
    params: filters,
  });
  return result.data.data;
};
