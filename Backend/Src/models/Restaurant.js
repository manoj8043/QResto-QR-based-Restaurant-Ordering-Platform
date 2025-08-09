import mongoose from "mongoose";
const { Schema } = mongoose;

const RestaurantSchema = new Schema({
  name: { type: String, required: true },
  address: String,
  phone: String,
  timezone: String,
  currency: { type: String, default: "INR" },
  taxPercent: { type: Number, default: 0 },
  tables: [{ number: Number, qrCode: String }],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Restaurant", RestaurantSchema);
