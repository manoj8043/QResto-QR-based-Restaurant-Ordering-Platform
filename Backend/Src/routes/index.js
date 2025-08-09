import express from "express";
import authRoutes from "../routes/auth.routes.js";
import menuRoutes from "../routes/menu.routes.js";
import orderRoutes from "../routes/order.routes.js";
import billingRoutes from "../routes/billing.routes.js";
import adminRoutes from "../routes/admin.routes.js";

const router = express.Router();
router.use("/auth", authRoutes);
router.use("/menu", menuRoutes);
router.use("/orders", orderRoutes);
router.use("/billing", billingRoutes);
router.use("/admin", adminRoutes);

export default router;
