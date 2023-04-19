import dotenv from 'dotenv'

dotenv.config()

export default {
    db_name: process.env.DB_NAME,
    db_user: process.env.DB_USER,
    db_password: process.env.DB_PASSWORD,
    db_host: process.env.DB_HOST,
    db_dialect: process.env.DB_DIALECT,
    port: process.env.PORT
}