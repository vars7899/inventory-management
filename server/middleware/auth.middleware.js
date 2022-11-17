import jwt from "jsonwebtoken";
import ExpressAsyncHandler from "express-async-handler";
import User from "../models/user.model.js";

export const auth = ExpressAsyncHandler(async (req, res, next) => {
  let cookie;

  try {
    cookie = req.cookies.token;
    if (!cookie) {
      res.status(401);
      throw new Error("Not Authorized (No Token)");
    }
    // verify token
    const verified = jwt.verify(cookie, process.env.JWT_SECRET);
    req.user = await User.findOne(verified._id).select("-password");
    if (!req.user) {
      res.status(401);
      throw new Error("Not Authorized (Not Authorized)");
    }
    next();
  } catch (error) {
    res.status(401);
    throw new Error("Not Authorized (No Token)");
  }
});
