import {usersModel} from '../../../mongoDB/models/users.model.js'
import BasicMongo from '../basicMongo.js'

class UsersMongo extends BasicMongo{
    constructor(model){
        super(model)//paso el modelo al padre(basic)
    }
}


const usersMongo = new UsersMongo(usersModel)
export default usersMongo


//accede a todos los metodos: tanto de users como de basic
// usersMongo.