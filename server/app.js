import express from "express"
import mongoose from "mongoose";

const app = express();
app.use(express.json());


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

    
})
.then(() => console.log("connected"))
.catch((error) => console.log(error));

app.get("/home", (req,res) => {
    res.send({data: "hej"})
})

const PORT = 8080;

app.listen(PORT, (error) => console.log(error))