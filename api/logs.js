const express=require("express");
const router=express.Router();

const logEntry=require("../models/logEntry");

router.get("/",(req,res)=>{
    res.json({
        message:"route"
    })
})

router.post("/",async(req,res,next)=>{
    try{
        const le=new logEntry(req.body);
        const createdEntry=await le.save();
        res.json(createdEntry);
    }catch(err){
        //console.log(error.name);//type of error
        if(error.name==="ValidationError"){
            res.status(422);
        }
        next(err);
    }
})

module.exports=router;