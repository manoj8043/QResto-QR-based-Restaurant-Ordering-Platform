import mongoose from "mongoose";
const { Schema } = mongoose;

const OrderItem = new Schema({
  item: { type: Schema.Types.ObjectId, ref: "MenuItem" },
  name: String,
  price: Number,
  qty: { type: Number, default: 1 },
});

const OrderSchema = new Schema({
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
  table: String, // for dine-in
  token: String, // for self-service
  customer: { type: Schema.Types.ObjectId, ref: "Customer" },
  items: [OrderItem],
  subtotal: Number,
  tax: Number,
  total: Number,
  status: {
    type: String,
    enum: ["pending", "preparing", "ready", "served", "completed", "cancelled"],
    default: "pending",
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Order", OrderSchema);
