import ExpressAsyncHandler from "express-async-handler";
import Product from "../models/product.model.js";
import User from "../models/user.model.js";

// @desc		get all the products registered by user
// @route		/api/v1/product
// @access		private
export const getAllProduct = ExpressAsyncHandler(async (req, res) => {
  // Check if the user has permissions
  if (!req.user) {
    res.status(401);
    throw new Error("Unauthorized user or invalid/expired token");
  }
  const userExist = await User.findById(req.user._id);
  if (!userExist) {
    res.status(401);
    throw new Error("Unauthorized user or invalid/expired token");
  }
  // Fetch all the product created by the given user
  try {
    const productList = await Product.find({ userId: req.user._id });
    if (productList) {
      res.status(200).json({
        success: true,
        message: "List of all the Products fetched successfully",
        numberOfProducts: productList && productList.length,
        products: productList && productList,
      });
    }
  } catch (err) {
    throw new Error("Server was not able to process the request");
  }
});

// @desc		create new product
// @route		/api/v1/product
// @access		private
export const createNewProduct = ExpressAsyncHandler(async (req, res) => {
  // Check if the user has permissions
  if (!req.user) {
    res.status(401);
    throw new Error("Unauthorized user or invalid/expired token");
  }
  const userExist = await User.findById(req.user._id);
  if (!userExist) {
    res.status(401);
    throw new Error("Unauthorized user or invalid/expired token");
  }
  // check for the required fields
  const {
    name,
    sku,
    price,
    description,
    category,
    sellingType,
    stock,
    image,
    packageDetails,
    supplier,
  } = req.body;

  if (
    !name ||
    !sku ||
    !price ||
    !description ||
    !category ||
    !sellingType ||
    !stock ||
    !packageDetails ||
    !supplier
  ) {
    res.status(400);
    throw new Error("Missing required fields");
  }
  // create new product
  try {
    const newProduct = await Product.create({
      userId: req.user._id,
      name,
      sku,
      price,
      description,
      category,
      sellingType: {
        inStore: sellingType.inStore,
        online: sellingType.online,
      },
      stock,
      image,
      packageDetails: {
        length: packageDetails.length,
        width: packageDetails.width,
        height: packageDetails.height,
        weight: packageDetails.weight,
      },
      supplier,
    });
    await newProduct.populate("supplier");
    if (newProduct) {
      res.status(200).json({
        success: true,
        message: "New product added successfully",
        products: newProduct,
      });
    }
  } catch (err) {
    throw new Error(err);
  }
});

// @desc		get product by id
// @route		/api/v1/product/:id
// @access		private
export const getProductById = ExpressAsyncHandler(async (req, res) => {
  // Check if the user has permissions
  if (!req.user) {
    res.status(401);
    throw new Error("Unauthorized user or invalid/expired token");
  }
  const userExist = await User.findById(req.user._id);
  if (!userExist) {
    res.status(401);
    throw new Error("Unauthorized user or invalid/expired token");
  }
  const { id } = req.params;
  // Fetch the product from the provided id in the params
  try {
    const productExist = await Product.findById(id);
    if (productExist) {
      res.status(200).json({
        success: true,
        message: "Product details fetched successfully",
        product: productExist,
      });
    } else {
      res.status(400);
      throw new error("Product does not exist invalid product Id");
    }
  } catch (err) {
    throw new Error("Server was not able to process the request");
  }
});

// @desc		delete product by id
// @route		/api/v1/product/:id
// @access		private
export const deleteProductById = ExpressAsyncHandler(async (req, res) => {
  // Check if the user has permissions
  if (!req.user) {
    res.status(401);
    throw new Error("Unauthorized user or invalid/expired token");
  }
  const userExist = await User.findById(req.user._id);
  if (!userExist) {
    res.status(401);
    throw new Error("Unauthorized user or invalid/expired token");
  }
  const { id } = req.params;
  // Fetch the product from the provided id in the params and delete it
  try {
    const productExist = await Product.findById(id);
    if (productExist) {
      await productExist.delete();

      return res.status(200).json({
        success: true,
        message: "Product deleted successfully",
      });
    } else {
      res.status(400);
      throw new error("Product does not exist invalid product Id");
    }
  } catch (err) {
    throw new Error("Server was not able to process the request");
  }
});

// @desc		update product by id
// @route		/api/v1/product/:id
// @access		private
export const updateProductById = ExpressAsyncHandler(async (req, res) => {
  // Check if the user has permissions
  if (!req.user) {
    res.status(401);
    throw new Error("Unauthorized user or invalid/expired token");
  }
  const userExist = await User.findById(req.user._id);
  if (!userExist) {
    res.status(401);
    throw new Error("Unauthorized user or invalid/expired token");
  }
  const {
    name,
    sku,
    price,
    description,
    category,
    sellingType,
    stock,
    image,
    packageDetails,
    supplier,
  } = req.body;
  const { id } = req.params;
  // Fetch the product from the provided id in the params and delete it
  try {
    let productExist = await Product.findById(id);

    if (!productExist) {
      res.status(400);
      throw new error("Product does not exist invalid product Id");
    } else {
      productExist.name = name || productExist.name;
      productExist.sku = sku || productExist.sku;
      productExist.price = price || productExist.price;
      productExist.description = description || productExist.description;
      productExist.category = category || productExist.category;
      productExist.sellingType = sellingType || productExist.sellingType;
      productExist.stock = stock || productExist.stock;
      productExist.image = image || productExist.image;
      productExist.packageDetails.length =
        packageDetails.length || productExist.packageDetails.length;
      productExist.packageDetails.width =
        packageDetails.width || productExist.packageDetails.width;
      productExist.packageDetails.height =
        packageDetails.height || productExist.packageDetails.height;
      productExist.packageDetails.weight =
        packageDetails.weight || productExist.packageDetails.weight;
      productExist.supplier = supplier || productExist.supplier;

      const updatedProduct = await productExist.save();
      return res.status(200).json({
        success: true,
        message: "Product update successfully",
        product: updatedProduct,
      });
    }
  } catch (err) {
    throw new Error(`Server was not able to process the request ${err}`);
  }
});
