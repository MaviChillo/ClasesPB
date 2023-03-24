import bcrypt from 'bcrypt'

export const hashData = async(data)=>{
    return bcrypt.hash(data, 10)
}