import { Router } from "express";
import UsersManager from '../dao/mongoManager/usersManager.js'
import CursosManager from '../dao/mongoManager/cursosManager.js'

// import UsersManager from '../dao/fileManager/usersManager.js'

const usersManager = new UsersManager()
const cursosManager = new CursosManager()


const router = Router()

router.get('/', async(req, res)=>{
    const users = await usersManager.getAll()
    if(!users){
        res.json({message: 'Error'})
    }else{
        res.json({message: 'Success', users})
    }
})

router.post('/', async(req, res)=>{
    const {firstName, lastName, email, dni} = req.body
    if(!firstName || !lastName || !email || !dni){
        res.json({message: 'values required'})
    }else{
        const newUser = await usersManager.createUser({firstName, lastName, email, dni})
        if(!newUser){
            res.json({message: 'Error'})
        }else{
            res.json({message: 'Success', newUser})
        }
    }
})

router.post('/:idUser/cursos/:idCurso', async(req, res)=>{
    try {
        const {idUser, idCurso} = req.params
        const curso = await cursosManager.getCursoById(idCurso)
        if(!curso) return res.json({message: 'curso not found'})
        const user = await usersManager.getUserById(idUser)
        if(!user) return res.json({message: 'user not found'})
        const cursoExiste = user.cursos.find(c=> c._id === idCurso)
        if(cursoExiste) return res.json({message: 'curso already exist in this user'})
        user.cursos.push(idCurso)
        curso.students.push(idUser)
        await usersManager.UpdateUser(idUser, user)
        await cursosManager.UpdateCurso(idCurso, curso)
        res.json({message: 'user added to curso'})
    } catch (error) {
        console.log(error)
    }
})

export default router