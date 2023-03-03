// clase 1

//copia de arreglo/objeto

// let objeto = {
//     nombre: 'maria',
//     apellido: 'abello',
//     edad: 35
// }

// let objetoCopia = {...objeto} //spread operator
// objetoCopia.nombre = 'laura'
// console.log(objetoCopia)
// console.log(objeto)


// actividad clase 1/2

// let nombre = 'juan'
// let edad = 25
// let precio = 200
// let series = ['GOT', 'Breaking Bad']

// let usuarios = [
//     {
//     nombre: 'juan', 
//     edad: 35,
//     precio: 200, 
//     series: ['GOT', 'Breaking Bad']
//     },
//     {
//     nombre: 'andres', 
//     edad: 25,
//     precio: 500, 
//     series: ['Friends', 'Breaking Bad']
//     }
// ]


// usuarios.forEach(usuario=>{
//     // usuario.edad = usuario.edad + 1
//     usuario.edad++
//     usuario.series.push('House of Dragon')
// })
// console.log(usuarios)

// // funciones

// function sumar(num1, num2){
//     // let resultado = num1 + num2
//     // return resultado
//     // console.log(resultado)
//     return num1 + num2
// }
// console.log(sumar(1,2))

// const resultadoSuma = sumar(1,2)
// console.log(resultadoSuma + 100)

// // =>

// const restar = (num1, num2) => {
//     return num1 - num2
// }

// const restar2 = (num1, num2) => num1-num2
// const sumar2 = num1 => num1 +100

// console.log(restar(5,3))
// console.log(restar2(5,2))
// console.log(sumar2(4))

// // scope

// function ejemploScope (){
//     let i = 0 
//     for(let j=0; j<10; j++){
//         let k = i+j
//         i= k+1
//     }

// }

// // template strings

// const edad = 21
// const apellido = 'Alvarez'
// // console.log('la edad de Julian es'+ edad 'y su apellido es' + apellido)
// console.log(`La edad de Julian es ${edad} y su apellido es ${apellido}`)

// // HANDS ON LAB

// function mostrarLista(array){
//     if(array.length===0){
//         console.log('lista vacia')
//     } else {
//         array.forEach(elem => console.log(elem));
//         console.log(`la cantidad de elementos en el arreglo es ${array.length}`)
//     }
// }

// // mostrarLista([])
// mostrarLista([1, 2, 3, 4, 5])

//clases

// class Usuario {
//     constructor(nombre, email, password){
//         this.nombre = nombre
//         this.email = email
//         this.password = password
//     }
//     tieneEmail(){
//         if(this.email){
//             return true
//         } else {
//             return false
//         }
//     }
// }

// const usuario1 = new Usuario('Camila', 'camila98@gmail.com', 'lola123')
// const usuario2 = new Usuario('Juan', '', 'juancho123')

// console.log(usuario1)
// console.log(usuario2)

// console.log(usuario1.tieneEmail())
// console.log(usuario2.tieneEmail())


// // HANDS ON LAB ACTIVIDAD

// class Contador {
//     constructor(nombre){
//         this.nombre = nombre
//         this.contadorInd = 0 
//     }
//     static contadorGlobal = 0

//     getResponsable(){
//         console.log(this.nombre)
//     }
//     getCuentaIndividual(){
//         console.log(`Individual ${this.nombre}: ${this.contadorInd}`)
//     }
//     getCuentaGlobal(){
//         console.log(`Global ${Contador.contadorGlobal}`)
//     }
//     contar(){
//         this.contadorInd++
//         Contador.contadorGlobal++
//     }
// }

// const contador1 = new Contador('juan')
// const contador2 = new Contador('camila')

// // console.log(contador1)
// // console.log(contador2)

// contador1.getResponsable()
// contador1.getCuentaIndividual()
// contador1.getCuentaGlobal()
// contador1.contar()
// contador1.getCuentaIndividual()
// contador1.getCuentaGlobal()
// contador2.contar()
// contador1.getCuentaIndividual()
// contador1.getCuentaGlobal()
// contador2.contar()
// contador2.getCuentaIndividual()
// contador2.getCuentaGlobal()



