import config from '../../config.js'
import UsersFile from './userDAO/usersFile.js'
//sin repository:
//import UsersMongo from './userDAO/usersMongo.js'
//con repository:
import UsersRepository from '../repositories/users.repository.js'

let usersDao

switch (config.persistencia) {
    case 'MONGO':
        await import('../modngoDb/configMongo.js')
        //con repository:
        const {default:usersMongo} = await import('./userDAO/usersMongo.js') 
        usersDao = new UsersRepository(usersMongo)
        //sin repository:
        //usersDao = new UsersMongo()
        break;

    case 'FILE':
        usersDao = new UsersFile()
        break;
}

export default usersDao