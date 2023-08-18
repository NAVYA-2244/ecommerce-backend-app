var User=require("../model/user_model")

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
module.exports=[addUser,checkUser]