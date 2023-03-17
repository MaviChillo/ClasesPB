import {dirname} from'path'
import { fileURLToPath } from 'url'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const __dirname = dirname(fileURLToPath(import.meta.url))

//hasheo
export const hashData = async (data)=>{
    return bcrypt.hashSync(data, 10)
}

export const compareData = async (data, hashedData)=>{
    return bcrypt.compare(data, hashedData)
}

//token
export const generarToken = (user)=>{
    const token = jwt.sign({user},'secretKey', {expiresIn:'1h'})
    return token
}
