
export const fetchUsers = async (axiosInstance) => {
  const res = await axiosInstance.get("/api/v1/users");
  return res.data.data;
};

export const deleteUser = async (axiosInstance,id) => {
//   const res = await axiosInstance.delete(`/users/${id}`);
  return res.data;
};
