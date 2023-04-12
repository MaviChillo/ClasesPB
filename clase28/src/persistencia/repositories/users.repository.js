import UsersDBDTO from "../DTOs/usersDB.dto.js";
import UsersRespDTO from "../DTOs/usersResp.dto.js";

export default class UsersRepository{
    constructor(dao){
        this.dao = dao
    }

async crearUser(user){
    try {
            const userDBDTO = new UsersDBDTO(user)
            const userDao = this.dao.crearUser(userDBDTO)
            const userRespDTO = new UsersRespDTO(userDao)
            return userRespDTO
        } catch (error) {
            return error
        }
}
}