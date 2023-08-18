var User=require("../model/user_model")

 var getUsers=(req,res)=>{
     User.find()
     .then((users)=>{
        console.log(users);
        res.send(users)
     })
     .catch(()=>{
        console.log("user not found");
        res.send("uer not found")
     })

 }
 module.exports=getUsers