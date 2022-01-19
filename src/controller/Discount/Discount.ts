import { RequestHandler } from "express";
import Discount from "../../model/discount";
import { Discount as DiscountModel } from "../../types/discount";

export const CreateDiscount: RequestHandler = async (req, res, next) => {
  const {
    name,
    sale_percent,
    min_bills,
    max_values,
    max_bills,
    time_expired,
    quantity,
    devices,
    payment_methods,
    description,
    short_description,
  } = req.body as DiscountModel;

  try{
    const discount = new Discount({
        name,
        description,
        devices,
        max_bills,
        max_values,
        min_bills,
        payment_methods,
        quantity,
        sale_percent,
        short_description,
        time_expired
    });
    await discount.save();
    res.json({
        message: 'successfully',
        code: 200,
        result: discount
    })
  }catch(err) {
      console.log(err);
  }
};
