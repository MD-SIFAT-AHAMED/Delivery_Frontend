export const fetchAdmin = async (axiosInstance) => {
  const result = await axiosInstance.get("/api/v1/admin/adminList");
  return result.data.data;
};

export const fetchParcels = async (axiosInstance) => {
  const result = await axiosInstance.get("/api/v1/admin/get-all-parcels");
  return result.data.data;
};
