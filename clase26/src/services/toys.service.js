import ToysManager from '../DAL-Persistencia/toysManager.js'

const toysManager = new ToysManager()

export async function getAllToys(){
    try {
        const toys = await toysManager.findAll()
        return toys
    } catch (error) {
        return error
    }
}


export async function createOneToy(toy){
    try {
        const newToy = await toysManager.createOne(toy)
        return newToy
    } catch (error) {
        return error
    }
}