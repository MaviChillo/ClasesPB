import usersService from "../services/users.service.js";

class UsersController {
    findUser = async(req,res)=>{
        const {userId} = req.params
        try {
            const user = await usersService.findUser(userId)
            res.json({message: 'user found', user})
        } catch (error) {
            res.json({message: 'user not found', error})
        }
    }


    createUser = async(res,res)=>{
        const obj = req.body
        try {
            const newUser = await usersService.createUser(obj)
            res.json({message: 'user created', user:newUser})
        } catch (error) {
            res.json({message: 'error', error})
        }
    }
}

export default new UsersController()