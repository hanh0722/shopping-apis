"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var product_1 = require("../controller/product");
var product_2 = require("../../constants/product");
var product_validation_1 = require("../validation/product-validation");
var router = (0, express_1.Router)();
router.post(product_2.CREATE_PRODUCT, product_validation_1.ValidateCreateProduct, product_1.CreateProduct);
exports.default = router;
