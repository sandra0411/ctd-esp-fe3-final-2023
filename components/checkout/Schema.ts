import * as yup from 'yup'

export const CheckoutDataSchema=yup.object({
    name: yup.string().required('Name is required').min(3, 'The name should have at least 3 chars'),
    lastname: yup.string().required('Last name is required').min(2, 'The last name should have at least 2 chars'),
    email: yup.string().email('Email must has this format: email@whatever.com').required('email is required'),
    adress: yup.string().required('Adress is required').min(3, 'The adress should have at least 3 chars'),
    apartment: yup.string().optional().max(7, 'The Apartment can has up to 7 characters'),
    floor: yup.number().positive('Floor must be a positive number').integer('Floor must be an integer number').optional().max(3, 'The name should have at least 3 chars'),
    city: yup.string().required('City is required').min(3, 'The city should have at least 3 chars'),
    province: yup.string().required('Province is required').min(3, 'The Province should have at least 3 chars'),
    zipCode: yup.string().required('Zip code is required').min(3, 'The zip code should have at least 4 chars'),
    cardNumber: yup.string().length(16, 'The Card number must exactly 16 digits').required('Card number is required'),
    ownerName: yup.string().required('Owner name is required').min(3,'Owner name must has at least 3 characters'),
    expirationDate: yup.string().required('Expiration date is required').min(10, 'The date must has this format 01-01-2025'),
    securityCode: yup.string().length(3, 'Security code mas has 3 digits').required()
  }).required();