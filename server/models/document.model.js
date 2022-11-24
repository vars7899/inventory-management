import mongoose from "mongoose";

const DocumentSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Document title is a required field"],
    },
    body: {
      type: String,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Document = mongoose.model("document", DocumentSchema);
export default Document;
