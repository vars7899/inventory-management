import ExpressAsyncHandler from "express-async-handler";
import Supplier from "../models/supplier.model.js";
import User from "../models/user.model.js";

// @desc		create new supplier
// @route		/api/supplier
// @access		private
export const createNewSupplier = ExpressAsyncHandler(async (req, res) => {
  const {
    name,
    street,
    city,
    state,
    country,
    postalCode,
    phone,
    fax,
    website,
    email,
  } = req.body;
  console.log(req.body);

  // check for required fields
  if (
    !name ||
    !street ||
    !city ||
    !state ||
    !country ||
    !postalCode ||
    !phone ||
    !fax ||
    !email
  ) {
    res.status(400);
    throw new Error("Missing one or more required fields");
  }

  // check for user
  if (!req.user) {
    res.status(400);
    throw new Error("Invalid user");
  }

  // create new supplier
  const newSupplier = await Supplier.create({
    clientName: req.user._id,
    name,
    street: street,
    city: city,
    state: state,
    country: country,
    postalCode: postalCode,
    phone,
    fax,
    email,
    website,
  });
  // await newSupplier.populate("clientName", "-password");
  // response
  if (newSupplier) {
    res.status(200).json({
      success: true,
      message: "New supplier created successfully",
      supplier: newSupplier,
    });
  } else {
    throw new Error(
      "Server was not able to process request (User registration)"
    );
  }
});

// @desc		get all the supplier
// @route		/api/supplier
// @access		private
export const getAllSupplier = ExpressAsyncHandler(async (req, res) => {
  if (!req.user) {
    res.status(400);
    throw new Error("Invalid user");
  }
  const listOfSupplier = await Supplier.find({ clientName: req.user._id });

  if (listOfSupplier) {
    res.status(200).json({
      success: true,
      message: "List of supplier fetched successfully",
      supplier: listOfSupplier,
    });
  } else {
    throw new Error(
      "Server was not able to process request (User registration)"
    );
  }
});

// @desc		update supplier details
// @route		/api/supplier/:id
// @access		private
export const updateSupplierDetails = ExpressAsyncHandler(async (req, res) => {
  if (!req.user) {
    res.status(400);
    throw new Error("Invalid user");
  }
  const { id } = req.params;
  const {
    name,
    street,
    city,
    state,
    country,
    postalCode,
    phone,
    fax,
    website,
    email,
  } = req.body;

  // find if the supplier exist
  const supplierExist = await Supplier.findById(id);

  if (!supplierExist) {
    return res.status(400).json({
      status: "failure",
      message: "Supplier does not exist",
    });
  }

  // find the supplier by id and update
  const updatedSupplier = await Supplier.findByIdAndUpdate(
    id,
    {
      name,
      street,
      city,
      state,
      country,
      postalCode,
      phone,
      fax,
      email,
      website,
    },
    { new: true }
  );

  await updatedSupplier.populate("clientName", "-password");

  if (updatedSupplier) {
    res.status(200).json({
      success: true,
      message: "Supplier details updated successfully",
      supplier: updatedSupplier,
    });
  } else {
    throw new Error(
      "Server was not able to process request (User registration)"
    );
  }
});

// @desc		delete supplier
// @route		/api/supplier/:id
// @access		private
export const deleteSupplier = ExpressAsyncHandler(async (req, res) => {
  if (!req.user) {
    res.status(400);
    throw new Error("Invalid user, Not authorized for this function");
  }
  const { id } = req.params;
  // find if the supplier exist
  const supplierExist = await Supplier.findById(id);
  await supplierExist.populate("clientName", "-password");

  if (!supplierExist) {
    res.status(400);
    throw new Error("Supplier does not exist");
  }

  // TODO --> id comparison is not working
  if (req.user.email !== supplierExist.clientName.email) {
    res.status(400);
    throw new Error("Invalid user, Not authorized for this function");
  }

  // delete the supplier
  const supplier = await Supplier.deleteOne({ _id: id });

  if (supplier) {
    return res.status(200).json({
      success: true,
      message: "Supplier deleted from record successfully",
    });
  } else {
    throw new Error(
      "Server was not able to process request (User registration)"
    );
  }
});

// @desc		GET supplier by id
// @route		/api/supplier/:id
// @access		private
export const getSupplierById = ExpressAsyncHandler(async (req, res) => {
  if (!req.user) {
    res.status(400);
    throw new Error("Invalid user, Not authorized for this function");
  }
  const { id } = req.params;
  // find if the supplier exist
  const supplierExist = await Supplier.findById(id);
  await supplierExist.populate("clientName", "-password");

  if (supplierExist) {
    return res.status(200).json({
      success: true,
      message: "Supplier fetched successfully",
      supplier: supplierExist,
    });
  } else if (!supplierExist) {
    res.status(400);
    throw new Error("Supplier does not exist");
  } else {
    throw new Error(
      "Server was not able to process request (User registration)"
    );
  }
});

// @desc			get all the supplier matching the query
// @route			GET /api/v1/supplier?search=""
// @access		private
export const getSupplierByQuery = ExpressAsyncHandler(async (req, res) => {
  try {
    if (!req.user || !(await User.findById(req.user._id))) {
      res.status(401);
      throw new Error("Un-Authorized or unknown user");
    }
    // look for the following keyword
    let keyword = req.query.search
      ? {
          $or: [
            { name: { $regex: req.query.search, $options: "i" } },
            { email: { $regex: req.query.search, $options: "i" } },
            { website: { $regex: req.query.search, $options: "i" } },
            { street: { $regex: req.query.search, $options: "i" } },
            { city: { $regex: req.query.search, $options: "i" } },
            { state: { $regex: req.query.search, $options: "i" } },
            { country: { $regex: req.query.search, $options: "i" } },
            { postalCode: { $regex: req.query.search, $options: "i" } },
            { phone: { $regex: req.query.search, $options: "i" } },
            { fax: { $regex: req.query.search, $options: "i" } },
          ],
        }
      : {};
    // find all the supplier with the query, created by the user
    const supplierExist = await Supplier.find(keyword).find({
      clientName: { $eq: req.user._id },
    });
    // if (supplierExist.length === 0) {
    //   return res.status(200).json({
    //     success: true,
    //     message: "No supplier exist",
    //     supplier: [],
    //   });
    // }
    res.status(200).json({
      success: true,
      message: "List of supplier fetched successfully",
      supplier: supplierExist,
    });
  } catch (err) {
    throw new Error(err);
  }
});
