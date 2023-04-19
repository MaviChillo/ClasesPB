import { Sequelize } from "sequelize";
import config from "../../config.js";

export const sequelize = new Sequelize(
    config.db_name,
    config.db_user, 
    config.db_password,
    {
        host: config.db_host,
        dialect: config.db_dialect
    }
)

//conectamos a la db

sequelize.sync()
.then(()=>console.log('conectado a la db'))
.catch((error)=>console.log(error))




