import {usersModel} from '../models/users.model.js'

export default class UsersManager {

    async getAll(){
        try {
            const users = await usersModel.find().populate('cursos').lean()
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


    async getUserById(idUser){
        try {
            const user = await usersModel.findOne({_id: idUser}).populate('cursos').lean()
            return user
        } catch (error) {
            console.log(error)
        }
    }

    async UpdateUser(idUser, objUser){
        try {
            const updateUser = await usersModel.updateOne({_id:idUser}, {$set:objUser}).populate('cursos').lean()
            return updateUser
        } catch (error) {
            console.log(error)
        }
    }
}