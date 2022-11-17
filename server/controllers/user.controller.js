import ExpressAsyncHandler from "express-async-handler";
import User from "../models/user.model.js";

export const registerUser = ExpressAsyncHandler(async (req, res) => {
  const {
    email,
    firstName,
    lastName,
    password,
    cfPassword,
    image,
    bio,
    phone,
  } = req.body;
  // check for required fields
  if (!email || !firstName || !lastName || !password || !cfPassword) {
    res.status(400);
    throw new Error("Please add all the required fields (User registration)");
  }
  // check for password match
  if (password !== cfPassword) {
    res.status(400);
    throw new Error("Password does not match (User registration)");
  }
  // check for email already present
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("Email already registered (User registration)");
  }
  // Create new user
  const newUser = await User.create({
    firstName,
    lastName,
    password,
    email,
    image,
    bio,
    phone,
  });
  // response
  if (newUser) {
    res.status(200).json({
      status: "success",
      message: "User registered successfully",
      user: newUser,
    });
    console.log(`Success --> new user created ${newUser.email}`.grey);
  } else {
    res.status(500);
    throw new Error(
      "Server was not able to process request (User registration)"
    );
  }
});
