import fs from 'fs'
import { __dirname } from '../../../utils.js'

const path = __dirname+'/Users.json'

export default class UsersFile{

    async getAll(){
        try {
            if(fs.existsSync(path)){
                const usersFile = await fs.promises.readFile(path, 'utf-8')
                return JSON.parse(usersFile)
            }else{
                return []
            }
        } catch (error) {
            return error
        }
    }

    async create(objUser){
        try {
            const usersFile = await this.getAll()
            let id
            if(usersFile.length!==0){
                id = usersFile[usersFile.length-1].id+1
            }else{
                id = 1
            }
            const newUser = {id, ...objUser}
            usersFile.push(newUser)
            await fs.promises.writeFile(path, JSON.stringify(usersFile))
            return newUser
        } catch (error) {
            return error
        }
    }
}