import dotenv from 'dotenv';
dotenv.config();


export default {
    port: process.env.PORT,
    stripe_secret_key: process.env.STRIPE_SECRET_KEY,
}