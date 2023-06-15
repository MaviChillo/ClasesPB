import {createPaymentStripe} from '../services/payments.service.js';

export const createPayment = async (req, res) => {
    const  {id} = req.query;

    try{
        const response = await createPaymentStripe(id);
        res.json({message: 'success payment',payload: response});
    }catch(error){
        res.status(400).send(error.message);
    }

};