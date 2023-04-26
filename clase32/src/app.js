import express from 'express'
import compression from 'express-compression'
import CustomError from './utils/errors/CustomError.js'
import { ErrorsCause, ErrorsMessage, ErrorsName } from './utils/errors/errors.enum.js'
import { errorMiddleware } from './utils/errors/errors.middleware.js'

const app = express()


//gzip
app.use(compression())
//broli
// app.use(compression({ brotli : {enabled: true, zlib: {}}}))


app.get('/', (req, res)=>{
    let info = 'primera prueba compression'
    for (let i = 0; i < 10000; i++) {
        info+= 'agregando desde el for'
    }
    res.send(info)
})

app.post('/products', (req,res)=>{
    // const newError = new Error('error products')
    // newError.name = 'Name Error'
    // throw newError
    CustomError.createCustomError({
        name: ErrorsName.PRODUCT_PRINCIPAL_ERROR_POST, 
        message: ErrorsMessage.PRODUCT_PRINCIPAL_ERROR_POST, 
        cause: ErrorsCause.PRODUCT_PRINCIPAL_ERROR_POST
    })
})


app.get('/products', (req,res)=>{
    CustomError.createCustomError({
        name: ErrorsName.PRODUCT_PRINCIPAL_ERROR_GET, 
        message: ErrorsMessage.PRODUCT_PRINCIPAL_ERROR_GET, 
        cause: ErrorsCause.PRODUCT_PRINCIPAL_ERROR_GET
    })
})


// a nivel aplicacion
app.use(errorMiddleware)

app.listen(8080, ()=>{
    console.log('escuchando puerto 8080')
})
