import ExpressAsyncHandler from "express-async-handler";
import { generateToken } from "../helperFunction/generateToken.js";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

// @desc			Register new user
// @route			/api/user/register
// @access		public
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
  // generate token for user
  const token = generateToken(newUser._id);

  // send HTTP-only cookie
  res.cookie("token", token, {
    path: "/",
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 86400), // expires in 1 day
    sameSite: "none",
    // secure: true,
  });

  // response
  if (newUser) {
    res.status(201).json({
      status: "success",
      message: "User registered successfully",
      user: newUser,
      token,
    });
    console.log(`Success --> new user created ${newUser.email}`.grey);
  } else {
    res.status(500);
    throw new Error(
      "Server was not able to process request (User registration)"
    );
  }
});

// @desc			Login user
// @route			/api/user
// @access		public
export const loginUser = ExpressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // check for required fields
  if (!email || !password) {
    res.status(400);
    throw new Error("Missing required field(s) (Login user)");
  }
  // find user exist
  const userExist = await User.findOne({ email });

  // check if user exist and password match
  if (!userExist || !(await userExist.matchPassword(password))) {
    res.status(400);
    throw new Error("Invalid email or password (Login User)");
  }

  const {
    _id,
    firstName,
    lastName,
    email: userEmail,
    photo,
    phone,
    bio,
  } = userExist;
  const token = generateToken(userExist._id);
  res.cookie("token", token, {
    path: "/",
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 86400), // expires in 1 day
    sameSite: "none",
    // secure: true,
  });
  res.status(200).json({
    status: "success",
    message: "User logged in successfully",
    user: { _id, firstName, lastName, email: userEmail, photo, phone, bio },
    token,
  });
});

// @desc			Logout user
// @route			/api/user/logout
// @access		private
export const logoutUser = ExpressAsyncHandler(async (req, res) => {
  try {
    res.cookie("token", "", {
      path: "/",
      httpOnly: true,
      expires: new Date(0), // expire cookie
      sameSite: "none",
      // secure: true,
    });
    return res.status(200).json({
      status: "Success",
      message: "User logged out successfully",
    });
  } catch (err) {
    throw new Error("Server could not process request");
  }
});

// @desc			Get user details
// @route			/api/user/
// @access		private
export const getUserDetails = ExpressAsyncHandler(async (req, res) => {
  try {
    const user = req.user;
    const userExist = await User.findById(user._id).select("-password");
    if (!userExist) {
      res.status(400);
      throw new Error("user does not exist (User Details)");
    }
    res.status(200).json({
      status: "success",
      user: userExist,
    });
  } catch (error) {
    throw new Error("Server could not process request");
  }
});

// @desc			check if the user id logged in or not
// @route			/api/user/status
// @access		public
export const loginStatus = ExpressAsyncHandler(async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(200).json({
        status: "success",
        isLoggedIn: false,
      });
    }
    const verified = await jwt.verify(token, process.env.JWT_SECRET);
    if (verified) {
      return res.status(200).json({
        status: "success",
        isLoggedIn: true,
      });
    } else {
      return res.status(200).json({
        status: "success",
        isLoggedIn: false,
      });
    }
  } catch (error) {
    throw new Error("Server was not able to process request");
  }
});

// @desc			update user details except password
// @route			/api/user/update
// @access		private
export const updateUserDetails = ExpressAsyncHandler(async (req, res) => {
  try {
    const { firstName, lastName, email, phone, bio } = req.body;
    // find user
    const userExist = await User.findByIdAndUpdate(
      req.user._id,
      {
        firstName,
        lastName,
        email,
        phone,
        bio,
      },
      { new: true }
    );
    res.status(200).json({
      status: "success",
      message: "User details updated successfully",
      user: userExist,
    });
  } catch (error) {
    throw new Error(`Server was not able to process request ${error}`);
  }
});

// @desc			update user password
// @route			/api/user/update/password
// @access		private
export const updateUserPassword = ExpressAsyncHandler(async (req, res) => {
  try {
    const { oldPassword, newPassword, newCfPassword } = req.body;
    // check for required fields
    if (!oldPassword || !newPassword || !newCfPassword) {
      res.status(400);
      throw new Error("Missing required field (Update Password)");
    }
    // check password match
    if (newPassword !== newCfPassword) {
      res.status(400);
      throw new Error("New given password does not match (Update Password)");
    }
    const userExist = await User.findById(req.user._id);
    if (!userExist) {
      res.status(400);
      throw new Error("User does not exist (Update Password)");
    }
    // decode and match password
    if (!(await userExist.matchPassword(oldPassword))) {
      res.status(401);
      throw new Error(
        "Given password donot match our records (Update Password)"
      );
    }
    // find user and update user password
    userExist.password = newPassword;
    await userExist.save();

    res.status(200).json({
      status: "success",
      message: "User password updated successfully",
    });
  } catch (error) {
    throw new Error(`Server was not able to process request ${error}`);
  }
});
