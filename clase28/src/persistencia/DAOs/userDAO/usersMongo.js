import {usersModel } from '../../modngoDb/models/users.model.js'
import {UsersDBDTO} from '../../DTOs/usersDB.dto.js'
import {UsersRespDTO} from '../../DTOs/usersResp.dto.js'

export default class UsersMongo {

    async getAll(){
        try {
            const users = await usersModel.find()
            return users
        } catch (error) {
            return error
        }
    }

    async create(objUser){
        try {
            const newUser = await usersModel.create(objUser)
            return newUser
        } catch (error) {
            return error
        }
    }

}