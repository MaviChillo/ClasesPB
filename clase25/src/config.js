//unico archivo que toca al .env
//npm i dotenv

import dotenv from 'dotenv'
import program from './utils/commander.js'

dotenv.config({
    path: program.opts().mode === 'stage' ? '../.env.stage' : '../.env.development'
})

const obj = {
    port: process.env.PORT,
    mongo_uri: process.env.MONGO_URI
}


export default obj





