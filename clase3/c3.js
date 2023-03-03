// // clase 3

// // programacion sincronica y asincronica

// // funciones tradicionales

// function miPrimeaFuncion(params){
//     //bloque de codigo a ejecutar
//     return function(){
//         // funcion dentro de otra, no necesita nombre. es anonima.
//     }
// }

// // funciones flecha =>

// const funcionFlecha = (params) => {
//     //bloque de codigo a ejecutar
// }

// // O 

// //funcion flecha en una sola linea

// const funcionFlecha1 = param => param + 2 

// // CALLBACKS

// function callback(param){
//     return `el usuario escribio: ${param}`
// }

// function principal(param1, callb){
//     const respuesta = callb(param1)
//     return respuesta
// }

// console.log(principal(`mucho gusto`, callback))

// // ejercicio con callback

// const operacion = (num1, num2, funcionCB)=>{
//     return funcionCB(num1, num2)
// }

// const funcionSuma = (n1, n2) => n1+n2

// const funcionResta = (n1, n2) => n1-n2

// console.log(operacion(5,2,funcionSuma))
// console.log(operacion(5,2,funcionResta))


// // CALLBACKS ANIDADOS = CALLBACK HELL

// const familiares = []
// const usuarios = []

// // agregar un familiar a un usuario

// function agregarFamiliar(usuario, infoFamiliar){
//     //buscar que usuario exista
//     usuarios.findById(usuario.id, function(error, usuario){
//         if (error){
//             return error
//         } else {
//             familiares.findByLastName(usuario.lastName, function(error, familiares){
//                 if(error){
//                     return error
//                 } else {
//                     if(familiares.includes(infoFamiliar)){
//                         return 'familiar ya ta'
//                     } else {
//                         familiares.createOne(infoFamiliar, function(error){
//                             if(error){
//                                 return error
//                             } else {
//                                 return 'familiar creado con exito'
//                             }
//                         })
//                     }
//                 }
//             })
//         }
//     })

// }



// // CREAR PROMESAS

// function findById(id){
//     return new Promise((resolve, reject)=>{
//         const usuario = usuarios.find(usuario=>usuario.id===id)
//         if(usuario){
//             resolve(usuario)
//         } else {
//             reject('no encontre ningun usuario')
//         }
//         // usuario ? resolve(usuario) : reject('no encontre ningun usuairio')
        
//     })
// }

// // .then y .catch

// findById(2)
//     // .then(usuario => console.log(usuario)) // usuario
//     .then((usuario)=>{
//         return usuarios.findByName(usuario.name)
//     })
//     .then(response => console.log(response))
//     .catch((error) => console.log(error)) // error


// // MEJORAMOS UN POCO EL CALLBACK HELL CON .THEN Y .CATCH

// function agregarFamiliarProm(usuario, infoFamiliar){
//     usuarios
//     .findById(usuario.id)
//     .then(usuario=>{
//         return familiares.findByLastName(usuario.lastName)
//     })
//     .then (familiares=>{
//         if(familiares.includes(infoFamiliar)){
//             return 'familiar ya existe'
//         } else{
//             return familiares.createOne(infoFamiliar)
//         }
//     })
//     .then(()=> 'familiar creado con exito')
//     .catch((error)=>{
//         console.log(error)
//     })
// }


// // MEJORANDO EL CALLBACK HELL CON ASYNC / AWAIT
// // TRY / CATCH
// // SI TRY SE CUMPLE BIEN JOYA, SINO CATCH ERROR

// async function agregarFamiliarAsync(usuario, infoFamiliar){

//     try {
//         const usuario = await usuarios.findById(usuario.id)
//         const familiares = await familiares.findByLastName(usuario.lastName)
//         if(familiares.includes(infoFamiliar)){
//             return 'familiar ya existe'
//         } 
//         const nuevoFamiliar = await familiares.createOne(infoFamiliar)
//         return('familiar creado con exito', nuevoFamiliar)

//     } catch (error) {
//         console.log(error)
//     }
// }

















































































































































































































