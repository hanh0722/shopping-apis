"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateCreateProduct = void 0;
var express_validator_1 = require("express-validator");
var ValidateCreateProduct = [
    (0, express_validator_1.body)('name').not().isEmpty().withMessage('Name is emptied!'),
    (0, express_validator_1.body)('price_product.price').not().isEmpty().withMessage('Product must have price'),
    (0, express_validator_1.body)('quantity').not().isEmpty().withMessage('Product must have quantity')
];
exports.ValidateCreateProduct = ValidateCreateProduct;
