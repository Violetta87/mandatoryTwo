import express from "express"
import dotenv from "dotenv"
dotenv.config();

const app = express();
app.use(express.json());

//process= object with property env.
//PACKAGE DOTENV. get acces to enviromental variables through .env property. 
import cors from "cors";
app.use(cors({
    credentials: true,
    origin: true,
    secret: process.env.CORS_KEY
}));

import loginRouter from "./routers/loginRouter.js"
app.use(loginRouter);


const PORT = 3000;

app.listen(PORT, (error) => console.log(error))