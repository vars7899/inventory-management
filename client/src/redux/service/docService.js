import axios from "axios";

export const fetchAllDocs = async () => {
  const response = await axios.get("/api/v1/document");
  return response.data;
};
export const updateOneDoc = async (updatedDoc, docId) => {
  const response = await axios.patch(`/api/v1/document/${docId}`, updatedDoc);
  return response.data;
};
export const deleteOneDoc = async (docId) => {
  const response = await axios.delete(`/api/v1/document/${docId}`);
  return response.data;
};
export const createOneDoc = async (docData) => {
  const response = await axios.post(`/api/v1/document/`, docData);
  return response.data;
};

const docService = {
  fetchAllDocs,
  updateOneDoc,
  deleteOneDoc,
  createOneDoc,
};
export default docService;
