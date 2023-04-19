import { Router } from "express";
import { transporter } from "../messages/nodemailer.js";
import {client} from '../messages/twilio.js'
import config from "../config.js";

const router = Router()

//nodemailer

router.get('/', async(req, res)=>{
    const messageOptions = {
        from:'MaviChillo',
        to: 'mavi.chillo@gmail.com',
        subject: 'Prueba NodeMailer',
        // text: 'Hola bebe'
        html: '<h1>1010101001</h1>',
        // attachments: [
        //     {
        //         path: __dirname+'/nombre_foto.jpg'
        //     }
        // ]
    }
    try {
        await transporter.sendMail(messageOptions)
        res.send('mail sent')
    } catch (error) {
        console.log(error)
    }
})


router.post('/', async(req,res)=>{
    const {nombre, apellido, email, frase} = req.body
    const messageOptions = {
        from:'MaviChillo',
        to: email,
        subject: `Bienvenid@ ${nombre} ${apellido}`,
        // text: frase,
        html: `<h2>${nombre} ${apellido}, eres el primer usuario de esta aplicacion</h2>`
    }
    try {
        await transporter.sendMail(messageOptions)
        res.send('email sent')
    } catch (error) {
        console.log(error)
    }
})

//twilio

router.get('/sms', async(req, res)=>{
    const smsOptions = {
        body: 'probando twilio',
        from: config.twilio_phone_number,
        to: '+541150476426'
    }
    try {
        await client.messages.create(smsOptions)
        res.send('sms sent')
    } catch (error) {
        console.log(error)
    }
})



export default router