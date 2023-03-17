import {usersModel} from '../models/users.model.js'

export default class UsersManager {

    async getAll(){
        try {
            const users = await usersModel.find()
            return users
        } catch (error) {
            console.log(error)
        }
    }

    async createUser(objUser){
        try {
            const newUser = await usersModel.create(objUser)
            return newUser
        } catch (error) {
            console.log(error)
        }
    }
}