import express from "express";
import {
  getUserDetails,
  loginStatus,
  loginUser,
  logoutUser,
  registerUser,
  updateUserDetails,
  updateUserPassword,
} from "../controllers/user.controller.js";
import { auth } from "../middleware/auth.middleware.js";
const userRouter = express.Router();

userRouter.route("/register").post(registerUser);
userRouter.route("/").post(loginUser).get(auth, getUserDetails);
userRouter.route("/logout").get(logoutUser);
userRouter.route("/status").get(loginStatus);
userRouter.route("/update").patch(auth, updateUserDetails);
userRouter.route("/update/password").patch(auth, updateUserPassword);

export default userRouter;
