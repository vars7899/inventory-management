import mongoose from "mongoose";

const TokenSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: [true, "Cannot create reset token without user"],
  },
  token: {
    type: String,
    required: [true, "Token is required field"],
  },
  createdAt: {
    type: Date,
    required: true,
  },
  expiresAt: {
    type: Date,
    required: true,
  },
});

const Token = mongoose.model("token", TokenSchema);
export default Token;
