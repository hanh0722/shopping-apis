import { Router } from "express";
import { CreateDiscount } from "../../controller/Discount/Discount";

const router = Router();

router.post('/create', CreateDiscount);

export default router;
