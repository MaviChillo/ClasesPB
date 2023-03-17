import express from 'express'
import './persistencia/dbConfig.js'
import usersRouter from './routes/users.router.js'
import UsersCustomeRouter from './routes/usersCustome.router.js'

const app = express()
const usersCustomeRouter = new UsersCustomeRouter()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/users',usersRouter)
app.use('/usersCustome',usersCustomeRouter.getRouter())


const PORT = 8080

app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`)
})
