import express from 'express';
import config from './config.js';
import cors from 'cors'
import paymentsRouter from './routes/payments.router.js';

const app = express();
const PORT = config.port;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())

app.use('/api/payments', paymentsRouter);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});