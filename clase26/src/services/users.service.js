import UsersManager from '../DAL-Persistencia/usersManager.js'
import { hashData } from '../utils/bcrypt.utils.js'

const usersManager = new UsersManager()

export async function getAll(){
    try {
        const users = await usersManager.findAll()
        return users
    } catch (error) {
        return error
    }
}

export async function createOne(user){
    try {
        const hashPassword = await hashData(user.password)
        const newUser = await usersManager.createOne({...user, password:hashPassword})
        return newUser
    } catch (error) {
        return error
    }
}