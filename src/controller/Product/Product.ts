import { RequestHandler } from "express";
import { ObjectId } from "mongoose";
import Product from "../../model/product";
import { ProductRequest } from "../../types/product";

export const AddProduct: RequestHandler = async (req, res, next) => {
  const {
    name,
    price,
    description,
    images,
    quantity_stock,
    information_detail_product,
    properties,
    discount_codes,
    place_product,
  } = req.body as ProductRequest<string | number>;
  try {
    const product = new Product({
      description: description,
      discount_codes: discount_codes,
      images: images,
      information_detail_product: information_detail_product,
      name: name,
      price: price,
      properties: properties,
      quantity_stock: quantity_stock,
      place_product: place_product,
    });
    await product.save();
    res.json({
      message: "successfully",
      code: 200,
      result: product,
    });
  } catch (err) {
    console.log(err);
  }
};
