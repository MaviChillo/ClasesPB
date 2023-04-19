import { productsModel } from "../../mysqlDB/models/products.model.js";

export default class ProductsMySQL {
    async createProduct(obj){
        try {
            const newProd = await productsModel.create(obj)
            return newProd
        } catch (error) {
            return error
        }
    }

    async findAll(){
        try {
            const products = await productsModel.findAll()
            return products
        } catch (error) {
            return error
        }
    }

    async findById(id){
        try {
            const product = await productsModel.findByPk(id) //find by primary key
            return product
        } catch (error) {
            return error
        }
    }

    async deleteOne(id){
        try {
            const deleteProd = await productsModel.destroy({
                where:{
                    id: id
                }
            })
            return deleteProd
        } catch (error) {
            return error
        }
    }
}