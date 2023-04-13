export default class BasicMongo{
    constructor(model){
        this.model = model
    }

    async create(obj){
        try {
            const response = await this.model.create(obj)
            return response
        } catch (error) {
            return error
        }
    }

    async findAll(){
        try {
            const response = await this.model.find()
            return response
        } catch (error) {
            return error
        }
    }

    async findOne(id){
        try {
            const response = await this.model.findById(id)
            return response
        } catch (error) {
            return error
        }
    }


    async deleteOne(id){
        try {
            const response = this.model.deleteOne(id)
            return response
        } catch (error) {
            return error
        }
    }
}