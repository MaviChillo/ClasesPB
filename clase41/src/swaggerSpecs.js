import swaggerJSDoc from 'swagger-jsdoc'
import __dirname from './utils/index.js'

const swaggerOptions = {
    definition:{
        //version de swagger
        openapi: '3.0.0',
        info:{
            //titulo de api
            title: 'Adopt Me API Documentation',
            //version de tu api
            version: '1.0.0'
        }
    },
    //donde estan los documentos donde escribimos la documentacion
    apis: [`${__dirname}/docs/**/*.yaml`]
}


export const swaggerSetup = swaggerJSDoc(swaggerOptions)
