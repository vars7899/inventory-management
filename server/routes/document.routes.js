import express from "express";
import {
  createNewDoc,
  deleteDoc,
  getAllDocs,
  getDocById,
  updateDoc,
} from "../controllers/document.controller.js";
import { auth } from "../middleware/auth.middleware.js";
const DocRouter = express.Router();

DocRouter.route("/").post(auth, createNewDoc).get(auth, getAllDocs);
DocRouter.route("/:id")
  .get(auth, getDocById)
  .patch(auth, updateDoc)
  .delete(auth, deleteDoc);

export default DocRouter;
