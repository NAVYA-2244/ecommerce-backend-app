var express_=require("express")
var routing=require("./routing/user_routing")
var db=require("./database/user_db")
var myapp=express_()
myapp.listen(5000,()=>{ console.log("server created");})

myapp.get("/",(req,res)=>{
    console.log("welcome ecommerces")
    res.send("welcome ecommerces")
})
myapp.use(express_.urlencoded({extended:false}))
myapp.use("/user",routing)