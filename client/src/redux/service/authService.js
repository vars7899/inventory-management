import axios from "axios";

export const register = async (userData) => {
  const response = await axios.post("/api/v1/user/register", userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await axios.post("/api/v1/user", userData);
  return response.data;
};

export const logout = async () => {
  const response = await axios.post("/api/v1/user/logout", userData);
  return response.data;
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
