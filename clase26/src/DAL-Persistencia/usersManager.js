import usersModel from './models/users.model.js'

export default class UsersManager{
    
    async findAll(){
        try {
            const users = await usersModel.find()
            return users
        } catch (error) {
            return error
        }
        
    }

    async createOne(obj){
        try {
            const newUser = await usersModel.create(obj)
            return newUser
        } catch (error) {
            return error
        }

    }
}