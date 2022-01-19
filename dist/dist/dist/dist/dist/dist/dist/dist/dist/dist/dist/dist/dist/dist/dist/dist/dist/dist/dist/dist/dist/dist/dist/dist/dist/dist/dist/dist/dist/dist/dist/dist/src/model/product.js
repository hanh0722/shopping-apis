"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var Product = new Schema({
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
    discount_codes: [
        {
            percent: {
                type: Number,
            },
            min_bill: {
                type: Number,
            },
            max_sale: {
                type: Number,
            },
            quantity: {
                type: Number,
            },
            expire_date: {
                type: Number,
            },
        },
    ],
    sold: {
        type: Number,
        default: 0,
    },
    rating: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model('product', Product);
