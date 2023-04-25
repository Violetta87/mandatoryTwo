import Router from "express";
const router = Router();

import { compare } from "bcrypt";
import { findByEmail } from "../database/crud.js";

router.post("/login", async (req,res) => {
    try{
        const loginInfo = req.body;
    
    if(!loginInfo.email || !loginInfo.password){
        throw new Error('missing email or password')
    }
    
    
    const loginFromDatabase = await findByEmail(loginInfo.mail)
    
    if(!loginFromDatabase){
        throw new Error("user doesnt exists")
    }
    
    //compare decrypter : takes two params a string that needs to encryptet
    // and hashed string that needs to be decrypted and then compares them to eachother.  
    const isUserValid = await compare(loginInfo.password, loginFromDatabase.password)
    
    if(isUserValid){
        res.status(200).send({user: loginFromDatabase.email})
    }
    
    
    }catch(error){
        res.status(400).send({error})
    }
})


export default router;