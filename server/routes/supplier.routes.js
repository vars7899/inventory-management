import express from "express";
import {
  createNewSupplier,
  deleteSupplier,
  getAllSupplier,
  getSupplierById,
  getSupplierByQuery,
  updateSupplierDetails,
} from "../controllers/supplier.controller.js";
import { auth } from "../middleware/auth.middleware.js";
const supplierRouter = express.Router();

supplierRouter
  .route("/")
  .post(auth, createNewSupplier)
  .get(auth, getAllSupplier);
supplierRouter.route("/q").get(auth, getSupplierByQuery);
supplierRouter
  .route("/:id")
  .patch(auth, updateSupplierDetails)
  .delete(auth, deleteSupplier)
  .get(auth, getSupplierById);

export default supplierRouter;
