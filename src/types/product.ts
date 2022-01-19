import { ObjectId } from "mongoose";
import { Discount } from "./discount";

export interface PriceProduct {
    discount?: number;
    price_product: number;
    time_discount?: number
}

export interface PropertyProduct<T extends string | number> {
    name: string,
    values: Array<T>
}

export interface PropertiesProduct<T extends string | number> {
    [props: string]: Array<T>
}

export interface InformationDetailProduct {
    [props: string]: string
}

export interface ProductRequest<UProps extends string | number> {
    name: string,
    price?: PriceProduct,
    description?: string,
    images?: Array<string>,
    quantity_stock: number,
    information_detail_product: InformationDetailProduct,
    discount_codes?: Array<Discount | ObjectId>,
    properties?: Array<PropertiesProduct<UProps>>,
    sold?: number,
    rating?: number,
    place_product?: string
}