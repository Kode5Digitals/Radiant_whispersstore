

import dotenv from 'dotenv';
dotenv.config();


const {PAYSTACK_SECRET_KEY, PAYSTACK_PUBLIC_KEY} = process.env;

export const environment = {
    PAYSTACK_SECRET_KEY, PAYSTACK_PUBLIC_KEY
  };