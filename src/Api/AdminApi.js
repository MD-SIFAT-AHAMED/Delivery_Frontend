import { data } from "react-router";

export const fetchAdmin = async (axiosInstance) => {
  const result = await axiosInstance.get("/api/v1/admin/adminList");
  return result.data.data;
};

export const fetchParcels = async (axiosInstance, filters) => {
  const result = await axiosInstance.get("/api/v1/admin/get-all-parcels", {
    params: filters,
  });
  return result.data.data;
};

// export const fetchRiderInfo = async (axiosInstance, userEmail) => {
//   const result = await axiosInstance.get(
//     `/api/v1/admin/rider-info?userEmail=${userEmail}`
//   );
//   return result.data.data;
// };

// export const fetchParcelInfo = async (axiosInstance, trakingId) => {
//   const result = await axiosInstance.get(
//     `/api/v1/admin/parcel-info?trakingId=${trakingId}`
//   );

//   return result.data.data[0];
// };
