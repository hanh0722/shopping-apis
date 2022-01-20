"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var path_1 = __importDefault(require("path"));
var errorHandling_1 = __importDefault(require("./controller/errorHandling"));
var url_connect_1 = require("../constants/url-connect");
var route_1 = require("../constants/route");
var product_1 = __importDefault(require("./routes/product"));
var user_1 = __importDefault(require("./routes/user"));
var app = (0, express_1.default)();
// define middleware using
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, "images")));
// define request middleware
app.use('/', function (req, res, next) {
    res.send('WORKING!');
});
app.use(route_1.PRODUCT_API, product_1.default);
app.use(route_1.USER_API, user_1.default);
app.use(errorHandling_1.default);
mongoose_1.default
    .connect(url_connect_1.DATABASE_URL)
    .then(function (result) {
    app.listen(process.env.PORT || url_connect_1.PORT);
})
    .catch(function (err) {
    console.log("CANNOT CONNECT SERVER");
});
