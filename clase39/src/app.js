import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

//swagger
import swaggerUi from 'swagger-ui-express'
//este setup en swaggerSpecs.js
import { swaggerSetup } from './swaggerSpecs.js';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';

const app = express();
const PORT = process.env.PORT||8080;
const connection = mongoose.connect(`mongodb+srv://MaviChillo:mimamamemima1@cluster0.ijd1vjv.mongodb.net/adoptMe45?retryWrites=true&w=majority`)
if(connection){
    console.log('conectado a db')
}

app.use(express.json());
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);

//swagger docs endpoint
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSetup))

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
