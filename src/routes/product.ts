import { Router } from "express";
import { CreateProduct } from "../controller/product";
import { CREATE_PRODUCT } from "../../constants/product";
import { ValidateCreateProduct } from "../validation/product-validation";

const router = Router();

router.post(CREATE_PRODUCT, ValidateCreateProduct ,CreateProduct);

export default router;