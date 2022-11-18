import mongoose from "mongoose";

const SupplierSchema = mongoose.Schema(
  {
    clientName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    name: {
      type: String,
      required: [true, "Supplier name is required field"],
    },
    street: {
      type: String,
      required: [true, "street address is a required field"],
    },
    city: {
      type: String,
      required: [true, "city address is a required field"],
    },
    state: {
      type: String,
      required: [true, "state address is a required field"],
    },
    country: {
      type: String,
      required: [true, "country address is a required field"],
    },
    postalCode: {
      type: String,
      required: [true, "postal code is a required field"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required field"],
    },
    fax: {
      type: String,
      required: [true, "fax number is required field"],
    },
    email: {
      type: String,
      required: [true, "email is required field"],
      trim: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "email provided is invalid",
      ],
    },
    website: {
      type: String,
      default: "www.suplier-website-not-available.com",
    },
  },
  {
    timestamps: true,
  }
);

const Supplier = mongoose.model("supplier", SupplierSchema);
export default Supplier;
