import express from "express";
import mongoose from "mongoose";
import path from "path";

import ResolveErrorHandling from "./controller/errorHandling";
import { DATABASE_URL, PORT } from "../constants/url-connect";
import {
  AUTH_API,
  DISCOUNT_API,
  PRODUCT_API,
  USER_API,
} from "../constants/route";
import ProductRouter from "./routes/product";
import UserRouter from "./routes/user";
import AuthRouter from "./routes/auth";
import { useCors } from "../utils/cors";

const app = express();

// define middleware using
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "images")));

// define request middleware
app.use(useCors);
app.use(PRODUCT_API, ProductRouter);
app.use(USER_API, UserRouter);
app.use(AUTH_API, AuthRouter);

app.use(ResolveErrorHandling);
mongoose
  .connect(DATABASE_URL)
  .then((result) => {
    app.listen(process.env.PORT || PORT);
  })
  .catch((err) => {
    console.log("CANNOT CONNECT SERVER");
  });
