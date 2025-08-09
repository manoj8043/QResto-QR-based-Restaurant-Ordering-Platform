import mongoose from "mongoose";
const { Schema } = mongoose;

const StaffSchema = new Schema({
  staffName: {
    type: String,
    required: true,
  },
  staffemail: { type: String, index: true, unique: true },
  passwordHash: String,
  staffrole: {
    type: String,
    enum: ["owner", "manager", "chef", "cashier"],
    default: "manager",
  },
  staffId: {
    type: String,
    required: true,
  },
  staffbranch: { type: Schema.Types.ObjectId, ref: "branch" },
  createdAt: { type: Date, default: Date.now },
});
export default mongoose.model("Staff", StaffSchema);
