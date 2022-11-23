import axios from "axios";

export const register = async (userData) => {
  const response = await axios.post("/api/v1/user/register", userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await axios.post("/api/v1/user", userData, {
    withCredentials: true,
  });
  return response.data;
};

export const logout = async () => {
  const response = await axios.get("/api/v1/user/logout");
  return response.data;
};

export const forgotPassword = async (userData) => {
  const response = await axios.post("/api/v1/user/reset-password", userData);
  return response.data;
};

export const resetPassword = async (userData, resetToken) => {
  const response = await axios.put(
    `/api/v1/user/reset-password/${resetToken}`,
    userData
  );
  return response.data;
};

export const checkLoginStatus = async () => {
  const response = await axios.get("/api/v1/user/status");
  return response.data;
};
const authService = {
  register,
  login,
  logout,
  forgotPassword,
  resetPassword,
  checkLoginStatus,
};

export default authService;
