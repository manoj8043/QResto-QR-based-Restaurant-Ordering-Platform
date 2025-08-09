import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { json } from "express";
import connectDB from "./Src/Config/db.js";
import authRouter from "./Src/routes/StaffRouter.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(json());
const PORT = process.env.PORT || 3000;

app.get("/", (_, res) => {
  try {
    res.send("Welcome to the QR Menu API");
  } catch (error) {
    res.status(500).send("Server Error", error);
  }
});
app.use("/staff-login", authRouter);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
    process.exit(1);
  });
