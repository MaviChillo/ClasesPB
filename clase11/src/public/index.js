const socketClient = io()

const nombreUsuario = document.getElementById('nombreUsuario')
const formulario = document.getElementById('formulario')
const inputMensaje = document.getElementById('mensaje')
const chatParrafo = document.getElementById('chatParrafo')
let usuario = null


if(!usuario){
    Swal.fire({
        title: 'Bienvenido',
        text:'Ingresa tu usuario', 
        input: 'text', 
        inputValidator:(value)=>{
            if(!value){
                return 'Necesitas ingresar usuario'
            }
        }
    })
    .then(userName=>{
        usuario = userName.value
        nombreUsuario.innerText = usuario
        socketClient.emit('nuevoUsuario', usuario)
    })
}


formulario.onsubmit = (e) =>{
    e.preventDefault()
    const info = {
        nombre: usuario, 
        mensaje: inputMensaje.value
    }
    socketClient.emit('mensaje', info)
    inputMensaje.value = ''
    socketClient.emit('nuevoUsuario', usuario)
}


socketClient.on('chat', mensajes=>{
    const htmlRender = mensajes.map(e=>{
        return `<p><strong>${e.nombre}:</strong>${e.mensaje}</p>`
    }).join(' ')

    chatParrafo.innerHTML = htmlRender
})


socketClient.on('broadcast', nombreUsuario=>{
    Toastify({
        text: `Ingreso ${nombreUsuario} al chat`, 
        duration: 5000, 
        position: 'right'
    }).showToast()
})




