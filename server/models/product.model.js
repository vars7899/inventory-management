import mongoose from "mongoose";

const PackageDetailsSchema = mongoose.Schema({
  length: {
    type: Number,
    required: true,
  },
  width: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
});

const ProductSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    name: {
      type: String,
      required: [true, "Product name is a required field"],
      trim: true,
    },
    sku: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      maxLength: [500, "Description should be no more than 500 characters"],
    },
    category: [
      {
        type: String,
        maxLength: [20, "Category name should not be more than 20 characters"],
      },
    ],
    sellingType: {
      inStore: { type: Boolean, default: false },
      online: { type: Boolean, default: false },
    },
    stock: {
      type: Number,
      required: [true, "Available stock is a required field"],
      default: 0,
    },
    image: {
      type: String,
      default:
        "https://res.cloudinary.com/dfcaehp0b/image/upload/v1668627770/original-f43759158f1845e0cc8e11e714acb98a_zfcpby.webp",
      required: [true, "product image is required field"],
    },
    packageDetails: { type: PackageDetailsSchema, required: true },
    supplier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "supplier",
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("product", ProductSchema);
export default Product;
