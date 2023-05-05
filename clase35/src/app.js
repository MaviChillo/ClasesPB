import express from 'express'
// modulos nativos de node:
import cluster from 'cluster'
import os from 'os'


// cuantos nucleos tiene tu procesador y cuantos subprocesos puedes crear:
// console.log(os.cpus().length)

// crear subprocesos:
// cluster.fork()

// ver si este proceso es principal o worker
// console.log(cluster.isPrimary)

if(cluster.isPrimary){
    console.log(`este es el proceso principal ${process.pid}`)
    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork()
    }

    cluster.on('disconnect', ()=>{
        cluster.fork()
    })

}else{
    const app = express()

    app.get('/simple', (req,res)=>{
        let resultado = 0
        for (let i = 0; i < 10000; i++) {
            resultado+=i
        }
        res.send(`el resultado es: ${resultado}`)
    })

    app.get('/compleja', (req,res)=>{
        let resultado = 0
        for (let i = 0; i < 100000000; i++) {
            resultado+=i
        }
        res.send(`el resultado es: ${resultado}`)
    })


    app.listen(8080, ()=>{
        console.log(`escuchando puerto 8080, el proceso worker ${process.pid}`)
    })
}





//generar peticion de usuarios (count) unas 50 veces (num) y lo aloje en un json (-o)
// artillery quick --count 40 --num 50 "http://localhost:3000/simple" -o resultadosSimple.json
//se crea una terminal aparte para poner ese codigo, mientras el servidor este activo con nodemon


// crear imagen del docker
// docker build -t docker45 .