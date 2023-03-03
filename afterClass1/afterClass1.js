// // HANDS ON LAB AFTERCLASS

// class TicketManager {
//   #precioBaseDeGanancia = 0.15

//   constructor() {
//     this.eventos = []
//   }

//   getEventos(){
//     return this.eventos
//   }


//   agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
    
//     // If(!nombre || !lugar || !precio) {
//     //   return 'error';
//     // } else {}
//       const evento = {
//       id: this.#generarId(),
//       nombre,
//       lugar,
//       precio: precio + this.#precioBaseDeGanancia,
//       capacidad,
//       fecha,
//       participantes: [],
//     }
//     this.eventos.push(evento)
    
//   }

//   agregarUsuario(idEvento, idUsuario){
//     const evento = this.#evaluarEvento(idEvento)
//     if(evento){
//       if(!evento.participantes.includes(idUsuario)){
//         evento.participantes.push(idUsuario)
//       }
//     } else {
//       console.log('evento no existe')
//     }
//   }


//   ponerEventoEnGira(idEvento, nuevoLugar, nuevaFecha){
//     const evento = this.#evaluarEvento(idEvento)
//     if(evento){
//       const nuevoEvento = {
//         ...evento,
//         id: this.#generarId(),
//         lugar: nuevoLugar,
//         fecha: nuevaFecha,
//         participantes: []
//       }
//       this.eventos.push(nuevoEvento)
//     } else {
//       console.log('evento no existe')
//     }
//   }


//   #generarId() {
//     let id =
//       this.eventos.length === 0
//         ? 1
//         : this.eventos[this.eventos.length - 1].id + 1
//     return id
//   }

//   #evaluarEvento(id){
//     return this.eventos.find(evento => evento.id === id)
//   }
// }

// const tickets = new TicketManager()
// tickets.agregarEvento('Primer evento','Primer lugar',100)
// tickets.agregarUsuario(1,1)
// tickets.ponerEventoEnGira(1,'NuevoLugar1', new Date('12/21/2022'))

// console.log(tickets)







// // otro ej

// // clase padre

// class Persona {
//   constructor(nombre, apellido){
//     this.nombre = nombre
//     this.apellido = apellido
//   }
//   #saludar(){
//     console.log(`bienvenido ${this.nombre}`)
//   }
// }

// // clases hijos

// class Estudiante extends Persona {
//   constructor(nombre, apellido, curso){
//     super(nombre,apellido)
//     this.curso = curso
//   }
  
// }

// class Trabajador extends Persona {
//   constructor(nombre, apellido, empleo){
//     super(nombre,apellido)
//     this.empleo = empleo
//   }
// }

// const persona1 = new Persona('juan', 'villa')
// const estudiante1 = new Estudiante('rodri', 'paredes', 'javascript')
// const trabajador1 = new Trabajador('pedro', 'abe', 'constructor')

// console.log(persona1)
// console.log(estudiante1)
// console.log(trabajador1)



























































