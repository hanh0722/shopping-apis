"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ProductSchema = new mongoose_1.Schema({
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
exports.default = (0, mongoose_1.model)("product", ProductSchema);
