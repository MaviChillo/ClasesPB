// // clase 4

// // setTimeout

// // setTimeout(()=>{
// //     console.log('timeout')
// // }, 0)

// // setInterval(()=>{
// //     console.log('interval')
// // }, 3000)

// // console.log('ultimo log')

// // node js
// // file system

// const fs = require('fs')

// //sync

// // escribir
// // si existe pone info que determino, sino lo crea y le pone la info determinada
// fs.writeFileSync('primerArchivo.txt', 'Mi primer archivo')

// // sobreescribir
// fs.writeFileSync('primerArchivo.txt', 'segunda prueba')

// // leer
// // leeme el archivo y mostrame
// const info = fs.readFileSync('primerArchivo.txt', 'utf-8')
// console.log(info)

// // eliminar
// fs.unlinkSync('archivoAEliminar.txt')


// // ejemplo sync

// if(fs.existsSync('./archivos/ejemplo.txt')){
//     const info = fs.readFileSync('./archivos/ejemplo.txt', 'utf-8')
//     console.log(info)
//     fs.appendFileSync('./archivos/ejemplo.txt', ' agregando informacion')
//     const infoMod = fs.readFileSync('./archivos/ejemplo.txt', 'utf-8')
//     console.log(infoMod)
// } else {
//     fs.writeFileSync('./archivos/ejemplo.txt', 'mi primer ejemplo')
// }


// // fs con callbacks

// // ejemplo async con callbacks

// const ruta = './archivos/ejemploCb.txt'
// if(fs.existsSync(ruta)){
//     fs.readFile(ruta, 'utf-8', (error, info)=>{
//         if(error){
//             console.log(error)
//         } else {
//             console.log(info)
//             fs.appendFileSync(ruta, ' nueva info cb', (error)=>{
//                 if(error){
//                     console.log(error)
//                 } else {
//                     fs.readFile(ruta, 'utf-8', (error, info)=>{
//                         if(error){
//                             console.log(error)
//                         } else {
//                             console.log(info)
//                         }
//                     })
//                 }
//             })
//         }
//     })
// } else {
//     fs.writeFileSync(ruta, 'ejemplo con callback', (error)=>{
//         if(error){
//             console.log(error)
//         } else {
//             console.log('archivo creado con exito')
//         }
//     })
// }


// // promesas 

// fs.promises.appendFile
// fs.promises.writeFile
// fs.promises.readFile

// // ejemplo con promises

// const rutaProm = './archivos/ejemploPromises.txt'
// if(fs.existsSync(rutaProm)){
//     fs.promises.readFile(rutaProm, 'utf-8')
//     .then(info=>{
//         console.log(info)
//         return fs.promises.appendFile(rutaProm, ' nueva info con promises')
//     })
//     .then(()=>{
//         return fs.promises.readFile(rutaProm, 'utf-8')
//     })
//     .then((info)=>{
//         console.log(info)
//     })
//     .catch(error=>console.log(error))
// }else{
//     fs.promises.writeFile(rutaProm, 'primer archivo promises')
//     .then(()=>console.log('archivo creado con exito'))
//     .catch(error=>console.log(error))
// }

// //ejemplo con productos

// const productos = [
//     {nombre: 'iphone', precio:1000, stock: 50}, 
//     {nombre: 'ipad', precio:2000, stock: 20}, 
//     {nombre: 'apple tv', precio:3000, stock: 40}, 
// ]


// const rutaTXT = './archivos/productos.txt'
// const rutaJSON = './archivos/productos.json'

// // json.parse() - json.stringify()

// // fs.writeFileSync(rutaTXT, productos) // no se puede 
// // fs.writeFileSync(rutaJSON, productos) // no se puede 

// fs.writeFileSync(rutaTXT, JSON.stringify(productos)) // se puede 
// fs.writeFileSync(rutaJSON, JSON.stringify(productos)) // se puede 

// const productosFile = JSON.parse(fs.readFileSync(rutaTXT, 'utf-8')) // para que lo devuelva en forma de array y no de texto
// console.log(productosFile)








