import ExpressAsyncHandler from "express-async-handler";
import Document from "../models/document.model.js";
import User from "../models/user.model.js";

// @desc		Get all the documents of specific user
// @route		GET /api/v1/document
// @access		private
export const getAllDocs = ExpressAsyncHandler(async (req, res) => {
  if (!req.user) {
    res.status(401);
    throw new Error("Un-Authorized user");
  }
  // find the documents related to the user
  const listOfDocs = await Document.find({ owner: req.user._id }).sort({
    updatedAt: -1,
  });
  if (listOfDocs) {
    return res.status(200).json({
      success: true,
      message: "List of Document fetched successfully",
      documents: listOfDocs,
    });
  }
  throw new Error("Server was not able to process the request");
});

// @desc		Get document by id
// @route		GET /api/v1/document/:id
// @access		private
export const getDocById = ExpressAsyncHandler(async (req, res) => {
  if (!req.user) {
    res.status(401);
    throw new Error("Un-Authorized user");
  }
  const docExist = await Document.findById(req.params.id);
  if (docExist) {
    return res.status(200).json({
      success: true,
      message: "Document with given id fetched successfully",
      documents: docExist,
    });
  }
  throw new Error("Server was not able to process the request");
});

// @desc		Create new document
// @route		POST /api/v1/document
// @access		private
export const createNewDoc = ExpressAsyncHandler(async (req, res) => {
  const { title, body } = req.body;
  // check for required fields
  if (!title || !body) {
    res.status(400);
    throw new Error("Missing required field(s)");
  }
  // find if the user exist with the given ID
  if (!req.user && !(await User.findById(req.user._id))) {
    res.status(401);
    throw new Error("Un-Authorized or unknown user");
  }
  const newDoc = await Document.create({
    title,
    body,
    owner: req.user._id,
  });
  if (newDoc) {
    return res.status(200).json({
      success: true,
      message: "Document was created successfully",
      documents: newDoc,
    });
  }
  throw new Error("Server was not able to process the request");
});

// @desc		Update document with given id
// @route		PATCH /api/v1/document/:id
// @access		private
export const updateDoc = ExpressAsyncHandler(async (req, res) => {
  const { title, body } = req.body;
  // find if the user exist with the given ID
  if (!req.user && !(await User.findById(req.user._id))) {
    res.status(401);
    throw new Error("Un-Authorized or unknown user");
  }
  const updatedDoc = await Document.findByIdAndUpdate(
    req.params.id,
    {
      title,
      body,
    },
    { new: true }
  );
  if (updatedDoc) {
    return res.status(200).json({
      success: true,
      message: "Document was updated successfully",
      documents: updatedDoc,
    });
  }
  throw new Error("Server was not able to process the request");
});

// @desc		delete document with given id
// @route		DELETE /api/v1/document/:id
// @access		private
export const deleteDoc = ExpressAsyncHandler(async (req, res) => {
  // find if the user exist with the given ID
  if (!req.user && !(await User.findById(req.user._id))) {
    res.status(401);
    throw new Error("Un-Authorized or unknown user");
  }
  const docExist = await Document.findByIdAndDelete(req.params.id);
  if (docExist) {
    return res.status(200).json({
      success: true,
      message: "Document was deleted successfully",
    });
  }
  throw new Error("Server was not able to process the request");
});
