import mongoose from "mongoose";

const OrderSchema = mongoose.Schema({}, { timestamps: true });

const Order = mongoose.model("order", OrderSchema);
export default Order;
