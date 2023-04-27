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

//isautorized

const isAuthorized = (req,res,next) => {
    if(req.session.user){
        next();
    }else{
        res.status(400).send("Not logged in")
    }
}

app.use("/home", isAuthorized);



const PORT = 8081;

app.listen(PORT, (error) => {
    if(error){
        console.log(error)
    }
    console.log("server is listening on PORT:", PORT)
});
