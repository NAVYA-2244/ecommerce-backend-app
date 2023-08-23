var mongoose_=require("mongoose")
var orderSchema=mongoose_.Schema({
    orderId:{type:Number, unique:true},
    userId:{type:Number,unique:true},
    numberOfProducts:{type:Number},
    orderAmount:{type:Number},
    orderTime:{type:Date,default:Date.now()}

 
})
var order=mongoose_.model("order",orderSchema)
module.exports=order;