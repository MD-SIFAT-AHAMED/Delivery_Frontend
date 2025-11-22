
export const fetchUsers = async (axiosInstance,searchText) => {
  const res = await axiosInstance.get(`/api/v1/admin?search=${searchText}`);
  return res.data.data;
};

export const deleteUser = async (axiosInstance,id) => {
//   const res = await axiosInstance.delete(`/users/${id}`);
  return res.data;
};
