import fs from 'fs'
import {__dirname} from '../../utils.js'

const path = __dirname + '/cursos.json'

export default class CursosManager{

    async getAll(){
        if(fs.existsSync(path)){
            try {
                const cursos = await fs.promises.readFile(path, 'utf-8')
                return JSON.parse(cursos)
            } catch (error) {
                console.log(error)
            }
        }else{
            return []
        }
    }


    async createCurso(objCurso){
        try {
            const cursosFile = await this.getAll()
        let id
        if(cursosFile.length === 0){
            id = 1
        }else{
            id = cursosFile[cursosFile.length - 1 ].id + 1
        }
        const newCurso = {id,...objCurso}
        cursosFile.push(newCurso)
        await fs.promises.writeFile(path, JSON.stringify(cursosFile))
        } catch (error) {
            console.log(error)
        }
    }
}