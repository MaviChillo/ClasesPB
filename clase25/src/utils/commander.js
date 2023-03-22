//commander
//npm i commander

import { program } from "commander";
// import { Command } from "commander"
// const program = new Command()

//config 
program
    .option('-d, --debug', 'variable para modo debug', false) //primer variable nombre de la propiedad
    .option('-p, --port <port>', 'puerto del servidor', 3000) //segunda variable descripcion
    .option('-m, --mode <mode>', 'ambiente a trabajar', 'development')//ultima variable es el default
    .parse(process.argv) //cerrar opciones
    //si el valor el booleano no hace falta mandar valor, pero si no lo es hay que especificar con <> en el seteo
//recuperar seteo
// program.opts()
// console.log(program.opts())
// console.log(program.args)


export default program






