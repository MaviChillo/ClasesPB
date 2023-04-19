import express  from "express";
import './persistencia/mysqlDB/dbConfig.js'
import config from './config.js'
import productsRouter from './routes/products.router.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/products', productsRouter)

const PORT = config.port

app.listen(PORT, ()=>{
    console.log(`escuchando al puerto ${PORT}`)
})


