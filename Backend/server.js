import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Src/Config/db.js";
import userRoutes from "./Src/routes/userRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
//PORT 3000 is set in Default
app.use(cors());
app.use(express.json());

await connectDB().then(() => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Unable to start server:", error);
  }
});

app.get("/", (_, res) => {
  try {
    res.send("Welcome to the QR Menu API");
  } catch (error) {
    res.status(500).send("Server Error", error);
  }
});

app.use("/home", userRoutes);
