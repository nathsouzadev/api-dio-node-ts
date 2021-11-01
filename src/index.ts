import 'reflect-metadata';
import express from 'express';
import { router } from './routes';
import createConnection from './database';

createConnection();
const server = express();

server.use(express.json())
server.use(router)

server.listen(5000, () => {
    console.log('Servidor on na porta 5000 http://localhost:5000/')
})
