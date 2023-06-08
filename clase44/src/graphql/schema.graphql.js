import {buildSchema} from 'graphql'

export const schema = buildSchema(`

    type Query {
        getProducts: [Product]
        getProductById(id:ID): Product
    }

    type Product {
        id: ID
        name: String
        price: Int
        stock: Int
        description: String
    }

    type Mutation {
        createProduct(data:ProductInput): Product
        updateProduct(id:ID, data:ProductInput): Product
        deleteProduct(id:ID): Product
    }

    input ProductInput {
        name: String!
        price: Int
        stock: Int
        description: String
    }
`)