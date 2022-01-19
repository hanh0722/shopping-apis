export interface BankInformation {
    name: string,
    code: string
}

export interface PaymentMethods {
    cash: boolean,
    banking: boolean,
    bank_accept: Array<BankInformation>
}