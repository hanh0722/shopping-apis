import express from "express";
import mongoose from "mongoose";
import path from "path";

import ProductRoute from "./routes/Product/product";
import DiscountRoute from './routes/Discount/discount';
import { DATABASE_URL, PORT } from "../constants/url-connect";
import { DISCOUNT_API, PRODUCT_API } from "../constants/route";

const app = express();

// define middleware using
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "images")));

// define request middleware

app.use(PRODUCT_API, ProductRoute);
app.use(DISCOUNT_API, DiscountRoute);
mongoose
  .connect(DATABASE_URL)
  .then((result) => {
    app.listen(PORT);
  })
  .catch((err) => {
    console.log("CANNOT CONNECT SERVER");
  });
