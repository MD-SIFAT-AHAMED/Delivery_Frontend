export const fetchRider = async (axiosInstance) => {
  const result = await axiosInstance.get("/api/v1/admin/rider-application");
  return result.data.data;
};
