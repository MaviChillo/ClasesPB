import jwt from 'jsonwebtoken'

export const generarToken = (user)=>{
    const token = jwt.sign({user},'secretJWT')
    return token
}