//process

// console.log(process.cwd()) //ruta del proceso

// console.log(process.pid) //id del proceso

// console.log(process.memoryUsage()) //memoria en uso del proceso


//argumentos

console.log(process.argv) //ruta de node y ruta de process

//node index.js debug dev jrod // en la consola para agregar cosas al argv cada vez que se inicia el proceso
//si no le pasas info adicional no los tendra el argv

//accediendo al config para que acceda al .env

import config from './config.js'

const PORT = config.port
const URI = config.mongo_uri
console.log(PORT, URI)



