// const fs = require('fs')
// const crypto = require('crypto')

// const ruta = 'Usuarios.json'
// class UserManager {

//     async consultarUsuarios(){
//         if(fs.existsSync(ruta)){
//             const data = await fs.promises.readFile(ruta, 'utf-8')
//             const usuarios = JSON.parse(data)
//             return usuarios
//         } else{
//             return []
//         }

//     }

//     async crearUsuario(nombre, apellido, userName, contraseña){
//         const usuario ={
//             nombre, 
//             apellido,
//             userName,
//             contraseña
//         }
        
//         // crypto
//         // crea key para encriptar o desencriptar
//         usuario.key = crypto.randomBytes(12).toString('base64')
//         // encriptar contraseña
//         usuario.contraseña = crypto.createHmac('sha256', usuario.key).update(usuario.contraseña).digest('hex')

//         const usuarios = await this.consultarUsuarios()
//         usuarios.push(usuario)
//         await fs.promises.writeFile(ruta, JSON.stringify(usuarios))

//     }


//     async validarUsuario(userName, contraseña){
//         const usuarios = await this.consultarUsuarios()
//         const usuario = usuarios.find((u) => u.userName === userName)
//         if (!usuario){
//             console.log('usuario no existe')
//             return
//         }
//         const contraseñaEncript = crypto.createHmac('sha256', usuario.key).update(contraseña).digest('hex')
//         if(contraseñaEncript === usuario.contraseña){
//             console.log('logueado')
//         }else{
//             console.log('contraseña incorrecta')
//         }
//     }
// }

// const manager = new UserManager()

// async function env(){
//     // await manager.crearUsuario('franco', 'moris', 'fmoris', 'abcde123')
//     const usuarios = await manager.consultarUsuarios()
//     console.log(usuarios)
//     await manager.validarUsuario('fmoris', 'saadf')
// }

// env()







