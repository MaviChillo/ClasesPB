import fs from 'fs'
import {__dirname} from '../../utils.js'

const path = __dirname + '/users.json'

export default class UsersManager{

    async getAll(){
        if(fs.existsSync(path)){
            try {
                const users = await fs.promises.readFile(path, 'utf-8')
                return JSON.parse(users)
            } catch (error) {
            console.log(error)
            }
        }else{
            return []
        }
    }


    async createUser(objUser){
        try {
            const usersFile = await this.getAll()
        let id
        if(usersFile.length === 0){
            id = 1
        }else{
            id = usersFile[usersFile.length - 1 ].id + 1
        }
        const newUser = {id,...objUser}
        usersFile.push(newUser)
        await fs.promises.writeFile(path, JSON.stringify(usersFile))
        return newUser
        } catch (error) {
            console.log(error)
        }
    }
}