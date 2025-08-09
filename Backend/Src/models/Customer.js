import mongoose from "mongoose";
const { Schema } = mongoose;

const CustomerSchema = new Schema({
  name: String,
  phone: { type: String, index: true, required: true, unique: true },
  points: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Customer", CustomerSchema);
