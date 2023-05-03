import logger from "../utils/winston.js";

export const generateLog = (req,res, next)=>{
    logger.information(`Method: ${req.method} - URL: ${req.url} - Date: ${new Date().toLocaleString()}`)
    next()
}