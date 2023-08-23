var express_=require("express")
var [addUser,checkUser,viewOrders,createOrder,viewproducts]=require("../controllers/user_controllers")
var routing=express_.Router()
routing.get("/")
routing.post("/register",addUser)
routing.post("/login",checkUser)
routing.get("/vieworders",viewOrders)
routing.post("/Order",createOrder)
routing.delete("/")
routing.get("/viewproducts",viewproducts)

module.exports=routing