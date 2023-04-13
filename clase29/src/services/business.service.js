import businessMongo from '../persistencia/DAOs/businessDAO/businessMongo.js'

//con funciones (funcional)

// export const findBusiness = async(id)=>{
//     const business = await businessMongo.findOne(id)
//     return business
// }

// export const createBusiness = async(obj)=>{
//     const newBusiness = await businessMongo.create(obj)
//     return newBusiness
// }


//con clases (por clases)

class BusinessService{
    constructor(){
        this.dao = businessMongo
    }

    findBusiness = async(id)=>{
        const business = await this.dao.findOne(id)
        return business
    }

    createBusiness = async(obj)=>{
        const newBusiness = await this.dao.create(obj)
        return newBusiness
    }
}

const businessService = new BusinessService()
export default businessService
