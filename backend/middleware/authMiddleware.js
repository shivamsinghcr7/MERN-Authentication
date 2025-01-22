import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModels.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  token = req.cookies.jwtShivam;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Unauthorised, Invalid Token");
    }
  } else {
    res.status(401);
    throw new Error("Unauthorised, No Token");
  }
});

//not exporting as default as not routes might require 'admin only access'.
export { protect };
