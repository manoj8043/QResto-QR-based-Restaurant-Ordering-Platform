import mongoose from "mongoose";
const { Schema } = mongoose;

const StaffSchema = new Schema({
  name: String,
  email: { type: String, index: true, unique: true },
  passwordHash: String,
  role: {
    type: String,
    enum: ["owner", "manager", "chef", "cashier"],
    default: "manager",
  },
  restaurant: { type: Schema.Types.ObjectId, ref: "Restaurant" },
  createdAt: { type: Date, default: Date.now },
});
export default mongoose.model("Staff", StaffSchema);
