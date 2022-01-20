import { body } from "express-validator";

const ValidateCreateProduct = [
    body('name').not().isEmpty().withMessage('Name is emptied!'),
    body('price_product.price').not().isEmpty().withMessage('Product must have price'),
    body('quantity').not().isEmpty().withMessage('Product must have quantity')
]

export {
    ValidateCreateProduct
}