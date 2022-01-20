export interface PriceProduct {
    price: number;
    first_price?: number;
    discount?: number
}

interface DetailProduct {
    [props: string]: string;
}

export interface ProductResponse {
    name: string;
    brand?: string;
    price_product: PriceProduct;
    quantity: number;
    sold: number;
    description?: string
    detail_product: DetailProduct,
    createdAt: string
}