import { model, Schema } from "mongoose";
import { ProductResponse } from "../types/product";

const ProductSchema = new Schema<ProductResponse>({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
  },
  description: {
    type: String,
  },
  quantity: {
    type: Number,
    required: true,
  },
  sold: {
    type: Number,
    default: 0,
  },
  price_product: {
    price: {
      type: Number,
      required: true,
    },
    first_price: {
      type: Number,
    },
    discount: {
      type: Number,
    },
  },
  detail_product: {
    type: Object
  },
}, {
    timestamps: true
});

export default model<ProductResponse>("product", ProductSchema);
