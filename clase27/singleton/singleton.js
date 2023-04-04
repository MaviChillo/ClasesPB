import mongoose, { mongo } from "mongoose"
mongoose.set('strictQuery', true);

const URI = 'mongodb+srv://MaviChillo:mimamamemima1@cluster0.ijd1vjv.mongodb.net/SingletonDB?retryWrites=true&w=majority'

class DBConnect {
    static #instance

    constructor(){
        mongoose.connect(URI)
    }

    static getInstance(){
        if(this.#instance){
            console.log('instancia ya existe')
            return this.#instance
        }else{
            console.log('instancia primera')
            this.#instance = new DBConnect()
            return this.#instance
        }
    }


}


// const connect1 = new DBConnect()
// const connect2 = new DBConnect()

const connect1 = DBConnect.getInstance()
const connect2 = DBConnect.getInstance()
const connect3 = DBConnect.getInstance()
const connect4 = DBConnect.getInstance()
const connect5 = DBConnect.getInstance()
const connect6 = DBConnect.getInstance()
const connect7 = DBConnect.getInstance()
