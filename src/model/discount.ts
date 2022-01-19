import { Schema, model } from "mongoose";
import { Discount } from "../types/discount";

const DiscountSchema = new Schema<Discount>(
  {
    quantity: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    time_expired: {
      type: Number,
      required: true,
      default: Date.now() + 30 * 24 * 60 * 60 * 1000,
    },
    discount_detail: {
      short_description: {
        type: String,
      },
      description: {
        type: String,
      },
      devices: [
        {
          type: String,
          required: true,
          default: "all",
        },
      ],
      payment_methods: {
        cash: {
          type: Boolean,
        },
        banking: {
          type: Boolean,
        },
        bank_accept: [
          {
            name: {
              type: String,
            },
            code: {
              type: String,
            },
          },
        ],
      },
    },
    max_bills: {
      type: Number,
    },
    min_bills: {
      type: Number,
    },
    max_values: {
      type: Number,
    },
    sale_percent: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

export default model('discount', DiscountSchema);