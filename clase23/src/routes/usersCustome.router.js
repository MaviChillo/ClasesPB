import Router from './router.js'
import { userModel } from '../persistencia/models/users.model.js'
import {generarToken} from '../utils.js'
export default class UsersCustomeRouter extends Router {
    init(){
        this.get('/',['ADMIN'],(req,res)=>{
            res.respuestaFallida('Usuario no encontrado')
        })

        this.post('/',['ADMIN'],async(req,res)=>{
            console.log('prueba');
            const user = await userModel.create(req.body)
            res.respuestaExitosa('Usuario creado')
        })

        this.post('/login',async(req,res)=>{
            const {username,password} = req.body
            const user = await userModel.findOne({username,password})
            if(user){
                const token = generarToken(user)
                res.respuestaToken(token)
            } else {
                res.respuestFallida('Usuario no existe')
            }
        })
    }
}