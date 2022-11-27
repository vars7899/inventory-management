import axios from "axios";

const getAllSupplier = async () => {
  const response = await axios.get("/api/v1/supplier");
  return response.data;
};
const getQuerySupplier = async (query) => {
  const response = await axios.get(`/api/v1/supplier/q?search=${query}`);
  return response.data;
};
const createNewSupplier = async (supplierData) => {
  const response = await axios.post("/api/v1/supplier", supplierData);
  return response.data;
};
const getSupplier = async (supplierId) => {
  const response = await axios.get(`/api/v1/supplier/${supplierId}`);
  console.log(response.data);
  return response.data;
};
const deleteSupplier = async (supplierId) => {
  const response = await axios.delete(`/api/v1/supplier/${supplierId}`);
  return response.data;
};
const updateSupplier = async (supplier) => {
  const response = await axios.patch(
    `/api/v1/supplier/${supplier.supplierId}`,
    supplier.supplierData
  );
  return response.data;
};

const supplierService = {
  getAllSupplier,
  createNewSupplier,
  getSupplier,
  deleteSupplier,
  updateSupplier,
  getQuerySupplier,
};
export default supplierService;
