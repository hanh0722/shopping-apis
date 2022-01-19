import { Router } from "express";
import { AddProduct } from "../../controller/Product/Product";
const router = Router();

router.post("/create", AddProduct);

export default router;
