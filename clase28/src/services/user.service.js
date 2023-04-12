//sin factory:
// import UsersDAO from '../persistencia/dao/userDAO/usersMongo.js'
// import UsersDAO from '../persistencia/dao/userDAO/usersFile.js'
// import UsersDAO from '../persistencia/dao/userDAO/usersMem.js'

//con factory:
import usersDao from "../persistencia/DAOs/factory"

//sin factory:
// const usersDao = new UsersDAO()

export const getAll = async()=>{
    const users = usersDao.getAll()
    return users
}


export const createOne = async(objUser)=>{
    const newUser = await usersDao.create(objUser)
    return newUser
} 









