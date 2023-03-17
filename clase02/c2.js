// clase 2

// ES7

// // exponencial **

// const expMath = Math.pow(4,3)
// const exp = 4 ** 3
// console.log(expMath, exp)


// // array.includes

// const arrayNums = [1, 2, 3, 4, 5, 6]
// console.log(arrayNums.includes(7))


// ES8

// Object.entries // .values // .keys

// const obj = {
//     nombre: 'julian', 
//     apellido: 'alvarez',
//     edad: 21,
//     esCasado: false
// }

// console.log(Object.entries(obj))
// console.log(Object.values(obj))
// console.log(Object.keys(obj))

// const arrayObj = Object.entries(obj)
// console.log(arrayObj.length)

// // objeto a array para modificar
// const arrayObjMod = arrayObj.map(([clave, valor])=> [clave, `${valor} modificado`])
// console.log(arrayObjMod)

// // volver a pasar array a objeto, como estaba antes
// const objMod = Object.fromEntries(arrayObjMod)
// console.log(objMod)


// // ES9


// const animales1 = ['pajaro', 'vaca', 'pez', 'perro', 'gato']
// const animales2 = ['toro', 'guacamaya', 'raton', 'cerdo']

// // SPREAD

// const animales = animales1.concat(animales2) // sin spread
// console.log(animales)

// const animalesSpread = [...animales1, ...animales2] // con spread
// // obj = {...obj1, ...obj2}
// console.log(animalesSpread)

// // copia de objeto con spread
// const obj1 = {
//     nombre: 'julian', 
//     apellido: 'alvarez',
//     edad: 21,
//     esCasado: false
// }

// const objCopia = {...obj1, curso: 'programacion backend'}
// objCopia.nombre = 'luis'
// console.log(obj1)
// console.log(objCopia)


// // REST 

// const funcionRest = (a, b, ...otrosParams)=>{
//     console.log(a)
//     console.log(b)
//     console.log(otrosParams)
// }

// funcionRest(1, 2, 3, 4, 5, 6, 7, 8, 9)

// // DESTRUCTURING

// const animales3 = ['pajaro', 'vaca', 'pez', 'perro', 'gato']
// const animales4 = ['toro', 'guacamaya', 'raton', 'cerdo']
// const animalesDecon = [...animales3, ...animales4]

// const [primerAnimal, segundoAnimal, tercerAnimal, ...otrosAnimales] = animalesDecon

// console.log(otrosAnimales)


// const obj = {
//     nombre: 'julian', 
//     apellido: 'alvarez',
//     edad: 21,
//     esCasado: false
// }

// const {nombre, apellido, ...otrasProps} = obj
// console.log(otrasProps)



// // ACTIVIDAD EN CLASE

// const objetos = [
// {
//     manzanas: 3,
//     peras: 2,
//     carne: 1,
//     jugos: 5,
//     dulces: 2,
// },
// {
//     manzanas: 1,
//     sandias: 1,
//     huevos: 6,
//     jugos: 1,
//     panes: 4,
// },
// ]


// const arrayFrutas = []
// let total = 0

// objetos.forEach(obj =>{

//     // 1. crear array de frutas sin repetir

//     const arrayObj = Object.keys(obj)
//     // console.log(arrayObj)
//     arrayObj.forEach((fruta)=>{
//         !arrayFrutas.includes(fruta) && arrayFrutas.push(fruta) //if 
//     })

//     // 2. obtener total de frutas

//     const arrayVal = Object.values(obj)
//     arrayVal.forEach(val => total += val)
// })

// console.log(arrayFrutas)
// console.log(total)



// // ES10


// // string.trim()

// const saludo = '    bienvenido a PB     '
// console.log(saludo)
// console.log(saludo.trim())

// // array.flat()

// // 1 nivel
// const array = [1, 2, 3, 4, [5, 6, 7, 8], 9, 0]

// console.log(array)
// console.log(array.flat())

// // 2 niveles
// const array2 = [1, 2, 3, 4, [5, 6, 7, 8, [4, 6, 7]], 9, 0]

// console.log(array2)
// console.log(array2.flat(2)) // (2) = cuantos niveles de array nivelar

// // muchos niveles
// const array3 = [1, 2, 3, 4, [5, 6, 7, 8, [4, 6, 7, [4, 6, 7]]], 9, 0]

// console.log(array3)
// console.log(array3.flat(Infinity)) // (infinity) = todos los niveles


// // ES11

// // falsy
// // or ||

// // para escala falsy el 0 es false, entonces no lo muestra

// const num = 0
// console.log(num || 10)

// // nullish
// // and &&

// // en cambio el nullish tira true, ya que reconoce que 0 es un valor
// // y lo mismo con string vacios ''

// const num1 = 0
// console.log(num1 && 10)

// console.log(num1 ?? 10) // otro tipo de nullish para reemplazar el ||


// HANDS ON LAB

// class TicketManager {
//     #precioBaseDeGanancia = 50 // variable privada no se puede usar por fuera de esta clase

//     constructor(){
//         this.eventos = []
//     }
//     agregarEvento(nombre, lugar, precio, capacidad =50, fecha= new Date()){
//         const evento ={
//             id: this.#generarId(), 
//             nombre, 
//             lugar, 
//             precio: precio + this.#precioBaseDeGanancia, 
//             capacidad, 
//             fecha, 
//             participantes : []
//         }
//         this.eventos.push(evento)
//     }

//     #generarId(){
//         const id = 
//         this.eventos.length === 0 
//         ? 1 
//         : this.eventos[this.eventos.length - 1].id + 1
//         return id
//     }
// }

// const ticketManager = new TicketManager()
// ticketManager.agregarEvento('primer evento', 'primer lugar', 100)
// console.log(ticketManager)


































































































