import axiosInstance from "./axios";
import { API_ENDPOINTS } from "./apiEndpoint";


/* ===============================
   Auth API Functions
================================ */

// Register user
export const registerUser = (data: any) => {
  return axiosInstance.post(
    API_ENDPOINTS.auth.registerUser,
    data
  );
};

// get all users
export const getAllUsers = (paramsData:any) => {
  return axiosInstance.get(
    API_ENDPOINTS.auth.getAllUsers,
    {
        params:{
            ...paramsData
        }
    }
  );
};
