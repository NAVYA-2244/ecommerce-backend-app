var express_=require("express")
var getUsers=require("../controllers/adminController")
var adminrouting=express_.Router()
adminrouting.get("/viewUsers",getUsers)


module.exports=adminrouting