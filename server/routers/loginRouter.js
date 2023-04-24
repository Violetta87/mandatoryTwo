import Router from "express";
const router = Router();

import bcrypt from "bcrypt";


router.post("login-page", async (req,res) => {
    const loginEmail = req.body.loginEmain;
    const loginPassword = req.body.loginPassword;
    const passwordPlaintext = "test"
    const namePlainText = "test"
    const encryptedPassword = await bcrypt.hash(passwordPlaintext, 12);
    const isTheSame = await bcrypt.compare(encryptedPassword, loginPassword)
    if(isTheSame && loginEmail === namePlainText){
        req.session.user = result;
    }

    const message = {
        succes: authorized,
        location: authorized ? "/api" : "login" //we use a if statement
    }

    res.send(message);  

});

export default router;