 var mongoose_=require("mongoose")
 var Dburl="mongodb://127.0.0.1:27017/ecommerce_backend";
mongoose_.connect(Dburl)
var db=mongoose_.connection;
db.once("open",()=>{
    console.log("database connected");
})
db.on("error",()=>{
    console.log("database not connected");
})
module.exports=db;