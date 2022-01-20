"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateCreateProduct = void 0;
var express_validator_1 = require("express-validator");
var ValidateCreateProduct = [
    (0, express_validator_1.body)('name').isEmpty().withMessage('Name is emptied!'),
    (0, express_validator_1.body)('price_product.price').isEmpty().withMessage('Product must have price'),
    (0, express_validator_1.body)('quantity').isEmpty().withMessage('Product must have quantity')
];
exports.ValidateCreateProduct = ValidateCreateProduct;
