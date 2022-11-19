import express from "express";
import {
  createNewProduct,
  deleteProductById,
  getAllProduct,
  getProductById,
  updateProductById,
} from "../controllers/product.controller.js";
import { auth } from "../middleware/auth.middleware.js";
const productRouter = express.Router(auth, getAllProduct);

productRouter.route("/").get(auth, getAllProduct).post(auth, createNewProduct);
productRouter
  .route("/:id")
  .get(auth, getProductById)
  .delete(auth, deleteProductById)
  .patch(auth, updateProductById);

export default productRouter;
