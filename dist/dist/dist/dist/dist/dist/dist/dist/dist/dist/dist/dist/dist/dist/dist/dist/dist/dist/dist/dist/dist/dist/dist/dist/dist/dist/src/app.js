"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var url_connect_1 = require("../constants/url-connect");
var app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
mongoose_1.default.connect(url_connect_1.DATABASE_URL).then(function (result) {
    app.listen(url_connect_1.PORT);
}).catch(function (err) {
    console.log('CANNOT CONNECT SERVER');
});
