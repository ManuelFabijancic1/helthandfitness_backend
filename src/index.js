import express from 'express';
import cors from 'cors';
import connect from './db.js';


import dotenv from "dotenv"
dotenv.config();

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())


//arms




app.listen(port, () => console.log(`Slušam na portu ${port}!`));
