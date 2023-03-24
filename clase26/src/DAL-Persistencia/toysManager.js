import toysModel from './models/toys.model.js'

export default class ToysManager{

    async findAll(){
        try {
            const toys = await toysModel.find()
            return toys
        } catch (error) {
            return error
        }
    }

    async createOne(obj){
        try {
            const newToy = await toysModel.create(obj)
            return newToy
        } catch (error) {
            return error
        }
    }
}