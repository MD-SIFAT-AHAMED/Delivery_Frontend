export const fetchUsers = async (axiosInstance, searchText) => {
  const res = await axiosInstance.get(`/api/v1/admin?search=${searchText}`);
  return res.data.data;
};

export const PostParcelInfo = async (axiosInstance, deliveryData) => {
  const res = await axiosInstance.post(`/api/v1/users/parcel`, deliveryData);
  return res.data.trackingId;
};

export const deleteUser = async (axiosInstance, id) => {
  //   const res = await axiosInstance.delete(`/users/${id}`);
  return res.data;
};

