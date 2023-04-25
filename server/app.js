import express from "express"

const app = express();
app.use(express.json());

import cors from "cors";
app.use(cors({
    credentials: true,
    origin: "http://localhost:8080/sign-in"
}));

import loginRouter from "./routers/loginRouter.js"
app.use(loginRouter);


const PORT = 3000;

app.listen(PORT, (error) => console.log(error))