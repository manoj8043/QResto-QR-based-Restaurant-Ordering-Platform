import express from "express";
import {
  getAllStaff,
  getStafffById,
  setStaff,
} from "../controllers/StaffController.js";

const router = express.Router();
router.get("/staff", getAllStaff);
router.get("/staff/:id", getStafffById);
router.post("/staff", setStaff);
export default router;
