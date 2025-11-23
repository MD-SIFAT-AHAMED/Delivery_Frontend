export const fetchAdmin = async (axiosInstance) => {
  const result = await axiosInstance.get("/api/v1/admin/adminList");
  return result.data.data;
};
