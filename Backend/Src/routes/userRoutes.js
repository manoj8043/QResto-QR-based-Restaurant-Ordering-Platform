import express from "express";
import {
  getAllUsers,
  setUser,
  getUserById,
} from "../../controllers/userControllers.js";
import { set } from "mongoose";

const router = express.Router();

router.get("/user", getAllUsers);
router.post("/user", setUser);
router.get("/user/:id", getUserById);

export default router;
