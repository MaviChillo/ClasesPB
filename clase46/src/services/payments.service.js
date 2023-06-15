import Stripe from 'stripe'
import config from '../config.js';


const stripe = new Stripe(config.stripe_secret_key)

const products = [
    { id: 1, name: "papas", price: 1000 },
    { id: 2, name: "queso", price: 500 },
    { id: 3, name: "hamburguesa", price: 1500 },
    { id: 4, name: "soda", price: 1000 },
    { id: 5, name: "golosinas", price: 800 }
]

export const createPaymentStripe = async (id) => {
    const product = products.find(p => p.id === id)
    if(!product){
        throw new Error('prod not found')
    }
    const stripeInfo = {
        amount: product.price,
        currency: 'usd',
        metadata: {
            username: 'pablog',
            email: 'pablog@gmail.com'
        }
    }

    const response = await stripe.paymentIntents.create(stripeInfo)
    return response
};