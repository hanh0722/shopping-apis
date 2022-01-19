import { PaymentMethods } from './payment';

export interface DiscountDetail {
    short_description?: string,
    description?: string,
    devices: Array<string>,
    payment_methods: PaymentMethods,
}

export interface Discount {
    name: string,
    time_expired: number,
    max_bills?: number,
    min_bills?: number,
    max_values?: number,
    sale_percent?: number,
    short_description?: string,
    devices: Array<string>,
    payment_methods: PaymentMethods,
    description?: string
    createdAt: string,
    quantity: number
}