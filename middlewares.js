//not found middleware
const notFound=(req,res,next)=>{
    console.log("here");
    const error=new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
}

//error handler for any time of error
const errorHandler=(error,req,res,next)=>{
   const statusCode=res.statusCode===200 ? 500 : res.statusCode;
   res.status(statusCode);
   res.json({
       message:error.message,
       stack:process.env.NODE_ENV==="development" ? error.stack : "Error occured" //not recommended in production
   }) 
}

module.exports={notFound,errorHandler};