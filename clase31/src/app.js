import express from 'express'
import { generateUsers } from './utils/mocks.js'

const app = express()

app.listen(8080, ()=>{
    console.log('escuchando puerto 8080')
})

app.get('/api/users', (req, res)=>{
    const users = []
    for(let i = 1; i <5 ; i++){
        const user = generateUsers()
        users.push(user)
    }
    res.json({users})
})