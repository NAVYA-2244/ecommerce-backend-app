var User=require("../model/user_model")
var Order=require("../model/ordermodel")
var products=require("../data/products")
const product = require("../data/products")
var addUser=(req,res)=>{
 User.create(req.body)
 .then((u)=>{
      console.log(u);
      res.send("user created")
 }).catch(()=>{
     console.log("not");
     res.send("not")
 })
}
var checkUser=(req,res)=>{
    console.log(req.body.email,req.body.password);
    if(req.body.email=="admin@gmail.com"&&req.body.password=="admin123"){
       
        res.send("admin") }
    else{
   User.findOne({email:req.body.email,password:req.body.password})
   .then((u)=>{
    console.log(u);
    if(u==null){res.send("no user found")}
    else{res.send(u)}
 
}).catch(()=>{
   console.log("no user found");
   res.send("no user found")
})
  }
}
var viewOrders=(req,res)=>{
    Order.find()
    .then((ord)=>{
console.log(ord);
res.send(ord)
    })
    .catch(()=>{
        console.log("order not found");
        res.send("order not found")
    })
}
var createOrder=(req,res)=>{
    Order.create(req.body)
    .then((u)=>{
        console.log(u);
        res.send("oder created")
   }).catch(()=>{
       console.log("Order not found");
       res.send("Order not found")
   })
}
var viewproducts=(req,res)=>{
    console.log(products);
      res.send(products)
      
}
module.exports=[addUser,checkUser,viewOrders,createOrder,viewproducts]