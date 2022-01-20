import { RequestHandler } from "express";
import { validationResult } from "express-validator";
import {
  responseErrorService,
  responseSuccessService,
} from "../../utils/handling-response";
import Product from "../model/product";
import { ProductResponse } from "../types/product";

export const CreateProduct: RequestHandler = async (req, res, next) => {
  const { name, brand, detail_product, price_product, quantity, description } =
    req.body as ProductResponse;
  const resultValidation = validationResult(req);

  if (!resultValidation.isEmpty()) {
    const service = responseErrorService<Array<any>>(
      res,
      422,
      "Not successfully",
      resultValidation.array()
    );
    return service;
  }

  try {
    const product = new Product({
      name,
      brand,
      description,
      detail_product,
      price_product,
      quantity,
    });
    await product.save();
    const success = responseSuccessService(res, 200, "successfully", product);
    return success;
  } catch (err: any) {
    next(err);
  }
};
