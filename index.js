const express=require("express");
const cors=require("cors");
const morgan=require("morgan");
const helmet=require("helmet");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");

require("dotenv").config();

mongoose.connect(process.env.DATABASE_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const PORT=process.env.PORT || 4000;
const app=express();

const middlewares=require("./middlewares");
const logs=require("./api/logs");
const logEntry = require("./models/logEntry");

app.use(cors({
    origin:process.env.CORS_ORIGIN
}));
app.use(helmet());
app.use(morgan("common"));
app.use(bodyParser.json());

app.get("/",async(req,res,next)=>{
    try{
        const entries=await logEntry.find();
        res.json(entries);
    }catch(error){
        next(error);
    }
   
})

app.use("/api/logs",logs);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);


app.listen(PORT,()=>{
    console.log(`Listening at port ${PORT}`);
})