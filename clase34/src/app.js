import express from 'express'
import logger from './utils/winston.js'
import {generateLog} from './middlewares/winston.middleware.js';

const app = express()

app.use(generateLog)

app.get('/', (req,res)=>{
    // console.log('log console.log')
    logger.err('log error')
    logger.warning('log warn')
    logger.information('log info')
    // logger.http('log http')
    // logger.verbose('log verbose')
    // logger.debug('log debug')
    // logger.silly('log silly')
    res.send('probando logs')
})

app.get('/logger', (req,res)=>{
    logger.err('logger error')
    // logger.http('logger http')
    res.send('prueba logger')
})

app.get('/prueba', (req,res)=>{
    logger.warning('prueba warn')
    // logger.silly('prueba silly')
    res.send('prueba prueba')
})


app.listen(8080, ()=>{
    console.log('escuchando puerto 8080')
})
