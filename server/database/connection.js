import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("connected"))
.catch((error) => console.log(error));

//mongoose; 


