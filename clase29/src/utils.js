import bcrypt from 'bcrypt'

export const hashData = (data)=>{
    return bcrypt.hash(data, 10)
}
