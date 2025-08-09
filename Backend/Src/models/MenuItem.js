import mongoose from "mongoose";
const { Schema } = mongoose;

const MenuItemSchema = new Schema({
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
  title: { type: String, required: true },
  description: String,
  category: String,
  veg: Boolean,
  price: { type: Number, required: true },
  serves: String,
  rating: Number,
  images: [String],
  available: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("MenuItem", MenuItemSchema);
