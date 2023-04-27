import Router from "express";
const router = Router();
import db from "../database/connection.js"
import { compare } from "bcrypt"

import dotenv from "dotenv"
dotenv.config();

import session from "express-session";
router.use(session({
    secret: process.env.SESSION_KEY,
    resave: false, //determinates if the session should be saved on every request. true if modified, false if not modified. 
    saveUninitialized:true //(true) session created even if not modified for anomonous user , (false) only created if modified. 
}));

router.post("/login", async (req,res) => {
    try{
        const loginInfo = req.body;

        if(!loginInfo.email || !loginInfo.password){
            return res.status(400).send({
                message: 'Information missing',
                status: 400
            })
        }
    
        const loginFromDatabase = await db.get(`SELECT * FROM login WHERE email = ?`, [loginInfo.email])
    
        console.log("efter loginfromdatabase", loginFromDatabase)

        if(!loginFromDatabase){
           return res.status(400).send({
                message: 'Couldnt find user'  
            })
        } 
    
    //compare decrypter : takes two params a string that needs to encryptet
    // and hashed string that needs to be decrypted and then compares them to eachother.  
    const isUserValid = await compare(loginInfo.password, loginFromDatabase.password)
    console.log(isUserValid)

        if(isUserValid){
            console.log(loginFromDatabase.password, loginInfo.password)
           return res.status(200).send({
            user: loginFromDatabase.email,
            message: "user found",
            status:200
        })
    }
    }catch(error){
        return res.status(400).send({error})
    }
})

router.get("/logout", (req,res) => {
    /*req.session.destroy(() =>{
        res.send({message: "logged out"})
    })
    */
})


export default router;