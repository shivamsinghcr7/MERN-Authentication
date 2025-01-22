import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);

// router.get("/profile",getUserProfile);
// router.put("/profile", updateUserProfile);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
//protecting routes, allow only valid jwt tokens

export default router;
