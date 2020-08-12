const mongoose=require("mongoose");

const {Schema}=mongoose;

const requireString={
    type:String,
    required:true
}


const logEntrySchema=new Schema({
    title:requireString,
    description:String,
    comments:String,
    image:String,
    rating:{
        type:Number,
        min:0,
        max:10,
        default:0
    },
    latitude:{
        type:Number,
        required:true,
        min:-90, //latitude longtutude validation should be done.
        max:90
    },
    longitude:{
        type:Number,
        required:true,
        min:-180,
        max:180
    },
    visitDate:{
        type:Date,
        required:true
    }

},{
    timestamps:true //mongoose automatically add the "created at" and "updated at" fields if timestamp is true
})

const logEntry=mongoose.model("LogEntry",logEntrySchema)

module.exports=logEntry;