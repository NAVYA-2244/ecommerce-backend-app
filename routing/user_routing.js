var express_=require("express")
var [addUser,checkUser]=require("../controllers/user_controllers")
var routing=express_.Router()
routing.get("/")
routing.post("/register",addUser)
routing.post("/login",checkUser)
routing.put("/")
routing.delete("/")

module.exports=routing