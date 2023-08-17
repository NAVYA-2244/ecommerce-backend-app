var mongoose_=require("mongoose")
var userSchema=mongoose_.Schema({
    uid:{type:Number,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    uname:{type:String},
    place:{type:String,default:"NA"},
    phoneNumber:{type:Number},
    createdAt:{type:Date,default:Date.now()}

})
var user=mongoose_.model("User",userSchema)
module.exports=user;