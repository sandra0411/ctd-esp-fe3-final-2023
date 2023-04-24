export type CheckoutInput = {
    customer: {
        name: string,
        lastname: string,
        email: string
        address: {
            address1: string,
            address2: string | undefined,
            city: string,
            state: string,
            zipCode: string
        }
    },
    card: {
        number: string,
        cvc: string,
        expDate: string,
        nameOnCard: string
    },
    order: {
        name: string;
        image: string;
        price: number;
    }
}


export type CheckoutDataType = {
    name: string,
    lastname: string,
    email:string,
    adress: string,
    apartment?:string,
    floor?: number,
    city: string,
    province: string,
    zipCode: string,
    cardNumber: string,
    ownerName: string,
    expirationDate: string,
    securityCode: string
}

export const defValCheckInput= {
    customer: {
        name: '',
        lastname: '',
        email: '',
        address: {
            address1: '',
            address2: '' || undefined,
            city: '',
            state: '',
            zipCode: ''
        }
    },
    card: {
        number: '',
        cvc: '',
        expDate: '',
        nameOnCard: ''
    },
    order: {
        name: '',
        image: '',
        price: 0,
    }
}