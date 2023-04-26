import Router from "express";
const router = Router();
import db from "../database/connection.js"
import dotenv from "dotenv"
dotenv.config();

import { compare } from "bcrypt";


router.post("/login", async (req,res) => {
    try{
        const loginInfo = req.body;

        const email = req.body.email

    
    if(!loginInfo.email || !loginInfo.password){
        throw new Error('missing email or password')
    }
    
    const loginFromDatabase = await db.get(`SELECT * FROM login WHERE email = ?`, [loginInfo.email])
    
    if(!loginFromDatabase){
        throw new Error("user doesnt exists")
    }
    
    let isUserValid = false;

    if (loginInfo.password === loginFromDatabase.password){

        isUserValid = true

    }
    
    
    //compare decrypter : takes two params a string that needs to encryptet
    // and hashed string that needs to be decrypted and then compares them to eachother.  
    //const isUserValid = await compare(loginInfo.password, loginFromDatabase.password)

    if(isUserValid){
        res.status(200).send({user: loginFromDatabase.email})
    }
    
    
    }catch(error){
        res.status(400).send({error})
    }
})

router.get("/logout", (req,res) => {
    /*req.session.destroy(() =>{
        res.send({message: "logged out"})
    })
    */
})


export default router;