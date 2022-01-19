import mongoose from "mongoose";
import { ProductRequest } from "../types/product";

const Schema = mongoose.Schema;

const Product = new Schema<ProductRequest<string | number>>(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      discount: {
        type: Number,
      },
      price_product: {
        type: Number,
        required: true
      },
      time_discount: {
        type: Number,
      },
    },
    description: {
      type: String,
    },
    images: [
      {
        type: String,
      },
    ],
    quantity_stock: {
      type: Number,
      required: true,
    },
    information_detail_product: {
      type: Object,
    },
    discount_codes: {
      type: Schema.Types.ObjectId,
      ref: 'discount',
    },
    place_product: {
      type: String,
      required: true
    },
    sold: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);


export default mongoose.model<ProductRequest<string | number>>('product', Product);