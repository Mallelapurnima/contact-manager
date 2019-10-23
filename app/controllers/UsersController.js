
const User =require('../models/User')

//local host:3005/users/registration
module.exports.register=function(req,res){
      const body=req.body
    const user= new User(body)
    user.save()
    .then(function(user){
        const{ _id,username,email}=user
        res.json({_id,username,email})
    })
        
    .catch(function(err){
        res.send(err)
    })
}
//localhost:3005/users/login
module.exports.login=function(req,res){
    const body=req.body
   User.findByCredentials(body.email,body.password)
   .then(function(user){
       return user.generateToken()
   })


   .then(function(token){
        //res.send(token)
       res.setHeader('x-auth',token).send({})
   })
   .catch(function(err){
       res.send(err)
   })  
}
//localhost:3005/users/account
module.exports.account=function(req,res){
    const{_id,username,email}=req.user

    
     res.send({ _id,username,email})
    
}
//localhost:3005/users/logout
module.exports.logout=function(req,res){
    const {user,token}=req
    U
    ser.findByIdAndUpdate(user._id,{$pull:{tokens:{token:token}}})
    .then(function(){
        res.send({notice:'sucessfully logged out'})
    })
    .catch(function(err){
        res.send(err)
    })
}


