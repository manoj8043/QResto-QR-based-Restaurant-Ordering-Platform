import mongoose from "mongoose";
const { Schema } = mongoose;

const BillSchema = new Schema({
  order: { type: Schema.Types.ObjectId, ref: "Order", required: true },
  paid: { type: Boolean, default: false },
  paymentMethod: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Bill", BillSchema);
