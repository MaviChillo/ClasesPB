import express from 'express'
import {graphqlHTTP} from 'express-graphql'
import {schema} from './graphql/schema.graphql.js'
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from './graphql/resolvers.graphql.js'

const app = express()

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: {
        getProducts,
        getProductById,
        createProduct,
        updateProduct,
        deleteProduct
    },
    graphiql: true,
}))

const PORT = 3000

app.listen(PORT, ()=>{
    console.log(`Escuchando al puerto ${PORT}`)
})