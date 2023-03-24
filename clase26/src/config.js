import dotenv from 'dotenv'

dotenv.config()

const obj = {
    port: process.env.PORT,
    uri: process.env.URI
}

export default obj