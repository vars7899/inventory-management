import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const SALT_ROUNDS = 10;

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "first name is a required data field"],
    },
    lastName: {
      type: String,
      required: [true, "last name is a required data field"],
    },
    email: {
      type: String,
      required: [true, "email is a required data field"],
      unique: true,
      trim: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "email provided is invalid",
      ],
    },
    password: {
      type: String,
      required: [true, "password is a required data field"],
      minLength: [8, "password length should be more than 7 characters"],
      maxLength: [23, "password length should be less than 24 characters"],
    },
    image: {
      type: String,
      required: [true, "image is a required data field"],
      default:
        "https://res.cloudinary.com/dfcaehp0b/image/upload/v1668627770/original-f43759158f1845e0cc8e11e714acb98a_zfcpby.webp",
    },
    phone: {
      type: String,
      default: "+1-(000)-000-0000",
    },
    bio: {
      type: String,
      maxLength: [250, "bio length should not be more than 250 characters"],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (givenPass) {
  return await bcrypt.compare(givenPass, this.password);
};

userSchema.pre("save", async function hashPassword(next) {
  if (!this.isModified) {
    next();
  }
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  next();
});

const User = mongoose.model("user", userSchema);
export default User;
