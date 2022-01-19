"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Product_1 = require("../../controller/Product/Product");
var router = (0, express_1.Router)();
router.post("/create", Product_1.AddProduct);
exports.default = router;
