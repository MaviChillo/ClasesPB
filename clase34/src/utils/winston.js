import winston from "winston"
import config from '../config.js'

// const logger = winston.createLogger({
//     // level: 'info', //sino especifico va default a silly
//     // format: winston.format.json(),
//     //si o si pasarle transports
//     transports:[
//         //consola
//         new winston.transports.Console({
//             //si no le doy nada muestra por default info para arriba(info, warn y error)
//             level: 'silly', // de aca para arriba
//             format: winston.format.combine(
//                 winston.format.colorize(),//colores al level
//                 winston.format.simple()//hace se vea simple y se vea el colorize
//             )
//         }),
//         //guarda en un file
//         new winston.transports.File({
//             level: 'warn',
//             //nombre y localizacion del file
//             filename: './errors.log',
//             //formato del log
//             format: winston.format.combine(
//                 winston.format.timestamp({format:'YY-MM-DD hh:mm:ss'}),//tiempo a cada level
//                 winston.format.prettyPrint()//hace que se vea bonito y se vea el timestamp
//             )
//         })
//     ]
// })


const logsLevels = {
    names:{
        err: 0,
        warning: 1,
        information: 2
    },
    colors:{
        err: 'red',
        warning: 'yellow',
        information: 'green'
    }
}

let logger

if(config.node_env === 'development'){
    logger = winston.createLogger({
        levels: logsLevels.names,
        transports: [
            new winston.transports.Console({
                level: 'information',
                format: winston.format.combine(
                    winston.format.colorize({colors:logsLevels.colors}),
                    winston.format.simple()
                )
            })
        ]
    })
}else{
    logger = winston.createLogger({
        levels: logsLevels.names,
        transports: [
            new winston.transports.File({
                level: 'information',
                filename: './logsStage.log',
                format: winston.format.combine(
                    winston.format.timestamp(),
                    winston.format.prettyPrint(),
                    winston.format.label({label: 'Este es un log de Stage'})
                )
            })
        ]
    })
}

export default logger