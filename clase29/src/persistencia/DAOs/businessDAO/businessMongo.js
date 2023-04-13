import {businessModel} from '../../mongoDB/models/business.model.js'
import BasicMongo from '../basicMongo.js'

class BusinessMongo extends BasicMongo{
    constructor(model){
        super(model)//paso el modelo al padre(basic)
    }

    async findOneBusinessWithOrders(){
        return true //ejemplo sin sentido para mostrar acceso de abajo
    }
}


const businessMongo = new BusinessMongo(businessModel)
export default businessMongo

//accede a todos los metodos: tanto de business como de basic
// businessMongo.