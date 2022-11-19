import mongoose from "mongoose";

const CategorySchema = mongoose.Schema({
  type: String,
  maxLength: [20, "Category name should not be more than 20 characters"],
});

const ProductSchema = mongoose.Schema(
  {
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
      type: mongoose.Types.Decimal128,
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
      required: [true, "product image is required field"],
      default:
        "https://res.cloudinary.com/dfcaehp0b/image/upload/v1668627770/original-f43759158f1845e0cc8e11e714acb98a_zfcpby.webp",
    },
    packageDetails: {
      length: {
        type: mongoose.Types.Decimal128,
        required: true,
      },
      breadth: {
        type: mongoose.Types.Decimal128,
        required: true,
      },
      height: {
        type: mongoose.Types.Decimal128,
        required: true,
      },
      weight: {
        type: mongoose.Types.Decimal128,
        required: true,
      },
    },
    supplier: {
      type: mongoose.Types.Schema.ObjectId,
      ref: "supplier",
      required: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("product", ProductSchema);
export default Product;
