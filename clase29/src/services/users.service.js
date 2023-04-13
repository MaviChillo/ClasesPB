import usersMongo from "../persistencia/DAOs/usersDAO/usersMongo.js"
import { hashData } from "../utils.js";

class UsersService{
    constructor(){
        this.dao = usersMongo
    }

    findUser = async(id)=>{
        const user = await this.dao.findOne(id)
        return user
    }

    createUser = async(obj)=>{
        const hashPass = hashData(obj.password)
        const newObj = {...obj, password:hashPass}
        const newUser = await this.dao.create(newObj)
        return newUser
    }
}

const usersService = new UsersService()
export default usersService