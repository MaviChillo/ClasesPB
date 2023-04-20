// export const login = (user,password)=>{
//     if(password === null||password === undefined){
//         return 'No se ha proporcionado password'
//     }
//     if(user === null){
//         return 'No se ha proporcionado user'
//     }
//     if(password !== '123'){
//         return 'password incorrecta'
//     }
//     if(user !== 'coderUser'){
//         return 'user incorrecto'
//     }
//     if(user === 'coderUser' && password === '123'){
//         return 'loggeado'
//     }
// }

//refactorizacion

export const login = (user,password)=>{
    if(!password) return 'No se ha proporcionado password'

    if(!user) return 'No se ha proporcionado user'

    if(password !== '123') return 'password incorrecta'

    if(user !== 'coderUser') return 'user incorrecto'

    if(user === 'coderUser' && password === '123') return 'loggeado'
}